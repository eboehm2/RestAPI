"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                Student_First_Name: { type: String, maxlength: 24 },
                Student_Last_Name: { type: String, maxlength: 24 },
                State: { type: String, maxlength: 24 },
                City: { type: String, maxlength: 24 },
                University: { type: String, maxlength: 24 },
                EMail: { type: String, maxlength: 24 },
                Password: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store student info',
            [
                {
                    route: '/get-all-students',
                    method: 'POST',
                    callback: this.getALLStudent,
                    requireToken: true,
                },
                {
                    route: '/get-student-by-id/:id',
                    method: 'POST',
                    callback: this.getStudentById,
                    requireToken: true,
                },
                {
                    route: '/create-student',
                    method: 'POST',
                    callback: this.createStudent,
                    requireToken: true,
                },
                {
                    route: '/update-student/id/:id',
                    method: 'PUT',
                    callback: this.updateStudent,
                    requireToken: true,
                },
                {
                    route: '/delete/id/:id',
                    method: 'DELETE',
                    callback: this.deleteStudent,
                    requireToken: true,
                }
            ]];
    }
    updateStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('reg.body==>', req.body);
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    deleteStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('reg.body==>', req.body);
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.remove(req, null, null);
            console.log('resp from delete', resp);
            res.json({ message: 'Success', resp });
        });
    }
    createStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('reg.body==>', req.body);
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getALLStudent(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getStudentById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let studentCtrl = model.controller;
            let resp = yield studentCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Student = Student;
