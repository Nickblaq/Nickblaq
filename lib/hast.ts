import {read} from 'to-vfile'
import {reporter} from 'vfile-reporter'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'



    /// take array of node objects and convert to hast tree object 

    async function hastify(node: any) {
        if (node.type === 'text') {
            return node.value
        }
        if (node.type === 'element') {
            const children = await Promise.all(node.children.map(hastify))
            return {
                ...node,
                children
            }
        }
    }

    // convert hast tree to md string using remark and rehype 

    async function toMarkdown(tree: any) {
        const file = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeDocument)
            .use(rehypeFormat)
            .use(rehypeStringify)
            .process( await read(tree))
            console.log(String(file))  
    }

   const blocks = [
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
        },].toString()                      

    interface Block {
        id: string;
        type: string;
        data: {
          text: string;
          level?: number;
        };
      }``
      
    //   async function toMdx(blocks: Block[]) {
    //     const file = await unified()
    //       .use(remarkParse)
    //       .use(remarkRehype)
    //       .use(rehypeDocument)
    //       .use(rehypeFormat)
    //       .use(rehypeStringify)
    //       .process(blocks.map((block) => block.data.text).join('\n\n'));
      
    //     console.log(String(file));
    //   }
    
    
      export async function testMdx () {
        const tomark = await toMarkdown(blocks)
        // const tomx  = await toMdx(blocks)
        console.log(tomark)
        // console.log(tomx)
      }