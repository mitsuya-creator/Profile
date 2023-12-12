import React from "react"
import icon from "@/assets/icon.svg"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px] select dark:bg-white">
                <SelectValue placeholder="Select version" />
            </SelectTrigger>
            <SelectContent className="dark:bg-slate-800 dark:text-slate-100">
                <SelectGroup>
                    <SelectItem value="apple">Current</SelectItem>
                    <SelectItem value="banana">v1.0.0</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function Header() {
    return (
        <div className="w-screen flex justify-center">
            <header className="w-11/12 h-full dark:bg-slate-800 xl:w-8/12 box-shadow">
                <section className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                        <img src={icon} alt="icon-profile" className="w-16" />
                        <h1 className="font-bold text-3xl mx-3 dark:text-slate-100">JUN</h1>
                    </div>
                    <div className="flex justify-end items-center">
                        <a href="#" className="mx-5 dark:text-slate-100">Blog</a>
                        <div className="hidden md:block">
                            <SelectDemo />
                        </div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header;