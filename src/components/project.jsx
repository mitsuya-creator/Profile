import React from "react"
import { projects } from "@/utils/profileData"
import { Link } from "react-router-dom"

function Projects() {
    return (
        <div className="w-screen flex justify-center mt-12">
            <div className="w-11/12 h-full xl:w-8/12">
                <section>
                    <h3 className="text-lg font-bold md:text-xl dark:text-white-snow">Project Showcase</h3>
                </section>
                <section className="grid gap-3 my-9 grid-flow-row-dense grid-cols-1 md:grid-cols-3">
                    {projects.map(content => <Link to={content.link} key={content.id} className="w-full h-full border-2 p-6 flex flex-col gap-3  border-violet-aeu hover:bg-violet-800 dark:text-slate-400 dark:hover:bg-violet-aeu hover:text-white-snow dark:hover:text-white-snow">
                        <h4 className="font-2xl text-2xl">{content.title}</h4>
                        <p>{content.description}</p>
                    </Link>)}
                </section>
            </div>
        </div>
    )
}

export default Projects;