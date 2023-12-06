export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
  }

  export class Cpp {
    private _teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for C++';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingC) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
