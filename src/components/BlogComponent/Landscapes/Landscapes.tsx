
import { useState } from "react";
import { blogs } from "./../../../data/blogs";
import ReusableComponent from "../ReusableComponent/ReusableComponent";

export default function Landscapes() {
  const [selectedCategory] = useState("مناظر طبيعية");

  const filteredPosts = blogs.posts.filter(
    (post) => post.category === selectedCategory,
  );

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
      <ReusableComponent posts={filteredPosts} />
    </div>
  );
}
