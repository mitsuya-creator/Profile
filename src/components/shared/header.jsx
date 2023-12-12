import React from "react"
import icon from "@/assets/icon.svg"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function SelectDemo() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function Header() {
    return (
        <main className="w-11/12 h-full dark:bg-slate-800 xl:w-8/12 box-shadow">
            <section className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                    <img src={icon} alt="icon-profile" className="w-16" />
                    <h1 className="font-bold text-3xl mx-3 dark:text-slate-100">JUN</h1>
                </div>
                <div className="flex justify-end">
                    <a href="#" className="mx-5">Blog</a>
                    {/* <select name="" id="web-version" className="mx-5 rounded-md border-0 p-1 w-min">
                        <option value="">current</option>
                        <option>v1.0.0</option>
                    </select> */}
                    <SelectDemo />
                </div>
            </section>
        </main>
    )
}

export default Header;