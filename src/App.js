import AOS from "aos";
import { useEffect } from "react";
import AppRouter from "./AppRouter";
import "../node_modules/aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <AppRouter />;
}

export default App;
