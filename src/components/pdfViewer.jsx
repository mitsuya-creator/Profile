import React from "react"
import pdf from "@/assets/test.pdf"
import {Document, Page, pdfjs} from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function CuriculumVitae() {
    return (
        <Document file={pdf} className={"fixed top-0 z-20 "}>
            <Page pageNumber={1} height={100}>
            <button>ClickMe</button>
            </Page>
        </Document>

    )
}

export default CuriculumVitae;
