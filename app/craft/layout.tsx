interface CraftLayoutProps {
    children: React.ReactNode
  }
  
  export default function CraftLayout({ children }: CraftLayoutProps) {
    return <div className="flex flex-col items-center min-h-[73vh] leading-loose my-auto max-w-5xl px-2">{children}</div>
  }