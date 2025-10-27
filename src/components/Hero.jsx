import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-300 ring-1 ring-yellow-500/30">
            Realtime • Encrypted • Modern
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Chat that feels alive
          </h1>
          <p className="mt-4 text-zinc-300 text-lg leading-relaxed">
            NovaChat is a sleek, dark-mode messaging experience with realtime conversations, rich media, and a delightful interface. Built for teams and communities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#chat" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
              Open Chat
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium bg-white/10 text-white hover:bg-white/20 transition-colors">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
