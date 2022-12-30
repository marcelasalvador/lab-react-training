import './App.css';
import IdCard from "./components/IdCard"
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h3>Iteration1</h3>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      
      <br/>   
      <hr/>  

      <h3>Iteration2</h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <br/>
      <hr/>
     
  

      <h3>Iteration 3</h3>



    </div>
  )
}



export default App
