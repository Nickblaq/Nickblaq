import Editor from "@/components/editor";
import { notFound, redirect } from "next/navigation";
import { db } from "@/vercelPg";
import { OutputData } from "@editorjs/editorjs";


const DEFAULT_INITIAL_DATA =
 {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "header",
        "data": {
          "text": "Welcome to My Editor",
          "level": 1
        }
      },
      {
        "type": "image",
        "data": {
          "url": "https://cdn.pixabay.com/photo/2020/03/07/05/18/coffee-4908764_960_720.jpg",
        }
      },
    ],
    "version": "2.27.0"
  }

  const mockData: OutputData = {
    "time": Date.now(),
    "blocks": [
      {
        "id": "zbGZFPM-iI",
        "type": "paragraph",
        "data": {
           "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
        }
     },
     {
      "id": "E6NHh0bC_q",
      "type": "list",
      "data": {
          "style": "ordered",
          "items": [
              "let start first",
              "Let's start second",
              "let start third<br>"
          ]
      }
    },
    ],
    "version": "2.27.0"
  }


const post= {
  id: '1',
  title: 'Szn Title',
  content: mockData,
  published: false
} 

if(!post) {
  notFound()
}



export default function EditorPage () {

    return (
        <>
      <main className="">
        {<Editor
        post= {{
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published,
        }}
         />}
    </main>
        </>
    )
}