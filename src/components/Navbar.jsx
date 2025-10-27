import { Home, MessageSquare, Settings, User } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#chat", label: "Chat", icon: MessageSquare },
    { href: "#account", label: "Account", icon: User },
    { href: "#settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600" />
          <span className="text-white font-semibold tracking-tight">NovaChat</span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <item.icon className="h-4 w-4" /> {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-colors">Sign in</button>
          <button className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-400 text-black transition-colors">Get Started</button>
        </div>
      </nav>
    </header>
  );
}
