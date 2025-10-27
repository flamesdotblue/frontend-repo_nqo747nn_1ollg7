import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600" />
          <div>
            <p className="text-white font-semibold">NovaChat</p>
            <p className="text-zinc-400 text-sm">Crafted for delightful conversations</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Docs</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
