import Link from "next/link";
import prisma from "../lib/prisma";

const PostsList = async () => {
  const posts = await prisma.post.findMany()

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`} className="text-xl font-bold">
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
