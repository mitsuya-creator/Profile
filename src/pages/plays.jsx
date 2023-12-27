import React from "react"
import Header from "@/components/shared/header"
import ContentPlays from "@/components/contentPlays"

function Plays() {
    return (
        <div className="bg-white-snow w-screen h-full flex justify-center dark:bg-dark-custom">
            <section>
                <Header />
                <ContentPlays />
            </section>
        </div>
    )
}

export default Plays;