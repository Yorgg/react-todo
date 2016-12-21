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
            <Input />
            <VisibleTodos />
            <Footer /> 
          </div>
        </div>
      </div>
    );
  }
}

const provider =
  <Provider store={store}>
    <App />
  </Provider>

render(provider ,document.getElementById("app"))


