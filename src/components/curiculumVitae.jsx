import React from "react"
import profile from "@/assets/profile.png"

function CurriculumVitae(){
    return(
        <div className="w-screen flex flex-col items-center dark:bg-white">
            <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                <div className="rounded-full overflow-hidden">
                    <img src={profile} alt="profile-image" width={100} />
                </div>
                <div>
                    <h1 className="text-xl font-bold">Jujun Junaedi</h1>
                    <p className="flex flex-col">
                        <span>Cianjur, 11 July 2001</span>
                        <span>jujunjunaedi110107@gmail.com</span>
                        <span>www...</span>
                    </p>
                </div>
            </section>
            <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                <p>I am a passionate tech enthusiast and a proud alum of a vocational high school specializing in computer network technology. My journey into the intricate world of programming began here, where I discovered my love for unraveling complexities and weaving them into seamless connections.</p>
            </section>
        </div>
    )
}

export default CurriculumVitae;