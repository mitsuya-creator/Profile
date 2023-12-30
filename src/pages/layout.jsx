import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ButtonNavigation from "@/components/button/buttonNavigation"
import Home from "@/pages/home"
import Works from "@/pages/works"
import Plays from "@/pages/plays"
import Messages from "@/pages/messages"
import Blog from "@/pages/blog"
import CurriculumVitae from "@/components/curiculumVitae"

function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ButtonNavigation />}>
                    <Route index element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/plays" element={<Plays />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>
                <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout;