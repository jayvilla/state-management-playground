// src/components/StateInspector.tsx
"use client";

import { useState } from "react";
import { Task, TaskFilter } from "@/types/task";
import { StateMode } from "@/app/page";

interface StateInspectorProps {
  mode: StateMode;
  tasks: Task[];
  filter: TaskFilter;
}

export default function StateInspector({
  mode,
  tasks,
  filter,
}: StateInspectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-2 text-xs text-slate-400"
      >
        <span>State inspector</span>
        <span className="font-mono text-[10px] uppercase text-sky-400">
          {mode}
        </span>
      </button>
      {open && (
        <pre className="max-h-64 overflow-auto border-t border-slate-800 bg-slate-950 px-3 py-2 text-[10px] text-slate-300">
          {JSON.stringify(
            {
              mode,
              filter,
              tasks,
            },
            null,
            2
          )}
        </pre>
      )}
    </div>
  );
}
