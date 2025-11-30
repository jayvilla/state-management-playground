// src/state/useState/UseStateTasksBoard.tsx
"use client";

import { useMemo, useState } from "react";
import { Task, TaskFilter } from "@/types/task";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilters from "@/components/TaskFilters";
import TaskStats from "@/components/TaskStats";
import StateInspector from "@/components/StateInspector";

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Review useState implementation",
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Refactor to reducer + context",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export function UseStateTasksBoard() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [filter, setFilter] = useState<TaskFilter>("all");

  const visibleTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((t) => !t.completed);
    }
    if (filter === "completed") {
      return tasks.filter((t) => t.completed);
    }
    return tasks;
  }, [tasks, filter]);

  const completedCount = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  const addTask = (title: string) => {
    setTasks((prev) => [
      {
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : String(Date.now()),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  return (
    <section className="space-y-4">
      <TaskInput onAddTask={addTask} />
      <div className="flex items-center justify-between gap-2">
        <TaskFilters filter={filter} onChangeFilter={setFilter} />
        <TaskStats total={tasks.length} completed={completedCount} />
      </div>
      <TaskList tasks={visibleTasks} onToggleTask={toggleTask} />
      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={clearCompleted}
          className="text-xs text-slate-400 hover:text-rose-400"
        >
          Clear completed
        </button>
      </div>
      <StateInspector mode="useState" tasks={tasks} filter={filter} />
    </section>
  );
}
