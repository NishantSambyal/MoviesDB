export const apiConstants = {
  moviesList:
    '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
};

export const apiMethods = (extraData?: string) => {
  return {
    posts: `/posts/${extraData}`,
    another: `/posts/${extraData}`,
  };
};