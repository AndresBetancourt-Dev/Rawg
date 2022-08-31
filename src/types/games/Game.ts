import { ESRB } from "./ESRB";
import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { PlatformDetailed } from "./PlatformDetailed";
import { Rating } from "./Rating";
import { Screenshot } from "./Screenshot";
import { Store } from "./Store";
import { Tag } from "./Tag";

export interface Game{
    added: number;
    added_by_status: {
        beaten: number;
        dropped: number;
        owned: number;
        playing: number;
        toplay: number;
        yet: number;
    };
    background_image: string;
    clip?: string; 
    dominant_color: string;
    esrb_rating: ESRB;
    genres: Genre[];
    id: number;
    metacritic: number;
    name: string;
    parent_platforms: Platform[];
    platforms: PlatformDetailed[];
    playtime: number;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    released: string | Date;
    reviews_count: number;
    reviews_text_count: number;
    saturated_color: string;
    short_screenshots: Screenshot[];
    slug: string;
    stores: Store[];
    suggestions_count: number;
    tags: Tag[];
    tba: boolean;
    updated: string | Date;
    user_game?: string;
}