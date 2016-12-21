import React from "react"
import reactRedux from "react-redux"
import { render } from "react-dom"
import { connect } from "react-redux"
import store from "./store"
import { Provider } from 'react-redux' 

import { Input }  from "./components/Input"
import { VisibleTodos }  from "./components/Todos"
import { Footer } from "./components/Footer"

class App extends React.Component {
  render() {
    return(
      <div className={"container"} style={{marginTop: "40px"}}>
        <div className={"row"}>
          <div className={"col-sm-8 col-sm-offset-2"}>
            <h1 style={{marginBottom: "30px"}}>
              Get Shit Done
            </h1>
            <Input store={store} />
            <VisibleTodos store={store} />
            <Footer store={store}/> 
          </div>
        </div>
      </div>
    );
  }
}

const renderIt = () => {
  render(<App />, window.document.getElementById("app"))
}

store.subscribe(renderIt)
renderIt()

