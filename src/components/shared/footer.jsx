import React from "react"
import { getYear } from "@/utils/getYear"
import { FaInstagram, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="w-screen flex justify-center mb-40 md:mb-40">
            <div className="w-11/12 h-full  xl:w-8/12 ">
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <CardFooter
                        icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={
                                1.5
                            }
                            stroke="currentColor"
                            className="w-6 h-6 stroke-slate-100 dark:stroke-slate-100 md:w-9 md:h-9" > <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>}
                        title={"Address"}
                        description={"Babakansari village 43284,Cianjur--WJ"} />
                    <Link to={"mailto:jujunjunaedi110107@gmail.com"}>
                        <CardFooter
                            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={
                                1.5
                            }
                                stroke="currentColor" className="w-6 h-6 stroke-slate-100 dark:stroke-slate-100 md:w-9 md:h-9" > <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>}
                            title={"Send me emaiL"}
                            description={"jujunjunaedi110107@gmail.com"} />
                    </Link>
                </section>
                <section
                    className="border-t-2 w-inherit h-full mt-11 border-violet-800 dark:border-violet-aeu flex flex-col-reverse md:justify-between md:flex-row ">
                    <span className="text-base mt-2 dark:text-slate-400">&copy; takadotdev {getYear} | All Rights Reserved</span>
                    <div className="flex flex-col mt-3 md:justify-between md:flex-row">
                        <Link to={"https://www.instagram.com/takachan0012_/"}>
                            <section
                                className="hidden mb-2 bg-violet-800  dark:bg-violet-aeu items-center rounded-full p-3 w-12 h-12 hover:bg-violet-900 md:ms-2 md:block">
                                <FaInstagram className="w-6 h-6 fill-slate-100 dark:fill-slate-200" />
                            </section>
                            <span className="text-base dark:text-slate-400 md:hidden">Instagram</span>
                        </Link>

                        <Link to={"https://github.com/takachan0012"}>
                            <section
                                className="hidden mb-2 bg-violet-800  dark:bg-violet-aeu items-center rounded-full p-3 w-12 h-12 hover:bg-violet-900 md:ms-2 md:block">
                                <FaGithub className="w-6 h-6 fill-slate-100 dark:fill-slate-200" />
                            </section>
                            <span className="text-base dark:text-slate-400 md:hidden">Github</span>
                        </Link>

                        <Link to={"https://twitter.com/takachan0012_"}>
                            <section
                                className="hidden mb-2 bg-violet-800  dark:bg-violet-aeu items-center rounded-full p-3 w-12 h-12 hover:bg-violet-900 md:ms-2 md:block">
                                <FaXTwitter className="w-6 h-6 fill-slate-100 dark:fill-slate-200" />
                            </section>
                            <span className="text-base dark:text-slate-400 md:hidden">Xtwitter</span>
                        </Link>

                        <Link to={"https://www.linkedin.com/in/jujun-junaedi-514b1a1b4"}>
                            <section
                                className="hidden mb-2 bg-violet-800  dark:bg-violet-aeu items-center rounded-full p-3 w-12 h-12 hover:bg-violet-900 md:ms-2 md:block">
                                <FaLinkedin className="w-6 h-6 fill-slate-100 dark:fill-slate-200" />
                            </section>
                            <span className="text-base dark:text-slate-400 md:hidden">LinkedIn</span>
                        </Link>
                    </div>
                </section>
            </div>

        </div>
    )
}

function CardFooter({ icon, title, description }) {
    return (
        <section className="flex justify-start items-center h-full w-full">
            <div className="rounded-full bg-violet-800 p-3 dark:bg-violet-aeu">
                {icon}
            </div>
            <section className="ms-4">
                <h3 className="text-lg font-bold mb-3 md:text-xl dark:text-slate-100">{title}</h3>
                <p className="text-base md:text-md dark:text-slate-400">{description}</p>
            </section>
        </section>
    )
}

export default Footer;