import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";

import { GlobalStyle } from "./assets/styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}