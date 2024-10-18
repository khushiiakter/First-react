import "./App.css";
// import Todo from "./Todo";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Bookstore from "./Bookstore";
import Counter from "./Counter";
import Users from "./Users";
function App() {
  const books = [
    {name: 'math', price: 1000, id: 1},
    {name: 'bangla', price: 200, id: 2},
    {name: 'english', price: 600, id: 3},
    {name: 'hindi', price: 100, id: 4}
  ]
  const actors = ['salman', 'sun jea', 'im sol', 'veer'];
  const singers = [
    {name: 'anub jain', song: "jo tum mere ho"},
    {name: 'arijit singh', song: "kya e mumkin ho kabhi"},
    {name: 'english', song: "little do you know"},
    {name: 'hindi', song: "kun faya kun"}
  ]
  function handleClick (){
    alert("hello react")
  }

  return (
    <>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click ME</button>
      <Bookstore books = {books}></Bookstore>
      <h1>Vite + React</h1>
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }
      <h1>Vite + React</h1>
      <Actor name= "khushi akter"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo kaj = "namaj porte hobe" isDone= {true}></Todo>
      <Todo kaj = "quran ortho porte hobe" isDone= {false}></Todo>
      <Todo kaj = "coding korte hobe" isDone= {true}></Todo> */}
      {/* <Todo task="amy namaj porte hobe"></Todo>
      <Todo task="amy quran bangla aktu aktu porte hobe"></Todo>
      <Todo task="amy coding korte hobe"></Todo> */}
      <Device name="Laptop" price="200"></Device>
      <Device name="mobile" price="10"></Device>
      <Person></Person>
      <Student name="hena" age={44}></Student>
      <Student name="khushi" age={133}></Student>
      <Student></Student>
      <Developer></Developer>
      <Dream></Dream>
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}
function Person() {
  const name = "khushi";
  const age = 21;
  const obj = { money: 100000, friend: 0 };
  return (
    <h4>
      THank you Allah for everything. <br />
      My name is {name} and my age is {age}. <br /> i have {obj.money} but
      friend is {obj.friend}
    </h4>
  );
}
// const {name, age} = {name:"hena", age:"55"}
function Student({ name = "not found", age = 0 }) {
  return (
    <div className="student">
      <h3>student</h3>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    border: "3px solid blue",
    borderRadius: "30px",
    padding: "15px",
    margin: "15px",
  };
  return (
    <div style={developerStyle}>
      <h3>devo devo</h3>
      <p>coding:</p>
    </div>
  );
}
function Dream() {
  return (
    <div
      style={{
        border: "3px solid black",
        borderRadius: "30px",
        padding: "15px",
        margin: "15px",
      }}
    >
      <h3>devo devo</h3>
      <p>coding:</p>
    </div>
  );
}

export default App;
