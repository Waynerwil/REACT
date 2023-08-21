import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'Wayner';
const element =<h1>Hola, {name}</h1>;
root.render(element);

const user = {
  name:'Wayner',
  lastname:'Wilson',
  photo: 'https://picsum.photos/200'
}

function printName (user) {
  return user.name +' '+user.lastname;
}

function printNameV2(user) {
  if (user) {
    return user.name+ ' '+user.lastname;
  } else {
    return "Desconocido"
  }
}

const element2 = (
  <h1>
    Hello, {printNameV2(user)}
  </h1>
);


const imageElement = <img src = {user.photo}/>

const element3 = React.createElement('h1', {className: 'saludo'}, 'Hola mundo');

function printTernario (user) {
  return user? user.name +'  '+user.lastname :"Desconocido";
}

root.render(
<>
  {element3}
  {imageElement}
</>
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
