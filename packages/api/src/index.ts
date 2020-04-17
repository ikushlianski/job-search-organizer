import express from 'express';

import { iterationController, userController } from './entities';
import { sequelizeConnection } from './db/models';

const app = express();
app.use(express.json());

/*
  Controllers
 */
app.use([iterationController, userController]);

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
