interface CraftLayoutProps {
    children: React.ReactNode
  }
  
  export default function CraftLayout({ children }: CraftLayoutProps) {
    return <div className="mx-auto w-full max-w-5xl px-2">{children}</div>
  }