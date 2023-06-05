import type { Metadata } from 'next';
import Link from 'next/link';
import { Blog, allBlogs} from 'contentlayer/generated';
import { compareDesc, format, parseISO } from "date-fns";
import BlurImage from '@/components/blurimage';
import { getGradient, gradients } from '@/lib/gradients';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on  UI systems, design, and more.',
};



function PostCard( blog: Blog) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="w-full h-full cursor-pointer flex group pb-5 flex-col items-center"
    >
      <h3 className="head-3">
        {blog.title}
      </h3>
      <p className="text-base text-neutral-300">
        {blog.description}
      </p>
      {/* <p className="text-sm ">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")} • {blog.author}
      </p> */}
      
    </Link>
  );
}

export default async function BlogPage() {

  const posts = allBlogs.sort((a, b) =>
  compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
);

  return (
    <section className="w-full h-screen mx-auto flex justify-center">
        <div className="xl:w-[70%] w-full h-full flex flex-col mx-auto ">
        {/* <div className='h-64 w-full relative mx-auto'>
          <BlurImage
          className={cn(
            `${getGradient('blogger')}`
          )}
           fill={true} 
           src={'data:image/png;base64,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'}
           alt='blog home page hero banner blur pics'
            />
          </div> */}

        <div className="w-full h-fit overflow-auto space-b-10 flex flex-col  xl:px-48 px-10 ">
        <h1 className="font-bold text-3xl font-serif mb-5 py-10">Blog</h1>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
      {/* <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))} */}
    </section>
  );
}