import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import type { ApplicationState } from "store";
import type { ThemeType } from "theme/index";
import { createTheme } from "theme/index";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");
  const { theme } = useSelector((state: ApplicationState) => state.app);

  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <MuiThemeProvider theme={createTheme(currentTheme)}>
      {children}
    </MuiThemeProvider>
  );
};
