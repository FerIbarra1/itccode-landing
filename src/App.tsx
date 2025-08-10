import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaUsers } from "react-icons/fa6";
import { FiMenu, FiPhone, FiSmartphone } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { LuMapPin, LuZap } from "react-icons/lu";
import { BiX } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { ThemeToggle } from "./components/ThemeToggle";
import { BrandLogo } from "./components/BrandLogo";
import { useI18n } from "./i18n";
import { LanguageToggle } from "./components/LanguageToggle";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    { icon: <FaCode className="h-8 w-8" />, titleKey: "card.web", descKey: "card.web.desc" },
    { icon: <FiSmartphone className="h-8 w-8" />, titleKey: "card.apps", descKey: "card.apps.desc" },
    { icon: <HiOutlineGlobeAlt className="h-8 w-8" />, titleKey: "card.cloud", descKey: "card.cloud.desc" },
    { icon: <LuZap className="h-8 w-8" />, titleKey: "card.automation", descKey: "card.automation.desc" },
  ];

  return (
    <div className="min-h-screen bg-fg">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-bg/80 backdrop-blur-md border-b border-fg z-50"
      >
        <div className="container mx-auto px-4 lg:px-6 h-24 rounded flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <FaCode className="h-5 w-5 text-white" />
            </div> */}
            {/* <span className="text-xl font-bold text-gray-900">ITC Code</span> */}
            <BrandLogo />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-text font-semibold text-lg">
            <a href="#inicio" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </a>
            <a href="#servicios" className="hover:text-primary transition-colors">
              {t("nav.services")}
            </a>
            <a href="#nosotros" className="hover:text-primary transition-colors">
              {t("nav.about")}
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors">
              {t("nav.contact")}
            </a>
            <ThemeToggle />
            <LanguageToggle />
          </nav>

          <button
            aria-label="Abrir menú"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <BiX className="h-6 w-6 text-text" /> : <FiMenu className="h-6 w-6 text-text" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 items-center">
              <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t("nav.home")}
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t("nav.services")}
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t("nav.about")}
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-purple-600 transition-colors">
                {t("nav.contact")}
              </a>
              <ThemeToggle />
              <LanguageToggle />
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4 pt-5 md:pt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary text-sm font-semibold"
                >
                  {t("hero.badge")}
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold text-text leading-tight">
                  {t("hero.title.1")}{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t("hero.title.software")}
                  </span>{" "}
                  {t("hero.title.2")}
                </h1>

                <p className="text-xl text-text/60 leading-relaxed">
                  {t("hero.desc")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3 text-white text-lg font-semibold shadow-lg hover:from-primary/70 hover:to-secondary/70 transition"
                >
                  {t("hero.cta")}
                  <FaArrowRight className="ml-1 h-5 w-5" />
                </button>
                {/* <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-3 text-gray-700 bg-white/60 hover:bg-gray-50 transition"
                >
                  Ver Portfolio
                </button> */}
              </div>

              {/* <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Años</div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-2xl blur-3xl opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-text">{t("services.title")}</h2>
            <p className="text-xl text-text/60 max-w-3xl mx-auto">
              {t("services.desc")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="h-full border border-card/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-card cursor-pointer">
                  <div className="p-8 text-center space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto text-primary group-hover:from-primary/60 group-hover:to-secondary/60 group-hover:text-white transition-all duration-300"
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-text">{t(service.titleKey)}</h3>
                    <p className="text-text/60">{t(service.descKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 lg:py-24 bg-fg">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold text-text">{t("about.title")}</h2>
                <p className="text-xl text-text/60 leading-relaxed">
                  {t("about.desc")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaUsers className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("about.point.expert")}</h3>
                    <p className="text-text/60">{t("about.point.expert.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaAward className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("about.point.quality")}</h3>
                    <p className="text-text/60">{t("about.point.quality.desc")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LuZap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("about.point.speed")}</h3>
                    <p className="text-text/60">{t("about.point.speed.desc")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="space-y-4"
                >
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl"></div>
                  <div className="h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl"></div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                  className="space-y-4 pt-8"
                >
                  <div className="h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl"></div>
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div {...fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-text">{t("contact.title")}</h2>
            <p className="text-xl text-text/60 max-w-3xl mx-auto">
              {t("contact.desc")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="border border-gray-200 rounded-2xl shadow-lg bg-white">
                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-lg font-semibold text-black">{t("contact.form.name")}</label>
                        <input id="nombre" placeholder={t("contact.form.name.placeholder")} className="mt-2 h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:ring-4 focus:ring-secondary/50 text-black" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-lg font-semibold text-black">{t("contact.form.email")}</label>
                        <input id="email" type="email" placeholder={t("contact.form.email.placeholder")} className="mt-2 h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:ring-4 focus:ring-secondary/50 text-black" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-lg font-semibold text-black">{t("contact.form.company")}</label>
                      <input id="empresa" placeholder={t("contact.form.company.placeholder")} className="mt-2 h-11 w-full rounded-xl border border-gray-300 px-3 outline-none focus:ring-4 focus:ring-secondary/50 text-black" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-lg font-semibold text-black">{t("contact.form.message")}</label>
                      <textarea id="mensaje" placeholder={t("contact.form.message.placeholder")} className="mt-2 resize-none min-h-[120px] w-full rounded-xl border border-gray-300 p-3 outline-none focus:ring-4 focus:ring-secondary/50 text-black" />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white shadow-lg hover:from-primary/80 hover:to-secondary/80 transition"
                    >
                      {t("contact.form.submit")}
                      <FaArrowRight className="ml-1 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary">
                    <IoMailOutline className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("info.email")}</h3>
                    <p className="text-text/60">contacto@ITCcode.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary">
                    <FiPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("info.phone")}</h3>
                    <p className="text-text/60">+52 1 (662) 142-7754</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center text-primary">
                    <LuMapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text">{t("info.location")}</h3>
                    <p className="text-text/60">Hermosillo, Sonora. México</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">{t("cta.side.title")}</h3>
                <p className="text-white font-semibold mb-6">
                  {t("cta.side.desc")}
                </p>
                <button
                  className="inline-flex items-center justify-center rounded-xl font-semibold border border-white px-6 py-3 text-primary hover:bg-white/90 bg-white transition"
                >
                  {t("cta.side.button")}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fg text-text py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col justify-center text-center md:text-start md:flex-row md:justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <FaCode className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ITC Code</span> */}
                <BrandLogo className="h-35" />
              </div>
              <p className="text-text/60">{t("footer.desc")}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("nav.services")}</h3>
              <ul className="space-y-2 text-text/60">
                <li>{t("card.web")}</li>
                <li>{t("card.apps")}</li>
                <li>{t("card.cloud")}</li>
                <li>{t("card.automation")}</li>
              </ul>
            </div>

            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Empresa</h3>
              <ul className="space-y-2 text-text/60">
                <li>Nosotros</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Carreras</li>
              </ul>
            </div> */}

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t("nav.contact")}</h3>
              <ul className="space-y-2 text-text/60">
                <li>contacto@ITCcode.com</li>
                <li>+52 1 (662) 142-7754</li>
                <li>Hermosillo, Sonora. México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-text/50 mt-12 pt-8 text-center text-text/60">
            <p>&copy; {new Date().getFullYear()} ITCcode. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
