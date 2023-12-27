import React from "react"

function Timeline({ child }) {
    return (
        <div className="w-full h-full border-s-2 border-violet-800 dark:border-violet-aeu dark:text-slate-400">
            {child}
        </div>
    )
}

function ComponentsTimeline({ title, description, years, icon, company }) {
    return (
        <div className="flex justify-between mb-4">
            <section
                className="bg-violet-800 dark:bg-violet-aeu w-11 h-11 rounded-full ms-2 flex justify-center items-center">
                {icon}
            </section>
            <section
                className="w-11/12 h-full p-6 bg-violet-800 dark:bg-violet-aeu relative rounded ms-3 text-white-snow">
                <div
                    className="w-6 h-6 bg-violet-800 dark:bg-violet-aeu absolute rotate-45 top-3 -left-1 md:-left-2"></div>
                <h2 className="font-bold">{title}
                </h2>
                <small>{company}</small>
                <p className="my-3">{description}</p>
                <span className="italic">{years}</span>
            </section>
        </div>
    )

}

export { Timeline, ComponentsTimeline };