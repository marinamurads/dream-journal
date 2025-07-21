import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// GET all dreams
app.get('/dreams', async (_req, res) => {
  const dreams = await prisma.dream.findMany({
    orderBy: { id: 'desc' }
  });
  res.json(dreams);
});

// POST a new dream
app.post('/dreams', async (req, res) => {
  const { title, description, date, mood } = req.body;
  const newDream = await prisma.dream.create({
    data: { title, description, date, mood }
  });
  res.status(201).json(newDream);
});

// PATCH (update) a dream
app.patch('/dreams/:id', async (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  try {
    const updated = await prisma.dream.update({
      where: { id },
      data: updates
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Dream not found' });
  }
});

// DELETE a dream
app.delete('/dreams/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await prisma.dream.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: 'Dream not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Dream Journal API running at http://localhost:${PORT}`);
});

