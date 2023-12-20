import React, {useState, useEffect} from "react";
import Form from "./Form";

function App(){
    const [data, setData] = useState([{}])

    return(
        <div>
          <Form></Form>
        </div>
    )
}

export default App