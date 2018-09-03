import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';
import { environment } from '../../../../environments/environment';

declare var MathJax: any;
interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  // { name: 'mathJax', src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS_HTML' },
  { name: 'mathJax', src: environment.cdnBaseURL + 'uiscripts/MathJax/MathJax.js?config=TeX-AMS_HTML' }
  // { name: 'jsMathNoImage', src: environment.appBaseURL + 'assets/js/jsMath/plugins/noImageFonts.js' },
  // { name: 'jsMathLoad', src: environment.appBaseURL + 'assets/js/jsMath/easy/load.js' },
  // { name: 'jsMath', src: environment.appBaseURL + 'assets/js/jsMath/jsMath.js' },
  // { name: 'jsMathEasy', src: environment.appBaseURL + 'assets/js/jsMath/jsMath-easy-load.js' },
];

@Directive({
  selector: '[msMaths]'
})
export class MathsDirective implements OnChanges {
  @Input('msMaths') fractionString: string;
  private jsMath;
  useLibrary = 'mathJax';    // or jsMath
  constructor(private el: ElementRef) {
    if (this.useLibrary === 'mathJax') {
      this.setMathJaxConfig();
    } else {
      this.setJSMathConfig();
    }
  }

  setMathJaxConfig() {
    if (typeof (MathJax) === 'undefined') {
      setTimeout(() => {
        this.setMathJaxConfig();
      }, 200);
    } else {
      MathJax.Hub.Config({
        extensions: ['jsMath2jax.js'],
        jax: ['input/TeX', 'output/PreviewHTML'],
        showMathMenu: false,
        showMathMenuMSIE: false,
        tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
      });
    }
  }

  setJSMathConfig() {
    if (typeof (this.jsMath) === 'undefined') {
      if (typeof (window['jsMath']) === 'undefined') {
        setTimeout(() => { this.setJSMathConfig(); }, 500);
      } else {
        this.jsMath = window['jsMath'];
      }
    }
  }

  ngOnChanges(changes: any): void {
    let fractionString: any;
    const changeFractionString = _.get(changes, 'fractionString.currentValue', null);
    if (changeFractionString !== undefined && changeFractionString !== null) {
      this.fractionString = changeFractionString;
      this.el.nativeElement.innerHTML = this.fractionString;
      if (this.useLibrary === 'mathJax') {
        try {
          fractionString = decodeURIComponent(this.fractionString);
        } catch (e) {
          fractionString = this.fractionString;
        }
        fractionString = fractionString.replace(/class='math'/gi, 'class="math"');
        fractionString = fractionString.split(/<span class="math">(.*?)<\/span>/g);
        const rex = /(<([^>]+)>)/ig;
        fractionString.forEach(function (val, key) {
          if (key % 2 === 1) {
            val = '<span class="math">$$' + val.replace(rex, '') + '$$</span>';
          }
          fractionString[key] = val;
        });
        this.el.nativeElement.innerHTML = this.fractionString = fractionString.join(' ');
        this.setMathJaxQueue();
      } else {
        this.setJSMathProcess();
      }
    }
  }

  setMathJaxQueue() {
    if (typeof (MathJax) === 'undefined') {
      setTimeout(() => { this.setMathJaxQueue(); }, 500);
    } else {
      const newThis = this;
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.el.nativeElement], function () {
        setTimeout(() => { newThis.el.nativeElement.style.visibility = ''; newThis.el.nativeElement.style.position = 'static'; }, 5);
      });
    }
  }

  setJSMathProcess() {
    if (typeof (this.jsMath) === 'undefined') {
      setTimeout(() => { this.setJSMathProcess(); }, 500);
    } else {
      try {
        setTimeout(() => this.jsMath.Process(document), 500);
      } catch (err) { if (!environment.production) { console.log(err); } }
    }
  }

}

