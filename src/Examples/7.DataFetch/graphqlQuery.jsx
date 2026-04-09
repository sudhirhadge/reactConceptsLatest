export const getPosts = () => {
  return {
    query: `
    query (
        $options: PageQueryOptions
      ) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
        `,
  };
};
