import Header from "./components/Header";
import Main from "./components/Main";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
