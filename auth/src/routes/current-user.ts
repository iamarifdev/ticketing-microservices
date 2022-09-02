import express from 'express';

import { currentUser, requireAuth } from '../middlewares';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, requireAuth, (req, res) => {
  res.send({ currentUser: req.user || null });
});

export { router as currentUserRouter };
