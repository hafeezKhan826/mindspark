var singleDigit = Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"),
  doubleDigit = Array("eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"),
  tenDigit = Array("ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"),
  fracSingularSingleDigit = Array("first", "half", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"),
  fracSingularDoubleDigit = Array("eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth"),
  fracSingularTenDigit = Array("tenth", "twentieth", "thirtieth", "fortieth", "fiftieth", "sixtieth", "seventieth", "eightieth", "ninetieth"),
  fracPluralSingleDigit = Array("firsts", "halves", "thirds", "fourths", "fifths", "sixths", "sevenths", "eighths", "ninths"),
  fracPluralDoubleDigit = Array("elevenths", "twelfths", "thirteenths", "fourteenths", "fifteenths", "sixteenths", "seventeenths", "eighteenths", "nineteenths"),
  fracPluralTenDigit = Array("tenths", "twentieths", "thirtieths", "fortieths", "fiftieths", "sixtieths", "seventieths", "eightieths", "ninetieths"),
  nParser = function () {
    function e() {
      this.yy = {}
    }
    var t = {
        trace: function () {},
        yy: {},
        symbols_: {
          error: 2,
          expressions: 3,
          e: 4,
          ".": 5,
          EOF: 6,
          units_final: 7,
          c_units: 8,
          other_units_final: 9,
          money: 10,
          "+": 11,
          "-": 12,
          "*": 13,
          "/": 14,
          "^": 15,
          NUMBER: 16,
          "!": 17,
          "(": 18,
          ")": 19,
          MFRAC: 20,
          w: 21,
          integer: 22,
          magnitude: 23,
          E: 24,
          PI: 25,
          PERCENT: 26,
          SQRT: 27,
          INUMBER: 28,
          FNUMBER: 29,
          crore: 30,
          crores: 31,
          billion: 32,
          billions: 33,
          fracWords: 34,
          AND: 35,
          ",": 36,
          millions: 37,
          BILLIONS: 38,
          million: 39,
          BILLION: 40,
          MILLIONS: 41,
          thousand: 42,
          thousands: 43,
          MILLION: 44,
          lakhs: 45,
          CRORES: 46,
          lakh: 47,
          CRORE: 48,
          LAKHS: 49,
          LAKH: 50,
          hundreds: 51,
          THOUSANDS: 52,
          hundred: 53,
          THOUSAND: 54,
          tens: 55,
          HUNDREDS: 56,
          ten: 57,
          HUNDRED: 58,
          one: 59,
          TEN: 60,
          DOUBLE_DIGIT: 61,
          TEN_DIGIT: 62,
          HYPHEN_DIGIT: 63,
          ones: 64,
          TENS: 65,
          SINGLE_DIGIT: 66,
          ONES: 67,
          oneths: 68,
          oneth: 69,
          tenth: 70,
          tenthsGroup: 71,
          tenDigith: 72,
          tenDigiths: 73,
          quarter: 74,
          hundredths: 75,
          thousandths: 76,
          FRAC_HYPHEN_DIGIT: 77,
          FRAC_SINGULAR_TEN_DIGIT: 78,
          FRAC_PLURAL_TEN_DIGIT: 79,
          FRAC_SINGULAR_DOUBLE_DIGIT: 80,
          FRAC_PLURAL_DOUBLE_DIGIT: 81,
          FRAC_SINGULAR_SINGLE_DIGIT: 82,
          FRAC_PLURAL_SINGLE_DIGIT: 83,
          QUARTER: 84,
          HUNDREDTH: 85,
          THOUSANDTH: 86,
          units: 87,
          METRE: 88,
          KILOGRAM: 89,
          SECOND: 90,
          KILOMETRE: 91,
          MILLIMETRE: 92,
          CENTIMETRE: 93,
          LITRE: 94,
          KILOLITRE: 95,
          MILLILITRE: 96,
          CENTILITRE: 97,
          MILE: 98,
          YARD: 99,
          FOOT: 100,
          INCH: 101,
          GRAM: 102,
          CENTIGRAM: 103,
          MILLIGRAM: 104,
          MICROGRAM: 105,
          POUND: 106,
          OUNCE: 107,
          TON: 108,
          NANOSECOND: 109,
          MICROSECOND: 110,
          MILLISECOND: 111,
          MINUTE: 112,
          HOUR: 113,
          DAY: 114,
          WEEK: 115,
          MONTH: 116,
          YEAR: 117,
          KELVIN: 118,
          other_units: 119,
          CELCIUS: 120,
          FAHRENHEIT: 121,
          DEGREE: 122,
          RADIAN: 123,
          SQUARE: 124,
          CUBIC: 125,
          RUPEE: 126,
          RUPEES: 127,
          $accept: 0,
          $end: 1
        },
        terminals_: {
          2: "error",
          5: ".",
          6: "EOF",
          7: "units_final",
          11: "+",
          12: "-",
          13: "*",
          14: "/",
          15: "^",
          16: "NUMBER",
          17: "!",
          18: "(",
          19: ")",
          20: "MFRAC",
          24: "E",
          25: "PI",
          26: "PERCENT",
          27: "SQRT",
          28: "INUMBER",
          29: "FNUMBER",
          35: "AND",
          36: ",",
          38: "BILLIONS",
          40: "BILLION",
          41: "MILLIONS",
          44: "MILLION",
          46: "CRORES",
          48: "CRORE",
          49: "LAKHS",
          50: "LAKH",
          52: "THOUSANDS",
          54: "THOUSAND",
          56: "HUNDREDS",
          58: "HUNDRED",
          60: "TEN",
          61: "DOUBLE_DIGIT",
          62: "TEN_DIGIT",
          63: "HYPHEN_DIGIT",
          65: "TENS",
          66: "SINGLE_DIGIT",
          67: "ONES",
          77: "FRAC_HYPHEN_DIGIT",
          78: "FRAC_SINGULAR_TEN_DIGIT",
          79: "FRAC_PLURAL_TEN_DIGIT",
          80: "FRAC_SINGULAR_DOUBLE_DIGIT",
          81: "FRAC_PLURAL_DOUBLE_DIGIT",
          82: "FRAC_SINGULAR_SINGLE_DIGIT",
          83: "FRAC_PLURAL_SINGLE_DIGIT",
          84: "QUARTER",
          85: "HUNDREDTH",
          86: "THOUSANDTH",
          88: "METRE",
          89: "KILOGRAM",
          90: "SECOND",
          91: "KILOMETRE",
          92: "MILLIMETRE",
          93: "CENTIMETRE",
          94: "LITRE",
          95: "KILOLITRE",
          96: "MILLILITRE",
          97: "CENTILITRE",
          98: "MILE",
          99: "YARD",
          100: "FOOT",
          101: "INCH",
          102: "GRAM",
          103: "CENTIGRAM",
          104: "MILLIGRAM",
          105: "MICROGRAM",
          106: "POUND",
          107: "OUNCE",
          108: "TON",
          109: "NANOSECOND",
          110: "MICROSECOND",
          111: "MILLISECOND",
          112: "MINUTE",
          113: "HOUR",
          114: "DAY",
          115: "WEEK",
          116: "MONTH",
          117: "YEAR",
          118: "KELVIN",
          120: "CELCIUS",
          121: "FAHRENHEIT",
          122: "DEGREE",
          123: "RADIAN",
          124: "SQUARE",
          125: "CUBIC",
          126: "RUPEE",
          127: "RUPEES"
        },
        productions_: [0, [3, 3],
          [3, 2],
          [3, 3],
          [3, 2],
          [3, 3],
          [3, 2],
          [3, 2],
          [3, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 2],
          [4, 3],
          [4, 4],
          [4, 1],
          [4, 1],
          [4, 1],
          [22, 2],
          [22, 2],
          [22, 1],
          [23, 1],
          [23, 1],
          [23, 1],
          [23, 2],
          [23, 2],
          [23, 4],
          [23, 1],
          [23, 1],
          [21, 1],
          [21, 1],
          [21, 1],
          [21, 1],
          [21, 1],
          [21, 3],
          [21, 3],
          [33, 1],
          [33, 2],
          [33, 2],
          [33, 3],
          [32, 1],
          [32, 1],
          [32, 2],
          [32, 2],
          [32, 2],
          [32, 3],
          [32, 3],
          [37, 2],
          [37, 2],
          [37, 3],
          [39, 1],
          [39, 2],
          [39, 2],
          [39, 2],
          [39, 3],
          [39, 3],
          [31, 1],
          [31, 2],
          [31, 2],
          [31, 3],
          [30, 1],
          [30, 1],
          [30, 2],
          [30, 2],
          [30, 2],
          [30, 3],
          [30, 3],
          [45, 1],
          [45, 2],
          [45, 2],
          [45, 3],
          [47, 1],
          [47, 1],
          [47, 2],
          [47, 2],
          [47, 2],
          [47, 3],
          [47, 3],
          [43, 1],
          [43, 2],
          [43, 2],
          [43, 3],
          [42, 1],
          [42, 1],
          [42, 2],
          [42, 2],
          [42, 2],
          [42, 3],
          [42, 3],
          [51, 1],
          [51, 2],
          [51, 2],
          [51, 3],
          [53, 1],
          [53, 1],
          [53, 2],
          [53, 2],
          [53, 2],
          [53, 3],
          [53, 3],
          [57, 1],
          [57, 1],
          [57, 1],
          [57, 1],
          [57, 2],
          [57, 1],
          [55, 1],
          [55, 2],
          [55, 2],
          [55, 2],
          [55, 3],
          [59, 1],
          [64, 2],
          [64, 2],
          [64, 2],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [34, 1],
          [72, 1],
          [72, 2],
          [72, 2],
          [72, 2],
          [72, 2],
          [72, 2],
          [73, 1],
          [73, 2],
          [73, 2],
          [73, 2],
          [73, 2],
          [73, 2],
          [70, 1],
          [70, 2],
          [70, 2],
          [70, 2],
          [70, 2],
          [70, 2],
          [71, 1],
          [71, 2],
          [71, 2],
          [71, 2],
          [71, 2],
          [71, 2],
          [69, 1],
          [69, 2],
          [69, 2],
          [69, 2],
          [69, 2],
          [69, 2],
          [68, 1],
          [68, 2],
          [68, 2],
          [68, 2],
          [68, 2],
          [68, 2],
          [74, 1],
          [74, 2],
          [74, 2],
          [74, 2],
          [74, 2],
          [74, 2],
          [74, 2],
          [75, 1],
          [75, 2],
          [75, 2],
          [75, 2],
          [75, 2],
          [75, 2],
          [75, 2],
          [76, 1],
          [76, 2],
          [76, 2],
          [76, 2],
          [76, 2],
          [76, 2],
          [76, 2],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [87, 1],
          [119, 2],
          [119, 3],
          [119, 2],
          [119, 3],
          [119, 2],
          [119, 3],
          [119, 2],
          [119, 3],
          [119, 2],
          [119, 3],
          [119, 3],
          [119, 4],
          [119, 4],
          [119, 4],
          [119, 4],
          [119, 4],
          [8, 1],
          [8, 2],
          [8, 2],
          [8, 2],
          [8, 4],
          [8, 3],
          [8, 3],
          [8, 5],
          [8, 3],
          [8, 3],
          [8, 5],
          [8, 3],
          [8, 5],
          [8, 3],
          [8, 2],
          [8, 2],
          [8, 3],
          [8, 3],
          [9, 1],
          [9, 3],
          [10, 2],
          [10, 2],
          [10, 2],
          [10, 2]
        ],
        performAction: function (e, t, r, s, i, n, a) {
          var h = n.length - 1;
          switch (i) {
            case 1:
              return n[h - 2].toFixed(4).toString();
            case 2:
              return n[h - 1].toFixed(4).toString();
            case 3:
              for (var o = n[h - 2], c = Number(n[h - 2][0]).toFixed(4) + " ", l = ["m", "kg", "s", "A", "K", "mol", "cd", "radian"], u = 1, f = 1; f < 9; f++) 0 != o[f] && (1 == u ? (c += l[f - 1] + "^(" + o[f] + ")", u = 0) : c += " * " + l[f - 1] + "^(" + o[f] + ")");
              return c.toString();
            case 4:
              for (var o = n[h - 1], c = Number(n[h - 1][0]).toFixed(4) + " ", l = ["m", "kg", "s", "A", "K", "mol", "cd", "radian"], u = 1, f = 1; f < 9; f++) 0 != o[f] && (1 == u ? (c += l[f - 1] + "^(" + o[f] + ")", u = 0) : c += " * " + l[f - 1] + "^(" + o[f] + ")");
              return c.toString();
            case 5:
              for (var o = n[h - 2], c = Number(n[h - 2][0]).toFixed(4) + " ", l = ["m", "kg", "s", "A", "K", "mol", "cd", "radian"], u = 1, f = 1; f < 9; f++) 0 != o[f] && (1 == u ? (c += l[f - 1] + "^(" + o[f] + ")", u = 0) : c += " * " + l[f - 1] + "^(" + o[f] + ")");
              return c.toString();
            case 6:
              for (var o = n[h - 1], c = Number(n[h - 1][0]).toFixed(4) + " ", l = ["m", "kg", "s", "A", "K", "mol", "cd", "radian"], u = 1, f = 1; f < 9; f++) 0 != o[f] && (1 == u ? (c += l[f - 1] + "^(" + o[f] + ")", u = 0) : c += " * " + l[f - 1] + "^(" + o[f] + ")");
              return c.toString();
            case 7:
              return n[h - 1];
            case 8:
              return n[h - 2];
            case 9:
              this.$ = n[h - 2] + n[h];
              break;
            case 10:
              this.$ = n[h - 2] - n[h];
              break;
            case 11:
              this.$ = n[h - 2] * n[h];
              break;
            case 12:
              this.$ = n[h - 2] / n[h];
              break;
            case 13:
              this.$ = Math.pow(n[h - 2], n[h]);
              break;
            case 14:
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("error");
              this.$ = 1;
              for (f = n[h - 1]; f > 1; f--) this.$ = this.$ * f;
              break;
            case 15:
              this.$ = n[h - 1];
              break;
            case 16:
              this.$ = -1 * Number(n[h - 1]);
              break;
            case 17:
              for (var p = t, g = 0, b = 0, m = 0, d = 0; d < p && " " != e[d]; d++) g = 10 * g + Number(e[d]);
              for (d++; d < p && ("/" != e[d] && "\\" != e[d]); d++) b = 10 * b + Number(e[d]);
              for (d++; d < p; d++) m = 10 * m + Number(e[d]);
              this.$ = g + b / m;
              break;
            case 18:
            case 19:
              this.$ = n[h];
              break;
            case 20:
              this.$ = Number(n[h]);
              break;
            case 21:
              this.$ = -1 * Number(n[h]);
              break;
            case 22:
              this.$ = n[h];
              break;
            case 23:
              this.$ = Number(e);
              break;
            case 24:
              this.$ = Math.E;
              break;
            case 25:
              this.$ = Math.PI;
              break;
            case 26:
              this.$ = Number(n[h - 1]) * Math.PI;
              break;
            case 27:
              this.$ = .01 * Number(n[h - 1]);
              break;
            case 28:
              this.$ = Math.sqrt(n[h - 1]);
              break;
            case 29:
            case 30:
              for (var p = t, g = 0, f = 0; f < p; f++) "," != e[f] && (g = 10 * g + Number(e[f]));
              this.$ = g;
              break;
            case 31:
            case 35:
              this.$ = n[h];
              break;
            case 36:
            case 37:
              if (n[h - 2] < n[h]) throw new Error("Invalid number in words.");
              this.$ = n[h - 2] + n[h];
              break;
            case 39:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e9 * y;
              break;
            case 40:
              this.$ = 1e9 * n[h - 1];
              break;
            case 41:
              this.$ = 1e9 * n[h - 2] + n[h];
              break;
            case 43:
              this.$ = 1e8;
              break;
            case 44:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e9 * y;
              break;
            case 45:
              this.$ = 1e9 * n[h - 1];
              break;
            case 46:
              this.$ = 1e9 + n[h];
              break;
            case 47:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e9 * y + n[h];
              break;
            case 48:
              this.$ = 1e9 * n[h - 2] + n[h];
              break;
            case 49:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e6 * y;
              break;
            case 50:
              this.$ = 1e6 * n[h - 1];
              break;
            case 51:
              this.$ = 1e6 * n[h - 2] + n[h];
              break;
            case 52:
              this.$ = 1e5;
              break;
            case 53:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e6 * y;
              break;
            case 54:
              this.$ = 1e6 * n[h - 1];
              break;
            case 55:
              this.$ = 1e6 + n[h];
              break;
            case 56:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e6 * y + n[h];
              break;
            case 57:
              this.$ = 1e6 * n[h - 2] + n[h];
              break;
            case 58:
              this.$ = n[h];
              break;
            case 59:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e7 * y;
              break;
            case 60:
              this.$ = 1e7 * n[h - 1];
              break;
            case 61:
              this.$ = 1e7 * n[h - 2] + n[h];
              break;
            case 62:
              this.$ = n[h];
              break;
            case 63:
              this.$ = 1e7;
              break;
            case 64:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e7 * y;
              break;
            case 65:
              this.$ = 1e5 * n[h - 1];
              break;
            case 66:
              this.$ = 1e7 + n[h];
              break;
            case 67:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e7 * y + n[h];
              break;
            case 68:
              this.$ = 1e7 * n[h - 2] + n[h];
              break;
            case 69:
              this.$ = n[h];
              break;
            case 70:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e5 * y;
              break;
            case 71:
              this.$ = 1e5 * n[h - 1];
              break;
            case 72:
              this.$ = 1e5 * n[h - 2] + n[h];
              break;
            case 73:
              this.$ = n[h];
              break;
            case 74:
              this.$ = 1e5;
              break;
            case 75:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e5 * y;
              break;
            case 76:
              this.$ = 1e5 * n[h - 1];
              break;
            case 77:
              this.$ = 1e5 + n[h];
              break;
            case 78:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e5 * y + n[h];
              break;
            case 79:
              this.$ = 1e5 * n[h - 2] + n[h];
              break;
            case 80:
              this.$ = n[h];
              break;
            case 81:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e3 * y;
              break;
            case 82:
              this.$ = 1e3 * n[h - 1];
              break;
            case 83:
              this.$ = 1e3 * n[h - 2] + n[h];
              break;
            case 84:
              this.$ = n[h];
              break;
            case 85:
              this.$ = 1e3;
              break;
            case 86:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e3 * y;
              break;
            case 87:
              this.$ = 1e3 * n[h - 1];
              break;
            case 88:
              this.$ = 1e3 + n[h];
              break;
            case 89:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 1e3 * y + n[h];
              break;
            case 90:
              this.$ = 1e3 * n[h - 2] + n[h];
              break;
            case 91:
              this.$ = n[h];
              break;
            case 92:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 100 * y;
              break;
            case 93:
              this.$ = 100 * n[h - 1];
              break;
            case 94:
              this.$ = 100 * n[h - 2] + n[h];
              break;
            case 95:
              this.$ = n[h];
              break;
            case 96:
              this.$ = 100;
              break;
            case 97:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 100 * y;
              break;
            case 98:
              this.$ = 100 * n[h - 1];
              break;
            case 99:
              this.$ = 100 + n[h];
              break;
            case 100:
              if ((y = Number(n[h - 2])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 100 * y + n[h];
              break;
            case 101:
              this.$ = 100 * n[h - 2] + n[h];
              break;
            case 102:
              this.$ = n[h];
              break;
            case 103:
              this.$ = 10;
              break;
            case 104:
              $ = ($ = n[h]).toLowerCase(), this.$ = doubleDigit.indexOf($) + 11;
              break;
            case 105:
              $ = ($ = n[h]).toLowerCase(), this.$ = 10 * (tenDigit.indexOf($) + 1);
              break;
            case 106:
              $ = ($ = n[h - 1]).toLowerCase(), this.$ = 10 * (tenDigit.indexOf($) + 1) + n[h];
              break;
            case 107:
              k = ($ = ($ = n[h]).toLowerCase()).split("-");
              this.$ = 10 * (tenDigit.indexOf(k[0]) + 1) + singleDigit.indexOf(k[1]);
              break;
            case 108:
              this.$ = n[h];
              break;
            case 109:
            case 110:
              if ((y = Number(n[h - 1])) % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = 10 * y;
              break;
            case 111:
              this.$ = 10 * n[h - 1];
              break;
            case 112:
              this.$ = 10 * n[h - 2] + n[h];
              break;
            case 113:
              $ = ($ = n[h]).toLowerCase(), this.$ = singleDigit.indexOf($);
              break;
            case 114:
              var y = Number(n[h - 1]);
              if (y % 1 != 0 || y < 0) throw new Error("Invalid entry in words");
              this.$ = y;
              break;
            case 115:
              if (1 != n[h]) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1]);
              break;
            case 116:
              this.$ = n[h - 1];
              break;
            case 126:
              for (var k = ($ = ($ = n[h]).toLowerCase()).split("-"), x = -1, w = 1, N = 1, v = 0; - 1 == x;) {
                if (v++, -1 != (x = singleDigit.indexOf(k[0]))) {
                  w = x;
                  break
                }
                if (-1 != (x = doubleDigit.indexOf(k[0]))) {
                  w = x + 11;
                  break
                }
                if (-1 != (x = tenDigit.indexOf(k[0]))) {
                  w = 10 * (x + 1);
                  break
                }
                if (20 == v) break
              }
              for ("quarters" == k[1] | "quarter" ? N = 4 : "hundredths" == k[1] | "hundredth" ? N = 100 : "thousandths" == k[1] | "thousandth" && (N = 1e3), x = -1, v = 0; - 1 == x && 1 == N;) {
                if (v++, -1 != (x = fracSingularSingleDigit.indexOf(k[1]))) {
                  N = x + 1;
                  break
                }
                if (-1 != (x = fracSingularDoubleDigit.indexOf(k[1]))) {
                  N = x + 11;
                  break
                }
                if (-1 != (x = fracSingularTenDigit.indexOf(k[1]))) {
                  N = 10 * (x + 1);
                  break
                }
                if (-1 != (x = fracPluralSingleDigit.indexOf(k[1]))) {
                  N = x + 1;
                  break
                }
                if (-1 != (x = fracPluralDoubleDigit.indexOf(k[1]))) {
                  N = x + 11;
                  break
                }
                if (-1 != (x = fracPluralTenDigit.indexOf(k[1]))) {
                  N = 10 * (x + 1);
                  break
                }
                if (20 == v) break
              }
              this.$ = Number(w / N);
              break;
            case 127:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(.1 / (fracSingularTenDigit.indexOf($) + 1));
              break;
            case 128:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (10 * (x + 1)));
              break;
            case 129:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (10 * (x + 1)));
              break;
            case 130:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              this.$ = Number(100 / (10 * (x + 1)));
              break;
            case 131:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              this.$ = Number(1e3 / (10 * (x + 1)));
              break;
            case 132:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              this.$ = Number(1e5 / (10 * (x + 1)));
              break;
            case 133:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(.1 / (fracPluralTenDigit.indexOf($) + 1));
              break;
            case 134:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralTenDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (10 * (x + 1)));
              break;
            case 135:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralTenDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (10 * (x + 1)));
              break;
            case 136:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralTenDigit.indexOf($);
              this.$ = Number(100 / (10 * (x + 1)));
              break;
            case 137:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralTenDigit.indexOf($);
              this.$ = Number(1e3 / (x + 1));
              break;
            case 138:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralTenDigit.indexOf($);
              this.$ = Number(1e5 / (10 * (x + 1)));
              break;
            case 139:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(1 / (fracSingularDoubleDigit.indexOf($) + 11));
              break;
            case 140:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularDoubleDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 11));
              break;
            case 141:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularDoubleDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 11));
              break;
            case 142:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularTenDigit.indexOf($);
              this.$ = Number(100 / (x + 1));
              break;
            case 143:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularDoubleDigit.indexOf($);
              this.$ = Number(1e3 / (x + 1));
              break;
            case 144:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularDoubleDigit.indexOf($);
              this.$ = Number(1e5 / (x + 1));
              break;
            case 145:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(1 / (fracPluralDoubleDigit.indexOf($) + 11));
              break;
            case 146:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralDoubleDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 11));
              break;
            case 147:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralDoubleDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 11));
              break;
            case 148:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralDoubleDigit.indexOf($);
              this.$ = Number(100 / (x + 1));
              break;
            case 149:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralDoubleDigit.indexOf($);
              this.$ = Number(1e3 / (x + 1));
              break;
            case 150:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralDoubleDigit.indexOf($);
              this.$ = Number(1e5 / (x + 1));
              break;
            case 151:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(1 / (fracSingularSingleDigit.indexOf($) + 1));
              break;
            case 152:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularSingleDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 1));
              break;
            case 153:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularSingleDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 1));
              break;
            case 154:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularSingleDigit.indexOf($);
              this.$ = Number(100 / (x + 1));
              break;
            case 155:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularSingleDigit.indexOf($);
              this.$ = Number(1e3 / (x + 1));
              break;
            case 156:
              $ = ($ = n[h]).toLowerCase();
              x = fracSingularSingleDigit.indexOf($);
              this.$ = Number(1e5 / (x + 1));
              break;
            case 157:
              $ = ($ = n[h]).toLowerCase(), this.$ = Number(1 / (fracPluralSingleDigit.indexOf($) + 1));
              break;
            case 158:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralSingleDigit.indexOf($);
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 1));
              break;
            case 159:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralSingleDigit.indexOf($);
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / (x + 1));
              break;
            case 160:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralSingleDigit.indexOf($);
              this.$ = Number(100 / (x + 1));
              break;
            case 161:
              $ = ($ = n[h]).toLowerCase();
              x = fracPluralSingleDigit.indexOf($);
              this.$ = Number(1e3 / (x + 1));
              break;
            case 162:
              var $ = n[h];
              $ = $.toLowerCase();
              x = fracPluralSingleDigit.indexOf($);
              this.$ = Number(1e5 / (x + 1));
              break;
            case 163:
              this.$ = Number(.25);
              break;
            case 164:
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / 4);
              break;
            case 165:
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(n[h - 1] / 4);
              break;
            case 166:
              this.$ = Number(25);
              break;
            case 167:
              this.$ = Number(250);
              break;
            case 168:
              this.$ = Number(25e3);
              break;
            case 169:
              this.$ = Number(25e5);
              break;
            case 170:
              this.$ = Number(.01);
              break;
            case 171:
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(.01 * n[h - 1]);
              break;
            case 172:
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(.01 * n[h - 1]);
              break;
            case 173:
              this.$ = Number(1);
              break;
            case 174:
              this.$ = Number(10);
              break;
            case 175:
              this.$ = Number(1e3);
              break;
            case 176:
              this.$ = Number(1e5);
              break;
            case 177:
              this.$ = Number(.001);
              break;
            case 178:
              if (n[h - 1] % 1 != 0 || n[h - 1] < 0) throw new Error("Invalid entry in words");
              this.$ = Number(.001 * n[h - 1]);
              break;
            case 179:
              if (n[h - 1] > 20 && n[h - 1] % 10 != 0) throw new Error("Invalid entry in words");
              this.$ = Number(.001 * n[h - 1]);
              break;
            case 180:
              this.$ = Number(.1);
              break;
            case 181:
              this.$ = Number(1);
              break;
            case 182:
              this.$ = Number(100);
              break;
            case 183:
              this.$ = Number(1e4);
              break;
            case 184:
              this.$ = [1, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 185:
              this.$ = [1, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 186:
              this.$ = [1, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 187:
              this.$ = [1e3, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 188:
              this.$ = [.001, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 189:
              this.$ = [.01, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 190:
              this.$ = [.001, 3, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 191:
              this.$ = [1, 3, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 192:
              this.$ = [1e-6, 3, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 193:
              this.$ = [1e-5, 3, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 194:
              this.$ = [1609.34, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 195:
              this.$ = [.9144, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 196:
              this.$ = [.3048, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 197:
              this.$ = [.0254, 1, 0, 0, 0, 0, 0, 0, 0];
              break;
            case 198:
              this.$ = [.001, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 199:
              this.$ = [1e-5, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 200:
              this.$ = [1e-6, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 201:
              this.$ = [1e-9, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 202:
              this.$ = [.45, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 203:
              this.$ = [.028, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 204:
              this.$ = [1e3, 0, 1, 0, 0, 0, 0, 0, 0];
              break;
            case 205:
              this.$ = [1e-9, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 206:
              this.$ = [1e-6, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 207:
              this.$ = [.001, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 208:
              this.$ = [60, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 209:
              this.$ = [3600, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 210:
              this.$ = [86400, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 211:
              this.$ = [604800, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 212:
              this.$ = [263e4, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 213:
              this.$ = [3156e4, 0, 0, 1, 0, 0, 0, 0, 0];
              break;
            case 214:
              this.$ = [1, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 215:
              E = (Number(n[h - 1]) - 32) / 1.8 + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 216:
              E = (-1 * Number(n[h - 1]) - 32) / 1.8 + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 217:
              E = Number(n[h - 1]) + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 218:
              E = -1 * Number(n[h - 2]) + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 219:
              this.$ = [Number(n[h - 1]) / 180 * Math.PI, 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 220:
              this.$ = [-1 * Number(n[h - 1]) / 180 * Math.PI, 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 221:
              this.$ = [Number(n[h - 1]), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 222:
              this.$ = [-1 * Number(n[h - 1]), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 223:
              this.$ = [Number(Math.PI), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 224:
              this.$ = [-1 * Math.PI, 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 225:
              this.$ = [Math.PI * Number(n[h - 2]), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 226:
              this.$ = [-1 * Math.PI * Number(n[h - 2]), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 227:
              E = (Number(n[h - 2]) - 32) / 1.8 + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 228:
              var E = Number(n[h - 2]) + 273.15;
              this.$ = [E, 0, 0, 0, 0, 1, 0, 0, 0];
              break;
            case 229:
              this.$ = [Number(n[h - 2]) / 180 * Math.PI, 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 230:
              this.$ = [Number(n[h - 2]), 0, 0, 0, 0, 0, 0, 0, 1];
              break;
            case 231:
              this.$ = n[h];
              break;
            case 232:
            case 233:
            case 234:
              (A = n[h])[0] = Number(n[h - 1]) * Number(A[0]), this.$ = A;
              break;
            case 235:
              (A = n[h])[0] = Number(n[h - 2]) * Number(A[0]), this.$ = A;
              break;
            case 236:
              for (var A = n[h - 2], _ = n[h], I = [A[0] * _[0]], f = 1; f < 9; f++) I[f] = A[f] + _[f];
              this.$ = I;
              break;
            case 237:
              var I = n[h - 2],
                M = Number(n[h]);
              I[0] = I[0] * M, this.$ = I;
              break;
            case 238:
              var I = n[h - 4],
                M = Number(n[h - 1]);
              I[0] = I[0] * M, this.$ = I;
              break;
            case 239:
              for (var A = n[h - 2], _ = n[h], I = [A[0] / _[0]], f = 1; f < 9; f++) I[f] = A[f] - _[f];
              this.$ = I;
              break;
            case 240:
              I = n[h - 2];
              if (0 == (M = Number(n[h]))) throw new Error("Division by 0!");
              I[0] = I[0] / M, this.$ = I;
              break;
            case 241:
              I = n[h - 4];
              if (0 == (M = Number(n[h - 1]))) throw new Error("Division by 0!");
              I[0] = I[0] / M, this.$ = I;
              break;
            case 242:
              for (var A = n[h - 2], D = Number(n[h]), I = [Math.pow(A[0], D)], f = 1; f < 9; f++) A[f] < 0 ? I[f] = Math.abs(A[f]) * D * -1 : I[f] = A[f] * D;
              this.$ = I, console.log("fe" + I);
              break;
            case 243:
              for (var A = n[h - 4], D = Number(n[h - 1]), I = [Math.pow(A[0], D)], f = 1; f < 9; f++) A[f] < 0 ? I[f] = Math.abs(A[f]) * D * -1 : I[f] = A[f] * D;
              this.$ = I, console.log("fe" + I);
              break;
            case 244:
              this.$ = n[h - 1];
              break;
            case 245:
              for (var A = n[h], D = Number(2), I = [Math.pow(A[0], D)], f = 1; f < 9; f++) A[f] < 0 ? I[f] = Math.abs(A[f]) * D * -1 : I[f] = A[f] * D;
              this.$ = I;
              break;
            case 246:
              for (var A = n[h], D = Number(3), I = [Math.pow(A[0], D)], f = 1; f < 9; f++) A[f] < 0 ? I[f] = Math.abs(A[f]) * D * -1 : I[f] = A[f] * D;
              this.$ = I;
              break;
            case 247:
              for (var A = n[h - 2], _ = n[h], f = 1; f < 9; f++)
                if (A[f] != _[f]) throw new Error("Addition cannot be performed on different units!");
              this.$ = A, this.$[0] = A[0] + _[0];
              break;
            case 248:
              for (var A = n[h - 2], _ = n[h], f = 1; f < 9; f++)
                if (A[f] != _[f]) throw new Error("Subtraction cannot be performed on different units!");
              this.$ = A, this.$[0] = A[0] - _[0];
              break;
            case 249:
              this.$ = n[h];
              break;
            case 250:
              this.$ = n[h - 1];
              break;
            case 251:
              if (1 != Number(n[h])) throw new Error("");
              this.$ = "Re. " + n[h].toFixed(2).toString();
              break;
            case 252:
              this.$ = "Rs. " + n[h].toFixed(2).toString();
              break;
            case 253:
              if (1 != Number(n[h - 1])) throw new Error("");
              this.$ = "Re. " + n[h - 1].toFixed(2).toString();
              break;
            case 254:
              this.$ = "Rs. " + n[h - 1].toFixed(2).toString()
          }
        },
        table: [{
          3: 1,
          4: 2,
          7: [1, 3],
          8: 4,
          9: 5,
          10: 6,
          11: [1, 27],
          12: [1, 9],
          16: [1, 7],
          18: [1, 8],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 21,
          24: [1, 60],
          25: [1, 59],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          119: 18,
          124: [1, 16],
          125: [1, 17],
          126: [1, 19],
          127: [1, 20]
        }, {
          1: [3]
        }, {
          5: [1, 104],
          6: [1, 105],
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110]
        }, {
          5: [1, 111]
        }, {
          5: [1, 113],
          6: [1, 112],
          11: [1, 117],
          12: [1, 118],
          13: [1, 114],
          14: [1, 115],
          15: [1, 116]
        }, {
          6: [1, 119]
        }, {
          5: [1, 121],
          6: [1, 120]
        }, {
          5: [2, 23],
          6: [2, 23],
          8: 123,
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          16: [1, 155],
          17: [1, 122],
          18: [1, 158],
          19: [2, 23],
          25: [1, 128],
          26: [1, 129],
          28: [1, 156],
          29: [1, 157],
          38: [1, 133],
          40: [1, 132],
          41: [1, 137],
          44: [1, 136],
          46: [1, 131],
          48: [1, 130],
          49: [1, 135],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153],
          78: [1, 142],
          79: [1, 143],
          80: [1, 140],
          81: [1, 141],
          82: [1, 139],
          83: [1, 138],
          84: [1, 144],
          85: [1, 145],
          86: [1, 146],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          120: [1, 124],
          121: [1, 125],
          122: [1, 126],
          123: [1, 127],
          124: [1, 16],
          125: [1, 17],
          126: [2, 23],
          127: [2, 23]
        }, {
          4: 159,
          8: 160,
          9: 161,
          11: [1, 27],
          12: [1, 9],
          16: [1, 7],
          18: [1, 8],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 59],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          119: 18,
          124: [1, 16],
          125: [1, 17]
        }, {
          16: [1, 165],
          18: [1, 163],
          23: 164,
          24: [1, 60],
          25: [1, 166],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          5: [2, 17],
          6: [2, 17],
          11: [2, 17],
          12: [2, 17],
          13: [2, 17],
          14: [2, 17],
          15: [2, 17],
          19: [2, 17]
        }, {
          5: [2, 18],
          6: [2, 18],
          11: [2, 18],
          12: [2, 18],
          13: [2, 18],
          14: [2, 18],
          15: [2, 18],
          19: [2, 18],
          35: [1, 169],
          36: [1, 170]
        }, {
          5: [2, 19],
          6: [2, 19],
          11: [2, 19],
          12: [2, 19],
          13: [2, 19],
          14: [2, 19],
          15: [2, 19],
          19: [2, 19]
        }, {
          5: [2, 231],
          6: [2, 231],
          11: [2, 231],
          12: [2, 231],
          13: [2, 231],
          14: [2, 231],
          15: [2, 231],
          19: [2, 231]
        }, {
          5: [2, 29],
          6: [2, 29],
          8: 171,
          11: [2, 29],
          12: [2, 29],
          13: [2, 29],
          14: [2, 29],
          15: [2, 29],
          16: [1, 155],
          18: [1, 158],
          19: [2, 29],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17],
          126: [2, 29],
          127: [2, 29]
        }, {
          5: [2, 30],
          6: [2, 30],
          8: 172,
          11: [2, 30],
          12: [2, 30],
          13: [2, 30],
          14: [2, 30],
          15: [2, 30],
          16: [1, 155],
          18: [1, 158],
          19: [2, 30],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17],
          126: [2, 30],
          127: [2, 30]
        }, {
          8: 173,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          8: 174,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          6: [2, 249],
          19: [2, 249]
        }, {
          16: [1, 176],
          23: 175,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          16: [1, 176],
          23: 178,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          5: [2, 22],
          6: [2, 22],
          11: [2, 22],
          12: [2, 22],
          13: [2, 22],
          14: [2, 22],
          15: [2, 22],
          126: [1, 179],
          127: [1, 180]
        }, {
          5: [2, 31],
          6: [2, 31],
          11: [2, 31],
          12: [2, 31],
          13: [2, 31],
          14: [2, 31],
          15: [2, 31],
          19: [2, 31],
          35: [2, 31],
          36: [2, 31],
          46: [1, 181],
          49: [1, 182],
          52: [1, 183],
          56: [1, 184],
          65: [1, 185],
          67: [1, 186]
        }, {
          5: [2, 32],
          6: [2, 32],
          11: [2, 32],
          12: [2, 32],
          13: [2, 32],
          14: [2, 32],
          15: [2, 32],
          19: [2, 32],
          35: [2, 32],
          36: [2, 32]
        }, {
          5: [2, 33],
          6: [2, 33],
          11: [2, 33],
          12: [2, 33],
          13: [2, 33],
          14: [2, 33],
          15: [2, 33],
          19: [2, 33],
          35: [2, 33],
          36: [2, 33]
        }, {
          5: [2, 34],
          6: [2, 34],
          11: [2, 34],
          12: [2, 34],
          13: [2, 34],
          14: [2, 34],
          15: [2, 34],
          19: [2, 34],
          35: [2, 34],
          36: [2, 34]
        }, {
          5: [2, 35],
          6: [2, 35],
          11: [2, 35],
          12: [2, 35],
          13: [2, 35],
          14: [2, 35],
          15: [2, 35],
          19: [2, 35],
          35: [2, 35],
          36: [2, 35]
        }, {
          16: [1, 176],
          23: 187,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          5: [2, 184],
          6: [2, 184],
          11: [2, 184],
          12: [2, 184],
          13: [2, 184],
          14: [2, 184],
          15: [2, 184],
          19: [2, 184]
        }, {
          5: [2, 185],
          6: [2, 185],
          11: [2, 185],
          12: [2, 185],
          13: [2, 185],
          14: [2, 185],
          15: [2, 185],
          19: [2, 185]
        }, {
          5: [2, 186],
          6: [2, 186],
          11: [2, 186],
          12: [2, 186],
          13: [2, 186],
          14: [2, 186],
          15: [2, 186],
          19: [2, 186]
        }, {
          5: [2, 187],
          6: [2, 187],
          11: [2, 187],
          12: [2, 187],
          13: [2, 187],
          14: [2, 187],
          15: [2, 187],
          19: [2, 187]
        }, {
          5: [2, 188],
          6: [2, 188],
          11: [2, 188],
          12: [2, 188],
          13: [2, 188],
          14: [2, 188],
          15: [2, 188],
          19: [2, 188]
        }, {
          5: [2, 189],
          6: [2, 189],
          11: [2, 189],
          12: [2, 189],
          13: [2, 189],
          14: [2, 189],
          15: [2, 189],
          19: [2, 189]
        }, {
          5: [2, 190],
          6: [2, 190],
          11: [2, 190],
          12: [2, 190],
          13: [2, 190],
          14: [2, 190],
          15: [2, 190],
          19: [2, 190]
        }, {
          5: [2, 191],
          6: [2, 191],
          11: [2, 191],
          12: [2, 191],
          13: [2, 191],
          14: [2, 191],
          15: [2, 191],
          19: [2, 191]
        }, {
          5: [2, 192],
          6: [2, 192],
          11: [2, 192],
          12: [2, 192],
          13: [2, 192],
          14: [2, 192],
          15: [2, 192],
          19: [2, 192]
        }, {
          5: [2, 193],
          6: [2, 193],
          11: [2, 193],
          12: [2, 193],
          13: [2, 193],
          14: [2, 193],
          15: [2, 193],
          19: [2, 193]
        }, {
          5: [2, 194],
          6: [2, 194],
          11: [2, 194],
          12: [2, 194],
          13: [2, 194],
          14: [2, 194],
          15: [2, 194],
          19: [2, 194]
        }, {
          5: [2, 195],
          6: [2, 195],
          11: [2, 195],
          12: [2, 195],
          13: [2, 195],
          14: [2, 195],
          15: [2, 195],
          19: [2, 195]
        }, {
          5: [2, 196],
          6: [2, 196],
          11: [2, 196],
          12: [2, 196],
          13: [2, 196],
          14: [2, 196],
          15: [2, 196],
          19: [2, 196]
        }, {
          5: [2, 197],
          6: [2, 197],
          11: [2, 197],
          12: [2, 197],
          13: [2, 197],
          14: [2, 197],
          15: [2, 197],
          19: [2, 197]
        }, {
          5: [2, 198],
          6: [2, 198],
          11: [2, 198],
          12: [2, 198],
          13: [2, 198],
          14: [2, 198],
          15: [2, 198],
          19: [2, 198]
        }, {
          5: [2, 199],
          6: [2, 199],
          11: [2, 199],
          12: [2, 199],
          13: [2, 199],
          14: [2, 199],
          15: [2, 199],
          19: [2, 199]
        }, {
          5: [2, 200],
          6: [2, 200],
          11: [2, 200],
          12: [2, 200],
          13: [2, 200],
          14: [2, 200],
          15: [2, 200],
          19: [2, 200]
        }, {
          5: [2, 201],
          6: [2, 201],
          11: [2, 201],
          12: [2, 201],
          13: [2, 201],
          14: [2, 201],
          15: [2, 201],
          19: [2, 201]
        }, {
          5: [2, 202],
          6: [2, 202],
          11: [2, 202],
          12: [2, 202],
          13: [2, 202],
          14: [2, 202],
          15: [2, 202],
          19: [2, 202]
        }, {
          5: [2, 203],
          6: [2, 203],
          11: [2, 203],
          12: [2, 203],
          13: [2, 203],
          14: [2, 203],
          15: [2, 203],
          19: [2, 203]
        }, {
          5: [2, 204],
          6: [2, 204],
          11: [2, 204],
          12: [2, 204],
          13: [2, 204],
          14: [2, 204],
          15: [2, 204],
          19: [2, 204]
        }, {
          5: [2, 205],
          6: [2, 205],
          11: [2, 205],
          12: [2, 205],
          13: [2, 205],
          14: [2, 205],
          15: [2, 205],
          19: [2, 205]
        }, {
          5: [2, 206],
          6: [2, 206],
          11: [2, 206],
          12: [2, 206],
          13: [2, 206],
          14: [2, 206],
          15: [2, 206],
          19: [2, 206]
        }, {
          5: [2, 207],
          6: [2, 207],
          11: [2, 207],
          12: [2, 207],
          13: [2, 207],
          14: [2, 207],
          15: [2, 207],
          19: [2, 207]
        }, {
          5: [2, 208],
          6: [2, 208],
          11: [2, 208],
          12: [2, 208],
          13: [2, 208],
          14: [2, 208],
          15: [2, 208],
          19: [2, 208]
        }, {
          5: [2, 209],
          6: [2, 209],
          11: [2, 209],
          12: [2, 209],
          13: [2, 209],
          14: [2, 209],
          15: [2, 209],
          19: [2, 209]
        }, {
          5: [2, 210],
          6: [2, 210],
          11: [2, 210],
          12: [2, 210],
          13: [2, 210],
          14: [2, 210],
          15: [2, 210],
          19: [2, 210]
        }, {
          5: [2, 211],
          6: [2, 211],
          11: [2, 211],
          12: [2, 211],
          13: [2, 211],
          14: [2, 211],
          15: [2, 211],
          19: [2, 211]
        }, {
          5: [2, 212],
          6: [2, 212],
          11: [2, 212],
          12: [2, 212],
          13: [2, 212],
          14: [2, 212],
          15: [2, 212],
          19: [2, 212]
        }, {
          5: [2, 213],
          6: [2, 213],
          11: [2, 213],
          12: [2, 213],
          13: [2, 213],
          14: [2, 213],
          15: [2, 213],
          19: [2, 213]
        }, {
          5: [2, 214],
          6: [2, 214],
          11: [2, 214],
          12: [2, 214],
          13: [2, 214],
          14: [2, 214],
          15: [2, 214],
          19: [2, 214]
        }, {
          5: [2, 25],
          6: [2, 25],
          11: [2, 25],
          12: [2, 25],
          13: [2, 25],
          14: [2, 25],
          15: [2, 25],
          19: [2, 25],
          123: [1, 188],
          126: [2, 25],
          127: [2, 25]
        }, {
          5: [2, 24],
          6: [2, 24],
          11: [2, 24],
          12: [2, 24],
          13: [2, 24],
          14: [2, 24],
          15: [2, 24],
          19: [2, 24],
          126: [2, 24],
          127: [2, 24]
        }, {
          18: [1, 189]
        }, {
          5: [2, 62],
          6: [2, 62],
          11: [2, 62],
          12: [2, 62],
          13: [2, 62],
          14: [2, 62],
          15: [2, 62],
          19: [2, 62],
          35: [2, 62],
          36: [2, 62],
          46: [2, 62],
          48: [1, 190],
          49: [2, 62],
          52: [2, 62],
          56: [2, 62],
          65: [2, 62],
          67: [2, 62]
        }, {
          5: [2, 63],
          6: [2, 63],
          11: [2, 63],
          12: [2, 63],
          13: [2, 63],
          14: [2, 63],
          15: [2, 63],
          16: [1, 197],
          19: [2, 63],
          35: [2, 63],
          36: [2, 63],
          42: 195,
          46: [2, 63],
          47: 191,
          49: [2, 63],
          50: [1, 196],
          52: [2, 63],
          53: 94,
          54: [1, 198],
          56: [2, 63],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 63],
          66: [1, 102],
          67: [2, 63],
          84: [1, 192],
          85: [1, 193],
          86: [1, 194]
        }, {
          5: [2, 58],
          6: [2, 58],
          11: [2, 58],
          12: [2, 58],
          13: [2, 58],
          14: [2, 58],
          15: [2, 58],
          19: [2, 58],
          35: [2, 58],
          36: [2, 58]
        }, {
          5: [2, 42],
          6: [2, 42],
          11: [2, 42],
          12: [2, 42],
          13: [2, 42],
          14: [2, 42],
          15: [2, 42],
          19: [2, 42],
          35: [2, 42],
          36: [2, 42],
          38: [1, 202],
          40: [1, 201]
        }, {
          5: [2, 43],
          6: [2, 43],
          11: [2, 43],
          12: [2, 43],
          13: [2, 43],
          14: [2, 43],
          15: [2, 43],
          16: [1, 204],
          19: [2, 43],
          35: [2, 43],
          36: [2, 43],
          39: 203,
          42: 205,
          44: [1, 81],
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 38],
          6: [2, 38],
          11: [2, 38],
          12: [2, 38],
          13: [2, 38],
          14: [2, 38],
          15: [2, 38],
          19: [2, 38],
          35: [2, 38],
          36: [2, 38]
        }, {
          5: [2, 117],
          6: [2, 117],
          11: [2, 117],
          12: [2, 117],
          13: [2, 117],
          14: [2, 117],
          15: [2, 117],
          19: [2, 117],
          35: [2, 117],
          36: [2, 117]
        }, {
          5: [2, 118],
          6: [2, 118],
          11: [2, 118],
          12: [2, 118],
          13: [2, 118],
          14: [2, 118],
          15: [2, 118],
          19: [2, 118],
          35: [2, 118],
          36: [2, 118]
        }, {
          5: [2, 119],
          6: [2, 119],
          11: [2, 119],
          12: [2, 119],
          13: [2, 119],
          14: [2, 119],
          15: [2, 119],
          19: [2, 119],
          35: [2, 119],
          36: [2, 119]
        }, {
          5: [2, 120],
          6: [2, 120],
          11: [2, 120],
          12: [2, 120],
          13: [2, 120],
          14: [2, 120],
          15: [2, 120],
          19: [2, 120],
          35: [2, 120],
          36: [2, 120]
        }, {
          5: [2, 121],
          6: [2, 121],
          11: [2, 121],
          12: [2, 121],
          13: [2, 121],
          14: [2, 121],
          15: [2, 121],
          19: [2, 121],
          35: [2, 121],
          36: [2, 121]
        }, {
          5: [2, 122],
          6: [2, 122],
          11: [2, 122],
          12: [2, 122],
          13: [2, 122],
          14: [2, 122],
          15: [2, 122],
          19: [2, 122],
          35: [2, 122],
          36: [2, 122]
        }, {
          5: [2, 123],
          6: [2, 123],
          11: [2, 123],
          12: [2, 123],
          13: [2, 123],
          14: [2, 123],
          15: [2, 123],
          19: [2, 123],
          35: [2, 123],
          36: [2, 123]
        }, {
          5: [2, 124],
          6: [2, 124],
          11: [2, 124],
          12: [2, 124],
          13: [2, 124],
          14: [2, 124],
          15: [2, 124],
          19: [2, 124],
          35: [2, 124],
          36: [2, 124]
        }, {
          5: [2, 125],
          6: [2, 125],
          11: [2, 125],
          12: [2, 125],
          13: [2, 125],
          14: [2, 125],
          15: [2, 125],
          19: [2, 125],
          35: [2, 125],
          36: [2, 125]
        }, {
          5: [2, 126],
          6: [2, 126],
          11: [2, 126],
          12: [2, 126],
          13: [2, 126],
          14: [2, 126],
          15: [2, 126],
          19: [2, 126],
          35: [2, 126],
          36: [2, 126]
        }, {
          5: [2, 73],
          6: [2, 73],
          11: [2, 73],
          12: [2, 73],
          13: [2, 73],
          14: [2, 73],
          15: [2, 73],
          19: [2, 73],
          35: [2, 73],
          36: [2, 73],
          41: [1, 208],
          44: [1, 207],
          46: [2, 73],
          48: [2, 73],
          49: [2, 73],
          50: [1, 206],
          52: [2, 73],
          56: [2, 73],
          65: [2, 73],
          67: [2, 73]
        }, {
          5: [2, 74],
          6: [2, 74],
          11: [2, 74],
          12: [2, 74],
          13: [2, 74],
          14: [2, 74],
          15: [2, 74],
          16: [1, 219],
          19: [2, 74],
          35: [2, 74],
          36: [2, 74],
          42: 209,
          46: [2, 74],
          48: [2, 74],
          49: [2, 74],
          52: [2, 74],
          53: 94,
          54: [1, 198],
          56: [2, 74],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 74],
          66: [1, 102],
          67: [2, 74],
          78: [1, 214],
          79: [1, 215],
          80: [1, 212],
          81: [1, 213],
          82: [1, 211],
          83: [1, 210],
          84: [1, 216],
          85: [1, 217],
          86: [1, 218]
        }, {
          5: [2, 69],
          6: [2, 69],
          11: [2, 69],
          12: [2, 69],
          13: [2, 69],
          14: [2, 69],
          15: [2, 69],
          19: [2, 69],
          35: [2, 69],
          36: [2, 69]
        }, {
          5: [2, 52],
          6: [2, 52],
          11: [2, 52],
          12: [2, 52],
          13: [2, 52],
          14: [2, 52],
          15: [2, 52],
          16: [1, 219],
          19: [2, 52],
          35: [2, 52],
          36: [2, 52],
          38: [2, 52],
          40: [2, 52],
          42: 220,
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 157],
          6: [2, 157],
          11: [2, 157],
          12: [2, 157],
          13: [2, 157],
          14: [2, 157],
          15: [2, 157],
          19: [2, 157],
          35: [2, 157],
          36: [2, 157]
        }, {
          5: [2, 95],
          6: [2, 95],
          11: [2, 95],
          12: [2, 95],
          13: [2, 95],
          14: [2, 95],
          15: [2, 95],
          19: [2, 95],
          35: [2, 95],
          36: [2, 95],
          41: [2, 95],
          44: [2, 95],
          46: [2, 95],
          48: [2, 95],
          49: [2, 95],
          50: [2, 95],
          52: [2, 95],
          54: [2, 95],
          56: [2, 95],
          58: [1, 230],
          65: [2, 95],
          67: [2, 95],
          78: [1, 225],
          79: [1, 226],
          80: [1, 223],
          81: [1, 224],
          82: [1, 222],
          83: [1, 221],
          84: [1, 227],
          85: [1, 228],
          86: [1, 229]
        }, {
          5: [2, 96],
          6: [2, 96],
          11: [2, 96],
          12: [2, 96],
          13: [2, 96],
          14: [2, 96],
          15: [2, 96],
          19: [2, 96],
          35: [2, 96],
          36: [2, 96],
          41: [2, 96],
          44: [2, 96],
          46: [2, 96],
          48: [2, 96],
          49: [2, 96],
          50: [2, 96],
          52: [2, 96],
          54: [2, 96],
          56: [2, 96],
          57: 240,
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 96],
          66: [1, 102],
          67: [2, 96],
          78: [1, 235],
          79: [1, 236],
          80: [1, 233],
          81: [1, 234],
          82: [1, 232],
          83: [1, 231],
          84: [1, 237],
          85: [1, 238],
          86: [1, 239]
        }, {
          5: [2, 85],
          6: [2, 85],
          11: [2, 85],
          12: [2, 85],
          13: [2, 85],
          14: [2, 85],
          15: [2, 85],
          16: [1, 251],
          19: [2, 85],
          35: [2, 85],
          36: [2, 85],
          41: [2, 85],
          44: [2, 85],
          46: [2, 85],
          48: [2, 85],
          49: [2, 85],
          50: [2, 85],
          52: [2, 85],
          53: 250,
          56: [2, 85],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 85],
          66: [1, 102],
          67: [2, 85],
          78: [1, 245],
          79: [1, 246],
          80: [1, 243],
          81: [1, 244],
          82: [1, 242],
          83: [1, 241],
          84: [1, 247],
          85: [1, 248],
          86: [1, 249]
        }, {
          5: [2, 151],
          6: [2, 151],
          11: [2, 151],
          12: [2, 151],
          13: [2, 151],
          14: [2, 151],
          15: [2, 151],
          19: [2, 151],
          35: [2, 151],
          36: [2, 151]
        }, {
          5: [2, 139],
          6: [2, 139],
          11: [2, 139],
          12: [2, 139],
          13: [2, 139],
          14: [2, 139],
          15: [2, 139],
          19: [2, 139],
          35: [2, 139],
          36: [2, 139]
        }, {
          5: [2, 145],
          6: [2, 145],
          11: [2, 145],
          12: [2, 145],
          13: [2, 145],
          14: [2, 145],
          15: [2, 145],
          19: [2, 145],
          35: [2, 145],
          36: [2, 145]
        }, {
          5: [2, 127],
          6: [2, 127],
          11: [2, 127],
          12: [2, 127],
          13: [2, 127],
          14: [2, 127],
          15: [2, 127],
          19: [2, 127],
          35: [2, 127],
          36: [2, 127]
        }, {
          5: [2, 133],
          6: [2, 133],
          11: [2, 133],
          12: [2, 133],
          13: [2, 133],
          14: [2, 133],
          15: [2, 133],
          19: [2, 133],
          35: [2, 133],
          36: [2, 133]
        }, {
          5: [2, 163],
          6: [2, 163],
          11: [2, 163],
          12: [2, 163],
          13: [2, 163],
          14: [2, 163],
          15: [2, 163],
          19: [2, 163],
          35: [2, 163],
          36: [2, 163]
        }, {
          5: [2, 170],
          6: [2, 170],
          11: [2, 170],
          12: [2, 170],
          13: [2, 170],
          14: [2, 170],
          15: [2, 170],
          19: [2, 170],
          35: [2, 170],
          36: [2, 170]
        }, {
          5: [2, 177],
          6: [2, 177],
          11: [2, 177],
          12: [2, 177],
          13: [2, 177],
          14: [2, 177],
          15: [2, 177],
          19: [2, 177],
          35: [2, 177],
          36: [2, 177]
        }, {
          5: [2, 84],
          6: [2, 84],
          11: [2, 84],
          12: [2, 84],
          13: [2, 84],
          14: [2, 84],
          15: [2, 84],
          19: [2, 84],
          35: [2, 84],
          36: [2, 84],
          38: [2, 84],
          40: [2, 84],
          41: [2, 84],
          44: [2, 84],
          46: [2, 84],
          48: [2, 84],
          49: [2, 84],
          50: [2, 84],
          52: [2, 84],
          54: [1, 252],
          56: [2, 84],
          65: [2, 84],
          67: [2, 84]
        }, {
          5: [2, 80],
          6: [2, 80],
          11: [2, 80],
          12: [2, 80],
          13: [2, 80],
          14: [2, 80],
          15: [2, 80],
          19: [2, 80],
          35: [2, 80],
          36: [2, 80]
        }, {
          5: [2, 102],
          6: [2, 102],
          11: [2, 102],
          12: [2, 102],
          13: [2, 102],
          14: [2, 102],
          15: [2, 102],
          19: [2, 102],
          35: [2, 102],
          36: [2, 102],
          38: [2, 102],
          40: [2, 102],
          41: [2, 102],
          44: [2, 102],
          46: [2, 102],
          48: [2, 102],
          49: [2, 102],
          50: [2, 102],
          52: [2, 102],
          54: [2, 102],
          56: [2, 102],
          58: [2, 102],
          65: [2, 102],
          67: [2, 102],
          78: [2, 102],
          79: [2, 102],
          80: [2, 102],
          81: [2, 102],
          82: [2, 102],
          83: [2, 102],
          84: [2, 102],
          85: [2, 102],
          86: [2, 102]
        }, {
          5: [2, 103],
          6: [2, 103],
          11: [2, 103],
          12: [2, 103],
          13: [2, 103],
          14: [2, 103],
          15: [2, 103],
          19: [2, 103],
          35: [2, 103],
          36: [2, 103],
          38: [2, 103],
          40: [2, 103],
          41: [2, 103],
          44: [2, 103],
          46: [2, 103],
          48: [2, 103],
          49: [2, 103],
          50: [2, 103],
          52: [2, 103],
          54: [2, 103],
          56: [2, 103],
          58: [2, 103],
          65: [2, 103],
          67: [2, 103],
          78: [2, 103],
          79: [2, 103],
          80: [2, 103],
          81: [2, 103],
          82: [2, 103],
          83: [2, 103],
          84: [2, 103],
          85: [2, 103],
          86: [2, 103]
        }, {
          5: [2, 104],
          6: [2, 104],
          11: [2, 104],
          12: [2, 104],
          13: [2, 104],
          14: [2, 104],
          15: [2, 104],
          19: [2, 104],
          35: [2, 104],
          36: [2, 104],
          38: [2, 104],
          40: [2, 104],
          41: [2, 104],
          44: [2, 104],
          46: [2, 104],
          48: [2, 104],
          49: [2, 104],
          50: [2, 104],
          52: [2, 104],
          54: [2, 104],
          56: [2, 104],
          58: [2, 104],
          65: [2, 104],
          67: [2, 104],
          78: [2, 104],
          79: [2, 104],
          80: [2, 104],
          81: [2, 104],
          82: [2, 104],
          83: [2, 104],
          84: [2, 104],
          85: [2, 104],
          86: [2, 104]
        }, {
          5: [2, 105],
          6: [2, 105],
          11: [2, 105],
          12: [2, 105],
          13: [2, 105],
          14: [2, 105],
          15: [2, 105],
          19: [2, 105],
          35: [2, 105],
          36: [2, 105],
          38: [2, 105],
          40: [2, 105],
          41: [2, 105],
          44: [2, 105],
          46: [2, 105],
          48: [2, 105],
          49: [2, 105],
          50: [2, 105],
          52: [2, 105],
          54: [2, 105],
          56: [2, 105],
          58: [2, 105],
          59: 253,
          65: [2, 105],
          66: [1, 102],
          67: [2, 105],
          78: [2, 105],
          79: [2, 105],
          80: [2, 105],
          81: [2, 105],
          82: [2, 105],
          83: [2, 105],
          84: [2, 105],
          85: [2, 105],
          86: [2, 105]
        }, {
          5: [2, 107],
          6: [2, 107],
          11: [2, 107],
          12: [2, 107],
          13: [2, 107],
          14: [2, 107],
          15: [2, 107],
          19: [2, 107],
          35: [2, 107],
          36: [2, 107],
          38: [2, 107],
          40: [2, 107],
          41: [2, 107],
          44: [2, 107],
          46: [2, 107],
          48: [2, 107],
          49: [2, 107],
          50: [2, 107],
          52: [2, 107],
          54: [2, 107],
          56: [2, 107],
          58: [2, 107],
          65: [2, 107],
          67: [2, 107],
          78: [2, 107],
          79: [2, 107],
          80: [2, 107],
          81: [2, 107],
          82: [2, 107],
          83: [2, 107],
          84: [2, 107],
          85: [2, 107],
          86: [2, 107]
        }, {
          5: [2, 91],
          6: [2, 91],
          11: [2, 91],
          12: [2, 91],
          13: [2, 91],
          14: [2, 91],
          15: [2, 91],
          19: [2, 91],
          35: [2, 91],
          36: [2, 91]
        }, {
          5: [2, 113],
          6: [2, 113],
          11: [2, 113],
          12: [2, 113],
          13: [2, 113],
          14: [2, 113],
          15: [2, 113],
          19: [2, 113],
          35: [2, 113],
          36: [2, 113],
          38: [2, 113],
          40: [2, 113],
          41: [2, 113],
          44: [2, 113],
          46: [2, 113],
          48: [2, 113],
          49: [2, 113],
          50: [2, 113],
          52: [2, 113],
          54: [2, 113],
          56: [2, 113],
          58: [2, 113],
          65: [2, 113],
          67: [2, 113],
          78: [2, 113],
          79: [2, 113],
          80: [2, 113],
          81: [2, 113],
          82: [2, 113],
          83: [2, 113],
          84: [2, 113],
          85: [2, 113],
          86: [2, 113]
        }, {
          5: [2, 108],
          6: [2, 108],
          11: [2, 108],
          12: [2, 108],
          13: [2, 108],
          14: [2, 108],
          15: [2, 108],
          19: [2, 108],
          35: [2, 108],
          36: [2, 108]
        }, {
          6: [1, 254]
        }, {
          1: [2, 2]
        }, {
          4: 255,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          4: 259,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          4: 260,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          4: 261,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          4: 262,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          6: [1, 263]
        }, {
          1: [2, 4]
        }, {
          6: [1, 264]
        }, {
          8: 265,
          11: [1, 27],
          12: [1, 269],
          16: [1, 268],
          18: [1, 267],
          22: 266,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          8: 270,
          11: [1, 27],
          12: [1, 269],
          16: [1, 268],
          18: [1, 272],
          22: 271,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          11: [1, 27],
          12: [1, 269],
          16: [1, 176],
          18: [1, 274],
          22: 273,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          8: 275,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          8: 276,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          1: [2, 6]
        }, {
          1: [2, 7]
        }, {
          6: [1, 277]
        }, {
          5: [2, 14],
          6: [2, 14],
          11: [2, 14],
          12: [2, 14],
          13: [2, 14],
          14: [2, 14],
          15: [2, 14],
          19: [2, 14]
        }, {
          5: [2, 232],
          6: [2, 232],
          11: [2, 232],
          12: [2, 232],
          13: [2, 232],
          14: [2, 232],
          15: [1, 116],
          19: [2, 232]
        }, {
          6: [2, 215],
          19: [2, 215]
        }, {
          6: [2, 217],
          19: [2, 217]
        }, {
          6: [2, 219],
          19: [2, 219]
        }, {
          6: [2, 221],
          19: [2, 221]
        }, {
          5: [2, 26],
          6: [2, 26],
          11: [2, 26],
          12: [2, 26],
          13: [2, 26],
          14: [2, 26],
          15: [2, 26],
          19: [2, 26],
          123: [1, 278],
          126: [2, 26],
          127: [2, 26]
        }, {
          5: [2, 27],
          6: [2, 27],
          11: [2, 27],
          12: [2, 27],
          13: [2, 27],
          14: [2, 27],
          15: [2, 27],
          19: [2, 27],
          126: [2, 27],
          127: [2, 27]
        }, {
          5: [2, 64],
          6: [2, 64],
          11: [2, 64],
          12: [2, 64],
          13: [2, 64],
          14: [2, 64],
          15: [2, 64],
          16: [1, 197],
          19: [2, 64],
          35: [2, 64],
          36: [2, 64],
          42: 195,
          46: [2, 64],
          47: 279,
          49: [2, 64],
          50: [1, 196],
          52: [2, 64],
          53: 94,
          54: [1, 198],
          56: [2, 64],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 64],
          66: [1, 102],
          67: [2, 64]
        }, {
          5: [2, 59],
          6: [2, 59],
          11: [2, 59],
          12: [2, 59],
          13: [2, 59],
          14: [2, 59],
          15: [2, 59],
          19: [2, 59],
          35: [2, 59],
          36: [2, 59]
        }, {
          5: [2, 44],
          6: [2, 44],
          11: [2, 44],
          12: [2, 44],
          13: [2, 44],
          14: [2, 44],
          15: [2, 44],
          16: [1, 204],
          19: [2, 44],
          35: [2, 44],
          36: [2, 44],
          39: 280,
          42: 205,
          44: [1, 81],
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 39],
          6: [2, 39],
          11: [2, 39],
          12: [2, 39],
          13: [2, 39],
          14: [2, 39],
          15: [2, 39],
          19: [2, 39],
          35: [2, 39],
          36: [2, 39]
        }, {
          5: [2, 75],
          6: [2, 75],
          11: [2, 75],
          12: [2, 75],
          13: [2, 75],
          14: [2, 75],
          15: [2, 75],
          16: [1, 219],
          19: [2, 75],
          35: [2, 75],
          36: [2, 75],
          42: 281,
          46: [2, 75],
          48: [2, 75],
          49: [2, 75],
          52: [2, 75],
          53: 94,
          54: [1, 198],
          56: [2, 75],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 75],
          66: [1, 102],
          67: [2, 75]
        }, {
          5: [2, 70],
          6: [2, 70],
          11: [2, 70],
          12: [2, 70],
          13: [2, 70],
          14: [2, 70],
          15: [2, 70],
          19: [2, 70],
          35: [2, 70],
          36: [2, 70]
        }, {
          5: [2, 53],
          6: [2, 53],
          11: [2, 53],
          12: [2, 53],
          13: [2, 53],
          14: [2, 53],
          15: [2, 53],
          16: [1, 219],
          19: [2, 53],
          35: [2, 53],
          36: [2, 53],
          38: [2, 53],
          40: [2, 53],
          42: 282,
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 49],
          6: [2, 49],
          11: [2, 49],
          12: [2, 49],
          13: [2, 49],
          14: [2, 49],
          15: [2, 49],
          19: [2, 49],
          35: [2, 49],
          36: [2, 49]
        }, {
          5: [2, 158],
          6: [2, 158],
          11: [2, 158],
          12: [2, 158],
          13: [2, 158],
          14: [2, 158],
          15: [2, 158],
          19: [2, 158],
          35: [2, 158],
          36: [2, 158]
        }, {
          5: [2, 152],
          6: [2, 152],
          11: [2, 152],
          12: [2, 152],
          13: [2, 152],
          14: [2, 152],
          15: [2, 152],
          19: [2, 152],
          35: [2, 152],
          36: [2, 152]
        }, {
          5: [2, 140],
          6: [2, 140],
          11: [2, 140],
          12: [2, 140],
          13: [2, 140],
          14: [2, 140],
          15: [2, 140],
          19: [2, 140],
          35: [2, 140],
          36: [2, 140]
        }, {
          5: [2, 146],
          6: [2, 146],
          11: [2, 146],
          12: [2, 146],
          13: [2, 146],
          14: [2, 146],
          15: [2, 146],
          19: [2, 146],
          35: [2, 146],
          36: [2, 146]
        }, {
          5: [2, 128],
          6: [2, 128],
          11: [2, 128],
          12: [2, 128],
          13: [2, 128],
          14: [2, 128],
          15: [2, 128],
          19: [2, 128],
          35: [2, 128],
          36: [2, 128]
        }, {
          5: [2, 134],
          6: [2, 134],
          11: [2, 134],
          12: [2, 134],
          13: [2, 134],
          14: [2, 134],
          15: [2, 134],
          19: [2, 134],
          35: [2, 134],
          36: [2, 134]
        }, {
          5: [2, 164],
          6: [2, 164],
          11: [2, 164],
          12: [2, 164],
          13: [2, 164],
          14: [2, 164],
          15: [2, 164],
          19: [2, 164],
          35: [2, 164],
          36: [2, 164]
        }, {
          5: [2, 171],
          6: [2, 171],
          11: [2, 171],
          12: [2, 171],
          13: [2, 171],
          14: [2, 171],
          15: [2, 171],
          19: [2, 171],
          35: [2, 171],
          36: [2, 171]
        }, {
          5: [2, 178],
          6: [2, 178],
          11: [2, 178],
          12: [2, 178],
          13: [2, 178],
          14: [2, 178],
          15: [2, 178],
          19: [2, 178],
          35: [2, 178],
          36: [2, 178]
        }, {
          5: [2, 86],
          6: [2, 86],
          11: [2, 86],
          12: [2, 86],
          13: [2, 86],
          14: [2, 86],
          15: [2, 86],
          16: [1, 251],
          19: [2, 86],
          35: [2, 86],
          36: [2, 86],
          38: [2, 86],
          40: [2, 86],
          41: [2, 86],
          44: [2, 86],
          46: [2, 86],
          48: [2, 86],
          49: [2, 86],
          50: [2, 86],
          52: [2, 86],
          53: 283,
          56: [2, 86],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 86],
          66: [1, 102],
          67: [2, 86]
        }, {
          5: [2, 81],
          6: [2, 81],
          11: [2, 81],
          12: [2, 81],
          13: [2, 81],
          14: [2, 81],
          15: [2, 81],
          19: [2, 81],
          35: [2, 81],
          36: [2, 81]
        }, {
          5: [2, 97],
          6: [2, 97],
          11: [2, 97],
          12: [2, 97],
          13: [2, 97],
          14: [2, 97],
          15: [2, 97],
          19: [2, 97],
          35: [2, 97],
          36: [2, 97],
          38: [2, 97],
          40: [2, 97],
          41: [2, 97],
          44: [2, 97],
          46: [2, 97],
          48: [2, 97],
          49: [2, 97],
          50: [2, 97],
          52: [2, 97],
          54: [2, 97],
          56: [2, 97],
          57: 284,
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 97],
          66: [1, 102],
          67: [2, 97]
        }, {
          5: [2, 92],
          6: [2, 92],
          11: [2, 92],
          12: [2, 92],
          13: [2, 92],
          14: [2, 92],
          15: [2, 92],
          19: [2, 92],
          35: [2, 92],
          36: [2, 92]
        }, {
          5: [2, 109],
          6: [2, 109],
          11: [2, 109],
          12: [2, 109],
          13: [2, 109],
          14: [2, 109],
          15: [2, 109],
          19: [2, 109],
          35: [2, 109],
          36: [2, 109]
        }, {
          5: [2, 110],
          6: [2, 110],
          11: [2, 110],
          12: [2, 110],
          13: [2, 110],
          14: [2, 110],
          15: [2, 110],
          19: [2, 110],
          35: [2, 110],
          36: [2, 110]
        }, {
          5: [2, 114],
          6: [2, 114],
          11: [2, 114],
          12: [2, 114],
          13: [2, 114],
          14: [2, 114],
          15: [2, 114],
          19: [2, 114],
          35: [2, 114],
          36: [2, 114]
        }, {
          5: [2, 115],
          6: [2, 115],
          11: [2, 115],
          12: [2, 115],
          13: [2, 115],
          14: [2, 115],
          15: [2, 115],
          19: [2, 115],
          35: [2, 115],
          36: [2, 115]
        }, {
          8: 123,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          8: 171,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          8: 172,
          16: [1, 155],
          18: [1, 158],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          4: 285,
          8: 160,
          11: [1, 27],
          12: [1, 258],
          16: [1, 286],
          18: [1, 287],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 288]
        }, {
          11: [1, 117],
          12: [1, 118],
          13: [1, 114],
          14: [1, 115],
          15: [1, 116],
          19: [1, 289]
        }, {
          19: [1, 290]
        }, {
          5: [2, 22],
          6: [2, 22],
          11: [2, 22],
          12: [2, 22],
          13: [2, 22],
          14: [2, 22],
          15: [2, 22],
          19: [2, 22]
        }, {
          4: 291,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          5: [2, 21],
          6: [2, 21],
          11: [2, 21],
          12: [2, 21],
          13: [2, 21],
          14: [2, 21],
          15: [2, 21],
          19: [2, 21]
        }, {
          5: [2, 23],
          6: [2, 23],
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          19: [2, 23],
          25: [1, 296],
          26: [1, 129],
          120: [1, 292],
          121: [1, 293],
          122: [1, 294],
          123: [1, 295]
        }, {
          5: [2, 25],
          6: [2, 25],
          11: [2, 25],
          12: [2, 25],
          13: [2, 25],
          14: [2, 25],
          15: [2, 25],
          19: [2, 25],
          123: [1, 297]
        }, {
          5: [2, 29],
          6: [2, 29],
          11: [2, 29],
          12: [2, 29],
          13: [2, 29],
          14: [2, 29],
          15: [2, 29],
          19: [2, 29]
        }, {
          5: [2, 30],
          6: [2, 30],
          11: [2, 30],
          12: [2, 30],
          13: [2, 30],
          14: [2, 30],
          15: [2, 30],
          19: [2, 30]
        }, {
          16: [1, 299],
          21: 298,
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          16: [1, 299],
          21: 300,
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          5: [2, 233],
          6: [2, 233],
          11: [2, 233],
          12: [2, 233],
          13: [2, 233],
          14: [2, 233],
          15: [1, 116],
          19: [2, 233]
        }, {
          5: [2, 234],
          6: [2, 234],
          11: [2, 234],
          12: [2, 234],
          13: [2, 234],
          14: [2, 234],
          15: [1, 116],
          19: [2, 234]
        }, {
          5: [2, 245],
          6: [2, 245],
          11: [2, 245],
          12: [2, 245],
          13: [2, 245],
          14: [2, 245],
          15: [2, 245],
          19: [2, 245]
        }, {
          5: [2, 246],
          6: [2, 246],
          11: [2, 246],
          12: [2, 246],
          13: [2, 246],
          14: [2, 246],
          15: [2, 246],
          19: [2, 246]
        }, {
          5: [2, 251],
          6: [2, 251]
        }, {
          5: [2, 23],
          6: [2, 23],
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          19: [2, 23],
          25: [1, 301],
          26: [1, 129]
        }, {
          5: [2, 25],
          6: [2, 25],
          11: [2, 25],
          12: [2, 25],
          13: [2, 25],
          14: [2, 25],
          15: [2, 25],
          19: [2, 25]
        }, {
          5: [2, 252],
          6: [2, 252]
        }, {
          5: [2, 253],
          6: [2, 253]
        }, {
          5: [2, 254],
          6: [2, 254]
        }, {
          5: [2, 60],
          6: [2, 60],
          11: [2, 60],
          12: [2, 60],
          13: [2, 60],
          14: [2, 60],
          15: [2, 60],
          16: [1, 303],
          19: [2, 60],
          30: 304,
          35: [2, 60],
          36: [2, 60],
          42: 195,
          43: 80,
          45: 302,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          51: 95,
          53: 94,
          54: [1, 198],
          55: 101,
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102]
        }, {
          5: [2, 71],
          6: [2, 71],
          11: [2, 71],
          12: [2, 71],
          13: [2, 71],
          14: [2, 71],
          15: [2, 71],
          16: [1, 307],
          19: [2, 71],
          30: 308,
          35: [2, 71],
          36: [2, 71],
          42: 195,
          43: 306,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          51: 95,
          53: 94,
          54: [1, 198],
          55: 101,
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102]
        }, {
          5: [2, 82],
          6: [2, 82],
          11: [2, 82],
          12: [2, 82],
          13: [2, 82],
          14: [2, 82],
          15: [2, 82],
          16: [1, 310],
          19: [2, 82],
          30: 311,
          35: [2, 82],
          36: [2, 82],
          42: 195,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          51: 309,
          53: 94,
          54: [1, 198],
          55: 101,
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102]
        }, {
          5: [2, 93],
          6: [2, 93],
          11: [2, 93],
          12: [2, 93],
          13: [2, 93],
          14: [2, 93],
          15: [2, 93],
          16: [1, 313],
          19: [2, 93],
          30: 314,
          35: [2, 93],
          36: [2, 93],
          42: 195,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          53: 94,
          54: [1, 198],
          55: 312,
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102]
        }, {
          5: [2, 111],
          6: [2, 111],
          11: [2, 111],
          12: [2, 111],
          13: [2, 111],
          14: [2, 111],
          15: [2, 111],
          16: [1, 316],
          19: [2, 111],
          30: 317,
          35: [2, 111],
          36: [2, 111],
          42: 195,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 315,
          66: [1, 102]
        }, {
          5: [2, 116],
          6: [2, 116],
          11: [2, 116],
          12: [2, 116],
          13: [2, 116],
          14: [2, 116],
          15: [2, 116],
          19: [2, 116],
          35: [2, 116],
          36: [2, 116]
        }, {
          5: [2, 20],
          6: [2, 20],
          11: [2, 20],
          12: [2, 20],
          13: [2, 20],
          14: [2, 20],
          15: [2, 20],
          19: [2, 20]
        }, {
          6: [2, 223],
          19: [2, 223]
        }, {
          4: 318,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          5: [2, 65],
          6: [2, 65],
          11: [2, 65],
          12: [2, 65],
          13: [2, 65],
          14: [2, 65],
          15: [2, 65],
          16: [1, 197],
          19: [2, 65],
          35: [2, 65],
          36: [2, 65],
          42: 195,
          46: [2, 65],
          47: 319,
          49: [2, 65],
          50: [1, 196],
          52: [2, 65],
          53: 94,
          54: [1, 198],
          56: [2, 65],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 65],
          66: [1, 102],
          67: [2, 65]
        }, {
          5: [2, 66],
          6: [2, 66],
          11: [2, 66],
          12: [2, 66],
          13: [2, 66],
          14: [2, 66],
          15: [2, 66],
          19: [2, 66],
          35: [2, 66],
          36: [2, 66],
          46: [2, 66],
          49: [2, 66],
          52: [2, 66],
          56: [2, 66],
          65: [2, 66],
          67: [2, 66]
        }, {
          5: [2, 169],
          6: [2, 169],
          11: [2, 169],
          12: [2, 169],
          13: [2, 169],
          14: [2, 169],
          15: [2, 169],
          19: [2, 169],
          35: [2, 169],
          36: [2, 169]
        }, {
          5: [2, 176],
          6: [2, 176],
          11: [2, 176],
          12: [2, 176],
          13: [2, 176],
          14: [2, 176],
          15: [2, 176],
          19: [2, 176],
          35: [2, 176],
          36: [2, 176]
        }, {
          5: [2, 183],
          6: [2, 183],
          11: [2, 183],
          12: [2, 183],
          13: [2, 183],
          14: [2, 183],
          15: [2, 183],
          19: [2, 183],
          35: [2, 183],
          36: [2, 183]
        }, {
          5: [2, 73],
          6: [2, 73],
          11: [2, 73],
          12: [2, 73],
          13: [2, 73],
          14: [2, 73],
          15: [2, 73],
          19: [2, 73],
          35: [2, 73],
          36: [2, 73],
          46: [2, 73],
          48: [2, 73],
          49: [2, 73],
          50: [1, 206],
          52: [2, 73],
          56: [2, 73],
          65: [2, 73],
          67: [2, 73]
        }, {
          5: [2, 74],
          6: [2, 74],
          11: [2, 74],
          12: [2, 74],
          13: [2, 74],
          14: [2, 74],
          15: [2, 74],
          16: [1, 219],
          19: [2, 74],
          35: [2, 74],
          36: [2, 74],
          42: 209,
          46: [2, 74],
          48: [2, 74],
          49: [2, 74],
          52: [2, 74],
          53: 94,
          54: [1, 198],
          56: [2, 74],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 74],
          66: [1, 102],
          67: [2, 74]
        }, {
          50: [1, 134],
          54: [1, 147],
          58: [1, 149]
        }, {
          5: [2, 85],
          6: [2, 85],
          11: [2, 85],
          12: [2, 85],
          13: [2, 85],
          14: [2, 85],
          15: [2, 85],
          16: [1, 251],
          19: [2, 85],
          35: [2, 85],
          36: [2, 85],
          38: [2, 85],
          40: [2, 85],
          41: [2, 85],
          44: [2, 85],
          46: [2, 85],
          48: [2, 85],
          49: [2, 85],
          50: [2, 85],
          52: [2, 85],
          53: 250,
          56: [2, 85],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 85],
          66: [1, 102],
          67: [2, 85]
        }, {
          5: [2, 95],
          6: [2, 95],
          11: [2, 95],
          12: [2, 95],
          13: [2, 95],
          14: [2, 95],
          15: [2, 95],
          19: [2, 95],
          35: [2, 95],
          36: [2, 95],
          38: [2, 95],
          40: [2, 95],
          41: [2, 95],
          44: [2, 95],
          46: [2, 95],
          48: [2, 95],
          49: [2, 95],
          50: [2, 95],
          52: [2, 95],
          54: [2, 95],
          56: [2, 95],
          58: [1, 230],
          65: [2, 95],
          67: [2, 95]
        }, {
          5: [2, 96],
          6: [2, 96],
          11: [2, 96],
          12: [2, 96],
          13: [2, 96],
          14: [2, 96],
          15: [2, 96],
          19: [2, 96],
          35: [2, 96],
          36: [2, 96],
          38: [2, 96],
          40: [2, 96],
          41: [2, 96],
          44: [2, 96],
          46: [2, 96],
          48: [2, 96],
          49: [2, 96],
          50: [2, 96],
          52: [2, 96],
          54: [2, 96],
          56: [2, 96],
          57: 240,
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 96],
          66: [1, 102],
          67: [2, 96]
        }, {
          5: [2, 45],
          6: [2, 45],
          11: [2, 45],
          12: [2, 45],
          13: [2, 45],
          14: [2, 45],
          15: [2, 45],
          16: [1, 204],
          19: [2, 45],
          35: [2, 45],
          36: [2, 45],
          39: 320,
          42: 205,
          44: [1, 81],
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 40],
          6: [2, 40],
          11: [2, 40],
          12: [2, 40],
          13: [2, 40],
          14: [2, 40],
          15: [2, 40],
          16: [1, 322],
          19: [2, 40],
          35: [2, 40],
          36: [2, 40],
          37: 321,
          42: 323,
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 46],
          6: [2, 46],
          11: [2, 46],
          12: [2, 46],
          13: [2, 46],
          14: [2, 46],
          15: [2, 46],
          19: [2, 46],
          35: [2, 46],
          36: [2, 46]
        }, {
          44: [1, 136],
          54: [1, 147],
          58: [1, 149]
        }, {
          44: [1, 207]
        }, {
          5: [2, 76],
          6: [2, 76],
          11: [2, 76],
          12: [2, 76],
          13: [2, 76],
          14: [2, 76],
          15: [2, 76],
          16: [1, 219],
          19: [2, 76],
          35: [2, 76],
          36: [2, 76],
          42: 324,
          46: [2, 76],
          48: [2, 76],
          49: [2, 76],
          52: [2, 76],
          53: 94,
          54: [1, 198],
          56: [2, 76],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 76],
          66: [1, 102],
          67: [2, 76]
        }, {
          5: [2, 54],
          6: [2, 54],
          11: [2, 54],
          12: [2, 54],
          13: [2, 54],
          14: [2, 54],
          15: [2, 54],
          16: [1, 219],
          19: [2, 54],
          35: [2, 54],
          36: [2, 54],
          38: [2, 54],
          40: [2, 54],
          42: 325,
          53: 94,
          54: [1, 198],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          66: [1, 102]
        }, {
          5: [2, 50],
          6: [2, 50],
          11: [2, 50],
          12: [2, 50],
          13: [2, 50],
          14: [2, 50],
          15: [2, 50],
          16: [1, 307],
          19: [2, 50],
          30: 308,
          35: [2, 50],
          36: [2, 50],
          42: 195,
          43: 326,
          47: 62,
          48: [1, 305],
          50: [1, 196],
          51: 95,
          53: 94,
          54: [1, 198],
          55: 101,
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102]
        }, {
          5: [2, 77],
          6: [2, 77],
          11: [2, 77],
          12: [2, 77],
          13: [2, 77],
          14: [2, 77],
          15: [2, 77],
          19: [2, 77],
          35: [2, 77],
          36: [2, 77],
          46: [2, 77],
          48: [2, 77],
          49: [2, 77],
          52: [2, 77],
          56: [2, 77],
          65: [2, 77],
          67: [2, 77]
        }, {
          5: [2, 162],
          6: [2, 162],
          11: [2, 162],
          12: [2, 162],
          13: [2, 162],
          14: [2, 162],
          15: [2, 162],
          19: [2, 162],
          35: [2, 162],
          36: [2, 162]
        }, {
          5: [2, 156],
          6: [2, 156],
          11: [2, 156],
          12: [2, 156],
          13: [2, 156],
          14: [2, 156],
          15: [2, 156],
          19: [2, 156],
          35: [2, 156],
          36: [2, 156]
        }, {
          5: [2, 144],
          6: [2, 144],
          11: [2, 144],
          12: [2, 144],
          13: [2, 144],
          14: [2, 144],
          15: [2, 144],
          19: [2, 144],
          35: [2, 144],
          36: [2, 144]
        }, {
          5: [2, 150],
          6: [2, 150],
          11: [2, 150],
          12: [2, 150],
          13: [2, 150],
          14: [2, 150],
          15: [2, 150],
          19: [2, 150],
          35: [2, 150],
          36: [2, 150]
        }, {
          5: [2, 132],
          6: [2, 132],
          11: [2, 132],
          12: [2, 132],
          13: [2, 132],
          14: [2, 132],
          15: [2, 132],
          19: [2, 132],
          35: [2, 132],
          36: [2, 132]
        }, {
          5: [2, 138],
          6: [2, 138],
          11: [2, 138],
          12: [2, 138],
          13: [2, 138],
          14: [2, 138],
          15: [2, 138],
          19: [2, 138],
          35: [2, 138],
          36: [2, 138]
        }, {
          5: [2, 168],
          6: [2, 168],
          11: [2, 168],
          12: [2, 168],
          13: [2, 168],
          14: [2, 168],
          15: [2, 168],
          19: [2, 168],
          35: [2, 168],
          36: [2, 168]
        }, {
          5: [2, 175],
          6: [2, 175],
          11: [2, 175],
          12: [2, 175],
          13: [2, 175],
          14: [2, 175],
          15: [2, 175],
          19: [2, 175],
          35: [2, 175],
          36: [2, 175]
        }, {
          5: [2, 182],
          6: [2, 182],
          11: [2, 182],
          12: [2, 182],
          13: [2, 182],
          14: [2, 182],
          15: [2, 182],
          19: [2, 182],
          35: [2, 182],
          36: [2, 182]
        }, {
          54: [1, 147],
          58: [1, 149]
        }, {
          5: [2, 55],
          6: [2, 55],
          11: [2, 55],
          12: [2, 55],
          13: [2, 55],
          14: [2, 55],
          15: [2, 55],
          19: [2, 55],
          35: [2, 55],
          36: [2, 55],
          38: [2, 55],
          40: [2, 55]
        }, {
          5: [2, 159],
          6: [2, 159],
          11: [2, 159],
          12: [2, 159],
          13: [2, 159],
          14: [2, 159],
          15: [2, 159],
          19: [2, 159],
          35: [2, 159],
          36: [2, 159]
        }, {
          5: [2, 153],
          6: [2, 153],
          11: [2, 153],
          12: [2, 153],
          13: [2, 153],
          14: [2, 153],
          15: [2, 153],
          19: [2, 153],
          35: [2, 153],
          36: [2, 153]
        }, {
          5: [2, 141],
          6: [2, 141],
          11: [2, 141],
          12: [2, 141],
          13: [2, 141],
          14: [2, 141],
          15: [2, 141],
          19: [2, 141],
          35: [2, 141],
          36: [2, 141]
        }, {
          5: [2, 147],
          6: [2, 147],
          11: [2, 147],
          12: [2, 147],
          13: [2, 147],
          14: [2, 147],
          15: [2, 147],
          19: [2, 147],
          35: [2, 147],
          36: [2, 147]
        }, {
          5: [2, 129],
          6: [2, 129],
          11: [2, 129],
          12: [2, 129],
          13: [2, 129],
          14: [2, 129],
          15: [2, 129],
          19: [2, 129],
          35: [2, 129],
          36: [2, 129]
        }, {
          5: [2, 135],
          6: [2, 135],
          11: [2, 135],
          12: [2, 135],
          13: [2, 135],
          14: [2, 135],
          15: [2, 135],
          19: [2, 135],
          35: [2, 135],
          36: [2, 135]
        }, {
          5: [2, 165],
          6: [2, 165],
          11: [2, 165],
          12: [2, 165],
          13: [2, 165],
          14: [2, 165],
          15: [2, 165],
          19: [2, 165],
          35: [2, 165],
          36: [2, 165]
        }, {
          5: [2, 172],
          6: [2, 172],
          11: [2, 172],
          12: [2, 172],
          13: [2, 172],
          14: [2, 172],
          15: [2, 172],
          19: [2, 172],
          35: [2, 172],
          36: [2, 172]
        }, {
          5: [2, 179],
          6: [2, 179],
          11: [2, 179],
          12: [2, 179],
          13: [2, 179],
          14: [2, 179],
          15: [2, 179],
          19: [2, 179],
          35: [2, 179],
          36: [2, 179]
        }, {
          5: [2, 98],
          6: [2, 98],
          11: [2, 98],
          12: [2, 98],
          13: [2, 98],
          14: [2, 98],
          15: [2, 98],
          19: [2, 98],
          35: [2, 98],
          36: [2, 98],
          38: [2, 98],
          40: [2, 98],
          41: [2, 98],
          44: [2, 98],
          46: [2, 98],
          48: [2, 98],
          49: [2, 98],
          50: [2, 98],
          52: [2, 98],
          54: [2, 98],
          56: [2, 98],
          57: 327,
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 98],
          66: [1, 102],
          67: [2, 98]
        }, {
          5: [2, 160],
          6: [2, 160],
          11: [2, 160],
          12: [2, 160],
          13: [2, 160],
          14: [2, 160],
          15: [2, 160],
          19: [2, 160],
          35: [2, 160],
          36: [2, 160]
        }, {
          5: [2, 154],
          6: [2, 154],
          11: [2, 154],
          12: [2, 154],
          13: [2, 154],
          14: [2, 154],
          15: [2, 154],
          19: [2, 154],
          35: [2, 154],
          36: [2, 154]
        }, {
          5: [2, 142],
          6: [2, 142],
          11: [2, 142],
          12: [2, 142],
          13: [2, 142],
          14: [2, 142],
          15: [2, 142],
          19: [2, 142],
          35: [2, 142],
          36: [2, 142]
        }, {
          5: [2, 148],
          6: [2, 148],
          11: [2, 148],
          12: [2, 148],
          13: [2, 148],
          14: [2, 148],
          15: [2, 148],
          19: [2, 148],
          35: [2, 148],
          36: [2, 148]
        }, {
          5: [2, 130],
          6: [2, 130],
          11: [2, 130],
          12: [2, 130],
          13: [2, 130],
          14: [2, 130],
          15: [2, 130],
          19: [2, 130],
          35: [2, 130],
          36: [2, 130]
        }, {
          5: [2, 136],
          6: [2, 136],
          11: [2, 136],
          12: [2, 136],
          13: [2, 136],
          14: [2, 136],
          15: [2, 136],
          19: [2, 136],
          35: [2, 136],
          36: [2, 136]
        }, {
          5: [2, 166],
          6: [2, 166],
          11: [2, 166],
          12: [2, 166],
          13: [2, 166],
          14: [2, 166],
          15: [2, 166],
          19: [2, 166],
          35: [2, 166],
          36: [2, 166]
        }, {
          5: [2, 173],
          6: [2, 173],
          11: [2, 173],
          12: [2, 173],
          13: [2, 173],
          14: [2, 173],
          15: [2, 173],
          19: [2, 173],
          35: [2, 173],
          36: [2, 173]
        }, {
          5: [2, 180],
          6: [2, 180],
          11: [2, 180],
          12: [2, 180],
          13: [2, 180],
          14: [2, 180],
          15: [2, 180],
          19: [2, 180],
          35: [2, 180],
          36: [2, 180]
        }, {
          5: [2, 99],
          6: [2, 99],
          11: [2, 99],
          12: [2, 99],
          13: [2, 99],
          14: [2, 99],
          15: [2, 99],
          19: [2, 99],
          35: [2, 99],
          36: [2, 99],
          38: [2, 99],
          40: [2, 99],
          41: [2, 99],
          44: [2, 99],
          46: [2, 99],
          48: [2, 99],
          49: [2, 99],
          50: [2, 99],
          52: [2, 99],
          54: [2, 99],
          56: [2, 99],
          65: [2, 99],
          67: [2, 99]
        }, {
          5: [2, 161],
          6: [2, 161],
          11: [2, 161],
          12: [2, 161],
          13: [2, 161],
          14: [2, 161],
          15: [2, 161],
          19: [2, 161],
          35: [2, 161],
          36: [2, 161]
        }, {
          5: [2, 155],
          6: [2, 155],
          11: [2, 155],
          12: [2, 155],
          13: [2, 155],
          14: [2, 155],
          15: [2, 155],
          19: [2, 155],
          35: [2, 155],
          36: [2, 155]
        }, {
          5: [2, 143],
          6: [2, 143],
          11: [2, 143],
          12: [2, 143],
          13: [2, 143],
          14: [2, 143],
          15: [2, 143],
          19: [2, 143],
          35: [2, 143],
          36: [2, 143]
        }, {
          5: [2, 149],
          6: [2, 149],
          11: [2, 149],
          12: [2, 149],
          13: [2, 149],
          14: [2, 149],
          15: [2, 149],
          19: [2, 149],
          35: [2, 149],
          36: [2, 149]
        }, {
          5: [2, 131],
          6: [2, 131],
          11: [2, 131],
          12: [2, 131],
          13: [2, 131],
          14: [2, 131],
          15: [2, 131],
          19: [2, 131],
          35: [2, 131],
          36: [2, 131]
        }, {
          5: [2, 137],
          6: [2, 137],
          11: [2, 137],
          12: [2, 137],
          13: [2, 137],
          14: [2, 137],
          15: [2, 137],
          19: [2, 137],
          35: [2, 137],
          36: [2, 137]
        }, {
          5: [2, 167],
          6: [2, 167],
          11: [2, 167],
          12: [2, 167],
          13: [2, 167],
          14: [2, 167],
          15: [2, 167],
          19: [2, 167],
          35: [2, 167],
          36: [2, 167]
        }, {
          5: [2, 174],
          6: [2, 174],
          11: [2, 174],
          12: [2, 174],
          13: [2, 174],
          14: [2, 174],
          15: [2, 174],
          19: [2, 174],
          35: [2, 174],
          36: [2, 174]
        }, {
          5: [2, 181],
          6: [2, 181],
          11: [2, 181],
          12: [2, 181],
          13: [2, 181],
          14: [2, 181],
          15: [2, 181],
          19: [2, 181],
          35: [2, 181],
          36: [2, 181]
        }, {
          5: [2, 88],
          6: [2, 88],
          11: [2, 88],
          12: [2, 88],
          13: [2, 88],
          14: [2, 88],
          15: [2, 88],
          19: [2, 88],
          35: [2, 88],
          36: [2, 88],
          38: [2, 88],
          40: [2, 88],
          41: [2, 88],
          44: [2, 88],
          46: [2, 88],
          48: [2, 88],
          49: [2, 88],
          50: [2, 88],
          52: [2, 88],
          56: [2, 88],
          65: [2, 88],
          67: [2, 88]
        }, {
          58: [1, 149]
        }, {
          5: [2, 87],
          6: [2, 87],
          11: [2, 87],
          12: [2, 87],
          13: [2, 87],
          14: [2, 87],
          15: [2, 87],
          16: [1, 251],
          19: [2, 87],
          35: [2, 87],
          36: [2, 87],
          38: [2, 87],
          40: [2, 87],
          41: [2, 87],
          44: [2, 87],
          46: [2, 87],
          48: [2, 87],
          49: [2, 87],
          50: [2, 87],
          52: [2, 87],
          53: 328,
          56: [2, 87],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 87],
          66: [1, 102],
          67: [2, 87]
        }, {
          5: [2, 106],
          6: [2, 106],
          11: [2, 106],
          12: [2, 106],
          13: [2, 106],
          14: [2, 106],
          15: [2, 106],
          19: [2, 106],
          35: [2, 106],
          36: [2, 106],
          38: [2, 106],
          40: [2, 106],
          41: [2, 106],
          44: [2, 106],
          46: [2, 106],
          48: [2, 106],
          49: [2, 106],
          50: [2, 106],
          52: [2, 106],
          54: [2, 106],
          56: [2, 106],
          58: [2, 106],
          65: [2, 106],
          67: [2, 106],
          78: [2, 106],
          79: [2, 106],
          80: [2, 106],
          81: [2, 106],
          82: [2, 106],
          83: [2, 106],
          84: [2, 106],
          85: [2, 106],
          86: [2, 106]
        }, {
          1: [2, 1]
        }, {
          5: [2, 9],
          6: [2, 9],
          11: [2, 9],
          12: [2, 9],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [2, 9]
        }, {
          5: [2, 23],
          6: [2, 23],
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          17: [1, 122],
          19: [2, 23],
          25: [1, 301],
          26: [1, 129],
          38: [1, 133],
          40: [1, 132],
          41: [1, 137],
          44: [1, 136],
          46: [1, 131],
          48: [1, 130],
          49: [1, 135],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153],
          78: [1, 142],
          79: [1, 143],
          80: [1, 140],
          81: [1, 141],
          82: [1, 139],
          83: [1, 138],
          84: [1, 144],
          85: [1, 145],
          86: [1, 146]
        }, {
          4: 329,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          16: [1, 176],
          18: [1, 163],
          23: 164,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          5: [2, 10],
          6: [2, 10],
          11: [2, 10],
          12: [2, 10],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [2, 10]
        }, {
          5: [2, 11],
          6: [2, 11],
          11: [2, 11],
          12: [2, 11],
          13: [2, 11],
          14: [2, 11],
          15: [1, 110],
          19: [2, 11]
        }, {
          5: [2, 12],
          6: [2, 12],
          11: [2, 12],
          12: [2, 12],
          13: [2, 12],
          14: [2, 12],
          15: [1, 110],
          19: [2, 12]
        }, {
          5: [2, 13],
          6: [2, 13],
          11: [2, 13],
          12: [2, 13],
          13: [2, 13],
          14: [2, 13],
          15: [2, 13],
          19: [2, 13]
        }, {
          1: [2, 3]
        }, {
          1: [2, 5]
        }, {
          5: [2, 236],
          6: [2, 236],
          11: [2, 236],
          12: [2, 236],
          13: [2, 236],
          14: [2, 236],
          15: [1, 116],
          19: [2, 236]
        }, {
          5: [2, 237],
          6: [2, 237],
          11: [2, 237],
          12: [2, 237],
          13: [2, 237],
          14: [2, 237],
          15: [2, 237],
          19: [2, 237]
        }, {
          4: 330,
          8: 160,
          11: [1, 27],
          12: [1, 258],
          16: [1, 286],
          18: [1, 287],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          5: [2, 23],
          6: [2, 23],
          8: 123,
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          16: [1, 155],
          18: [1, 158],
          19: [2, 23],
          25: [1, 301],
          26: [1, 129],
          28: [1, 156],
          29: [1, 157],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          16: [1, 176],
          23: 164,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168]
        }, {
          5: [2, 239],
          6: [2, 239],
          11: [2, 239],
          12: [2, 239],
          13: [2, 239],
          14: [2, 239],
          15: [1, 116],
          19: [2, 239]
        }, {
          5: [2, 240],
          6: [2, 240],
          11: [2, 240],
          12: [2, 240],
          13: [2, 240],
          14: [2, 240],
          15: [2, 240],
          19: [2, 240]
        }, {
          4: 331,
          8: 160,
          11: [1, 27],
          12: [1, 258],
          16: [1, 286],
          18: [1, 287],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          5: [2, 242],
          6: [2, 242],
          11: [2, 242],
          12: [2, 242],
          13: [2, 242],
          14: [2, 242],
          15: [2, 242],
          19: [2, 242]
        }, {
          4: 332,
          11: [1, 27],
          12: [1, 258],
          16: [1, 256],
          18: [1, 257],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 167],
          29: [1, 168],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93]
        }, {
          5: [2, 247],
          6: [2, 247],
          11: [2, 247],
          12: [2, 247],
          13: [1, 114],
          14: [1, 115],
          15: [1, 116],
          19: [2, 247]
        }, {
          5: [2, 248],
          6: [2, 248],
          11: [2, 248],
          12: [2, 248],
          13: [1, 114],
          14: [1, 115],
          15: [1, 116],
          19: [2, 248]
        }, {
          1: [2, 8]
        }, {
          6: [2, 225],
          19: [2, 225]
        }, {
          5: [2, 67],
          6: [2, 67],
          11: [2, 67],
          12: [2, 67],
          13: [2, 67],
          14: [2, 67],
          15: [2, 67],
          19: [2, 67],
          35: [2, 67],
          36: [2, 67],
          46: [2, 67],
          49: [2, 67],
          52: [2, 67],
          56: [2, 67],
          65: [2, 67],
          67: [2, 67]
        }, {
          5: [2, 47],
          6: [2, 47],
          11: [2, 47],
          12: [2, 47],
          13: [2, 47],
          14: [2, 47],
          15: [2, 47],
          19: [2, 47],
          35: [2, 47],
          36: [2, 47]
        }, {
          5: [2, 78],
          6: [2, 78],
          11: [2, 78],
          12: [2, 78],
          13: [2, 78],
          14: [2, 78],
          15: [2, 78],
          19: [2, 78],
          35: [2, 78],
          36: [2, 78],
          46: [2, 78],
          48: [2, 78],
          49: [2, 78],
          52: [2, 78],
          56: [2, 78],
          65: [2, 78],
          67: [2, 78]
        }, {
          5: [2, 56],
          6: [2, 56],
          11: [2, 56],
          12: [2, 56],
          13: [2, 56],
          14: [2, 56],
          15: [2, 56],
          19: [2, 56],
          35: [2, 56],
          36: [2, 56],
          38: [2, 56],
          40: [2, 56]
        }, {
          5: [2, 89],
          6: [2, 89],
          11: [2, 89],
          12: [2, 89],
          13: [2, 89],
          14: [2, 89],
          15: [2, 89],
          19: [2, 89],
          35: [2, 89],
          36: [2, 89],
          38: [2, 89],
          40: [2, 89],
          41: [2, 89],
          44: [2, 89],
          46: [2, 89],
          48: [2, 89],
          49: [2, 89],
          50: [2, 89],
          52: [2, 89],
          56: [2, 89],
          65: [2, 89],
          67: [2, 89]
        }, {
          5: [2, 100],
          6: [2, 100],
          11: [2, 100],
          12: [2, 100],
          13: [2, 100],
          14: [2, 100],
          15: [2, 100],
          19: [2, 100],
          35: [2, 100],
          36: [2, 100],
          38: [2, 100],
          40: [2, 100],
          41: [2, 100],
          44: [2, 100],
          46: [2, 100],
          48: [2, 100],
          49: [2, 100],
          50: [2, 100],
          52: [2, 100],
          54: [2, 100],
          56: [2, 100],
          65: [2, 100],
          67: [2, 100]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 333]
        }, {
          8: 123,
          11: [2, 23],
          12: [2, 23],
          13: [2, 23],
          14: [2, 23],
          15: [2, 23],
          16: [1, 155],
          17: [1, 122],
          18: [1, 158],
          19: [2, 23],
          25: [1, 301],
          26: [1, 129],
          28: [1, 156],
          29: [1, 157],
          38: [1, 133],
          40: [1, 132],
          41: [1, 137],
          44: [1, 136],
          46: [1, 131],
          48: [1, 130],
          49: [1, 135],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153],
          78: [1, 142],
          79: [1, 143],
          80: [1, 140],
          81: [1, 141],
          82: [1, 139],
          83: [1, 138],
          84: [1, 144],
          85: [1, 145],
          86: [1, 146],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          4: 334,
          8: 160,
          11: [1, 27],
          12: [1, 258],
          16: [1, 286],
          18: [1, 287],
          20: [1, 10],
          21: 11,
          22: 12,
          23: 162,
          24: [1, 60],
          25: [1, 177],
          27: [1, 61],
          28: [1, 14],
          29: [1, 15],
          30: 22,
          31: 23,
          32: 24,
          33: 25,
          34: 26,
          37: 67,
          39: 65,
          40: [1, 66],
          42: 78,
          43: 80,
          44: [1, 81],
          45: 64,
          47: 62,
          48: [1, 63],
          50: [1, 79],
          51: 95,
          53: 94,
          54: [1, 85],
          55: 101,
          57: 83,
          58: [1, 84],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          64: 103,
          66: [1, 102],
          68: 68,
          69: 69,
          70: 70,
          71: 71,
          72: 72,
          73: 73,
          74: 74,
          75: 75,
          76: 76,
          77: [1, 77],
          78: [1, 89],
          79: [1, 90],
          80: [1, 87],
          81: [1, 88],
          82: [1, 86],
          83: [1, 82],
          84: [1, 91],
          85: [1, 92],
          86: [1, 93],
          87: 13,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          124: [1, 16],
          125: [1, 17]
        }, {
          5: [2, 15],
          6: [2, 15],
          11: [2, 15],
          12: [2, 15],
          13: [2, 15],
          14: [2, 15],
          15: [2, 15],
          19: [2, 15],
          87: 335,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58],
          120: [1, 336],
          121: [1, 337],
          122: [1, 338],
          123: [1, 339]
        }, {
          5: [2, 244],
          6: [2, 244],
          11: [2, 244],
          12: [2, 244],
          13: [2, 244],
          14: [2, 244],
          15: [2, 244],
          19: [2, 244]
        }, {
          6: [2, 250],
          19: [2, 250]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 340]
        }, {
          6: [2, 216],
          19: [2, 216]
        }, {
          6: [2, 218],
          19: [2, 218]
        }, {
          6: [2, 220],
          19: [2, 220]
        }, {
          6: [2, 222],
          19: [2, 222]
        }, {
          5: [2, 26],
          6: [2, 26],
          11: [2, 26],
          12: [2, 26],
          13: [2, 26],
          14: [2, 26],
          15: [2, 26],
          19: [2, 26],
          123: [1, 341]
        }, {
          6: [2, 224],
          19: [2, 224]
        }, {
          5: [2, 36],
          6: [2, 36],
          11: [2, 36],
          12: [2, 36],
          13: [2, 36],
          14: [2, 36],
          15: [2, 36],
          19: [2, 36],
          35: [2, 36],
          36: [2, 36]
        }, {
          38: [1, 133],
          40: [1, 132],
          41: [1, 137],
          44: [1, 136],
          46: [1, 131],
          48: [1, 130],
          49: [1, 135],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153],
          78: [1, 142],
          79: [1, 143],
          80: [1, 140],
          81: [1, 141],
          82: [1, 139],
          83: [1, 138],
          84: [1, 144],
          85: [1, 145],
          86: [1, 146]
        }, {
          5: [2, 37],
          6: [2, 37],
          11: [2, 37],
          12: [2, 37],
          13: [2, 37],
          14: [2, 37],
          15: [2, 37],
          19: [2, 37],
          35: [2, 37],
          36: [2, 37]
        }, {
          5: [2, 26],
          6: [2, 26],
          11: [2, 26],
          12: [2, 26],
          13: [2, 26],
          14: [2, 26],
          15: [2, 26],
          19: [2, 26]
        }, {
          5: [2, 61],
          6: [2, 61],
          11: [2, 61],
          12: [2, 61],
          13: [2, 61],
          14: [2, 61],
          15: [2, 61],
          19: [2, 61],
          35: [2, 61],
          36: [2, 61]
        }, {
          48: [1, 130],
          49: [1, 135],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153]
        }, {
          49: [1, 182],
          52: [1, 183],
          56: [1, 184],
          65: [1, 185],
          67: [1, 186]
        }, {
          16: [1, 197],
          42: 195,
          47: 191,
          49: [2, 63],
          50: [1, 196],
          52: [2, 63],
          53: 94,
          54: [1, 198],
          56: [2, 63],
          57: 199,
          58: [1, 200],
          59: 96,
          60: [1, 97],
          61: [1, 98],
          62: [1, 99],
          63: [1, 100],
          65: [2, 63],
          66: [1, 102],
          67: [2, 63]
        }, {
          5: [2, 72],
          6: [2, 72],
          11: [2, 72],
          12: [2, 72],
          13: [2, 72],
          14: [2, 72],
          15: [2, 72],
          19: [2, 72],
          35: [2, 72],
          36: [2, 72]
        }, {
          48: [1, 130],
          50: [1, 134],
          52: [1, 148],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153]
        }, {
          52: [1, 183],
          56: [1, 184],
          65: [1, 185],
          67: [1, 186]
        }, {
          5: [2, 83],
          6: [2, 83],
          11: [2, 83],
          12: [2, 83],
          13: [2, 83],
          14: [2, 83],
          15: [2, 83],
          19: [2, 83],
          35: [2, 83],
          36: [2, 83]
        }, {
          48: [1, 130],
          50: [1, 134],
          54: [1, 147],
          56: [1, 150],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153]
        }, {
          56: [1, 184],
          65: [1, 185],
          67: [1, 186]
        }, {
          5: [2, 94],
          6: [2, 94],
          11: [2, 94],
          12: [2, 94],
          13: [2, 94],
          14: [2, 94],
          15: [2, 94],
          19: [2, 94],
          35: [2, 94],
          36: [2, 94]
        }, {
          48: [1, 130],
          50: [1, 134],
          54: [1, 147],
          58: [1, 149],
          60: [1, 152],
          65: [1, 151],
          66: [1, 154],
          67: [1, 153]
        }, {
          65: [1, 185],
          67: [1, 186]
        }, {
          5: [2, 112],
          6: [2, 112],
          11: [2, 112],
          12: [2, 112],
          13: [2, 112],
          14: [2, 112],
          15: [2, 112],
          19: [2, 112],
          35: [2, 112],
          36: [2, 112]
        }, {
          48: [1, 130],
          50: [1, 134],
          54: [1, 147],
          58: [1, 149],
          66: [1, 154],
          67: [1, 153]
        }, {
          67: [1, 186]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 342]
        }, {
          5: [2, 68],
          6: [2, 68],
          11: [2, 68],
          12: [2, 68],
          13: [2, 68],
          14: [2, 68],
          15: [2, 68],
          19: [2, 68],
          35: [2, 68],
          36: [2, 68],
          46: [2, 68],
          49: [2, 68],
          52: [2, 68],
          56: [2, 68],
          65: [2, 68],
          67: [2, 68]
        }, {
          5: [2, 48],
          6: [2, 48],
          11: [2, 48],
          12: [2, 48],
          13: [2, 48],
          14: [2, 48],
          15: [2, 48],
          19: [2, 48],
          35: [2, 48],
          36: [2, 48]
        }, {
          5: [2, 41],
          6: [2, 41],
          11: [2, 41],
          12: [2, 41],
          13: [2, 41],
          14: [2, 41],
          15: [2, 41],
          19: [2, 41],
          35: [2, 41],
          36: [2, 41]
        }, {
          41: [1, 137],
          54: [1, 147],
          58: [1, 149]
        }, {
          41: [1, 208]
        }, {
          5: [2, 79],
          6: [2, 79],
          11: [2, 79],
          12: [2, 79],
          13: [2, 79],
          14: [2, 79],
          15: [2, 79],
          19: [2, 79],
          35: [2, 79],
          36: [2, 79],
          46: [2, 79],
          48: [2, 79],
          49: [2, 79],
          52: [2, 79],
          56: [2, 79],
          65: [2, 79],
          67: [2, 79]
        }, {
          5: [2, 57],
          6: [2, 57],
          11: [2, 57],
          12: [2, 57],
          13: [2, 57],
          14: [2, 57],
          15: [2, 57],
          19: [2, 57],
          35: [2, 57],
          36: [2, 57],
          38: [2, 57],
          40: [2, 57]
        }, {
          5: [2, 51],
          6: [2, 51],
          11: [2, 51],
          12: [2, 51],
          13: [2, 51],
          14: [2, 51],
          15: [2, 51],
          19: [2, 51],
          35: [2, 51],
          36: [2, 51]
        }, {
          5: [2, 101],
          6: [2, 101],
          11: [2, 101],
          12: [2, 101],
          13: [2, 101],
          14: [2, 101],
          15: [2, 101],
          19: [2, 101],
          35: [2, 101],
          36: [2, 101],
          38: [2, 101],
          40: [2, 101],
          41: [2, 101],
          44: [2, 101],
          46: [2, 101],
          48: [2, 101],
          49: [2, 101],
          50: [2, 101],
          52: [2, 101],
          54: [2, 101],
          56: [2, 101],
          65: [2, 101],
          67: [2, 101]
        }, {
          5: [2, 90],
          6: [2, 90],
          11: [2, 90],
          12: [2, 90],
          13: [2, 90],
          14: [2, 90],
          15: [2, 90],
          19: [2, 90],
          35: [2, 90],
          36: [2, 90],
          38: [2, 90],
          40: [2, 90],
          41: [2, 90],
          44: [2, 90],
          46: [2, 90],
          48: [2, 90],
          49: [2, 90],
          50: [2, 90],
          52: [2, 90],
          56: [2, 90],
          65: [2, 90],
          67: [2, 90]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 343]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 344]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 345]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 346]
        }, {
          87: 335,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58]
        }, {
          11: [1, 106],
          12: [1, 107],
          13: [1, 108],
          14: [1, 109],
          15: [1, 110],
          19: [1, 347]
        }, {
          5: [2, 235],
          6: [2, 235],
          11: [2, 235],
          12: [2, 235],
          13: [2, 235],
          14: [2, 235],
          15: [2, 235],
          19: [2, 235]
        }, {
          6: [2, 227],
          19: [2, 227]
        }, {
          6: [2, 228],
          19: [2, 228]
        }, {
          6: [2, 229],
          19: [2, 229]
        }, {
          6: [2, 230],
          19: [2, 230]
        }, {
          5: [2, 16],
          6: [2, 16],
          11: [2, 16],
          12: [2, 16],
          13: [2, 16],
          14: [2, 16],
          15: [2, 16],
          19: [2, 16]
        }, {
          6: [2, 226],
          19: [2, 226]
        }, {
          5: [2, 28],
          6: [2, 28],
          11: [2, 28],
          12: [2, 28],
          13: [2, 28],
          14: [2, 28],
          15: [2, 28],
          19: [2, 28],
          126: [2, 28],
          127: [2, 28]
        }, {
          5: [2, 15],
          6: [2, 15],
          11: [2, 15],
          12: [2, 15],
          13: [2, 15],
          14: [2, 15],
          15: [2, 15],
          19: [2, 15]
        }, {
          5: [2, 238],
          6: [2, 238],
          11: [2, 238],
          12: [2, 238],
          13: [2, 238],
          14: [2, 238],
          15: [2, 238],
          19: [2, 238],
          87: 335,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58]
        }, {
          5: [2, 241],
          6: [2, 241],
          11: [2, 241],
          12: [2, 241],
          13: [2, 241],
          14: [2, 241],
          15: [2, 241],
          19: [2, 241],
          87: 335,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58]
        }, {
          5: [2, 243],
          6: [2, 243],
          11: [2, 243],
          12: [2, 243],
          13: [2, 243],
          14: [2, 243],
          15: [2, 243],
          19: [2, 243]
        }, {
          11: [2, 15],
          12: [2, 15],
          13: [2, 15],
          14: [2, 15],
          15: [2, 15],
          19: [2, 15],
          87: 335,
          88: [1, 28],
          89: [1, 29],
          90: [1, 30],
          91: [1, 31],
          92: [1, 32],
          93: [1, 33],
          94: [1, 34],
          95: [1, 35],
          96: [1, 36],
          97: [1, 37],
          98: [1, 38],
          99: [1, 39],
          100: [1, 40],
          101: [1, 41],
          102: [1, 42],
          103: [1, 43],
          104: [1, 44],
          105: [1, 45],
          106: [1, 46],
          107: [1, 47],
          108: [1, 48],
          109: [1, 49],
          110: [1, 50],
          111: [1, 51],
          112: [1, 52],
          113: [1, 53],
          114: [1, 54],
          115: [1, 55],
          116: [1, 56],
          117: [1, 57],
          118: [1, 58]
        }],
        defaultActions: {
          105: [2, 2],
          112: [2, 4],
          119: [2, 6],
          120: [2, 7],
          254: [2, 1],
          263: [2, 3],
          264: [2, 5],
          277: [2, 8]
        },
        parseError: function (e, t) {
          if (!t.recoverable) throw new Error(e);
          this.trace(e)
        },
        parse: function (e) {
          var t = this,
            r = [0],
            s = [null],
            i = [],
            n = this.table,
            a = "",
            h = 0,
            o = 0,
            c = 0,
            l = 1,
            u = i.slice.call(arguments, 1);
          this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.nParser = this, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
          var f = this.lexer.yylloc;
          i.push(f);
          var p = this.lexer.options && this.lexer.options.ranges;
          "function" == typeof this.yy.parseError ? this.parseError = this.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var g, b, m, d, y, k, x, w, N, v = {};;) {
            if (m = r[r.length - 1], this.defaultActions[m] ? d = this.defaultActions[m] : (null !== g && void 0 !== g || (g = function () {
                var e;
                return "number" != typeof (e = t.lexer.lex() || l) && (e = t.symbols_[e] || e), e
              }()), d = n[m] && n[m][g]), void 0 === d || !d.length || !d[0]) {
              var $ = "";
              N = [];
              for (k in n[m]) this.terminals_[k] && k > 2 && N.push("'" + this.terminals_[k] + "'");
              $ = this.lexer.showPosition ? "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + N.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (g == l ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError($, {
                text: this.lexer.match,
                token: this.terminals_[g] || g,
                line: this.lexer.yylineno,
                loc: f,
                expected: N
              })
            }
            if (d[0] instanceof Array && d.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + g);
            switch (d[0]) {
              case 1:
                r.push(g), s.push(this.lexer.yytext), i.push(this.lexer.yylloc), r.push(d[1]), g = null, b ? (g = b, b = null) : (o = this.lexer.yyleng, a = this.lexer.yytext, h = this.lexer.yylineno, f = this.lexer.yylloc, c > 0 && c--);
                break;
              case 2:
                if (x = this.productions_[d[1]][1], v.$ = s[s.length - x], v._$ = {
                    first_line: i[i.length - (x || 1)].first_line,
                    last_line: i[i.length - 1].last_line,
                    first_column: i[i.length - (x || 1)].first_column,
                    last_column: i[i.length - 1].last_column
                  }, p && (v._$.range = [i[i.length - (x || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (y = this.performAction.apply(v, [a, o, h, this.yy, d[1], s, i].concat(u)))) return y;
                x && (r = r.slice(0, -1 * x * 2), s = s.slice(0, -1 * x), i = i.slice(0, -1 * x)), r.push(this.productions_[d[1]][0]), s.push(v.$), i.push(v._$), w = n[r[r.length - 2]][r[r.length - 1]], r.push(w);
                break;
              case 3:
                return !0
            }
          }
          return !0
        }
      },
      r = {
        EOF: 1,
        parseError: function (e, t) {
          if (!this.yy.nParser) throw new Error(e);
          this.yy.nParser.parseError(e, t)
        },
        setInput: function (e) {
          return this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
        },
        input: function () {
          var e = this._input[0];
          return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
        },
        unput: function (e) {
          var t = e.length,
            r = e.split(/(?:\r\n?|\n)/g);
          this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
          var s = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
          var i = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: r ? (r.length === s.length ? this.yylloc.first_column : 0) + s[s.length - r.length].length - r[0].length : this.yylloc.first_column - t
          }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this
        },
        more: function () {
          return this._more = !0, this
        },
        reject: function () {
          return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          })
        },
        less: function (e) {
          this.unput(this.match.slice(e))
        },
        pastInput: function () {
          var e = this.matched.substr(0, this.matched.length - this.match.length);
          return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
        },
        upcomingInput: function () {
          var e = this.match;
          return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
        },
        showPosition: function () {
          var e = this.pastInput(),
            t = new Array(e.length + 1).join("-");
          return e + this.upcomingInput() + "\n" + t + "^"
        },
        test_match: function (e, t) {
          var r, s, i;
          if (this.options.backtrack_lexer && (i = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), (s = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += s.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
            }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], r = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
          if (this._backtrack) {
            for (var n in i) this[n] = i[n];
            return !1
          }
          return !1
        },
        next: function () {
          if (this.done) return this.EOF;
          this._input || (this.done = !0);
          var e, t, r, s;
          this._more || (this.yytext = "", this.match = "");
          for (var i = this._currentRules(), n = 0; n < i.length; n++)
            if ((r = this._input.match(this.rules[i[n]])) && (!t || r[0].length > t[0].length)) {
              if (t = r, s = n, this.options.backtrack_lexer) {
                if (!1 !== (e = this.test_match(r, i[n]))) return e;
                if (this._backtrack) {
                  t = !1;
                  continue
                }
                return !1
              }
              if (!this.options.flex) break
            }
          return t ? !1 !== (e = this.test_match(t, i[s])) && e : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          })
        },
        lex: function () {
          var e = this.next();
          return e || this.lex()
        },
        begin: function (e) {
          this.conditionStack.push(e)
        },
        popState: function () {
          return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
        },
        _currentRules: function () {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
        },
        topState: function (e) {
          return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL"
        },
        pushState: function (e) {
          this.begin(e)
        },
        stateStackSize: function () {
          return this.conditionStack.length
        },
        options: {
          flex: !0,
          "case-insensitive": !0
        },
        performAction: function (e, t, r, s) {
          switch (r) {
            case 0:
              break;
            case 1:
              return 28;
            case 2:
              return 29;
            case 3:
              return 20;
            case 4:
              return 16;
            case 5:
              return 63;
            case 6:
            case 7:
              return 77;
            case 8:
              return 66;
            case 9:
              return 61;
            case 10:
              return 62;
            case 11:
              return 67;
            case 12:
              return 65;
            case 13:
              return 60;
            case 14:
              return 56;
            case 15:
              return 58;
            case 16:
              return 54;
            case 17:
              return 50;
            case 18:
              return 48;
            case 19:
              return 41;
            case 20:
              return 44;
            case 21:
              return 38;
            case 22:
              return 40;
            case 23:
              return 82;
            case 24:
              return 83;
            case 25:
              return 80;
            case 26:
              return 81;
            case 27:
              return 78;
            case 28:
              return 79;
            case 29:
              return 84;
            case 30:
              return 85;
            case 31:
              return 86;
            case 32:
              return 88;
            case 33:
              return 91;
            case 34:
              return 92;
            case 35:
              return 93;
            case 36:
              return 94;
            case 37:
              return 95;
            case 38:
              return 96;
            case 39:
              return 97;
            case 40:
              return 98;
            case 41:
              return 99;
            case 42:
              return 100;
            case 43:
              return 101;
            case 44:
              return 102;
            case 45:
              return 89;
            case 46:
              return 104;
            case 47:
              return 103;
            case 48:
              return 105;
            case 49:
              return 106;
            case 50:
              return 107;
            case 51:
              return 108;
            case 52:
              return 90;
            case 53:
              return 111;
            case 54:
              return 110;
            case 55:
              return 109;
            case 56:
              return 112;
            case 57:
              return 113;
            case 58:
              return 114;
            case 59:
              return 115;
            case 60:
              return 116;
            case 61:
              return 117;
            case 62:
              return 122;
            case 63:
              return 123;
            case 64:
              return 118;
            case 65:
              return 120;
            case 66:
              return 121;
            case 67:
              return 127;
            case 68:
              return 126;
            case 69:
              return 124;
            case 70:
              return 125;
            case 71:
              return 35;
            case 72:
              return 14;
            case 73:
              return 13;
            case 74:
              return 12;
            case 75:
              return 11;
            case 76:
              return 15;
            case 77:
              return 17;
            case 78:
              return 18;
            case 79:
              return 19;
            case 80:
              return 12;
            case 81:
              return 36;
            case 82:
              return 5;
            case 83:
              return 25;
            case 84:
              return 24;
            case 85:
              return 27;
            case 86:
              return 26;
            case 87:
              return 6;
            case 88:
              return "INVALID";
            case 89:
              console.log(t.yytext)
          }
        },
        rules: [/^(?:\s+)/i, /^(?:[1-9][0-9]{0,1}(,[0-9]{2})*(,[0-9]{3}))/i, /^(?:[1-9][0-9]{0,2}(,[0-9]{3})*(,[0-9]{3}))/i, /^(?:[1-9][0-9]*(\s)[0-9]+(\s)?(\/|\\)(\s)?[0-9]+)/i, /^(?:([0-9]+(\.[0-9]+)?)|(\.[0-9]+))/i, /^(?:(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(\s)*(-)(\s)*(one|ones|two|three|four|five|six|seven|eight|nine))/i, /^(?:(zero|one|two|three|four|five|six|seven|eight|nine|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|ten|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(\s)*(-)(\s)*(halves|thirds|fourths|fifths|sixths|sevenths|eighths|ninths|half|third|fourth|fifth|sixth|seventh|eighth|ninth|elevenths|twelfths|thirteenths|fourteenths|fifteenths|sixteenths|seventeenths|eighteenths|nineteenths|eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|tenths|twentieths|thirtieths|fortieths|fiftieths|sixtieths|seventieths|eightieths|ninetieths|tenth|twentieth|thirtieth|fortieth|fiftieth|sixtieth|seventieth|eightieth|ninetieth|quarters|quarter|hundredths|hundredth|thousandths|thousandth))/i, /^(?:(zero|one|two|three|four|five|six|seven|eight|nine|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|ten|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)(\s)*(-)(\s)*(halves|thirds|fourths|fifths|sixths|sevenths|eighths|ninths|half|third|fourth|fifth|sixth|seventh|eighth|ninth|elevenths|twelfths|thirteenths|fourteenths|fifteenths|sixteenths|seventeenths|eighteenths|nineteenths|eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth|tenths|twentieths|thirtieths|fortieths|fiftieths|sixtieths|seventieths|eightieths|ninetieths|tenth|twentieth|thirtieth|fortieth|fiftieth|sixtieth|seventieth|eightieth|ninetieth|quarters|quarter|hundredths|hundredth|thousandths|thousandth))/i, /^(?:(zero|one|two|three|four|five|six|seven|eight|nine))/i, /^(?:(eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen))/i, /^(?:(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety))/i, /^(?:(ones))/i, /^(?:(tens))/i, /^(?:(ten))/i, /^(?:(hundreds))/i, /^(?:(hundred))/i, /^(?:(thousands|thousand))/i, /^(?:(lakhs|lakh))/i, /^(?:(crores|crore))/i, /^(?:(millions))/i, /^(?:(million))/i, /^(?:(billions))/i, /^(?:(billion))/i, /^(?:(first|half|third|fourth|fifth|sixth|seventh|eighth|ninth))/i, /^(?:(firsts|halves|thirds|fourths|fifths|sixths|sevenths|eighths|ninths))/i, /^(?:(eleventh|twelfth|thirteenth|fourteenth|fifteenth|sixteenth|seventeenth|eighteenth|nineteenth))/i, /^(?:(elevenths|twelfths|thirteenths|fourteenths|fifteenths|sixteenths|seventeenths|eighteenths|nineteenths))/i, /^(?:(tenth|twentieth|thirtieth|fortieth|fiftieth|sixtieth|seventieth|eightieth|ninetieth))/i, /^(?:(tenths|twentieths|thirtieths|fortieths|fiftieths|sixtieths|seventieths|eightieths|ninetieths))/i, /^(?:(quarters|quarter))/i, /^(?:(hundredths|hundredth))/i, /^(?:(thousandths|thousandth))/i, /^(?:(metres|metre|m))/i, /^(?:(kilometres|kilometre|km))/i, /^(?:(millimetres|millimetre|mm))/i, /^(?:(centimetres|centimetre|cm))/i, /^(?:(litres|litre|l))/i, /^(?:(kilolitres|kilolitre|kl))/i, /^(?:(millilitres|millimetre|ml))/i, /^(?:(centilitres|centilitre|cl))/i, /^(?:(miles|mile|mi))/i, /^(?:(yards|yard|yd))/i, /^(?:(feet|foot|ft))/i, /^(?:(inches|inch|in))/i, /^(?:(grams|gram|g))/i, /^(?:(kilograms|kilogram|kg))/i, /^(?:(milligrams|milligram|mg))/i, /^(?:(centigrams|centigram|cg))/i, /^(?:(micrograms|microgram|mcg|Î¼g))/i, /^(?:(pounds|pound|lb))/i, /^(?:(ounces|ounce))/i, /^(?:(tons|ton))/i, /^(?:(seconds|second|s))/i, /^(?:(milliseconds|millisecond|ms))/i, /^(?:(microseconds|microsecond|Î¼s))/i, /^(?:(nanosecondsnanosecond|ns))/i, /^(?:(minutes|minute|min))/i, /^(?:(hours|hour|hr))/i, /^(?:(days|day))/i, /^(?:(weeks|week))/i, /^(?:(months|month))/i, /^(?:(years|year))/i, /^(?:(degrees|degree|Â°))/i, /^(?:(radians|radian|rad))/i, /^(?:(kelvin|degree kelvin|K))/i, /^(?:(degree celcius|celcius|centrigrade|Â°C))/i, /^(?:(fahrenheit|Â°F))/i, /^(?:(rupees|rs\.|rs|inr\.|inr))/i, /^(?:(rupee|re\.|re))/i, /^(?:(square|sq\.|sq))/i, /^(?:(cubic|cu\.|cu))/i, /^(?:AND|&)/i, /^(?:\/|\\|UPON|BY|OVER|OUT OF|PER)/i, /^(?:\*|x|Ã—|TIMES|OF)/i, /^(?:-|MINUS)/i, /^(?:\+|PLUS)/i, /^(?:\^)/i, /^(?:!)/i, /^(?:\(|\[|\{)/i, /^(?:\)|\]|\})/i, /^(?:-)/i, /^(?:,)/i, /^(?:\.)/i, /^(?:PI)/i, /^(?:E)/i, /^(?:SQRT)/i, /^(?:%|PERCENT)/i, /^(?:$)/i, /^(?:.)/i, /^(?:.)/i],
        conditions: {
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
            inclusive: !0
          }
        }
      };
    return t.lexer = r, e.prototype = t, t.Parser = e, new e
  }();
"undefined" != typeof require && "undefined" != typeof exports && (exports.nParser = nParser, exports.Parser = nParser.Parser, exports.parse = function () {
  return nParser.parse.apply(nParser, arguments)
}, exports.main = function (e) {
  e[1] || (console.log("Usage: " + e[0] + " FILE"), process.exit(1));
  var t = require("fs").readFileSync(require("path").normalize(e[1]), "utf8");
  return exports.nParser.parse(t)
}, "undefined" != typeof module && require.main === module && exports.main(process.argv.slice(1)));
var MAX_ATTEMPT = 10,
  varValues = Array(),
  ano = 1,
  parser = function () {
    function e() {
      this.yy = {}
    }
    var t = {
        trace: function () {},
        yy: {},
        inputValues: function (e, t) {
          if (varValues = e.split("|"), (ano = t) > MAX_ATTEMPT) throw new Error("Attempt number has reached its limit")
        },
        symbols_: {
          error: 2,
          expressions: 3,
          conditions: 4,
          EOF: 5,
          AND: 6,
          OR: 7,
          "(": 8,
          ")": 9,
          condition: 10,
          NUMBER: 11,
          var: 12,
          "=": 13,
          VAL: 14,
          "!=": 15,
          ">": 16,
          "<": 17,
          attemptno: 18,
          CONTAINS: 19,
          NOT_CONTAINS: 20,
          len: 21,
          range: 22,
          round: 23,
          paren: 24,
          BLANK: 25,
          ATTEMPTNO: 26,
          LENGTH: 27,
          RANGE: 28,
          ",": 29,
          ROUND: 30,
          PARENCHECK: 31,
          $accept: 0,
          $end: 1
        },
        terminals_: {
          2: "error",
          5: "EOF",
          6: "AND",
          7: "OR",
          8: "(",
          9: ")",
          11: "NUMBER",
          13: "=",
          14: "VAL",
          15: "!=",
          16: ">",
          17: "<",
          19: "CONTAINS",
          20: "NOT_CONTAINS",
          25: "BLANK",
          26: "ATTEMPTNO",
          27: "LENGTH",
          28: "RANGE",
          29: ",",
          30: "ROUND",
          31: "PARENCHECK"
        },
        productions_: [0, [3, 2],
          [4, 3],
          [4, 3],
          [4, 3],
          [4, 1],
          [4, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [10, 3],
          [12, 1],
          [18, 1],
          [21, 4],
          [22, 8],
          [23, 6],
          [24, 4]
        ],
        performAction: function (e, t, r, s, i, n, a) {
          var h = n.length - 1;
          switch (i) {
            case 1:
              return n[h - 1];
            case 2:
              this.$ = n[h - 2] && n[h];
              break;
            case 3:
              this.$ = n[h - 2] || n[h];
              break;
            case 4:
              this.$ = n[h - 1];
              break;
            case 5:
              this.$ = n[h];
              break;
            case 6:
              1 == (g = Number(n[h - 1])) ? this.$ = 1 : 0 == g && (this.$ = 0);
              break;
            case 7:
              var o = n[h - 2],
                c = (l = n[h]).slice(1, l.length - 1);
              this.$ = o.toUpperCase() == c.toUpperCase() ? 1 : 0;
              break;
            case 8:
              var o = n[h - 2],
                c = (l = n[h]).slice(1, l.length - 1);
              this.$ = o.toUpperCase() == c.toUpperCase() ? 0 : 1;
              break;
            case 9:
              this.$ = Number(n[h - 2]) == Number(n[h]) ? 1 : 0;
              break;
            case 10:
              this.$ = Number(n[h - 2]) == Number(n[h]) ? 0 : 1;
              break;
            case 11:
              this.$ = Number(n[h - 2]) > Number(n[h]) ? 1 : 0;
              break;
            case 12:
              this.$ = Number(n[h - 2]) < Number(n[h]) ? 1 : 0;
              break;
            case 13:
              if (this.$ = n[h - 2] == Number(n[h]) ? 1 : 0, Number(n[h]) > MAX_ATTEMPT || Number(n[h]) < 0 || Number(n[h]) % 1 != 0) throw new Error("attemptNo should be a whole number between 1 and " + MAX_ATTEMPT + ".");
              break;
            case 14:
              if (this.$ = n[h - 2] == Number(n[h]) ? 0 : 1, Number(n[h]) > MAX_ATTEMPT || Number(n[h]) < 0 || Number(n[h]) % 1 != 0) throw new Error("This condition will always be true! Note that attemptNo can only be a whole number between 1 and " + MAX_ATTEMPT + ".");
              break;
            case 15:
              if (this.$ = Number(n[h - 2]) > Number(n[h]) ? 1 : 0, Number(n[h]) > MAX_ATTEMPT) throw new Error("'attemptNo > " + Number(n[h]) + "' will never be true as " + MAX_ATTEMPT + " is the maximum number of attempts possible.");
              break;
            case 16:
              if (this.$ = Number(n[h - 2]) < Number(n[h]) ? 1 : 0, Number(n[h]) <= 1) throw new Error("'attemptNo < " + Number(n[h]) + "' will never be true as is the minimum number of attempts is 1.");
              break;
            case 17:
              l = n[h - 2];
              c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (u = n[h]).slice(1, u.length - 1)).replace(/\\/, "\\\\")).replace(/\[/, "\\[")).replace(/\]/, "\\]")).replace(/\(/, "\\(")).replace(/\)/, "\\)")).replace(/\{/, "\\{")).replace(/\}/, "\\}")).replace(/\./, "\\.")).replace(/\+/, "\\+")).replace(/\-/, "\\-")).replace(/\*/, "\\*")).replace(/\?/, "\\?")).replace(/\^/, "\\^")).replace(/\|/, "\\|")).replace(/\$/, "\\$");
              f = l.toUpperCase().search(c.toUpperCase());
              this.$ = -1 == f ? 0 : 1;
              break;
            case 18:
              var l = n[h - 2],
                u = n[h];
              c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = (c = u.slice(1, u.length - 1)).replace(/\\/, "\\\\")).replace(/\[/, "\\[")).replace(/\]/, "\\]")).replace(/\(/, "\\(")).replace(/\)/, "\\)")).replace(/\{/, "\\{")).replace(/\}/, "\\}")).replace(/\./, "\\.")).replace(/\+/, "\\+")).replace(/\-/, "\\-")).replace(/\*/, "\\*")).replace(/\?/, "\\?")).replace(/\^/, "\\^")).replace(/\|/, "\\|")).replace(/\$/, "\\$");
              var f = l.toUpperCase().search(c.toUpperCase());
              this.$ = -1 == f ? 1 : 0;
              break;
            case 19:
              this.$ = n[h - 2] == Number(n[h]) ? 1 : 0;
              break;
            case 20:
              this.$ = n[h - 2] == Number(n[h]) ? 0 : 1;
              break;
            case 21:
              this.$ = n[h - 2] > Number(n[h]) ? 1 : 0;
              break;
            case 22:
              this.$ = n[h - 2] < Number(n[h]) ? 1 : 0;
              break;
            case 23:
              if (this.$ = n[h - 2] == Number(n[h]) ? 1 : 0, 0 != Number(n[h]) && 1 != Number(n[h])) throw new Error("range() will return only 0 or 1.");
              break;
            case 24:
              if (this.$ = n[h - 2] == Number(n[h]) ? 0 : 1, 0 != Number(n[h]) && 1 != Number(n[h])) throw new Error("range() will return only 0 or 1.");
              break;
            case 25:
              this.$ = n[h - 2] == Number(n[h]) ? 1 : 0;
              break;
            case 26:
              this.$ = n[h - 2] == Number(n[h]) ? 0 : 1;
              break;
            case 27:
              if (this.$ = n[h - 2] == Number(n[h]) ? 1 : 0, 0 != Number(n[h]) && 1 != Number(n[h])) throw new Error("parenCheck() will return only 0 or 1.");
              break;
            case 28:
              if (this.$ = n[h - 2] == Number(n[h]) ? 0 : 1, 0 != Number(n[h]) && 1 != Number(n[h])) throw new Error("parenCheck() will return only 0 or 1.");
              break;
            case 29:
              var l = n[h],
                p = Number(l.charAt(l.length - 1)) - 1;
              if (void 0 === varValues[p]) throw new Error("Blank number " + (p + 1) + " does not exist in the question!");
              this.$ = varValues[p];
              break;
            case 30:
              this.$ = ano;
              break;
            case 31:
              l = n[h - 1];
              this.$ = Number(l.length);
              break;
            case 32:
              var g = Number(n[h - 5]),
                b = Number(n[h - 3]),
                m = Number(n[h - 1]);
              this.$ = g <= b + m && g >= b - m ? 1 : 0;
              break;
            case 33:
              var l = Number(n[h - 3]),
                d = Math.pow(10, Number(n[h - 1]));
              if (Number(n[h - 1]) % 1 != 0) throw new Error("Invalid 2nd argument in the function round()! Enter a whole number.");
              this.$ = Math.round(Number(l) * d) / d;
              break;
            case 34:
              for (var l = n[h - 1], y = 0, k = 0; k < l.length && ("(" == l[k] ? y++ : ")" == l[k] && y--, !(y < 0)); k++);
              this.$ = 0 == y ? 1 : 0
          }
        },
        table: [{
          3: 1,
          4: 2,
          8: [1, 3],
          10: 4,
          12: 5,
          18: 6,
          21: 7,
          22: 8,
          23: 9,
          24: 10,
          25: [1, 11],
          26: [1, 12],
          27: [1, 13],
          28: [1, 14],
          30: [1, 15],
          31: [1, 16]
        }, {
          1: [3]
        }, {
          5: [1, 17],
          6: [1, 18],
          7: [1, 19]
        }, {
          4: 20,
          8: [1, 3],
          10: 4,
          11: [1, 21],
          12: 5,
          18: 6,
          21: 7,
          22: 8,
          23: 9,
          24: 10,
          25: [1, 11],
          26: [1, 12],
          27: [1, 13],
          28: [1, 14],
          30: [1, 15],
          31: [1, 16]
        }, {
          5: [2, 5],
          6: [2, 5],
          7: [2, 5],
          9: [2, 5]
        }, {
          13: [1, 22],
          15: [1, 23],
          16: [1, 24],
          17: [1, 25],
          19: [1, 26],
          20: [1, 27]
        }, {
          13: [1, 28],
          15: [1, 29],
          16: [1, 30],
          17: [1, 31]
        }, {
          13: [1, 32],
          15: [1, 33],
          16: [1, 34],
          17: [1, 35]
        }, {
          13: [1, 36],
          15: [1, 37]
        }, {
          13: [1, 38],
          15: [1, 39]
        }, {
          13: [1, 40],
          15: [1, 41]
        }, {
          9: [2, 29],
          13: [2, 29],
          15: [2, 29],
          16: [2, 29],
          17: [2, 29],
          19: [2, 29],
          20: [2, 29],
          29: [2, 29]
        }, {
          13: [2, 30],
          15: [2, 30],
          16: [2, 30],
          17: [2, 30]
        }, {
          8: [1, 42]
        }, {
          8: [1, 43]
        }, {
          8: [1, 44]
        }, {
          8: [1, 45]
        }, {
          1: [2, 1]
        }, {
          4: 46,
          8: [1, 3],
          10: 4,
          12: 5,
          18: 6,
          21: 7,
          22: 8,
          23: 9,
          24: 10,
          25: [1, 11],
          26: [1, 12],
          27: [1, 13],
          28: [1, 14],
          30: [1, 15],
          31: [1, 16]
        }, {
          4: 47,
          8: [1, 3],
          10: 4,
          12: 5,
          18: 6,
          21: 7,
          22: 8,
          23: 9,
          24: 10,
          25: [1, 11],
          26: [1, 12],
          27: [1, 13],
          28: [1, 14],
          30: [1, 15],
          31: [1, 16]
        }, {
          6: [1, 18],
          7: [1, 19],
          9: [1, 48]
        }, {
          9: [1, 49]
        }, {
          11: [1, 51],
          14: [1, 50]
        }, {
          11: [1, 53],
          14: [1, 52]
        }, {
          11: [1, 54]
        }, {
          11: [1, 55]
        }, {
          14: [1, 56]
        }, {
          14: [1, 57]
        }, {
          11: [1, 58]
        }, {
          11: [1, 59]
        }, {
          11: [1, 60]
        }, {
          11: [1, 61]
        }, {
          11: [1, 62]
        }, {
          11: [1, 63]
        }, {
          11: [1, 64]
        }, {
          11: [1, 65]
        }, {
          11: [1, 66]
        }, {
          11: [1, 67]
        }, {
          11: [1, 68]
        }, {
          11: [1, 69]
        }, {
          11: [1, 70]
        }, {
          11: [1, 71]
        }, {
          12: 72,
          25: [1, 11]
        }, {
          12: 73,
          25: [1, 11]
        }, {
          12: 74,
          25: [1, 11]
        }, {
          12: 75,
          25: [1, 11]
        }, {
          5: [2, 2],
          6: [2, 2],
          7: [2, 2],
          9: [2, 2]
        }, {
          5: [2, 3],
          6: [2, 3],
          7: [2, 3],
          9: [2, 3]
        }, {
          5: [2, 4],
          6: [2, 4],
          7: [2, 4],
          9: [2, 4]
        }, {
          5: [2, 6],
          6: [2, 6],
          7: [2, 6],
          9: [2, 6]
        }, {
          5: [2, 7],
          6: [2, 7],
          7: [2, 7],
          9: [2, 7]
        }, {
          5: [2, 9],
          6: [2, 9],
          7: [2, 9],
          9: [2, 9]
        }, {
          5: [2, 8],
          6: [2, 8],
          7: [2, 8],
          9: [2, 8]
        }, {
          5: [2, 10],
          6: [2, 10],
          7: [2, 10],
          9: [2, 10]
        }, {
          5: [2, 11],
          6: [2, 11],
          7: [2, 11],
          9: [2, 11]
        }, {
          5: [2, 12],
          6: [2, 12],
          7: [2, 12],
          9: [2, 12]
        }, {
          5: [2, 17],
          6: [2, 17],
          7: [2, 17],
          9: [2, 17]
        }, {
          5: [2, 18],
          6: [2, 18],
          7: [2, 18],
          9: [2, 18]
        }, {
          5: [2, 13],
          6: [2, 13],
          7: [2, 13],
          9: [2, 13]
        }, {
          5: [2, 14],
          6: [2, 14],
          7: [2, 14],
          9: [2, 14]
        }, {
          5: [2, 15],
          6: [2, 15],
          7: [2, 15],
          9: [2, 15]
        }, {
          5: [2, 16],
          6: [2, 16],
          7: [2, 16],
          9: [2, 16]
        }, {
          5: [2, 19],
          6: [2, 19],
          7: [2, 19],
          9: [2, 19]
        }, {
          5: [2, 20],
          6: [2, 20],
          7: [2, 20],
          9: [2, 20]
        }, {
          5: [2, 21],
          6: [2, 21],
          7: [2, 21],
          9: [2, 21]
        }, {
          5: [2, 22],
          6: [2, 22],
          7: [2, 22],
          9: [2, 22]
        }, {
          5: [2, 23],
          6: [2, 23],
          7: [2, 23],
          9: [2, 23]
        }, {
          5: [2, 24],
          6: [2, 24],
          7: [2, 24],
          9: [2, 24]
        }, {
          5: [2, 25],
          6: [2, 25],
          7: [2, 25],
          9: [2, 25]
        }, {
          5: [2, 26],
          6: [2, 26],
          7: [2, 26],
          9: [2, 26]
        }, {
          5: [2, 27],
          6: [2, 27],
          7: [2, 27],
          9: [2, 27]
        }, {
          5: [2, 28],
          6: [2, 28],
          7: [2, 28],
          9: [2, 28]
        }, {
          9: [1, 76]
        }, {
          29: [1, 77]
        }, {
          29: [1, 78]
        }, {
          9: [1, 79]
        }, {
          13: [2, 31],
          15: [2, 31],
          16: [2, 31],
          17: [2, 31]
        }, {
          11: [1, 80]
        }, {
          11: [1, 81]
        }, {
          13: [2, 34],
          15: [2, 34]
        }, {
          29: [1, 82]
        }, {
          9: [1, 83]
        }, {
          11: [1, 84]
        }, {
          13: [2, 33],
          15: [2, 33]
        }, {
          9: [1, 85]
        }, {
          13: [2, 32],
          15: [2, 32]
        }],
        defaultActions: {
          17: [2, 1]
        },
        parseError: function (e, t) {
          if (!t.recoverable) throw new Error(e);
          this.trace(e)
        },
        parse: function (e) {
          var t = this,
            r = [0],
            s = [null],
            i = [],
            n = this.table,
            a = "",
            h = 0,
            o = 0,
            c = 0,
            l = 1,
            u = i.slice.call(arguments, 1);
          this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
          var f = this.lexer.yylloc;
          i.push(f);
          var p = this.lexer.options && this.lexer.options.ranges;
          "function" == typeof this.yy.parseError ? this.parseError = this.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
          for (var g, b, m, d, y, k, x, w, N, v = {};;) {
            if (m = r[r.length - 1], this.defaultActions[m] ? d = this.defaultActions[m] : (null !== g && void 0 !== g || (g = function () {
                var e;
                return "number" != typeof (e = t.lexer.lex() || l) && (e = t.symbols_[e] || e), e
              }()), d = n[m] && n[m][g]), void 0 === d || !d.length || !d[0]) {
              var $ = "";
              N = [];
              for (k in n[m]) this.terminals_[k] && k > 2 && N.push("'" + this.terminals_[k] + "'");
              $ = this.lexer.showPosition ? "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + N.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (g == l ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError($, {
                text: this.lexer.match,
                token: this.terminals_[g] || g,
                line: this.lexer.yylineno,
                loc: f,
                expected: N
              })
            }
            if (d[0] instanceof Array && d.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + g);
            switch (d[0]) {
              case 1:
                r.push(g), s.push(this.lexer.yytext), i.push(this.lexer.yylloc), r.push(d[1]), g = null, b ? (g = b, b = null) : (o = this.lexer.yyleng, a = this.lexer.yytext, h = this.lexer.yylineno, f = this.lexer.yylloc, c > 0 && c--);
                break;
              case 2:
                if (x = this.productions_[d[1]][1], v.$ = s[s.length - x], v._$ = {
                    first_line: i[i.length - (x || 1)].first_line,
                    last_line: i[i.length - 1].last_line,
                    first_column: i[i.length - (x || 1)].first_column,
                    last_column: i[i.length - 1].last_column
                  }, p && (v._$.range = [i[i.length - (x || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (y = this.performAction.apply(v, [a, o, h, this.yy, d[1], s, i].concat(u)))) return y;
                x && (r = r.slice(0, -1 * x * 2), s = s.slice(0, -1 * x), i = i.slice(0, -1 * x)), r.push(this.productions_[d[1]][0]), s.push(v.$), i.push(v._$), w = n[r[r.length - 2]][r[r.length - 1]], r.push(w);
                break;
              case 3:
                return !0
            }
          }
          return !0
        }
      },
      r = {
        EOF: 1,
        parseError: function (e, t) {
          if (!this.yy.parser) throw new Error(e);
          this.yy.parser.parseError(e, t)
        },
        setInput: function (e) {
          return this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
          }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
        },
        input: function () {
          var e = this._input[0];
          return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
        },
        unput: function (e) {
          var t = e.length,
            r = e.split(/(?:\r\n?|\n)/g);
          this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
          var s = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
          var i = this.yylloc.range;
          return this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: r ? (r.length === s.length ? this.yylloc.first_column : 0) + s[s.length - r.length].length - r[0].length : this.yylloc.first_column - t
          }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this.yyleng = this.yytext.length, this
        },
        more: function () {
          return this._more = !0, this
        },
        reject: function () {
          return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          })
        },
        less: function (e) {
          this.unput(this.match.slice(e))
        },
        pastInput: function () {
          var e = this.matched.substr(0, this.matched.length - this.match.length);
          return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
        },
        upcomingInput: function () {
          var e = this.match;
          return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
        },
        showPosition: function () {
          var e = this.pastInput(),
            t = new Array(e.length + 1).join("-");
          return e + this.upcomingInput() + "\n" + t + "^"
        },
        test_match: function (e, t) {
          var r, s, i;
          if (this.options.backtrack_lexer && (i = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done
            }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), (s = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += s.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
            }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], r = this.performAction.call(this, this.yy, this, t, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
          if (this._backtrack) {
            for (var n in i) this[n] = i[n];
            return !1
          }
          return !1
        },
        next: function () {
          if (this.done) return this.EOF;
          this._input || (this.done = !0);
          var e, t, r, s;
          this._more || (this.yytext = "", this.match = "");
          for (var i = this._currentRules(), n = 0; n < i.length; n++)
            if ((r = this._input.match(this.rules[i[n]])) && (!t || r[0].length > t[0].length)) {
              if (t = r, s = n, this.options.backtrack_lexer) {
                if (!1 !== (e = this.test_match(r, i[n]))) return e;
                if (this._backtrack) {
                  t = !1;
                  continue
                }
                return !1
              }
              if (!this.options.flex) break
            }
          return t ? !1 !== (e = this.test_match(t, i[s])) && e : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          })
        },
        lex: function () {
          var e = this.next();
          return e || this.lex()
        },
        begin: function (e) {
          this.conditionStack.push(e)
        },
        popState: function () {
          return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0]
        },
        _currentRules: function () {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
        },
        topState: function (e) {
          return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL"
        },
        pushState: function (e) {
          this.begin(e)
        },
        stateStackSize: function () {
          return this.conditionStack.length
        },
        options: {
          flex: !0,
          "case-insensitive": !0
        },
        performAction: function (e, t, r, s) {
          switch (r) {
            case 0:
              break;
            case 1:
              return 25;
            case 2:
              return 26;
            case 3:
              return 11;
            case 4:
              return 14;
            case 5:
              return 13;
            case 6:
              return 15;
            case 7:
              return 16;
            case 8:
              return 17;
            case 9:
              return 8;
            case 10:
              return 9;
            case 11:
              return 29;
            case 12:
              return 19;
            case 13:
              return 20;
            case 14:
              return 6;
            case 15:
              return 7;
            case 16:
              return 27;
            case 17:
              return 28;
            case 18:
              return 30;
            case 19:
              return 31;
            case 20:
              return 5;
            case 21:
              return "INVALID";
            case 22:
              console.log(t.yytext)
          }
        },
        rules: [/^(?:\s+)/i, /^(?:blank[1-6])/i, /^(?:attemptNo)/i, /^(?:(-)?[0-9]+(\.[0-9]+)?\b)/i, /^(?:(")[^\"]*("))/i, /^(?:=)/i, /^(?:!=)/i, /^(?:>)/i, /^(?:<)/i, /^(?:\()/i, /^(?:\))/i, /^(?:,)/i, /^(?:CONTAINS)/i, /^(?:NOT_CONTAINS)/i, /^(?:AND)/i, /^(?:OR)/i, /^(?:LENGTH)/i, /^(?:RANGE)/i, /^(?:ROUND)/i, /^(?:PARENCHECK)/i, /^(?:$)/i, /^(?:.)/i, /^(?:.)/i],
        conditions: {
          INITIAL: {
            rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
            inclusive: !0
          }
        }
      };
    return t.lexer = r, e.prototype = t, t.Parser = e, new e
  }();
"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = parser, exports.Parser = parser.Parser, exports.parse = function () {
  return parser.parse.apply(parser, arguments)
}, exports.main = function (e) {
  e[1] || (console.log("Usage: " + e[0] + " FILE"), process.exit(1));
  var t = require("fs").readFileSync(require("path").normalize(e[1]), "utf8");
  return exports.parser.parse(t)
}, "undefined" != typeof module && require.main === module && exports.main(process.argv.slice(1)));
var expressionCompare = function () {
    function getValueOfVar(e) {
      return initVars.hasOwnProperty(e) ? initVars[e] : getRandomValue()
    }

    function arrayUnique(e) {
      for (var t = e.concat(), r = 0; r < t.length; ++r)
        for (var s = r + 1; s < t.length; ++s) t[r] === t[s] && t.splice(s--, 1);
      return t
    }

    function checkEq(e, t) {
      var r = getTerms(e).display,
        s = checkForParenthesis(r = (r = (r = r.replace(",", "").replace(/([0-9])([a-z])/g, "$1*$2").replace(/\{|\[/g, "(").replace(/\}|\]/g, ")").replace(/\(\)/g, "(0)").replace(/([0-9])\(/g, "$1*(").replace(/\*+/g, "*").replace(/\~/g, "/")).replaceArray(finArr, repArr, 1)).replace(/\+\+/, "+").replace(/\+-/, "-").replace(/-\+/, "-"), t);
      if ("string" == typeof s) return [1, s];
      r = r.replace(/\B([.]?[a-z][\^]?[0-9]*)/g, "*$1");
      for (var i = /[a-z]/g, n = []; null != (match = i.exec(r));) n.indexOf(match[0]) < 0 && n.push(match[0]);
      switch (t) {
        case 1:
          vars1 = n;
          break;
        case 2:
          vars2 = n
      }
      return r
    }

    function compareValues(e, t) {
      if (e == t) return !0;
      if (Math.sgn(e) != Math.sgn(t)) return Math.abs(e - t).toPrecision() < Math.pow(10, -12);
      e = (e + "").replace(/^-/, ""), t = (t + "").replace(/^-/, "");
      var r = e.indexOf("."),
        s = t.indexOf("."),
        i = Math.max(e.length, t.length);
      return r < 0 && (e += ".0"), s < 0 && (t += ".0"), !(i < 12) && (r = e.indexOf("."), s = t.indexOf("."), da = Math.pow(10, 12 - r), db = Math.pow(10, 12 - s), Math.round(e * da) / da == Math.round(t * db) / db)
    }

    function replaceOctal(e) {
      return e.replace(/([^0-9.]+)0+([0-9]+)|^0+([0-9]+)/g, "$1$2$3")
    }

    function getClosingBracPos(e, t) {
      for (var r = 1, s = t; 0 != r && s < e.length && s + 1 != e.length;) s++, "(" == e.charAt(s) && r++, ")" == e.charAt(s) && r--;
      return s
    }

    function getStartingBracPos(e, t) {
      for (var r = -1, s = t; 0 != r && s > 0 && s - 1 != 0;) s--, "(" == e.charAt(s) && r++, ")" == e.charAt(s) && r--;
      return s
    }

    function setPow(e) {
      for (e = e.replace(/(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/g, function (e, t, r) {
          return Math.pow(t, r)
        }); e.indexOf("^") > 0;) {
        var t = e.indexOf("^"),
          r = "",
          s = "",
          i = 0;
        if (")" == e.charAt(t - 1) ? (bpos = getStartingBracPos(e, t - 1), r = e.substr(bpos, t - bpos)) : /sin|cos|tan|cot|csc|sec/.test(e.substr(t - 3, 3)) ? (r = e.substr(t - 3, 3), i = 1) : /[a-zA-Z]/.test(e.charAt(t - 1)) ? r = e.charAt(t - 1) : /(\d+(?:\.\d+)?)$/.test(e.substr(0, t)) && (r = e.substr(0, t).match(/(\d+(?:\.\d+)?)$/)[0]), "(" == e.charAt(t + 1)) bpos = getClosingBracPos(e, t + 1), s = e.substr(t + 1, bpos - t);
        else {
          var n = t + 1;
          s = /^[+-]?(\d+(?:\.\d+)?)/.test(e.substr(n)) ? e.substr(n).match(/^[+-]?(\d+(?:\.\d+)?)/)[0] : e.charAt(n)
        }
        1 == i && "(" == e.charAt(t + s.length + 1) && (bpos = getClosingBracPos(e, t + s.length + 1), trigArgs = e.substr(t + s.length + 1, bpos - t - s.length), r += trigArgs), e = e.substr(0, t - r.length) + repArr[finArr.indexOf("pow")] + "(" + r + "," + s.replace(/\s/g, "") + ")" + e.substr(t + s.length + 1)
      }
      return e
    }

    function inArray(e, t) {
      for (var r = t.length, s = 0; s < r; s++)
        if (t[s] == e) return s;
      return -1
    }

    function genRandomValues(e) {
      for (var t = [], r = 0; r < vars.length; r++) switch (e) {
        case 0:
          t.push(-Math.round(100 * Math.random() * 100) / 100);
          break;
        case 1:
          t.push(-Math.round(1 * Math.random() * 100) / 100);
          break;
        case 2:
          t.push(Math.round(1 * Math.random() * 100) / 100);
          break;
        case 3:
          t.push(Math.round(100 * (9 * Math.random() + 1)) / 100);
          break;
        case 4:
          t.push(Math.round(100 * (100 * Math.random() + 10)) / 100)
      }
      vals.push(t)
    }

    function getRandomValue() {
      var e = [];
      return e.push(-Math.round(100 * Math.random() * 100) / 100), e.push(-Math.round(1 * Math.random() * 100) / 100), e.push(Math.round(1 * Math.random() * 100) / 100), e.push(Math.round(100 * (9 * Math.random() + 1)) / 100), e.push(Math.round(100 * (100 * Math.random() + 10)) / 100), shuffle(e)
    }

    function shuffle(e) {
      for (var t, r, s = e.length; s; t = Math.floor(Math.random() * s), r = e[--s], e[s] = e[t], e[t] = r);
      return e
    }

    function checkForParenthesis(e, t) {
      if (!e.match(/\(/g) && !e.match(/\)/g)) return 1;
      if (e.match(/\(/g) && !e.match(/\)/g) || !e.match(/\(/g) && e.match(/\)/g)) return "Parentheses mismatch!";
      if (e.match(/\(/g).length != e.match(/\)/g).length) return "Parentheses not closed!";
      var r = 0;
      for (br = 0; r < e.length;) {
        if ("(" == e.charAt(r) && br++, ")" == e.charAt(r) && br--, br < 0) return "Parentheses error! Make sure you have correctly placed the parentheses.";
        r++
      }
      return 0 != br ? "Parenthesis error! Make sure you have correctly placed the parenthesis." : 1
    }

    function getTerms(e) {
      if (e.indexOf(":") > -0) return {
        display: e
      };
      for (var t = 0, r = 0, s = new Array, i = (e = (e = e.trim()).replace(/,/g, "").replace(",", "").replace(/([0-9])([a-z])/g, "$1*$2").replace(/\{|\[/g, "(").replace(/\}|\]/g, ")").replace(/\(\)/g, "(0)").replace(/([0-9])\(/g, "$1*(").replace(/\*+/g, "*").replace(/\~/g, "/")).length, n = 0, a = "", h = 0; t < i;) "+" != e.charAt(t) && "-" != e.charAt(t) || 0 != h ? (a += e.charAt(t), "(" == e.charAt(t) && h++, ")" == e.charAt(t) && h--, t++) : (t > 0 && ("*" == e.charAt(t - 1) || "/" == e.charAt(t - 1) || "~" == e.charAt(t - 1) || "^" == e.charAt(t - 1)) ? a += e.charAt(t) : (s[r] = a.trim(), r++, a = "", a = e.charAt(t)), t++);
      s[r] = a.trim();
      var o = {
        type: "expr",
        terms: [],
        display: (e.charAt(0).match(/[\+-]/) ? "" : "+") + e
      };
      t = 0;
      for (var c = ""; t < s.length;)
        if ("" == s[t]) s.splice(t, 1);
        else {
          var l = s[t],
            u = 1,
            f = "",
            p = "",
            g = /^\+|^\-/.test(l) ? 1 : 0,
            b = [];
          for (u = "-" == l.charAt(0) ? -1 : 1; g < l.length;)
            if ("(" == l.charAt(g)) {
              var m = getClosingBracPos(l, g),
                d = getTerms(l.substring(g + 1, m)),
                y = "(" + d.display + ")";
              d.outerDisplay = p + y, (N = d).sign = "-" == p ? -1 : 1, b.push(N), p = "", f = "", 0, g = m + 1
            } else if ("^" == l.charAt(g)) {
            var k = "";
            b.push("^"), g++
          } else if (l.substr(g).match(/^sin|^cos|^tan|^cot|^sec|^csc|^ang|^sqrt/)) {
            var x = l.substr(g).match(/^sin|^cos|^tan|^cot|^sec|^csc|^ang|^sqrt/)[0];
            (N = {
              type: "func",
              name: f = x = x.substr(0, x.length),
              args: "",
              power: 1,
              display: p + f
            }).sign = "-" == p ? -1 : 1, p = "", b.push(N), g += x.length
          } else if ("/" == l.charAt(g)) {
            b.push("/"), g++
          } else if ("~" == l.charAt(g)) b.push("~"), g++;
          else if ("*" == l.charAt(g)) 0, b.push("*"), g++;
          else if (l.charAt(g).match(/[\+-]/)) p = l.charAt(g), g++;
          else if (/^((?:\d*)?\d+) ((?:\d*)?\d+)\/((?:\d*)?\d+)/.test(l.substr(g))) {
            var w = (k = l.substr(g).match(/^((?:\d*)?\d+) ((?:\d*)?\d+)\/((?:\d*)?\d+)/)[0]).replace(/^((?:\d*)?\d+) ((?:\d*)?\d+)\/((?:\d*)?\d+)/, fracNumReplacer);
            (N = {
              type: "constant",
              value: p + w,
              power: 1,
              display: p + w
            }).sign = "-" == p ? -1 : 1, p = "", b.push(N), g += k.length
          } else if (/^((?:\d*\.)?\d+)/.test(l.substr(g)))(N = {
            type: "constant",
            value: p + (k = l.substr(g).match(/^((?:\d*\.)?\d+)/)[0]),
            power: 1,
            display: p + k
          }).sign = "-" == p ? -1 : 1, p = "", b.push(N), g += k.length;
          else if (l.substr(g).match(/^[A-Z]/))(N = {
            type: "variable",
            name: k = l.substr(g).match(/^[A-Z]+/)[0],
            power: 1,
            display: p + k
          }).sign = "-" == p ? -1 : 1, p = "", b.push(N), g += k.length;
          else if (l.charAt(g).match(/[a-z]/)) {
            var N = {
              type: "variable",
              name: k = l.charAt(g),
              power: 1,
              display: p + k
            };
            N.sign = "-" == p ? -1 : 1, p = "", b.push(N), g += k.length
          } else g++;
          for (; b.indexOf("^") > 0;) b[(g = b.indexOf("^")) - 1].power = b[g + 1], 1 == b[g - 1].sign && (b[g - 1].display = "(" + b[g - 1].display + ")"), b[g - 1].display += "^" + (b[g + 1].outerDisplay || b[g + 1].display), b[g - 1].outerDisplay = "(" + b[g - 1].display + ")", b.splice(g, 2);
          for (g = 0; g < b.length;) "func" == b[g].type && (b[g].args = b[g + 1], b[g].display += b[g + 1].outerDisplay, b.splice(g + 1, 1), 1 != b[g].power && (b[g].display = "pow(" + b[g].name + b[g].args.outerDisplay + "," + (b[g].power.outerDisplay || b[g].power.display) + ")"), b[g].outerDisplay = "(" + b[g].display + ")"), g++;
          for (; b.indexOf("/") > 0;) {
            var v = b[(g = b.indexOf("/")) - 1];
            b[g - 1] = null, b[g - 1] = {
              type: "frac",
              num: v,
              den: b[g + 1],
              display: (v.outerDisplay || v.display) + "/" + (b[g + 1].outerDisplay || b[g + 1].display)
            }, b[g - 1].outerDisplay = "(" + b[g - 1].display + ")", b.splice(g, 2)
          }
          for (; b.indexOf("~") > 0;) b[(g = b.indexOf("~")) - 1].display += "/" + (b[g + 1].outerDisplay || b[g + 1].display), b.splice(g, 2), b[g - 1].outerDisplay = "(" + b[g - 1].display + ")";
          for (; b.indexOf("*") > 0;) {
            g = b.indexOf("*");
            b.splice(g, 1)
          }
          tDisp = "";
          for (n = 0; n < b.length; n++) tDisp += "(" + (b[n].outerDisplay || b[n].display) + ")";
          var $ = {
            type: "term",
            factors: b,
            display: (u > 0 ? "+" : "-") + tDisp,
            sign: u
          };
          o.terms.push($), t++
        }
      for (t = 0; t < o.terms.length; t++) c += o.terms[t].outerDisplay || o.terms[t].display;
      return o.display = "(" + (e.charAt(0).match(/[\+-]/) ? "" : "+") + c + ")", o
    }
    var _expressionCompare = {},
      toRad = Math.PI / 180,
      toDeg = 180 / Math.PI,
      toAng = toRad,
      postFixN = [],
      vars1 = [],
      vars2 = [],
      vars = [],
      vals = [],
      mfunctions = /^(ang|floor|ceil|sqrt|pow|(sin|cos|tan|cot|sec|csc)h?s?)\(/,
      finArr = ["sqrt", "cosec", "sin", "cos", "tan", "cot", "sec", "csc", "cosecs", "sins", "coss", "tans", "cots", "secs", "cscs", "log", "fact", "pow", "ang"],
      repArr = ["Å¾", "Ã ", "Â§", "Â¤", "Ã ", "Ãž", "Ã†", "Ã ", "Â¢", "â€ ", "â€¡", "Ë¯", "Ë°", "Ë±", "Ë²", "Ë¹", "Ëº", "Ë»", "Ë¼"],
      message = "",
      timeID = null,
      rounding = 1e3;
    String.prototype.replaceArray = function (e, t, r) {
      var s, i = this,
        n = "\\(",
        a = "(";
      r || (n = "", a = "");
      for (var h = 0; h < e.length; h++) s = new RegExp(e[h] + n, "g"), i = i.replace(s, t[h] + a);
      return i
    }, String.prototype.getMathFns = function (e) {
      for (var t, r = this, s = 0; s < e.length; s++) t = new RegExp(e[s] + "\\(", "g"), r = s > 1 && s < 5 ? r.replace(t, "Math." + e[s] + "D|(") : r.replace(t, "Math." + e[s] + "|(");
      return (r = r.replace(/([^\|\*\+-\/\()])\(/g, "$1*(")).replace(new RegExp("\\|", "g"), "")
    }, Math.sins = function (e) {
      return Math.sinD(e) * Math.sinD(e)
    }, Math.coss = function (e) {
      return Math.cosD(e) * Math.cosD(e)
    }, Math.tans = function (e) {
      return Math.tanD(e) * Math.tanD(e)
    }, Math.cots = function (e) {
      return Math.cot(e) * Math.cot(e)
    }, Math.cscs = function (e) {
      return Math.csc(e) * Math.csc(e)
    }, Math.secs = function (e) {
      return Math.sec(e) * Math.sec(e)
    }, Math.cosecs = function (e) {
      return Math.cosec(e) * Math.cosec(e)
    }, Math.sinD = function (e) {
      return Math.sin(e * toAng)
    }, Math.cosD = function (e) {
      return Math.cos(e * toAng)
    }, Math.tanD = function (e) {
      return Math.tan(e * toAng)
    }, Math.sec = function (e) {
      return 1 / Math.cosD(e)
    }, Math.cosec = function (e) {
      return 1 / Math.sinD(e)
    }, Math.csc = function (e) {
      return 1 / Math.sinD(e)
    }, Math.cot = function (e) {
      return 1 / Math.tanD(e)
    }, Math.sgn = function (e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0
    }, Math.fact = function (e) {
      var t = Math.round(e);
      return 1 == t ? 1 : t * Math.fact(t - 1)
    }, Math.ang = function (e) {
      var t = getValueOfVar(e);
      return Array.isArray(t) ? t[0] : t
    };
    var initVars = {};
    _expressionCompare.setAng = function (e) {
      switch (e) {
        case "deg":
          toAng = toRad;
        case "rad":
          toAng = 1
      }
    }, _expressionCompare.resetVars = function () {
      initVars = {}
    }, _expressionCompare.setRounding = function (e) {
      rounding = Math.pow(10, e)
    }, _expressionCompare.setVars = function (e) {
      for (var t in e) e.hasOwnProperty(t) && (initVars[t] = e[t])
    }, _expressionCompare.compEqs = function (str1, str2, quesPage, autoR) {
      if (str1 === str2) return !0;
      var autoRounding = !1;
      1 == autoR ? autoRounding = !0 : 0 == autoR ? autoRounding = !1 : autoR || (autoRounding = !0);
      var strippedFns1 = checkEq(str1, 1);
      if ("object" == typeof strippedFns1) return message;
      var fns1 = strippedFns1.replaceArray(repArr, finArr, 1),
        strippedFns2 = checkEq(str2, 2);
      if ("object" == typeof strippedFns2) return message;
      var fns2 = strippedFns2.replaceArray(repArr, finArr, 1);
      vars = arrayUnique(vars1.concat(vars2)), vals = [];
      for (var resul = !0, i = 0; i < 5; i++) {
        genRandomValues(i);
        var exp1 = setPow(strippedFns1).replaceArray(vars, vals[vals.length - 1], 0).replace(/\+\+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/--/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*("),
          exp2 = setPow(strippedFns2).replaceArray(vars, vals[vals.length - 1], 0).replace(/\+\+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/--/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*("),
          ex1 = exp1.getMathFns(finArr),
          exV1, exV2;
        try {
          exV1 = eval(this.replaceOctal(ex1))
        } catch (e) {
          return !1
        }
        var ex2 = exp2.getMathFns(finArr);
        try {
          exV2 = eval(this.replaceOctal(ex2))
        } catch (e) {
          return !1
        }
        if (Math.round(1e3 * exV1) == Math.round(1e3 * exV2) && autoRounding);
        else {
          var cvals = compareValues(exV1, exV2);
          if (cvals || (ca_numDec = (exV1 + "").indexOf(".") < 0 ? 0 : (exV1 + "").length - (exV1 + "").indexOf(".") - 1, ua_numDec = (exV2 + "").indexOf(".") < 0 ? 0 : (exV2 + "").length - (exV2 + "").indexOf(".") - 1, quesPage ? ua_numDec < ca_numDec ? resul = !1 : Math.round(exV2 * Math.pow(10, ca_numDec)) / Math.pow(10, ca_numDec) != exV1 && (resul = !1) : (ca_numDec > ua_numDec ? Math.round(exV1 * Math.pow(10, ua_numDec)) / Math.pow(10, ua_numDec) != exV2 && (resul = !1) : Math.round(exV2 * Math.pow(10, ca_numDec)) / Math.pow(10, ca_numDec) != exV1 && (resul = !1), ((exV1 + "").indexOf(".") < 0 || (exV2 + "").indexOf(".") < 0) && (resul = !1))), !resul) return resul
        }
        if (0 == vars.length) break
      }
      return resul
    }, _expressionCompare.compEqsVal = function (str1, solveFor, valFor) {
      var strippedFns1 = checkEq(str1, 1);
      if ("object" == typeof strippedFns1) return message;
      var fns1 = strippedFns1.replaceArray(repArr, finArr, 1),
        resul = !0,
        regex = new RegExp(solveFor, "g"),
        exp1 = setPow(strippedFns1).replace(regex, valFor).replace(/\+\+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/--/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr),
        exV1;
      try {
        exV1 = eval(this.replaceOctal(exp1))
      } catch (e) {
        return !1
      }
      return 0 == Math.round(1e3 * exV1) || (resul = !1), resul
    }, _expressionCompare.getValueOf = function (eqlhs, eqrhs, variable) {
      var strippedFns1 = checkEq(eqlhs, 1);
      if ("object" == typeof strippedFns1) return message;
      var fns1 = strippedFns1.replaceArray(repArr, finArr, 1),
        strippedFns2 = checkEq(eqrhs, 1);
      if ("object" == typeof strippedFns2) return message;
      var fns2 = strippedFns2.replaceArray(repArr, finArr, 1),
        minval = -1e4,
        maxval = 1e4;
      midval = 0;
      var regex = new RegExp(variable, "g"),
        expL = setPow(strippedFns1).replace(regex, minval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr),
        expR = setPow(strippedFns2).replace(regex, minval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr),
        exminV1, exminV2;
      try {
        exminV1 = eval(replaceOctal(expL))
      } catch (e) {
        return !1
      }
      try {
        exminV2 = eval(replaceOctal(expR))
      } catch (e) {
        return !1
      }
      expL = setPow(strippedFns1).replace(regex, maxval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr), expR = setPow(strippedFns2).replace(regex, maxval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr);
      var exmaxV1, exmaxV2;
      try {
        exmaxV1 = eval(replaceOctal(expL))
      } catch (e) {
        return !1
      }
      try {
        exmaxV2 = eval(replaceOctal(expR))
      } catch (e) {
        return !1
      }
      var sgnMin = Math.sgn(exminV1 - exminV2),
        sgnMax = Math.sgn(exmaxV1 - exmaxV2),
        exmidV1, exmidV2;
      yo = 0;
      do {
        midval = (minval + maxval) / 2, expL = setPow(strippedFns1).replace(regex, midval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr), expR = setPow(strippedFns2).replace(regex, midval).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*(").getMathFns(finArr);
        try {
          exmidV1 = eval(replaceOctal(expL))
        } catch (e) {
          return !1
        }
        try {
          exmidV2 = eval(replaceOctal(expR))
        } catch (e) {
          return !1
        }
        var sgnMid = Math.sgn(Math.round(exmidV1 * Math.pow(10, 10)) / Math.pow(10, 10) - Math.round(exmidV2 * Math.pow(10, 10)) / Math.pow(10, 10));
        if (80 == ++yo) break;
        if (sgnMid == sgnMin) minval = midval;
        else if (sgnMid == sgnMax) maxval = midval;
        else if (0 == sgnMid) break
      } while (maxval > minval || yo < 80);
      return Math.round(midval * Math.pow(10, 10)) / Math.pow(10, 10)
    }, _expressionCompare.getValueOfExpression = function (exp) {
      var strippedFns = checkEq(exp, 1);
      if ("object" == typeof strippedFns) return !1;
      var fns = strippedFns.replaceArray(repArr, finArr, 1),
        expL = setPow(strippedFns).replace(/(\+\+)+/g, "+").replace(/\+-/g, "-").replace(/-\+/g, "-").replace(/(--)+/g, "+").replaceArray(repArr, finArr, 1).replace(/\)\(/g, ")*("),
        exL = expL.getMathFns(finArr),
        exV;
      try {
        exV = eval(replaceOctal(exL))
      } catch (e) {
        return console.log(exL + "Error in Expression"), !1
      }
      return exV
    }, _expressionCompare.replaceOctal = function (e) {
      return e.replace(/([^0-9.]+)0+([0-9]+)|^0+([0-9]+)/g, "$1$2$3")
    }, _expressionCompare.gt = function (e) {
      return getTerms(e).display
    };
    var fracNumReplacer = function () {
      var e = 1 * arguments[1],
        t = 1 * arguments[2],
        r = 1 * arguments[3];
      return (e * r + t) / r
    };
    return _expressionCompare
  }(),
  expComp;
void 0 === expComp && (expComp = expressionCompare);

function isNumber(s) {
  return !isNaN(parseFloat(s)) && isFinite(s)
}

function commonErrors(s, e) {
  s = s.trim(), e = e.trim(), s = s.toUpperCase(), e = e.toUpperCase(), this.TempCorrectAns = s, this.TempUserAns = e, this.OriginalUserAns = e, this.OriginalCorrectAns = s, this.userAlert = "", this.log = "", this.errorCode = 0, this.TempUserAnsModified = function (s) {
    return String(this.OriginalUserAns) != String(this.TempUserAns) ? (this.log += "- " + s + "<br/>", this.OriginalUserAns = this.TempUserAns, 1) : 0
  }, this.TempCorrectAnsModified = function (s) {
    return String(this.OriginalCorrectAns) != String(this.TempCorrectAns) ? (this.log += "- " + s + "<br/>", this.OriginalCorrectAns = this.TempCorrectAns, 1) : 0
  }, this.SetUserAlert = function (s, e) {
    this.userAlert += s, this.errorCode = e
  }, this.checkIfEqual = function (s, e) {
    try {
      return nParser.parse(this.OriginalCorrectAns) == nParser.parse(this.TempUserAns) ? (void 0 !== s ? this.SetUserAlert(s, e) : void 0 === s && (this.OriginalUserAns = nParser.parse(this.TempUserAns)), 1) : (this.TempUserAns = String(this.OriginalUserAns), 0)
    } catch (r) {
      return this.OriginalCorrectAns == this.TempUserAns ? (void 0 !== s && this.SetUserAlert(s, e), 1) : (this.TempUserAns = String(this.OriginalUserAns), 0)
    }
  }, this.extraCharsTrim = function () {
    return this.TempUserAns = this.TempUserAns.replace(/`+/i, ""), this.TempUserAnsModified("Found, ignore: Extra ` symbol(s) in the user Answer."), this.TempUserAns = this.TempUserAns.replace(/'+/i, ""), this.TempUserAnsModified("Found, ignore: Extra ' symbol(s) in the user Answer."), this.TempUserAns = this.TempUserAns.replace(/\.+$/i, ""), this.TempUserAnsModified("Found, ignore: Full-stop(s) at the end of the user Answer."), this.TempUserAns = this.TempUserAns.replace(/\.+/i, "."), this.TempUserAnsModified("Found, ignore: Multiple consecutive full-stops in the user Answer. (treated as a single full-stop)"), this.TempUserAns = this.TempUserAns.replace(/\\+$/i, ""), this.TempUserAnsModified("Found, ignore: Extra \\ symbol(s) at the end of the user Answer."), this.TempUserAns = this.TempUserAns.replace(/\\+$/i, "\\"), this.TempUserAnsModified("Found, ingnore: Multiple consecutive  in the user Answer."), this.TempUserAns = this.TempUserAns.replace(/\]+$/i, ""), this.TempUserAnsModified("Found, ignore: Extra ] symbol(s) at the end of the user Answer."), this.TempCorrectAns = this.TempCorrectAns.replace(/\.+$/i, ""), this.TempCorrectAnsModified("Found, ignore: Extra full-stops at the end of the system's Answer."), this.checkIfEqual()
  }, this.backSlashForForwardSlash = function () {
    return this.TempUserAns = this.TempUserAns.replace(/\\/i, "/"), this.TempUserAnsModified("Found, ignore: '\\' used instead of '/' symbol in the user Answer."), this.checkIfEqual()
  }, this.commaForDot = function () {
    return this.TempUserAns.indexOf(",") > -1 ? (this.TempUserAns = this.TempUserAns.substr(0, this.TempUserAns.lastIndexOf(",")) + "." + this.TempUserAns.substr(this.TempUserAns.lastIndexOf(",") + 1), this.checkIfEqual("You seem to have used ',' (comma) instead of decimal point.", 1)) : 0
  }, this.charReplaceInNum = function () {
    if (isNumber(this.OriginalCorrectAns) && !isNumber(this.OriginalUserAns)) {
      for (var s = new Array("o", "O", "l", "!", "I", "S", "_"), e = new Array("0", "0", "1", "1", "1", "5", "-"), r = 0; r < 6; r++)
        if (this.TempUserAns = this.TempUserAns.replace(RegExp(s[r], "g"), e[r]), this.checkIfEqual("You seem to have used the character '" + s[r] + "' instead of the number " + e[r] + "!", 2)) return 1;
      if (r = 6, this.TempUserAns = this.TempUserAns.replace(RegExp(s[r], "g"), e[r]), this.checkIfEqual("You seem to have used '_' (underscore) instead of '-' (minus symbol)!", 3)) return 1
    }
    return 0
  }, this.ratioSymbol = function () {
    return this.OriginalCorrectAns.indexOf(":") > -1 ? (this.TempUserAns = String(this.TempUserAns).replace(/;/i, ":"), this.checkIfEqual("Please see if you have used the correct symbol for ratio.", 4)) : 0
  }, this.commonMisspellings = function () {
    for (var s, e = this.TempUserAns, r = ["hundred", "ninety", "thousand", "eighths", "nineteen", "fourth", ""], i = ["h(a|e|u)?nd(a|e|i)?r(a|e|i)?d", "ninty", "thou?s(a|e)nd", "eights", "ninteen", "forth"], t = "", n = 0; n < r.length; n++) s = new RegExp(i[n], "gi"), this.TempUserAns = e.replace(s, r[n]), e != this.TempUserAns && (t += ", '" + r[n] + "'"), e = this.TempUserAns;
    return this.checkIfEqual("Please check if you have spelt " + t.substr(2) + " correctly!", 5)
  }, this.noUnits = function () {
    try {
      if (this.OriginalCorrectAns.indexOf("^(") > -1 && isNumber(this.TempUserAns)) return this.SetUserAlert("Please specify the units in your answer!", 6), 1
    } catch (s) {
      return 0
    }
  }, this.unitsMisspellings = function () {
    for (var s, e = this.TempUserAns, r = "", i = ["m", "kg", "s", "K", "radian"], t = [
        ["km", "m", "cm", "mm", "mL", "l", "kl"],
        ["kg", "g", "cg", "mg"],
        ["s", "minutes", "hours", "years"]
      ], n = [
        ["(k(ilo)?s?(s)?(me?te?re?s?))|k\\.?m\\.?s|k\\.m\\.?", "(me?te?re?s?)|m\\.?s", "(centis?)(s)?(me?te?re?s?)|c\\.?m\\.?s|c\\.m\\.?", "(mill?i)s?(s)?(me?te?re?s?)|m\\.?m\\.?s|m\\.m\\.?", "(mill?i)s?(s)?(li?te?re?s?)|m\\.?l\\.?s|m\\.l\\.?", "li?t(e?r)s?|l\\.?s", "(k(ilo)?s?(s)?(li?te?re?s?))|k\\.?l\\.?s|k\\.l\\.?"],
        ["(k(ilo)s?(s)?(gra?ms?)?)|(k(ilo)?s?(s)?(gra?ms?))|k\\.?g\\.?s|k\\.g\\.?", "g\\.?m\\.?s?|g\\.?m?\\.?s|grms?", "c(enti)?(s)?(gra?ms?)?|c\\.?g\\.?s|c\\.g\\.?", "(mill?i(s)?(gra?ms?)?)|(m\\.?g\\.?s)|(m\\.g\\.?)"],
        ["secs?", "mins", "hr.?s", "yr.?s"]
      ], h = 0; h < t.length; h++)
      if (this.OriginalCorrectAns.indexOf(i[h] + "^(") > -1) {
        for (var o = 0; o < t[h].length; o++) s = new RegExp(n[h][o], "gi"), this.TempUserAns = e.replace(s, t[h][o]), e != this.TempUserAns && (r += ", '" + t[h][o] + "'"), e = this.TempUserAns;
        return this.checkIfEqual("Please check if you have written the unit '" + r.substr(3) + "' correctly.", 7)
      }
    return 0
  }, this.extraUnits = function () {
    if (isNumber(this.OriginalCorrectAns)) {
      if (this.TempUserAns.search(new RegExp("^" + this.OriginalCorrectAns + "(\\s)[a-z]+(\\^\\()", "gi")) > -1) return this.SetUserAlert("You seem to have added extra unit at the end of your answer.", 8), 1;
      if (this.TempUserAns.search(new RegExp("^" + this.OriginalCorrectAns + "(\\s)*[a-z]+$", "gi")) > -1) return this.SetUserAlert("You seem to have added extra unit / text at the end of your answer.", 9), 1
    }
    return 0
  }, this.multipleAns = function () {
    var s = [];
    if (this.OriginalUserAns.indexOf(" or ") > -1) {
      for (s = this.OriginalUserAns.split(" or "), e = 0; e < s.length; e++)
        if (this.TempUserAns = s[e], this.checkIfEqual("Please do not use 'or' to write multiple answers in the same blank.", 10)) return 1
    } else if (this.OriginalUserAns.indexOf("=") > -1) {
      s = this.OriginalUserAns.split("=");
      for (var e = 0; e < s.length; e++)
        if (this.TempUserAns = s[e], this.checkIfEqual("Please do not use '=' to write multiple answers in the same blank.", 11)) return 1;
      return 0
    }
  }, this.parse = function () {
    return this.extraCharsTrim() || this.backSlashForForwardSlash() || this.commaForDot() || this.charReplaceInNum() || this.ratioSymbol() || this.commonMisspellings() || this.noUnits() || this.unitsMisspellings() || this.extraUnits() || this.multipleAns(), this.OriginalUserAns == this.OriginalCorrectAns
  }
}

var Base64 = {
  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  // public method for encoding
  encode: function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
  },
  // public method for decoding
  decode: function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = Base64._utf8_decode(output);
    return output;
  },
  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  },
  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}
var ContentService = /** @class */ (function () {
  function ContentService(data) {
    this.contentObjects = [];
    this.isEncrypted = true;
    this.setErrorLogCallbackData = null;
    if (data && data.length) {
      var template = null,
        object = null;
      for (var i = 0; i < data.length; i++) {
        template = data[i].template;
        if (window[template]) {
          this.contentObjects.push(new window[template](data[i]));
        }
      }
    }
    return this.contentObjects;
  }
  ContentService.callErrorLogApi = function (postData) {
    this.setErrorLogCallbackData(postData);
  };
  ContentService.setErrorLogCallback = function (callback) {
    this.setErrorLogCallbackData = callback;
  };
  ContentService.IsJsonString = function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  ContentService.getEncryptionKey = function () {
    return '123';
  };
  ContentService.arraySum = function (array) {
    var sum = 0;
    if (array.length) {
      for (var i = 0; i < array.length; i++) {
        sum += array[i];
      }
    }
    return sum;
  };
  ContentService.encode = function (s, k) {
    if (this.isEncrypted && s) {
      s = Base64.decode(s);
      s = this.IsJsonString(s) ? JSON.parse(s) : s;
    }
    return s;
  };
  ContentService.getUserResponseForEvaluate = function (userAttemptedData) {
    var returnData = [];
    var userResponse = userAttemptedData && typeof (userAttemptedData.userResponse) != 'undefined' ? userAttemptedData.userResponse : null;
    if (userResponse) {
      Object.keys(userResponse).forEach(function (key) {
        returnData.push({
          name: key,
          value: userResponse[key].userAnswer
        });
      });
    }
    return returnData;
  };
  return ContentService;
}());
if (typeof (window.ContentService) === 'undefined') {
  window.ContentService = ContentService;
}
///////////////////////////--MCQ--////////////////////////////////////
var MCQ = /** @class */ (function () {
  function MCQ(data) {
    this.contentData = data;
    this.displayObject = {
      question: data.questionBody
    };
    this.displayObjectForView = {
      question: data.questionBody
    };
    this.translatedData = typeof (data.translatedData) != 'undefined' ? data.translatedData : null;
    this.translatedObject = null;
    if (data.quesVoiceover) this.displayObject['questionVoiceover'] = data.quesVoiceover;
    if (data.quesVoiceover) this.displayObjectForView['questionVoiceover'] = data.quesVoiceover;
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("options-short") != -1 ? 'right' : (data.tags.indexOf("options-2x2") != -1 ? '2x2' : false);
      if (optionsOrientation) this.displayObject['optionsOrientation'] = optionsOrientation;
    }
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("options-short") != -1 ? 'right' : (data.tags.indexOf("options-2x2") != -1 ? '2x2' : false);
      if (optionsOrientation) this.displayObjectForView['optionsOrientation'] = optionsOrientation;
    }
    if (typeof (data.showEditorTool) != 'undefined') this.displayObject['showEditorTool'] = (data.showEditorTool == 1);
    if (typeof (data.conditions) != 'undefined') this.displayObject['conditions'] = (data.conditions == 1);
    if (typeof (data.glossary) != 'undefined') this.displayObject['glossary'] = (data.glossary == 1);
    if (typeof (data.hints) != 'undefined') this.displayObject['hints'] = (data.hints.length != 0);
    this.isDynamic = data.isDynamic;
    ContentService.isEncrypted = typeof (data.encrypted) != 'undefined' ? data.encrypted : true;
    if (data.isDynamic == true) this.dynamicParameters = data.dynamicParameters;
    this.template = data.template;
    this.choices = data.response.mcqPattern.choices;
    this.userAttempts = 1;
    this.correctAnskey = ContentService.encode(data.response.mcqPattern.correctAnswer, ContentService.getEncryptionKey());
    this.mainContentObject = {};
    this.explanation = typeof (data.explanation) != 'undefined' && data.explanation ? ContentService.encode(data.explanation, ContentService.getEncryptionKey()) : null;
    this.hints = typeof (data.hints) != 'undefined' && data.hints.length ? data.hints : [];
    this.trials = parseInt((typeof (data.trials) != 'undefined' && data.trials) ? data.trials : 1);
    this.timerRunning = false;
    this.timerID = null;
    this.secs = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = data.contentType;
    this.questionType = data.template;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.responseType = data.response.mcqPattern.type;
    this.explVoiceover = typeof (data.explVoiceover) != 'undefined' && data.explVoiceover ? data.explVoiceover : null;
    this.timeInterval = 1;
    this.isHintsTaken = false;
    this.finalResult = false;
    this.localResult = [];
    this.lastAttemptedData = null;
    this.responseElements = {};
    this.timeTakenToViewHint = 0;
    this.timeTakenToViewHintID;
    this.options = [];
    this.isSkipped = false;
    var self = this;
    var choices = this.choices;
    for (var i = 0; i < choices.length; i++) {
      this.choices[i].displayAnswer = ContentService.encode(choices[i].displayAnswer, ContentService.getEncryptionKey());
      this.options.push({
        id: i,
        value: this.choices[i].value
      });
    }
    if (this.trials == 1 && this.hints.length) this.displayObject['hint'] = this.hints;
    this.responseElements['mcqPattern'] = {
      'type': this.responseType,
      "choices": this.options
    };
    this.displayObject['responseElements'] = this.responseElements;
    this.displayObjectForView['responseElements'] = this.responseElements;
  }
  MCQ.prototype.getTemplate = function () {
    return this.template;
  };
  MCQ.prototype.getContentType = function () {
    return this.contentType;
  };
  MCQ.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  MCQ.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  MCQ.prototype.getExplanation = function () {
    return this.explanation;
  };
  MCQ.prototype.getHints = function () {
    this.startHintTimer();
    this.hintsTaken();
    return this.hints;
  };
  MCQ.prototype.totalHints = function () {
    return this.hints;
  };
  MCQ.prototype.startContentTimer = function () {
    this.initializeTimer();
  };
  MCQ.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  MCQ.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  MCQ.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  MCQ.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  MCQ.prototype.startHintTimer = function () {
    var self = this;
    this.timeTakenToViewHint = parseInt(this.timeTakenToViewHint + 1);
    this.timeTakenToViewHintID = window.setTimeout(function () {
      self.startHintTimer();
    }, 1000);
  };
  MCQ.prototype.stopHintTimer = function () {
    clearTimeout(this.timeTakenToViewHintID);
  };
  MCQ.prototype.hintsTaken = function () {
    this.isHintsTaken = true;
  };
  MCQ.prototype.skipThis = function () {
    this.isSkipped = true;
    return this.getSubmitData();
  };
  MCQ.prototype.evaluateAnswer = function (inputData) {
    inputData = JSON.parse(inputData);
    var selectedOption = typeof (inputData[0]) != 'undefined' && typeof (inputData[0].value) != 'undefined' ? inputData[0].value : null;
    var evaluatedResult = {
      noMoreAttempts: false
    };
    var result = false;
    if (this.trials >= this.userAttempts) {
      if (this.correctAnskey == selectedOption) {
        result = true;
        evaluatedResult['correctAnswer'] = String(this.correctAnskey);
        evaluatedResult['explanation'] = this.explanation;
      }
      if (!result && ((this.trials - this.userAttempts) == 0) && this.choices[selectedOption].displayAnswer) evaluatedResult.displayAnswer = this.choices[selectedOption].displayAnswer;
      if (!result && ((this.trials - this.userAttempts) == 1) && this.hints.length) evaluatedResult['hints'] = this.hints;
      if (!result && this.userAttempts < this.trials) evaluatedResult['reviewMsg'] = true;
    } else {
      evaluatedResult['correctAnswer'] = String(this.correctAnskey);
      evaluatedResult['explanation'] = this.explanation;
    }
    if (this.trials == this.userAttempts) {
      evaluatedResult['correctAnswer'] = String(this.correctAnskey);
      evaluatedResult['explanation'] = this.explanation;
    }
    evaluatedResult['result'] = result;
    evaluatedResult['userInput'] = selectedOption; // we need user input
    evaluatedResult['userAttempts'] = this.userAttempts;
    evaluatedResult.noMoreAttempts = (this.trials == this.userAttempts) || result;
    evaluatedResult['noOfTrialRemaning'] = this.trials - this.userAttempts;
    evaluatedResult['timeTaken'] = this.secs;
    this.finalResult = result;
    this.userAttempts++;
    this.setResultLocally(evaluatedResult);
    if (evaluatedResult.noMoreAttempts) {
      this.restartTimer();
      this.stopHintTimer();
    } else {
      this.restartTimer();
    }
    if (typeof (evaluatedResult.explanation) != 'undefined' && evaluatedResult.explanation != '' && this.explVoiceover) evaluatedResult['explanationVoiceover'] = this.explVoiceover;
    return evaluatedResult;
  };
  MCQ.prototype.setResultLocally = function (data) {
    this.lastAttemptedData = data;
    this.localResult.push(data);
  };
  MCQ.prototype.getLocalResult = function () {
    return this.localResult;
  };
  MCQ.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['questionType'] = this.questionType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  MCQ.prototype.getSubmitData = function () {
    var submitData = {};
    var userResponseData = {};
    var userAttemptData = {};
    if (this.lastAttemptedData) {
      userResponseData['mcqPattern'] = {
        type: this.responseType,
        userAnswer: this.lastAttemptedData && typeof (this.lastAttemptedData.userInput != 'undefined') ? this.lastAttemptedData.userInput : null
      };
    }
    var trialWiseResult = [];
    var localData = this.getLocalResult();
    var self = this;
    var totalTime = 0;
    localData.forEach(function (val, key) {
      trialWiseResult.push({
        userResponse: {
          mcqPattern: {
            type: self.responseType,
            userAnswer: val.userInput
          }
        },
        timeTaken: val.timeTaken,
        result: val.result
      });
      totalTime += val.timeTaken;
    });
    if (this.lastAttemptedData) {
      userAttemptData = {
        hintTaken: this.isHintsTaken,
        trialCount: this.trials,
        trials: trialWiseResult
      };
    }
    submitData['isDynamic'] = this.isDynamic;
    submitData['contentID'] = this.contentID;
    submitData['result'] = (this.finalResult == true ? 'pass' : (this.isSkipped ? 'skip' : (!this.lastAttemptedData ? 'unAttempted' : 'fail')));
    submitData['timeTaken'] = totalTime;
    submitData['userResponse'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userResponseData : {};
    submitData['userAttemptData'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userAttemptData : {};
    if (this.isHintsTaken) submitData['hintsTimeTaken'] = this.timeTakenToViewHint;
    if (this.dynamicParameters) submitData['dynamicParameters'] = this.dynamicParameters;
    submitData['contentInfo'] = this.getContentInfo();
    return submitData;
  };
  MCQ.prototype.getUpdateData = function (explanationRating, feedbackResponse, userExplanation) {
    var updatedData = {};
    updatedData['contentID'] = this.contentID;
    var updatedUserAttempt = {
      explanationRead: true,
      explanationReadTime: this.secs,
      explanationRating: explanationRating,
      gaveExplanation: (userExplanation ? true : false),
      userExplanation: userExplanation,
      feedbackResponse: feedbackResponse
    };
    updatedData['userAttemptData'] = updatedUserAttempt;
    updatedData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer();
    return updatedData;
  };
  MCQ.prototype.getCorrectAnswer = function () {
    return String(this.correctAnskey);
  };
  MCQ.prototype.getCorrectAnswerForView = function () {
    return String(this.correctAnskey);
  };
  MCQ.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = userAttemptData.result;
    userData['timeTaken'] = userAttemptData.timeTaken;
    var userResponse = userAttemptData.userResponse;
    userData['userAnswer'] = userAttemptData.userResponse.mcqPattern.userAnswer;
    return userData;
  };
  MCQ.prototype.getTranslatedDisplayObject = function () {
    var translatedResponse = {};
    if (this.translatedData) {
      this.translatedObject = new MCQ(this.translatedData);
      translatedResponse = this.translatedObject.getDisplayObject();
    }
    return translatedResponse;
  };
  MCQ.prototype.getTranslatedExplanation = function () {
    return this.translatedObject ? this.translatedObject.getExplanation() : null;
  };
  MCQ.prototype.getTranslatedHints = function () {
    return this.translatedObject ? this.translatedObject.getHints() : null;
  };
  MCQ.prototype.setUserResponseForAttempt = function (userResponse) {
    return ContentService.getUserResponseForEvaluate(userResponse);
  };
  return MCQ;
}());
///////////////////////////--MCQ-END-////////////////////////////////////
///////////////////////////Blank///////////////////////////////////////
var Blank = /** @class */ (function () {
  function Blank(data) {
    this.contentData = data;
    this.displayObject = {
      question: data.questionBody
    };
    this.displayObjectForView = {
      question: data.questionBody
    };
    this.translatedData = typeof (data.translatedData) != 'undefined' && data.translatedData ? data.translatedData : null;
    this.translatedObject = null;
    if (data.quesVoiceover) this.displayObject['questionVoiceover'] = data.quesVoiceover;
    if (data.quesVoiceover) this.displayObjectForView['questionVoiceover'] = data.quesVoiceover;
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObject['optionsOrientation'] = optionsOrientation;
    }
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObjectForView['optionsOrientation'] = optionsOrientation;
    }
    if (typeof (data.showEditorTool) != 'undefined') this.displayObject['showEditorTool'] = (data.showEditorTool == 1);
    if (typeof (data.conditions) != 'undefined') this.displayObject['conditions'] = (data.conditions == 1);
    if (typeof (data.glossary) != 'undefined') this.displayObject['glossary'] = (data.glossary == 1);
    if (typeof (data.hints) != 'undefined') this.displayObject['hints'] = (data.hints.length != 0);
    this.isDynamic = data.isDynamic;
    if (data.isDynamic == true) this.dynamicParameters = data.dynamicParameters;
    ContentService.isEncrypted = typeof (data.encrypted) != 'undefined' ? data.encrypted : true;
    this.responseElements = {};
    this.template = data.template;
    this.correctAnswer = null;
    this.userAttempts = 1;
    this.option = data.response;
    this.correctAnswers = {};
    this.commonError = {};
    this.explanation = typeof (data.explanation) != 'undefined' && data.explanation ? ContentService.encode(data.explanation, ContentService.getEncryptionKey()) : null;
    this.fracboxCheck = {};
    this.conditionalAlert = (typeof (data.conditions) != 'undefined') && data.conditions.length ? data.conditions : [];
    this.hints = typeof (data.hints) != 'undefined' && data.hints.length ? data.hints : [];
    this.noOfCondition = 0;
    this.totalAttempts = 10;
    this.ano = 1;
    this.conCheck = 0;
    this.trials = parseInt((typeof (data.trials) != 'undefined' && data.trials) ? data.trials : 1);
    this.startTime = 0;
    this.timerRunning = false;
    this.timerID = null;
    this.secs = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = data.contentType;
    this.questionType = data.template;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.responseType = null;
    this.explVoiceover = typeof (data.explVoiceover) != 'undefined' && data.explVoiceover ? data.explVoiceover : null;
    this.oldUserAttemptData = typeof (data.userAttemptData) != 'undefined' && data.userAttemptData ? data.userAttemptData : null;
    this.timeInterval = 1;
    this.isHintsTaken = false;
    this.trailWiseUserResponse = [];
    this.lastAttemptedResponse = {};
    this.trialWiseUserInput = [];
    this.localResult = [];
    this.timeTakenToViewHint = 0;
    this.timeTakenToViewHintID;
    this.Answer = {};
    this.result = false;
    this.totalTime = 0;
    this.isSkipped = false;
    var tmpCorrectAns = null;
    var self = this;
    Object.keys(this.option).forEach(function (key) {
      self.correctAnswers[key] = self.option[key].correctAnswers = ContentService.encode(self.option[key].correctAnswers, ContentService.getEncryptionKey());
      if (self.correctAnswers[key].length) {
        self.Answer[key] = self.option[key].correctAnswers[0];
      }
      self.responseType = self.option[key].type;
      self.responseElements[key] = {
        "type": self.responseType,
        "attributes": self.option[key].attributes
      };
    });
    this.noOfBlanks = Object.keys(this.option).length;
    if (this.trials == 1 && this.hints.length) {
      this.displayObject['hint'] = this.hints;
    }
    this.displayObject['responseElements'] = self.responseElements;
    this.displayObjectForView['responseElements'] = self.responseElements;
  }
  Blank.prototype.getTemplate = function () {
    return this.template;
  };
  Blank.prototype.getContentType = function () {
    return this.contentType;
  };
  Blank.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Blank.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Blank.prototype.getExplanation = function () {
    return this.explanation;
  };
  Blank.prototype.getHints = function () {
    this.startHintTimer();
    this.hintsTaken();
    return this.hints;
  };
  Blank.prototype.totalHints = function () {
    return this.hints;
  };
  Blank.prototype.startContentTimer = function () {
    this.initializeTimer();
  };
  Blank.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Blank.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Blank.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Blank.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Blank.prototype.startHintTimer = function () {
    var self = this;
    this.timeTakenToViewHint = parseInt(this.timeTakenToViewHint + 1);
    this.timeTakenToViewHintID = window.setTimeout(function () {
      self.startHintTimer();
    }, 1000);
  };
  Blank.prototype.stopHintTimer = function () {
    clearTimeout(this.timeTakenToViewHintID);
  };
  Blank.prototype.hintsTaken = function () {
    this.isHintsTaken = true;
  };
  Blank.prototype.useHint = function () {
    this.isHintsTaken = true;
  };
  Blank.prototype.skipThis = function () {
    this.isSkipped = true;
    return this.getSubmitData();
  };
  Blank.prototype.evaluateAnswer = function (inputData) {
    inputData = JSON.parse(inputData);
    var userData = {};
    var condition = [];
    var action = [];
    var userAns = new Array();
    var userInput = {};
    var evaluatedResult = {
      noMoreAttempts: false
    };
    var finalResult = true;
    var itemSpecificDA = {};
    var blankResult = 0;
    var isNext = 2;
    var conditionCheck = 0;
    var priority = 0;
    var itemResult = {};
    var userResponseData = {};
    var self = this;
    if (this.trials >= this.userAttempts) {
      inputData.forEach(function (uval, ukey) {
        userData[uval.name] = typeof (uval.value != 'undefined') ? uval.value : '';
        blankResult = self.checkIndividualBlank(self.correctAnswers[Object.keys(self.correctAnswers)[ukey]], uval.value, false, (ukey + 1), uval.name);
        itemResult[uval.name] = {
          correct: blankResult == 1
        };
        if (blankResult != 1) {
          finalResult = false;
        }
        userAns.push(uval.value);
        userResponseData[uval.name] = {
          type: self.responseType,
          userAnswer: typeof (uval.value != 'undefined') ? uval.value : ''
        };
      });
      if (!finalResult && ((this.trials - this.userAttempts) == 1) && this.hints.length) {
        evaluatedResult['hints'] = this.hints;
      }
      if (!finalResult && this.userAttempts < this.trials) {
        evaluatedResult['reviewMsg'] = true;
      }
      // if (!finalResult && this.userAttempts < this.trials && this.conditionalAlert.length) {
      if (this.userAttempts <= this.trials && this.conditionalAlert.length) {
        this.noOfCondition = this.conditionalAlert.length;
        this.conditionalAlert.forEach(function (cv, ci) {
          condition[ci] = cv.condition;
          action[ci] = cv.action;
        });
        var userAnswer = userAns.join("|");
        if (this.noOfCondition > 0) {
          if (this.totalAttempts > 0) {
            for (var p = 1; p <= 3; p++) {
              var isNext = 0;
              conditionCheck = 0;
              for (var i = 0; i < this.noOfCondition; i++) {
                parser.inputValues(userAnswer, this.ano);
                var alertMessage = '';
                if (parser.parse(condition[i]) == 1) {
                  var action1 = action[i];
                  if (/Mark Right/i.test(action1)) {
                    priority = 1;
                  } else if (/Mark Wrong/i.test(action1)) {
                    priority = 2;
                  } else {
                    priority = 3;
                  }
                  if (priority == p) {
                    if (action1 == "Mark Right") {
                      finalResult = true;
                      isNext = 1;
                    } else if (action1 == "Mark Wrong") {
                      finalResult = false;
                      isNext = 1;
                    } else if (action1.search(/Mark Right$/) != -1) {
                      alertMessage = action1.substring(7, action1.length - 17);
                      finalResult = true;
                      isNext = 1;
                    } else if (action1.search(/Mark Wrong$/) != -1) {
                      alertMessage = action1.substring(7, action1.length - 17);
                      finalResult = false;
                      isNext = 1;
                    } else {
                      alertMessage = action1.substring(7, action1.length - 2);
                      isNext = 1;
                      break;
                    }
                  }
                  // allowCommonError = false;
                } else {
                  conditionCheck++;
                  if (conditionCheck == this.noOfCondition) {
                    this.conCheck = 1;
                  }
                  if (this.conCheck == 1) {
                    isNext = 2;
                    break;
                  }
                }
              }
              if (isNext == 1) {
                break;
              }
            }
            this.ano++;
            if (alertMessage != '') {
              evaluatedResult['alertMessage'] = alertMessage;
            }
            this.totalAttempts = this.totalAttempts - 1;
          } else {
            isNext = 2;
          }
        }
      }
    }
    if (finalResult || (this.trials - this.userAttempts == 0)) {
      evaluatedResult['correctAnswer'] = this.Answer;
      evaluatedResult['explanation'] = this.explanation;
      evaluatedResult['itemResult'] = itemResult;
      evaluatedResult['itemSpecificDA'] = itemSpecificDA;
    }
    evaluatedResult['result'] = finalResult;
    evaluatedResult['userInput'] = userData;
    evaluatedResult['userAttempts'] = this.userAttempts;
    evaluatedResult.noMoreAttempts = (this.trials == this.userAttempts) || finalResult;
    evaluatedResult['noOfTrialRemaning'] = this.trials - this.userAttempts;
    evaluatedResult['timeTaken'] = this.secs;
    this.userAttempts++;
    this.lastAttemptedResponse = {
      userResponse: userResponseData,
      timeTaken: this.secs,
      result: finalResult
    };
    this.totalTime += this.secs;
    this.trailWiseUserResponse.push(this.lastAttemptedResponse);
    if (evaluatedResult.noMoreAttempts) {
      this.restartTimer();
      this.stopHintTimer();
    } else {
      this.restartTimer();
    }
    if (typeof (evaluatedResult.explanation) != 'undefined' && evaluatedResult.explanation != '' && this.explVoiceover) {
      evaluatedResult['explanationVoiceover'] = this.explVoiceover;
    }
    this.result = finalResult;
    return evaluatedResult;
  };
  Blank.prototype.setResultLocally = function (data) {
    this.localResult.push(data);
  };
  Blank.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Blank.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['questionType'] = this.questionType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Blank.prototype.getSubmitData = function () {
    var submitData = {};
    var trialWiseResult = [];
    var userAttemptData = {};
    if (Object.keys(this.lastAttemptedResponse).length) {
      userAttemptData = {
        hintTaken: this.isHintsTaken,
        trialCount: this.trials,
        trials: this.trailWiseUserResponse
      };
    }
    submitData['contentID'] = this.contentID;
    submitData['result'] = (this.result == true ? 'pass' : (this.isSkipped ? 'skip' : (!Object.keys(this.lastAttemptedResponse).length ? 'unAttempted' : 'fail')));
    submitData['isDynamic'] = this.isDynamic;
    submitData['timeTaken'] = this.totalTime;
    submitData['userResponse'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? (Object.keys(this.lastAttemptedResponse).length ? this.lastAttemptedResponse.userResponse : {}) : {};
    submitData['userAttemptData'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userAttemptData : {};
    if (this.isHintsTaken) submitData['hintsTimeTaken'] = this.timeTakenToViewHint;
    if (this.dynamicParameters) submitData['dynamicParameters'] = this.dynamicParameters;
    submitData['contentInfo'] = this.getContentInfo();
    return submitData;
  };
  Blank.prototype.getUpdateData = function (explanationRating, feedbackResponse, userExplanation) {
    var updatedData = {};
    updatedData['contentID'] = this.contentID;
    var updatedUserAttempt = {
      explanationRead: true,
      explanationReadTime: this.secs,
      explanationRating: explanationRating,
      gaveExplanation: (userExplanation ? true : false),
      userExplanation: userExplanation,
      feedbackResponse: feedbackResponse
    };
    updatedData['userAttemptData'] = updatedUserAttempt;
    updatedData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer;
    return updatedData;
  };
  Blank.prototype.checkIndividualBlank = function (expectedAns, userResponse, fracboxCheck, blankNo, blankName) {
    blankNo = blankNo || 0;
    var result = 0;
    var arrExpectedAns = new Array();
    // arrExpectedAns = expectedAns.split("~"); //Split the different way to answer
    arrExpectedAns = expectedAns; //Split the different way to answer
    arrExpectedAns = unique(arrExpectedAns); //Remove the duplicates in the answer e.g. AB~ab would result into AB (since case insensitive comparison)
    // flag to perform auto rounding or not (perform auto rounding only if correct answer is specified only in fraction, not in decimal)
    var checkAutoRounding = false;
    if (!(expectedAns.indexOf("/") != -1 && expectedAns.indexOf(".") != -1) && !isNaN(userResponse)) {
      checkAutoRounding = true;
    }
    //check if blank left unanswered
    if (trim(userResponse) == "") {
      var unanswered = 1;
      for (var j = 0; j < arrExpectedAns.length; j++)
        if (trim(arrExpectedAns[j]) == '') unanswered = 0;
    }
    if (unanswered) result = 2;
    else {
      var flagCommonError = 0;
      if (this.commonError[blankName] == '') flagCommonError = 1;
      for (var j = 0; j < arrExpectedAns.length; j++) {
        if (userResponse == '') {
          if (trim(arrExpectedAns[j]) == '') {
            result = 1;
            break;
          }
        } else {
          var b1 = trim(userResponse);
          var ans_blank = trim(arrExpectedAns[j]);
          /*if(fracboxCheck===true)
          {*/
          //var indexOFSlash  =   ans_blank.toString().indexOf("/");
          var indexOFbracket = arrExpectedAns[j].toString().indexOf("}/{");
          //if(indexOFSlash>-1 && indexOFbracket==-1)
          if (indexOFbracket > -1) {
            //ans_blank =   "{"+ans_blank+"}";
            //ans_blank =   ans_blank.toString().replace(/\//gi, "}/{");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\}\/\{/gi, "/");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\}/gi, "");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\{/gi, " ");
          }
          ans_blank = ans_blank.replace(/\s+/g, '');
          ans_blank = ans_blank.replace(/&nbsp;/g, '');
          /*}*/
          if (b1 == ans_blank) {
            result = 1;
            break;
          } else {
            //if(!(fracboxCheck===true))
            {
              try {
                try {
                  if (expComp.compEqs(arrExpectedAns[j], userResponse, 1, checkAutoRounding)) {
                    result = 1;
                    break;
                  }
                } catch (err) {
                  // do nothing, continue execution
                }
                var cAnswer = nParser.parse(arrExpectedAns[j]);
                var uAnswer = nParser.parse(userResponse);
                if (uAnswer == cAnswer) {
                  result = 1;
                  break;
                }
                // else if (checkAutoRounding && ((document.getElementById("b" + blankNo)) || document.getElementById("tmpMode").value == "NCERT")) {
                //     // auto rounding should happen when textbox exists (to avoid frac box auto rounding)
                //     if (checkRoundValue(userResponse, arrExpectedAns[j])) {
                //         result = 1;
                //         break;
                //     }
                // }
              } catch (err) {}
            }
            if (!(fracboxCheck === true)) {
              try {
                var cAnswer = nParser.parse(arrExpectedAns[j]);
              } catch (err) {
                var cAnswer = trim(arrExpectedAns[j]);
              }
              try {
                if (typeof this.commonError[blankName].userAlert == "undefined" || this.commonError[blankName].userAlert == "") {
                  this.commonError[blankName] = new commonErrors(cAnswer, b1);
                  if (this.commonError[blankName].parse() == 1) {
                    result = 1;
                    break;
                  }
                }
              } catch (err) {}
            }
            if (blankNo == 1 && this.noOfBlanks > 1) {
              var ansToCompare = ans_blank.toString() + ans_blank.toString();
              if (ansToCompare == b1) {
                result = 1;
                break;
              } else result = 0;
            } else result = 0;
          }
        }
      }
    }
    return result;
  };
  Blank.prototype.getCorrectAnswer = function () {
    return this.Answer;
  };
  Blank.prototype.getCorrectAnswerForView = function () {
    return Object.values(this.Answer).join(",");
  };
  Blank.prototype.getUserAnswer = function (userAttemptData) {
    var selectedOption = [];
    var userData = {};
    userData['result'] = userAttemptData.result;
    userData['timeTaken'] = userAttemptData.timeTaken;
    var userResponse = userAttemptData.userResponse;
    Object.keys(userResponse).forEach(function (ukey) {
      selectedOption.push(userResponse[ukey].userAnswer);
    });
    userData['userAnswer'] = Object.values(selectedOption).join(",");
    return userData;
  };
  Blank.prototype.getTranslatedDisplayObject = function () {
    var translatedResponse = {};
    if (this.translatedData) {
      this.translatedObject = new Blank(this.translatedData);
      translatedResponse = this.translatedObject.getDisplayObject();
    }
    return translatedResponse;
  };
  Blank.prototype.getTranslatedExplanation = function () {
    return this.translatedObject ? this.translatedObject.getExplanation() : null;
  };
  Blank.prototype.getTranslatedHints = function () {
    return this.translatedObject ? this.translatedObject.getHints() : null;
  };
  Blank.prototype.setUserResponseForAttempt = function (userResponse) {
    return ContentService.getUserResponseForEvaluate(userResponse);
  };
  return Blank;
}());
///////////////////////////Blank-End///////////////////////////////////////
///////////////////////////Dropdown///////////////////////////////////////
var Dropdown = /** @class */ (function () {
  function Dropdown(data) {
    this.contentData = data;
    this.displayObject = {
      question: data.questionBody,
    };
    this.displayObjectForView = {
      question: data.questionBody,
    };
    this.translatedData = typeof (data.translatedData) != 'undefined' && data.translatedData ? data.translatedData : null;
    this.translatedObject = null;
    if (data.quesVoiceover) this.displayObject['questionVoiceover'] = data.quesVoiceover;
    if (data.quesVoiceover) this.displayObjectForView['questionVoiceover'] = data.quesVoiceover;
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObject['optionsOrientation'] = optionsOrientation;
    }
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObjectForView['optionsOrientation'] = optionsOrientation;
    }
    if (typeof (data.showEditorTool) != 'undefined') this.displayObject['showEditorTool'] = (data.showEditorTool == 1);
    if (typeof (data.conditions) != 'undefined') this.displayObject['conditions'] = (data.conditions == 1);
    if (typeof (data.glossary) != 'undefined') this.displayObject['glossary'] = (data.glossary == 1);
    if (typeof (data.hints) != 'undefined') this.displayObject['hints'] = (data.hints.length != 0);
    this.isDynamic = data.isDynamic;
    if (data.isDynamic == true) this.dynamicParameters = data.dynamicParameters;
    ContentService.isEncrypted = typeof (data.encrypted) != 'undefined' ? data.encrypted : true;
    this.template = data.template;
    this.choices = data.response;
    this.userAttempts = 1;
    this.correctAnsKey = 0;
    this.correctAnswers = {};
    this.mainContentObject = {};
    this.explanation = typeof (data.explanation) != 'undefined' && data.explanation ? ContentService.encode(data.explanation, ContentService.getEncryptionKey()) : null;
    this.contentChoice = {};
    this.hints = typeof (data.hints) != 'undefined' && data.hints.length ? data.hints : [];
    this.trials = parseInt((typeof (data.trials) != 'undefined' && data.trials) ? data.trials : 1);
    this.startTime = 0;
    this.timerRunning = false;
    this.timerID = null;
    this.secs = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = data.contentType;
    this.questionType = data.template;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.responseType = null;
    this.explVoiceover = typeof (data.explVoiceover) != 'undefined' && data.explVoiceover ? data.explVoiceover : null;
    this.timeInterval = 1;
    this.trailWiseUserResponse = [];
    this.lastAttemptedResponse = {};
    this.trialWiseUserInput = [];
    this.localResult = [];
    this.globalMapper = {};
    this.responseElements = {};
    this.isHintsTaken = false;
    this.finalResult = false;
    this.timeTakenToViewHint = 0;
    this.totalTime = 0;
    this.timeTakenToViewHintID;
    this.isSkipped = false;
    this.correctAnswerForView = {};
    var self = this;
    Object.keys(this.choices).forEach(function (key) {
      self.correctAnswers[key] = self.choices[key].correctAnswer = ContentService.encode(self.choices[key].correctAnswer, ContentService.getEncryptionKey());
      self.responseType = self.choices[key].type;
      self.correctAnswerForView[key] = self.choices[key].choices[self.correctAnswers[key]].value;
      var tmpChoices = [];
      var mapper = self.choices[key].mapper;
      self.globalMapper[key] = mapper;
      var localChoices = self.choices[key].choices;
      mapper.forEach(function (val, index) {
        tmpChoices.push({
          id: index,
          value: localChoices[val].value
        });
      });
      self.responseElements[key] = {
        "type": self.responseType,
        "choices": tmpChoices
      };
    });
    this.displayObject['responseElements'] = self.responseElements;
    this.displayObjectForView['responseElements'] = self.responseElements;
    if (this.trials == 1 && this.hints.length) {
      this.displayObject['hint'] = this.hints;
    }
  }
  Dropdown.prototype.getTemplate = function () {
    return this.template;
  };
  Dropdown.prototype.getContentType = function () {
    return this.contentType;
  };
  Dropdown.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Dropdown.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Dropdown.prototype.getExplanation = function () {
    return this.explanation;
  };
  Dropdown.prototype.getHints = function () {
    this.startHintTimer();
    this.hintsTaken();
    return this.hints;
  };
  Dropdown.prototype.totalHints = function () {
    return this.hints;
  };
  Dropdown.prototype.startContentTimer = function () {
    this.initializeTimer();
  };
  Dropdown.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Dropdown.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Dropdown.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Dropdown.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Dropdown.prototype.startHintTimer = function () {
    var self = this;
    this.timeTakenToViewHint = parseInt(this.timeTakenToViewHint + 1);
    this.timeTakenToViewHintID = window.setTimeout(function () {
      self.startHintTimer();
    }, 1000);
  };
  Dropdown.prototype.stopHintTimer = function () {
    clearTimeout(this.timeTakenToViewHintID);
  };
  Dropdown.prototype.hintsTaken = function () {
    this.isHintsTaken = true;
  };
  Dropdown.prototype.skipThis = function () {
    this.isSkipped = true;
    return this.getSubmitData();
  };
  Dropdown.prototype.evaluateAnswer = function (inputData) {
    inputData = JSON.parse(inputData);
    var evaluatedResult = {
      noMoreAttempts: false
    };
    var specificAns = {};
    this.finalResult = true;
    var itemResult = {};
    var userInput = {};
    var itemSpecificDA = {};
    var userResponseData = {};
    var self = this;
    if (this.trials >= this.userAttempts) {
      inputData.forEach(function (val, key) {
        var name = val.name;
        var value = val.value;
        var mappedKey = String(self.globalMapper[name][value]);
        userInput[name] = mappedKey;
        itemResult[name] = {
          correct: mappedKey == self.correctAnswers[name]
        };
        if (!itemResult[name].correct && self.finalResult) {
          self.finalResult = false;
        }
        specificAns[name] = self.choices[name].choices[self.correctAnswers[name]].value;
        itemSpecificDA[name] = ContentService.encode(self.choices[name].choices[self.correctAnswers[name]].displayAnswer, ContentService.getEncryptionKey());
        userResponseData[name] = {
          type: self.responseType,
          userAnswer: typeof (mappedKey) != 'undefined' ? mappedKey : ''
        };
      });
      if (!this.finalResult && ((this.trials - this.userAttempts) == 1) && this.hints.length) {
        evaluatedResult['hints'] = this.hints;
      }
      if (!this.finalResult && this.userAttempts < this.trials) {
        evaluatedResult['reviewMsg'] = true;
      }
    }
    if (this.finalResult || (this.trials - this.userAttempts == 0)) {
      evaluatedResult['correctAnswer'] = specificAns;
      evaluatedResult['explanation'] = this.explanation;
      evaluatedResult['itemResult'] = itemResult;
      evaluatedResult['itemSpecificDA '] = itemSpecificDA;
    }
    evaluatedResult['result'] = this.finalResult;
    evaluatedResult['userInput'] = userInput;
    evaluatedResult['userAttempts'] = this.userAttempts;
    evaluatedResult.noMoreAttempts = (this.trials == this.userAttempts) || this.finalResult;
    evaluatedResult['noOfTrialRemaning'] = this.trials - this.userAttempts;
    evaluatedResult['timeTaken'] = this.secs;
    this.userAttempts++;
    this.lastAttemptedResponse = {
      userResponse: userResponseData,
      timeTaken: this.secs,
      result: this.finalResult
    };
    this.totalTime += this.secs;
    this.trailWiseUserResponse.push(this.lastAttemptedResponse);
    if (evaluatedResult.noMoreAttempts) {
      this.restartTimer();
      this.stopHintTimer();
    } else {
      this.restartTimer();
    }
    if (typeof (evaluatedResult.explanation) != 'undefined' && evaluatedResult.explanation != '' && this.explVoiceover) {
      evaluatedResult['explanationVoiceover'] = this.explVoiceover;
    }
    return evaluatedResult;
  };
  Dropdown.prototype.setResultLocally = function (data) {
    this.localResult.push(data);
  };
  Dropdown.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Dropdown.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['questionType'] = this.questionType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Dropdown.prototype.getSubmitData = function () {
    var submitData = {};
    var trialWiseResult = [];
    var userAttemptData = {};
    if (Object.keys(this.lastAttemptedResponse).length) {
      userAttemptData = {
        hintTaken: this.isHintsTaken,
        trialCount: this.trials,
        trials: this.trailWiseUserResponse
      };
    }
    submitData['contentID'] = this.contentID;
    submitData['result'] = (this.finalResult == true ? 'pass' : (this.isSkipped ? 'skip' : (!Object.keys(this.lastAttemptedResponse).length ? 'unAttempted' : 'fail')));
    submitData['isDynamic'] = this.isDynamic;
    submitData['timeTaken'] = this.totalTime;
    submitData['userResponse'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? (Object.keys(this.lastAttemptedResponse).length ? this.lastAttemptedResponse.userResponse : {}) : {};
    submitData['userAttemptData'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userAttemptData : {};
    if (this.isHintsTaken) submitData['hintsTimeTaken'] = this.timeTakenToViewHint;
    if (!this.dynamicParameters) submitData['dynamicParameters'] = this.dynamicParameters;
    submitData['contentInfo'] = this.getContentInfo();
    return submitData;
  };
  Dropdown.prototype.getUpdateData = function (explanationRating, feedbackResponse, userExplanation) {
    var updatedData = {};
    updatedData['contentID'] = this.contentID;
    var updatedUserAttempt = {
      explanationRead: true,
      explanationReadTime: this.secs,
      explanationRating: explanationRating,
      gaveExplanation: (userExplanation ? true : false),
      userExplanation: userExplanation,
      feedbackResponse: feedbackResponse
    };
    updatedData['userAttemptData'] = updatedUserAttempt;
    updatedData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer();
    return updatedData;
  };
  Dropdown.prototype.getCorrectAnswer = function () {
    return this.correctAnswers;
  };
  Dropdown.prototype.getCorrectAnswerForView = function () {
    return Object.values(this.correctAnswerForView).join(",");
  };
  Dropdown.prototype.getUserAnswer = function (userAttemptData) {
    var self = this;
    var selectedOption = [];
    var userData = {};
    userData['result'] = userAttemptData.result;
    userData['timeTaken'] = userAttemptData.timeTaken;
    var userResponse = userAttemptData.userResponse;
    Object.keys(userResponse).forEach(function (ukey) {
      selectedOption.push(self.choices[ukey].choices[self.globalMapper[ukey][parseInt(userResponse[ukey].userAnswer)]].value);
    });
    userData['userAnswer'] = Object.values(selectedOption).join(",");
    return userData;
  };
  Dropdown.prototype.getTranslatedDisplayObject = function () {
    var translatedResponse = {};
    if (this.translatedData) {
      this.translatedObject = new Dropdown(this.translatedData);
      translatedResponse = this.translatedObject.getDisplayObject();
    }
    return translatedResponse;
  };
  Dropdown.prototype.getTranslatedExplanation = function () {
    return this.translatedObject ? this.translatedObject.getExplanation() : null;
  };
  Dropdown.prototype.getTranslatedHints = function () {
    return this.translatedObject ? this.translatedObject.getHints() : null;
  };
  Dropdown.prototype.setUserResponseForAttempt = function (userAttemptedData) {
    var self = this;
    var returnData = [];
    var userResponse = userAttemptedData && typeof (userAttemptedData.userResponse) != 'undefined' ? userAttemptedData.userResponse : null;
    if (userResponse) {
      Object.keys(userResponse).forEach(function (key) {
        if (typeof (self.globalMapper[key]) != 'undefined') {
          var index = self.globalMapper[key].indexOf(parseInt(userResponse[key].userAnswer));
          if (index >= 0) {
            returnData.push({
              name: key,
              value: String(index)
            });
          }
        }
      });
    }
    return returnData;
  };
  return Dropdown;
}());
///////////////////////////Dropdown-end///////////////////////////////////////
///////////////////////////Blank_Dropdown-start///////////////////////////////////////
var Blank_Dropdown = /** @class */ (function () {
  function Blank_Dropdown(data) {
    this.contentData = data;
    this.displayObject = {
      question: data.questionBody
    };
    this.displayObjectForView = {
      question: data.questionBody
    };
    this.translatedData = typeof (data.translatedData) != 'undefined' && data.translatedData ? data.translatedData : null;
    this.translatedObject = null;
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObject['optionsOrientation'] = optionsOrientation;
    }
    if (data.tags) {
      var optionsOrientation = data.tags.indexOf("mathInput") != -1 ? 'mathInput' : false;
      if (optionsOrientation) this.displayObjectForView['optionsOrientation'] = optionsOrientation;
    }
    if (data.quesVoiceover) this.displayObject['questionVoiceover'] = data.quesVoiceover;
    if (data.quesVoiceover) this.displayObjectForView['questionVoiceover'] = data.quesVoiceover;
    if (typeof (data.showEditorTool) != 'undefined') this.displayObject['showEditorTool'] = (data.showEditorTool == 1);
    if (typeof (data.conditions) != 'undefined') this.displayObject['conditions'] = (data.conditions == 1);
    if (typeof (data.glossary) != 'undefined') this.displayObject['glossary'] = (data.glossary == 1);
    if (typeof (data.hints) != 'undefined') this.displayObject['hints'] = (data.hints.length != 0);
    if (data.isDynamic == true) this.dynamicParameters = data.dynamicParameters;
    this.isDynamic = data.isDynamic;
    ContentService.isEncrypted = typeof (data.encrypted) != 'undefined' ? data.encrypted : true;
    this.template = data.template;
    this.choices = data.response;
    this.userAttempts = 1;
    this.correctAnswers = {};
    this.commonError = {};
    this.explanation = typeof (data.explanation) != 'undefined' && data.explanation ? ContentService.encode(data.explanation, ContentService.getEncryptionKey()) : null;
    this.fracboxCheck = {};
    this.conditionalAlert = typeof (data.conditions) != 'undefined' && data.conditions.length ? data.conditions : [];
    this.hints = typeof (data.hints) != 'undefined' && data.hints.length ? data.hints : [];
    this.noOfCondition = 0;
    this.totalAttempts = 10;
    this.ano = 1;
    this.conCheck = 0;
    this.trials = parseInt((typeof (data.trials) != 'undefined' && data.trials) ? data.trials : 1);
    this.startTime = 0;
    this.timerRunning = false;
    this.timerID = null;
    this.secs = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = data.contentType;
    this.questionType = data.template;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.responseType = null;
    this.explVoiceover = typeof (data.explVoiceover) != 'undefined' && data.explVoiceover ? data.explVoiceover : null;
    this.timeInterval = 1;
    this.isHintsTaken = false;
    this.trailWiseUserResponse = [];
    this.lastAttemptedResponse = {};
    this.trialWiseUserInput = [];
    this.localResult = [];
    this.noOfBlanks = 0;
    this.finalResult = false;
    this.globalMapper = {};
    this.responseElements = {};
    if (this.trials == 1 && this.hints.length) this.displayObject['hint'] = this.hints;
    this.timeTakenToViewHint = 0;
    this.totalTime = 0;
    this.timeTakenToViewHintID;
    this.Answer = {};
    this.isSkipped = false;
    var tmpCorrectAns = null;
    var self = this;
    var choices = this.choices;
    Object.keys(choices).forEach(function (key) {
      if (choices[key].type == 'Dropdown') {
        self.correctAnswers[key] = choices[key].correctAnswer = ContentService.encode(choices[key].correctAnswer, ContentService.getEncryptionKey());
        self.Answer[key] = (typeof (choices[key]) != 'undefined' && typeof (choices[key].choices[self.correctAnswers[key]]) != 'undefined' && typeof (choices[key].choices[self.correctAnswers[key]].value) != 'undefined') ? choices[key].choices[self.correctAnswers[key]].value : '';
        var tmpChoices = [];
        var mapper = self.choices[key].mapper;
        self.globalMapper[key] = mapper;
        var localChoices = self.choices[key].choices;
        mapper.forEach(function (val, index) {
          tmpChoices.push({
            id: index,
            value: localChoices[val].value
          });
        });
        self.responseElements[key] = {
          "type": 'Dropdown',
          "choices": tmpChoices
        };
      }
      if (choices[key].type == 'Blank') {
        self.correctAnswers[key] = choices[key].correctAnswers = ContentService.encode(choices[key].correctAnswers, ContentService.getEncryptionKey());
        if (self.correctAnswers[key].length) {
          self.Answer[key] = choices[key].correctAnswers[0];
        }
        self.noOfBlanks++;
        self.responseElements[key] = {
          "type": 'Blank',
          "attributes": self.choices[key].attributes
        };
      }
    });
    this.displayObject['responseElements'] = self.responseElements;
    this.displayObjectForView['responseElements'] = self.responseElements;
  }
  Blank_Dropdown.prototype.getTemplate = function () {
    return this.template;
  };
  Blank_Dropdown.prototype.getContentType = function () {
    return this.contentType;
  };
  Blank_Dropdown.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Blank_Dropdown.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Blank_Dropdown.prototype.getExplanation = function () {
    return this.explanation;
  };
  Blank_Dropdown.prototype.getHints = function () {
    this.startHintTimer();
    this.hintsTaken();
    return this.hints;
  };
  Blank_Dropdown.prototype.totalHints = function () {
    return this.hints;
  };
  Blank_Dropdown.prototype.startContentTimer = function () {
    this.initializeTimer();
  };
  Blank_Dropdown.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Blank_Dropdown.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Blank_Dropdown.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Blank_Dropdown.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Blank_Dropdown.prototype.startHintTimer = function () {
    var self = this;
    this.timeTakenToViewHint = parseInt(this.timeTakenToViewHint + 1);
    this.timeTakenToViewHintID = window.setTimeout(function () {
      self.startHintTimer();
    }, 1000);
  };
  Blank_Dropdown.prototype.stopHintTimer = function () {
    clearTimeout(this.timeTakenToViewHintID);
  };
  Blank_Dropdown.prototype.hintsTaken = function () {
    this.isHintsTaken = true;
  };
  Blank_Dropdown.prototype.skipThis = function () {
    this.isSkipped = true;
    return this.getSubmitData();
  };
  //GET DISPLAY OBJECT, QUESTION AND OPTIONS
  Blank_Dropdown.prototype.evaluateAnswer = function (inputData) {
    var self = this;
    inputData = JSON.parse(inputData);
    var conditionCheck = 0;
    var condition = [];
    var action = [];
    var userAns = new Array();
    var typeWiseUserResponse = {};
    var typeWiseUserInput = {
      "Blank": [],
      "Dropdown": []
    };
    var evaluatedResult = {
      noMoreAttempts: false
    };
    var userInput = {};
    var itemResult = {};
    var result = {
      "Blank": true,
      "Dropdown": true
    };
    var itemSpecificDA = {};
    var blankResult = 0;
    var isNext = 2;
    var priority = 0;
    var userResponseData = {};
    var userAnswer = {};
    if (this.trials >= this.userAttempts) {
      evaluatedResult['userInput'] = {};
      var self = this;
      var choices = this.choices;
      var responseType = '';
      inputData.forEach(function (val, key) {
        var inputName = val.name;
        var inputValue = val.value;
        responseType = choices[inputName].type;
        // evaluatedResult['userInput'][inputName] = inputValue;
        if (choices[inputName].type == 'Blank') {
          evaluatedResult['userInput'][inputName] = inputValue;
          blankResult = self.checkIndividualBlank(self.correctAnswers[inputName], inputValue, false, (key + 1), inputName);
          itemResult[inputName] = {
            correct: blankResult == 1
          };
          if (blankResult != 1 && result[choices[inputName].type]) {
            result[choices[inputName].type] = false;
          }
          userAns.push(inputValue);
          userAnswer[inputName] = inputValue;
        } else if (choices[inputName].type == 'Dropdown') {
          var mappedKey = String(self.globalMapper[inputName][inputValue]);
          evaluatedResult['userInput'][inputName] = mappedKey;
          itemResult[inputName] = {
            correct: mappedKey == self.correctAnswers[inputName]
          };
          if (!itemResult[inputName].correct && result) {
            result[choices[inputName].type] = false;
          }
          // var displayAnswerForChoices = self.choices[inputName].choices[self.correctAnswers[inputName]].displayAnswer;
          var displayAnswerForChoices = (typeof (self.choices[inputName]) != 'undefined' && typeof (self.choices[inputName].choices[self.correctAnswers[inputName]]) != 'undefined' && typeof (self.choices[inputName].choices[self.correctAnswers[inputName]].displayAnswer) != 'undefined') ? self.choices[inputName].choices[self.correctAnswers[inputName]].displayAnswer : ''
          itemSpecificDA[name] = ContentService.encode(displayAnswerForChoices, ContentService.getEncryptionKey());
          userAnswer[inputName] = (mappedKey);
        }
        // var userAnswer = {};
        // userAnswer[inputName] = userAnswer;
        typeWiseUserInput[choices[inputName].type].push(userAnswer);
        userResponseData[inputName] = {
          type: responseType,
          userAnswer: responseType == 'Blank' ? (typeof (inputValue) != 'undefined' ? inputValue : '') : ((typeof ((mappedKey) != 'undefined') ? (mappedKey) : ''))
        };
      });
      if (!result.Blank && !result.Dropdown && this.userAttempts < this.trials && this.hints.length) evaluatedResult['hints'] = this.hints;
      if (!result.Blank && !result.Dropdown && this.userAttempts < this.trials) evaluatedResult['reviewMsg'] = true;
      if (!result.Blank && !result.Dropdown && this.userAttempts < this.trials && this.conditionalAlert.length) {
        this.noOfCondition = this.conditionalAlert.length;
        this.conditionalAlert.forEach(function (cv, ci) {
          condition[ci] = cv.condition;
          action[ci] = cv.action;
        });
        var userAnswer = userAns.join("|");
        if (this.noOfCondition > 0) {
          if (this.totalAttempts > 0) {
            for (var p = 1; p <= 3; p++) {
              var isNext = 0;
              conditionCheck = 0;
              for (var i = 0; i < this.noOfCondition; i++) {
                parser.inputValues(userAnswer, this.ano);
                var alertMessage = '';
                if (parser.parse(condition[i]) == 1) {
                  var action1 = action[i];
                  if (/Mark Right/i.test(action1)) {
                    priority = 1;
                  } else if (/Mark Wrong/i.test(action1)) {
                    priority = 2;
                  } else {
                    priority = 3;
                  }
                  if (priority == p) {
                    if (action1 == "Mark Right") {
                      this.finalResult = true;
                      isNext = 1;
                    } else if (action1 == "Mark Wrong") {
                      this.finalResult = false;
                      isNext = 1;
                    } else if (action1.search(/Mark Right$/) != -1) {
                      alertMessage = action1.substring(7, action1.length - 17);
                      this.finalResult = true;
                      isNext = 1;
                    } else if (action1.search(/Mark Wrong$/) != -1) {
                      alertMessage = action1.substring(7, action1.length - 17);
                      this.finalResult = false;
                      isNext = 1;
                    } else {
                      alertMessage = action1.substring(7, action1.length - 2);
                      isNext = 1;
                      break;
                    }
                  }
                } else {
                  conditionCheck++;
                  if (conditionCheck == this.noOfCondition) conCheck = 1;
                  if (conCheck == 1) {
                    isNext = 2;
                    break;
                  }
                }
              }
              if (isNext == 1) break;
            }
            this.ano++;
            if (alertMessage != '') evaluatedResult['alertMessage'] = alertMessage;
            this.totalAttempts = this.totalAttempts - 1;
          } else {
            isNext = 2;
          }
        }
      }
    }
    this.finalResult = (result.Blank && result.Dropdown);
    if (result.Blank && result.Dropdown || (this.trials - this.userAttempts == 0)) {
      evaluatedResult['correctAnswer'] = this.Answer;
      evaluatedResult['explanation'] = this.explanation;
      evaluatedResult['itemResult'] = itemResult;
      evaluatedResult['itemSpecificDA'] = itemSpecificDA;
    }
    evaluatedResult['result'] = this.finalResult;
    evaluatedResult.noMoreAttempts = (this.trials == this.userAttempts) || this.finalResult;
    evaluatedResult['userAttempts'] = this.userAttempts;
    evaluatedResult['noOfTrialRemaning'] = this.trials - this.userAttempts;
    evaluatedResult['timeTaken'] = this.secs;
    this.lastAttemptedResponse = {
      userResponse: userResponseData,
      timeTaken: this.secs,
      result: this.finalResult
    };
    this.totalTime += this.secs;
    this.trailWiseUserResponse.push(this.lastAttemptedResponse);
    this.userAttempts++;
    if (evaluatedResult.noMoreAttempts) {
      this.restartTimer();
      this.stopHintTimer();
    } else {
      this.restartTimer();
    }
    return evaluatedResult;
  };
  Blank_Dropdown.prototype.setResultLocally = function (data) {
    this.localResult.push(data);
  };
  Blank_Dropdown.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Blank_Dropdown.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['questionType'] = this.questionType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Blank_Dropdown.prototype.getSubmitData = function () {
    var submitData = {};
    var trialWiseResult = [];
    var userAttemptData = {};
    if (Object.keys(this.lastAttemptedResponse).length) {
      userAttemptData = {
        hintTaken: this.isHintsTaken,
        trialCount: this.trials,
        trials: Object.values(this.trailWiseUserResponse)
      };
    }
    submitData['contentID'] = this.contentID;
    submitData['result'] = (this.finalResult == true ? 'pass' : (this.isSkipped ? 'skip' : (!Object.keys(this.lastAttemptedResponse).length ? 'unAttempted' : 'fail')));
    submitData['isDynamic'] = this.isDynamic;
    submitData['userResponse'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? (Object.keys(this.lastAttemptedResponse).length ? this.lastAttemptedResponse.userResponse : {}) : {};
    submitData['userAttemptData'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userAttemptData : {};
    submitData['timeTaken'] = this.totalTime;
    if (!this.dynamicParameters) submitData['dynamicParameters'] = this.dynamicParameters;
    if (this.isHintsTaken) submitData['hintsTimeTaken'] = this.timeTakenToViewHint;
    submitData['contentInfo'] = this.getContentInfo();
    return submitData;
  };
  Blank_Dropdown.prototype.getUpdateData = function (explanationRating, feedbackResponse, userExplanation) {
    var updatedData = {};
    updatedData['contentID'] = this.contentID;
    var updatedUserAttempt = {
      explanationRead: true,
      explanationReadTime: this.secs,
      explanationRating: explanationRating,
      gaveExplanation: (userExplanation ? true : false),
      userExplanation: userExplanation,
      feedbackResponse: feedbackResponse
    };
    updatedData['userAttemptData'] = updatedUserAttempt;
    updatedData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer();
    return updatedData;
  };
  Blank_Dropdown.prototype.checkIndividualBlank = function (expectedAns, userResponse, fracboxCheck, blankNo, blankName) {
    blankNo = blankNo || 0;
    var result = 0;
    var arrExpectedAns = new Array();
    // arrExpectedAns = expectedAns.split("~"); //Split the different way to answer
    arrExpectedAns = expectedAns; //Split the different way to answer
    arrExpectedAns = unique(arrExpectedAns); //Remove the duplicates in the answer e.g. AB~ab would result into AB (since case insensitive comparison)
    //userResponse = userResponse.replace(/\\/g,"/");
    // flag to perform auto rounding or not (perform auto rounding only if correct answer is specified only in fraction, not in decimal)
    var checkAutoRounding = false;
    if (!(expectedAns.indexOf("/") != -1 && expectedAns.indexOf(".") != -1) && !isNaN(userResponse)) {
      checkAutoRounding = true;
    }
    //check if blank left unanswered
    if (trim(userResponse) == "") {
      var unanswered = 1;
      for (var j = 0; j < arrExpectedAns.length; j++)
        if (trim(arrExpectedAns[j]) == '') unanswered = 0;
    }
    if (unanswered) result = 2;
    else {
      var flagCommonError = 0;
      if (this.commonError == '') flagCommonError = 1;
      for (var j = 0; j < arrExpectedAns.length; j++) {
        if (userResponse == '') {
          if (trim(arrExpectedAns[j]) == '') {
            result = 1;
            break;
          }
        } else {
          var b1 = trim(userResponse);
          var ans_blank = trim(arrExpectedAns[j]);
          /*if(fracboxCheck===true)
          {*/
          //var indexOFSlash  =   ans_blank.toString().indexOf("/");
          var indexOFbracket = arrExpectedAns[j].toString().indexOf("}/{");
          //if(indexOFSlash>-1 && indexOFbracket==-1)
          if (indexOFbracket > -1) {
            //ans_blank =   "{"+ans_blank+"}";
            //ans_blank =   ans_blank.toString().replace(/\//gi, "}/{");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\}\/\{/gi, "/");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\}/gi, "");
            arrExpectedAns[j] = arrExpectedAns[j].toString().replace(/\{/gi, " ");
          }
          ans_blank = ans_blank.replace(/\s+/g, '');
          ans_blank = ans_blank.replace(/&nbsp;/g, '');
          /*}*/
          if (b1 == ans_blank) {
            result = 1;
            break;
          } else {
            //if(!(fracboxCheck===true))
            {
              try {
                try {
                  if (expComp.compEqs(arrExpectedAns[j], userResponse, 1, checkAutoRounding)) {
                    result = 1;
                    break;
                  }
                } catch (err) {
                  // do nothing, continue execution
                }
                var cAnswer = nParser.parse(arrExpectedAns[j]);
                var uAnswer = nParser.parse(userResponse);
                if (uAnswer == cAnswer) {
                  result = 1;
                  break;
                }
                // else if (checkAutoRounding && ((document.getElementById("b" + blankNo)) || document.getElementById("tmpMode").value == "NCERT")) {
                //     // auto rounding should happen when textbox exists (to avoid frac box auto rounding)
                //     if (checkRoundValue(userResponse, arrExpectedAns[j])) {
                //         result = 1;
                //         break;
                //     }
                // }
              } catch (err) {}
            }
            if (!(fracboxCheck === true)) {
              try {
                var cAnswer = nParser.parse(arrExpectedAns[j]);
              } catch (err) {
                var cAnswer = trim(arrExpectedAns[j]);
              }
              try {
                if (typeof this.commonError.userAlert == "undefined" || this.commonError.userAlert == "") {
                  this.commonError = new commonErrors(cAnswer, b1);
                  if (this.commonError.parse() == 1) {
                    result = 1;
                    break;
                  }
                }
              } catch (err) {}
            }
            if (blankNo == 1 && this.noOfBlanks > 1) {
              var ansToCompare = ans_blank.toString() + ans_blank.toString();
              if (ansToCompare == b1) {
                result = 1;
                break;
              } else result = 0;
            } else result = 0;
          }
        }
      }
    }
    return result;
  };
  Blank_Dropdown.prototype.getCorrectAnswer = function () {
    return this.Answer;
  };
  Blank_Dropdown.prototype.getCorrectAnswerForView = function () {
    return Object.values(this.Answer).join(",");
  };
  Blank_Dropdown.prototype.getUserAnswer = function (userAttemptData) {
    var self = this;
    var selectedOption = [];
    var userData = {};
    userData['result'] = userAttemptData.result;
    userData['timeTaken'] = userAttemptData.timeTaken;
    var userResponse = userAttemptData.userResponse;
    Object.keys(userResponse).forEach(function (ukey) {
      if (typeof (self.choices[ukey]) != 'undefined') {
        var responseType = self.choices[ukey].type;
        var inputValue = responseType == 'Blank' ? userResponse[ukey].userAnswer : self.choices[ukey].choices[self.globalMapper[ukey][parseInt(userResponse[ukey].userAnswer)]].value;
        selectedOption.push(inputValue);
      }
    });
    userData['userAnswer'] = Object.values(selectedOption).join(",");
    return userData;
  };
  Blank_Dropdown.prototype.getTranslatedDisplayObject = function () {
    var translatedResponse = {};
    if (this.translatedData) {
      this.translatedObject = new Blank_Dropdown(this.translatedData);
      translatedResponse = this.translatedObject.getDisplayObject();
    }
    return translatedResponse;
  };
  Blank_Dropdown.prototype.getTranslatedExplanation = function () {
    return this.translatedObject ? this.translatedObject.getExplanation() : null;
  };
  Blank_Dropdown.prototype.getTranslatedHints = function () {
    return this.translatedObject ? this.translatedObject.getHints() : null;
  };
  Blank_Dropdown.prototype.setUserResponseForAttempt = function (userAttemptedData) {
    var self = this;
    var returnData = [];
    var userResponse = userAttemptedData && typeof (userAttemptedData.userResponse) != 'undefined' ? userAttemptedData.userResponse : null;
    if (userResponse) {
      Object.keys(userResponse).forEach(function (key) {
        var isDropdown = userResponse[key].type == 'Dropdown';
        if (userResponse[key].type == 'Dropdown') {
          if (typeof (self.globalMapper[key]) != 'undefined') {
            var index = self.globalMapper[key].indexOf(parseInt(userResponse[key].userAnswer));
            if (index >= 0) {
              returnData.push({
                name: key,
                value: String(index)
              });
            }
          }
        } else {
          returnData.push({
            name: key,
            value: userResponse[key].userAnswer
          });
        }
      });
    }
    return returnData;
  };
  return Blank_Dropdown;
}());
///////////////////////////Blank_Dropdown-end///////////////////////////////////////
///////////////////////////Interactive-Start///////////////////////////////////////
var Interactive = /** @class */ (function () {
  function Interactive(data) {
    this.contentData = data;
    this.displayObject = {
      question: data.questionBody
    };
    this.displayObjectForView = {
      question: data.questionBody
    };
    this.translatedData = typeof (data.translatedData) != 'undefined' && data.translatedData ? data.translatedData : null;
    this.translatedObject = null;
    if (data.quesVoiceover) this.displayObject['questionVoiceover'] = data.quesVoiceover;
    if (data.quesVoiceover) this.displayObjectForView['questionVoiceover'] = data.quesVoiceover;
    if (data.tags && data.tags.indexOf("options-short") != -1) this.displayObject['optionsOrientation'] = 'right';
    if (typeof (data.showEditorTool) != 'undefined') this.displayObject['showEditorTool'] = (data.showEditorTool == 1);
    if (typeof (data.conditions) != 'undefined') this.displayObject['conditions'] = (data.conditions == 1);
    if (typeof (data.glossary) != 'undefined') this.displayObject['glossary'] = (data.glossary == 1);
    if (typeof (data.hints) != 'undefined') this.displayObject['hints'] = (data.hints.length != 0);
    this.isDynamic = data.isDynamic;
    if (data.isDynamic == true) this.dynamicParameters = data.dynamicParameters;
    ContentService.isEncrypted = typeof (data.encrypted) != 'undefined' ? data.encrypted : true;
    this.trials = parseInt((typeof (data.trials) != 'undefined' && data.trials) ? data.trials : 1);
    this.userAttempts = 1;
    this.explanation = typeof (data.explanation) != 'undefined' && data.explanation ? ContentService.encode(data.explanation, ContentService.getEncryptionKey()) : null;
    this.template = data.template;
    this.hints = typeof (data.hints) != 'undefined' && data.hints.length ? data.hints : [];
    this.evaluatedResult = {
      noMoreAttempts: false,
      userInput: null,
      result: null
    };
    this.eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[this.eventMethod];
    this.messageEvent = this.eventMethod == "attachEvent" ? "onmessage" : "message";
    this.saveCallback = null;
    this.count = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = data.contentType;
    this.questionType = data.template;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.explVoiceover = typeof (data.explVoiceover) != 'undefined' && data.explVoiceover ? data.explVoiceover : null;
    this.timeInterval = 1;
    this.isHintsTaken = false;
    this.secs = 0;
    this.timerRunning = false;
    this.timerID = null;
    this.noOfTrialRemaning = 0;
    this.trailWiseUserResponse = {};
    this.lastAttemptedResponse = {};
    this.localResult = [];
    this.isExplanationRead = false;
    this.resultFlag = false;
    this.timeTakenToViewHint = 0;
    this.timeTakenToViewHintID;
    this.resultText = ['incorrect', 'correct', 'unattempted'];
    this.isSkipped = false;
    this.totalTime = 0;
    var self = this;
    this.eventerCallback = function (e) {
      if (typeof (e.data) != 'string') return;
      var response1 = e.data;
      if (response1.indexOf("||") != -1) {
        var dispalAnswerParam = "";
        var interactiveResponse = response1.split("||");
        var interactiveResult = parseInt(interactiveResponse[0]);
        if (typeof (interactiveResponse[3]) !== 'undefined') {
          dispalAnswerParam = interactiveResponse[3];
        }
        if (interactiveResult > 2) {
          // $.post("errorLog.php", "params=" + $("#quesform").find("input").serialize() + "&type=3", function(data) {});
        }
        self.evaluatedResult.result = self.resultText[interactiveResult];
        self.resultFlag = self.evaluatedResult.result == 'correct';
        if (interactiveResult != 2) {
          self.evaluatedResult.noMoreAttempts = (self.trials == self.userAttempts) || self.resultFlag;
          self.evaluatedResult['timeTaken'] = self.secs;
        }
        if (!self.resultFlag && self.userAttempts < self.trials && self.hints.length && interactiveResult != 2) {
          self.evaluatedResult['hints'] = self.hints;
        } else {
          delete self.evaluatedResult['hints'];
        }
        if (!self.resultFlag && ((self.trials - self.userAttempts > 0)) && interactiveResult != 2) {
          self.evaluatedResult['reviewMsg'] = true;
        } else {
          delete self.evaluatedResult['reviewMsg'];
        }
        if ((self.resultFlag || (self.trials - self.userAttempts == 0)) && interactiveResult != 2) {
          self.evaluatedResult.explanation = self.explanation;
        }
        if (interactiveResult == 2) {
          self.evaluatedResult['noOfTrialRemaning'] = self.trials;
          self.evaluatedResult.userAttempts = 0;
        } else {
          self.evaluatedResult['noOfTrialRemaning'] = self.trials - self.userAttempts;
          self.evaluatedResult.userAttempts = self.userAttempts;
        }
        self.evaluatedResult.userInput = interactiveResponse[1];
        if (typeof (self.saveCallback) != "undefined" && typeof (self.saveCallback) === "function" && self.count == 0) {
          self.saveCallback(self.evaluatedResult);
        }
        if (interactiveResult != 2) {
          self.lastAttemptedResponse = {
            userResponse: {
              interactivePattern: {
                type: self.questionType,
                userAnswer: self.evaluatedResult.userInput
              }
            },
            timeTaken: self.secs,
            result: self.resultFlag
          };
          self.totalTime += self.secs;
          self.trailWiseUserResponse[self.evaluatedResult.userInput] = self.lastAttemptedResponse;
        }
        if (interactiveResult != 2) {
          self.userAttempts++;
        }
        if (self.evaluatedResult.noMoreAttempts) {
          self.restartTimer();
          self.stopHintTimer();
        } else {
          self.restartTimer();
        }
      } else if (response1.indexOf("triggerSubmit=") == 0) {
        if (typeof (self.saveCallback) != "undefined" && typeof (self.saveCallback) === "function") {
          self.saveCallback(self.evaluateAnswer(null));
        }
      }
      self.count++;
    };
    // Listen to message from child window
    try {
      if (!window.functions) window.functions = [];
      window.functions.forEach(function (i) {
        window.removeEventListener(self.messageEvent, i);
      });
      window.functions.push(self.eventerCallback);
      window.addEventListener(self.messageEvent, self.eventerCallback);
      eventer(this.messageEvent, this.eventerCallback, false);
    } catch (ex) {
      console.log(ex);
      alert('error in getting the response from interactive');
    }
  }
  Interactive.prototype.setResultCallback = function (callback) {
    this.saveCallback = callback;
  };
  Interactive.prototype.getTemplate = function () {
    return this.template;
  };
  Interactive.prototype.getContentType = function () {
    return this.contentType;
  };
  Interactive.prototype.checkIframeLoaded = function () {
    var self = this;
    if (document.getElementById("quesInteractive") && document.getElementById("quesInteractive").contentWindow) {
      self.initializeTimer();
      return;
    } else window.setTimeout(function () {
      self.checkIframeLoaded()
    }, 100);
    // if (document.getElementById("quesInteractive") && document.getElementById("quesInteractive").contentWindow) {
    //     var iframeDoc = document.getElementById("quesInteractive").contentWindow.document;
    //     if (iframeDoc) {
    //         if (iframeDoc.readyState == 'complete') {
    //             window.setTimeout(function() {
    //                 var ifTitle = document.getElementById("quesInteractive").contentDocument.title;
    //                 if (ifTitle.indexOf("404") >= 0) {
    //                     ContentService.callErrorLogApi({
    //                         'contentID': self.contentID,
    //                         'typeErrorLog': 'iframeNotLoading',
    //                         'src': document.getElementById("quesInteractive").getAttribute('src')
    //                     });
    //                 } else {
    //                     iframeDoc.onload = function() {
    //                         self.initializeTimer();
    //                     };
    //                 }
    //             }, 100);
    //             return;
    //         }
    //     }
    // } else window.setTimeout(function() {
    //     self.checkIframeLoaded()
    // }, 100);
  };
  Interactive.prototype.skipThis = function () {
    this.isSkipped = true;
    return this.getSubmitData();
  };
  //GET DISPLAY OBJECT, QUESTION AND OPTIONS
  Interactive.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Interactive.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Interactive.prototype.getExplanation = function () {
    return this.explanation;
  };
  Interactive.prototype.getHints = function () {
    this.startHintTimer();
    this.hintsTaken();
    return this.hints;
  };
  Interactive.prototype.totalHints = function () {
    return this.hints;
  };
  Interactive.prototype.startContentTimer = function () {
    this.checkIframeLoaded();
  };
  Interactive.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Interactive.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Interactive.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Interactive.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Interactive.prototype.startHintTimer = function () {
    var self = this;
    this.timeTakenToViewHint = parseInt(this.timeTakenToViewHint + 1);
    this.timeTakenToViewHintID = window.setTimeout(function () {
      self.startHintTimer();
    }, 1000);
  };
  Interactive.prototype.stopHintTimer = function () {
    clearTimeout(this.timeTakenToViewHintID);
  };
  Interactive.prototype.checkIframe = function () {
    var frame = null;
    if ((frame = document.getElementById("quesInteractive")) != null) {
      try {
        var win = frame.contentWindow;
        win.postMessage("checkAnswer", '*');
        //start();
      } catch (ex) {
        alert('error in getting the response from interactive');
      }
    }
  };
  //EVALUATE USER INPUT, AND RETURN POSSIBLE VALUE INCLUDING HINT, userAttempts ALERT ETC.
  Interactive.prototype.evaluateAnswer = function (inputData) {
    if (this.trials >= this.userAttempts) {
      this.count = 0;
      this.checkIframe();
    }
    this.setResultLocally(this.evaluatedResult);
    return this.evaluatedResult;
  };
  Interactive.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['questionType'] = this.questionType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  // localResult = null;
  Interactive.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  Interactive.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Interactive.prototype.hintsTaken = function () {
    this.isHintsTaken = true;
  };
  Interactive.prototype.getSubmitData = function () {
    var submitData = {};
    var trialWiseResult = [];
    var userAttemptData = {};
    if (Object.keys(this.lastAttemptedResponse).length) {
      var userAttemptData = {
        hintTaken: this.isHintsTaken,
        trialCount: this.trials,
        trials: (Object.keys(this.trailWiseUserResponse).length > 0) ? Object.values(this.trailWiseUserResponse) : []
      };
    }
    submitData['contentID'] = this.contentID;
    submitData['result'] = this.isSkipped ? 'skip' : ((this.evaluatedResult.result == 'correct' ? 'pass' : (this.evaluatedResult.result == 'unattempted' ? 'unAttempted' : 'fail')));
    submitData['isDynamic'] = this.isDynamic;
    submitData['timeTaken'] = this.totalTime;
    submitData['userResponse'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? (Object.keys(this.lastAttemptedResponse).length ? this.lastAttemptedResponse.userResponse : {}) : {};
    submitData['userAttemptData'] = !this.isSkipped || typeof (userAttemptData.trials) != 'undefined' && userAttemptData.trials.length ? userAttemptData : {};
    if (this.isHintsTaken) submitData['hintsTimeTaken'] = this.timeTakenToViewHint;
    if (!this.dynamicParameters) submitData['dynamicParameters'] = this.dynamicParameters;
    submitData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer();
    return submitData;
  };
  Interactive.prototype.explanationRead = function () {
    this.isExplanationRead = true;
  };
  Interactive.prototype.getUpdateData = function (explanationRating, feedbackResponse, userExplanation) {
    var updatedData = {};
    updatedData['contentID'] = this.contentID;
    var updatedUserAttempt = {
      explanationRead: true,
      explanationReadTime: this.secs,
      explanationRating: this.explanationRating,
      gaveExplanation: (this.userExplanation ? true : false),
      userExplanation: this.userExplanation,
      feedbackResponse: this.feedbackResponse
    };
    updatedData['userAttemptData'] = updatedUserAttempt;
    updatedData['contentInfo'] = this.getContentInfo();
    this.stopTheTimer();
    return updatedData;
  };
  Interactive.prototype.getCorrectAnswerForView = function () {
    return null;
  };
  Interactive.prototype.getUserAnswer = function (inputData) {
    return "";
  };
  Interactive.prototype.getTranslatedDisplayObject = function () {
    var translatedResponse = {};
    if (this.translatedData) {
      this.translatedObject = new Interactive(this.translatedData);
      translatedResponse = this.translatedObject.getDisplayObject();
    }
    return translatedResponse;
  };
  Interactive.prototype.getTranslatedExplanation = function () {
    return this.translatedObject ? this.translatedObject.getExplanation() : null;
  };
  Interactive.prototype.getTranslatedHints = function () {
    return this.translatedObject ? this.translatedObject.getHints() : null;
  };
  return Interactive;
}());
///////////////////////////Interactive-End///////////////////////////////////////
var Game = /** @class */ (function () {
  function Game(data) {
    this.contentData = data;
    this.displayObject = {
      question: null,
    };
    this.displayObjectForView = {
      name: data.name,
    };
    this.userAttempts = 1;
    this.eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[this.eventMethod];
    this.messageEvent = this.eventMethod == "attachEvent" ? "onmessage" : "message";
    this.file = data.file;
    this.currentLevel = 0;
    this.currentPos = 0;
    this.timeCounter = 0;
    this.timerID = null;
    this.skipped = 0;
    this.isSkipped = false;
    this.isFinished = false;
    this.timerRunning = false;
    this.secs = 0;
    this.lastSavedLevel = -1;
    this.gameFrame = null;
    this.iframe = null;
    this.saveDataCallback = null;
    this.completedCallback = null;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.activityType = data.activityType;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.levelWiseData = {};
    this.timeInterval = 15;
    this.template = data.template;
    this.contentType = data.contentType;
    this.localResult = [];
    this.frameWindowLoaded = false;
    this.counter = 0;
    this.totalTime = 0;
    this.timeTakenLevelWise = {};
    this.noOfLevels = parseInt(data.noOfLevels);
    this.activityFormat = this.noOfLevels == 0 ? 'old' : 'new';
    this.lastLevelCleared = data.lastLevelCleared;
    this.name = data.name;
    var self = this;
    this.getIframeElement();
    this.messageEventFn = function (e) {
      if (typeof (e.data) != 'string') return;
      var dataReceived = e.data;
      if (dataReceived.indexOf('#@') === -1) {
        var arrData = dataReceived.split("||");
      } else {
        var arrData = dataReceived.split("#@");
      }
      var extraParams = arrData[0];
      var completed = arrData[1];
      var levelsAttempted = arrData[2];
      var levelWiseStatus = arrData[3];
      var levelWiseScore = arrData[4];
      var levelWiseTimeTaken = arrData[5];
      var endSessionTimeout = arrData[6];
      var time, score;
      if (self.activityFormat == "old") {
        var time = arrData[0];
        var score = arrData[2];
        var extraParams = arrData[3];
        var endSessionTimeout = arrData[4];
        var levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken;
      } else {
        var extraParams = arrData[0];
        var levelsAttempted = arrData[2];
        var levelWiseStatus = arrData[3];
        var levelWiseScore = arrData[4];
        var levelWiseTimeTaken = arrData[5];
        var endSessionTimeout = arrData[6];
        var time, score;
      }
      if (self.activityFormat == "new") {
        var arrLevel = levelsAttempted ? levelsAttempted.split("|") : [];
        var arrStatus = levelWiseStatus ? levelWiseStatus.split("|") : [];
        var arrScore = levelWiseScore ? levelWiseScore.split("|") : [];
        var arrTime = levelWiseTimeTaken ? levelWiseTimeTaken.split("|") : [];
        var arrExtraParams = extraParams ? extraParams.split("|") : [];
      }
      self.timeCounter++;
      self.frameWindowLoaded = true;
      if (!(completed == 1 || completed == 3 || self.isSkipped)) {
        window.setTimeout(self.checkGameCompleteHTML5, 1000, self);
      }
      if (self.activityFormat == "new") {
        if (arrLevel.length) {
          for (var j = 0; j < arrLevel.length; j++) {
            if (arrStatus[j] == 0 || typeof (arrStatus[j]) == 'undefined') {
              self.currentPos = j;
              self.currentLevel = parseInt(arrLevel[j].replace("L", ""));
            }
          }
        }
        if (arrStatus[self.currentPos] && self.currentLevel > 0 && self.lastSavedLevel != self.currentLevel) {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
          self.lastSavedLevel = self.currentLevel;
        }
      }
      if (arrData[1] == 1 || self.isSkipped) {
        if (completed == '3') self.isSkipped = true;
        self.saveGameResult(score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, self.currentLevel, completed);
        return false;
      }
      if ((time > 0 && parseInt(time) % 60 == 0) || parseInt(self.timeCounter) % 15 == 0) {
        self.timeCounter = 0;
        if (self.activityFormat == "new") {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
        } else {
          self.saveGameResult(score, time, extraParams, '', '', '', '', '', completed);
        }
      }
    };
    try {
      if (!window.functions) window.functions = [];
      window.functions.forEach(function (i) {
        window.removeEventListener(self.messageEvent, i);
      });
      window.functions.push(self.messageEventFn);
      window.addEventListener(self.messageEvent, self.messageEventFn);
      eventer(this.messageEvent, this.messageEventFn, false);
    } catch (ex) {
      console.log(ex);
    }
  }
  Game.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Game.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Game.prototype.getTemplate = function () {
    return this.template;
  };
  Game.prototype.getContentType = function () {
    return this.contentType;
  };
  Game.prototype.getName = function () {
    return this.name;
  };
  Game.prototype.setSaveDataCallback = function (callback) {
    this.saveDataCallback = callback;
  };
  Game.prototype.setCompleteCallback = function (callback) {
    this.completedCallback = callback;
  };
  Game.prototype.getIframeElement = function () {
    var self = this;
    var iframe = document.createElement("iframe");
    iframe.id = 'iframe_' + self.contentID;
    iframe.src = this.file;
    iframe.style.width = "800px";
    iframe.style.height = "600px";
    iframe.frameBorder = "none";
    this.displayObject.question = iframe.outerHTML;
    return iframe;
  };
  Game.prototype.checkGameCompleteHTML5 = function (s) {
    var self = s;
    var iframeObject = document.getElementById('iframe_' + s.contentID);
    if (iframeObject) {
      var win = iframeObject.contentWindow;
      try {
        win.postMessage("checkGameComplete", '*');
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  Game.prototype.checkIframeLoaded = function () {
    var self = this;
    var iframeDoc = document.getElementById('iframe_' + self.contentID);
    if (!this.frameWindowLoaded) this.checkGameCompleteHTML5(self);
    // Check if loading is complete
    if (iframeDoc && this.frameWindowLoaded) {
      self.initializeTimer();
      return;
    } else window.setTimeout(function () {
      self.checkIframeLoaded();
    }, 100);
  };
  Game.prototype.startContentTimer = function () {
    var self = this;
    var iframe = document.getElementById('iframe_' + self.contentID);
    if (iframe) {
      this.checkIframeLoaded();
      return;
    } else window.setTimeout(function () {
      self.startContentTimer();
    }, 100);
  };
  Game.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Game.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Game.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Game.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Game.prototype.skipThis = function () {
    this.isSkipped = true;
  };
  Game.prototype.evaluateAnswer = function (inputData, skipped) {
    this.isSkipped = true;
  };
  Game.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  Game.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Game.prototype.saveGameResult = function (score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, currentLevel, completed, hasQuitIntroduction) {
    if (this.lastLevelCleared && currentLevel < this.lastLevelCleared && !this.isSkipped) {
      return;
    }
    score = this.activityFormat == 'old' ? (/^\d*$/.test(score) ? parseInt(score) : 0) : 0;
    time = time ? parseInt(time) : this.totalTime;
    if (this.activityFormat == 'old') {
      levelWiseScore = score;
      levelWiseTimeTaken = time;
      levelsAttempted = 'L1';
    }
    var finalData = {};
    var isComplete = completed == '1';
    var userAttemptData = {};
    if (levelsAttempted) {
      var data = {
        level: levelsAttempted,
        timeTaken: levelWiseTimeTaken ? parseInt(levelWiseTimeTaken) : 0,
        status: (levelWiseStatus == '1' ? 'complete' : (levelWiseStatus == '2' ? 'inProgress' : 'inComplete')),
        score: levelWiseScore ? parseInt(levelWiseScore) : 0,
      };
      if (levelsAttempted && !(levelsAttempted.indexOf('|') !== -1)) {
        this.levelWiseData[levelsAttempted] = data;
        this.timeTakenLevelWise[levelsAttempted] = typeof (data.timeTaken) != 'undefined' ? data.timeTaken : 0;
      }
      this.totalTime = ContentService.arraySum(Object.values(this.timeTakenLevelWise));
      if (isComplete || this.isSkipped) {
        userAttemptData['levelWiseData'] = Object.values((levelsAttempted != '') ? this.levelWiseData : []);
      } else {
        userAttemptData['levelWiseData'] = data;
      }
    }
    userAttemptData['completed'] = isComplete;
    userAttemptData['skipped'] = this.isSkipped;
    userAttemptData['timeTaken'] = time; // Overall timetaken
    userAttemptData['score'] = score;
    userAttemptData['currentLevel'] = currentLevel;
    userAttemptData['extraParameters'] = extraParams;
    finalData['contentID'] = this.contentID;
    finalData['result'] = this.isSkipped ? 'skip' : 'pass';
    finalData['timeTaken'] = this.totalTime;
    finalData['userAttemptData'] = userAttemptData;
    finalData['contentInfo'] = this.getContentInfo();
    if (completed == 1 || completed == 3 || this.isSkipped) {
      this.finishActivity(finalData);
    } else {
      this.saveDataCallback(finalData);
    }
    this.setResultLocally(finalData);
  };
  Game.prototype.finishActivity = function (finalData) {
    if (!this.isFinished) {
      this.isFinished = true;
      this.completedCallback(finalData);
      this.stopTheTimer();
    }
  };
  Game.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['activityType'] = this.activityType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Game.prototype.getSubmitData = function () {
    return this.getLocalResult();
  };
  Game.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['userAnswer'] = null;
    return userData;
  };
  return Game;
}());
var Introduction = /** @class */ (function () {
  function Introduction(data) {
    this.contentData = data;
    this.displayObject = {
      question: null,
    };
    this.displayObject = {
      name: data.name,
    };
    this.userAttempts = 1;
    this.eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[this.eventMethod];
    this.messageEvent = this.eventMethod == "attachEvent" ? "onmessage" : "message";
    this.file = data.file;
    this.currentLevel = 0;
    this.currentPos = 0;
    this.timeCounter = 0;
    this.timerID = null;
    this.skipped = 0;
    this.isSkipped = false;
    this.isFinished = false;
    this.timerRunning = false;
    this.secs = 0;
    this.lastSavedLevel = -1;
    this.gameFrame = null;
    this.iframe = null;
    this.saveDataCallback = null;
    this.completedCallback = null;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.activityType = data.activityType;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.levelWiseData = {};
    this.timeInterval = 15;
    this.template = data.template;
    this.contentType = data.contentType;
    this.localResult = [];
    this.frameWindowLoaded = false;
    this.counter = 0;
    this.totalTime = 0;
    this.timeTakenLevelWise = {};
    this.noOfLevels = parseInt(data.noOfLevels);
    this.activityFormat = this.noOfLevels == 0 ? 'old' : 'new';
    this.lastLevelCleared = data.lastLevelCleared;
    this.name = data.name;
    var self = this;
    this.getIframeElement();
    this.messageEventFn = function (e) {
      if (typeof (e.data) != 'string') return;
      var dataReceived = e.data;
      if (dataReceived.indexOf('#@') === -1) {
        var arrData = dataReceived.split("||");
      } else {
        var arrData = dataReceived.split("#@");
      }
      var extraParams = arrData[0];
      var completed = arrData[1];
      var levelsAttempted = arrData[2];
      var levelWiseStatus = arrData[3];
      var levelWiseScore = arrData[4];
      var levelWiseTimeTaken = arrData[5];
      var endSessionTimeout = arrData[6];
      var time, score;
      if (self.activityFormat == "old") {
        var time = arrData[0];
        var score = arrData[2];
        var extraParams = arrData[3];
        var endSessionTimeout = arrData[4];
        var levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken;
      } else {
        var extraParams = arrData[0];
        var levelsAttempted = arrData[2];
        var levelWiseStatus = arrData[3];
        var levelWiseScore = arrData[4];
        var levelWiseTimeTaken = arrData[5];
        var endSessionTimeout = arrData[6];
        var time, score;
      }
      if (self.activityFormat == "new") {
        var arrLevel = levelsAttempted ? levelsAttempted.split("|") : [];
        var arrStatus = levelWiseStatus ? levelWiseStatus.split("|") : [];
        var arrScore = levelWiseScore ? levelWiseScore.split("|") : [];
        var arrTime = levelWiseTimeTaken ? levelWiseTimeTaken.split("|") : [];
        var arrExtraParams = extraParams ? extraParams.split("|") : [];
      }
      self.timeCounter++;
      self.frameWindowLoaded = true;
      if (!(completed == 1 || completed == 3 || self.isSkipped)) {
        window.setTimeout(self.checkGameCompleteHTML5, 1000, self);
      }
      if (self.activityFormat == "new") {
        if (arrLevel.length) {
          for (var j = 0; j < arrLevel.length; j++) {
            if (arrStatus[j] == 0 || typeof (arrStatus[j]) == 'undefined') {
              self.currentPos = j;
              self.currentLevel = parseInt(arrLevel[j].replace("L", ""));
            }
          }
        }
        if (arrStatus[self.currentPos] && self.currentLevel > 0 && self.lastSavedLevel != self.currentLevel) {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
          self.lastSavedLevel = self.currentLevel;
        }
      }
      if (arrData[1] == 1 || self.isSkipped) {
        if (completed == '3') self.isSkipped = true;
        self.saveGameResult(score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, self.currentLevel, completed);
        return false;
      }
      if ((time > 0 && parseInt(time) % 60 == 0) || parseInt(self.timeCounter) % 15 == 0) {
        self.timeCounter = 0;
        if (self.activityFormat == "new") {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
        } else {
          self.saveGameResult(score, time, extraParams, '', '', '', '', '', completed);
        }
      }
    };
    try {
      if (!window.functions) window.functions = [];
      window.functions.forEach(function (i) {
        window.removeEventListener(self.messageEvent, i);
      });
      window.functions.push(self.messageEventFn);
      window.addEventListener(self.messageEvent, self.messageEventFn);
      eventer(this.messageEvent, this.messageEventFn, false);
    } catch (ex) {
      console.log(ex);
    }
  }
  Introduction.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Introduction.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Introduction.prototype.getTemplate = function () {
    return this.template;
  };
  Introduction.prototype.getContentType = function () {
    return this.contentType;
  };
  Introduction.prototype.getName = function () {
    return this.name;
  };
  Introduction.prototype.setSaveDataCallback = function (callback) {
    this.saveDataCallback = callback;
  };
  Introduction.prototype.setCompleteCallback = function (callback) {
    this.completedCallback = callback;
  };
  Introduction.prototype.getIframeElement = function () {
    var self = this;
    var iframe = document.createElement("iframe");
    iframe.id = 'iframe_' + self.contentID;
    iframe.src = this.file;
    iframe.style.width = "800px";
    iframe.style.height = "600px";
    iframe.frameBorder = "none";
    this.displayObject.question = iframe.outerHTML;
    return iframe;
  };
  Introduction.prototype.checkGameCompleteHTML5 = function (s) {
    var self = s;
    var iframeObject = document.getElementById('iframe_' + s.contentID);
    if (iframeObject) {
      var win = iframeObject.contentWindow;
      try {
        win.postMessage("checkGameComplete", '*');
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  Introduction.prototype.checkIframeLoaded = function () {
    var self = this;
    var iframeDoc = document.getElementById('iframe_' + self.contentID);
    if (!this.frameWindowLoaded) this.checkGameCompleteHTML5(self);
    // Check if loading is complete
    if (iframeDoc && this.frameWindowLoaded) {
      self.initializeTimer();
      return;
    } else window.setTimeout(function () {
      self.checkIframeLoaded();
    }, 100);
  };
  Introduction.prototype.startContentTimer = function () {
    var self = this;
    var iframe = document.getElementById('iframe_' + self.contentID);
    if (iframe) {
      this.checkIframeLoaded();
      return;
    } else window.setTimeout(function () {
      self.startContentTimer();
    }, 100);
  };
  Introduction.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Introduction.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Introduction.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Introduction.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Introduction.prototype.skipThis = function () {
    this.isSkipped = true;
  };
  Introduction.prototype.evaluateAnswer = function (inputData, skipped) {
    this.isSkipped = true;
  };
  Introduction.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  Introduction.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Introduction.prototype.saveGameResult = function (score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, currentLevel, completed, hasQuitIntroduction) {
    if (this.lastLevelCleared && currentLevel < this.lastLevelCleared && !this.isSkipped) {
      return;
    }
    score = this.activityFormat == 'old' ? (/^\d*$/.test(score) ? parseInt(score) : 0) : 0;
    time = time ? parseInt(time) : this.totalTime;
    if (this.activityFormat == 'old') {
      levelWiseScore = score;
      levelWiseTimeTaken = time;
      levelsAttempted = 'L1';
    }
    var finalData = {};
    var isComplete = completed == '1';
    var userAttemptData = {};
    if (levelsAttempted) {
      var data = {
        level: levelsAttempted,
        timeTaken: levelWiseTimeTaken ? parseInt(levelWiseTimeTaken) : 0,
        status: (levelWiseStatus == '1' ? 'complete' : (levelWiseStatus == '2' ? 'inProgress' : 'inComplete')),
        score: levelWiseScore ? parseInt(levelWiseScore) : 0,
      };
      if (levelsAttempted && !(levelsAttempted.indexOf('|') !== -1)) {
        this.levelWiseData[levelsAttempted] = data;
        this.timeTakenLevelWise[levelsAttempted] = typeof (data.timeTaken) != 'undefined' ? data.timeTaken : 0;
      }
      this.totalTime = ContentService.arraySum(Object.values(this.timeTakenLevelWise));
      if (isComplete || this.isSkipped) {
        userAttemptData['levelWiseData'] = Object.values((levelsAttempted != '') ? this.levelWiseData : []);
      } else {
        userAttemptData['levelWiseData'] = data;
      }
    }
    userAttemptData['completed'] = isComplete;
    userAttemptData['skipped'] = this.isSkipped;
    userAttemptData['timeTaken'] = time; // Overall timetaken
    userAttemptData['score'] = score;
    userAttemptData['currentLevel'] = currentLevel;
    userAttemptData['extraParameters'] = extraParams;
    finalData['contentID'] = this.contentID;
    finalData['result'] = this.isSkipped ? 'skip' : 'pass';
    finalData['timeTaken'] = this.totalTime;
    finalData['userAttemptData'] = userAttemptData;
    finalData['contentInfo'] = this.getContentInfo();
    if (completed == 1 || completed == 3 || this.isSkipped) {
      this.finishActivity(finalData);
    } else {
      this.saveDataCallback(finalData);
    }
    this.setResultLocally(finalData);
  };
  Introduction.prototype.finishActivity = function (finalData) {
    if (!this.isFinished) {
      this.isFinished = true;
      this.completedCallback(finalData);
      this.stopTheTimer();
    }
  };
  Introduction.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.content
    ID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['activityType'] = this.activityType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Introduction.prototype.getSubmitData = function () {
    return this.getLocalResult();
  };
  Introduction.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['userAnswer'] = null;
    return userData;
  };
  return Introduction;
}());
var Enrichment = /** @class */ (function () {
  function Enrichment(data) {
    this.contentData = data;
    this.displayObject = {
      question: null,
    };
    this.displayObjectForView = {
      name: data.name,
    };
    this.userAttempts = 1;
    this.eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[this.eventMethod];
    this.messageEvent = this.eventMethod == "attachEvent" ? "onmessage" : "message";
    this.file = data.file;
    this.currentLevel = 0;
    this.currentPos = 0;
    this.timeCounter = 0;
    this.timerID = null;
    this.skipped = 0;
    this.isSkipped = false;
    this.isFinished = false;
    this.timerRunning = false;
    this.secs = 0;
    this.lastSavedLevel = -1;
    this.gameFrame = null;
    this.iframe = null;
    this.saveDataCallback = null;
    this.completedCallback = null;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.activityType = data.activityType;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.levelWiseData = {};
    this.timeInterval = 15;
    this.template = data.template;
    this.contentType = data.contentType;
    this.localResult = [];
    this.frameWindowLoaded = false;
    this.counter = 0;
    this.totalTime = 0;
    this.timeTakenLevelWise = {};
    this.noOfLevels = parseInt(data.noOfLevels);
    this.activityFormat = this.noOfLevels == 0 ? 'old' : 'new';
    this.lastLevelCleared = data.lastLevelCleared;
    this.name = data.name;
    var self = this;
    this.getIframeElement();
    this.messageEventFn = function (e) {
      if (typeof (e.data) != 'string') return;
      var dataReceived = e.data;
      if (dataReceived.indexOf('#@') === -1) {
        var arrData = dataReceived.split("||");
      } else {
        var arrData = dataReceived.split("#@");
      }
      var extraParams = arrData[0];
      var completed = arrData[1];
      var levelsAttempted = arrData[2];
      var levelWiseStatus = arrData[3];
      var levelWiseScore = arrData[4];
      var levelWiseTimeTaken = arrData[5];
      var endSessionTimeout = arrData[6];
      var time, score;
      if (self.activityFormat == "old") {
        var time = arrData[0];
        var score = arrData[2];
        var extraParams = arrData[3];
        var endSessionTimeout = arrData[4];
        var levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken;
      } else {
        var extraParams = arrData[0];
        var levelsAttempted = arrData[2];
        var levelWiseStatus = arrData[3];
        var levelWiseScore = arrData[4];
        var levelWiseTimeTaken = arrData[5];
        var endSessionTimeout = arrData[6];
        var time, score;
      }
      if (self.activityFormat == "new") {
        var arrLevel = levelsAttempted ? levelsAttempted.split("|") : [];
        var arrStatus = levelWiseStatus ? levelWiseStatus.split("|") : [];
        var arrScore = levelWiseScore ? levelWiseScore.split("|") : [];
        var arrTime = levelWiseTimeTaken ? levelWiseTimeTaken.split("|") : [];
        var arrExtraParams = extraParams ? extraParams.split("|") : [];
      }
      self.timeCounter++;
      self.frameWindowLoaded = true;
      if (!(completed == 1 || completed == 3 || self.isSkipped)) {
        window.setTimeout(self.checkGameCompleteHTML5, 1000, self);
      }
      if (self.activityFormat == "new") {
        if (arrLevel.length) {
          for (var j = 0; j < arrLevel.length; j++) {
            if (arrStatus[j] == 0 || typeof (arrStatus[j]) == 'undefined') {
              self.currentPos = j;
              self.currentLevel = parseInt(arrLevel[j].replace("L", ""));
            }
          }
        }
        if (arrStatus[self.currentPos] && self.currentLevel > 0 && self.lastSavedLevel != self.currentLevel) {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
          self.lastSavedLevel = self.currentLevel;
        }
      }
      if (arrData[1] == 1 || self.isSkipped) {
        if (completed == '3') self.isSkipped = true;
        self.saveGameResult(score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, self.currentLevel, completed);
        return false;
      }
      if ((time > 0 && parseInt(time) % 60 == 0) || parseInt(self.timeCounter) % 15 == 0) {
        self.timeCounter = 0;
        if (self.activityFormat == "new") {
          self.saveGameResult(score, time, arrExtraParams[self.currentPos], arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, completed);
        } else {
          self.saveGameResult(score, time, extraParams, '', '', '', '', '', completed);
        }
      }
    };
    try {
      if (!window.functions) window.functions = [];
      window.functions.forEach(function (i) {
        window.removeEventListener(self.messageEvent, i);
      });
      window.functions.push(self.messageEventFn);
      window.addEventListener(self.messageEvent, self.messageEventFn);
      eventer(this.messageEvent, this.messageEventFn, false);
    } catch (ex) {
      console.log(ex);
    }
  }
  Enrichment.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Enrichment.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Enrichment.prototype.getTemplate = function () {
    return this.template;
  };
  Enrichment.prototype.getContentType = function () {
    return this.contentType;
  };
  Enrichment.prototype.getName = function () {
    return this.name;
  };
  Enrichment.prototype.setSaveDataCallback = function (callback) {
    this.saveDataCallback = callback;
  };
  Enrichment.prototype.setCompleteCallback = function (callback) {
    this.completedCallback = callback;
  };
  Enrichment.prototype.getIframeElement = function () {
    var self = this;
    var iframe = document.createElement("iframe");
    iframe.id = 'iframe_' + self.contentID;
    iframe.src = this.file;
    //iframe.onload=self.checkGameCompleteHTML5;
    iframe.style.width = "800px";
    iframe.style.height = "600px";
    iframe.frameBorder = "none";
    this.displayObject.question = iframe.outerHTML;
    return iframe;
  };
  Enrichment.prototype.checkGameCompleteHTML5 = function (s) {
    var self = s;
    var iframeObject = document.getElementById('iframe_' + s.contentID);
    if (iframeObject) {
      var win = iframeObject.contentWindow;
      try {
        win.postMessage("checkGameComplete", '*');
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  Enrichment.prototype.checkIframeLoaded = function () {
    var self = this;
    var iframeDoc = document.getElementById('iframe_' + self.contentID);
    if (!this.frameWindowLoaded) this.checkGameCompleteHTML5(self);
    // Check if loading is complete
    if (iframeDoc && this.frameWindowLoaded) {
      self.initializeTimer();
      return;
    } else window.setTimeout(function () {
      self.checkIframeLoaded();
    }, 100);
  };
  Enrichment.prototype.startContentTimer = function () {
    var self = this;
    var iframe = document.getElementById('iframe_' + self.contentID);
    if (iframe) {
      this.checkIframeLoaded();
      return;
    } else window.setTimeout(function () {
      self.startContentTimer();
    }, 100);
  };
  Enrichment.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Enrichment.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Enrichment.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Enrichment.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Enrichment.prototype.skipThis = function () {
    this.isSkipped = true;
  };
  Enrichment.prototype.evaluateAnswer = function (inputData, skipped) {
    this.isSkipped = true;
  };
  Enrichment.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  Enrichment.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Enrichment.prototype.saveGameResult = function (score, time, extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, currentLevel, completed, hasQuitIntroduction) {
    if (this.lastLevelCleared && currentLevel < this.lastLevelCleared && !this.isSkipped) {
      return;
    }
    score = this.activityFormat == 'old' ? (/^\d*$/.test(score) ? parseInt(score) : 0) : 0;
    time = time ? parseInt(time) : this.totalTime;
    if (this.activityFormat == 'old') {
      levelWiseScore = score;
      levelWiseTimeTaken = time;
      levelsAttempted = 'L1';
    }
    var finalData = {};
    var isComplete = completed == '1';
    var userAttemptData = {};
    if (levelsAttempted) {
      var data = {
        level: levelsAttempted,
        timeTaken: levelWiseTimeTaken ? parseInt(levelWiseTimeTaken) : 0,
        status: (levelWiseStatus == '1' ? 'complete' : (levelWiseStatus == '2' ? 'inProgress' : 'inComplete')),
        score: levelWiseScore ? parseInt(levelWiseScore) : 0,
      };
      if (levelsAttempted && !(levelsAttempted.indexOf('|') !== -1)) {
        this.levelWiseData[levelsAttempted] = data;
        this.timeTakenLevelWise[levelsAttempted] = typeof (data.timeTaken) != 'undefined' ? data.timeTaken : 0;
      }
      this.totalTime = ContentService.arraySum(Object.values(this.timeTakenLevelWise));
      if (isComplete || this.isSkipped) {
        userAttemptData['levelWiseData'] = Object.values((levelsAttempted != '') ? this.levelWiseData : []);
      } else {
        userAttemptData['levelWiseData'] = data;
      }
    }
    userAttemptData['completed'] = isComplete;
    userAttemptData['skipped'] = this.isSkipped;
    userAttemptData['timeTaken'] = time; // Overall timetaken
    userAttemptData['score'] = score;
    userAttemptData['currentLevel'] = currentLevel;
    userAttemptData['extraParameters'] = extraParams;
    finalData['contentID'] = this.contentID;
    finalData['result'] = this.isSkipped ? 'skip' : 'pass';
    finalData['timeTaken'] = this.totalTime;
    finalData['userAttemptData'] = userAttemptData;
    finalData['contentInfo'] = this.getContentInfo();
    if (completed == 1 || completed == 3 || this.isSkipped) {
      this.finishActivity(finalData);
    } else {
      this.saveDataCallback(finalData);
    }
    this.setResultLocally(finalData);
  };
  Enrichment.prototype.finishActivity = function (finalData) {
    if (!this.isFinished) {
      this.isFinished = true;
      this.completedCallback(finalData);
      this.stopTheTimer();
    }
  };
  Enrichment.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['activityType'] = this.activityType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Enrichment.prototype.getSubmitData = function () {
    return this.getLocalResult();
  };
  Enrichment.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['userAnswer'] = null;
    return userData;
  };
  return Enrichment;
}());
var Remedial = /** @class */ (function () {
  function Remedial(data) {
    this.contentData = data;
    this.displayObject = {
      question: null,
    };
    this.displayObjectForView = {
      name: data.name,
    };
    this.userAttempts = 1;
    this.eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[this.eventMethod];
    this.messageEvent = this.eventMethod == "attachEvent" ? "onmessage" : "message";
    this.file = data.file;
    this.currentLevel = 1;
    this.currentPos = 0;
    this.timeCounter = 0;
    this.timerID = null;
    this.skipped = 0;
    this.timerRunning = false;
    this.secs = 0;
    this.lastSavedLevel = -1;
    this.gameFrame = null;
    this.iframe = null;
    this.saveDataCallback = null;
    this.completedCallback = null;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.activityType = data.activityType;
    this.revisionNum = data.revisionNo;
    // this.version = data.version;
    this.langCode = data.langCode;
    this.levelWiseData = {};
    this.noOfLevels = 0;
    this.timeInterval = 15;
    this.template = data.template;
    this.contentType = data.contentType;
    this.localResult = [];
    this.frameWindowLoaded = false;
    this.counter = 0;
    this.scriptTimer = 0;
    this.totalTime = 0;
    this.isFinished = false;
    this.timeTakenLevelWise = {};
    this.lastLevelCleared = data.lastLevelCleared;
    this.name = data.name;
    this.noOfLevelsData = parseInt(data.noOfLevels);
    this.activityFormat = this.noOfLevelsData == 0 ? 'old' : 'new';
    var self = this;
    this.getIframeElement();
    this.messageEventFn = function (e) {
      if (typeof (e.data) != 'string') return;
      var dataReceived = e.data;
      var arrData = (dataReceived.indexOf('#@') === -1) ? dataReceived.split("||") : dataReceived.split("#@");
      if (self.activityFormat == "old") {
        var flag = arrData[1];
        var noOfPrompts = (typeof (arrData[3]) != 'undefined' ? arrData[3] : "");
        var time = (typeof (arrData[3]) != 'undefined' ? arrData[0] : "");
        var learningGoalStatus = (typeof (arrData[2]) != 'undefined' ? arrData[2] : "");
        var endSessionTimeout = (typeof (arrData[4]) != 'undefined' ? arrData[4] : "");
        var extraParams, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken;
      } else {
        var flag = arrData[1];
        var extraParams = arrData[0];
        var levelsAttempted = (typeof (arrData[2]) != 'undefined' ? arrData[2] : "");
        var levelWiseStatus = (typeof (arrData[3]) != 'undefined' ? arrData[3] : "");
        var levelWiseScore = (typeof (arrData[4]) != 'undefined' ? arrData[4] : "");
        var levelWiseTimeTaken = (typeof (arrData[5]) != 'undefined' ? arrData[5] : "");
        var endSessionTimeout = (typeof (arrData[6]) != 'undefined' ? arrData[6] : "");
        //for old remedial  
        var noOfPrompts, time, learningGoalStatus;
      }
      var isComplete = (flag == '1' || flag == '2');
      self.scriptTimer++;
      if (self.activityFormat == "new") {
        var arrLevel = levelsAttempted.split("|");
        var arrStatus = levelWiseStatus.split("|");
        var arrScore = levelWiseScore.split("|");
        var arrTime = levelWiseTimeTaken.split("|");
        var arrExtraParams = extraParams.split("|");
        if (arrLevel.length) {
          for (var j = 0; j < arrLevel.length; j++) {
            if (arrStatus[j] == 0 || typeof (arrStatus[j]) == 'undefined') {
              self.currentPos = j;
              self.currentLevel = parseInt(arrLevel[j].replace("L", ""));
            }
          }
        }
        if (arrStatus[self.currentPos] && self.currentLevel > 0 && self.lastSavedLevel != self.currentLevel) {
          if (self.currentPos - 1 >= 0) {
            self.recieveTextFromFlash(time, flag, learningGoalStatus, noOfPrompts, arrLevel[self.currentPos - 1], arrStatus[self.currentPos - 1], arrScore[self.currentPos - 1], arrTime[self.currentPos - 1], self.currentLevel, arrExtraParams[self.currentPos - 1]);
          }
          self.recieveTextFromFlash(time, flag, learningGoalStatus, noOfPrompts, arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, arrExtraParams[self.currentPos]);
          self.lastSavedLevel = self.currentLevel;
        }
        if (((time > 0 && parseInt(time) % 60 == 0) || parseInt(self.scriptTimer) % 15 == 0) || isComplete) {
          self.scriptTimer = 0;
          self.recieveTextFromFlash(time, flag, learningGoalStatus, noOfPrompts, arrLevel[self.currentPos], arrStatus[self.currentPos], arrScore[self.currentPos], arrTime[self.currentPos], self.currentLevel, arrExtraParams[self.currentPos]);
        }
      } else {
        if (((time > 0 && parseInt(time) % 60 == 0) || parseInt(self.scriptTimer) % 15 == 0) || isComplete) {
          self.scriptTimer = 0;
          self.recieveTextFromFlash(time, flag, learningGoalStatus, noOfPrompts, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, extraParams);
        }
      }
      self.frameWindowLoaded = true;
      if (!isComplete) window.setTimeout(self.checkRemedialCompleteHTML5, 1000, self);
    };
    try {
      if (!window.functions) window.functions = [];
      window.functions.forEach(function (i) {
        window.removeEventListener(self.messageEvent, i);
      });
      window.functions.push(self.messageEventFn);
      window.addEventListener(self.messageEvent, self.messageEventFn);
      eventer(this.messageEvent, this.messageEventFn, false);
    } catch (ex) {
      console.log(ex);
    }
  }
  Remedial.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  Remedial.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Remedial.prototype.getTemplate = function () {
    return this.template;
  };
  Remedial.prototype.getContentType = function () {
    return this.contentType;
  };
  Remedial.prototype.getName = function () {
    return this.name;
  };
  Remedial.prototype.setSaveDataCallback = function (callback) {
    this.saveDataCallback = callback;
  };
  Remedial.prototype.setCompleteCallback = function (callback) {
    this.completedCallback = callback;
  };
  Remedial.prototype.getIframeElement = function () {
    var self = this;
    var iframe = document.createElement("iframe");
    iframe.id = 'iframe_' + self.contentID;
    iframe.src = this.file;
    iframe.style.width = "800px";
    iframe.style.height = "600px";
    iframe.frameBorder = "none";
    this.displayObject.question = iframe.outerHTML;
    return iframe;
  };
  Remedial.prototype.checkRemedialCompleteHTML5 = function (s) {
    var self = s;
    var iframeObject = document.getElementById('iframe_' + s.contentID);
    if (iframeObject) {
      var win = iframeObject.contentWindow;
      try {
        win.postMessage("checkRemedialComplete", '*');
      } catch (ex) {
        console.log(ex);
      }
    }
  };
  Remedial.prototype.checkIframeLoaded = function () {
    var self = this;
    var iframeDoc = document.getElementById('iframe_' + self.contentID);
    if (!this.frameWindowLoaded) this.checkRemedialCompleteHTML5(self);
    // Check if loading is complete
    if (iframeDoc && this.frameWindowLoaded) {
      self.initializeTimer();
      return;
    } else window.setTimeout(function () {
      self.checkIframeLoaded();
    }, 100);
  };
  Remedial.prototype.startContentTimer = function () {
    var self = this;
    var iframe = document.getElementById('iframe_' + self.contentID);
    if (iframe) {
      this.checkIframeLoaded();
      return;
    } else window.setTimeout(function () {
      self.startContentTimer();
    }, 100);
  };
  Remedial.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  Remedial.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  Remedial.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  Remedial.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  Remedial.prototype.evaluateAnswer = function (inputData, skipped) {
    inputData = JSON.parse(inputData);
    var evaluatedResult = {};
    var result = true;
    var finalSubmitData = this.getSubmitData();
    if (skipped) finalSubmitData.skipped = true;
    this.userAttempts++;
    return evaluatedResult;
  };
  Remedial.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  Remedial.prototype.getLocalResult = function () {
    return this.localResult;
  };
  Remedial.prototype.recieveTextFromFlash = function (time, flag, learningGoalStatus, noOfPrompts, levelsAttempted, levelWiseStatus, levelWiseScore, levelWiseTimeTaken, currentLevel, extraParams) {
    var levelWiseScore = (levelWiseScore ? parseInt(levelWiseScore) : 0);
    time = time ? parseInt(time) : this.totalTime;
    var finalData = {};
    var isComplete = (flag == '1' || flag == '2');
    var userAttemptData = {};
    if (this.activityFormat == 'old') {
      levelWiseScore = 0;
      levelWiseTimeTaken = time;
      levelsAttempted = 'L1';
      levelWiseStatus = learningGoalStatus;
    }
    var data = {
      level: levelsAttempted,
      timeTaken: parseInt(levelWiseTimeTaken),
      status: this.activityFormat == 'new' ? (levelWiseStatus == '1' ? 'complete' : (levelWiseStatus == '2' ? 'inProgress' : 'inComplete')) : levelWiseStatus,
      score: levelWiseScore
    };
    if (levelsAttempted && !(levelsAttempted.indexOf('|') !== -1)) {
      this.levelWiseData[levelsAttempted] = data;
      this.timeTakenLevelWise[levelsAttempted] = typeof (data.timeTaken) != 'undefined' ? data.timeTaken : 0;
    }
    this.totalTime = ContentService.arraySum(Object.values(this.timeTakenLevelWise));
    userAttemptData['completed'] = isComplete;
    userAttemptData['levelWiseData'] = isComplete ? Object.values((levelsAttempted != '') ? this.levelWiseData : []) : data;
    userAttemptData['timeTaken'] = time ? parseInt(time) : this.totalTime; // Overall timetaken
    userAttemptData['currentLevel'] = currentLevel ? currentLevel : this.currentLevel;
    userAttemptData['extraParameters'] = extraParams;
    finalData['contentID'] = this.contentID;
    finalData['result'] = this.activityFormat == 'new' ? (levelsAttempted ? 'pass' : 'fail') : (flag == 1 ? 'pass' : 'fail');
    finalData['timeTaken'] = this.totalTime;
    finalData['userAttemptData'] = userAttemptData;
    finalData['contentInfo'] = this.getContentInfo();
    if (!isComplete) {
      this.saveDataCallback(finalData);
    } else {
      this.finishActivity(finalData);
    }
    this.setResultLocally(finalData);
  };
  Remedial.prototype.finishActivity = function (finalData) {
    if (!this.isFinished) {
      this.isFinished = true;
      this.completedCallback(finalData);
      this.stopTheTimer();
    }
  };
  Remedial.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['activityType'] = this.activityType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Remedial.prototype.getSubmitData = function () {
    return this.getLocalResult();
  };
  Remedial.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['userAnswer'] = null;
    return userData;
  };
  return Remedial;
}());
var TimedTest = /** @class */ (function () {
  function TimedTest(data) {
    this.contentData = data;
    this.autoSubmit = typeof (data.attributes) != 'undefined' && typeof (data.attributes.autoSubmit) != 'undefined' ? data.attributes.autoSubmit : false;
    this.title = data.title;
    this.displayObject = {
      timedTestTitle: this.title,
      class: data.class,
      duration: data.durationClass,
      noOfQuestion: data.noOfQuesClass,
      autoSubmit: this.autoSubmit,
      questions: []
    };
    this.displayObjectForView = {
      name: this.title
    };
    this.userAttempts = 1;
    this.timeCounter = 0;
    this.timerID = null;
    this.skipped = 0;
    this.timerRunning = false;
    this.secs = 0;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.groupType = data.type;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.timeInterval = 1;
    this.template = data.template;
    this.contentType = data.contentType;
    this.localResult = [];
    this.totalTime = 0;
    this.totalTimeTaken = 0;
    this.totalCorrect = 0;
    this.totalAttempts = 0;
    this.totalQuestions = data.noOfQuesClass;
    this.childContents = (typeof (data.childContents) != 'undefined' && typeof (data.childContents.data) != 'undefined' && data.childContents.data.length) ? data.childContents.data : [];
    this.childObjects = [];
    this.userAttemptInfo = {};
    this.questionWiseInfo = [];
    //////////////generate display objects/////////////
    if (this.childContents.length) {
      for (var i = 0; i < this.childContents.length; i++) {
        var childContent = this.childContents[i];
        var template = childContent.template;
        if (window[template]) {
          var tmpObject = new window[template](childContent);
          var tmpDisplayObject = tmpObject.getDisplayObject();
          this.childObjects.push(tmpObject);
          tmpDisplayObject['template'] = template;
          this.displayObject.questions.push(tmpDisplayObject);
        }
      }
    }
    //////////////end generate display objects/////////////
  };
  TimedTest.prototype.getChildObjects = function () {
    return this.childObjects;
  };
  TimedTest.prototype.getDisplayObject = function () {
    return this.displayObject;
  };
  TimedTest.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  TimedTest.prototype.getTemplate = function () {
    return this.template;
  };
  TimedTest.prototype.getContentType = function () {
    return this.contentType;
  };
  TimedTest.prototype.startContentTimer = function () {
    this.initializeTimer();
  };
  TimedTest.prototype.initializeTimer = function () {
    this.secs = 0;
    this.startTheTimer();
  };
  TimedTest.prototype.startTheTimer = function () {
    var self = this;
    this.secs = this.secs + this.timeInterval;
    this.timerRunning = true;
    this.timerID = window.setTimeout(function () {
      self.startTheTimer();
    }, this.timeInterval * 1000);
  };
  TimedTest.prototype.stopTheTimer = function () {
    if (this.timerRunning) clearTimeout(this.timerID);
    this.timerRunning = false;
  };
  TimedTest.prototype.restartTimer = function () {
    this.stopTheTimer();
    this.initializeTimer();
  };
  TimedTest.prototype.evaluateAnswer = function (inputData, seqNo) {
    var timedTestResult = {};
    var otherQuestionInfo = {};
    var interactiveResult = null;
    if (this.childObjects[seqNo].getTemplate() == 'Interactive') {
      this.childObjects[seqNo].setResultCallback(function (result) {
        interactiveResult = result;
      });
    }
    var evaluatedResult = this.childObjects[seqNo].evaluateAnswer(inputData);
    var submitResult = this.childObjects[seqNo].getSubmitData();
    var userAttemptData = typeof (submitResult.userAttemptData) != 'undefined' ? submitResult.userAttemptData : null;
    var firstTrialData = typeof (userAttemptData.trials) != 'undefined' && typeof (userAttemptData.trials[0]) != 'undefined' ? userAttemptData.trials[0] : [];
    if (evaluatedResult.result || evaluatedResult.result == 'correct') this.totalCorrect++;
    this.totalTimeTaken += this.secs;
    timedTestResult['totalCorrect'] = this.totalCorrect;
    timedTestResult['totalAttempted'] = ++this.totalAttempts;
    timedTestResult['totalQuestions'] = this.totalQuestions;
    this.userAttemptInfo = timedTestResult;
    otherQuestionInfo['contentInfo'] = submitResult.contentInfo;
    otherQuestionInfo['userResponse'] = typeof (firstTrialData.userResponse) != 'undefined' ? firstTrialData.userResponse : null;
    otherQuestionInfo['timeTaken'] = this.secs;
    otherQuestionInfo['result'] = typeof (firstTrialData.result) != 'undefined' ? firstTrialData.result : false;
    var isFinished = this.totalAttempts == this.totalQuestions;
    timedTestResult['finished'] = isFinished;
    this.questionWiseInfo.push(otherQuestionInfo);
    this.restartTimer();
    return timedTestResult;
  };
  TimedTest.prototype.setResultLocally = function (data) {
    this.localResult = data;
  };
  TimedTest.prototype.getLocalResult = function () {
    return this.localResult;
  };
  TimedTest.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['groupType'] = this.groupType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  TimedTest.prototype.getSubmitData = function () {
    var submitData = {};
    var timedTestInfo = {};
    timedTestInfo['contentInfo'] = this.getContentInfo();
    submitData['timedTestInfo'] = timedTestInfo;
    timedTestInfo['userAttemptInfo'] = this.userAttemptInfo;
    timedTestInfo['userAttemptInfo']['timeTaken'] = this.totalTimeTaken;
    submitData['questionWiseAttemptData'] = this.questionWiseInfo;
    return submitData;
  };
  TimedTest.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['totalQuestion'] = this.totalQuestions;
    userData['userAnswer'] = null;
    userData['accuracy'] = userAttemptData.accuracy;
    return userData;
  };
  return TimedTest;
}());
var Group = /** @class */ (function () {
  function Group(data) {
    this.contentData = data;
    this.title = data.name;
    this.totalQuestions = typeof (data.totalQuestion) != 'undefined' ? data.totalQuestion : null;
    this.displayObjectForView = {
      name: data.name
    };
    this.userAttempts = 1;
    this.contentID = data.contentID;
    this.contentVersionID = data._id;
    this.contentType = null;
    this.groupType = data.type;
    this.revisionNum = data.revisionNo;
    this.langCode = data.langCode;
    this.timeInterval = 1;
    this.template = data.template;
    this.contentType = data.contentType;
    this.totalCorrect = 0;
    this.totalAttempts = 0;
    this.userAttemptInfo = {};
    this.questionWiseInfo = [];
  };
  Group.prototype.getDisplayObjectForView = function () {
    return this.displayObjectForView;
  };
  Group.prototype.getTemplate = function () {
    return this.template;
  };
  Group.prototype.getContentType = function () {
    return this.contentType;
  };
  Group.prototype.getContentInfo = function () {
    var contentResult = {};
    contentResult['contentID'] = this.contentID;
    contentResult['contentVersionID'] = this.contentVersionID;
    contentResult['contentType'] = this.contentType;
    contentResult['groupType'] = this.groupType;
    contentResult['revisionNum'] = this.revisionNum;
    contentResult['langCode'] = this.langCode;
    return contentResult;
  };
  Group.prototype.getSubmitData = function () {
    var submitData = {};
    var GroupInfo = {};
    GroupInfo['contentInfo'] = this.getContentInfo();
    submitData['GroupInfo'] = GroupInfo;
    GroupInfo['userAttemptInfo'] = this.userAttemptInfo;
    GroupInfo['userAttemptInfo']['timeTaken'] = this.totalTimeTaken;
    submitData['questionWiseAttemptData'] = this.questionWiseInfo;
    return submitData;
  };
  Group.prototype.getUserAnswer = function (userAttemptData) {
    var userData = {};
    userData['result'] = null;
    userData['timeTaken'] = userAttemptData.timeTaken;
    userData['totalQuestion'] = this.totalQuestions;
    userData['userAnswer'] = null;
    userData['accuracy'] = userAttemptData.accuracy;
    return userData;
  };
  return Group;
}());

function unique(a) {
  var r = new Array();
  o: for (var i = 0, n = a.length; i < n; i++) {
    for (var x = 0, y = r.length; x < y; x++) {
      if (trim(r[x]) == trim(a[i])) continue o;
    }
    r[r.length] = a[i];
  }
  return r;
}

function sum(arr) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    num += parseInt(arr[i]);
  }
  return num;
}

function trim(query) {
  var s = query.replace(/\s+/g, "");
  return s.toUpperCase();
}

function sleep(milliseconds, callback) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
  if (typeof callback != 'undefined' && typeof callback == 'function') {
    callback();
  }
}

function noimage(a) {
  var imageAttempt = a.getAttribute("data-atp");
  imageAttempt = (imageAttempt == null || typeof (imageAttempt) == "undefined" || imageAttempt == "") ? 1 : imageAttempt;
  var imageSrc = a.getAttribute("src").split("?");
  var contentID = a.getAttribute("data-id");
  if (imageAttempt > 5) {
    a.getAttribute("onerror", ""); // disable onerror to prevent endless loop
    ContentService.callErrorLogApi({
      'contentID': contentID,
      'typeErrorLog': 'imageNotLoading',
      'src': imageSrc[0]
    });
  } else {
    imageAttempt++;
    setTimeout(function () {
      a.setAttribute("src", imageSrc[0] + "?" + (new Date()).getTime());
      a.setAttribute("data-atp", imageAttempt);
    }, 750);
  }
}
