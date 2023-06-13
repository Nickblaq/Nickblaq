

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
                return `[${block.data.ctext}](${block.data.url})`;
            }
          })
          return data
     } catch (error) {
        throw new Error("Something went wrong, could not transform to html", error)
     }
}

// export async function parseToBlocks(data) {

// }

// const toMd = {
//     image: imageCom(block){
//         return `![${block.caption}](${block.url} "${block.caption}")`.concat('\n');
//     }
// }

