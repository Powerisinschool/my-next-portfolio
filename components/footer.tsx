import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/icons/x-icon";

interface SocialLink {
  name: string;
  url: string;
}

const socialIcons: { [key: string]: React.ElementType } = {
  Github: Github,
  Linkedin: Linkedin,
  X: XIcon,
//   Twitter: XIcon, // For backwards compatibility
  Email: Mail,
};

export function Footer() {
    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

    useEffect(() => {
        const fetchSocials = async () => {
            // const { data } = await supabase.from("social_links").select("name, url");
            // if (data) {
            //     setSocialLinks(data);
            // }
            // Mock data since Supabase is not set up
            setSocialLinks([
                { name: "Github", url: "https://github.com/Powerisinschool" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/tolu-olagunju/" },
                { name: "Email", url: "mailto:toolulopeolagunju@gmail.com" },
            ]);
        };
        fetchSocials();
    }, []);

    const getIcon = (name: string) => {
        const Icon = socialIcons[name];
        return Icon ? <Icon /> : null;
    };

    return (
        <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p>&copy; 2025 Tolu Olagunju. All rights reserved.</p>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {socialLinks.map((link) => {
                    if (!link.url) return null;
                    const href = link.name === 'Email' ? `mailto:${link.url}` : link.url;
                    return (
                    <Link
                        key={link.name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-transform hover:-translate-y-1 block"
                        aria-label={link.name}
                    >
                        {getIcon(link.name)}
                    </Link>
                    );
                })}
                </div>
            </div>
        </footer>
    );
}
