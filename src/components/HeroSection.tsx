import { MapPin, GraduationCap, Sparkles } from "lucide-react";
import jessica from "../assets/images/jessica.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,rgba(242,140,106,0.15) 0%,rgba(79,154,148,0.3) 100%)] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#f28c6a]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#4f9a94]/10 rounded-full blur-3xl animate-float animation-delay-200" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#f28c6a]/5 rounded-full blur-2xl animate-float animation-delay-400" />

      <div className="container mx-auto px-6 py-20">
        <div className="w-full mx-auto text-center">
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#faf7f2] border border-[#e5dfd6] text-sm font-medium text-[#6b7280] mb-8">
              <Sparkles className="w-4 h-4 text-[#f28c6a]" />
              Bienvenue sur mon portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="w-[80%] mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-[#1f2933] mb-6 animate-fade-up opacity-0 animation-delay-100">
                Mitia{" "}
                <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#f28c6a,#4f9a94)]">
                  Jessica
                </span>
              </h1>

              <p className="text-xl w-10/12 mx-auto md:text-2xl text-[#6b7280] font-light mb-8 animate-fade-up opacity-0 animation-delay-200">
                Curieuse de nature et passionnée par le code, je compile
                créativité et fun pour livrer des expériences web qui font
                buguer… d’admiration !
              </p>
            </div>
            <img
              src={jessica}
              alt="Jessica Mitia"
              className="mt-8 rounded-[50%] shadow-lg mx-auto w-80 h-80 object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 my-12 animate-fade-up opacity-0 animation-delay-300">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#faf7f2] rounded-full border border-[#e5dfd6] shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)]">
              <MapPin className="w-4 h-4 text-[#f28c6a]" />
              <span className="text-sm font-medium text-[#1f2933]">
                Antananarivo
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#faf7f2] rounded-full border border-[#e5dfd6] shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)]">
              <GraduationCap className="w-4 h-4 text-[#4f9a94]" />
              <span className="text-sm font-medium text-[#1f2933]">
                Étudiante L2 à HEI
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#faf7f2] rounded-full border border-[#e5dfd6] shadow-[0_4px_20px_-4px_rgba(31,41,51,0.08)]">
              <span className="text-sm font-medium text-[#1f2933]">18 ans</span>
            </div>
          </div>

          <div className="animate-fade-up opacity-0 animation-delay-400">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f28c6a] text-[#faf7f2] rounded-full font-medium hover:shadow-[0_0_40px_rgba(242,140,106,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              Découvrir mon parcours
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#6b7280]/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#6b7280]/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
