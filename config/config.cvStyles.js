import { themeColors } from './config.themeColors.js';
import { orangeShades } from './config.themeColors.js';
import chalk from 'chalk';

export const configCvStyles = {
  maxCvWidth: 88,
  textPaddingX: 4,
  boxColor: chalk.whiteBright,
  outlineStyle: 'rounded',
  titleAsciiShades: orangeShades,
  titleStyle: themeColors.shade5.bold,
  subTitleStyle: themeColors.white,
  bodyStyle: themeColors.white.italic,
};
