import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mdx } from 'components/mdx';
import { allBlogs } from 'contentlayer/generated';

import Balancer from 'react-wrap-balancer';


export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}


export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }



  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="font-bold text-5xl font-serif w-full">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="">
        <div className="">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        
      </div>
      <Mdx code={post.body.code} />
    </section>
  );
}