import { useEffect } from "react";
import type { SiteMetadata, ThemeMode } from "@/types/content";

export function usePageMetadata(metadata: SiteMetadata, theme: ThemeMode) {
  useEffect(() => {
    document.title = metadata.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", metadata.description);

    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute("content", metadata.keywords.join(", "));

    const themeColor = theme === "dark" ? metadata.darkThemeColor : metadata.lightThemeColor;
    const themeTag = document.querySelector('meta[name="theme-color"]');
    if (themeTag) themeTag.setAttribute("content", themeColor);

    const icon = document.querySelector('link[rel="icon"]');
    if (icon) icon.setAttribute("href", metadata.iconHref);
  }, [metadata, theme]);
}
