// src/components/StateModeToggle.tsx
"use client";

import { StateMode } from "@/app/page";

interface StateModeToggleProps {
  mode: StateMode;
  onChangeMode: (mode: StateMode) => void;
}

const LABELS: Record<StateMode, string> = {
  useState: "useState (lifted)",
  reducer: "Reducer + Context",
  zustand: "Zustand store",
};

export default function StateModeToggle({
  mode,
  onChangeMode,
}: StateModeToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 p-1 border border-slate-800">
      {(Object.keys(LABELS) as StateMode[]).map((value) => {
        const isActive = value === mode;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onChangeMode(value)}
            className={`px-3 py-1 text-xs rounded-full transition whitespace-nowrap ${
              isActive
                ? "bg-emerald-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {LABELS[value]}
          </button>
        );
      })}
    </div>
  );
}
