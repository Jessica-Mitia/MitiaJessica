import { GraduationCap, BookOpen, Award } from "lucide-react";

const educationData = [
  {
    year: "2025 - 2026",
    title: "Licence 2",
    school: "HEI (Haute École d'Informatique)",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2024 - 2025",
    title: "Licence 1",
    school: "HEI (Haute École d'Informatique)",
    icon: BookOpen,
    current: false,
  },
  {
    year: "2023 - 2024",
    title: "Baccalauréat Série D",
    school: "Lycée Sainte Famille Anosivavaka",
    icon: Award,
    current: false,
  },
  {
    year: "Formation",
    title: "Anglais ETP",
    school: "Formation complémentaire",
    icon: BookOpen,
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-[#ffffff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#f28c6a]/10 text-[#f28c6a] rounded-full text-sm font-medium mb-4">
              Parcours
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1f2933]">
              Mon Parcours Scolaire
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e5dfd6] md:left-1/2 md:-translate-x-1/2" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                <div className="relative z-10 flex-shrink-0 w-16 h-16 my-2 rounded-full bg-[#faf7f2] border-2 border-[#f28c6a] flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)] md:absolute md:left-1/2 md:-translate-x-1/2">
                  <item.icon
                    className={`w-6 h-6 ${
                      item.current ? "text-[#f28c6a]" : "text-[#6b7280]"
                    }`}
                  />
                </div>

                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"
                  }`}
                >
                  <div
                    className={`bg-[#faf7f2] p-6 rounded-xl border border-[#e5dfd6] shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(31,41,51,0.1)] transition-shadow duration-300 ${
                      item.current ? "ring-2 ring-[#f28c6a]/20" : ""
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-[#e5dfd6] text-[#1f2933] rounded-full text-xs font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-[#1f2933] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6b7280]">{item.school}</p>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 mt-3 text-[#f28c6a] text-sm font-medium">
                        <span className="w-2 h-2 bg-[#f28c6a] rounded-full animate-pulse" />
                        En cours
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
