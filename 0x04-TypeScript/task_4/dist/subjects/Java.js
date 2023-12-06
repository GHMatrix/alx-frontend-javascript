export var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this._teacher && this._teacher.experienceTeachingJava) {
                return "Available Teacher: " + this._teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Java.js.map