import { React, useEffect, useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { selectedButtonNavigate } from "@/utils/selectedButtonNavigate"
import { darkMode } from "@/utils/darkMode"
import { cn } from "cntw"

function ButtonNavigation() {
    const { pathname } = useLocation();
    const [currentOffsetY, setCurrentOffsetY] = useState("0");
    const [hiddenButtonNavigation, setHiddenButtonNavigation] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", function () {
            setCurrentOffsetY(() => window.scrollY);
            setHiddenButtonNavigation(window.scrollY > currentOffsetY)
        })
        selectedButtonNavigate(pathname);

    }, [pathname, currentOffsetY])
    const[isDarkMode, setIsDarkMode] = useState(darkMode());

    const toggleDarkMode = () => {
        const newMode = !isDarkMode
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    useEffect(() => {
        // Check if a preference is saved in local storage
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference !== null) {
            setIsDarkMode(JSON.parse(darkModePreference));
        } else {
            // Set default mode if no preference is found For example, setting dark mode as
            // default
            setIsDarkMode(true);
            localStorage.setItem('darkMode', JSON.stringify(true));
        }
    }, []);

    useEffect(() => {
        // Apply class to the body based on dark mode state
        document
            .body
            .classList
            .toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <nav className={cn("bg-transparent z-10 w-full h-auto flex justify-center fixed inset-x-0 bottom-8 transition-all ease-in-out", hiddenButtonNavigation && "-mb-40")}>
                <div className={cn("button-navigation h-auto flex justify-around items-center rounded-lg border-2 px-5 py-5 mx-5 dark:bg-slate-800 dark:border-violet-800",!isDarkMode && "bg-violet-100" )}>
                    <Link to="/" className="dark:text-slate-400">
                        <section className="flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span>Home</span>
                        </section>
                    </Link>
                    <Link to="/works" className="dark:text-slate-400">
                        <section className="flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <span>Works</span>
                        </section>
                    </Link>
                    <Link to="/plays" className="dark:text-slate-400">
                        <section className="flex flex-col justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                            <span>Plays</span>
                        </section>
                    </Link>
                    <Link to="/messages" className="dark:text-slate-400">
                        <section className="flex flex-col justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <span>Messages</span>
                        </section>
                    </Link>
                    <button className="current-selected flex flex-col justify-center items-center" onClick={toggleDarkMode} id="toggleButton">
                        {isDarkMode ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon transition ease-in-out delay-15 animate-bounce moon-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon transition ease-in-out delay-15 animate-bounce sun-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>}

                        <span>Mode</span>
                    </button>
                </div>
            </nav>
            <Outlet />
        </>
    )
}


export default ButtonNavigation;