const {Triangle, Square, Circle} = require('./shape') //importing index

describe('Validate', ()=> {
    describe('Triangle', ()=>{
        it('should produce a file when user complete their prompt', ()=>{
            const colorFont = 'blue';
            const char = 'abc';
            const colorShape = 'green';
            const shape = 'triangle';
            const test = new Triangle(char, colorFont,shape, colorShape); //WIP
            expect(test.render()).toEqual(`<polygon points="150,10 0,200 500,450" fill="${colorShape}"/>`);
        })
    })
    describe('Square', ()=>{
        it('should produce a file when user complete their prompt', ()=>{
            const colorFont = 'blue';
            const char = 'abc';
            const colorShape = 'green';
            const shape = 'square';
            const test = new Square(char, colorFont,shape, colorShape); //WIP
            expect(test.render()).toEqual(`<rect x="50" y="0" rx="20" ry="20" width="200" height="200" fill="${colorShape}"/>`);
        })
    })
    describe('Circle', ()=>{
        it('should produce a file when user complete their prompt', ()=>{
            const colorFont = 'blue';
            const char = 'abc';
            const colorShape = 'green';
            const shape = 'circle';
            const test = new Circle(char, colorFont,shape, colorShape); //WIP
            expect(test.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${colorShape}"/>`);
        })
    })
})

