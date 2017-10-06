"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:component-class-suffix */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_model_1 = require("./data-model");
var HeroDetailComponent4 = (function () {
    function HeroDetailComponent4(fb) {
        this.fb = fb;
        this.states = data_model_1.states;
        this.createForm();
    }
    HeroDetailComponent4.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            street: '',
            city: '',
            state: '',
            zip: '',
            power: '',
            sidekick: ''
        });
    };
    return HeroDetailComponent4;
}());
HeroDetailComponent4 = __decorate([
    core_1.Component({
        selector: 'hero-detail-4',
        templateUrl: './hero-detail-4.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HeroDetailComponent4);
exports.HeroDetailComponent4 = HeroDetailComponent4;
//# sourceMappingURL=hero-detail-4.component.js.map