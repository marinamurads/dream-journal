export type Mood = 'happy' | 'sad' | 'chaotic' | 'peaceful';

export interface Dream {
  id: number;
  title: string;
  description: string;
  date: string;
  mood: Mood;
}
