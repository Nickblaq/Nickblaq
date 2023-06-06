interface BlogLayoutProps {
    children: React.ReactNode
  }
  
  export default function BlogLayout({ children }: BlogLayoutProps) {
    return <div className="mx-auto max-w-5xl px-2">{children}</div>
  }