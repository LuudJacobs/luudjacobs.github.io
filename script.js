class Text {
    constructor(){
        this.el = document.createElement('h1');
        const name = 'LUUD';
        this.el.innerHTML = name[Math.floor(Math.random() * name.length)];
        this.el.style.fontSize = `${Math.random() * 6 + 3}rem`;
        document.body.appendChild(this.el);
        setInterval(() => this.setTransform(), parseInt(Math.random() * 1800 + 1200, 10));
    }

    get w(){ return window.innerWidth - this.el.clientWidth; }
    get h(){ return window.innerHeight - this.el.clientHeight; }
    get x(){ return this.el.getBoundingClientRect().x; }
    get y(){ return this.el.getBoundingClientRect().y; }

    setColor(){
        const hue = parseInt(this.x / this.w * 361, 10);
        const sat = parseInt(this.y / this.h * 61 + 40, 10);
        this.el.style.color = `hsl(${hue}, ${sat}%, 50%)`;
    }

    setTransform(){
        const x = parseInt(Math.random() * this.w - 0.5 * this.w - 0.5 * this.el.clientWidth, 10);
        const y = parseInt(Math.random() * this.h - 0.5 * this.h - 0.5 * this.el.clientHeight, 10);
        this.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
}

const txts = new Array(80).fill().map(_ => new Text());

const loop = () => {
    txts.forEach(txt => txt.setColor());
    requestAnimationFrame(loop);
};

requestAnimationFrame(() => {
    txts.forEach(txt => txt.setTransform());
    loop();
});

document.body.addEventListener('click', () => txts.push(new Text()));
