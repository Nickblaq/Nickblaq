'use client';

import { useEffect } from 'react';
import useSWR from 'swr';


async function fetcher(
  input,
  init
){
  const res = await fetch(input, init);
  return res.json();
}

export default function ViewCounter({
  slug,
  trackView,
}) {
  const { data } = useSWR('/api/views', fetcher);
  const viewsForSlug = data && data.find((view) => view.slug === slug);
  const views = new Number(viewsForSlug?.count || 0);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`);

    if (trackView) {
      registerView();
    }
  }, [slug]);

  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {data ? `${views.toLocaleString()} views` : '​'}
    </p>
  );
}