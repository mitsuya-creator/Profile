import React from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/hero"

function Home() {
    return (
        <div className="w-screen h-full flex justify-center dark:bg-slate-900">
            <section className="w-screen">
                <Header />
                <Hero />
            </section>
        </div>
    )
}

export default Home;