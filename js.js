


const e = React.createElement;

function e(tagName, params, innerHTML){

   '<'+ tagName + ' ' + params + ' >' + innerHTML + '<' +tagName+'/>'


    <button onclick='' >Нравится<button/>
}

// Отобразить <button> с текстом «Нравится»
 e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Нравится'
);


















class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.type = 'прямоугольник';
    }

    area() {
        return this.height * this.width;
    }

    length() {
        return this.height * 2 + this.width * 2;
    }
}


class Square extends Rectangle {

    constructor(width) {
        super(width, width);
        this.type = 'квадрат';
    }
}


var rectangle = new Rectangle(3, 2);


var square = new Square(2);

square.area();
square.length();