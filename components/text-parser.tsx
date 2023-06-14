// edjsHTML tranforms editor js blocks to html
import edjsHTML from "editorjs-html";
// this function parses strings (html elements) to html
import parse from "html-react-parser";
const edjsParser = edjsHTML();


export default function EditorTextParser({ editorData }) {
    // array of html elements
    const html = edjsParser.parse(editorData);
  
    return <div className="prose prose-quoteless prose-neutral dark:prose-invert h-full overflow-y-auto overflow-x-hidden text-left indent-2">{parse(html.join(""))}</div>;
  }