import React from "react"
import Header from "@/components/shared/header"
import WorkExperiences from "@/components/workExperiences"
import Footer from "@/components/shared/footer"

function Works() {
    return (
        <div className="bg-violet-200 w-screen h-full flex justify-center dark:bg-slate-900">
            <section>
                <Header />
                <WorkExperiences />
                <Footer />
            </section>
        </div>
    )
}

export default Works;