import { Target, Zap, Users, RefreshCw } from "lucide-react";

export default function OurValues() {
  const values = [
    {
      id: 1,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      icon: Target,
    },
    {
      id: 2,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: Zap,
    },
    {
      id: 3,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
      icon: Users,
    },
    {
      id: 4,
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="bg-[#0c0c0c] text-white py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-3">
          <span className="text-orange-500 font-bold ml-2">|</span>
          قيمنا
          <span className="text-orange-500 font-bold mr-2">|</span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm mb-12 font-medium">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#121212] border group hover:bg-orange-600/20 cursor-pointer border-neutral-800/70 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-neutral-700 transition-colors duration-300"
              >
                {/* Icon Container */}
                <div className="mb-5 text-orange-500">
                  <Icon className="w-8 h-8 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold group-hover:text-orange-500 mb-2 text-white">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}