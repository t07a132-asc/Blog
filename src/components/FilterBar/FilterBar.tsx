import { RotateCcw, Search } from "lucide-react";
import { NavLink } from "react-router-dom";


type FilterBarProps = {
  search: string;
  onSearch: (value: string) => void;
  onReset: () => void;
};

export default function FilterBar({
  search,
  onSearch,
  onReset,
}: FilterBarProps) {
  // const [search, setSearch] = useState("");

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap block text-sm ${
      isActive
        ? "bg-orange-600 text-white font-semibold shadow-md shadow-orange-600/30"
        : "text-neutral-400 bg-[#141414] hover:text-white border border-neutral-800"
    }`;

  return (
    <div className="w-full bg-[#0d0d0d] p-4 border-b border-white/10 z-40 sticky top-20">
      <div
        className="flex flex-col-reverse container mx-auto md:flex-row items-center justify-between gap-4 w-full"
        dir="rtl"
      >
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              onSearch(e.target.value);
            }}
            placeholder="ابحث في المقالات..."
            className="w-full bg-[#141414] border border-neutral-800 text-white text-sm rounded-xl pr-10 pl-4 py-2.5 focus:outline-none focus:border-[#f95d00] placeholder-neutral-500 transition-colors"
          />

          <Search className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        {search.trim() && (
          <button
            onClick={onReset}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-sm flex items-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95"
          >
            <span>إعادة تعيين الفلاتر</span>
            <RotateCcw className="w-4 h-4" />
          </button>
        )}

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          <NavLink to="/blog" end className={getNavLinkClass}>
            جميع المقالات
          </NavLink>

          <NavLink to="/blog/Lighting" className={getNavLinkClass}>
            إضاءة
          </NavLink>

          <NavLink to="/blog/portrait" className={getNavLinkClass}>
            بورتريه
          </NavLink>

          <NavLink to="/blog/Landscapes" className={getNavLinkClass}>
            مناظر طبيعية
          </NavLink>

          <NavLink to="/blog/Technology" className={getNavLinkClass}>
            تقنيات
          </NavLink>

          <NavLink to="/blog/Equipment" className={getNavLinkClass}>
            معدات
          </NavLink>
        </div>
      </div>
    </div>
  );
}
