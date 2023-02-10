import AOS from "aos";
import { useEffect } from "react";
import "../node_modules/aos/dist/aos.css";
import AppRouter from "./AppRouter";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<AppRouter />);
}

export default App;
