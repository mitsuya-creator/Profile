import { React } from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/hero"
import TechStack from "@/components/techStack"
import Education from "@/components/education"
import Footer from "@/components/shared/footer"
import Projects from "@/components/project"

function Home() {
    return (
        <div className="bg-white-snow w-screen h-full flex justify-center dark:bg-dark-custom">
            <section>
                <Header />
                <Hero />
                <TechStack />
                <Projects />
                <Education />
                <Footer />
            </section>
        </div>
    )
}

export default Home;