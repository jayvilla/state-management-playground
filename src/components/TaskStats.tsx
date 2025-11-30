// src/components/TaskStats.tsx
interface TaskStatsProps {
  total: number;
  completed: number;
}

export default function TaskStats({ total, completed }: TaskStatsProps) {
  const active = total - completed;

  return (
    <div className="text-xs text-slate-400">
      <span className="font-medium text-slate-200">{completed}</span> /
      <span className="font-medium text-slate-200"> {total}</span> completed
      {active > 0 && (
        <span className="ml-2 text-slate-500">({active} active)</span>
      )}
    </div>
  );
}
