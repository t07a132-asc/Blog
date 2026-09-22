import { Link } from "react-router-dom";
import { 
  LuSun, 
  LuUser, 
  LuMountain, 
  LuSlidersHorizontal, 
  LuCamera, 
  LuChevronLeft 
} from "react-icons/lu";

const categories = [
  { id: "lighting", name: "إضاءة", count: "3 مقالة", icon: LuSun, path: "/blog/Lighting" },
  { id: "portrait", name: "بورتريه", count: "3 مقالة", icon: LuUser, path: "/blog/portrait" },
  { id: "landscapes", name: "مناظر طبيعية", count: "2 مقالة", icon: LuMountain, path: "/blog/Landscapes" },
  { id: "technology", name: "تقنيات", count: "5 مقالة", icon: LuSlidersHorizontal, path: "/blog/Technology" },
  { id: "equipment", name: "معدات", count: "3 مقالة", icon: LuCamera, path: "/blog/Equipment" },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* العناوين */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide text-center">
          استكشف حسب الموضوع
        </h2>
        <p className="text-neutral-400 text-sm mb-12 text-center">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>

        {/* شبكة التصنيفات (Grid) - 5 أعمدة متناسقة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <Link
                key={cat.id}
                to={cat.path}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 min-h-[150px] bg-[#121212] border-neutral-800/80 text-neutral-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
              >
                {/* السهم الدائري يظهر فقط عند الهوفر على الكارت */}
                <div className="absolute top-[60%] -translate-y-1/2 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LuChevronLeft className="w-5 h-5" />
                </div>

                {/* الأيقونة العلوية */}
                <div className="w-full flex justify-end">
                  <div className="p-2.5 rounded-xl  bg-orange-600/10 border border-neutral-800 text-orange-500 group-hover:bg-white/10 group-hover:border-transparent group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* الاسم وعدد المقالات */}
                <div className="text-right mt-4">
                  <h3 className="font-bold text-base mb-1 text-white">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {cat.count}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}