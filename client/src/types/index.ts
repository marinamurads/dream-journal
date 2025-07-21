export interface Dream {
  id: number;
  title: string;
  description: string;
  date: string;
  mood: 'happy' | 'sad' | 'chaotic' | 'peaceful';
}
