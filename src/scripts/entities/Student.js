import User from './User.js';

export default class Student extends User {
  constructor({ admissionYear, courseName, firstName, lastName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const now = new Date();
    return now.getFullYear() - this.admissionYear;
  }
}
