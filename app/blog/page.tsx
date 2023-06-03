
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on web technology.',
};

export default async function BlogPage() {
  return (
    <section className='h-screen'>
      <h1 className="leading-10 mt-10 scroll-m-20 pb-2 text-3xl md:text-4xl font-semibold md:font-extrabold tracking-normal transition-colors first:mt-0">Blog</h1>
        <h2 className='leading-loose tracking-wider mt-5 xl:mt-8 2xl:mt-10 text-base md:text-xl'>Blog coming soon</h2>
    
    </section>
  );
}