import { NavLink } from "react-router-dom";

import { FaFolderOpen } from "react-icons/fa";
import { ArrowLeft, Info, Newspaper, Users, PenTool } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section
        className="relative   bg-[#0d0d0d] text-white py-20 px-4 text-center overflow-hidden border-b border-neutral-800"
        dir="rtl"
      >
        {/* Grid Pattern Background */}
        <div className="container">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2  bg-orange-500/10  border border-orange-500/30 px-5 py-1.5 rounded-full text-xs font-medium text-orange-200">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c5028]"></span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
              </div>

              <span className="text-sm">مرحباً بك في عدسة</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight py-6">
              اكتشف <span className="text-orange-500">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed">
              انغمس في أسرار المحترفين ونشائح عملية لتطوير مهاراتك في التصوير.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 ">
              <NavLink
                to="/blog"
                className="bg-orange-600 group hover:-translate-y-1 cursor-pointer duration-300  hover:bg-orange-700 text-white font-bold px-7 py-5 rounded-full text-sm transition-all flex items-center gap-2 shadow-lg shadow-orange-600/20 active:scale-95"
              >
                <span>استكشف المقالات</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 duration-300" />
              </NavLink>

              <NavLink
                to="/about"
                className="bg-transparent cursor-pointer  hover:bg-orange-600/10 hover:border-orange-500 hover:text-orange-500 border border-white/50 text-white font-medium px-8 py-5 rounded-full text-sm transition-all flex items-center gap-2 active:scale-95"
              >
                <Info className="w-4 h-4 " />
                <span className="text-lg">اعرف المزيد</span>
              </NavLink>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
              <div className="bg-[#141414]/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                <Newspaper className="w-9 h-9 text-orange-500 mb-1 text-5xl" />
                <span className="text-2xl font-bold text-orange-500">+50</span>
                <span className="text-xs text-neutral-400">مقالة</span>
              </div>

              <div className="bg-[#141414]/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                <Users className="w-9 h-9 text-orange-500 mb-1 text-5xl" />
                <span className="text-2xl font-bold text-orange-500">
                  +10ألف
                </span>
                <span className="text-xs text-neutral-400">قارئ</span>
              </div>

              <div className="bg-[#141414]/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                <FaFolderOpen className="w-9 h-9 text-orange-500 mb-1 text-5xl" />
                <span className="text-2xl font-bold text-orange-500">4</span>
                <span className="text-xs text-neutral-400">تصنيفات</span>
              </div>

              <div className="bg-[#141414]/90 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer">
                <PenTool className="w-9 h-9 text-orange-500 mb-1 text-5xl" />
                <span className="text-2xl font-bold text-orange-500">6</span>
                <span className="text-xs text-neutral-400">كاتب</span>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}
