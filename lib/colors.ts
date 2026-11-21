/**
 * VERDANTINO Color Management System
 * Single Source of Truth for all color tokens in the entire application.
 *
 * Primary palette:
 * - canvas:  #EBEBD8 (Warm linen / ecru background)
 * - primary: #637545 (Olive green primary / interactive)
 * - forest:  #455230 (Deep forest olive / dark surfaces & headers)
 * - sage:    #9BA685 (Soft sage / secondary accent & subtle borders)
 *
 * Derived harmonious tones:
 * - mist:    #F2F2E5 (Light subtle highlight / pill badge background)
 * - ink:     #242C1B (Deep olive-charcoal for high-readability body copy)
 * - muted:   #5B6846 (Muted olive-gray for secondary text & captions)
 */


export const colors = {
  // Core brand palette
  canvas: "#EBEBD8",     // Warm ivory background
  primary: "#527D43",   // Main botanical green
  forest: "#527D43",    //Main green background
  sage: "#A8B99A",      // Soft sage green

  // Supporting tones
  mist: "#F2F2E5",      // Light background / surface
  ink: "#242C1B",       // Primary text
  muted: "#5B6846",     // Secondary text

  // Additional accents
  botanical: "#6F9958", // Fresh green highlights
  border: "#D8DDCC",    // Subtle borders
} as const;


export type ThemeColors = typeof colors;
export type ColorKey = keyof ThemeColors;
