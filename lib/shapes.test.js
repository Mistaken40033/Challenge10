const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should render a circle with the specified color', () => {
        const circle = new Circle();
        circle.setColor('blue');
        const renderedSVG = circle.render(); // Get rendered SVG
        const expectedSVG = `<svg width="300" height="300"><circle cx="150" cy="150" r="80" fill="blue" /></svg>`;
        expect(renderedSVG).toEqual(expectedSVG); // Compare rendered SVG with expected SVG
    });
});

describe('Square', () => {
    it('should render a square with the specified color', () => {
        const square = new Square();
        square.setColor('red');
        const renderedSVG = square.render(); // Get rendered SVG
        const expectedSVG = `<svg width="300" height="300"><rect x="50" y="50" width="200" height="200" fill="red" /></svg>`;
        expect(renderedSVG).toEqual(expectedSVG); // Compare rendered SVG with expected SVG
    });
});

describe('Triangle', () => {
    it('should render a triangle with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const renderedSVG = triangle.render(); // Get rendered SVG
        const expectedSVG = `<svg width="300" height="300"><polygon points="150,18 244,182 56,182" fill="green" /></svg>`;
        expect(renderedSVG).toEqual(expectedSVG); // Compare rendered SVG with expected SVG
    });
});
