class Stream {
    constructor(messageArr) {
        this.symbols = [];

        this.totalSymbols = round(random(8, 20));
        this.fadeInterval = 1.6;
        this.messageArr = messageArr.slice();
        this.backupArr = messageArr.slice();
    }

    generateSymbols(x, y) {
        if(!this.messageArr.length) {
            console.log(this.backupArr);
            this.messageArr = this.backupArr.slice();
            console.log(this.backupArr);
        }

        let opacity = 255;
        for(let i = 0; i <= this.totalSymbols; i++) {
            let symbol = null;

            if(this.messageArr.length) {
                if(i > this.totalSymbols / 4 && (i + this.messageArr.length) <= this.totalSymbols) {
                    symbol = new Symbol(x, y, opacity, this.messageArr[0]);
                    symbol.isStaticSymbol = true;
                    symbol.color = color(180, 255, 180, opacity);
                    symbol.font = 'Segoe UI';
                    symbol.textStyle = BOLD;
                    this.messageArr.splice(0, 1);
                }
            }

            if(symbol == null) {
                symbol = new Symbol(x, y, opacity);
                symbol.setRandomSymbol();
            }
            
            opacity -= 255 / this.totalSymbols / this.fadeInterval;
            this.symbols.push(symbol);
            y += symbol.textSize;
        }
    }

    render() {
        let symbols = this.symbols;
        for(let i = symbols.length - 1; i >= 0; i--) {
            if(symbols[i].isOffCanvas()) {
                let x = symbols[i].x;
                let y = symbols[i].y;
                symbols[i].removeFromWorld();
                symbols.splice(i, 1);
                if(symbols.length === 0) {
                    this.generateSymbols(x, y);
                }
            } else {
                symbols[i].render();
            }
        }
    }
}