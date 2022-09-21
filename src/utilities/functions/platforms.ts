import { Platform } from "../../types/games/Platform"

export const getPlatformImage = (platform: Platform) : Platform["image_background"] => {
    return platform.image_background;
}