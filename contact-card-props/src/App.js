import './App.css';
import ContactCardList from "./ContactCardList"


function App() {
  return (
    <div>
      <hr/>
      <ContactCardList 
        name = "Shahrukh"
        email = "srk@xyz.com"
        imgURL = "../img/srk.jpeg"
        phone = "91919193333"
      />
      <br />
      <ContactCardList 
        name = "Akshay"
        email = "akki@xyz.com"
        imgURL = "../img/srk.jpeg"
        phone = "9234984353"
      />
      <br />
      <ContactCardList 
        name = "Hritik"
        email = "hrx@xyz.com"
        imgURL = "../img/srk.jpeg"
        phone = "9324355543"
      />
      <br />
      <ContactCardList 
        name = "Ranbir"
        imgURL = "../img/srk.jpeg"
        phone = "91982832444"
      />
      <hr/>
    </div>
  );
}

export default App;
