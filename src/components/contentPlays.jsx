import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
function ContentPlays(){
    return(
        <div className="w-screen flex justify-center my-11 dark:text-slate-400">
            <main className="w-11/12 h-full xl:w-8/12">
                <p>
                    Music is like a kaleidoscope of emotions and stories, a symphony that speaks a universal language. It's a journey that transcends boundaries, taking you through a whirlwind of feelings and experiences. The following is a list of music that I often play.
                </p>
                <Accordion type="single" collapsible="collapsible">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
        </div>
    )
}

export default ContentPlays;