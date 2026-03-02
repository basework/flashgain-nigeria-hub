import { LayoutDashboard, Users, ListChecks } from "lucide-react";

const Footer = () => {
  const links = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#" },
    { icon: Users, label: "Refer & Earn", href: "#" },
    { icon: ListChecks, label: "Daily Tasks", href: "#" },
  ];

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="font-display text-lg text-background">
              FlashGain <span className="gold-accent">9ja</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            FlashGain 9ja © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
