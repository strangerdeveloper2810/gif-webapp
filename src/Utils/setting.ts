import { createBrowserHistory } from "history";
export const DOMAIN: string = `https://api.giphy.com/v1/gifs`;
/**
 *
 https://api.giphy.com/v1/gifs/trending?api_key=NRR7ajbCtZtFEazONT1UVSqKFTSnXhYE&limit=25&offset=0&rating=g&bundle=messaging_non_clips
 */
export const keyword_trending: string = "trending";
export const search: string = "search";
export const API_KEY: string = "NRR7ajbCtZtFEazONT1UVSqKFTSnXhYE";
export const limit: number = 100;
export const offset: number = 0;
export const rating: string = "pg-13";
export const bundle: string = "messaging_non_clips";

export const history = createBrowserHistory();
