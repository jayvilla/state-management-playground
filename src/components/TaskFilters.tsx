// src/components/TaskFilters.tsx
import { TaskFilter } from "@/types/task";

interface TaskFiltersProps {
  filter: TaskFilter;
  onChangeFilter: (filter: TaskFilter) => void;
}

const FILTERS: { value: TaskFilter; label: string }[] = [
  { value: "all", value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

export default function TaskFilters({
  filter,
  onChangeFilter,
}: TaskFiltersProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 p-1 border border-slate-800">
      {FILTERS.map((f) => {
        const isActive = f.value === filter;
        return (
          <button
            key={f.value}
            type="button"
            onClick={() => onChangeFilter(f.value)}
            className={`px-3 py-1 text-xs rounded-full transition ${
              isActive
                ? "bg-sky-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
