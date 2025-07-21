// src/services/api.ts

import axios from 'axios';
import { type Dream } from '../types';

const API_URL = 'http://localhost:4000/dreams';

export const fetchDreams = async (): Promise<Dream[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createDream = async (dream: Omit<Dream, 'id'>): Promise<Dream> => {
  const res = await axios.post(API_URL, dream);
  return res.data;
};

export const updateDream = async (id: number, updates: Partial<Dream>): Promise<Dream> => {
  const res = await axios.patch(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteDream = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

