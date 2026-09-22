import { ArrowLeft, Clock, ArrowUpRight, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { blogs } from "../../data/blogs";

export default function Articles() {
 
  let postsArc=blogs.posts.slice(3,6)

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-4 md:px-12" dir="rtl">
      <div className="max-w-6xl container">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          {/* Right Side: Title & Badge */}
          <div className="flex flex-col items-start gap-2">
            <div className="inline-flex items-center gap-2 bg-[#1a1410] border border-orange-500/30 px-4 py-2  rounded-full text-sm text-orange-500">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#8c5028]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
              </span>
              <span>مميز</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              مقالات مختارة
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          {/* Left Side: View All Button */}
          <NavLink
            to="/blog"
            className="bg-orange-600 group hover:-translate-y-1 cursor-pointer duration-300  hover:bg-orange-700 text-white font-bold px-7 py-5 rounded-full text-sm transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20 active:scale-95"
          >
            <span> عرض الكل</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300" />
          </NavLink>
        </div>

        {postsArc.map((currentPost) => {
          return (
            <div
              key={currentPost.id}
              className="bg-[#141414] border border-neutral-800/80 rounded-3xl overflow-hidden group grid grid-cols-1 lg:grid-cols-2 hover:border-orange-500 cursor-pointer transition-all duration-300 mb-6"
            >
             
              <div className="relative h-64 lg:h-auto min-h-70 overflow-hidden">
                  <NavLink to={`/blog/${currentPost.slug}`} className=" w-full h-full">
                    <img
                      src={currentPost.image}
                      alt={currentPost.title}
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </NavLink>
                {currentPost.featured && (
                  <div className="absolute top-4 right-4 bg-orange-500/90 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    <span>مميز</span>
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#1f1610] text-orange-500 duration-300 border group-hover:border-orange-500 border-orange-500/20 px-3 py-1 rounded-full text-xs font-semibold">
                      {currentPost.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentPost.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white duration-300 group-hover:text-orange-500 mb-4 leading-snug">
                    {currentPost.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    {currentPost.excerpt}
                  </p>
                </div>

                {/* Bottom Row: Author & Action Link */}
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-6 mt-auto">
                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={currentPost.author.avatar}
                        alt={currentPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                      />
                      <span className="w-2.5 h-2.5 bg-orange-500 border-2 border-[#141414] rounded-full absolute bottom-0 right-0"></span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">
                        {currentPost.author.name}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {currentPost.date}
                      </span>
                    </div>
                  </div>

                  {/* Read Article Link */}
                  <button className="text-orange-500 hover:text-orange-400 text-sm font-semibold flex items-center gap-1 transition-colors group">
                    <span>اقرأ المقال</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
