import { Platform } from "./Platform";

export interface PlatformDetailed {
    platform: Platform;
    released_at: string | Date;
    requirements_en?: string;
    requirements_ru?: string; 
}