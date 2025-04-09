import "./src/styles/global.scss";

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === "/") {
    // Hardwire the year redirector until the new year goes live.
    // const currentYear = new Date().getFullYear();
    // const redirectYear = process.env.GATSBY_REDIRECT_YEAR || currentYear; // Default to the current year
    const redirectYear = "2025";
    const targetPage = `/spacerobotics${redirectYear}/`;

    if (location.pathname !== targetPage) {
      window.location.replace(targetPage);
    }
  }
};
