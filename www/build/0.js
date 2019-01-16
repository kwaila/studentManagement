webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentdetailPageModule", function() { return StudentdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__studentdetail__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StudentdetailPageModule = /** @class */ (function () {
    function StudentdetailPageModule() {
    }
    StudentdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__studentdetail__["a" /* StudentdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__studentdetail__["a" /* StudentdetailPage */]),
            ],
        })
    ], StudentdetailPageModule);
    return StudentdetailPageModule;
}());

//# sourceMappingURL=studentdetail.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StudentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentdetailPage = /** @class */ (function () {
    function StudentdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudentdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentdetailPage');
    };
    StudentdetailPage.prototype.logout = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    StudentdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentdetail',template:/*ion-inline-start:"D:\studentmanagement\src\pages\studentdetail\studentdetail.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n\n      </ion-col>\n      <ion-col (click)="logout()" class="txt-align-right">\n          Logout\n              <img height="15" src="/assets/imgs/logout.svg">\n             \n            \n      </ion-col>\n    </ion-row>\n    <ion-row margin-bottom>\n      <ion-col class="txt-align-center">\n        <img height="80" src="/assets/imgs/projlogo.png">\n      </ion-col>\n    </ion-row>\n    <ion-row   margin-bottom>\n      <ion-col class="hd">\n        Student Information\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:-15px" padding>\n        <ion-col class="bdr-btm">\n        \n        </ion-col>\n        </ion-row>\n \n    <ion-row>\n      <ion-col col-6>\n        <span class="detail-des">Name: <b>Anant Kumar</b></span><br>\n        <span class="detail-des">Admin No: <b>B28764</b></span><br>\n        <span class="detail-des">Mobile: <b>987654321</b></span><br>\n        <span class="detail-des">Class: <b>8th</b></span><br>\n        <span class="detail-des">Class Teacher: <b>Nisha </b></span><br>\n        <span class="detail-des">Teachere Mobile: <b>98765432 </b></span><br>\n\n      </ion-col>\n      <ion-col col-2>\n        <span class="hd-sm"> Student</span>\n        <img class="crd-img" src="/assets/imgs/dummykid.jpg"><br>\n        <span class="hd-sm"> Anant Kumar</span>\n\n      </ion-col>\n      <ion-col col-2>\n        <span class="hd-sm"> Father</span>\n        <img class="crd-img" src="/assets/imgs/dummykid.jpg"><br>\n        <span class="hd-sm"> Anant Kumar</span>\n      </ion-col>\n      <ion-col col-2>\n        <span class="hd-sm"> Mother</span>\n        <img class="crd-img" src="/assets/imgs/dummykid.jpg"><br>\n        <span class="hd-sm"> Anant Kumar</span>\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:-15px" padding>\n        <ion-col class="bdr-btm">\n        \n        </ion-col>\n        </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card>\n          <ion-row class="crd-hd">\n            <ion-col class="crd-hd">\n              Wallet Balance\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="crd-des">\n              <br>\n              <br>\n\n              Balance:<b> Rs: 200</b><br>\n              <span>Last Recharge:<b> Rs 500</b></span><br>\n              <span>On 27-03-2018</span>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card>\n          <ion-row class="crd-hd">\n            <ion-col class="crd-hd">\n              Add Money\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="crd-des txt-align-center">\n              Amount:<b>(₹)</b><br>\n              <span>+100 +200 +300</span><br>\n              <span>Dedit Card/Credit Card/Net Banking</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="txt-align-center">\n              <button ion-button small>Proceed to add money</button>\n              <span class="crd-des-foot txt-align-center">Through Online Payment Gateway</span>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        <ion-card>\n          <ion-row class="crd-hd">\n            <ion-col class="crd-hd">\n              Transaction History\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="crd-des">\n              <br>\n              <br>\n\n              Last Purchase On Canteen:<b> Rs: 200</b><br>\n              <span>Last Recharge:<b> Rs 500</b></span><br>\n\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row style="margin-top:-15px" padding>\n      <ion-col class="bdr-btm">\n      \n      </ion-col>\n      </ion-row>\n  <ion-row class="rw-pd">\n    <ion-col class="txt-align-center cl-bg" col-4>\n      <br>\n      Allow/Disallow\n      <br>\n        <img height="40" class="crd-img" src="/assets/imgs/cutlery.svg"><br>\n        Manage School Canteen\n    </ion-col>\n    <ion-col  class="txt-align-center cl-bg" col-4>\n        <br>\n        Allow/Disallow\n        <br>\n        <img height="40" class="crd-img" src="/assets/imgs/chalk.svg"><br>\n        Manage Staionary\n    </ion-col>\n    <ion-col  class="txt-align-center cl-bg" col-4>\n        <br>\n        Allow/Disallow\n        <br>\n        <img height="40" class="crd-img" src="/assets/imgs/scissors.svg"><br>\n        Manage Tailor Shop\n    </ion-col>\n  </ion-row>\n  <ion-row style="margin-top:-15px" padding>\n    <ion-col class="bdr-btm">\n    \n    </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Attendence\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Assignments\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Events\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Library\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Fees\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Exams\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Birthday\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Teacher\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Leave\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Personal Diary\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Syllabus\n      </ion-col>\n      <ion-col  col-2 class="col-rds txt-align-center des-btn">\n          <img height="20"  src="/assets/imgs/writing.svg"><br>\n          Time Table\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"D:\studentmanagement\src\pages\studentdetail\studentdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StudentdetailPage);
    return StudentdetailPage;
}());

//# sourceMappingURL=studentdetail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map