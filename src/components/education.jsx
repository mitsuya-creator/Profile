import React from "react"
import Timeline from "@/components/shared/timeline"

function Education() {
    return (
        <div className="w-screen flex justify-center mt-11 md:mt-1">
            <div className="w-11/12 h-full xl:w-8/12">
                <h3 className="text-lg font-bold mb-3 md:text-xl dark:text-slate-100">Education & Course</h3>
                <Timeline/>
            </div>
        </div>
    )
}

export default Education;