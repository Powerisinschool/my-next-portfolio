import { useActiveSection } from "@/hooks/use-active-section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  const sectionIds = navLinks
    .map((link) => link.href.split("#")[1])
    .filter(Boolean);

  const activeSection = useActiveSection(sectionIds);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Clean the URL if there's a hash
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.split("#")[1];

    // Only handle anchor links when already on the homepage
    if (pathname === "/" && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // For other links, allow default Next.js Link behavior
  };

  return (
    <header className="flex items-center justify-between p-4 sm:p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <Link href="/" className="text-lg font-bold" onClick={handleLogoClick}>
        Tolu Olagunju
      </Link>
      <div className="flex items-center gap-2">
        <nav className="hidden sm:flex items-center space-x-4">
          {navLinks.map((link) => {
            const isAnchor = link.href.includes("#");
            const anchorId = isAnchor ? link.href.split("#")[1] : null;

            const isActive = isAnchor
              ? activeSection === anchorId && pathname === "/"
              : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "transition-colors hover:text-primary flex items-center",
                  isActive ? "text-primary font-semibold" : ""
                )}
              >
                <span className="font-mono text-muted-foreground mr-1.5">
                  {isAnchor ? "#" : "/"}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
        <Button
          asChild
          className="transition-transform duration-300 hover:-translate-y-1"
        >
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
          >
            Contact Me
          </Link>
        </Button>
      </div>
    </header>
  );
}
