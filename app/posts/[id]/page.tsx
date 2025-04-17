import PostContainer from "@/app/components/postContainer";
import { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <main className="px-10 pt-24 text-center">
      <Suspense fallback="Loading...">
        <PostContainer id={id} />
      </Suspense>
    </main>
  );
};

export default page;
