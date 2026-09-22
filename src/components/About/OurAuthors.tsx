// import { Check, Linkedin, Github, Twitter } from "lucide-react";

import { Check } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { blogs } from "../../data/blogs";

export default function OurAuthors() {
  let data = blogs.posts;

  return (
    <section className="bg-[#0c0c0c] text-white py-20 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#1a1410] border border-orange-500/30 px-4 py-1 rounded-full text-xs font-semibold text-orange-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span>فريقنا</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          تعرف على كتابنا
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed font-normal">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
          المجتمع.
        </p>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((author) => (
            <div
              key={author.id}
              className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-neutral-700 transition-all duration-300"
            >
              {/* Avatar Container with Badge */}
              <div className="relative mb-6">
                <img
                  src={author.image}
                  alt={author.title}
                  className="w-24 h-24 rounded-full object-cover border-2 border-neutral-700"
                />
                {/* Verified Orange Check Badge */}
                <div className="absolute bottom-0 left-0 bg-orange-500 text-black p-0.5 rounded-full border-2 border-[#121212] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-black stroke-3" />
                </div>
              </div>

              {/* Author Name */}
              <h3 className="text-xl font-bold text-white mb-1.5">
                {author.title}
              </h3>

              {/* Author Role */}
              <p className="text-orange-500 text-xs font-medium mb-6">
                {author.author.role}
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-2">
                <a
                  href="https://www.linkedin.com/company/adasah"
                  className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/adasah"
                  className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/adasah"
                  className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
