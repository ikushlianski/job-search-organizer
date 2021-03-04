# Job Search Organizer API

## Generate seed data

This will generate a file with test data for development:
`npx sequelize-cli seed:generate --name your-seed-name`

The seeds are located in `src/database/seeders-<env>` folder. Seed order is important for foreign keys to resolve correctly!

The seed folder location is set up in `.sequelizerc`
