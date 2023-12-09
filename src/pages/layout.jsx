import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ButtonNavigation from "../components/button/buttonNavigation"
import Home from "./home"
import Works from "./works"
import Plays from "./plays"
import Messages from "./messages"

function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ButtonNavigation />}>
                    <Route index element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/plays" element={<Plays />} />
                    <Route path="/messages" element={<Messages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;