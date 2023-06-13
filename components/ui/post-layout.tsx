import { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export function PostLayout({ children }: BlogLayoutProps) {
  return <div>{children}</div>;
}
