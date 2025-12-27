import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#faf7f2] border-t border-[#e5dfd6]">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold text-[#1f2933]">
              MJ<span className="text-[#f28c6a]">.</span>
            </span>
            <span className="text-[#6b7280]">|</span>
            <span className="text-sm text-[#6b7280]">
              © {currentYear} Mitia Jessica
            </span>
            <span className="text-[#6b7280]">|</span>
          </div>

          <p className="flex items-center gap-1 text-sm text-[#6b7280]">
            Fait avec{" "}
            <Heart className="w-4 h-4 text-[#f28c6a] fill-[#f28c6a]" /> à Antananarivo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
