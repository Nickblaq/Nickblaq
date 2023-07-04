import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata= {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-4xl font-serif mb-5">Blog</h1>
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
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col mx-auto gap-1">
              <h2 className='text-2xl font-extrabold underline underline-offset-4'>{post.title}</h2>
              <h3 className=' text-xl font-medium'>{post.summary}</h3>
           
              <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-200  rounded-md px-2 py-1 tracking-tighter">
          {formatDate(post.publishedAt)}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
