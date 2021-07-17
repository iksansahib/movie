import express from 'express';
import app from './app';

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`⚡️[server]:SS Server is running at https://localhost:${PORT}`);
});