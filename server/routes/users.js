import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();

const prisma = new PrismaClient();

router.post('/signup', async (req,res) => {
  res.send('Signup route');
});

router.post('/login', async (req,res) => {
  res.send('Login route');
});

router.post('/logout', (req,res) => {
  res.send('Logout route');
});

router.get('/session', (req,res) => {
  res.send('Session route');
});

export default router;