function generateRandomLetters() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 0; i < 3; i++) {
        randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomString;
}

class Shape {
    constructor() {
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Subclasses must implement render method');
    }

    renderWithRandomLetters(randomLetters) {
        const shapeSVG = this.render(); 
        const viewBoxSize = 300;
        const shapeSize = viewBoxSize * 0.9;
        const textSize = shapeSize * 0.5;
        const textElement = `<text x="${viewBoxSize / 2}" y="${viewBoxSize / 2}" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="${textSize}px">${randomLetters}</text>`; 
        return `<svg width="${viewBoxSize}" height="${viewBoxSize}">${shapeSVG}${textElement}</svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="300"><polygon points="150,18 244,182 56,182" fill="${this.color}" /></svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="300"><circle cx="150" cy="150" r="80" fill="${this.color}" /></svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="300"><rect x="50" y="50" width="200" height="200" fill="${this.color}" /></svg>`;
    }
}

module.exports = { Triangle, Circle, Square };
