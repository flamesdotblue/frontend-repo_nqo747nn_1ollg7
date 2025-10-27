import { useEffect, useMemo, useRef, useState } from "react";
import { MessageSquare, Search, Send, Plus, Users, Hash, Settings } from "lucide-react";

const sampleRooms = [
  { id: "general", name: "general", icon: Hash },
  { id: "design", name: "design", icon: Hash },
  { id: "dev", name: "dev", icon: Hash },
  { id: "random", name: "random", icon: Hash },
];

const sampleContacts = [
  { id: "mira", name: "Mira Patel" },
  { id: "liam", name: "Liam Chen" },
  { id: "sara", name: "Sara Ahmed" },
];

function SidebarSection({ title, children }) {
  return (
    <div>
      <h3 className="px-3 text-xs uppercase tracking-wider text-zinc-400 mb-2">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function RoomItem({ active, icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
        active ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="truncate">{label}</span>
    </button>
  );
}

function ContactItem({ name }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
      <div className="h-6 w-6 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
      <span className="truncate">{name}</span>
    </div>
  );
}

function MessageBubble({ message }) {
  const isSelf = message.author === "you";
  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
          isSelf ? "bg-yellow-500 text-black" : "bg-white/10 text-white"
        }`}
      >
        {!isSelf && <div className="text-xs text-zinc-300 mb-1">{message.displayName}</div>}
        <div>{message.text}</div>
        <div className={`mt-1 text-[10px] ${isSelf ? "text-black/70" : "text-zinc-400"}`}>{message.time}</div>
      </div>
    </div>
  );
}

export default function Chat() {
  const [activeRoom, setActiveRoom] = useState(sampleRooms[0].id);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, room: "general", author: "mira", displayName: "Mira", text: "Welcome to NovaChat! Feel free to say hi 👋", time: "09:15" },
    { id: 2, room: "general", author: "you", displayName: "You", text: "Hey everyone! Loving the dark UI.", time: "09:16" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  const filteredRooms = useMemo(() => {
    if (!query) return sampleRooms;
    return sampleRooms.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const roomMessages = useMemo(
    () => messages.filter((m) => m.room === activeRoom),
    [messages, activeRoom]
  );

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [roomMessages.length, activeRoom]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const mine = {
      id: Date.now(),
      room: activeRoom,
      author: "you",
      displayName: "You",
      text,
      time,
    };

    setMessages((prev) => [...prev, mine]);
    setInput("");

    // playful bot echo to make it feel lively
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          room: activeRoom,
          author: "mira",
          displayName: "Mira",
          text: `Echo: ${text}`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 600);
  }

  return (
    <section id="chat" className="bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 grid place-items-center">
            <MessageSquare className="h-5 w-5 text-black" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold">Dashboard & Chat</h2>
            <p className="text-zinc-400 text-sm">Browse rooms, view activity, and jump into conversations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar / Dashboard */}
          <aside className="lg:col-span-4 xl:col-span-3 bg-zinc-900/60 border border-white/10 rounded-xl p-4 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search rooms"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-white/10 text-zinc-200 placeholder-zinc-500 outline-none focus:ring-2 focus:ring-yellow-500/60"
              />
            </div>

            <SidebarSection title="Channels">
              {filteredRooms.map((r) => (
                <RoomItem
                  key={r.id}
                  active={activeRoom === r.id}
                  icon={r.icon}
                  label={`# ${r.name}`}
                  onClick={() => setActiveRoom(r.id)}
                />
              ))}
              <button className="w-full mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/5 hover:bg-white/10 text-white transition-colors">
                <Plus className="h-4 w-4" /> New channel
              </button>
            </SidebarSection>

            <SidebarSection title="Team">
              <div className="flex items-center gap-2 px-3 py-2 text-zinc-300">
                <Users className="h-4 w-4" /> 12 members online
              </div>
              <div className="space-y-1">
                {sampleContacts.map((c) => (
                  <ContactItem key={c.id} name={c.name} />
                ))}
              </div>
            </SidebarSection>

            <SidebarSection title="Preferences">
              <button className="w-full inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors">
                <Settings className="h-4 w-4" /> Workspace settings
              </button>
            </SidebarSection>
          </aside>

          {/* Main Chat */}
          <div className="lg:col-span-8 xl:col-span-9 bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden flex flex-col min-h-[560px]">
            <div className="h-14 px-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-yellow-400 to-amber-600" />
                <h3 className="text-white font-medium"># {activeRoom}</h3>
              </div>
              <div className="text-xs text-zinc-400">Secure • End-to-end</div>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-black via-zinc-950 to-black">
              {roomMessages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}
            </div>

            <div className="p-3 border-t border-white/10">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  rows={2}
                  placeholder="Write a message..."
                  className="flex-1 resize-none rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-yellow-500/60"
                />
                <button
                  onClick={handleSend}
                  className="inline-flex h-10 px-4 items-center gap-2 rounded-lg font-medium bg-yellow-500 text-black hover:bg-yellow-400 transition-colors"
                >
                  <Send className="h-4 w-4" /> Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
