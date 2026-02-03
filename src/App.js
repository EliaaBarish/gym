import "./App.css";
import Navbar from "./components/Navbar";
import Caro from "./components/Caro";
import Programs from "./components/Programs";
import Classes from "./components/Classes";
import Schedule from "./components/Schedule";
import CardLi from "./components/CardLi";

function App() {
  return (
    <>
      <Navbar />
      <Caro />
      <Programs />
      <Classes />
      <Schedule />
    </>
  );
}

export default App;
