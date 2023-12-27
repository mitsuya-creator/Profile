//spotify api => utils>api>getMusic
//trackID 
//example when playing https://open.spotify.com/track/1KCAEG6JcsTzi8ddZzs0nk
//img_src 300x300

const asEverythingUnfoldsID = "28IImD2QqPWTQ2cWgOMQNT";
const asEverythingUnfoldsListTracks = [
    { title: "Ultraviolet", trackID: "4mB4OnvJp7Grfw5U8AQMz9", img_src: "https://i.scdn.co/image/ab67616d00001e0209e0668331eb33f694899a89" },
    { title: "Slow Down", trackID: "3erXSpEt7pYUJp0Y7LGF5Y", img_src: "https://i.scdn.co/image/ab67616d00001e0209e0668331eb33f694899a89" },
    { title: "Felt like Home", trackID: "0wKvLIblTzsWfMzQifvSC8", img_src: "https://i.scdn.co/image/ab67616d00001e0209e0668331eb33f694899a89" },
    { title: "Blossom", trackID: "2a4xCcTh2zincwtN9CEggS", img_src: "https://i.scdn.co/image/ab67616d00001e0209e0668331eb33f694899a89" },
    { title: "Stranger in the Mirror", trackID: "1e8bIKztk1Wpd0xRWGKnNR", img_src: "https://i.scdn.co/image/ab67616d00001e024d2a8404ce3c21a5728cc5a5" }
]

const futurePalaceID = "4QnuZOyl4C9d1keyOZXJ21";
const futurePalaceListTracks = [
    { title: "Paradise", trackID: "6Nx2v8RqzBZZicfvZStGep", img_src: "https://i.scdn.co/image/ab67616d00001e026d6b13d1fc6d3af5ae92f61e" },
    { title: "A World in Tears", trackID: "1nrGpyafUrkIthY4Js3K69", img_src: "https://i.scdn.co/image/ab67616d00001e026d6b13d1fc6d3af5ae92f61e" },
    { title: "Defeating Gravity", trackID: "5mwGYjIaI1XDcXd8hzMrUD", img_src: "https://i.scdn.co/image/ab67616d00001e026d6b13d1fc6d3af5ae92f61e" },
    { title: "Ghost Chapter", trackID: "032Rq5aZRp9Jk5wbOqwt0i", img_src: "https://i.scdn.co/image/ab67616d00001e022d921a5acd7f79bb92adb554" },
    { title: "Break Free", trackID: "6apd4mQBb1tGCgY6QXJ4OM", img_src: "https://i.scdn.co/image/ab67616d00001e022d921a5acd7f79bb92adb554" },
]

const landmvrksID = "6G43CiunIxMwb2tQ12vNP6";
const landmvrksListTracks = [
    { title: "Lost in A Wave", trackID: "6Hye4TXeYUXzU0tWofYdhC", img_src: "https://i.scdn.co/image/ab67616d00001e02044327565119bf13591a654d" },
    { title: "Rainfall", trackID: "134OwiOWwGPkWtXaw3LPzW", img_src: "https://i.scdn.co/image/ab67616d00001e025d10a304e377eeb4369e830e" },
    { title: "Always", trackID: "539ZBzDCnYv0LVGEXbQ3dc", img_src: "https://i.scdn.co/image/ab67616d00001e025d10a304e377eeb4369e830e" },
    { title: "Paralyzed", trackID: "0jTD5qVm2VgKxqXKhnVVOr", img_src: "https://i.scdn.co/image/ab67616d00001e025d10a304e377eeb4369e830e" },
    { title: "Fantasy", trackID: "7Eb9cs3G5DQyi3Qh3o5StT", img_src: "https://i.scdn.co/image/ab67616d00001e02aec702cbdf8b437e18049898" }
]

const bulletForMyValentineID = "7iWiAD5LLKyiox2grgfmUT";
const bulletForMyValentineListTracks = [
    { title: "Tears Don't Fall", trackID: "5pKCDm2fw4k6D6C5Rk646C", img_src: "https://i.scdn.co/image/ab67616d00001e0254113df5ab7a69df8a44c37e" },
    { title: "Your Betrayal", trackID: "25GC50HslaaruyrKjdu0lP", img_src: "https://i.scdn.co/image/ab67616d00001e02f467961e3089fd694c893584" },
    { title: "All These Things I Hate (Revolve Around Me)", trackID: "6XimI1O15wpfwUdrCnlrxo", img_src: "https://i.scdn.co/image/ab67616d00001e0254113df5ab7a69df8a44c37e" },
    { title: "Halo", trackID: "0CjJJrpnQCpQMsT4nzezII", img_src: "https://i.scdn.co/image/ab67616d00001e02a3e0968d2903102a903dea45" },
    { title: "You Want a Battle? (Here's a War)", trackID: "1KCAEG6JcsTzi8ddZzs0nk", img_src: "https://i.scdn.co/image/ab67616d00001e02b5836f92f626bb4fe05b016a" }
]

const peterpanID = "29vPfjqj8X5ri4AJRt8wVM";
const peterpanListTracks = [
    { title: "Lihat Langkahku", trackID: "08qICrsvxnOf05vpmnRZiw", img_src: "https://i.scdn.co/image/ab67616d00001e0256da70587db2e7d8303edc82" },
    { title: "Dilema Besar", trackID: "2hikqsYyEqx5EoDiY2gXeR", img_src: "https://i.scdn.co/image/ab67616d00001e02ca085cd8954ec348870444f4" },
    { title: "Sally Sendiri", trackID: "1954ujgEw66pHvn6uMzlJZ", img_src: "https://i.scdn.co/image/ab67616d00001e02ca085cd8954ec348870444f4" },
    { title: "Ada Apa Denganmu", trackID: "4x7vCCLl1G4h2SSd0xqVfd", img_src: "https://i.scdn.co/image/ab67616d00001e02ca085cd8954ec348870444f4" },
    { title: "Menunggumu", trackID: "3oVXnzrHEcFwyU79b1lRkU", img_src: "https://i.scdn.co/image/ab67616d00001e02ca085cd8954ec348870444f4" }
]

export {
    asEverythingUnfoldsID, asEverythingUnfoldsListTracks,
    futurePalaceID, futurePalaceListTracks,
    landmvrksID, landmvrksListTracks,
    bulletForMyValentineID, bulletForMyValentineListTracks,
    peterpanID, peterpanListTracks,
}

