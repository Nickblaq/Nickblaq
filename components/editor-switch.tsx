// 'use client'
// import { useState } from "react";
// import Editor from "./editor";
// import EditorTextParser from "./text-parser"

// export default function EditorSwitch ({ editorData }) {
//     const [editMode, setEditMode] = useState<boolean>(false);
//     const [data, setData] = useState(editorData)

//     function toggleEditMode() {
// 		if (editMode) {
// 			setEditMode(false);
// 			console.log("Edit mode is now disabled");
// 		} else {
// 			setEditMode(true);
// 			console.log("Edit mode is now enabled");
// 		}
// 	}


//     return (
//         <>
//         {!editMode ? (
//             <Editor post={data} setData={setData} />
//         ) :
//         (
//             <EditorTextParser editorData={editorData} />
//         )
//         }
//         </>
//     )
// }
