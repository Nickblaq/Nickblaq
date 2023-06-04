import { Icons } from '@/components/icons';
import { OutputBlockData } from '@editorjs/editorjs';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';



// const allBlogs = [
//     {
//       title: 'Blog Post 1',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       slug: 'blog-post-1',
//       publishedAt: new Date('2022-01-01'),
//       views: 1000
//     },
//     {
//       title: 'Blog Post 2',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       slug: 'blog-post-2',
//       publishedAt: new Date('2022-01-02'),
//       views: 2000
//     },
//     {
//       title: 'Blog Post 3',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       slug: 'blog-post-3',
//       publishedAt: new Date('2022-01-03'),
//       views: 3000
//     },
//     {
//       title: 'Blog Post 4',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       slug: 'blog-post-4',
//       publishedAt: new Date('2022-01-04'),
//       views: 4000
//     },
//     {
//       title: 'Blog Post 5',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       slug: 'blog-post-5',
//       publishedAt: new Date('2022-01-05'),
//       views: 5000
//     }
//   ]


const allBlogs: OutputBlockData[] = [
      {
        "id": "zbGZFPM-iI",
        "type": "paragraph",
        "data": {
           "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
        }
     },
]

const posts = [ {
  id: '1',
  title: 'Blog Post 5',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  slug: 'blog-post-5',
  content: allBlogs,
  published: false,
  publishedAt: new Date('2022-01-05'),
   views: 5000
} ]

// 

// interface Post {
//   id: string;
//   title: string;
//   desc: string;
//   slug: string;
//   content: OutputData["blocks"];
//   published: boolean;
//   publishedAt: Date;
//   views: number;
// }
  

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
    ;
 

    return (
        <>
        <section className='min-h-screen'>
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt.toDateString()}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
  <p className='text-neutral-500 dark:text-neutral-400'>{post.views}{" "}views</p>
      </div>
      <div className="flex items-center gap-6">


</div>
       {/* <p>{post.content}</p> */}
      {/* <Mdx code={post.body.code} tweets={tweets} /> */}
    </section>
        </>
    )
}