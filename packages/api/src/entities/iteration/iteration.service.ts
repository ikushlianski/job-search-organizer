export const IterationService = (Iteration) => {
  return {
    async findByUser(userId) {
      return await Iteration.findAll({
        where: {
          userId,
        },
      });
    },
    async create(data) {
      return await Iteration.create(...data)
    }
  };
};
