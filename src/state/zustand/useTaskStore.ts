// src/state/zustand/useTaskStore.ts
import { create } from "zustand";
import { Task, TaskFilter } from "@/types/task";

interface TaskStoreState {
  tasks: Task[];
  filter: TaskFilter;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: TaskFilter) => void;
}

const initialTasks: Task[] = [
  {
    id: "z1",
    title: "Try Zustand selectors",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "z2",
    title: "Discuss scaling patterns",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];

export const useTaskStore = create<TaskStoreState>((set) => ({
  tasks: initialTasks,
  filter: "all",
  addTask: (title: string) =>
    set((state) => ({
      tasks: [
        {
          id:
            typeof crypto !== "undefined" && "randomUUID" in crypto
              ? crypto.randomUUID()
              : String(Date.now()),
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        },
        ...state.tasks,
      ],
    })),
  toggleTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
  clearCompleted: () =>
    set((state) => ({
      tasks: state.tasks.filter((t) => !t.completed),
    })),
  setFilter: (filter: TaskFilter) =>
    set(() => ({
      filter,
    })),
}));
