// src/state/reducer/ReducerTasksBoard.tsx
"use client";

import { useMemo } from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import TaskFilters from "@/components/TaskFilters";
import TaskStats from "@/components/TaskStats";
import StateInspector from "@/components/StateInspector";
import {
  useTaskState,
  useTaskDispatch,
  TaskStateProvider,
} from "./TaskReducerContext";

function InnerBoard() {
  const { tasks, filter } = useTaskState();
  const dispatch = useTaskDispatch();

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }, [tasks, filter]);

  const completedCount = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );

  const addTask = (title: string) => dispatch({ type: "ADD_TASK", title });

  const toggleTask = (id: string) => dispatch({ type: "TOGGLE_TASK", id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  const changeFilter = (filter: TaskFilter) =>
    dispatch({ type: "SET_FILTER", filter });

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
      <StateInspector mode="reducer" tasks={tasks} filter={filter} />
    </section>
  );
}

export function ReducerTasksBoard() {
  return (
    <TaskStateProvider>
      <InnerBoard />
    </TaskStateProvider>
  );
}
