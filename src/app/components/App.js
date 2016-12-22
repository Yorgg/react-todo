import AddTodo  from "./AddTodo"
import VisibleTodos  from "./Todos"
import Footer from "./Footer"
import React from "react"

const App = () => {
  return(
    <div className={"container"} style={{marginTop: "40px"}}>
      <div className={"row"}>
        <div className={"col-sm-8 col-sm-offset-2"}>
          <h1 style={{marginBottom: "30px"}}>
            Get Shit Done
          </h1>
          <AddTodo />
          <VisibleTodos />
          <Footer /> 
        </div>
      </div>
    </div>
  );
}

export default App
