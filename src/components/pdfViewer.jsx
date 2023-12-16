import React from "react"
import pdf from "@/assets/test.pdf"
import {Document, Page, pdfjs} from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function CuriculumVitae({setIsShow,isShow}) {
    return (
        <Document file={pdf} className={"fixed flex items-center top-2 z-20"} loading={<Loading/>}>
            <Page pageNumber={1} width={350} height={350} className={"flex flex-col md:flex-row md:justify-around"}>
                <section className="flex w-full justify-evenly md:w-fit md:h-fit">
                    <button className="bg-violet-700 p-4 rounded-md text-slate-100  " onClick={() => setIsShow(!isShow)}>Close</button>
                    <button className="bg-violet-700 p-4 rounded-md text-slate-100  "onClick={() => window.print()}>Download</button>
                </section>
            </Page>
        </Document>

    )
}

function Loading(){
    return(
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CuriculumVitae;
