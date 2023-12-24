import React from "react"
import Header from "@/components/shared/header"
import ContentPlays from "@/components/contentPlays"

function Plays() {
    return (
        <div className="bg-violet-200 w-screen h-full flex justify-center dark:bg-slate-900">
            <section>
            <Header />
            <ContentPlays/>
            </section>
        </div>
    )
}

export default Plays;