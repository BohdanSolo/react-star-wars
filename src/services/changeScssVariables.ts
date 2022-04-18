
export const changeScssVariables = (theme: string) => {
  const root = document.getElementById("root");
  const cssVariables = ["Header", "Bg"];
  cssVariables.forEach((variable) =>
    root?.style.setProperty(
      `--THEME_DEFAULT_${variable}`,
      `var(--${theme}_${variable})`
    )
  );
};
