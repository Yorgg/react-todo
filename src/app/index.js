import React from "react"
import store from "./store"
import reactRedux from "react-redux"
import Root from './components/root'
import { Provider } from 'react-redux' 
import { render } from "react-dom"
import { connect } from "react-redux"

render(<Root store={store} />, document.getElementById("app"))


