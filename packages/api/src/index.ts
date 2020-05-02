import express from 'express';

import { iterationController, userController } from './entities';
import { sequelizeConnection } from './db/models';
import { questionGroupController } from './entities/question-group';
import { questionController } from './entities/question';

const app = express();
const appRouter = express.Router();
app.use(express.json());
app.use(process.env.API_BASE_URL, appRouter);

/*
  Controllers
 */
appRouter.use([
  iterationController,
  userController,
  questionGroupController,
  questionController,
]);

/*
  Run app
 */
const PORT = process.env.PORT || 3000;

sequelizeConnection
  .sync({ force: process.env.FORCE_SYNC !== 'false' })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });
