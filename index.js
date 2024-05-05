const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
    const shapeChoices = ['Triangle', 'Circle', 'Square'];
    const colorChoices = ['red', 'green', 'blue', 'pink', 'purple'];
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const { shapeType, color, letter } = await inquirer.prompt([
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape:',
            choices: shapeChoices,
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: colorChoices,
        },
        {
            type: 'input',
            name: 'letter',
            message: 'Type 3 letters (e.g., ABC):',
            validate: (input) => {
                input = input.toUpperCase();
                if (input.length !== 3 || !/^[A-Z]+$/.test(input)) {
                    return 'Please enter exactly 3 uppercase letters (A-Z).';
                }
                return true;
            },
        },
    ]);

    let selectedShape;
    switch (shapeType) {
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
        default:
            throw new Error('Invalid shape selected');
    }

    selectedShape.setColor(color);

    // Use the input letters provided by the user
    const randomLetters = letter.toUpperCase();
    const svgContent = selectedShape.renderWithRandomLetters(randomLetters);

    const fileName = `${shapeType.toLowerCase()}_${color}.svg`;
    fs.writeFileSync(`examples/${fileName}`, svgContent);
    console.log(`SVG file created: ${fileName}`);
}

main();
