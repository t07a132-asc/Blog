import { Newspaper } from 'lucide-react'


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
              <Newspaper className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-500">مدونتنا</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight py-6">
               مقالاتنا <span className="text-orange-500"> استكشف </span>
              <br />
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>

            {/* Action Buttons */}

            {/* Stats Grid */}
          </div>
        </div>
      </section>
    </>
  )
}
