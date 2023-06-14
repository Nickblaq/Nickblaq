import ms from 'ms'
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}


export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const uploadImage = async (file) => {
  // Our application only allows GIF, PNG, and JPEG images
// const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
// const allAllowed = Array.from(file).every((f) =>
//     allowedFileTypes.includes(f.type)
//   );
  const createUrl = URL.createObjectURL(file)
  return {
    success: 1,
    file: {
      url: createUrl,
    },
  }


  // const formData = new FormData();
  // formData.append("upload_preset", "not_a_notion_clone");
  // formData.append("file", file);

  // const options = {
  //   method: "POST",
  //   body: formData,
  // };

  // const response = await fetch(process.env.REACT_APP_UPLOAD_IMAGE_URL, options);
  // const data = await response.json();
  // return {
  //   success: 1,
  //   file: {
  //     url: data.secure_url,
  //   },
  // };
};

export const fetUrlMetadata = async (urlLink: string) => {
  const response = await fetch(urlLink)
  const data = await response.json()
  return {
    success: 1,
    file: {
      url: data.secure_url,
    },
  }
}
