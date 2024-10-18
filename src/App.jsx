import { useState } from "react";

import "./index.css";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <body style={{ backgroundColor: color }}>
      <div className="w-3/4 flex justify-start fixed bottom-24 left-48 h-12 rounded-3xl bg-black m-auto p-4">
        <div className=" flex justify-start items-center ">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none ml-4 mr-2"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("grey")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "yellow" }}
            
          >
            Yellow 
          </button>
          <button
            onClick={() => setColor("darksalmon")}
            className="bg-red-500 w-32 h-9 rounded-3xl text-black border-0 outline-none mr-2"
            style={{ backgroundColor: "darksalmon" }}
            
          >
            Darksalmon
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
