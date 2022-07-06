module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'PostCategories',
      [
        {
          postId: 1,
          categoryId: 1,
        },
        {
          postId: 2,
          categoryId: 2,
        },

      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('PostCategories', null, {});
  },
};
