// const isNumber = (v: string) => /[0-9]/i.test(v);
// const isChar = (v: string) => /[ёa-zа-я]/i.test(v);
// const isCharAndNumber = (v: string) => /[ёa-zа-я0-9]/i.test(v);

export type MaskSettings = {
  mask: string;
  value?: string;
  maskChar?: string;
};

// type MaskInputCharType = '0' | 'a' | '*';
//
// const MASK_INPUT_CHARS = {
//   '0': isNumber,
//   'a': isChar,
//   '*': isCharAndNumber,
// };

export class Mask {
  mask: string;
  value: string;
  maskChar: string;
  maxValueLength: number;
  inputCharTypes: string[];

  constructor({ mask, value, maskChar }: MaskSettings) {
    console.log('NEW MASK');
    this.mask = mask;
    this.value = value || '';
    this.maskChar = maskChar || '_';
    this.inputCharTypes = ['0', 'a', '*'];
    this.maxValueLength = mask
      .split('')
      .filter((c) => this.maskChar === c).length;
  }

  updateMaskWithMaskChar() {
    return this.mask
      .split('')
      .map((c) => {
        return this.inputCharTypes.includes(c) ? this.maskChar : c;
      })
      .join('');
  }

  addMask(value = '') {
    let result = '';
    let valueIndex = 0;
    let lastValuePosition = 0;

    if (!this.mask) {
      return { maskedValue: value, lastValuePosition: value.length };
    }

    if (!value.length) {
      return { maskedValue: this.mask, lastValuePosition };
    }

    this.mask.split('').forEach((maskCharacter, index) => {
      if (maskCharacter === this.maskChar && valueIndex < value.length) {
        result += value[valueIndex];
        valueIndex++;
        lastValuePosition = index + 1;
      } else {
        result += maskCharacter;
      }
    });

    return { maskedValue: result, lastValuePosition };
  }

  removeMask(newValue: string, oldValue: string) {
    let result = '';
    let valueIndex = 0;

    if (!this.mask || !newValue.length) {
      return newValue;
    }

    console.log('removeMask', oldValue, this.mask);

    if (newValue.length >= this.mask.length) {
      newValue.split('').forEach((character) => {
        if (character === this.mask[valueIndex]) {
          valueIndex++;
        } else if (character !== this.maskChar) {
          result += character;

          if (this.mask[valueIndex] === this.maskChar) {
            valueIndex++;
          }
        }
      });
    }

    if (newValue.length < this.mask.length) {
      const { maskedValue } = this.addMask(oldValue);

      maskedValue.split('').forEach((maskedValueCharacter, index) => {
        if (maskedValueCharacter === newValue[valueIndex]) {
          valueIndex++;

          if (maskedValueCharacter !== this.mask[index]) {
            result += maskedValueCharacter;
          }
        }
      });

      console.log(maskedValue, result, this.maxValueLength);
    }

    return result.length > this.maxValueLength ? result.slice(0, -1) : result;
  }
}
