import { useI18n } from "../i18n";

export function LanguageToggle() {
    const { lang, setLang } = useI18n();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setLang("es")}
                className={`inline-flex items-center justify-center rounded-lg px-2 py-1 text-sm
          ${lang === "es" ? "bg-card border border-border" : "hover:bg-bg border border-transparent"}`}
                aria-pressed={lang === "es"}
                title="Español"
            >
                <span className="text-base">🇲🇽</span>
                <span className="ml-1 hidden sm:inline">ES</span>
            </button>

            <button
                onClick={() => setLang("en")}
                className={`inline-flex items-center justify-center rounded-lg px-2 py-1 text-sm
          ${lang === "en" ? "bg-card border border-border" : "hover:bg-bg border border-transparent"}`}
                aria-pressed={lang === "en"}
                title="English"
            >
                <span className="text-base">🇺🇸</span>
                <span className="ml-1 hidden sm:inline">EN</span>
            </button>
        </div>
    );
}
