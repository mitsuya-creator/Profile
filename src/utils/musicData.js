const convertToString = initialObject => {
    const tempArray = [];
    initialObject.map(track => tempArray.push(track.trackID))
    return tempArray.toLocaleString();
}


const asEverythingUnfoldsID = "28IImD2QqPWTQ2cWgOMQNT";
const asEverythingUnfoldsListTracks = [
    { title: "ultraviolet", trackID: "4mB4OnvJp7Grfw5U8AQMz9" },
    { title: "slow down", trackID: "3erXSpEt7pYUJp0Y7LGF5Y" },
    { title: "felt like home", trackID: "0wKvLIblTzsWfMzQifvSC8" },
    { title: "blossom", trackID: "2a4xCcTh2zincwtN9CEggS" },
    { title: "stranger in the mirror", trackID: "1e8bIKztk1Wpd0xRWGKnNR" }
]
const asEverythingUnfoldsTracks = convertToString(asEverythingUnfoldsListTracks);

const futurePalaceID = "4QnuZOyl4C9d1keyOZXJ21";
const futurePalaceListTracks = [
    { title: "paradise", trackID: "6Nx2v8RqzBZZicfvZStGep" },
    { title: "a world in tears", trackID: "1nrGpyafUrkIthY4Js3K69" },
    { title: "defeating gravity", trackID: "5mwGYjIaI1XDcXd8hzMrUD" },
    { title: "ghost chapter", trackID: "032Rq5aZRp9Jk5wbOqwt0i" },
    { title: "break free", trackID: "6apd4mQBb1tGCgY6QXJ4OM" },
]
const futurePalaceTracks = convertToString(futurePalaceListTracks);

const landmvrksID = "6G43CiunIxMwb2tQ12vNP6";
const landmvrksListTracks = [
    { title: "lost in a wave", trackID: "6Hye4TXeYUXzU0tWofYdhC" },
    { title: "rainfall", trackID: "134OwiOWwGPkWtXaw3LPzW" },
    { title: "always", trackID: "539ZBzDCnYv0LVGEXbQ3dc" },
    { title: "paralyzed", trackID: "0jTD5qVm2VgKxqXKhnVVOr" },
    { title: "fantasy", trackID: "7Eb9cs3G5DQyi3Qh3o5StT" }
]
const landmvrksTracks = convertToString(landmvrksListTracks);

const bulletForMyValentineID = "7iWiAD5LLKyiox2grgfmUT";
const bulletForMyValentineListTracks = [
    { title: "tears don't fall", trackID: "5pKCDm2fw4k6D6C5Rk646C" },
    { title: "your betrayal", trackID: "25GC50HslaaruyrKjdu0lP" },
    { title: "all these thing I hate", trackID: "6XimI1O15wpfwUdrCnlrxo" },
    { title: "halo", trackID: "0CjJJrpnQCpQMsT4nzezII" },
    { title: "you want a battle? (here's a war)", trackID: "1KCAEG6JcsTzi8ddZzs0nk" }
]
const bulletForMyValentineTracks = convertToString(bulletForMyValentineListTracks);

const peterpanID = "29vPfjqj8X5ri4AJRt8wVM";
const peterpanListTracks = [
    { title: "lihat langkahku", trackID: "08qICrsvxnOf05vpmnRZiw" },
    { title: "dilema besar", trackID: "2hikqsYyEqx5EoDiY2gXeR" },
    { title: "sally sendiri", trackID: "1954ujgEw66pHvn6uMzlJZ" },
    { title: "ada apa denganmu", trackID: "4x7vCCLl1G4h2SSd0xqVfd" },
    { title: "menunggumu", trackID: "3oVXnzrHEcFwyU79b1lRkU" }
]
const peterpanTracks = convertToString(peterpanListTracks);

export {
    asEverythingUnfoldsID, asEverythingUnfoldsTracks,
    futurePalaceID, futurePalaceTracks,
    landmvrksID, landmvrksTracks,
    bulletForMyValentineID, bulletForMyValentineTracks,
    peterpanID, peterpanTracks
}

// https://api.spotify.com/v1/tracks?ids=28IImD2QqPWTQ2cWgOMQNT,4mB4OnvJp7Grfw5U8AQMz9,3erXSpEt7pYUJp0Y7LGF5Y,0wKvLIblTzsWfMzQifvSC8,2a4xCcTh2zincwtN9CEggS,1e8bIKztk1Wpd0xRWGKnNR

