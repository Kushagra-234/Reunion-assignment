import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";
import { data } from "./mockdata/Mockdata";
import { useEffect, useState } from "react";

const App = () => {
  const [fdta, setFdata] = useState(data);
  const [copydata, setCopydata] = useState([]);

  useEffect(() => {
    setTimeout(()=>{

       setCopydata(data);
    },3000)
    
    
  },[]);

  console.log(copydata);

  return (
    <>
      <Header />
      <Searchbar data={data} />
      {/* {copydata && copydata.length ? <Card data={data} /> : "empty"} */}
    </>
  );
};

export default App;
