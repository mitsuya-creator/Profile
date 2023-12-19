import React from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/hero"
import TechStack from "@/components/techStack"
import Education from "@/components/education"
import Footer from "@/components/shared/footer"
import { darkMode } from "@/utils/darkMode"

function Home() {
    return (
        <div className="bg-violet-100 w-screen h-full flex justify-center dark:bg-slate-900">
            <section>
                <Header />
                <Hero />
                <TechStack/>
                <Education/>
                <Footer/>
            </section>
        </div>
    )
}

export default Home;