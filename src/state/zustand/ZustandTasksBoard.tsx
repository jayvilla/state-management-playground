// src/state/zustand/ZustandTasksBoard.tsx
"use client";

import { useMemo } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilters from "@/components/TaskFilters";
import TaskStats from "@/components/TaskStats";
import StateInspector from "@/components/StateInspector";
import { useTaskStore } from "./useTaskStore";
import { TaskFilter } from "@/types/task";

export function ZustandTasksBoard() {
  const tasks = useTaskStore((s) => s.tasks);
  const filter = useTaskStore((s) => s.filter);
  const addTask = useTaskStore((s) => s.addTask);
  const toggleTask = useTaskStore((s) => s.toggleTask);
  const clearCompleted = useTaskStore((s) => s.clearCompleted);
  const setFilter = useTaskStore((s) => s.setFilter);

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  const completedCount = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  const changeFilter = (filter: TaskFilter) => setFilter(filter);

  return (
    <section className="space-y-4">
      <TaskInput onAddTask={addTask} />
      <div className="flex items-center justify-between gap-2">
        <TaskFilters filter={filter} onChangeFilter={changeFilter} />
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
      <StateInspector mode="zustand" tasks={tasks} filter={filter} />
    </section>
  );
}
