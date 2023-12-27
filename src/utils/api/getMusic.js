import axios from "axios"
import qs from "qs"
import React, { useEffect, useState } from "react";

const useGetAuth = () => {
    const [auth, setAuth] = useState("");
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    const headers = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
            username: clientId,
            password: clientSecret
        }
    };
    const data = {
        grant_type: 'client_credentials'
    };
    useEffect(() => {
        const getAuth = async () => {
            try {
                const response = await axios.post(
                    'https://accounts.spotify.com/api/token',
                    qs.stringify(data),
                    headers
                )
                setAuth(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAuth();
    }, [])
    return auth;
};



const useGetArtist = (auth, artisID) => {
    const [artist, setArtist] = useState("");
    const { token_type, access_token } = auth;
    const headers = {
        headers: {
            Authorization: token_type + " " + access_token
        }
    }
    useEffect(() => {
        const getArtist = async () => {
            try {
                const response = await axios.get("https://api.spotify.com/v1/artists/" + artisID, headers)
                setArtist(response)
            } catch (e) {
                console.log(e)
            }
        }
        getArtist();
    }, [])
    return artist;
}

const useGetTracks = (auth, artisID, tracksID) => {
    const [tracks, setTracks] = useState();
    const { token_type, access_token } = auth;
    const headers = {
        headers: {
            Authorization: token_type + " " + access_token
        }
    }

    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await axios.get("https://api.spotify.com/v1/tracks?ids=" + artisID + "," + tracksID, headers)
                setTracks(response)
            } catch (e) {
                console.log(e)
            }
        }
        getTracks();
    }, [])
    return tracks;
}


export { useGetAuth, useGetArtist, useGetTracks }