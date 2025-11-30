// src/state/reducer/TaskReducerContext.tsx
"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import {
  initialTaskState,
  TaskAction,
  taskReducer,
  TaskState,
} from "./taskReducer";

const TaskStateContext = createContext<TaskState | undefined>(undefined);
const TaskDispatchContext = createContext<Dispatch<TaskAction> | undefined>(
  undefined
);

export function TaskStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    <TaskStateContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

export function useTaskState(): TaskState {
  const ctx = useContext(TaskStateContext);
  if (!ctx) {
    throw new Error("useTaskState must be used within TaskStateProvider");
  }
  return ctx;
}

export function useTaskDispatch(): Dispatch<TaskAction> {
  const ctx = useContext(TaskDispatchContext);
  if (!ctx) {
    throw new Error("useTaskDispatch must be used within TaskStateProvider");
  }
  return ctx;
}
