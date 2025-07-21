import { useState } from "react";
import { createDream } from "../services/api";
import { Dream } from "../types";

type Props = {
  onAdd: (dream: Dream) => void;
};

export default function DreamForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState<"happy" | "sad" | "chaotic" | "peaceful">(
    "peaceful"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDream = await createDream({ title, description, date, mood });
    onAdd(newDream);
    setTitle("");
    setDescription("");
    setDate("");
    setMood("peaceful");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg space-y-4"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <textarea
        placeholder="What did you dream?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value as any)}
        className="w-full px-3 py-2 rounded-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="happy">Happy 😊</option>
        <option value="sad">Sad 😢</option>
        <option value="chaotic">Chaotic 😵</option>
        <option value="peaceful">Peaceful 😌</option>
      </select>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Save Dream
      </button>
    </form>
  );
}
