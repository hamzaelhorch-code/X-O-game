"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const winingCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [3,5,6],
]

export default function Home() {
  const [cells, setCells] = useState(["","","","","","","","",""]);
  const [go, setGo] = useState("circle");
  const [winingMessage, setWiningMessage] = useState("")
  
  useEffect(() => {
    winingCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if(circleWins){
        setWiningMessage("Circle wins!");
      }else if(crossWins){
        setWiningMessage("Cross wins!"); 
      }
    });
  }, [cells]);

  return (
      <main>
        <div className="container">
          <div className="gameboad">
            {cells.map((cell, index) => (
              <Cell 
              id={index} 
              go={go} 
              setGo={setGo}
              key = {index}
              cells={cells} 
              setCells={setCells}
              cell = {cell}
              />
              
            ))}
            <div className="message"> 
              <div>{winingMessage}</div>
              {! winingMessage && <div>{`its now ${go} turn!`}</div> }
         </div>
         
        </div>
        </div>
      </main>
  )
}
