import React, { useEffect, useState } from "react"
import profile from "@/assets/profile.png"
import { educationData, skillSet, workExperiences } from "@/utils/profileData"
import { cn } from "cntw"
import { flushSync } from "react-dom"

function CurriculumVitae() {
    const [isPrint, setIsPrint] = useState(false);
    useEffect(() => {
        const handleBeforePrint = () => {
            flushSync(() => {
                setIsPrint(true)
            })
        }
        const handleAfterPrint = () => {
            setIsPrint(false)
        }
        window.addEventListener("beforeprint", handleBeforePrint);
        window.addEventListener("afterprint", handleAfterPrint);
        return () => {
            window.removeEventListener("beforeinput", handleBeforePrint);
            window.removeEventListener("afterprint", handleAfterPrint)
        }
    }, [])
    return (
        <div className="bg-white-snow w-screen flex flex-col items-center dark:text-slate-400 dark:bg-dark-custom">
            <section className={cn("fixed top-0 p-2 flex flex-start justify-between bg-white-snow w-screen items-center md:justify-start dark:bg-dark-custom", isPrint && "hidden")}>
                <button onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button onClick={() => window.print()} className="ms-4 bg-violet-700 p-2 items-center text-white-snow rounded-sm">Print</button>
            </section>
            <div className={cn("flex flex-col items-center", !isPrint && "my-14")}>
                <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                    <div className="rounded-full overflow-hidden">
                        <img src={profile} alt="profile-image" width={100} />
                    </div>
                    <div className="ms-5 text-base w-fit md:ms-0">
                        <h1 className="sm:text-2xl font-bold">Jujun Junaedi</h1>
                        <p className="sm:text-base flex flex-col">
                            <span>Cianjur, 11 July 2001</span>
                            <span>jujunjunaedi110107@gmail.com</span>
                            <span>www...</span>
                        </p>
                    </div>
                </section>
                <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                    <p>I am a passionate tech enthusiast and a proud alum of a vocational high school specializing in computer network technology. My journey into the intricate world of programming began here, where I discovered my love for unraveling complexities and weaving them into seamless connections.</p>
                </section>
                <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                    <h2 className="text-xl font-bold">Educational Background</h2>
                    {educationData.map(data => <LisContent key={data.id} title={data.title} description={data.description} years={data.years} />)}
                </section>
                <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                    <h2 className="text-xl font-bold">Tech Passion and Expertise</h2>
                    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                        {skillSet.map(data => <LisContent key={data.name} title={data.name} description={data.status} />)}
                    </div>
                </section>
                <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                    <h2 className="text-xl font-bold">Experiences</h2>
                    <div className="grid grid-cols-1 gap-1">
                        {workExperiences.map(data => <LisContent key={data.id} title={data.title} description={data.description} company={data.company} years={data.years} />)}
                    </div>
                </section>
            </div>
        </div>
    )
}

function LisContent({ title, description, years, company }) {
    return (
        <div className="mt-7">
            <h2 className="font-bold">{title}
            </h2>
            <small>{company}</small>
            <p className="my-3">{description}</p>
            <span className="italic">{years}</span>
        </div>
    )
}

export default CurriculumVitae;