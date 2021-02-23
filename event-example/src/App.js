import "./App.css";

let styles = {};

function App() {
  styles.backgroundColor = "Yellow";

  return (
    <div>
      <button onClick={Clicked} onMouseOver={MouseOver} style={styles}>
        Click Me
      </button>
    </div>
  );
}

function Clicked() {
  console.log("I am clicked!!");
  //Below thing is not working. I am unable to change css (button color on event). I searched on internet, all solutions are using react State to achieve this.
  //styles.backgroundColor = "Red";
}

function MouseOver() {
  console.log("I am hovered")
}

export default App;


