class Shape {
    constructor(character, colorFont, shape, colorShape) {
        this.character = character;
        this.colorFont = colorFont;
        this.shape = shape;
        this.colorShape = colorShape;
      }
}
//circle
class Circle extends Shape { //testing
    constructor(character, colorFont, shape, colorShape) {
        super(character, colorFont, shape, colorShape);
      }
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.colorShape}"/>`
    
    }
}

//triangle
class Triangle extends Shape {
    constructor(character, colorFont, shape, colorShape) {
        super(character, colorFont, shape, colorShape);
      }
    render(){
        return `<polygon points="150,10 0,200 500,450" fill="${this.colorShape}"/>` 
        // need to fix dimensions later
    }
}
//square
class Square extends Shape {
    constructor(character, colorFont, shape, colorShape) {
        super(character, colorFont, shape, colorShape);
      }
      render(){
        return `<rect x="50" y="0" rx="20" ry="20" width="200" height="200" fill="${this.colorShape}"/>`
      }
}

function userIcon(data) {
    let shape = '';
 
    if(data.shape === 'circle'){
        shape = new Circle(data.character, data.colorFont, data.shape, data.colorShape).render();
    } else if(data.shape === 'square') {
        shape = new Square(data.character, data.colorFont, data.shape, data.colorShape).render();
    } else {
        shape = new Triangle(data.character, data.colorFont, data.shape, data.colorShape).render();
    }
    return`
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorFont}">${data.character}</text>

</svg>`
}

module.exports = {Square, Triangle, Circle, userIcon};
