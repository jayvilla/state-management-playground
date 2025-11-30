// app/page.tsx
"use client";

import { useState } from "react";
import StateModeToggle from "@/components/StateModeToggle";
import { UseStateTasksBoard } from "@/state/useState/UseStateTasksBoard";
import { ReducerTasksBoard } from "@/state/reducer/ReducerTasksBoard";
import { ZustandTasksBoard } from "@/state/zustand/ZustandTasksBoard";

export type StateMode = "useState" | "reducer" | "zustand";

export default function HomePage() {
  const [mode, setMode] = useState<StateMode>("useState");

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/40 shadow-xl p-6 space-y-6">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            State Management Playground
          </h1>
          <p className="text-sm text-slate-400">
            Same UI. Different state engines. Great interview story.
          </p>
        </div>

        <StateModeToggle mode={mode} onChangeMode={setMode} />
      </header>

      <div className="border-t border-slate-800 pt-4">
        {mode === "useState" && <UseStateTasksBoard />}
        {mode === "reducer" && <ReducerTasksBoard />}
        {mode === "zustand" && <ZustandTasksBoard />}
      </div>
    </div>
  );
}
