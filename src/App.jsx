import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

function Features() {
  const items = [
    {
      title: "Realtime & Reliable",
      desc: "Low-latency conversations with optimistic updates and playful presence.",
    },
    {
      title: "Beautiful Dark Mode",
      desc: "A modern, contrast-optimized palette that's easy on the eyes.",
    },
    {
      title: "Secure by Default",
      desc: "Private rooms and end-to-end encryption for peace of mind.",
    },
  ];

  return (
    <section id="features" className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-6 hover:bg-zinc-900/80 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Account() {
  return (
    <section id="account" className="bg-black py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-semibold text-white">Account</h2>
          <p className="mt-2 text-zinc-400">Manage your profile, preferences, and security.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-zinc-300">Display name</label>
              <input
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-yellow-500/60"
                placeholder="Your name"
                defaultValue="Nova User"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-300">Email</label>
              <input
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-yellow-500/60"
                placeholder="you@example.com"
                defaultValue="you@example.com"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-zinc-300">Bio</label>
              <textarea
                rows={3}
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-yellow-500/60"
                placeholder="Tell others about you"
                defaultValue="Loves clean UI, realtime chats, and yellow gradients."
              />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Settings() {
  return (
    <section id="settings" className="bg-black py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">Settings</h2>
            <p className="mt-1 text-zinc-400 text-sm">Control theme, notifications, and privacy.</p>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div>
              <p className="text-white font-medium">Dark mode</p>
              <p className="text-zinc-400 text-sm">Always on for this demo</p>
            </div>
            <span className="inline-flex h-6 w-10 items-center rounded-full bg-yellow-500/30 ring-1 ring-yellow-500/40">
              <span className="ml-auto mr-1 h-4 w-4 rounded-full bg-yellow-500" />
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div>
              <p className="text-white font-medium">Notifications</p>
              <p className="text-zinc-400 text-sm">Mentions and DMs</p>
            </div>
            <button className="rounded-md bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 transition">Edit</button>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 p-4">
            <div>
              <p className="text-white font-medium">Privacy</p>
              <p className="text-zinc-400 text-sm">Two-factor recommended</p>
            </div>
            <button className="rounded-md bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 transition">Manage</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    function syncWithHash() {
      const hash = (window.location.hash || "#home").replace("#", "");
      setPage(hash);
    }
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {page === "home" && <HomePage />}
        {page === "chat" && <Chat />}
        {page === "account" && <Account />}
        {page === "settings" && <Settings />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
