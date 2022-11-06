import User from './User.js';

export default class Student extends User {
  constructor({ admissionYear, courseName, firstName, lastName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return 2022 - this.admissionYear;
  }
}

export function byField(field) {
  return (a, b) => (a[field] < b[field] ? 1 : -1);
}
