// src/components/TaskList.tsx
import { Task } from "@/types/task";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-sm text-slate-500 border border-dashed border-slate-700 rounded-lg px-3 py-4 text-center">
        No tasks yet. Add something above to get started.
      </div>
    );
  }

  return (
    <ul className="space-y-1">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2"
        >
          <button
            type="button"
            onClick={() => onToggleTask(task.id)}
            className="flex items-center gap-2 text-left flex-1"
          >
            <span
              className={`inline-flex h-4 w-4 items-center justify-center rounded border ${
                task.completed
                  ? "border-emerald-500 bg-emerald-500/20"
                  : "border-slate-600"
              }`}
            >
              {task.completed && (
                <span className="text-[10px] leading-none text-emerald-400">
                  ✓
                </span>
              )}
            </span>
            <span
              className={`text-sm ${
                task.completed ? "line-through text-slate-500" : ""
              }`}
            >
              {task.title}
            </span>
          </button>
          <span className="hidden text-[10px] text-slate-500 sm:inline">
            {new Date(task.createdAt).toLocaleTimeString()}
          </span>
        </li>
      ))}
    </ul>
  );
}
