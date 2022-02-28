import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTables } from "./components/Summary/TrasactionsTables";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
     <Header />
     <Dashboard />
     <TransactionsTables />
     <GlobalStyle />
    </>
  );
}