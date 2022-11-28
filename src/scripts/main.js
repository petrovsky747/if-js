const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(color) {
    this.current = this.data.indexOf(color);
    if (this.current <= this.data.length - 2) {
      this.current++;
      color = this.data[this.current];
      return {
        done: false,
        value: this.data[this.current],
      };
    } else {
      color = this.data[0];
      return {
        value: this.data[0],
      };
    }
  },
};
const changeStyle = (color) => (event) => {
  event.target.style.color = colors.next(color).value;
  color = event.target.style.color;
};

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

text1.addEventListener('click', changeStyle());
text2.addEventListener('click', changeStyle());
text3.addEventListener('click', changeStyle());
