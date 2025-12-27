import { Mail, MapPin, Github, Linkedin, Send, Facebook, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#faf7f2]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#f28c6a]/10 text-[#f28c6a] rounded-full text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1f2933] mb-4">
              Entrons en Contact
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour toute opportunité de collaboration ou de discussion
            </p>
          </div>

          <div className="bg-[#ffffff] rounded-3xl border border-[#e5dfd6] p-8 md:p-12 shadow-[0_8px_30px_-8px_rgba(31,41,51,0.1)]">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-semibold text-[#1f2933] mb-6">
                  Informations
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f28c6a]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#f28c6a]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7280]">Localisation</p>
                      <p className="font-medium text-[#1f2933]">Antananarivo, Madagascar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#93c5fd]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7280]">Email</p>
                      <p className="font-medium text-[#1f2933]">mitiah.jessica@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#93c5fd]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7280]">Telephone</p>
                      <p className="font-medium text-[#1f2933]">+261 32 70 686 18</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-8">
                  <p className="text-sm text-[#6b7280] mb-4">Retrouvez-moi sur</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Jessica-Mitia"
                      className="w-12 h-12 rounded-full bg-[#ffffff] border border-[#e5dfd6] flex items-center justify-center hover:bg-[#f28c6a] hover:text-[#faf7f2] hover:border-[#f28c6a] transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jessica-randriamanantena-5a3a4b388/"
                      className="w-12 h-12 rounded-full bg-[#ffffff] border border-[#e5dfd6] flex items-center justify-center hover:bg-[#f28c6a] hover:text-[#faf7f2] hover:border-[#f28c6a] transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://web.facebook.com/jessica.mitiah"
                      className="w-12 h-12 rounded-full bg-[#ffffff] border border-[#e5dfd6] flex items-center justify-center hover:bg-[#f28c6a] hover:text-[#faf7f2] hover:border-[#f28c6a] transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact form placeholder */}
              <div>
                <h3 className="text-2xl font-display font-semibold text-[#1f2933] mb-6">
                  Envoyez-moi un message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1f2933] mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-[#ffffff] border border-[#e5dfd6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f28c6a]/20 focus:border-[#f28c6a] transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1f2933] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-[#ffffff] border border-[#e5dfd6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f28c6a]/20 focus:border-[#f28c6a] transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1f2933] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-[#ffffff] border border-[#e5dfd6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f28c6a]/20 focus:border-[#f28c6a] transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#f28c6a] text-[#faf7f2] rounded-lg font-medium hover:shadow-[0_0_40px_rgba(242,140,106,0.2)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
