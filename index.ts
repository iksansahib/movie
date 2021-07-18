import express from 'express';
import { createConnection } from 'typeorm';
import app from './app';

const PORT = 8000;
createConnection().then(connection => {

  app.listen(PORT, () => {
    console.log(`⚡️[server]:SS Server is running at https://localhost:${PORT}`);
  });
});