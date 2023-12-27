import React from "react"
import Header from "@/components/shared/header"
import WorkExperiences from "@/components/workExperiences"
import Footer from "@/components/shared/footer"

function Works() {
    return (
        <div className="bg-white-snow w-screen h-full flex justify-center dark:bg-dark-custom">
            <section>
                <Header />
                <WorkExperiences />
                <Footer />
            </section>
        </div>
    )
}

export default Works;