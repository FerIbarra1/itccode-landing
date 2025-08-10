// src/i18n.tsx
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Lang = "es" | "en";
type Dict = Record<string, string>;
type Dictionaries = Record<Lang, Dict>;

const dictionaries: Dictionaries = {
    es: {
        // nav
        "nav.home": "Inicio",
        "nav.services": "Servicios",
        "nav.about": "Nosotros",
        "nav.contact": "Contacto",
        // hero
        "hero.badge": "🚀 Software que impulsa tu negocio",
        "hero.title.1": "Desarrollo de",
        "hero.title.software": "Software",
        "hero.title.2": "de Clase Mundial",
        "hero.desc":
            "Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio. Desde aplicaciones web hasta sistemas empresariales complejos.",
        "hero.cta": "Comenzar Proyecto",
        // sections
        "services.title": "Nuestros Servicios",
        "services.desc":
            "Ofrecemos soluciones completas de desarrollo de software adaptadas a las necesidades específicas de tu empresa",
        "about.title": "¿Por qué elegirnos?",
        "about.desc": "Somos un equipo apasionado de desarrolladores con años de experiencia creando soluciones que marcan la diferencia.",
        "about.point.expert": "Equipo Experto",
        "about.point.expert.desc": "Desarrolladores senior con experiencia en múltiples tecnologías",
        "about.point.quality": "Calidad Garantizada",
        "about.point.quality.desc": "Código limpio, escalable y con las mejores prácticas del mercado",
        "about.point.speed": "Entrega Rápida",
        "about.point.speed.desc": "Metodologías ágiles para entregas rápidas y eficientes",
        "contact.title": "Hablemos de tu Proyecto",
        "contact.desc": "¿Tienes una idea? Nos encantaría escucharla y ayudarte a convertirla en realidad",
        "contact.form.name": "Nombre",
        "contact.form.email": "Email",
        "contact.form.company": "Empresa",
        "contact.form.message": "Mensaje",
        "contact.form.name.placeholder": "Tu nombre",
        "contact.form.email.placeholder": "tu@email.com",
        "contact.form.company.placeholder": "Nombre de tu empresa",
        "contact.form.message.placeholder": "Cuéntanos sobre tu proyecto...",
        "contact.form.submit": "Enviar Mensaje",

        // CTA lateral
        "cta.side.title": "¿Listo para comenzar?",
        "cta.side.desc": "Agenda una consulta gratuita de 30 minutos para discutir tu proyecto y cómo podemos ayudarte.",
        "cta.side.button": "Agendar Consulta",

        // info cards
        "info.email": "Email",
        "info.phone": "Teléfono",
        "info.location": "Ubicación",
        // misc

        "footer.desc": "Transformamos ideas en soluciones tecnológicas innovadoras.",
        "footer.rights": "Todos los derechos reservados.",
        // cards
        "card.web": "Desarrollo Web",
        "card.web.desc": "Aplicaciones web modernas y escalables con las últimas tecnologías",
        "card.apps": "Apps Móviles",
        "card.apps.desc": "Aplicaciones nativas e híbridas para iOS y Android",
        "card.cloud": "Soluciones Cloud",
        "card.cloud.desc": "Arquitecturas en la nube seguras y de alto rendimiento",
        "card.automation": "Automatización",
        "card.automation.desc": "Optimización de procesos mediante soluciones automatizadas",
    },
    en: {
        // nav
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.contact": "Contact",
        // hero
        "hero.badge": "🚀 Software that powers your business",
        "hero.title.1": "World‑class",
        "hero.title.software": "Software",
        "hero.title.2": "Development",
        "hero.desc":
            "We build innovative technology solutions that drive your growth—from modern web apps to complex enterprise systems.",
        "hero.cta": "Start a Project",
        // sections
        "services.title": "Our Services",
        "services.desc":
            "We deliver end-to-end software solutions tailored to your company’s specific needs.",
        "about.title": "Why choose us?",
        "about.desc": "We are a passionate team of developers with years of experience creating solutions that make a difference.",
        "about.point.expert": "Expert Team",
        "about.point.expert.desc": "Senior developers experienced across multiple technologies",
        "about.point.quality": "Quality Assured",
        "about.point.quality.desc": "Clean, scalable code following industry best practices",
        "about.point.speed": "Fast Delivery",
        "about.point.speed.desc": "Agile methodologies for quick, efficient delivery",
        "contact.title": "Let’s talk about your project",
        "contact.desc": "Got an idea? We’d love to hear it and help you bring it to life.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.company": "Company",
        "contact.form.message": "Message",
        "contact.form.name.placeholder": "Your name",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.company.placeholder": "Your company name",
        "contact.form.message.placeholder": "Tell us about your project...",
        "contact.form.submit": "Send Message",

        // CTA lateral
        "cta.side.title": "Ready to get started?",
        "cta.side.desc": "Book a free 30‑minute consultation to discuss your project and how we can help.",
        "cta.side.button": "Book a Call",

        // info cards
        "info.email": "Email",
        "info.phone": "Phone",
        "info.location": "Location",
        // misc
        "footer.desc": "We transform ideas into innovative technological solutions.",
        "footer.rights": "All rights reserved.",
        // cards
        "card.web": "Web Development",
        "card.web.desc": "Modern, scalable web applications built with the latest tech",
        "card.apps": "Mobile Apps",
        "card.apps.desc": "Native and hybrid apps for iOS and Android",
        "card.cloud": "Cloud Solutions",
        "card.cloud.desc": "Secure, high‑performance cloud architectures",
        "card.automation": "Automation",
        "card.automation.desc": "Process optimization through automated solutions",
    },
};

type I18nContextType = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: keyof Dict) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

function detectInitialLang(): Lang {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "es" || saved === "en") return saved;
    const nav = navigator.language.toLowerCase();
    return nav.startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => detectInitialLang());

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.setAttribute("lang", lang);
    }, [lang]);

    const value = useMemo<I18nContextType>(() => {
        const dict = dictionaries[lang];
        const t = (key: keyof Dict) => dict[key] ?? String(key);
        return { lang, setLang, t };
    }, [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
}
