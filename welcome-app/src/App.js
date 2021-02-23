import './App.css';

let App = () => {

  const date = new Date();
  console.log(date);
  console.log(date.getHours());

  let currentTime = date.getHours();
  let message;
  //empty styles object
  let styles = {};

  if ((currentTime >= 22 && currentTime < 4) || currentTime === 0) {
    message = "Good Night"
    styles.backgroundColor = "Blue"
  }
  else if (currentTime >= 4 && currentTime < 11) {
    message = "Good Morning"
    styles.backgroundColor = "Green"
  }
  else if (currentTime >= 11 && currentTime < 16) {
    message = "Good Afternoon"
    styles.backgroundColor = "Orange"
  }
  else if (currentTime >= 16 && currentTime < 22) {
    message = "Good Evening"
    styles.backgroundColor = "Yellow"
  }
  else {
    message = "Which planet you are from ???"
  }

  

  return (
    <div className="App App-link" style={styles}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
