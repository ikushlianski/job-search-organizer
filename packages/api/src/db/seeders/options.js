module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "options",
      [
        // generic "yes-no-somewhat" answers, applies to any boolean question
        {
          id: 1,
          text: "Yes",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          text: "Somewhat",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          text: "No",
          value: -1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // options for company's type
        {
          id: 4,
          text: "outstaff",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          text: "outsource",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          text: "product",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          text: "not IT field", // e.x. a bank with IT dep
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // distance to office
        {
          id: 8,
          text: "far",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          text: "normal",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          text: "near home",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // how much does tech stack match?
        {
          id: 11,
          text: "full match",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          text: "mostly matches",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          text: "much to be learned on the way",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // team size
        {
          id: 14,
          text: "small",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          text: "medium",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          text: "large",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // scope_of_responsibilities
        {
          id: 17,
          text: "narrow", // e.x. only frontend
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          text: "medium", // e.x. frontend with some backend
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          text: "wide", // e.x. full-stack (both frontend and backend)
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // quantity options (amount of communication etc.)
        {
          id: 20,
          text: "little",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          text: "some",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          text: "much",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // task estimation type
        {
          id: 23,
          text: "no estimation procedure",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          text: "hours",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          text: "story points",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // durations
        {
          id: 26,
          text: "short (several months)",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          text: "medium (about a year)",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          text: "long (more than 1 year)",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // office type options
        {
          id: 29,
          text: "open space",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 30,
          text: "separate rooms",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // frequencies
        {
          id: 31,
          text: "never",
          value: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 32,
          text: "rarely",
          value: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 33,
          text: "usually",
          value: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 34,
          text: "often",
          value: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 35,
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
