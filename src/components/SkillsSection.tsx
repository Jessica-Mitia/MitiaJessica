import { Code, Palette, Database, GitBranch, Users, Brain, Target, Heart } from "lucide-react";

const technicalSkills = [
  { name: "HTML & CSS", icon: Code, level: 85 },
  { name: "React JS", icon: Code, level: 75 },
  { name: "Java", icon: Code, level: 70 },
  { name: "PostgreSQL", icon: Database, level: 70 },
  { name: "Figma", icon: Palette, level: 80 },
  { name: "Git & GitHub", icon: GitBranch, level: 75 },
];

const softSkills = [
  { name: "Autonomie", category: "Individuelle", icon: Brain },
  { name: "Curiosité", category: "Individuelle", icon: Brain },
  { name: "Capacité d'adaptation", category: "Individuelle", icon: Target },
  { name: "Esprit d'équipe", category: "Interpersonnelle", icon: Users },
  { name: "Communication", category: "Interpersonnelle", icon: Users },
  { name: "Organisation", category: "Gestion", icon: Target },
  { name: "Sens de responsabilité", category: "Gestion", icon: Heart },
  { name: "Motivation", category: "Individuelle", icon: Heart },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#faf7f2]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm font-medium mb-4">
              Compétences
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1f2933]">
              Mes Compétences
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-display font-semibold text-[#1f2933] mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#f28c6a]/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-[#f28c6a]" />
                </span>
                Compétences Techniques
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-[#6b7280] group-hover:text-[#f28c6a] transition-colors" />
                        <span className="font-medium text-[#1f2933]">{skill.name}</span>
                      </div>
                      <span className="text-sm text-[#6b7280]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#e5dfd6] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#f28c6a] to-[#06b6d4] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-display font-semibold text-[#1f2933] mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#06b6d4]" />
                </span>
                Compétences Comportementales
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#ffffff] rounded-xl border border-[#e5dfd6] hover:border-[#f28c6a]/30 hover:shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)] transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#faf7f2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f28c6a]/10 transition-colors">
                        <skill.icon className="w-4 h-4 text-[#6b7280] group-hover:text-[#f28c6a] transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1f2933]">{skill.name}</h4>
                        <span className="text-xs text-[#6b7280]">{skill.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
