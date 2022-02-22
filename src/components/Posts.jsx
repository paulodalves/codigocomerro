
import { posts } from "../posts.json";

import { Post } from "./Post";

export function Posts() {
  return (
    <ul>
        {posts.map((post) => {
            return <Post title={post.title} description={post.description} />
        })}
     </ul>
  );
}
