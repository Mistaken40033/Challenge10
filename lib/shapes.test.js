const shape = require ('../shapes.js');

describe('Circle', () => {
    it('should be an a shape class', () => {
        const circle = new Circle();
        circle.setColor('blue', 'red', 'pink');
        expect(circle.render()).toEqual();
    })
});

const shape = require ('../shapes.js');

describe('Square', () => {
    it('should be an a shape class', () => {
        const square = new Square();
        circle.setColor('blue', 'red', 'pink');
        expect(square.render()).toEqual();
    })
});

describe('Triangle', () => {
    it('should be an a shape class', () => {
        const triangle = new Triangle();
        circle.setColor('blue', 'red', 'pink');
        expect(triangle.render()).toEqual();
    })
});
