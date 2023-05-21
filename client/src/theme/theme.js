const theme = (mode) => {
  return {
    typography: {
      allVariants: {
        fontFamily: '"Open Sans", sans-serif',
        textTransform: "none",
      },
    },
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            main: {
              primary: "rgb(255, 255, 255)",
              secondary: "rgba(236, 236, 236, 0.4)",
            },
            text: {
              primary: "rgb(0, 0, 0)",
              secondary: "rgb(255, 255, 255)",
            },
            static: {
              primary: "rgb(0, 0, 0)",
              secondary: "rgb(255, 255, 255)",
              other: "rgb(112,112,112)",
            },
          }
        : {
            // palette values for dark mode
            main: {
              primary: "rgb(0, 0, 0)",
              secondary: "rgba(60, 60, 60, 0.15)",
            },
            text: {
              primary: "rgb(255, 255, 255)",
              secondary: "rgb(0, 0, 0)",
            },
            static: {
              primary: "rgb(0, 0, 0)",
              secondary: "rgb(255, 255, 255)",
              other: "rgb(112,112,112)",
            },
          }),
    },
  };
};

export default theme;
