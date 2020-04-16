import express from 'express';

import { iterationController } from './entities';
import { sequelizeConnection } from './db/models';

const app = express();
app.use(express.json());

/*
  Controllers
 */
app.use([iterationController]);

const PORT = process.env.PORT || 3000;

sequelizeConnection.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
