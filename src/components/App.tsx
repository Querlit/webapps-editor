import React from "react"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import * as style from "./App.module.less"
import SomePage from "./pages/SomePage/SomePage"

import reloader from "../tools/reloader"
import { io } from "socket.io-client"

const socket = io()
reloader(socket)

export default function App() {
    return (
        <Router>
            <div className={style.wrapper}>
                <Routes>
                    <Route path="/" element={<SomePage />} />
                </Routes>
            </div>
        </Router>
    )
}