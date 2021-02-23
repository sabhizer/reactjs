import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ul style={{color: "#61dafb", backgroundColor: "yellow"}}>
        <li>1</li>
        <li>2</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
