"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Shield, Play, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function SocTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-emerald-400">
          <p className="font-bold">⚡ GIRISH M — CYBER SOC ANALYST & FULL-STACK CONSOLE [v2.4.0]</p>
          <p className="text-xs text-muted-foreground">
            Type <span className="text-primary font-semibold font-mono">help</span> or click quick chips below to run commands.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (history.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const cmd = rawCmd.toLowerCase();
    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-primary font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 font-mono">
              <span className="text-emerald-400">• whoami</span>
              <span className="text-sky-400">• projects</span>
              <span className="text-amber-400">• skills</span>
              <span className="text-violet-400">• certs</span>
              <span className="text-pink-400">• contact</span>
              <span className="text-blue-400">• clear</span>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs leading-relaxed">
            <p className="font-semibold text-foreground">Girish M</p>
            <p className="text-muted-foreground">
              Dual-specialist: <span className="text-emerald-400 font-medium">Certified Cyber SOC Analyst (CICSA)</span> & <span className="text-sky-400 font-medium">Python Full-Stack Engineer</span>.
            </p>
            <p className="text-muted-foreground">
              Mission: Architecting modern digital platforms engineered with proactive defense, real-time threat telemetry, and clean modular code.
            </p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-primary font-semibold">Featured Projects:</p>
            <ul className="space-y-1 text-muted-foreground font-mono">
              <li>
                <span className="text-emerald-400">[1] SOC Dashboard</span> — Live Telemetry & Incident Triage (<a href="https://soc-dashboard-peach.vercel.app/" target="_blank" className="underline text-primary">Live App</a>)
              </li>
              <li>
                <span className="text-sky-400">[2] StoryForge</span> — AI Studio Blogging Platform (<a href="https://storyforge-app.ai.studio/" target="_blank" className="underline text-primary">Live App</a>)
              </li>
              <li>
                <span className="text-amber-400">[3] CyberShield Suite</span> — Entropy & Cryptographic Tool (<a href="https://cybershield-password-suite.vercel.app/" target="_blank" className="underline text-primary">Live App</a>)
              </li>
              <li>
                <span className="text-cyan-400">[4] Currency Converter</span> — Live Forex Exchange Engine (<a href="https://currency-converter-five-lemon.vercel.app/" target="_blank" className="underline text-primary">Live App</a>)
              </li>
              <li>
                <span className="text-violet-400">[5] JavaScript Advanced Suite</span> — Algorithmic DOM Lab (<a href="https://girishm03.github.io/JavaScript-Projects/" target="_blank" className="underline text-primary">Live App</a>)
              </li>
            </ul>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-primary font-semibold">Technical Arsenal:</p>
            <div className="space-y-1 text-muted-foreground font-mono">
              <p><span className="text-emerald-400">SOC / Defense:</span> SIEM Telemetry, Wireshark, Nmap, Kali Linux, Vulnerability Auditing</p>
              <p><span className="text-sky-400">Backend:</span> Python 3, Django, RESTful APIs, MySQL, SQLite</p>
              <p><span className="text-amber-400">Frontend:</span> JavaScript (ES6+), React, Next.js, Tailwind CSS</p>
            </div>
          </div>
        );
        break;

      case "certs":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-emerald-400 font-semibold">Credentials & Badges:</p>
            <p className="text-foreground">• Certified IT Infrastructure & Cyber SOC Analyst (CICSA) — RedTeam Hacker Academy [2025]</p>
            <p className="text-foreground">• Python Full Stack Web Development — Luminar Technolab [2024]</p>
            <p className="text-foreground">• Bachelor of Computer Application (BCA) — MG University [2020-2023]</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-primary font-semibold">Direct Communication Channels:</p>
            <p className="text-foreground">Email: <a href="mailto:girishmadhu03@gmail.com" className="text-primary underline">girishmadhu03@gmail.com</a></p>
            <p className="text-foreground">Phone: +91-8606888616</p>
            <p className="text-foreground">GitHub: github.com/girishm03</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
        output = <p className="text-destructive text-xs">Permission denied: Incident will be logged to SOC monitoring system.</p>;
        break;

      default:
        output = (
          <p className="text-destructive text-xs font-mono">
            command not found: {rawCmd}. Type <span className="text-primary">help</span> to view commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/80 bg-zinc-950/90 shadow-2xl backdrop-blur-md">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-border/60">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono text-zinc-400 pl-2 flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            girish@soc-telemetry:~
          </span>
        </div>

        <Badge variant="outline" className="text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-950/30 font-mono py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
          ACTIVE DEFENSE
        </Badge>
      </div>

      {/* Terminal Output Body */}
      <div
        className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-200 min-h-[220px] max-h-[340px] overflow-y-auto space-y-3 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-emerald-400 font-bold">girish@soc:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className="pl-3 border-l-2 border-emerald-500/30">{item.output}</div>
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center gap-2 pt-1 text-emerald-400">
          <span className="font-bold">girish@soc:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-zinc-100 outline-none font-mono text-xs sm:text-sm"
            placeholder="type command (e.g. whoami, projects, help)..."
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2.5 bg-zinc-900/60 border-t border-border/40 text-xs">
        <span className="text-zinc-500 text-[11px] font-mono mr-1">Quick run:</span>
        {["whoami", "projects", "skills", "certs", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-primary/20 hover:text-primary text-zinc-300 font-mono text-[11px] transition-colors border border-zinc-700/50"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
