// import { useState } from 'react';
// import './App.css';
// import ListKontak from './component/ListKontak';
// import AddTodo from './component/Todo/AddTodo';
import { AddKontak, ListKontak } from "./component";

function App() {
  // state
  // const [nama, setName] = useState('abil');
  
  return (
    // <div className='App'>
    //   <h2>Aplikasi Kontak App {nama}</h2>
    //   <ListKontak nama={nama} />
    // </div>
    <div style={{ padding: '30px' }}>
      <h2>Aplikasi Kontak App</h2>
      <hr />
      <AddKontak />
      <hr/>
      <ListKontak />
    </div>
  );
}

export default App;
