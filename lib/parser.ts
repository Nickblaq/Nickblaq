

export async function parserToHtml (blockData): Promise<any> {
     try {
        const data = blockData.blocks.map((block) => {
            if (block.type === 'header') {
                      return `<h${block.data.level}>${block.data.text}</h${block.data.level}>/n`
                    }
                    if (block.type === 'paragraph') {
                      return `<p>${block.data.text}<p>/n`
                    }
                    if (block.type === 'image') {
                      return block.data.url
                    }
                    if (block.type === 'list'){
                      
                      switch (block.data.style) {
                        case 'unordered':
                          // <ul></ul>
                          return `<ul> ${block.data.items.map((item) => (`<ol> ${item}</ol>/n`))}</ul>` ;
                  
                        case 'ordered':
                          return `<ul> ${block.data.items.map((item) => (`<li> ${item}</li>/n`))}</ul>`;
                        default: block.data.items
                          break;
                      }
                    }

                    if (block.type === 'quote') {
                        let quoteData = {};

                  block.data
                  .forEach((items) => {
                   items.children.forEach((listItem) => {
                 if (listItem.type === 'text') {
                 quoteData = {
                 data: {
                 alignment: 'left',
                 caption: '',
                  text: listItem.value,
            },
            type: 'quote',
          };
        }
      });
    });

  return quoteData;
                    }
          })
          return data
     } catch (error) {
        throw new Error("Something went wrong, could not transform to html", error)
     }
}


export async function parseToMd(blockData): Promise<any> {
    try {
        const data = blockData.blocks.map((block) => {

            if (block.type === 'header') {
                switch (block.data.level) {
                    case 1:
                      return `# ${block.data.text}\n`;
                    case 2:
                      return `## ${block.data.text}\n`;
                    case 3:
                      return `### ${block.data.text}\n`;
                    case 4:
                      return `#### ${block.data.text}\n`;
                    case 5:
                      return `##### ${block.data.text}\n`;
                    case 6:
                      return `###### ${block.data.text}\n`;
                    default:
                      break;
                  }
            }

            if (block.type === 'paragraph') {
               return `${block.data.text}\n`;
            }

            if (block.type === 'image') {
                return `![${block.data.caption}](${block.data.url} "${block.data.caption}")`.concat('\n');
            }

            if (block.type === 'list'){
                let items = {};
                switch (block.data.style) {
                  case 'unordered':
                    items = block.data.items.map((item) => (`* ${item}`));
              
                    return items;
                  case 'ordered':
                    items = block.data.items.map((item, index) => (`${index + 1} ${item}`));
              
                    return items;
                  default:
                    break;
                }
            }
            if ( block.type === 'quote') {
                return `> ${block.data.text}\n`;
            }

            if (block.type === 'code') {
                return `\`\`\`\n${block.data.code}\n\`\`\`\n`;
            }

            if (block.type === 'link') {
                return `![${block.data.caption}](${block.data.url} "${block.data.caption}")`.concat('\n');
            }
          })
          return data
     } catch (error) {
        throw new Error("Something went wrong, could not transform to html", error)
     }


    // TODO: parseMD function not parsing blockData properly.
    // Goal to be able to parse markdown properly should be avle to convert all blocks to markdown and 
     // ## An easy to use code editor for writing and sharing
// ,Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.
// ,### Key features
// ,* It is a block-styled editor,* It returns clean data output in JSON,* Designed to be extendable and pluggable with a simple API,### What does it mean «block-styled editor»
// ,Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.
// ,There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.
// ,### What does it mean clean data output
// ,Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below
// ,Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.
// ,Clean data is useful to sanitize, validate and process on the backend.
// ,,We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏
}

// export async function parseToBlocks(data) {

// }

// const toMd = {
//     image: imageCom(block){
//         return `![${block.caption}](${block.url} "${block.caption}")`.concat('\n');
//     }
// }

