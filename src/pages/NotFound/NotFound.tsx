import { Camera, Home, ArrowRight, Compass } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center pt-4 relative overflow-hidden"
      dir="rtl"
    >
      {/* Dynamic Background Pattern */}
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

      {/* Glowing Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        {/* Animated Badge / Icon */}
        <div className="relative mb-8">
          <div className="w-28 h-28 rounded-3xl bg-[#141414] border border-neutral-800 flex items-center justify-center shadow-2xl relative">
            <Camera className="w-12 h-12 text-orange-500 stroke-[1.5]" />
            <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow-lg border-2 border-[#0d0d0d]">
              404
            </div>
          </div>
          {/* Subtle Pulse Rings */}
          <div className="absolute inset-0 rounded-3xl border border-orange-500/20 animate-ping pointer-events-none" />
        </div>

        {/* Big Error Number Title */}
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500 mb-2">
          404
        </h1>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          عذراً، اللقطة مفقودة!
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md font-medium">
          الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها. يبدو أن العدسة لم تتمكن من التركيز على هذا المسار.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            to="/"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-8 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-600/25 active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>الرئيسية</span>
          </Link>

          <button
            onClick={() => navigate(-1)}
            type="button"
            className="w-full sm:w-auto bg-[#141414] hover:bg-[#1f1f1f] border border-neutral-800 text-neutral-300 hover:text-white font-bold py-3.5 px-8 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>الرجوع للسابقة</span>
          </button>
        </div>

        {/* Blog Quick Link */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 w-full flex items-center justify-center gap-2 text-xs text-neutral-500">
          <Compass className="w-4 h-4 text-orange-500" />
          <span>هل تبحث عن المقالات؟</span>
          <Link
            to="/blog"
            className="text-orange-500 hover:underline font-bold mr-1"
          >
            تصفح المدونة
          </Link>
        </div>
      </div>
    </div>
  );
}