export interface TubesConfig {
  colors: string[];
  lights: string[];
  /**
   * Linear intensity (0-300) expected by threejs-components tubes cursor.
   */
  lightIntensity: number;
  /**
   * Bloom strength for the UnrealBloom pass the library wires up.
   */
  bloomStrength: number;
}

export const darkTubes: TubesConfig = {
  colors: ["#A855F7", "#EC4899", "#06B6D4"],
  lights: ["#8B5CF6", "#22D3EE", "#F472B6", "#6366F1"],
  lightIntensity: 200,
  bloomStrength: 1.1,
};

export const lightTubes: TubesConfig = {
  colors: ["#7C3AED", "#2563EB", "#0891B2"],
  lights: ["#8B5CF6", "#38BDF8", "#EC4899", "#6366F1"],
  lightIntensity: 90,
  bloomStrength: 0.45,
};
