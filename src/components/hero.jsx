import React from "react"
import icon from "@/assets/icon.svg"

function Hero() {
    return (
        <div className="w-screen flex justify-center my-11">
            <main className="w-11/12 h-full md:w-8/12 md:flex justify-between">
                <section className="md:w-5/6 mr-5">
                    <h1 className="text-2xl font-bold dark:text-slate-100 lg:text-7xl">HI, I'M JUJUN!</h1>
                    <p className="my-10 dark:text-slate-400">I am a passionate tech enthusiast and a proud alum of a vocational high school specializing in computer network technology. My journey into the intricate world of programming began here, where I discovered my love for unraveling complexities and weaving them into seamless connections.</p>
                    <div className="w-full">
                        <button className="bg-violet-700 p-4 rounded-md text-slate-100  ">Download CV</button>
                        <button className="bg-violet-700 p-4 mx-5 rounded-md text-slate-100  ">Contact</button>
                    </div>
                </section>
                <aside className="hidden md:block">
                    <img src={icon} alt="__profile" width="288px"  />
                </aside>
            </main>
        </div>
    )
}

export default Hero;