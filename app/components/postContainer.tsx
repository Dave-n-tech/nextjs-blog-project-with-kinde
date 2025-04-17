import { notFound } from "next/navigation";
import prisma from "../lib/prisma";

const PostContainer = async ({ id }: { id: string }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  });

  if(!post) {
    notFound()
  }

  return (
    <>
      <h1 className="text-5xl mb-7 font-semibold">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </>
  );
};

export default PostContainer;
