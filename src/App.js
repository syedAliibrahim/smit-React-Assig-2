import logo from './logo.svg';
import './App.css';
import { Button } from "./component/button";
import Posts from "./component/que3"
import Users from './component/user';

let name = "hello world";

let object = {
  name: "hello",
  fatherName: "world",
};

let arry = ["We", " are", " united"];

let obj = [
  { name: "Hello World1" },
  { name: "Hello World2" },
  { name: "Hello World3" },
];

let complex = [
  {
    company: "XYZ",
    jobs: ["Javascript", "React"],
  },
  {
    company: "ABC",
    jobs: ["Angular Js", "Ionic"],
  },
];

function App() {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{object.name}</h1>
      <h1>{object.fatherName}</h1>
      <p>{arry}</p>
      <p>{obj[0].name}</p>
      <p>{obj[1].name}</p>
      <p>{obj[2].name}</p>
      <p>{complex[0].company}</p>
      <p>{complex[0].jobs[0]}</p>
      <p>{complex[0].jobs[1]}</p>
      <p>{complex[1].company}</p>
      <p>{complex[1].jobs[0]}</p>
      <p>{complex[1].jobs[1]}</p>
      <Button/>
      <Posts/>
      <Users/>
    </div>
  );
}

export default App;
