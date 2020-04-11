import express from 'express';

import { iterationController } from './entities';

const app = express();

app.use(iterationController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
