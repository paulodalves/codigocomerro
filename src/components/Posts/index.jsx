
import posts  from '../../posts.json';

import { Post } from "../Post"

import "./style.css";

export function Posts() {

  return (
    <ul>
        {posts.posts.map((post) => {
            return <Post title={post.title} description={post.description} />
        })}
      
     </ul>
  );
}
