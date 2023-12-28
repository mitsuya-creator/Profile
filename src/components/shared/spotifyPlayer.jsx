import React from "react"

function SpotifyPlayer({ trackID, className }) {
    return (
        <iframe src={"https://open.spotify.com/embed/track/" + trackID} width="100%" height="150" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className={className} loading="lazy"></iframe>
    )
}

export default SpotifyPlayer;