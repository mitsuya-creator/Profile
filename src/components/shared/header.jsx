import React from "react"
import icon from "@/assets/icon.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-screen flex justify-center overflow-x-hidden sticky top-0 z-50 drop-shadow-md">
            <header className="bg-white-ivory w-11/12 h-full dark:bg-violet-aeu xl:w-8/12 ">
                <section className="flex justify-between items-center">
                    <Link to={"/"}>
                        <div className="flex justify-start items-center">
                            <img src={icon} alt="icon-profile" className="w-16" />
                            <h1 className="font-bold text-3xl mx-3 dark:text-white-snow">JUN</h1>
                        </div>
                    </Link>
                    <div className="flex justify-end items-center">
                        <Link to={"https://medium.com/@takachan0012"} className="mx-5 dark:text-white-snow">
                            Article
                        </Link>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header;