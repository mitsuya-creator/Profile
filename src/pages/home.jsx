import React from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/hero"
import TechStack from "@/components/techStack"
import Education from "@/components/education"

function Home() {
    return (
        <div className="w-screen h-full flex justify-center dark:bg-slate-900">
            <section className="w-screen">
                <Header />
                <Hero />
                <TechStack/>
                <Education/>
            </section>
        </div>
    )
}

export default Home;