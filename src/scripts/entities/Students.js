import Student from './Student.js';

export default class Students extends Student {
  constructor(students, ...props) {
    super(props);
    this.students = students;
  }

  getInfo() {
    const result = [];
    for (let i = 0; i < this.students.length; i++) {
      result.push(
        `${this.students[i].fullName} - ${this.students[i].courseName}, ${this.students[i].course} курс`,
      );
    }
    return result;
  }
}
