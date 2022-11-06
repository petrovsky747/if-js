import Student from './Student.js';
import { byField } from './Student.js';

export default class Students {
  constructor(studentsData) {
    this.studentsData = studentsData.sort(byField('admissionYear')).map(
      (prop) =>
        new Student({
          admissionYear: prop.admissionYear,
          courseName: prop.courseName,
          firstName: prop.firstName,
          lastName: prop.lastName,
        }),
    );
  }

  getInfo() {
    const result = [];
    for (let i = 0; i < this.studentsData.length; i++) {
      result.push(
        `${this.studentsData[i].fullName} - ${this.studentsData[i].courseName}, ${this.studentsData[i].course} курс`,
      );
    }
    return result;
  }
}
