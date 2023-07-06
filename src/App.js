
import './App.css';
import Simps from './Simps';

function App() {
  const simpsonsFamily = [  {
    name: "Гомер Сімпсон",
    surname: "Сімпсон",
    age: 39,
    gender: "чоловіча",
    photo: "./img/s1.jpg"
  },
 {
    name: "Мардж Сімпсон",
    surname: "Сімпсон",
    age: 36,
    gender: "жіноча",
    photo: "./img/s1.jpg"
  },
  {
    name: "Барт Сімпсон",
    surname: "Сімпсон",
    age: 10,
    gender: "чоловіча",
    photo: "./img/s1.jpg"
  },
   {
    name: "Ліса Сімпсон",
    surname: "Сімпсон",
    age: 8,
    gender: "жіноча",
    photo: "./img/s1.jpg"
  },
  {
    name: "Меггі Сімпсон",
    surname: "Сімпсон",
    age: 1,
    gender: "жіноча",
    photo: "./img/s1.jpg"
  }]
  
  ;


  return (
    <div className="App">
     
     {simpsonsFamily.map((item,index)=><Simps name={item.name} surname={item.surname} age={item.age}
      gender={item.gender}  photo={item.photo} key = {index}/>)}
    </div>
  );
}

export default App;

