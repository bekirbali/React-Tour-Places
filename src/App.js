import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
