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
    <section 
    className="flex flex-col gap-10 leading-loose"
    >
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
              <p className='text-xl font-bold underline underline-offset-4'>{post.title}</p>
              <p className=' text-base font-normal'>{post.summary}</p>
              <div>
                <p className='text-sm font-light'>{formatDate(post.publishedAt)}</p>
                {/* <p>{post.readingTime}</p> */}
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}
