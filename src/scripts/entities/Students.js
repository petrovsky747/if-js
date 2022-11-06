import Student from './Student.js';

export default class Students extends Student {
  constructor([...props]) {
    super(props);
  }

  getInfo() {
    let result = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
      result.push(
        `${this[i].fullName} - ${this[i].courseName}, ${this[i].course} курс`,
      );
    }
    return result;
  }
}
