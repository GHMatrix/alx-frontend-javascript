export var Subjects;
(function (Subjects) {
    var React = /** @class */ (function () {
        function React() {
        }
        React.prototype.setTeacher = function (teacher) {
            this._teacher = teacher;
        };
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this._teacher && this._teacher.experienceTeachingReact) {
                return "Available Teacher: " + this._teacher.firstName;
            }
            else {
                return 'No available teacher';
            }
        };
        return React;
    }());
    Subjects.React = React;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=React.js.map