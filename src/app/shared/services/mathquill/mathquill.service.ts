import { Injectable } from '@angular/core';
import { IMathQuill, MathQuillLoader } from 'mathquill-typescript';

@Injectable()
export class MathQuillService {
    currentKeyboard = 'numeric';
    keyboards = {
        numeric: [
            ['+', '-', '*', '÷', 'x^2', 'x^{y}', '\\sqrt{x}', '\\frac{x}{y}', '{x} \\frac{y}{z}', '.', '(', ')', '→', '←'],
            ['ABC', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del'],
        ],
        alpha: [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', 'Del'],
        ['CapsLock', '123', 'Space', '?', '!']
        ],
        smallAlpha: [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', 'Del'],
        ['CapsLock', '123', 'Space', '?', '!']
        ],
    };
    mqpromise: Promise<IMathQuill>;

    constructor() {
        this.mqpromise = new Promise(resolve => {
            MathQuillLoader.loadMathQuill({}, (mq: IMathQuill) => {
                resolve(mq);
            });
        });
    }

    getKeyboard() {
        return this.keyboards[this.currentKeyboard];
    }

    getCurrentKeyboard() {
        return this.currentKeyboard;
    }

    setCurrentKeyboard(keyboard) {
        this.currentKeyboard = keyboard;
    }

}
