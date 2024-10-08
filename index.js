import { argv } from 'node:process';
import randomColor from 'randomcolor';

// Pattern to match grid size user input
const gridPattern = new RegExp('\\d{1,2}x\\d{1,2}');

// Determine random color and grid size based on user input
let color;
let width = 31;
let height = 9;
if (argv.length >= 5) {
  const gridSize = argv[2];
  if (gridSize.match(gridPattern)) {
    const sliceIndex = gridSize.indexOf('x');
    width = gridSize.slice(0, sliceIndex);
    height = gridSize.slice(sliceIndex + 1, gridSize.length);
  }
  color = randomColor({
    hue: argv[3],
    luminosity: argv[4],
  });
} else if (argv.length === 4) {
  color = randomColor({
    hue: argv[2],
    luminosity: argv[3],
  });
} else if (argv.length === 3) {
  color = randomColor({
    hue: argv[2],
  });
} else {
  color = randomColor();
}

// Convert random color from hex to rgb
const r = Number('0x' + color.slice(1, 3));
const g = Number('0x' + color.slice(3, 5));
const b = Number('0x' + color.slice(5, 7));

// Print color grid to terminal
console.log(
  `\x1b[38;2;${r};${g};${b}m%s\x1b[0m`,
  buildColorGrid(color, width, height),
);

function buildColorGrid(gridColor, gridWidth, gridHeight) {
  // ***** Input check *****

  // Input constraints:
  // 1. width and height need to be uneven numbers
  // 2. width and height need to be equal to or greater than minimum constraint values mentioned below
  const minWidth = 11;
  const minHeight = 5;

  // Check if width is within constraints and correct if necessary
  if (gridWidth < minWidth) {
    console.log(
      `Warning: Width of ${gridWidth} is to small. Using minimum width of ${minWidth} instead.`,
    );
    gridWidth = minWidth;
  } else if (gridWidth % 2 === 0) {
    gridWidth = gridWidth - 1;
    console.log(
      `Warning: Width has to be uneven. Using width of ${gridWidth} instead.`,
    );
  }

  // Check if height is within constraints and correct if necessary
  if (gridHeight < minHeight) {
    console.log(
      `Warning: Height of ${gridHeight} is to small. Using minimum height of ${minHeight} instead.`,
    );
    gridHeight = minHeight;
  } else if (gridHeight % 2 === 0) {
    gridHeight = gridHeight - 1;
    console.log(
      `Warning: Height has to be uneven. Using height of ${gridHeight} instead.`,
    );
  }
  // ***** End of input check *****

  // Calculate color grid
  let fill = '';
  for (let i = 0; i < (gridHeight - 3) / 2; i++) {
    fill = fill + '#'.repeat(gridWidth) + '\n';
  }

  const border = '#' + ' '.repeat(gridWidth - 2) + '#\n';
  const colorInfo =
    '#' +
    ' '.repeat((gridWidth - 9) / 2) +
    gridColor +
    ' '.repeat((gridWidth - 9) / 2) +
    '#\n';

  const grid = fill + border + colorInfo + border + fill;

  return grid;
}
