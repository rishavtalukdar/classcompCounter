import React from "react";
import { useState } from "react";
import CustomButton from "./CustomButton"


function App() {
  const [value ,setvalue] = useState(0)

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {value}</p>
      <CustomButton children="Increment" func={()=>setvalue(value+1)}/>
      <CustomButton children="Decrement" func={()=>setvalue(value-1)}/>
    </div>
  );
}

export default App;
