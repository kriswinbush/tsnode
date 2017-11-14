import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'hello from Home route',
  });
});

export {router as homeRoute };
