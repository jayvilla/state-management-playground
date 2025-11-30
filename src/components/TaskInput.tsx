// src/components/TaskInput.tsx
"use client";

import { FormEvent, useState } from "react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
  disabled?: boolean;
}

export default function TaskInput({ onAddTask, disabled }: TaskInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAddTask(trimmed);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-sky-500"
        placeholder="Add a task…"
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        disabled={disabled}
        className="rounded-lg px-3 py-2 text-sm font-medium border border-sky-600 bg-sky-600/80 hover:bg-sky-500 disabled:opacity-50"
      >
        Add
      </button>
    </form>
  );
}
