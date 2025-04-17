import PostsList from "../components/PostsList";
import { Suspense } from "react";

const page = async () => {
  return (
    <main className="text-center pt-14 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="loading...">
        <PostsList />
      </Suspense>
    </main>
  );
};

export default page;
