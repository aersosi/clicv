import chalk, { Chalk } from 'chalk';

import type { IThemeColors } from 'config.d.themeColors.ts';
import type { TitleAsciiShades } from 'config.d.themeColors.ts';

// Define a set of color shades for ASCII art titles
export const shades: TitleAsciiShades = {
  _1: '#ffffff',
  _2: '#cccccc',
  _3: '#999999',
  _4: '#666666',
  _5: '#333333',
};

// Create Chalk instances for each shade
const shadesChalk: Record<string, Chalk> = {};
Object.entries(shades).forEach(([key, value]) => {
  shadesChalk['shade' + key] = chalk.hex(value);
});

// Export the theme colors, including white and the shades
export const themeColors: IThemeColors = {
  white: chalk.whiteBright,
  ...shadesChalk,
};
