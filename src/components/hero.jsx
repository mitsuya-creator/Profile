import React from "react"

function Hero() {
    return (
        <div className="w-screen flex justify-center my-11">
            <main className="w-11/12 h-full xl:w-8/12">
                <section>
                    <h1 className="text-xl font-bold dark:text-slate-100 lg:text-7xl">HI, I'M JUJUN!</h1>
                    <p className="my-10 dark:text-slate-400">I am a passionate tech enthusiast and a proud alum of a vocational high school specializing in computer network technology. My journey into the intricate world of programming began here, where I discovered my love for unraveling complexities and weaving them into seamless connections.</p>
                    <div>
                        <button>Download CV</button>
                        <button>contact</button>
                    </div>
                </section>
                <aside>
                    <img src="" alt="" />
                </aside>
            </main>
        </div>
    )
}

export default Hero;