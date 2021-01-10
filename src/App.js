import React, {useState} from 'react';
import Tweet from './Tweet'

const h1 = <h1>React!</h1>;
const br = <br/>;

function App(){
const [users, setUsers] = useState([
  {name:'Geronimo', age:22, message:'Eu amo a thalia'},
  {name:'Thalia', age:23, message:'Ela me ama senpai!'}
])

const [isRed, setRed] = useState(false);
const[count, setCount] = useState(0);

const[user, setUser] = useState({
  name:25,
  age:['My Name', 'My FirstName', 'My lastName']


});

const increment = ()=>{
  setCount(count + 1);
  setRed(!isRed);
}

const decrement = ()=>{
    setCount(count - 1);

}
  return (
    <div className="App">
      {/*Aprendendo a usar a a propriedade props (como exemplo utilizamos as a função <Tweet /> que atribuimos os atributos name, message e number,*/}
      {/*pode ser o nome que eu quiser atribuir*/}
      
      {/*}
        <Tweet name="Dev GG" message="This is a random tweet" number="22" /> 
        <Tweet name="Dev Geronimo" message="Eu sou o batman"  number="2112" />
        <Tweet name="GeronimoOlanda" message="Vamos para a lua mermao"  number="423262" />
      {*/}

      {/*Aprendendo a utilizar a função onClick para eventos da pagina*/}
      {/*Aprendendo a utilizar o useState(), para atribuir um valor (como falso no nosso exemplo) e adicionamos um contador a ele*/}
      <button className="btn" onClick={increment}>Incremento</button>
      <button className="btn" onClick={decrement}>Decrementando</button>
      <h1>{count}</h1>


      {/*Utilizamos useState() para fazer verificação booleana, atribuindo como falso, e depois vericando em uma operação ternaria */}
      <h2 className={isRed ? 'redElement':""}>Cor Vemelha</h2>


      {/*Mapeando elementos utilizando a funcao map*/}
      {users.map(user=>(
        <Tweet name={user.name} message={user.message} number={user.age}/>
      ))}
    </div>
  );
}

export default App;