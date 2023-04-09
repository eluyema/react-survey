import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}></Provider>
);

export default ReduxProvider;
