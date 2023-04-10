import React from "react";
import ThemeProvider from "@/providers/ThemeProvider/ThemeProvider.provider";
import ReduxProvider from "@/providers/ReduxProvider/ReduxProvider.provider";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ReduxProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ReduxProvider>
);

export default AppProvider;
