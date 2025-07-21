import { useEffect, useState } from "react";
import { fetchDreams } from "../services/api";
import { Dream } from "../types";
import DreamForm from "../components/DreamForm";
import DreamTable from "../components/DreamTable";

export default function Home() {
  const [dreams, setDreams] = useState<Dream[]>([]);

  useEffect(() => {
    fetchDreams().then(setDreams);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="max-w-xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          🛌 Dream Journal
        </h1>
        <DreamForm onAdd={(dream) => setDreams([dream, ...dreams])} />
        <DreamTable dreams={dreams} setDreams={setDreams} />
      </div>
    </div>
  );
}
