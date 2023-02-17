import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <h1>App Hello</h1>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
