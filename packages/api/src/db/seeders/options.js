module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "options",
      [
        // generic "yes-no-somewhat" answers, applies to any boolean question
        {
          text: "Yes",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Somewhat",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "No",
          value: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // options for company's type
        {
          text: "outstaff",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "outsource",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "product",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "not IT field", // a bank with IT dep
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // distance to office
        {
          text: "far",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "normal",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "near home",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // how much does tech stack match?
        {
          text: "full match",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "mostly matches",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "much to be learned on the way",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // team size
        {
          text: "small",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "medium",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "large",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // scope_of_responsibilities
        {
          text: "one field (e.g. only frontend, only backend)",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "frontend and backend",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "frontend, backend and dev-ops",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // quantity options (amount of communication etc.)
        {
          text: "little",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "some",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "much",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // task estimation type
        {
          text: "no estimation procedure",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "hours",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "story points",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // durations
        {
          text: "short (several months)",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "medium (about a year)",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "long (more than 1 year)",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // office type options
        {
          text: "open space",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "separate rooms",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // frequencies
        {
          text: "never",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "rarely",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "usually",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "often",
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "always",
          value: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("options", null, {});
  },
};
