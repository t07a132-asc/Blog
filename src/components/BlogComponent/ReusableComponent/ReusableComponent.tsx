import { useState, useEffect } from "react";
import {
  LayoutGrid,
  List,
  Clock,
  ArrowUpLeft,
  ChevronRight,
  ChevronLeft,
  
  Frown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

// تعريف الـ Interface الخاص بـ Post وببيانات المكون
export interface Post {
  id: number | string;
  slug?: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

interface ArticleGridProps {
  posts: Post[];
  onReset?: () => void; // تم إضافة prop إعادة التعيين هنا
}

export default function ArticleGrid({ posts}: ArticleGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);


  const productsPerPage = 6;
  const totalPages = Math.ceil(posts.length / productsPerPage);

  // العودة للصفحة الأولى تلقائياً إذا تغيرت قائمة المقالات بسبب الفلترة
  useEffect(() => {
    setCurrentPage(1);
  }, [posts]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      className="bg-[#0d0d0d] w-full text-white py-8 px-4 md:px-12"
      dir="rtl"
    >
      <div className="max-w-6xl container mx-auto">
        {/* Top Controls Bar: View Toggle & Counter */}
        <div className="flex items-center justify-between mb-6 border-b border-neutral-800/60 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-orange-600 text-white"
                  : "bg-[#141414] text-neutral-400 hover:text-white"
              }`}
              title="عرض الشبكة"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-orange-600 text-white"
                  : "bg-[#141414] text-neutral-400 hover:text-white"
              }`}
              title="عرض القائمة"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <span className="text-xs text-neutral-400 font-medium">
            عرض <span className="text-white font-bold">{posts.length}</span>{" "}
            مقالات
          </span>
        </div>

        {/* Empty State: في حالة عدم وجود نتائج للفلترة */}
        {posts.length === 0 ? (
          <div
            className="min-h-100 w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-neutral-800/80"
            dir="rtl"
          >
            {/* 1. الأيقونة الدائرية */}
            <div className="w-24 h-24 rounded-full bg-[#141414] border border-neutral-800/80 flex items-center justify-center mb-6 shadow-inner">
              <Frown className="w-12 h-12 text-neutral-500 stroke-[1.5]" />
            </div>

            {/* 2. العنوان الرئيسي */}
            <h3 className="text-2xl font-black text-white mb-2 tracking-wide">
              لا توجد مقالات
            </h3>

            {/* 3. النص الفرعي */}
            <p className="text-neutral-400 text-sm max-w-sm mb-8 leading-relaxed font-medium">
              حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
            </p>

            {/* 4. زر إعادة التعيين */}
           
          </div>
        ) : (
          /* Cards Grid / List View */
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                : "flex flex-col gap-6 mb-12"
            }
          >
            {currentProducts.map((post) => (
              <div
                key={post.id}
                className={`bg-[#141414] border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 group flex ${
                  viewMode === "list" ? "flex-col md:flex-row" : "flex-col"
                }`}
              >
                {/* Thumbnail Container */}
                <div
                  className={`relative overflow-hidden ${
                    viewMode === "list" ? "md:w-72 h-52" : "h-48"
                  }`}
                >
                  <NavLink
                    to={`/blog/${post.slug || post.id}`}
                    className="w-full h-full block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </NavLink>
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/10 font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    {/* Meta: Read Time & Date */}
                    <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-neutral-500" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-orange-500 transition-colors mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer: Author & Action Button */}
                  <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-neutral-700"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white">
                          {post.author.name}
                        </span>
                        <span className="text-[10px] text-neutral-500">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <NavLink
                      to={`/blog/${post.slug || post.id}`}
                      className="bg-[#1c1714] text-orange-500 p-2 rounded-full border border-orange-500/20 hover:bg-orange-600 hover:text-white transition-all group-hover:translate-x-0.5"
                    >
                      <ArrowUpLeft className="w-4 h-4" />
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Pagination Section */}
        {totalPages > 1 && posts.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2" dir="ltr">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 rounded-lg font-bold text-sm flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? "bg-orange-600 text-white"
                        : "bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs text-neutral-500">
              صفحة {currentPage} من {totalPages}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
