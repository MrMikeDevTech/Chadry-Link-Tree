import * as icons from "lucide-static";

export function getLucideIcon(name: string): string | null {
    const icon = (icons as Record<string, any>)[name];
    return icon ? icon.toSvg({ class: "w-6 h-6" }) : null;
}
