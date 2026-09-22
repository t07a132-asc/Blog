import { useParams, Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import {
  Clock,
  Calendar,
  Share2,
  Bookmark,
  List,
  Send,
  ArrowLeft,
  Star,
  Home,
  ChevronLeft,
} from "lucide-react";

export default function BlogDetails() {
  const { slug } = useParams();

  // جلب المقال المختار بـ slug
  const post = blogs.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">المقال غير موجود</h2>
        <Link to="/blog" className="text-orange-500 hover:underline text-sm">
          العودة للمقالات
        </Link>
      </div>
    );
  }

  // تقسيم محتوى المقال لاستخراج جدول المحتويات والفقرات
  const rawSections = post.content.split("\n\n## ");
  const intro = rawSections[0];
  const sections = rawSections.slice(1).map((sec, idx) => {
    const lines = sec.split("\n\n");
    const title = lines[0].replace("## ", "").trim();
    const body = lines.slice(1).join("\n\n");
    return { id: `section-${idx}`, title, body };
  });

  // مقالات مقترحة
  const relatedPosts = blogs.posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white py-10 px-4 md:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* 1. قسم الهيدر */}
        <div className="relative w-full min-h-125 md:min-h-150 flex flex-col justify-between pb-12 pt-8 px-4 md:px-8 overflow-hidden">
          {/* 1. صورة الخلفية كاملة وواضحة */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${post.image})` }}
          />

          {/* 2. طبقة تظليل داكنة لإبراز النصوص والتدرج الأسفل */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

          {/* 3. الـ Breadcrumb في أعلى اليمين */}
          <div className="relative z-10 flex justify-start w-full">
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-neutral-800 text-xs px-4 py-2 rounded-full shadow-lg"
            >
              <Link
                to="/"
                className="text-neutral-400 hover:text-white transition-colors flex items-center"
              >
                <Home className="w-3.5 h-3.5" />
              </Link>

              <ChevronLeft className="w-3.5 h-3.5 text-neutral-500" />

              <Link
                to="/blog"
                className="text-neutral-300 hover:text-white font-medium transition-colors"
              >
                المدونة
              </Link>

              {post.category && (
                <>
                  <ChevronLeft className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="text-orange-500 font-bold">
                    {post.category}
                  </span>
                </>
              )}
            </nav>
          </div>

          {/* 4. المحتوى في المنتصف */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-5 text-center mt-auto">
            {/* التصنيف ووقت القراءة */}
            <div className="flex items-center justify-center gap-3">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {post.category}
              </span>
              <span className="text-neutral-300 text-xs flex items-center gap-1 font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                {post.readTime}
              </span>
            </div>

            {/* عنوان المقال */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
              {post.title}
            </h1>

            {/* كارت الكاتب المظلل الزجاجي */}
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-neutral-800/80 px-4 py-2 rounded-2xl shadow-xl mt-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full border border-orange-500/50 object-cover"
              />
              <div className="text-right">
                <h4 className="text-sm font-bold text-white">
                  {post.author.name}
                </h4>
                <p className="text-[11px] text-neutral-400">
                  {post.author.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. محتوى المقال والسايدبار */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <main className="lg:col-span-8 space-y-8">
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 text-neutral-300 leading-relaxed text-sm">
              <p>{intro}</p>
            </div>

            <div className="space-y-6">
              {sections.map((sec) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 scroll-mt-6"
                >
                  <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                    {sec.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* الوسوم والمشاركة */}
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-neutral-500 font-bold">
                  الوسوم:
                </span>
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1a1a1a] border border-neutral-800 text-neutral-400 px-3 py-1 rounded-lg text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4">
                <span className="text-xs text-neutral-400 font-bold flex items-center gap-1.5">
                  <Share2 className="w-4 h-4 text-orange-500" /> شارك المقال
                </span>
                <button className="p-2 rounded-lg bg-[#1a1a1a] border border-neutral-800 text-neutral-400 hover:text-white transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* كارت الكاتب */}
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-6 flex items-start gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full border border-neutral-700 object-cover"
              />
              <div className="space-y-1">
                <span className="text-[10px] text-orange-500 font-bold">
                  كاتب المقال
                </span>
                <h3 className="text-base font-bold text-white">
                  {post.author.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  {post.author.role} - شغوف بمشاركة المعرفة والخبرات في مجالات
                  التصوير والفن البصري.
                </p>
              </div>
            </div>
          </main>
          {/* السايدبار الأيسر */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            {/* محتويات المقال */}
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-orange-500 font-bold mb-4 text-sm border-b border-neutral-800/80 pb-3">
                <List className="w-4 h-4" />
                <span>محتويات المقال</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-400">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="hover:text-orange-500 transition-colors block py-1"
                    >
                      • {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* تفاصيل سريعة */}
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 flex justify-around text-center">
              <div>
                <Calendar className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                <span className="text-[10px] text-neutral-500 block">
                  تاريخ النشر
                </span>
                <span className="text-xs font-bold text-neutral-300">
                  {post.date}
                </span>
              </div>
              <div className="border-r border-neutral-800" />
              <div>
                <Clock className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                <span className="text-[10px] text-neutral-500 block">
                  وقت القراءة
                </span>
                <span className="text-xs font-bold text-neutral-300">
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* النشرة البريدية */}
            <div className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 text-center space-y-3">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto">
                <Send className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">لا تفوت جديدنا</h4>
              <p className="text-xs text-neutral-400">
                اشترك للحصول على أحدث المقالات والدروس.
              </p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-xl text-xs transition-colors">
                اشترك الآن
              </button>
            </div>
          </aside>

          {/* الجزء الأيمن: النص الرئيسي */}
        </div>

        {/* 3. مقالات قد تعجبك */}
        <div className="space-y-6 pt-6 border-t border-neutral-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              مقالات قد تعجبك
            </h3>
            <Link
              to="/blog"
              className="text-xs text-orange-500 hover:underline flex items-center gap-1"
            >
              عرض الكل <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                to={`/blog/${relPost.slug}`}
                className="bg-[#141414] border border-neutral-800/80 rounded-2xl overflow-hidden group hover:border-orange-500 transition-all flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={relPost.image}
                    alt={relPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {relPost.featured && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" /> مميز
                    </div>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] text-orange-500 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full font-semibold">
                      {relPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {relPost.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3 text-xs text-neutral-500">
                    <span>{relPost.author.name}</span>
                    <span>{relPost.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
