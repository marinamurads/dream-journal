import { useState } from "react";
import { Dream } from "../types";
import { deleteDream, updateDream } from "../services/api";

type Props = {
  dreams: Dream[];
  setDreams: (dreams: Dream[]) => void;
};

export default function DreamTable({ dreams, setDreams }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    await deleteDream(id);
    setDreams(dreams.filter((d) => d.id !== id));
    if (expandedId === id) setExpandedId(null);
  };

  const handleMoodChange = async (id: number, mood: Dream["mood"]) => {
    const updated = await updateDream(id, { mood });
    setDreams(dreams.map((d) => (d.id === id ? updated : d)));
  };

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="mt-6 space-y-4">
      {dreams.map((d) => (
        <div
          key={d.id}
          onClick={() => toggleExpanded(d.id)}
          className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-medium">{d.title}</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {d.date}
              </p>
            </div>
            <select
              value={d.mood}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => handleMoodChange(d.id, e.target.value as any)}
              className="text-sm px-2 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700"
            >
              <option value="happy"> Happy 😊</option>
              <option value="sad"> Sad 😢</option>
              <option value="chaotic">Chaos 😵</option>
              <option value="peaceful">Peaceful 😌</option>
            </select>
          </div>
          {expandedId === d.id && (
            <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p className="whitespace-pre-line">{d.description}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(d.id);
                }}
                className="mt-2 text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
