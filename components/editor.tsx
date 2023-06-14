'use client'

import { useEffect, useState, useRef, useCallback, ChangeEventHandler, Suspense } from "react";
import { useRouter } from "next/navigation";
import EditorJS, { OutputData} from "@editorjs/editorjs";
import TextareaAutosize from "react-textarea-autosize";
import { Button, buttonVariants } from "./ui/button";
import "@/styles/editor.css"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { PostTable } from "@/vercelPg";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { postPatchSchema } from "@/lib/validate";

import { Skeleton } from "./ui/skeleton";
import { parseToMd } from "@/lib/parser";
import EditorTextParser from "./text-parser";
import { uploadImage } from "@/lib/utils";

const exampleData = {
  time: 1635603431943,
  blocks: [
    {
      id: "sheNwCUP5A",
      type: "header",
      data: {
        text: "An easy to use code editor for writing and sharing",
        level: 2
      }
    },
    {
      id: "12iM3lqzcm",
      type: "paragraph",
      data: {
        text:
          "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
      }
    },
    {
      id: "fvZGuFXHmK",
      type: "header",
      data: {
        text: "Key features",
        level: 3
      }
    },
    {
      id: "xnPuiC9Z8M",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "It is a block-styled editor",
          "It returns clean data output in JSON",
          "Designed to be extendable and pluggable with a simple API"
        ]
      }
    },
    {
      id: "-MhwnSs3Dw",
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3
      }
    },
    {
      id: "Ptb9oEioJn",
      type: "paragraph",
      data: {
        text:
          'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
      }
    },
    {
      id: "-J7nt-Ksnw",
      type: "paragraph",
      data: {
        text:
          'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
      }
    },
    {
      id: "SzwhuyoFq6",
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3
      }
    },
    {
      id: "x_p-xddPzV",
      type: "paragraph",
      data: {
        text:
          "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
      }
    },
    {
      id: "6W5e6lkub-",
      type: "paragraph",
      data: {
        text:
          'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
      }
    },
    {
      id: "eD2kuEfvgm",
      type: "paragraph",
      data: {
        text:
          "Clean data is useful to sanitize, validate and process on the backend."
      }
    },
    {
      id: "N8bOHTfUCN",
      type: "delimiter",
      data: {}
    },
    {
      id: "IpKh1dMyC6",
      type: "paragraph",
      data: {
        text:
          "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
      }
    }
  ]
};
export function EditorSkeleton() {
  return (
    <div className="flex flex-col px-4 mx-autogap-10">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-[38px] w-[90px]" />
        <Skeleton className="h-[38px] w-[80px]" />
      </div>
      <div className="mx-auto w-[800px] space-y-6">
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[20px] w-2/3" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </div>
    </div>
  )
}


export async function fileDownloadHandler(content, fileName) {
  const file = new File([content], fileName, { type: 'text/markdown', endings: 'transparent' });
  // const filedir = `/content/${fileName}`
  //   const writer = await writeFile(filedir, content)
  //   console.log(writer)
  const url = URL.createObjectURL(file);

  const element = document.createElement('a');
  document.body.appendChild(element);
  element.href = url;
  element.download = fileName;
  element.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(element);
}
type dataType = OutputData
interface EditorProps {
  post: Pick<PostTable, "id" | "title" | "content" | "published">
}

type FormData = z.infer<typeof postPatchSchema>

type BlockType = 'header' | 'paragraph' | 'image'; // Define the possible block types

// function getBlockTransformer (block: any): BlockType {
  
// }

export default function Editor ( {post }: EditorProps) {

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  

  const ref = useRef<EditorJS>();
  const router = useRouter()

//  const [editorData, setEditorData] = useState<OutputData>()
  const [isPreview, setPreview] = useState<OutputData>(exampleData);
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)



  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<OutputData>();
  // const [isPublished, setPublished] = useState<boolean>(false)
  // const [blocks, setBlocks] = useState<OutputData>();
  function toggleEditMode() {
		if (isEditMode) {
			setIsEditMode(false);
			console.log("Edit mode is now disabled");
		} else {
			setIsEditMode(true);
			console.log("Edit mode is now enabled");
		}
	}


  const initEditor = 
        useCallback(
          async() => {
          const EditorJS = (await import("@editorjs/editorjs")).default
          const Header = (await import("@editorjs/header")).default
          const Paragraph = (await import("@editorjs/paragraph")).default
          const Quote = (await import("@editorjs/quote")).default
          const Image = (await import("@editorjs/image")).default
          const Embed = (await import("@editorjs/embed")).default
          const Table = (await import("@editorjs/table")).default
          const List = (await import("@editorjs/list")).default
          const Code = (await import("@editorjs/code")).default
          const LinkTool = (await import("@editorjs/link")).default
          const InlineCode = (await import("@editorjs/inline-code")).default
          
          
         const body = isPreview
            
            if (!ref.current  && isEditMode === true ) {
              const editor = new EditorJS ({
                onReady: () => {
                  ref.current = editor
                },
                // async onChange (api) {
                //   if (ref.current) {
                //     const savedData = await api.saver.save();
                //     console.log(savedData)
                //     if (onChange) {
                //       onChange(savedData);
                //     }
                //   }
                // },
                holder: "editor",
                data: body,
                // tools,
                tools: {
                  code: Code,
                  embed: Embed,
                  header: {
                    class: Header,
                    inlineToolbar: true
                  },
                  linkTool: {
                    class: LinkTool,
                    config: {
                      endpoint: 'https://example.com', // Your backend endpoint for url data fetching,
                    },
                    inlineToolbar: true
                  },
                  list: List,
                  inlineCode: InlineCode,
                  image: {
                    class: Image,
                    config: {
                      uploader: {
                        uploadByFile(file) {
                          return uploadImage(file);
                        },
                      },
                    },
                  },
                  paragraph: {
                    class: Paragraph,
                    inlineToolbar: true
                  },
                  table: Table,
                  quote: Quote
                },
                placeholder: 'Write something here...',
                inlineToolbar: true,
                hideToolbar: false
              })
            }
        }, [post])

        useEffect(() => {
          if (typeof window !== "undefined") {
            setIsMounted(true)
          }
        }, [])
      
        useEffect(() => {
          if (isMounted && isEditMode === true) {
            initEditor()
      
            return () => {
              ref.current?.destroy()
              ref.current = undefined
            }
          }
        }, [isMounted, initEditor, isEditMode]);

        if (!isMounted) {
          return null
        }


      async function onSubmit(data: FormData) {
        setIsSaving(true)
    // console.log('form data', data)
        const blockData = await ref.current?.save()
        if (blockData ) { setPreview(blockData) }
        
          
        setIsSaving(false)
        router.refresh()
    
        return 
        // toast({
        //   description: "Your post has been saved.",
        // })
      }
      const TextParser = <EditorTextParser editorData={isPreview} />
      const Editor =   <div id='editor' className="min-h-[500px] h-full w-full text-left indent-2" />
      const RenderToggle = () => {
        if (isEditMode) {
          return Editor
        } 
        return TextParser
      }
      const buttonmode =  () => {
        if (isEditMode) {
          return 'draft'
        }
        return 'edit'
      } 

      return (
        <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div 
        className="flex flex-col mx-auto px-2 md:px-4 gap-10 w-full h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden">
        <div className="flex w-full items-center justify-between gap-6 border-b border-muted-foreground pb-4">
          <div className="flex items-center gap-1 md:px-2">
          <Link href='/'
          className={cn(buttonVariants())}
          >
            <>
            <Icons.chevronLeft className="h-4 w-4" />
            Back
            </>
          </Link>
          <p className="text-lg text-muted-foreground leading-loose">
          {post.published ? 'Published' : 'Draft'}
          </p>
          </div>
          <div className="flex items-center gap-6">
          <button type="submit" className={cn(buttonVariants({variant: 'secondary'}))}>
            {isSaving && (
              <Icons.spinner className=" h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
          
          <Button onClick={toggleEditMode}  className={cn(buttonVariants({variant: buttonmode()}),
          // `hover: ${isEditMode ? 'bg-primary' : 'bg-secondary'}`
          )}>
            {isEditMode ? (
               <Icons.eye className=" h-4 w-4" />
            ) :
            (
              <Icons.pencil className=" h-4 w-4" />
            )
            }
            <span>{isEditMode ? 'Preview' : 'Edit'}</span>
          </Button>
          </div>
        </div>
   
        {/* <TextareaAutosize 
        // style={{height: '60px', important: true }}
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl text-gray-700/80 font-bold focus:outline-none"
        autoFocus
        id="title"
        defaultValue={post.title}
        placeholder="Enter your post title"
        {...register("title")}
        /> */}
        <div>
        <textarea
        readOnly = {!isEditMode} 
        autoFocus ={!isEditMode}
        id="title"
        defaultValue={post.title}
        placeholder="Enter your post title"
         className={cn(
          "w-full pl-4 content-center resize-none appearance-none overflow-hidden bg-transparent text-4xl text-gray-700/80 font-bold focus:outline-none h-12 ",
          !isEditMode && "cursor-not-allowed text-gray-900"
         )}
          {...register("title")}
          />
      
         <Suspense fallback={<EditorSkeleton />}>
         {/* {
            isEditMode  && initEditor !== null &&  */}
            {RenderToggle()}
            {/* // } */}
      </Suspense> 
      </div>
      {/* {
            isEditMode  && initEditor !== null &&    
        <EditorTextParser editorData={editorData} />
      } */}
      {/* <p className="text-sm text-gray-500">
        Use{" "}
        <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
          Tab
        </kbd>
        to open the command menu.
      </p> */}
        </div>
     
      </form>
        </>
      )}

