// "use client";

// import { useEffect, useState } from 'react';

import GET from '../app/api/posts/route';
import PostList from '../app/ui/PostsList';

export default function Home() {
  const fetchPosts = async () => {
    const data = await GET();
    console.log(data);
  };


  return <PostList posts={fetchPosts}></PostList>
}
