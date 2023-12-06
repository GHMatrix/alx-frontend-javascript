export var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function () {
        function Cpp() {
        }
        Cpp.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for C++';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this._teacher && this._teacher.experienceTeachingC) {
                return "Available Teacher: " + this._teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return Cpp;
    }());
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Cpp.js.map