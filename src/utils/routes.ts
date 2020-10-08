export const RouteParams = {
  mailNotify: "mailNotify",
  cards: "cards",
  parking: "parking",
};

export const Routes = {
  home: "/",
  catalogs: (catalog = ":catalog") => encodeURI(`/${catalog}`),
};

export default Routes;
