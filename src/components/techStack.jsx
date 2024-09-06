import React from "react"
import { skillSet } from "@/utils/profileData"
import { Link } from "react-router-dom"

function TechStack() {
    return (
        <div className="w-screen flex justify-center mt-12">
            <div className="w-11/12 h-full xl:w-8/12">
                <section>
                    <h3 className="text-lg font-bold md:text-xl dark:text-white-snow">Tech Passion and Expertise</h3>
                    <p className="my-2 dark:text-slate-400">Programming isn't just a skill; it's my
                        canvas for innovation. Each line of code represents an opportunity; a chance to
                        craft solutions and breathe life into ideas. My programming skills as follows:</p>
                </section>
                <section className="grid my-9 gap-3 grid-flow-row-dense grid-cols-1 md:grid-cols-3 grid-rows-3">
                    {skillSet.map(content => <Link to={content.link} key={content.name} className="w-full h-full border-2 p-6 flex justify-between border-violet-aeu hover:bg-violet-800 dark:text-slate-400 dark:hover:bg-violet-aeu hover:text-white-snow dark:hover:text-white-snow">
                        <h4>{content.name}</h4>
                        <p>{content.status}</p>
                    </Link>)}
                </section>
            </div>
        </div>
    )
}

export default TechStack;