import Student from './Student.js';

export default class Students {
  constructor(studentsData) {
    this.studentsData = studentsData.map(
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
    function byField(field) {
      return (a, b) => (a[field] < b[field] ? 1 : -1);
    }
    this.studentsData.sort(byField('admissionYear'));
    for (let i = 0; i < this.studentsData.length; i++) {
      result.push(
        `${this.studentsData[i].fullName} - ${this.studentsData[i].courseName}, ${this.studentsData[i].course} курс`,
      );
    }
    return result;
  }
}
