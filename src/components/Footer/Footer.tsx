import { NavLink, Link } from "react-router-dom";
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiChevronLeft } from "react-icons/hi2";

export default function Footer() {
  // دالة تحكم بالـ Hover والـ Active لعناصر القائمة
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `group flex items-center gap-1.5 transition-all duration-200 ${
      isActive
        ? "text-orange-500 font-medium"
        : "text-neutral-400 hover:text-orange-500"
    }`;

  return (
    <footer
      className="relative bg-[#0a0a0a] text-neutral-400 text-sm border-t border-neutral-800/80 pt-16 pb-8"
      dir="rtl"
    >
      <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/60">
          {/* العمود الأول: اللوجو والوصف ومواقع التواصل */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-600/20">
                ع
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                عدسة
              </span>
            </div>

            <p className="text-xs leading-relaxed text-neutral-400">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
              ونشائح عملية لتطوير مهاراتكم.
            </p>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.youtube.com/@adasah"
                target="_blank"
                aria-label="YouTube"
                className="p-2.5 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <FaYoutube className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/company/adasah"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/adasah"
                target="_blank"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href="https://x.com/adasah"
                target="_blank"
                aria-label="X"
                className="p-2.5 rounded-lg bg-[#141414] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: استكشف */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base flex items-center gap-2">
              {/* النقطة المضيئة البرتقالية بجانب العنوان */}
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50 inline-block"></span>
              استكشف
            </h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <NavLink to="/" className={getNavLinkClass}>
                  {({ isActive }) => (
                    <>
                      {/* السهم يظهر عند التفعيل أو عند الوقوف بالماوس Hover */}
                      <HiChevronLeft
                        className={`w-4 h-4 text-orange-500 transition-transform ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                        }`}
                      />
                      الرئيسية
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={getNavLinkClass}>
                  {({ isActive }) => (
                    <>
                      <HiChevronLeft
                        className={`w-4 h-4 text-orange-500 transition-transform ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                        }`}
                      />
                      المدونة
                    </>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={getNavLinkClass}>
                  {({ isActive }) => (
                    <>
                      <HiChevronLeft
                        className={`w-4 h-4 text-orange-500 transition-transform ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                        }`}
                      />
                      من نحن
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base flex items-center gap-2">
              {/* النقطة المضيئة البرتقالية */}
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50 inline-block"></span>
              التصنيفات
            </h3>
            <ul className="flex flex-col gap-3 text-xs">
              <li>
                <Link
                  to="/blog/lighting"
                  className="group flex items-center gap-1.5 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <HiChevronLeft className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  إضاءة
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/portrait"
                  className="group flex items-center gap-1.5 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <HiChevronLeft className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  بورتريه
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/landscapes"
                  className="group flex items-center gap-1.5 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <HiChevronLeft className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  مناظر طبيعية
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/technology"
                  className="group flex items-center gap-1.5 text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <HiChevronLeft className="w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: ابقى على اطلاع */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base flex items-center gap-2">
              {/* النقطة المضيئة البرتقالية */}
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50 inline-block"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-xs text-neutral-400">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-[#141414] border border-neutral-800 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 placeholder-neutral-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-md shadow-orange-600/20 active:scale-95"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        {/* الحقوق والروابط القانونية السفلية */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-500">
          <p className="flex items-center gap-1">
            © 2026 عدسة. صنع بكل <span className="text-orange-500">🧡</span>{" "}
            جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-neutral-300 transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/terms"
              className="hover:text-neutral-300 transition-colors"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
