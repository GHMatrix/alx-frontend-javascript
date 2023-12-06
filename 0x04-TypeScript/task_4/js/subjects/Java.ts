export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
  }

  export class Java {
    private _teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingJava) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
