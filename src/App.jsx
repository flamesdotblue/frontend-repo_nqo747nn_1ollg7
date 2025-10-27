import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="features" className="bg-black py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((f) => (
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
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;
