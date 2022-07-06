module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Inovação',
        },
        {
          id: 2,
          name: 'Escola',
        },
      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
