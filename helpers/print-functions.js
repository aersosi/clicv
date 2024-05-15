import outlineElements from './outline-styles.json' assert {type: 'json'};
import chalk from 'chalk';
import figlet from "figlet";
import {faceAsciiArt} from "../data/faceAsciiArt.js";

export function PrintFunctions(
    boxWidth = 70,
    textPaddingX = 5,
    outlineColor = chalk.whiteBright,
    outlineStyle = 'rounded',
    gradient = {
        1: '#ffffff',
        2: '#cccccc',
        3: '#999999',
        4: '#666666',
        5: '#333333'
    }
) {
    this.length = boxWidth - 2;
    this.color = outlineColor;
    const style = outlineElements[outlineStyle];

    const {
        topRight,
        bottomRight,
        bottomLeft,
        topLeft,
        vertical,
        centerLeft,
        centerRight,
        horizontal,
        empty
    } = style;

    this.Top = function () {
        console.log(
            this.color(
                topLeft +
                horizontal.repeat(this.length) +
                topRight
            )
        );
    };

    this.Bottom = function () {
        console.log(
            this.color(
                bottomLeft + horizontal.repeat(this.length) + bottomRight
            )
        );
    };

    this.Divider = function () {
        console.log(
            this.color(
                centerLeft +
                horizontal.repeat(this.length) +
                centerRight
            )
        );
    };

    this.Empty = function () {
        console.log(
            this.color(
                vertical +
                empty.repeat(this.length) +
                vertical
            )
        );
    };

    this.Text = function (string, textColor = outlineColor) {

        const ellipsis = '...';
        let stringSanotezed;

        if (string.length > this.length + (textPaddingX * 2)) {
            stringSanotezed = string.slice(0, this.length - (textPaddingX * 2) - ellipsis.length) + ellipsis;
        } else {
            stringSanotezed = string.padEnd(this.length - (textPaddingX * 2));
        }

        let rowContent = ' '.repeat(textPaddingX) + stringSanotezed + ' '.repeat(textPaddingX);

        return (
            this.color(vertical) +
            textColor(rowContent) +
            this.color(vertical)
        );
    };

    this.TitleASCII = function (string = 'test', textPaddingX = null) {
        const asciiArt = figlet.textSync(string, {
            font: 'ANSI Regular',
        });

        let lines = asciiArt.split('\n');
        // Remove trailing empty lines
        lines = lines.filter((line, index, arr) => {
            // If it's the last line, check if it is not empty
            if (index === arr.length - 1) {
                return line.trim() !== '';
            }
            // Otherwise, include the line
            return true;
        });

        // default = calculate padding to center title
        if (textPaddingX === null) {
            const maxLength = lines.reduce((max, line) => Math.max(max, line.length), 1);
            textPaddingX = ((this.length + 1) - maxLength) * 0.5;
        }

        const colorValues = Object.values(gradient);
        const coloredLines = lines.map((line, index) => {
            const color = colorValues[index % colorValues.length];
            return chalk.hex(color)(`${' '.repeat(textPaddingX)}${line}`);
        });

        console.log(`\n${coloredLines.join('\n')}`);
    }

    this.FaceASCII = function () {
        console.log(faceAsciiArt)
    }

}