import { blogs } from "../../../data/blogs";
import ReusableComponent from "../ReusableComponent/ReusableComponent";

export default function AllArticles() {
  let filteredPosts = blogs.posts;
  
  return (
    <div>
      <ReusableComponent posts={filteredPosts}  />
    </div>
  );
}
