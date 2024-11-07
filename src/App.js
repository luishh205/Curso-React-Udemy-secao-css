
import './App.css';
import MyComponent from './Components/MyComponent';
import {useState} from 'react'
import Title from './Components/Title';

function App() {
  
  const n = 15;
  const [name] = useState("Mateus");
  const redTlite = true;

  return (
    <div className="App">
      {/* {css global} */}
     <h1>React com Css</h1>
      {/* {css componente} */}
     <MyComponent/>
     <p>Este paragrafo e do App.js</p>
     {/* {inline css} */}
     <p style={{
      color:"blue",
      padding:"25px",
      borderTop:"2px solid red"
     }}>este elemento foi estilizado pela forma inline css</p>
       <p style={{
      color:"blue",
      padding:"25px",
      borderTop:"2px solid red"
     }}>este elemento foi estilizado pela forma inline css</p>
     {/* {css inline style dinamico} */}
    <h2 style={n < 10 ? ({color:"blue"}) : ({color:"pink"})}>Css Dinamico</h2>
    <h2 style={name === "Mateus" ? ({backgroundColor:"chocolate",color:"black"}) : null }>Teste Nome</h2>
     {/* {class dinamico} */}
     <h2 className={redTlite ? "red-title" : "title" }>Este titulo vai ter class dinamica</h2>
     {/* {css modules} */}
     <Title/>
    </div>
  );
};

export default App;
