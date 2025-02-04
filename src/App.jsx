import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";


function App() {

  // const[catFact,setCatFact] = useState("");

  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((response) => {
  //     setCatFact(response.data.fact);
  // });
  // }

  // useEffect(() => {
  //   fetchCatFact();
  // }, []);
  const [excuse,setExcuse] = useState("");

  const fetchExcuse = (reason) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}`).then((response) => {
      setExcuse(response.data[0].excuse);
    });
  }
  
  return (
    // <div className = "App">
    //   <button onClick={fetchCatFact}>Generate Cat Fact</button>
    //   <p>{catFact}</p>
    // </div>
    <div className = "App">
      <h1>Generate an Excuse</h1>
      <button onClick={() =>{
        fetchExcuse("party");
      }}>Party</button>
      <button onClick={()=>{
        fetchExcuse("family");
      }}>Family</button>
      <button onClick={()=>{
        fetchExcuse("office");
      }}>Work</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
