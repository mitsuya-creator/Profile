import React, { useState } from "react"
import { Accordion } from "@/components/ui/accordion"
import AccordionItems from "@/components/accordionItem"
import {
    asEverythingUnfoldsListTracks,
    futurePalaceListTracks,
    landmvrksListTracks,
    bulletForMyValentineListTracks,
    peterpanListTracks
} from "@/utils/musicData"
import Footer from "@/components/shared/footer"
import SpotifyPlayer from "@/components/shared/spotifyPlayer"

function ContentPlays() {
    const [isPlay, setIsPlay] = useState(false);
    const [trackID, setTrackID] = useState();
    return (
        <div className="w-screen flex justify-center mt-11 dark:text-slate-400">
            <main className="flex flex-col items-center w-11/12 h-full xl:w-8/12">
                <p>
                    Music is like a kaleidoscope of emotions and stories, a symphony that speaks a universal language. It's a journey that transcends boundaries, taking you through a whirlwind of feelings and experiences. The following is a list of music that I often listen to.
                </p>
                <Accordion type="single" collapsible="collapsible" className="py-3 w-full">
                    <AccordionItems nameArtis={"As Everyting Unfolds"} itemTriger={1} listTracks={asEverythingUnfoldsListTracks} setIsPlay={setIsPlay} setTrackID={setTrackID} />
                    <AccordionItems nameArtis={"Future Palace"} itemTriger={2} listTracks={futurePalaceListTracks} setIsPlay={setIsPlay} setTrackID={setTrackID} />
                    <AccordionItems nameArtis={"LANDMVRKS"} itemTriger={3} listTracks={landmvrksListTracks} setIsPlay={setIsPlay} setTrackID={setTrackID} />
                    <AccordionItems nameArtis={"Bullet For My Valentine"} itemTriger={4} listTracks={bulletForMyValentineListTracks} setIsPlay={setIsPlay} setTrackID={setTrackID} />
                    <AccordionItems nameArtis={"Peterpan"} itemTriger={5} listTracks={peterpanListTracks} setIsPlay={setIsPlay} setTrackID={setTrackID} />
                </Accordion>
                {isPlay ? <SpotifyPlayer className="fixed bottom-0 w-11/12 mb-3 xl:-mb-3" trackID={trackID} /> : null}
                <Footer />
            </main>
        </div>
    )
}

export default ContentPlays;