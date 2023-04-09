import React from "react";
import ThemeProvider from "@/providers/ThemeProvider/ThemeProvider.provider";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
