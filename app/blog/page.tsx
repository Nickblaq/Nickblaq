import Link from "next/link";
import { Icons } from "@/components/icons";
import Balancer from "react-wrap-balancer";
import { Separator } from "@/components/ui/separator";
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on web technology.',
};



const allBlogs = [
  {
    title: 'Blog Post 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'blog-post-1',
    publishedAt: new Date('2022-01-01'),
    views: 1000
  },
  {
    title: 'Blog Post 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'blog-post-2',
    publishedAt: new Date('2022-01-02'),
    views: 2000
  },
  {
    title: 'Blog Post 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'blog-post-3',
    publishedAt: new Date('2022-01-03'),
    views: 3000
  },
  {
    title: 'Blog Post 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'blog-post-4',
    publishedAt: new Date('2022-01-04'),
    views: 4000
  },
  {
    title: 'Blog Post 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'blog-post-5',
    publishedAt: new Date('2022-01-05'),
    views: 5000
  }
]
export default async function Blog() {
  return (
    <section className=' flex flex-col items-center gap-10'>
      <h1 className="head-1 pb-10">Blog</h1>
     
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <>
          <Link
            key={post.slug}
            className="flex flex-col justify-center gap-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <h2 className="head-3 underline">{post.title}</h2>
              <h3 className=" text-base">{post.desc}</h3>
              <div className="flex items-center gap-6">

              <div className="flex items-center gap-2 h-4 ">
                <Icons.timer className="h-4 w-4"/>
                <p>{post.views}{" "}views</p>
              </div>

              <div className="flex items-center gap-2">
                <Icons.eye className="h-4 w-4"/>
                <p>{post.publishedAt.toDateString()}{" "}</p>
              </div>
              </div>
            </div>
          </Link>
          <Separator/>
          </>
        ))}
    </section>
  );
}