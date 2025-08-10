import { useEffect, useState } from "react";

const useIsDark = () => {
    const get = () => document.documentElement.classList.contains("dark");
    const [isDark, setIsDark] = useState(get);

    useEffect(() => {
        const obs = new MutationObserver(() => setIsDark(get()));
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => obs.disconnect();
    }, []);

    return isDark;
}

export function BrandLogo({ className = "h-28 w-auto" }: { className?: string }) {
    const isDark = useIsDark();
    const src = isDark ? "/LogoDarkTheme.png" : "/LogoLightTheme.png";
    return <img src={src} alt="ITC Code Logo" className={className} />;
}