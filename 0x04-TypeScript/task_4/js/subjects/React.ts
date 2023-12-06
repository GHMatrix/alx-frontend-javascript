export namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingReact?: number;
  }

  export class React {
    private _teacher: Teacher;

    setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingReact) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
