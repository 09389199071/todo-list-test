export const ROUTE_PATHS = {
  home: "/",
  about: "/about",
  singleBlog: (id) => `/${id || ":id"}`,
};
