const html = document.getElementsByTagName("html")[0];

const ThemeChanger = (mode) => {
  if (mode === "dark") {
    localStorage.setItem("mode", mode);
  } else {
    localStorage.setItem("mode", mode);
  }
  ChangeTheme();
};
export const ChangeTheme = () => {
  const theme = localStorage.getItem("mode");
  if (theme === "dark") {
    html.classList.replace("light", "dark");
    return theme;
  } else {
    html.classList.replace("dark", "light");
  }
};
export default ThemeChanger;
