import {FetchJson} from "../lib/fetch";

export const API = {
    getTopGames: (data) => FetchJson.get('/games/top', data),
    getLiveStreams: (data) => FetchJson.get('/streams', data),
    getStreamChannel: (data) => FetchJson.get('/channels', data),
    searchChannels: (data) => FetchJson.get('/search/channels', data),
    searchCategories: (data) => FetchJson.get('/search/categories', data),
    getUsers: (data) => FetchJson.get('/users', data),
    getSearchVideos: (data) => FetchJson.get('/videos', data),
}
