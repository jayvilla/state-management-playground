// src/state/reducer/taskReducer.ts
import { Task, TaskFilter } from "@/types/task";

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

export type TaskAction =
  | { type: "ADD_TASK"; title: string }
  | { type: "TOGGLE_TASK"; id: string }
  | { type: "CLEAR_COMPLETED" }
  | { type: "SET_FILTER"; filter: TaskFilter };

export const initialTaskState: TaskState = {
  tasks: [
    {
      id: "r1",
      title: "Wire up reducer",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "r2",
      title: "Compare with Zustand",
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ],
  filter: "all",
};

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask: Task = {
        id:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : String(Date.now()),
        title: action.title,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return { ...state, tasks: [newTask, ...state.tasks] };
    }
    case "TOGGLE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, completed: !t.completed } : t
        ),
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => !t.completed),
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default:
      return state;
  }
}
