(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-shop-shop-module"],{

/***/ "1g5a":
/*!************************************************************************!*\
  !*** ./src/app/module/sticky/modules/maps/nominatim-response.model.ts ***!
  \************************************************************************/
/*! exports provided: NominatimResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominatimResponse", function() { return NominatimResponse; });
class NominatimResponse {
    constructor(latitude, longitude, displayName) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.displayName = displayName;
    }
}


/***/ }),

/***/ "2art":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js ***!
  \************************************************************************/
/*! exports provided: Galleria, GalleriaContent, GalleriaItem, GalleriaItemSlot, GalleriaModule, GalleriaThumbnails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galleria", function() { return Galleria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaContent", function() { return GalleriaContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItem", function() { return GalleriaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function() { return GalleriaItemSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaModule", function() { return GalleriaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function() { return GalleriaThumbnails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ "t2ka");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");











const _c0 = ["mask"];
const _c1 = function (a1) { return { "p-galleria-mask p-component-overlay": true, "p-galleria-visible": a1 }; };
const _c2 = function (a0) { return { "zIndex": a0 }; };
function Galleria_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-galleriaContent", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onMaskHide(); })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onActiveItemChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r3.visible))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r3.zIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
} }
function Galleria_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
} }
function Galleria_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onActiveItemChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
} }
function GalleriaContent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.maskHide.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleriaContent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
} }
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onActiveIndexChange($event); })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.stopSlideShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
} }
function GalleriaContent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
} }
const _c3 = function (a1, a2, a3) { return { "p-galleria p-component": true, "p-galleria-fullscreen": a1, "p-galleria-indicator-onitem": a2, "p-galleria-item-nav-onhover": a3 }; };
const _c4 = function () { return {}; };
function GalleriaContent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onActiveIndexChange($event); })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.startSlideShow(); })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.stopSlideShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
} }
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
} }
const _c5 = function (a1) { return { "p-galleria-item-prev p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navBackward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
} }
const _c6 = function (a1) { return { "p-galleria-item-next p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
} }
function GalleriaItem_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
} }
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 16);
} }
const _c7 = function (a1) { return { "p-galleria-indicator": true, "p-highlight": a1 }; };
function GalleriaItem_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onIndicatorClick(index_r10); })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onIndicatorMouseEnter(index_r10); })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onIndicatorKeyDown(index_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r10)("templates", ctx_r8.templates);
} }
function GalleriaItem_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value);
} }
const _c8 = ["itemsContainer"];
const _c9 = function (a1) { return { "p-galleria-thumbnail-prev p-link": true, "p-disabled": a1 }; };
const _c10 = function (a1, a2) { return { "p-galleria-thumbnail-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function GalleriaThumbnails_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navBackward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
} }
const _c11 = function (a1, a2, a3, a4) { return { "p-galleria-thumbnail-item": true, "p-galleria-thumbnail-item-current": a1, "p-galleria-thumbnail-item-active": a2, "p-galleria-thumbnail-item-start": a3, "p-galleria-thumbnail-item-end": a4 }; };
function GalleriaThumbnails_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onItemClick(index_r7); })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onItemClick(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
} }
const _c12 = function (a1) { return { "p-galleria-thumbnail-next p-link": true, "p-disabled": a1 }; };
const _c13 = function (a1, a2) { return { "p-galleria-thumbnail-next-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function GalleriaThumbnails_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.navForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
} }
const _c14 = function (a0) { return { "height": a0 }; };
class Galleria {
    constructor(element, cd) {
        this.element = element;
        this.cd = cd;
        this.fullScreen = false;
        this.numVisible = 3;
        this.showItemNavigators = false;
        this.showThumbnailNavigators = true;
        this.showItemNavigatorsOnHover = false;
        this.changeItemOnIndicatorHover = false;
        this.circular = false;
        this.autoPlay = false;
        this.transitionInterval = 4000;
        this.showThumbnails = true;
        this.thumbnailsPosition = "bottom";
        this.verticalThumbnailViewPortHeight = "300px";
        this.showIndicators = false;
        this.showIndicatorsOnItem = false;
        this.indicatorsPosition = "bottom";
        this.baseZIndex = 0;
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._visible = false;
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    get visible() {
        return this._visible;
    }
    ;
    set visible(visible) {
        this._visible = visible;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerFacet = item.template;
                    break;
                case 'footer':
                    this.footerFacet = item.template;
                    break;
                case 'indicator':
                    this.indicatorFacet = item.template;
                    break;
                case 'caption':
                    this.captionFacet = item.template;
                    break;
            }
        });
    }
    ngOnChanges(simpleChanges) {
        if (this.fullScreen && simpleChanges.visible) {
            if (simpleChanges.visible.currentValue) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
                this.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
            }
            else {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            }
        }
    }
    onMaskHide() {
        this.visible = false;
        this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeIndexChange.emit(index);
        }
    }
    ngOnDestroy() {
        if (this.fullScreen) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        }
    }
}
Galleria.ɵfac = function Galleria_Factory(t) { return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Galleria.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Galleria, selectors: [["p-galleria"]], contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function Galleria_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    } }, inputs: { fullScreen: "fullScreen", numVisible: "numVisible", showItemNavigators: "showItemNavigators", showThumbnailNavigators: "showThumbnailNavigators", showItemNavigatorsOnHover: "showItemNavigatorsOnHover", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", circular: "circular", autoPlay: "autoPlay", transitionInterval: "transitionInterval", showThumbnails: "showThumbnails", thumbnailsPosition: "thumbnailsPosition", verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight", showIndicators: "showIndicators", showIndicatorsOnItem: "showIndicatorsOnItem", indicatorsPosition: "indicatorsPosition", baseZIndex: "baseZIndex", activeIndex: "activeIndex", visible: "visible", id: "id", value: "value", responsiveOptions: "responsiveOptions", maskClass: "maskClass", containerClass: "containerClass", containerStyle: "containerStyle" }, outputs: { activeIndexChange: "activeIndexChange", visibleChange: "visibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]], template: function Galleria_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaContent]; }, styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Galleria.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Galleria.propDecorators = {
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fullScreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsiveOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnailNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigatorsOnHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changeItemOnIndicatorHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    transitionInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbnailsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    verticalThumbnailViewPortHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicatorsOnItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    baseZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maskClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mask', { static: false },] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Galleria, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleria',
                template: `
        <div *ngIf="fullScreen;else windowed">
            <div *ngIf="visible" #mask [ngClass]="{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}" [class]="maskClass" [ngStyle]="{'zIndex':zIndex}">
                <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (maskHide)="onMaskHide()" (activeItemChange)="onActiveItemChange($event)" [ngStyle]="containerStyle"></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigatorsOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbnailsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], verticalThumbnailViewPortHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicatorsOnItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maskClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mask', { static: false }]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
        }] }); })();
class GalleriaContent {
    constructor(galleria, cd) {
        this.galleria = galleria;
        this.cd = cd;
        this.value = [];
        this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = this.galleria.id || Object(primeng_utils__WEBPACK_IMPORTED_MODULE_3__["UniqueComponentId"])();
        this.slideShowActicve = false;
        this._activeIndex = 0;
        this.slideShowActive = true;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    galleriaClass() {
        const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
        const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
        return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
    }
    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.galleria.circular && (this.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
            this.onActiveIndexChange(activeIndex);
            this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
    }
    stopSlideShow() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);
        return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
        return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeItemChange.emit(this.activeIndex);
        }
    }
}
GalleriaContent.ɵfac = function GalleriaContent_Factory(t) { return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
GalleriaContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaContent, selectors: [["p-galleriaContent"]], inputs: { value: "value", activeIndex: "activeIndex" }, outputs: { maskHide: "maskHide", activeItemChange: "activeItemChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]], template: function GalleriaContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaItem, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], GalleriaItemSlot, GalleriaThumbnails]; }, encapsulation: 2, changeDetection: 0 });
GalleriaContent.ctorParameters = () => [
    { type: Galleria },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
GalleriaContent.propDecorators = {
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maskHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeItemChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaContent',
                template: `
        <div [attr.id]="id" *ngIf="value && value.length > 0" [ngClass]="{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, 
            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" [class]="galleriaClass()">
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <span class="p-galleria-close-icon pi pi-times"></span>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem [value]="value" [activeIndex]="activeIndex" [circular]="galleria.circular" [templates]="galleria.templates" (onActiveIndexChange)="onActiveIndexChange($event)" 
                    [showIndicators]="galleria.showIndicators" [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover" [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet" [showItemNavigators]="galleria.showItemNavigators" [autoPlay]="galleria.autoPlay" [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()" (stopSlideShow)="stopSlideShow()"></p-galleriaItem>

                <p-galleriaThumbnails *ngIf="galleria.showThumbnails" [containerId]="id" [value]="value" (onActiveIndexChange)="onActiveIndexChange($event)" [activeIndex]="activeIndex" [templates]="galleria.templates"
                    [numVisible]="galleria.numVisible" [responsiveOptions]="galleria.responsiveOptions" [circular]="galleria.circular"
                    [isVertical]="isVertical()" [contentHeight]="galleria.verticalThumbnailViewPortHeight" [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive" (stopSlideShow)="stopSlideShow()"></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: Galleria }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maskHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeItemChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaItemSlot {
    get item() {
        return this._item;
    }
    ;
    set item(item) {
        this._item = item;
        if (this.templates) {
            this.templates.forEach((item) => {
                if (item.getType() === this.type) {
                    switch (this.type) {
                        case 'item':
                        case 'caption':
                        case 'thumbnail':
                            this.context = { $implicit: this.item };
                            this.contentTemplate = item.template;
                            break;
                    }
                }
            });
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            if (item.getType() === this.type) {
                switch (this.type) {
                    case 'item':
                    case 'caption':
                    case 'thumbnail':
                        this.context = { $implicit: this.item };
                        this.contentTemplate = item.template;
                        break;
                    case 'indicator':
                        this.context = { $implicit: this.index };
                        this.contentTemplate = item.template;
                        break;
                    default:
                        this.context = {};
                        this.contentTemplate = item.template;
                        break;
                }
            }
        });
    }
}
GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) { return new (t || GalleriaItemSlot)(); };
GalleriaItemSlot.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaItemSlot, selectors: [["p-galleriaItemSlot"]], inputs: { item: "item", templates: "templates", index: "index", type: "type" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleriaItemSlot_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
GalleriaItemSlot.propDecorators = {
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItemSlot, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaItemSlot',
                template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaItem {
    constructor() {
        this.circular = false;
        this.showItemNavigators = false;
        this.showIndicators = true;
        this.slideShowActive = true;
        this.changeItemOnIndicatorHover = true;
        this.autoPlay = false;
        this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
        this.activeItem = this.value[this._activeIndex];
    }
    ngOnInit() {
        if (this.autoPlay) {
            this.startSlideShow.emit();
        }
    }
    next() {
        let nextItemIndex = this.activeIndex + 1;
        let activeIndex = this.circular && this.value.length - 1 === this.activeIndex
            ? 0
            : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
        let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
        let activeIndex = this.circular && this.activeIndex === 0
            ? this.value.length - 1
            : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    navForward(e) {
        this.stopTheSlideShow();
        this.next();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        this.prev();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onIndicatorClick(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
        if (this.changeItemOnIndicatorHover) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        }
    }
    onIndicatorKeyDown(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    isNavForwardDisabled() {
        return !this.circular && this.activeIndex === (this.value.length - 1);
    }
    isNavBackwardDisabled() {
        return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
        return this.activeIndex === index;
    }
}
GalleriaItem.ɵfac = function GalleriaItem_Factory(t) { return new (t || GalleriaItem)(); };
GalleriaItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaItem, selectors: [["p-galleriaItem"]], inputs: { circular: "circular", showItemNavigators: "showItemNavigators", showIndicators: "showIndicators", slideShowActive: "slideShowActive", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", autoPlay: "autoPlay", activeIndex: "activeIndex", value: "value", templates: "templates", indicatorFacet: "indicatorFacet", captionFacet: "captionFacet" }, outputs: { startSlideShow: "startSlideShow", stopSlideShow: "stopSlideShow", onActiveIndexChange: "onActiveIndexChange" }, decls: 7, vars: 6, consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]], template: function GalleriaItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-galleriaItemSlot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], GalleriaItemSlot, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
GalleriaItem.propDecorators = {
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideShowActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changeItemOnIndicatorHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    captionFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stopSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onActiveIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaItem',
                template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)"  [disabled]="isNavForwardDisabled()" pRipple>
                    <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li *ngFor="let item of value; let index = index;" tabindex="0"
                    (click)="onIndicatorClick(index)" (mouseenter)="onIndicatorMouseEnter(index)" (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}">
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet">
                    </button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], captionFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaThumbnails {
    constructor() {
        this.isVertical = false;
        this.slideShowActive = false;
        this.circular = false;
        this.contentHeight = "300px";
        this.showThumbnailNavigators = true;
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startPos = null;
        this.thumbnailsStyle = null;
        this.sortedResponsiveOptions = null;
        this.totalShiftedItems = 0;
        this.page = 0;
        this._numVisible = 0;
        this.d_numVisible = 0;
        this._oldNumVisible = 0;
        this._activeIndex = 0;
        this._oldactiveIndex = 0;
    }
    get numVisible() {
        return this._numVisible;
    }
    ;
    set numVisible(numVisible) {
        this._numVisible = numVisible;
        this._oldNumVisible = this.d_numVisible;
        this.d_numVisible = numVisible;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._oldactiveIndex = this._activeIndex;
        this._activeIndex = activeIndex;
    }
    ngOnInit() {
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }
    ngAfterContentChecked() {
        let totalShiftedItems = this.totalShiftedItems;
        if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
            if (this._activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex();
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            }
            if (this._oldactiveIndex !== this._activeIndex) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }
            this._oldactiveIndex = this._activeIndex;
            this._oldNumVisible = this.d_numVisible;
        }
    }
    createStyle() {
        if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
        }
        let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${(100 / this.d_numVisible)}%
            }
        `;
        if (this.responsiveOptions) {
            this.sortedResponsiveOptions = [...this.responsiveOptions];
            this.sortedResponsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this._numVisible
            };
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                this.d_numVisible = matchedResponsiveData.numVisible;
            }
        }
    }
    getTabIndex(index) {
        return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
        this.stopTheSlideShow();
        let nextItemIndex = this._activeIndex + 1;
        if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
            this.step(-1);
        }
        let activeIndex = this.circular && (this.value.length - 1) === this._activeIndex ? 0 : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
        let diff = prevItemIndex + this.totalShiftedItems;
        if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
            this.step(1);
        }
        let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onItemClick(index) {
        this.stopTheSlideShow();
        let selectedItemIndex = index;
        if (selectedItemIndex !== this._activeIndex) {
            const diff = selectedItemIndex + this.totalShiftedItems;
            let dir = 0;
            if (selectedItemIndex < this._activeIndex) {
                dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                    this.step(dir);
                }
            }
            else {
                dir = this.getMedianItemIndex() - diff;
                if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                    this.step(dir);
                }
            }
            this.activeIndex = selectedItemIndex;
            this.onActiveIndexChange.emit(this.activeIndex);
        }
    }
    step(dir) {
        let totalShiftedItems = this.totalShiftedItems + dir;
        if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
            totalShiftedItems = this.d_numVisible - this.value.length;
        }
        else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
        }
        if (this.circular) {
            if (dir < 0 && this.value.length - 1 === this._activeIndex) {
                totalShiftedItems = 0;
            }
            else if (dir > 0 && this._activeIndex === 0) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
        }
        if (this.itemsContainer) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    changePageOnTouch(e, diff) {
        if (diff < 0) { // left
            this.navForward(e);
        }
        else { // right
            this.navBackward(e);
        }
    }
    getTotalPageNumber() {
        return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
    }
    getMedianItemIndex() {
        let index = Math.floor(this.d_numVisible / 2);
        return (this.d_numVisible % 2) ? index : index - 1;
    }
    onTransitionEnd() {
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transition = '';
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    isNavBackwardDisabled() {
        return (!this.circular && this._activeIndex === 0) || (this.value.length <= this.d_numVisible);
    }
    isNavForwardDisabled() {
        return (!this.circular && this._activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
    }
    firstItemAciveIndex() {
        return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
        return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
        return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
    }
}
GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) { return new (t || GalleriaThumbnails)(); };
GalleriaThumbnails.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaThumbnails, selectors: [["p-galleriaThumbnails"]], viewQuery: function GalleriaThumbnails_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { isVertical: "isVertical", slideShowActive: "slideShowActive", circular: "circular", contentHeight: "contentHeight", showThumbnailNavigators: "showThumbnailNavigators", numVisible: "numVisible", activeIndex: "activeIndex", containerId: "containerId", value: "value", responsiveOptions: "responsiveOptions", templates: "templates" }, outputs: { onActiveIndexChange: "onActiveIndexChange", stopSlideShow: "stopSlideShow" }, decls: 8, vars: 6, consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]], template: function GalleriaThumbnails_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() { return ctx.onTransitionEnd(); })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) { return ctx.onTouchMove($event); })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) { return ctx.onTouchEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c14, ctx.isVertical ? ctx.contentHeight : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], GalleriaItemSlot], encapsulation: 2, changeDetection: 0 });
GalleriaThumbnails.propDecorators = {
    containerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isVertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideShowActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsiveOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnailNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onActiveIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stopSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['itemsContainer',] }],
    numVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaThumbnails, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaThumbnails',
                template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}"></span>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{'height': isVertical ? contentHeight : ''}">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()"
                        (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)">
                        <div *ngFor="let item of value; let index = index;" [ngClass]="{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),
                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }">
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}"></span>
                </button>
            </div>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemsContainer']
        }] }); })();
class GalleriaModule {
}
GalleriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleriaModule });
GalleriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleriaModule_Factory(t) { return new (t || GalleriaModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleriaModule, { declarations: function () { return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
                declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-galleria.js.map

/***/ }),

/***/ "4R65":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var version = "1.7.1";

  /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */

  // @function extend(dest: Object, src?: Object): Object
  // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
  function extend(dest) {
  	var i, j, len, src;

  	for (j = 1, len = arguments.length; j < len; j++) {
  		src = arguments[j];
  		for (i in src) {
  			dest[i] = src[i];
  		}
  	}
  	return dest;
  }

  // @function create(proto: Object, properties?: Object): Object
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  var create = Object.create || (function () {
  	function F() {}
  	return function (proto) {
  		F.prototype = proto;
  		return new F();
  	};
  })();

  // @function bind(fn: Function, …): Function
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
  // Has a `L.bind()` shortcut.
  function bind(fn, obj) {
  	var slice = Array.prototype.slice;

  	if (fn.bind) {
  		return fn.bind.apply(fn, slice.call(arguments, 1));
  	}

  	var args = slice.call(arguments, 2);

  	return function () {
  		return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
  	};
  }

  // @property lastId: Number
  // Last unique ID used by [`stamp()`](#util-stamp)
  var lastId = 0;

  // @function stamp(obj: Object): Number
  // Returns the unique ID of an object, assigning it one if it doesn't have it.
  function stamp(obj) {
  	/*eslint-disable */
  	obj._leaflet_id = obj._leaflet_id || ++lastId;
  	return obj._leaflet_id;
  	/* eslint-enable */
  }

  // @function throttle(fn: Function, time: Number, context: Object): Function
  // Returns a function which executes function `fn` with the given scope `context`
  // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
  // `fn` will be called no more than one time per given amount of `time`. The arguments
  // received by the bound function will be any arguments passed when binding the
  // function, followed by any arguments passed when invoking the bound function.
  // Has an `L.throttle` shortcut.
  function throttle(fn, time, context) {
  	var lock, args, wrapperFn, later;

  	later = function () {
  		// reset lock and call if queued
  		lock = false;
  		if (args) {
  			wrapperFn.apply(context, args);
  			args = false;
  		}
  	};

  	wrapperFn = function () {
  		if (lock) {
  			// called too soon, queue to call later
  			args = arguments;

  		} else {
  			// call and lock until later
  			fn.apply(context, arguments);
  			setTimeout(later, time);
  			lock = true;
  		}
  	};

  	return wrapperFn;
  }

  // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
  // Returns the number `num` modulo `range` in such a way so it lies within
  // `range[0]` and `range[1]`. The returned value will be always smaller than
  // `range[1]` unless `includeMax` is set to `true`.
  function wrapNum(x, range, includeMax) {
  	var max = range[1],
  	    min = range[0],
  	    d = max - min;
  	return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
  }

  // @function falseFn(): Function
  // Returns a function which always returns `false`.
  function falseFn() { return false; }

  // @function formatNum(num: Number, digits?: Number): Number
  // Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.
  function formatNum(num, digits) {
  	var pow = Math.pow(10, (digits === undefined ? 6 : digits));
  	return Math.round(num * pow) / pow;
  }

  // @function trim(str: String): String
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
  function trim(str) {
  	return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  // @function splitWords(str: String): String[]
  // Trims and splits the string on whitespace and returns the array of parts.
  function splitWords(str) {
  	return trim(str).split(/\s+/);
  }

  // @function setOptions(obj: Object, options: Object): Object
  // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
  function setOptions(obj, options) {
  	if (!Object.prototype.hasOwnProperty.call(obj, 'options')) {
  		obj.options = obj.options ? create(obj.options) : {};
  	}
  	for (var i in options) {
  		obj.options[i] = options[i];
  	}
  	return obj.options;
  }

  // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
  // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
  // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
  // be appended at the end. If `uppercase` is `true`, the parameter names will
  // be uppercased (e.g. `'?A=foo&B=bar'`)
  function getParamString(obj, existingUrl, uppercase) {
  	var params = [];
  	for (var i in obj) {
  		params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
  	}
  	return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
  }

  var templateRe = /\{ *([\w_-]+) *\}/g;

  // @function template(str: String, data: Object): String
  // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
  // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
  // `('Hello foo, bar')`. You can also specify functions instead of strings for
  // data values — they will be evaluated passing `data` as an argument.
  function template(str, data) {
  	return str.replace(templateRe, function (str, key) {
  		var value = data[key];

  		if (value === undefined) {
  			throw new Error('No value provided for variable ' + str);

  		} else if (typeof value === 'function') {
  			value = value(data);
  		}
  		return value;
  	});
  }

  // @function isArray(obj): Boolean
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
  var isArray = Array.isArray || function (obj) {
  	return (Object.prototype.toString.call(obj) === '[object Array]');
  };

  // @function indexOf(array: Array, el: Object): Number
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  function indexOf(array, el) {
  	for (var i = 0; i < array.length; i++) {
  		if (array[i] === el) { return i; }
  	}
  	return -1;
  }

  // @property emptyImageUrl: String
  // Data URI string containing a base64-encoded empty GIF image.
  // Used as a hack to free memory from unused images on WebKit-powered
  // mobile devices (by setting image `src` to this string).
  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

  // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  function getPrefixed(name) {
  	return window['webkit' + name] || window['moz' + name] || window['ms' + name];
  }

  var lastTime = 0;

  // fallback for IE 7-8
  function timeoutDefer(fn) {
  	var time = +new Date(),
  	    timeToCall = Math.max(0, 16 - (time - lastTime));

  	lastTime = time + timeToCall;
  	return window.setTimeout(fn, timeToCall);
  }

  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
  		getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };

  // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
  // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
  // `context` if given. When `immediate` is set, `fn` is called immediately if
  // the browser doesn't have native support for
  // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
  function requestAnimFrame(fn, context, immediate) {
  	if (immediate && requestFn === timeoutDefer) {
  		fn.call(context);
  	} else {
  		return requestFn.call(window, bind(fn, context));
  	}
  }

  // @function cancelAnimFrame(id: Number): undefined
  // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
  function cancelAnimFrame(id) {
  	if (id) {
  		cancelFn.call(window, id);
  	}
  }

  var Util = ({
    extend: extend,
    create: create,
    bind: bind,
    lastId: lastId,
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  });

  // @class Class
  // @aka L.Class

  // @section
  // @uninheritable

  // Thanks to John Resig and Dean Edwards for inspiration!

  function Class() {}

  Class.extend = function (props) {

  	// @function extend(props: Object): Function
  	// [Extends the current class](#class-inheritance) given the properties to be included.
  	// Returns a Javascript function that is a class constructor (to be called with `new`).
  	var NewClass = function () {

  		// call the constructor
  		if (this.initialize) {
  			this.initialize.apply(this, arguments);
  		}

  		// call all constructor hooks
  		this.callInitHooks();
  	};

  	var parentProto = NewClass.__super__ = this.prototype;

  	var proto = create(parentProto);
  	proto.constructor = NewClass;

  	NewClass.prototype = proto;

  	// inherit parent's statics
  	for (var i in this) {
  		if (Object.prototype.hasOwnProperty.call(this, i) && i !== 'prototype' && i !== '__super__') {
  			NewClass[i] = this[i];
  		}
  	}

  	// mix static properties into the class
  	if (props.statics) {
  		extend(NewClass, props.statics);
  		delete props.statics;
  	}

  	// mix includes into the prototype
  	if (props.includes) {
  		checkDeprecatedMixinEvents(props.includes);
  		extend.apply(null, [proto].concat(props.includes));
  		delete props.includes;
  	}

  	// merge options
  	if (proto.options) {
  		props.options = extend(create(proto.options), props.options);
  	}

  	// mix given properties into the prototype
  	extend(proto, props);

  	proto._initHooks = [];

  	// add method for calling all hooks
  	proto.callInitHooks = function () {

  		if (this._initHooksCalled) { return; }

  		if (parentProto.callInitHooks) {
  			parentProto.callInitHooks.call(this);
  		}

  		this._initHooksCalled = true;

  		for (var i = 0, len = proto._initHooks.length; i < len; i++) {
  			proto._initHooks[i].call(this);
  		}
  	};

  	return NewClass;
  };


  // @function include(properties: Object): this
  // [Includes a mixin](#class-includes) into the current class.
  Class.include = function (props) {
  	extend(this.prototype, props);
  	return this;
  };

  // @function mergeOptions(options: Object): this
  // [Merges `options`](#class-options) into the defaults of the class.
  Class.mergeOptions = function (options) {
  	extend(this.prototype.options, options);
  	return this;
  };

  // @function addInitHook(fn: Function): this
  // Adds a [constructor hook](#class-constructor-hooks) to the class.
  Class.addInitHook = function (fn) { // (Function) || (String, args...)
  	var args = Array.prototype.slice.call(arguments, 1);

  	var init = typeof fn === 'function' ? fn : function () {
  		this[fn].apply(this, args);
  	};

  	this.prototype._initHooks = this.prototype._initHooks || [];
  	this.prototype._initHooks.push(init);
  	return this;
  };

  function checkDeprecatedMixinEvents(includes) {
  	if (typeof L === 'undefined' || !L || !L.Mixin) { return; }

  	includes = isArray(includes) ? includes : [includes];

  	for (var i = 0; i < includes.length; i++) {
  		if (includes[i] === L.Mixin.Events) {
  			console.warn('Deprecated include of L.Mixin.Events: ' +
  				'this property will be removed in future releases, ' +
  				'please inherit from L.Evented instead.', new Error().stack);
  		}
  	}
  }

  /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */

  var Events = {
  	/* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */
  	on: function (types, fn, context) {

  		// types can be a map of types/handlers
  		if (typeof types === 'object') {
  			for (var type in types) {
  				// we don't process space-separated events here for performance;
  				// it's a hot path since Layer uses the on(obj) syntax
  				this._on(type, types[type], fn);
  			}

  		} else {
  			// types can be a string of space-separated words
  			types = splitWords(types);

  			for (var i = 0, len = types.length; i < len; i++) {
  				this._on(types[i], fn, context);
  			}
  		}

  		return this;
  	},

  	/* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */
  	off: function (types, fn, context) {

  		if (!types) {
  			// clear all listeners if called without arguments
  			delete this._events;

  		} else if (typeof types === 'object') {
  			for (var type in types) {
  				this._off(type, types[type], fn);
  			}

  		} else {
  			types = splitWords(types);

  			for (var i = 0, len = types.length; i < len; i++) {
  				this._off(types[i], fn, context);
  			}
  		}

  		return this;
  	},

  	// attach listener (without syntactic sugar now)
  	_on: function (type, fn, context) {
  		this._events = this._events || {};

  		/* get/init listeners for type */
  		var typeListeners = this._events[type];
  		if (!typeListeners) {
  			typeListeners = [];
  			this._events[type] = typeListeners;
  		}

  		if (context === this) {
  			// Less memory footprint.
  			context = undefined;
  		}
  		var newListener = {fn: fn, ctx: context},
  		    listeners = typeListeners;

  		// check if fn already there
  		for (var i = 0, len = listeners.length; i < len; i++) {
  			if (listeners[i].fn === fn && listeners[i].ctx === context) {
  				return;
  			}
  		}

  		listeners.push(newListener);
  	},

  	_off: function (type, fn, context) {
  		var listeners,
  		    i,
  		    len;

  		if (!this._events) { return; }

  		listeners = this._events[type];

  		if (!listeners) {
  			return;
  		}

  		if (!fn) {
  			// Set all removed listeners to noop so they are not called if remove happens in fire
  			for (i = 0, len = listeners.length; i < len; i++) {
  				listeners[i].fn = falseFn;
  			}
  			// clear all listeners for a type if function isn't specified
  			delete this._events[type];
  			return;
  		}

  		if (context === this) {
  			context = undefined;
  		}

  		if (listeners) {

  			// find fn and remove it
  			for (i = 0, len = listeners.length; i < len; i++) {
  				var l = listeners[i];
  				if (l.ctx !== context) { continue; }
  				if (l.fn === fn) {

  					// set the removed listener to noop so that's not called if remove happens in fire
  					l.fn = falseFn;

  					if (this._firingCount) {
  						/* copy array in case events are being fired */
  						this._events[type] = listeners = listeners.slice();
  					}
  					listeners.splice(i, 1);

  					return;
  				}
  			}
  		}
  	},

  	// @method fire(type: String, data?: Object, propagate?: Boolean): this
  	// Fires an event of the specified type. You can optionally provide an data
  	// object — the first argument of the listener function will contain its
  	// properties. The event can optionally be propagated to event parents.
  	fire: function (type, data, propagate) {
  		if (!this.listens(type, propagate)) { return this; }

  		var event = extend({}, data, {
  			type: type,
  			target: this,
  			sourceTarget: data && data.sourceTarget || this
  		});

  		if (this._events) {
  			var listeners = this._events[type];

  			if (listeners) {
  				this._firingCount = (this._firingCount + 1) || 1;
  				for (var i = 0, len = listeners.length; i < len; i++) {
  					var l = listeners[i];
  					l.fn.call(l.ctx || this, event);
  				}

  				this._firingCount--;
  			}
  		}

  		if (propagate) {
  			// propagate the event to parents (set with addEventParent)
  			this._propagateEvent(event);
  		}

  		return this;
  	},

  	// @method listens(type: String): Boolean
  	// Returns `true` if a particular event type has any listeners attached to it.
  	listens: function (type, propagate) {
  		var listeners = this._events && this._events[type];
  		if (listeners && listeners.length) { return true; }

  		if (propagate) {
  			// also check parents for listeners if event propagates
  			for (var id in this._eventParents) {
  				if (this._eventParents[id].listens(type, propagate)) { return true; }
  			}
  		}
  		return false;
  	},

  	// @method once(…): this
  	// Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
  	once: function (types, fn, context) {

  		if (typeof types === 'object') {
  			for (var type in types) {
  				this.once(type, types[type], fn);
  			}
  			return this;
  		}

  		var handler = bind(function () {
  			this
  			    .off(types, fn, context)
  			    .off(types, handler, context);
  		}, this);

  		// add a listener that's executed once and removed after that
  		return this
  		    .on(types, fn, context)
  		    .on(types, handler, context);
  	},

  	// @method addEventParent(obj: Evented): this
  	// Adds an event parent - an `Evented` that will receive propagated events
  	addEventParent: function (obj) {
  		this._eventParents = this._eventParents || {};
  		this._eventParents[stamp(obj)] = obj;
  		return this;
  	},

  	// @method removeEventParent(obj: Evented): this
  	// Removes an event parent, so it will stop receiving propagated events
  	removeEventParent: function (obj) {
  		if (this._eventParents) {
  			delete this._eventParents[stamp(obj)];
  		}
  		return this;
  	},

  	_propagateEvent: function (e) {
  		for (var id in this._eventParents) {
  			this._eventParents[id].fire(e.type, extend({
  				layer: e.target,
  				propagatedFrom: e.target
  			}, e), true);
  		}
  	}
  };

  // aliases; we should ditch those eventually

  // @method addEventListener(…): this
  // Alias to [`on(…)`](#evented-on)
  Events.addEventListener = Events.on;

  // @method removeEventListener(…): this
  // Alias to [`off(…)`](#evented-off)

  // @method clearAllEventListeners(…): this
  // Alias to [`off()`](#evented-off)
  Events.removeEventListener = Events.clearAllEventListeners = Events.off;

  // @method addOneTimeEventListener(…): this
  // Alias to [`once(…)`](#evented-once)
  Events.addOneTimeEventListener = Events.once;

  // @method fireEvent(…): this
  // Alias to [`fire(…)`](#evented-fire)
  Events.fireEvent = Events.fire;

  // @method hasEventListeners(…): Boolean
  // Alias to [`listens(…)`](#evented-listens)
  Events.hasEventListeners = Events.listens;

  var Evented = Class.extend(Events);

  /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Point(x, y, round) {
  	// @property x: Number; The `x` coordinate of the point
  	this.x = (round ? Math.round(x) : x);
  	// @property y: Number; The `y` coordinate of the point
  	this.y = (round ? Math.round(y) : y);
  }

  var trunc = Math.trunc || function (v) {
  	return v > 0 ? Math.floor(v) : Math.ceil(v);
  };

  Point.prototype = {

  	// @method clone(): Point
  	// Returns a copy of the current point.
  	clone: function () {
  		return new Point(this.x, this.y);
  	},

  	// @method add(otherPoint: Point): Point
  	// Returns the result of addition of the current and the given points.
  	add: function (point) {
  		// non-destructive, returns a new point
  		return this.clone()._add(toPoint(point));
  	},

  	_add: function (point) {
  		// destructive, used directly for performance in situations where it's safe to modify existing point
  		this.x += point.x;
  		this.y += point.y;
  		return this;
  	},

  	// @method subtract(otherPoint: Point): Point
  	// Returns the result of subtraction of the given point from the current.
  	subtract: function (point) {
  		return this.clone()._subtract(toPoint(point));
  	},

  	_subtract: function (point) {
  		this.x -= point.x;
  		this.y -= point.y;
  		return this;
  	},

  	// @method divideBy(num: Number): Point
  	// Returns the result of division of the current point by the given number.
  	divideBy: function (num) {
  		return this.clone()._divideBy(num);
  	},

  	_divideBy: function (num) {
  		this.x /= num;
  		this.y /= num;
  		return this;
  	},

  	// @method multiplyBy(num: Number): Point
  	// Returns the result of multiplication of the current point by the given number.
  	multiplyBy: function (num) {
  		return this.clone()._multiplyBy(num);
  	},

  	_multiplyBy: function (num) {
  		this.x *= num;
  		this.y *= num;
  		return this;
  	},

  	// @method scaleBy(scale: Point): Point
  	// Multiply each coordinate of the current point by each coordinate of
  	// `scale`. In linear algebra terms, multiply the point by the
  	// [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
  	// defined by `scale`.
  	scaleBy: function (point) {
  		return new Point(this.x * point.x, this.y * point.y);
  	},

  	// @method unscaleBy(scale: Point): Point
  	// Inverse of `scaleBy`. Divide each coordinate of the current point by
  	// each coordinate of `scale`.
  	unscaleBy: function (point) {
  		return new Point(this.x / point.x, this.y / point.y);
  	},

  	// @method round(): Point
  	// Returns a copy of the current point with rounded coordinates.
  	round: function () {
  		return this.clone()._round();
  	},

  	_round: function () {
  		this.x = Math.round(this.x);
  		this.y = Math.round(this.y);
  		return this;
  	},

  	// @method floor(): Point
  	// Returns a copy of the current point with floored coordinates (rounded down).
  	floor: function () {
  		return this.clone()._floor();
  	},

  	_floor: function () {
  		this.x = Math.floor(this.x);
  		this.y = Math.floor(this.y);
  		return this;
  	},

  	// @method ceil(): Point
  	// Returns a copy of the current point with ceiled coordinates (rounded up).
  	ceil: function () {
  		return this.clone()._ceil();
  	},

  	_ceil: function () {
  		this.x = Math.ceil(this.x);
  		this.y = Math.ceil(this.y);
  		return this;
  	},

  	// @method trunc(): Point
  	// Returns a copy of the current point with truncated coordinates (rounded towards zero).
  	trunc: function () {
  		return this.clone()._trunc();
  	},

  	_trunc: function () {
  		this.x = trunc(this.x);
  		this.y = trunc(this.y);
  		return this;
  	},

  	// @method distanceTo(otherPoint: Point): Number
  	// Returns the cartesian distance between the current and the given points.
  	distanceTo: function (point) {
  		point = toPoint(point);

  		var x = point.x - this.x,
  		    y = point.y - this.y;

  		return Math.sqrt(x * x + y * y);
  	},

  	// @method equals(otherPoint: Point): Boolean
  	// Returns `true` if the given point has the same coordinates.
  	equals: function (point) {
  		point = toPoint(point);

  		return point.x === this.x &&
  		       point.y === this.y;
  	},

  	// @method contains(otherPoint: Point): Boolean
  	// Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
  	contains: function (point) {
  		point = toPoint(point);

  		return Math.abs(point.x) <= Math.abs(this.x) &&
  		       Math.abs(point.y) <= Math.abs(this.y);
  	},

  	// @method toString(): String
  	// Returns a string representation of the point for debugging purposes.
  	toString: function () {
  		return 'Point(' +
  		        formatNum(this.x) + ', ' +
  		        formatNum(this.y) + ')';
  	}
  };

  // @factory L.point(x: Number, y: Number, round?: Boolean)
  // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.

  // @alternative
  // @factory L.point(coords: Number[])
  // Expects an array of the form `[x, y]` instead.

  // @alternative
  // @factory L.point(coords: Object)
  // Expects a plain object of the form `{x: Number, y: Number}` instead.
  function toPoint(x, y, round) {
  	if (x instanceof Point) {
  		return x;
  	}
  	if (isArray(x)) {
  		return new Point(x[0], x[1]);
  	}
  	if (x === undefined || x === null) {
  		return x;
  	}
  	if (typeof x === 'object' && 'x' in x && 'y' in x) {
  		return new Point(x.x, x.y);
  	}
  	return new Point(x, y, round);
  }

  /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Bounds(a, b) {
  	if (!a) { return; }

  	var points = b ? [a, b] : a;

  	for (var i = 0, len = points.length; i < len; i++) {
  		this.extend(points[i]);
  	}
  }

  Bounds.prototype = {
  	// @method extend(point: Point): this
  	// Extends the bounds to contain the given point.
  	extend: function (point) { // (Point)
  		point = toPoint(point);

  		// @property min: Point
  		// The top left corner of the rectangle.
  		// @property max: Point
  		// The bottom right corner of the rectangle.
  		if (!this.min && !this.max) {
  			this.min = point.clone();
  			this.max = point.clone();
  		} else {
  			this.min.x = Math.min(point.x, this.min.x);
  			this.max.x = Math.max(point.x, this.max.x);
  			this.min.y = Math.min(point.y, this.min.y);
  			this.max.y = Math.max(point.y, this.max.y);
  		}
  		return this;
  	},

  	// @method getCenter(round?: Boolean): Point
  	// Returns the center point of the bounds.
  	getCenter: function (round) {
  		return new Point(
  		        (this.min.x + this.max.x) / 2,
  		        (this.min.y + this.max.y) / 2, round);
  	},

  	// @method getBottomLeft(): Point
  	// Returns the bottom-left point of the bounds.
  	getBottomLeft: function () {
  		return new Point(this.min.x, this.max.y);
  	},

  	// @method getTopRight(): Point
  	// Returns the top-right point of the bounds.
  	getTopRight: function () { // -> Point
  		return new Point(this.max.x, this.min.y);
  	},

  	// @method getTopLeft(): Point
  	// Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
  	getTopLeft: function () {
  		return this.min; // left, top
  	},

  	// @method getBottomRight(): Point
  	// Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
  	getBottomRight: function () {
  		return this.max; // right, bottom
  	},

  	// @method getSize(): Point
  	// Returns the size of the given bounds
  	getSize: function () {
  		return this.max.subtract(this.min);
  	},

  	// @method contains(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle contains the given one.
  	// @alternative
  	// @method contains(point: Point): Boolean
  	// Returns `true` if the rectangle contains the given point.
  	contains: function (obj) {
  		var min, max;

  		if (typeof obj[0] === 'number' || obj instanceof Point) {
  			obj = toPoint(obj);
  		} else {
  			obj = toBounds(obj);
  		}

  		if (obj instanceof Bounds) {
  			min = obj.min;
  			max = obj.max;
  		} else {
  			min = max = obj;
  		}

  		return (min.x >= this.min.x) &&
  		       (max.x <= this.max.x) &&
  		       (min.y >= this.min.y) &&
  		       (max.y <= this.max.y);
  	},

  	// @method intersects(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle intersects the given bounds. Two bounds
  	// intersect if they have at least one point in common.
  	intersects: function (bounds) { // (Bounds) -> Boolean
  		bounds = toBounds(bounds);

  		var min = this.min,
  		    max = this.max,
  		    min2 = bounds.min,
  		    max2 = bounds.max,
  		    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
  		    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

  		return xIntersects && yIntersects;
  	},

  	// @method overlaps(otherBounds: Bounds): Boolean
  	// Returns `true` if the rectangle overlaps the given bounds. Two bounds
  	// overlap if their intersection is an area.
  	overlaps: function (bounds) { // (Bounds) -> Boolean
  		bounds = toBounds(bounds);

  		var min = this.min,
  		    max = this.max,
  		    min2 = bounds.min,
  		    max2 = bounds.max,
  		    xOverlaps = (max2.x > min.x) && (min2.x < max.x),
  		    yOverlaps = (max2.y > min.y) && (min2.y < max.y);

  		return xOverlaps && yOverlaps;
  	},

  	isValid: function () {
  		return !!(this.min && this.max);
  	}
  };


  // @factory L.bounds(corner1: Point, corner2: Point)
  // Creates a Bounds object from two corners coordinate pairs.
  // @alternative
  // @factory L.bounds(points: Point[])
  // Creates a Bounds object from the given array of points.
  function toBounds(a, b) {
  	if (!a || a instanceof Bounds) {
  		return a;
  	}
  	return new Bounds(a, b);
  }

  /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function LatLngBounds(corner1, corner2) { // (LatLng, LatLng) or (LatLng[])
  	if (!corner1) { return; }

  	var latlngs = corner2 ? [corner1, corner2] : corner1;

  	for (var i = 0, len = latlngs.length; i < len; i++) {
  		this.extend(latlngs[i]);
  	}
  }

  LatLngBounds.prototype = {

  	// @method extend(latlng: LatLng): this
  	// Extend the bounds to contain the given point

  	// @alternative
  	// @method extend(otherBounds: LatLngBounds): this
  	// Extend the bounds to contain the given bounds
  	extend: function (obj) {
  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2, ne2;

  		if (obj instanceof LatLng) {
  			sw2 = obj;
  			ne2 = obj;

  		} else if (obj instanceof LatLngBounds) {
  			sw2 = obj._southWest;
  			ne2 = obj._northEast;

  			if (!sw2 || !ne2) { return this; }

  		} else {
  			return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
  		}

  		if (!sw && !ne) {
  			this._southWest = new LatLng(sw2.lat, sw2.lng);
  			this._northEast = new LatLng(ne2.lat, ne2.lng);
  		} else {
  			sw.lat = Math.min(sw2.lat, sw.lat);
  			sw.lng = Math.min(sw2.lng, sw.lng);
  			ne.lat = Math.max(ne2.lat, ne.lat);
  			ne.lng = Math.max(ne2.lng, ne.lng);
  		}

  		return this;
  	},

  	// @method pad(bufferRatio: Number): LatLngBounds
  	// Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
  	// For example, a ratio of 0.5 extends the bounds by 50% in each direction.
  	// Negative values will retract the bounds.
  	pad: function (bufferRatio) {
  		var sw = this._southWest,
  		    ne = this._northEast,
  		    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
  		    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

  		return new LatLngBounds(
  		        new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
  		        new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
  	},

  	// @method getCenter(): LatLng
  	// Returns the center point of the bounds.
  	getCenter: function () {
  		return new LatLng(
  		        (this._southWest.lat + this._northEast.lat) / 2,
  		        (this._southWest.lng + this._northEast.lng) / 2);
  	},

  	// @method getSouthWest(): LatLng
  	// Returns the south-west point of the bounds.
  	getSouthWest: function () {
  		return this._southWest;
  	},

  	// @method getNorthEast(): LatLng
  	// Returns the north-east point of the bounds.
  	getNorthEast: function () {
  		return this._northEast;
  	},

  	// @method getNorthWest(): LatLng
  	// Returns the north-west point of the bounds.
  	getNorthWest: function () {
  		return new LatLng(this.getNorth(), this.getWest());
  	},

  	// @method getSouthEast(): LatLng
  	// Returns the south-east point of the bounds.
  	getSouthEast: function () {
  		return new LatLng(this.getSouth(), this.getEast());
  	},

  	// @method getWest(): Number
  	// Returns the west longitude of the bounds
  	getWest: function () {
  		return this._southWest.lng;
  	},

  	// @method getSouth(): Number
  	// Returns the south latitude of the bounds
  	getSouth: function () {
  		return this._southWest.lat;
  	},

  	// @method getEast(): Number
  	// Returns the east longitude of the bounds
  	getEast: function () {
  		return this._northEast.lng;
  	},

  	// @method getNorth(): Number
  	// Returns the north latitude of the bounds
  	getNorth: function () {
  		return this._northEast.lat;
  	},

  	// @method contains(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle contains the given one.

  	// @alternative
  	// @method contains (latlng: LatLng): Boolean
  	// Returns `true` if the rectangle contains the given point.
  	contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
  		if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
  			obj = toLatLng(obj);
  		} else {
  			obj = toLatLngBounds(obj);
  		}

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2, ne2;

  		if (obj instanceof LatLngBounds) {
  			sw2 = obj.getSouthWest();
  			ne2 = obj.getNorthEast();
  		} else {
  			sw2 = ne2 = obj;
  		}

  		return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
  		       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
  	},

  	// @method intersects(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
  	intersects: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2 = bounds.getSouthWest(),
  		    ne2 = bounds.getNorthEast(),

  		    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
  		    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

  		return latIntersects && lngIntersects;
  	},

  	// @method overlaps(otherBounds: LatLngBounds): Boolean
  	// Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
  	overlaps: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		var sw = this._southWest,
  		    ne = this._northEast,
  		    sw2 = bounds.getSouthWest(),
  		    ne2 = bounds.getNorthEast(),

  		    latOverlaps = (ne2.lat > sw.lat) && (sw2.lat < ne.lat),
  		    lngOverlaps = (ne2.lng > sw.lng) && (sw2.lng < ne.lng);

  		return latOverlaps && lngOverlaps;
  	},

  	// @method toBBoxString(): String
  	// Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
  	toBBoxString: function () {
  		return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
  	},

  	// @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
  	// Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
  	equals: function (bounds, maxMargin) {
  		if (!bounds) { return false; }

  		bounds = toLatLngBounds(bounds);

  		return this._southWest.equals(bounds.getSouthWest(), maxMargin) &&
  		       this._northEast.equals(bounds.getNorthEast(), maxMargin);
  	},

  	// @method isValid(): Boolean
  	// Returns `true` if the bounds are properly initialized.
  	isValid: function () {
  		return !!(this._southWest && this._northEast);
  	}
  };

  // TODO International date line?

  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
  // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.

  // @alternative
  // @factory L.latLngBounds(latlngs: LatLng[])
  // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
  function toLatLngBounds(a, b) {
  	if (a instanceof LatLngBounds) {
  		return a;
  	}
  	return new LatLngBounds(a, b);
  }

  /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function LatLng(lat, lng, alt) {
  	if (isNaN(lat) || isNaN(lng)) {
  		throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
  	}

  	// @property lat: Number
  	// Latitude in degrees
  	this.lat = +lat;

  	// @property lng: Number
  	// Longitude in degrees
  	this.lng = +lng;

  	// @property alt: Number
  	// Altitude in meters (optional)
  	if (alt !== undefined) {
  		this.alt = +alt;
  	}
  }

  LatLng.prototype = {
  	// @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
  	// Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
  	equals: function (obj, maxMargin) {
  		if (!obj) { return false; }

  		obj = toLatLng(obj);

  		var margin = Math.max(
  		        Math.abs(this.lat - obj.lat),
  		        Math.abs(this.lng - obj.lng));

  		return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
  	},

  	// @method toString(): String
  	// Returns a string representation of the point (for debugging purposes).
  	toString: function (precision) {
  		return 'LatLng(' +
  		        formatNum(this.lat, precision) + ', ' +
  		        formatNum(this.lng, precision) + ')';
  	},

  	// @method distanceTo(otherLatLng: LatLng): Number
  	// Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
  	distanceTo: function (other) {
  		return Earth.distance(this, toLatLng(other));
  	},

  	// @method wrap(): LatLng
  	// Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
  	wrap: function () {
  		return Earth.wrapLatLng(this);
  	},

  	// @method toBounds(sizeInMeters: Number): LatLngBounds
  	// Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
  	toBounds: function (sizeInMeters) {
  		var latAccuracy = 180 * sizeInMeters / 40075017,
  		    lngAccuracy = latAccuracy / Math.cos((Math.PI / 180) * this.lat);

  		return toLatLngBounds(
  		        [this.lat - latAccuracy, this.lng - lngAccuracy],
  		        [this.lat + latAccuracy, this.lng + lngAccuracy]);
  	},

  	clone: function () {
  		return new LatLng(this.lat, this.lng, this.alt);
  	}
  };



  // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).

  // @alternative
  // @factory L.latLng(coords: Array): LatLng
  // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.

  // @alternative
  // @factory L.latLng(coords: Object): LatLng
  // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

  function toLatLng(a, b, c) {
  	if (a instanceof LatLng) {
  		return a;
  	}
  	if (isArray(a) && typeof a[0] !== 'object') {
  		if (a.length === 3) {
  			return new LatLng(a[0], a[1], a[2]);
  		}
  		if (a.length === 2) {
  			return new LatLng(a[0], a[1]);
  		}
  		return null;
  	}
  	if (a === undefined || a === null) {
  		return a;
  	}
  	if (typeof a === 'object' && 'lat' in a) {
  		return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
  	}
  	if (b === undefined) {
  		return null;
  	}
  	return new LatLng(a, b, c);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */

  var CRS = {
  	// @method latLngToPoint(latlng: LatLng, zoom: Number): Point
  	// Projects geographical coordinates into pixel coordinates for a given zoom.
  	latLngToPoint: function (latlng, zoom) {
  		var projectedPoint = this.projection.project(latlng),
  		    scale = this.scale(zoom);

  		return this.transformation._transform(projectedPoint, scale);
  	},

  	// @method pointToLatLng(point: Point, zoom: Number): LatLng
  	// The inverse of `latLngToPoint`. Projects pixel coordinates on a given
  	// zoom into geographical coordinates.
  	pointToLatLng: function (point, zoom) {
  		var scale = this.scale(zoom),
  		    untransformedPoint = this.transformation.untransform(point, scale);

  		return this.projection.unproject(untransformedPoint);
  	},

  	// @method project(latlng: LatLng): Point
  	// Projects geographical coordinates into coordinates in units accepted for
  	// this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
  	project: function (latlng) {
  		return this.projection.project(latlng);
  	},

  	// @method unproject(point: Point): LatLng
  	// Given a projected coordinate returns the corresponding LatLng.
  	// The inverse of `project`.
  	unproject: function (point) {
  		return this.projection.unproject(point);
  	},

  	// @method scale(zoom: Number): Number
  	// Returns the scale used when transforming projected coordinates into
  	// pixel coordinates for a particular zoom. For example, it returns
  	// `256 * 2^zoom` for Mercator-based CRS.
  	scale: function (zoom) {
  		return 256 * Math.pow(2, zoom);
  	},

  	// @method zoom(scale: Number): Number
  	// Inverse of `scale()`, returns the zoom level corresponding to a scale
  	// factor of `scale`.
  	zoom: function (scale) {
  		return Math.log(scale / 256) / Math.LN2;
  	},

  	// @method getProjectedBounds(zoom: Number): Bounds
  	// Returns the projection's bounds scaled and transformed for the provided `zoom`.
  	getProjectedBounds: function (zoom) {
  		if (this.infinite) { return null; }

  		var b = this.projection.bounds,
  		    s = this.scale(zoom),
  		    min = this.transformation.transform(b.min, s),
  		    max = this.transformation.transform(b.max, s);

  		return new Bounds(min, max);
  	},

  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
  	// Returns the distance between two geographical coordinates.

  	// @property code: String
  	// Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
  	//
  	// @property wrapLng: Number[]
  	// An array of two numbers defining whether the longitude (horizontal) coordinate
  	// axis wraps around a given range and how. Defaults to `[-180, 180]` in most
  	// geographical CRSs. If `undefined`, the longitude axis does not wrap around.
  	//
  	// @property wrapLat: Number[]
  	// Like `wrapLng`, but for the latitude (vertical) axis.

  	// wrapLng: [min, max],
  	// wrapLat: [min, max],

  	// @property infinite: Boolean
  	// If true, the coordinate space will be unbounded (infinite in both axes)
  	infinite: false,

  	// @method wrapLatLng(latlng: LatLng): LatLng
  	// Returns a `LatLng` where lat and lng has been wrapped according to the
  	// CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
  	wrapLatLng: function (latlng) {
  		var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
  		    lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
  		    alt = latlng.alt;

  		return new LatLng(lat, lng, alt);
  	},

  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  	// Returns a `LatLngBounds` with the same size as the given one, ensuring
  	// that its center is within the CRS's bounds.
  	// Only accepts actual `L.LatLngBounds` instances, not arrays.
  	wrapLatLngBounds: function (bounds) {
  		var center = bounds.getCenter(),
  		    newCenter = this.wrapLatLng(center),
  		    latShift = center.lat - newCenter.lat,
  		    lngShift = center.lng - newCenter.lng;

  		if (latShift === 0 && lngShift === 0) {
  			return bounds;
  		}

  		var sw = bounds.getSouthWest(),
  		    ne = bounds.getNorthEast(),
  		    newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
  		    newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);

  		return new LatLngBounds(newSw, newNe);
  	}
  };

  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
  	wrapLng: [-180, 180],

  	// Mean Earth Radius, as recommended for use by
  	// the International Union of Geodesy and Geophysics,
  	// see http://rosettacode.org/wiki/Haversine_formula
  	R: 6371000,

  	// distance between two geographical points using spherical law of cosines approximation
  	distance: function (latlng1, latlng2) {
  		var rad = Math.PI / 180,
  		    lat1 = latlng1.lat * rad,
  		    lat2 = latlng2.lat * rad,
  		    sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
  		    sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
  		    a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
  		    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  		return this.R * c;
  	}
  });

  /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

  var earthRadius = 6378137;

  var SphericalMercator = {

  	R: earthRadius,
  	MAX_LATITUDE: 85.0511287798,

  	project: function (latlng) {
  		var d = Math.PI / 180,
  		    max = this.MAX_LATITUDE,
  		    lat = Math.max(Math.min(max, latlng.lat), -max),
  		    sin = Math.sin(lat * d);

  		return new Point(
  			this.R * latlng.lng * d,
  			this.R * Math.log((1 + sin) / (1 - sin)) / 2);
  	},

  	unproject: function (point) {
  		var d = 180 / Math.PI;

  		return new LatLng(
  			(2 * Math.atan(Math.exp(point.y / this.R)) - (Math.PI / 2)) * d,
  			point.x * d / this.R);
  	},

  	bounds: (function () {
  		var d = earthRadius * Math.PI;
  		return new Bounds([-d, -d], [d, d]);
  	})()
  };

  /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */


  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
  // Creates a `Transformation` object with the given coefficients.
  function Transformation(a, b, c, d) {
  	if (isArray(a)) {
  		// use array properties
  		this._a = a[0];
  		this._b = a[1];
  		this._c = a[2];
  		this._d = a[3];
  		return;
  	}
  	this._a = a;
  	this._b = b;
  	this._c = c;
  	this._d = d;
  }

  Transformation.prototype = {
  	// @method transform(point: Point, scale?: Number): Point
  	// Returns a transformed point, optionally multiplied by the given scale.
  	// Only accepts actual `L.Point` instances, not arrays.
  	transform: function (point, scale) { // (Point, Number) -> Point
  		return this._transform(point.clone(), scale);
  	},

  	// destructive transform (faster)
  	_transform: function (point, scale) {
  		scale = scale || 1;
  		point.x = scale * (this._a * point.x + this._b);
  		point.y = scale * (this._c * point.y + this._d);
  		return point;
  	},

  	// @method untransform(point: Point, scale?: Number): Point
  	// Returns the reverse transformation of the given point, optionally divided
  	// by the given scale. Only accepts actual `L.Point` instances, not arrays.
  	untransform: function (point, scale) {
  		scale = scale || 1;
  		return new Point(
  		        (point.x / scale - this._b) / this._a,
  		        (point.y / scale - this._d) / this._c);
  	}
  };

  // factory L.transformation(a: Number, b: Number, c: Number, d: Number)

  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // Instantiates a Transformation object with the given coefficients.

  // @alternative
  // @factory L.transformation(coefficients: Array): Transformation
  // Expects an coefficients array of the form
  // `[a: Number, b: Number, c: Number, d: Number]`.

  function toTransformation(a, b, c, d) {
  	return new Transformation(a, b, c, d);
  }

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */

  var EPSG3857 = extend({}, Earth, {
  	code: 'EPSG:3857',
  	projection: SphericalMercator,

  	transformation: (function () {
  		var scale = 0.5 / (Math.PI * SphericalMercator.R);
  		return toTransformation(scale, 0.5, -scale, 0.5);
  	}())
  });

  var EPSG900913 = extend({}, EPSG3857, {
  	code: 'EPSG:900913'
  });

  // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:

  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
  function svgCreate(name) {
  	return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions
  function pointsToPath(rings, closed) {
  	var str = '',
  	i, j, len, len2, points, p;

  	for (i = 0, len = rings.length; i < len; i++) {
  		points = rings[i];

  		for (j = 0, len2 = points.length; j < len2; j++) {
  			p = points[j];
  			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
  		}

  		// closes the ring for polygons; "x" is VML syntax
  		str += closed ? (svg ? 'z' : 'x') : '';
  	}

  	// SVG complains about empty path strings
  	return str || 'M0 0';
  }

  /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */

  var style$1 = document.documentElement.style;

  // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
  var ie = 'ActiveXObject' in window;

  // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
  var ielt9 = ie && !document.addEventListener;

  // @property edge: Boolean; `true` for the Edge web browser.
  var edge = 'msLaunchUri' in navigator && !('documentMode' in document);

  // @property webkit: Boolean;
  // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
  var webkit = userAgentContains('webkit');

  // @property android: Boolean
  // `true` for any browser running on an Android platform.
  var android = userAgentContains('android');

  // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.
  var android23 = userAgentContains('android 2') || userAgentContains('android 3');

  /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */
  var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
  // @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)
  var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window);

  // @property opera: Boolean; `true` for the Opera browser
  var opera = !!window.opera;

  // @property chrome: Boolean; `true` for the Chrome browser.
  var chrome = !edge && userAgentContains('chrome');

  // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie;

  // @property safari: Boolean; `true` for the Safari browser.
  var safari = !chrome && userAgentContains('safari');

  var phantom = userAgentContains('phantom');

  // @property opera12: Boolean
  // `true` for the Opera browser supporting CSS transforms (version 12 or later).
  var opera12 = 'OTransition' in style$1;

  // @property win: Boolean; `true` when the browser is running in a Windows platform
  var win = navigator.platform.indexOf('Win') === 0;

  // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
  var ie3d = ie && ('transition' in style$1);

  // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
  var webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23;

  // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
  var gecko3d = 'MozPerspective' in style$1;

  // @property any3d: Boolean
  // `true` for all browsers supporting CSS transforms.
  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;

  // @property mobile: Boolean; `true` for all browsers running in a mobile device.
  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile');

  // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
  var mobileWebkit = mobile && webkit;

  // @property mobileWebkit3d: Boolean
  // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
  var mobileWebkit3d = mobile && webkit3d;

  // @property msPointer: Boolean
  // `true` for browsers implementing the Microsoft touch events model (notably IE10).
  var msPointer = !window.PointerEvent && window.MSPointerEvent;

  // @property pointer: Boolean
  // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
  var pointer = !!(window.PointerEvent || msPointer);

  // @property touch: Boolean
  // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
  // This does not necessarily mean that the browser is running in a computer with
  // a touchscreen, it only means that the browser is capable of understanding
  // touch events.
  var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
  		(window.DocumentTouch && document instanceof window.DocumentTouch));

  // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
  var mobileOpera = mobile && opera;

  // @property mobileGecko: Boolean
  // `true` for gecko-based browsers running in a mobile device.
  var mobileGecko = mobile && gecko;

  // @property retina: Boolean
  // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
  var retina = (window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1;

  // @property passiveEvents: Boolean
  // `true` for browsers that support passive events.
  var passiveEvents = (function () {
  	var supportsPassiveOption = false;
  	try {
  		var opts = Object.defineProperty({}, 'passive', {
  			get: function () { // eslint-disable-line getter-return
  				supportsPassiveOption = true;
  			}
  		});
  		window.addEventListener('testPassiveEventSupport', falseFn, opts);
  		window.removeEventListener('testPassiveEventSupport', falseFn, opts);
  	} catch (e) {
  		// Errors can safely be ignored since this is only a browser support test.
  	}
  	return supportsPassiveOption;
  }());

  // @property canvas: Boolean
  // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
  var canvas = (function () {
  	return !!document.createElement('canvas').getContext;
  }());

  // @property svg: Boolean
  // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
  var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect);

  // @property vml: Boolean
  // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
  var vml = !svg && (function () {
  	try {
  		var div = document.createElement('div');
  		div.innerHTML = '<v:shape adj="1"/>';

  		var shape = div.firstChild;
  		shape.style.behavior = 'url(#default#VML)';

  		return shape && (typeof shape.adj === 'object');

  	} catch (e) {
  		return false;
  	}
  }());


  function userAgentContains(str) {
  	return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
  }

  var Browser = ({
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    androidStock: androidStock,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    passiveEvents: passiveEvents,
    canvas: canvas,
    svg: svg,
    vml: vml
  });

  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */


  var POINTER_DOWN =   msPointer ? 'MSPointerDown'   : 'pointerdown';
  var POINTER_MOVE =   msPointer ? 'MSPointerMove'   : 'pointermove';
  var POINTER_UP =     msPointer ? 'MSPointerUp'     : 'pointerup';
  var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';

  var _pointers = {};
  var _pointerDocListener = false;

  // Provides a touch events wrapper for (ms)pointer events.
  // ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler, id) {
  	if (type === 'touchstart') {
  		_addPointerStart(obj, handler, id);

  	} else if (type === 'touchmove') {
  		_addPointerMove(obj, handler, id);

  	} else if (type === 'touchend') {
  		_addPointerEnd(obj, handler, id);
  	}

  	return this;
  }

  function removePointerListener(obj, type, id) {
  	var handler = obj['_leaflet_' + type + id];

  	if (type === 'touchstart') {
  		obj.removeEventListener(POINTER_DOWN, handler, false);

  	} else if (type === 'touchmove') {
  		obj.removeEventListener(POINTER_MOVE, handler, false);

  	} else if (type === 'touchend') {
  		obj.removeEventListener(POINTER_UP, handler, false);
  		obj.removeEventListener(POINTER_CANCEL, handler, false);
  	}

  	return this;
  }

  function _addPointerStart(obj, handler, id) {
  	var onDown = bind(function (e) {
  		// IE10 specific: MsTouch needs preventDefault. See #2000
  		if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) {
  			preventDefault(e);
  		}

  		_handlePointer(e, handler);
  	});

  	obj['_leaflet_touchstart' + id] = onDown;
  	obj.addEventListener(POINTER_DOWN, onDown, false);

  	// need to keep track of what pointers and how many are active to provide e.touches emulation
  	if (!_pointerDocListener) {
  		// we listen document as any drags that end by moving the touch off the screen get fired there
  		document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
  		document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
  		document.addEventListener(POINTER_UP, _globalPointerUp, true);
  		document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);

  		_pointerDocListener = true;
  	}
  }

  function _globalPointerDown(e) {
  	_pointers[e.pointerId] = e;
  }

  function _globalPointerMove(e) {
  	if (_pointers[e.pointerId]) {
  		_pointers[e.pointerId] = e;
  	}
  }

  function _globalPointerUp(e) {
  	delete _pointers[e.pointerId];
  }

  function _handlePointer(e, handler) {
  	e.touches = [];
  	for (var i in _pointers) {
  		e.touches.push(_pointers[i]);
  	}
  	e.changedTouches = [e];

  	handler(e);
  }

  function _addPointerMove(obj, handler, id) {
  	var onMove = function (e) {
  		// don't fire touch moves when mouse isn't down
  		if ((e.pointerType === (e.MSPOINTER_TYPE_MOUSE || 'mouse')) && e.buttons === 0) {
  			return;
  		}

  		_handlePointer(e, handler);
  	};

  	obj['_leaflet_touchmove' + id] = onMove;
  	obj.addEventListener(POINTER_MOVE, onMove, false);
  }

  function _addPointerEnd(obj, handler, id) {
  	var onUp = function (e) {
  		_handlePointer(e, handler);
  	};

  	obj['_leaflet_touchend' + id] = onUp;
  	obj.addEventListener(POINTER_UP, onUp, false);
  	obj.addEventListener(POINTER_CANCEL, onUp, false);
  }

  /*
   * Extends the event handling code with double tap support for mobile browsers.
   */

  var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';
  var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';
  var _pre = '_leaflet_';

  // inspired by Zepto touch code by Thomas Fuchs
  function addDoubleTapListener(obj, handler, id) {
  	var last, touch$$1,
  	    doubleTap = false,
  	    delay = 250;

  	function onTouchStart(e) {

  		if (pointer) {
  			if (!e.isPrimary) { return; }
  			if (e.pointerType === 'mouse') { return; } // mouse fires native dblclick
  		} else if (e.touches.length > 1) {
  			return;
  		}

  		var now = Date.now(),
  		    delta = now - (last || now);

  		touch$$1 = e.touches ? e.touches[0] : e;
  		doubleTap = (delta > 0 && delta <= delay);
  		last = now;
  	}

  	function onTouchEnd(e) {
  		if (doubleTap && !touch$$1.cancelBubble) {
  			if (pointer) {
  				if (e.pointerType === 'mouse') { return; }
  				// work around .type being readonly with MSPointer* events
  				var newTouch = {},
  				    prop, i;

  				for (i in touch$$1) {
  					prop = touch$$1[i];
  					newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
  				}
  				touch$$1 = newTouch;
  			}
  			touch$$1.type = 'dblclick';
  			touch$$1.button = 0;
  			handler(touch$$1);
  			last = null;
  		}
  	}

  	obj[_pre + _touchstart + id] = onTouchStart;
  	obj[_pre + _touchend + id] = onTouchEnd;
  	obj[_pre + 'dblclick' + id] = handler;

  	obj.addEventListener(_touchstart, onTouchStart, passiveEvents ? {passive: false} : false);
  	obj.addEventListener(_touchend, onTouchEnd, passiveEvents ? {passive: false} : false);

  	// On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
  	// the browser doesn't fire touchend/pointerup events but does fire
  	// native dblclicks. See #4127.
  	// Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.
  	obj.addEventListener('dblclick', handler, false);

  	return this;
  }

  function removeDoubleTapListener(obj, id) {
  	var touchstart = obj[_pre + _touchstart + id],
  	    touchend = obj[_pre + _touchend + id],
  	    dblclick = obj[_pre + 'dblclick' + id];

  	obj.removeEventListener(_touchstart, touchstart, passiveEvents ? {passive: false} : false);
  	obj.removeEventListener(_touchend, touchend, passiveEvents ? {passive: false} : false);
  	obj.removeEventListener('dblclick', dblclick, false);

  	return this;
  }

  /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */


  // @property TRANSFORM: String
  // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
  var TRANSFORM = testProp(
  	['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

  // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser

  // @property TRANSITION: String
  // Vendor-prefixed transition style name.
  var TRANSITION = testProp(
  	['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

  // @property TRANSITION_END: String
  // Vendor-prefixed transitionend event name.
  var TRANSITION_END =
  	TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend';


  // @function get(id: String|HTMLElement): HTMLElement
  // Returns an element given its DOM id, or returns the element itself
  // if it was passed directly.
  function get(id) {
  	return typeof id === 'string' ? document.getElementById(id) : id;
  }

  // @function getStyle(el: HTMLElement, styleAttrib: String): String
  // Returns the value for a certain style attribute on an element,
  // including computed values or values set through CSS.
  function getStyle(el, style) {
  	var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);

  	if ((!value || value === 'auto') && document.defaultView) {
  		var css = document.defaultView.getComputedStyle(el, null);
  		value = css ? css[style] : null;
  	}
  	return value === 'auto' ? null : value;
  }

  // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
  // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
  function create$1(tagName, className, container) {
  	var el = document.createElement(tagName);
  	el.className = className || '';

  	if (container) {
  		container.appendChild(el);
  	}
  	return el;
  }

  // @function remove(el: HTMLElement)
  // Removes `el` from its parent element
  function remove(el) {
  	var parent = el.parentNode;
  	if (parent) {
  		parent.removeChild(el);
  	}
  }

  // @function empty(el: HTMLElement)
  // Removes all of `el`'s children elements from `el`
  function empty(el) {
  	while (el.firstChild) {
  		el.removeChild(el.firstChild);
  	}
  }

  // @function toFront(el: HTMLElement)
  // Makes `el` the last child of its parent, so it renders in front of the other children.
  function toFront(el) {
  	var parent = el.parentNode;
  	if (parent && parent.lastChild !== el) {
  		parent.appendChild(el);
  	}
  }

  // @function toBack(el: HTMLElement)
  // Makes `el` the first child of its parent, so it renders behind the other children.
  function toBack(el) {
  	var parent = el.parentNode;
  	if (parent && parent.firstChild !== el) {
  		parent.insertBefore(el, parent.firstChild);
  	}
  }

  // @function hasClass(el: HTMLElement, name: String): Boolean
  // Returns `true` if the element's class attribute contains `name`.
  function hasClass(el, name) {
  	if (el.classList !== undefined) {
  		return el.classList.contains(name);
  	}
  	var className = getClass(el);
  	return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  }

  // @function addClass(el: HTMLElement, name: String)
  // Adds `name` to the element's class attribute.
  function addClass(el, name) {
  	if (el.classList !== undefined) {
  		var classes = splitWords(name);
  		for (var i = 0, len = classes.length; i < len; i++) {
  			el.classList.add(classes[i]);
  		}
  	} else if (!hasClass(el, name)) {
  		var className = getClass(el);
  		setClass(el, (className ? className + ' ' : '') + name);
  	}
  }

  // @function removeClass(el: HTMLElement, name: String)
  // Removes `name` from the element's class attribute.
  function removeClass(el, name) {
  	if (el.classList !== undefined) {
  		el.classList.remove(name);
  	} else {
  		setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
  	}
  }

  // @function setClass(el: HTMLElement, name: String)
  // Sets the element's class.
  function setClass(el, name) {
  	if (el.className.baseVal === undefined) {
  		el.className = name;
  	} else {
  		// in case of SVG element
  		el.className.baseVal = name;
  	}
  }

  // @function getClass(el: HTMLElement): String
  // Returns the element's class.
  function getClass(el) {
  	// Check if the element is an SVGElementInstance and use the correspondingElement instead
  	// (Required for linked SVG elements in IE11.)
  	if (el.correspondingElement) {
  		el = el.correspondingElement;
  	}
  	return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  }

  // @function setOpacity(el: HTMLElement, opacity: Number)
  // Set the opacity of an element (including old IE support).
  // `opacity` must be a number from `0` to `1`.
  function setOpacity(el, value) {
  	if ('opacity' in el.style) {
  		el.style.opacity = value;
  	} else if ('filter' in el.style) {
  		_setOpacityIE(el, value);
  	}
  }

  function _setOpacityIE(el, value) {
  	var filter = false,
  	    filterName = 'DXImageTransform.Microsoft.Alpha';

  	// filters collection throws an error if we try to retrieve a filter that doesn't exist
  	try {
  		filter = el.filters.item(filterName);
  	} catch (e) {
  		// don't set opacity to 1 if we haven't already set an opacity,
  		// it isn't needed and breaks transparent pngs.
  		if (value === 1) { return; }
  	}

  	value = Math.round(value * 100);

  	if (filter) {
  		filter.Enabled = (value !== 100);
  		filter.Opacity = value;
  	} else {
  		el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
  	}
  }

  // @function testProp(props: String[]): String|false
  // Goes through the array of style names and returns the first name
  // that is a valid style name for an element. If no such name is found,
  // it returns false. Useful for vendor-prefixed styles like `transform`.
  function testProp(props) {
  	var style = document.documentElement.style;

  	for (var i = 0; i < props.length; i++) {
  		if (props[i] in style) {
  			return props[i];
  		}
  	}
  	return false;
  }

  // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
  // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
  // and optionally scaled by `scale`. Does not have an effect if the
  // browser doesn't support 3D CSS transforms.
  function setTransform(el, offset, scale) {
  	var pos = offset || new Point(0, 0);

  	el.style[TRANSFORM] =
  		(ie3d ?
  			'translate(' + pos.x + 'px,' + pos.y + 'px)' :
  			'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
  		(scale ? ' scale(' + scale + ')' : '');
  }

  // @function setPosition(el: HTMLElement, position: Point)
  // Sets the position of `el` to coordinates specified by `position`,
  // using CSS translate or top/left positioning depending on the browser
  // (used by Leaflet internally to position its layers).
  function setPosition(el, point) {

  	/*eslint-disable */
  	el._leaflet_pos = point;
  	/* eslint-enable */

  	if (any3d) {
  		setTransform(el, point);
  	} else {
  		el.style.left = point.x + 'px';
  		el.style.top = point.y + 'px';
  	}
  }

  // @function getPosition(el: HTMLElement): Point
  // Returns the coordinates of an element previously positioned with setPosition.
  function getPosition(el) {
  	// this method is only used for elements previously positioned using setPosition,
  	// so it's safe to cache the position for performance

  	return el._leaflet_pos || new Point(0, 0);
  }

  // @function disableTextSelection()
  // Prevents the user from generating `selectstart` DOM events, usually generated
  // when the user drags the mouse through a page with text. Used internally
  // by Leaflet to override the behaviour of any click-and-drag interaction on
  // the map. Affects drag interactions on the whole document.

  // @function enableTextSelection()
  // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
  var disableTextSelection;
  var enableTextSelection;
  var _userSelect;
  if ('onselectstart' in document) {
  	disableTextSelection = function () {
  		on(window, 'selectstart', preventDefault);
  	};
  	enableTextSelection = function () {
  		off(window, 'selectstart', preventDefault);
  	};
  } else {
  	var userSelectProperty = testProp(
  		['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

  	disableTextSelection = function () {
  		if (userSelectProperty) {
  			var style = document.documentElement.style;
  			_userSelect = style[userSelectProperty];
  			style[userSelectProperty] = 'none';
  		}
  	};
  	enableTextSelection = function () {
  		if (userSelectProperty) {
  			document.documentElement.style[userSelectProperty] = _userSelect;
  			_userSelect = undefined;
  		}
  	};
  }

  // @function disableImageDrag()
  // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
  // for `dragstart` DOM events, usually generated when the user drags an image.
  function disableImageDrag() {
  	on(window, 'dragstart', preventDefault);
  }

  // @function enableImageDrag()
  // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
  function enableImageDrag() {
  	off(window, 'dragstart', preventDefault);
  }

  var _outlineElement, _outlineStyle;
  // @function preventOutline(el: HTMLElement)
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
  // of the element `el` invisible. Used internally by Leaflet to prevent
  // focusable elements from displaying an outline when the user performs a
  // drag interaction on them.
  function preventOutline(element) {
  	while (element.tabIndex === -1) {
  		element = element.parentNode;
  	}
  	if (!element.style) { return; }
  	restoreOutline();
  	_outlineElement = element;
  	_outlineStyle = element.style.outline;
  	element.style.outline = 'none';
  	on(window, 'keydown', restoreOutline);
  }

  // @function restoreOutline()
  // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
  function restoreOutline() {
  	if (!_outlineElement) { return; }
  	_outlineElement.style.outline = _outlineStyle;
  	_outlineElement = undefined;
  	_outlineStyle = undefined;
  	off(window, 'keydown', restoreOutline);
  }

  // @function getSizedParentNode(el: HTMLElement): HTMLElement
  // Finds the closest parent node which size (width and height) is not null.
  function getSizedParentNode(element) {
  	do {
  		element = element.parentNode;
  	} while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
  	return element;
  }

  // @function getScale(el: HTMLElement): Object
  // Computes the CSS scale currently applied on the element.
  // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
  // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
  function getScale(element) {
  	var rect = element.getBoundingClientRect(); // Read-only in old browsers.

  	return {
  		x: rect.width / element.offsetWidth || 1,
  		y: rect.height / element.offsetHeight || 1,
  		boundingClientRect: rect
  	};
  }

  var DomUtil = ({
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    disableTextSelection: disableTextSelection,
    enableTextSelection: enableTextSelection,
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline,
    getSizedParentNode: getSizedParentNode,
    getScale: getScale
  });

  /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */

  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.

  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Adds a listener function (`fn`) to a particular DOM event type of the
  // element `el`. You can optionally specify the context of the listener
  // (object the `this` keyword will point to). You can also pass several
  // space-separated types (e.g. `'click dblclick'`).

  // @alternative
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
  // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  function on(obj, types, fn, context) {

  	if (typeof types === 'object') {
  		for (var type in types) {
  			addOne(obj, type, types[type], fn);
  		}
  	} else {
  		types = splitWords(types);

  		for (var i = 0, len = types.length; i < len; i++) {
  			addOne(obj, types[i], fn, context);
  		}
  	}

  	return this;
  }

  var eventsKey = '_leaflet_events';

  // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Removes a previously added listener function.
  // Note that if you passed a custom context to on, you must pass the same
  // context to `off` in order to remove the listener.

  // @alternative
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
  // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  function off(obj, types, fn, context) {

  	if (typeof types === 'object') {
  		for (var type in types) {
  			removeOne(obj, type, types[type], fn);
  		}
  	} else if (types) {
  		types = splitWords(types);

  		for (var i = 0, len = types.length; i < len; i++) {
  			removeOne(obj, types[i], fn, context);
  		}
  	} else {
  		for (var j in obj[eventsKey]) {
  			removeOne(obj, j, obj[eventsKey][j]);
  		}
  		delete obj[eventsKey];
  	}

  	return this;
  }

  function browserFiresNativeDblClick() {
  	// See https://github.com/w3c/pointerevents/issues/171
  	if (pointer) {
  		return !(edge || safari);
  	}
  }

  var mouseSubst = {
  	mouseenter: 'mouseover',
  	mouseleave: 'mouseout',
  	wheel: !('onwheel' in window) && 'mousewheel'
  };

  function addOne(obj, type, fn, context) {
  	var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

  	if (obj[eventsKey] && obj[eventsKey][id]) { return this; }

  	var handler = function (e) {
  		return fn.call(context || obj, e || window.event);
  	};

  	var originalHandler = handler;

  	if (pointer && type.indexOf('touch') === 0) {
  		// Needs DomEvent.Pointer.js
  		addPointerListener(obj, type, handler, id);

  	} else if (touch && (type === 'dblclick') && !browserFiresNativeDblClick()) {
  		addDoubleTapListener(obj, handler, id);

  	} else if ('addEventListener' in obj) {

  		if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' ||  type === 'mousewheel') {
  			obj.addEventListener(mouseSubst[type] || type, handler, passiveEvents ? {passive: false} : false);

  		} else if (type === 'mouseenter' || type === 'mouseleave') {
  			handler = function (e) {
  				e = e || window.event;
  				if (isExternalTarget(obj, e)) {
  					originalHandler(e);
  				}
  			};
  			obj.addEventListener(mouseSubst[type], handler, false);

  		} else {
  			obj.addEventListener(type, originalHandler, false);
  		}

  	} else if ('attachEvent' in obj) {
  		obj.attachEvent('on' + type, handler);
  	}

  	obj[eventsKey] = obj[eventsKey] || {};
  	obj[eventsKey][id] = handler;
  }

  function removeOne(obj, type, fn, context) {

  	var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
  	    handler = obj[eventsKey] && obj[eventsKey][id];

  	if (!handler) { return this; }

  	if (pointer && type.indexOf('touch') === 0) {
  		removePointerListener(obj, type, id);

  	} else if (touch && (type === 'dblclick') && !browserFiresNativeDblClick()) {
  		removeDoubleTapListener(obj, id);

  	} else if ('removeEventListener' in obj) {

  		obj.removeEventListener(mouseSubst[type] || type, handler, false);

  	} else if ('detachEvent' in obj) {
  		obj.detachEvent('on' + type, handler);
  	}

  	obj[eventsKey][id] = null;
  }

  // @function stopPropagation(ev: DOMEvent): this
  // Stop the given event from propagation to parent elements. Used inside the listener functions:
  // ```js
  // L.DomEvent.on(div, 'click', function (ev) {
  // 	L.DomEvent.stopPropagation(ev);
  // });
  // ```
  function stopPropagation(e) {

  	if (e.stopPropagation) {
  		e.stopPropagation();
  	} else if (e.originalEvent) {  // In case of Leaflet event.
  		e.originalEvent._stopped = true;
  	} else {
  		e.cancelBubble = true;
  	}
  	skipped(e);

  	return this;
  }

  // @function disableScrollPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
  function disableScrollPropagation(el) {
  	addOne(el, 'wheel', stopPropagation);
  	return this;
  }

  // @function disableClickPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
  // `'mousedown'` and `'touchstart'` events (plus browser variants).
  function disableClickPropagation(el) {
  	on(el, 'mousedown touchstart dblclick', stopPropagation);
  	addOne(el, 'click', fakeStop);
  	return this;
  }

  // @function preventDefault(ev: DOMEvent): this
  // Prevents the default action of the DOM Event `ev` from happening (such as
  // following a link in the href of the a element, or doing a POST request
  // with page reload when a `<form>` is submitted).
  // Use it inside listener functions.
  function preventDefault(e) {
  	if (e.preventDefault) {
  		e.preventDefault();
  	} else {
  		e.returnValue = false;
  	}
  	return this;
  }

  // @function stop(ev: DOMEvent): this
  // Does `stopPropagation` and `preventDefault` at the same time.
  function stop(e) {
  	preventDefault(e);
  	stopPropagation(e);
  	return this;
  }

  // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
  // Gets normalized mouse position from a DOM event relative to the
  // `container` (border excluded) or to the whole page if not specified.
  function getMousePosition(e, container) {
  	if (!container) {
  		return new Point(e.clientX, e.clientY);
  	}

  	var scale = getScale(container),
  	    offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)

  	return new Point(
  		// offset.left/top values are in page scale (like clientX/Y),
  		// whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
  		(e.clientX - offset.left) / scale.x - container.clientLeft,
  		(e.clientY - offset.top) / scale.y - container.clientTop
  	);
  }

  // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
  // and Firefox scrolls device pixels, not CSS pixels
  var wheelPxFactor =
  	(win && chrome) ? 2 * window.devicePixelRatio :
  	gecko ? window.devicePixelRatio : 1;

  // @function getWheelDelta(ev: DOMEvent): Number
  // Gets normalized wheel delta from a wheel DOM event, in vertical
  // pixels scrolled (negative if scrolling down).
  // Events from pointing devices without precise scrolling are mapped to
  // a best guess of 60 pixels.
  function getWheelDelta(e) {
  	return (edge) ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
  	       (e.deltaY && e.deltaMode === 0) ? -e.deltaY / wheelPxFactor : // Pixels
  	       (e.deltaY && e.deltaMode === 1) ? -e.deltaY * 20 : // Lines
  	       (e.deltaY && e.deltaMode === 2) ? -e.deltaY * 60 : // Pages
  	       (e.deltaX || e.deltaZ) ? 0 :	// Skip horizontal/depth wheel events
  	       e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
  	       (e.detail && Math.abs(e.detail) < 32765) ? -e.detail * 20 : // Legacy Moz lines
  	       e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
  	       0;
  }

  var skipEvents = {};

  function fakeStop(e) {
  	// fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
  	skipEvents[e.type] = true;
  }

  function skipped(e) {
  	var events = skipEvents[e.type];
  	// reset when checking, as it's only used in map container and propagates outside of the map
  	skipEvents[e.type] = false;
  	return events;
  }

  // check if element really left/entered the event target (for mouseenter/mouseleave)
  function isExternalTarget(el, e) {

  	var related = e.relatedTarget;

  	if (!related) { return true; }

  	try {
  		while (related && (related !== el)) {
  			related = related.parentNode;
  		}
  	} catch (err) {
  		return false;
  	}
  	return (related !== el);
  }

  var DomEvent = ({
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    fakeStop: fakeStop,
    skipped: skipped,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  });

  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

  var PosAnimation = Evented.extend({

  	// @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
  	// Run an animation of a given element to a new position, optionally setting
  	// duration in seconds (`0.25` by default) and easing linearity factor (3rd
  	// argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
  	// `0.5` by default).
  	run: function (el, newPos, duration, easeLinearity) {
  		this.stop();

  		this._el = el;
  		this._inProgress = true;
  		this._duration = duration || 0.25;
  		this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

  		this._startPos = getPosition(el);
  		this._offset = newPos.subtract(this._startPos);
  		this._startTime = +new Date();

  		// @event start: Event
  		// Fired when the animation starts
  		this.fire('start');

  		this._animate();
  	},

  	// @method stop()
  	// Stops the animation (if currently running).
  	stop: function () {
  		if (!this._inProgress) { return; }

  		this._step(true);
  		this._complete();
  	},

  	_animate: function () {
  		// animation loop
  		this._animId = requestAnimFrame(this._animate, this);
  		this._step();
  	},

  	_step: function (round) {
  		var elapsed = (+new Date()) - this._startTime,
  		    duration = this._duration * 1000;

  		if (elapsed < duration) {
  			this._runFrame(this._easeOut(elapsed / duration), round);
  		} else {
  			this._runFrame(1);
  			this._complete();
  		}
  	},

  	_runFrame: function (progress, round) {
  		var pos = this._startPos.add(this._offset.multiplyBy(progress));
  		if (round) {
  			pos._round();
  		}
  		setPosition(this._el, pos);

  		// @event step: Event
  		// Fired continuously during the animation.
  		this.fire('step');
  	},

  	_complete: function () {
  		cancelAnimFrame(this._animId);

  		this._inProgress = false;
  		// @event end: Event
  		// Fired when the animation ends.
  		this.fire('end');
  	},

  	_easeOut: function (t) {
  		return 1 - Math.pow(1 - t, this._easeOutPower);
  	}
  });

  /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

  var Map = Evented.extend({

  	options: {
  		// @section Map State Options
  		// @option crs: CRS = L.CRS.EPSG3857
  		// The [Coordinate Reference System](#crs) to use. Don't change this if you're not
  		// sure what it means.
  		crs: EPSG3857,

  		// @option center: LatLng = undefined
  		// Initial geographic center of the map
  		center: undefined,

  		// @option zoom: Number = undefined
  		// Initial map zoom level
  		zoom: undefined,

  		// @option minZoom: Number = *
  		// Minimum zoom level of the map.
  		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
  		// the lowest of their `minZoom` options will be used instead.
  		minZoom: undefined,

  		// @option maxZoom: Number = *
  		// Maximum zoom level of the map.
  		// If not specified and at least one `GridLayer` or `TileLayer` is in the map,
  		// the highest of their `maxZoom` options will be used instead.
  		maxZoom: undefined,

  		// @option layers: Layer[] = []
  		// Array of layers that will be added to the map initially
  		layers: [],

  		// @option maxBounds: LatLngBounds = null
  		// When this option is set, the map restricts the view to the given
  		// geographical bounds, bouncing the user back if the user tries to pan
  		// outside the view. To set the restriction dynamically, use
  		// [`setMaxBounds`](#map-setmaxbounds) method.
  		maxBounds: undefined,

  		// @option renderer: Renderer = *
  		// The default method for drawing vector layers on the map. `L.SVG`
  		// or `L.Canvas` by default depending on browser support.
  		renderer: undefined,


  		// @section Animation Options
  		// @option zoomAnimation: Boolean = true
  		// Whether the map zoom animation is enabled. By default it's enabled
  		// in all browsers that support CSS3 Transitions except Android.
  		zoomAnimation: true,

  		// @option zoomAnimationThreshold: Number = 4
  		// Won't animate zoom if the zoom difference exceeds this value.
  		zoomAnimationThreshold: 4,

  		// @option fadeAnimation: Boolean = true
  		// Whether the tile fade animation is enabled. By default it's enabled
  		// in all browsers that support CSS3 Transitions except Android.
  		fadeAnimation: true,

  		// @option markerZoomAnimation: Boolean = true
  		// Whether markers animate their zoom with the zoom animation, if disabled
  		// they will disappear for the length of the animation. By default it's
  		// enabled in all browsers that support CSS3 Transitions except Android.
  		markerZoomAnimation: true,

  		// @option transform3DLimit: Number = 2^23
  		// Defines the maximum size of a CSS translation transform. The default
  		// value should not be changed unless a web browser positions layers in
  		// the wrong place after doing a large `panBy`.
  		transform3DLimit: 8388608, // Precision limit of a 32-bit float

  		// @section Interaction Options
  		// @option zoomSnap: Number = 1
  		// Forces the map's zoom level to always be a multiple of this, particularly
  		// right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
  		// By default, the zoom level snaps to the nearest integer; lower values
  		// (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
  		// means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
  		zoomSnap: 1,

  		// @option zoomDelta: Number = 1
  		// Controls how much the map's zoom level will change after a
  		// [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
  		// or `-` on the keyboard, or using the [zoom controls](#control-zoom).
  		// Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
  		zoomDelta: 1,

  		// @option trackResize: Boolean = true
  		// Whether the map automatically handles browser window resize to update itself.
  		trackResize: true
  	},

  	initialize: function (id, options) { // (HTMLElement or String, Object)
  		options = setOptions(this, options);

  		// Make sure to assign internal flags at the beginning,
  		// to avoid inconsistent state in some edge cases.
  		this._handlers = [];
  		this._layers = {};
  		this._zoomBoundLayers = {};
  		this._sizeChanged = true;

  		this._initContainer(id);
  		this._initLayout();

  		// hack for https://github.com/Leaflet/Leaflet/issues/1980
  		this._onResize = bind(this._onResize, this);

  		this._initEvents();

  		if (options.maxBounds) {
  			this.setMaxBounds(options.maxBounds);
  		}

  		if (options.zoom !== undefined) {
  			this._zoom = this._limitZoom(options.zoom);
  		}

  		if (options.center && options.zoom !== undefined) {
  			this.setView(toLatLng(options.center), options.zoom, {reset: true});
  		}

  		this.callInitHooks();

  		// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
  		this._zoomAnimated = TRANSITION && any3d && !mobileOpera &&
  				this.options.zoomAnimation;

  		// zoom transitions run with the same duration for all layers, so if one of transitionend events
  		// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
  		if (this._zoomAnimated) {
  			this._createAnimProxy();
  			on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
  		}

  		this._addLayers(this.options.layers);
  	},


  	// @section Methods for modifying map state

  	// @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
  	// Sets the view of the map (geographical center and zoom) with the given
  	// animation options.
  	setView: function (center, zoom, options) {

  		zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
  		center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
  		options = options || {};

  		this._stop();

  		if (this._loaded && !options.reset && options !== true) {

  			if (options.animate !== undefined) {
  				options.zoom = extend({animate: options.animate}, options.zoom);
  				options.pan = extend({animate: options.animate, duration: options.duration}, options.pan);
  			}

  			// try animating pan or zoom
  			var moved = (this._zoom !== zoom) ?
  				this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
  				this._tryAnimatedPan(center, options.pan);

  			if (moved) {
  				// prevent resize handler call, the view will refresh after animation anyway
  				clearTimeout(this._sizeTimer);
  				return this;
  			}
  		}

  		// animation didn't start, just reset the map view
  		this._resetView(center, zoom);

  		return this;
  	},

  	// @method setZoom(zoom: Number, options?: Zoom/pan options): this
  	// Sets the zoom of the map.
  	setZoom: function (zoom, options) {
  		if (!this._loaded) {
  			this._zoom = zoom;
  			return this;
  		}
  		return this.setView(this.getCenter(), zoom, {zoom: options});
  	},

  	// @method zoomIn(delta?: Number, options?: Zoom options): this
  	// Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  	zoomIn: function (delta, options) {
  		delta = delta || (any3d ? this.options.zoomDelta : 1);
  		return this.setZoom(this._zoom + delta, options);
  	},

  	// @method zoomOut(delta?: Number, options?: Zoom options): this
  	// Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
  	zoomOut: function (delta, options) {
  		delta = delta || (any3d ? this.options.zoomDelta : 1);
  		return this.setZoom(this._zoom - delta, options);
  	},

  	// @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
  	// Zooms the map while keeping a specified geographical point on the map
  	// stationary (e.g. used internally for scroll zoom and double-click zoom).
  	// @alternative
  	// @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
  	// Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
  	setZoomAround: function (latlng, zoom, options) {
  		var scale = this.getZoomScale(zoom),
  		    viewHalf = this.getSize().divideBy(2),
  		    containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),

  		    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
  		    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

  		return this.setView(newCenter, zoom, {zoom: options});
  	},

  	_getBoundsCenterZoom: function (bounds, options) {

  		options = options || {};
  		bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);

  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),

  		    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

  		zoom = (typeof options.maxZoom === 'number') ? Math.min(options.maxZoom, zoom) : zoom;

  		if (zoom === Infinity) {
  			return {
  				center: bounds.getCenter(),
  				zoom: zoom
  			};
  		}

  		var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

  		    swPoint = this.project(bounds.getSouthWest(), zoom),
  		    nePoint = this.project(bounds.getNorthEast(), zoom),
  		    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

  		return {
  			center: center,
  			zoom: zoom
  		};
  	},

  	// @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
  	// Sets a map view that contains the given geographical bounds with the
  	// maximum zoom level possible.
  	fitBounds: function (bounds, options) {

  		bounds = toLatLngBounds(bounds);

  		if (!bounds.isValid()) {
  			throw new Error('Bounds are not valid.');
  		}

  		var target = this._getBoundsCenterZoom(bounds, options);
  		return this.setView(target.center, target.zoom, options);
  	},

  	// @method fitWorld(options?: fitBounds options): this
  	// Sets a map view that mostly contains the whole world with the maximum
  	// zoom level possible.
  	fitWorld: function (options) {
  		return this.fitBounds([[-90, -180], [90, 180]], options);
  	},

  	// @method panTo(latlng: LatLng, options?: Pan options): this
  	// Pans the map to a given center.
  	panTo: function (center, options) { // (LatLng)
  		return this.setView(center, this._zoom, {pan: options});
  	},

  	// @method panBy(offset: Point, options?: Pan options): this
  	// Pans the map by a given number of pixels (animated).
  	panBy: function (offset, options) {
  		offset = toPoint(offset).round();
  		options = options || {};

  		if (!offset.x && !offset.y) {
  			return this.fire('moveend');
  		}
  		// If we pan too far, Chrome gets issues with tiles
  		// and makes them disappear or appear in the wrong place (slightly offset) #2602
  		if (options.animate !== true && !this.getSize().contains(offset)) {
  			this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
  			return this;
  		}

  		if (!this._panAnim) {
  			this._panAnim = new PosAnimation();

  			this._panAnim.on({
  				'step': this._onPanTransitionStep,
  				'end': this._onPanTransitionEnd
  			}, this);
  		}

  		// don't fire movestart if animating inertia
  		if (!options.noMoveStart) {
  			this.fire('movestart');
  		}

  		// animate pan unless animate: false specified
  		if (options.animate !== false) {
  			addClass(this._mapPane, 'leaflet-pan-anim');

  			var newPos = this._getMapPanePos().subtract(offset).round();
  			this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
  		} else {
  			this._rawPanBy(offset);
  			this.fire('move').fire('moveend');
  		}

  		return this;
  	},

  	// @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
  	// Sets the view of the map (geographical center and zoom) performing a smooth
  	// pan-zoom animation.
  	flyTo: function (targetCenter, targetZoom, options) {

  		options = options || {};
  		if (options.animate === false || !any3d) {
  			return this.setView(targetCenter, targetZoom, options);
  		}

  		this._stop();

  		var from = this.project(this.getCenter()),
  		    to = this.project(targetCenter),
  		    size = this.getSize(),
  		    startZoom = this._zoom;

  		targetCenter = toLatLng(targetCenter);
  		targetZoom = targetZoom === undefined ? startZoom : targetZoom;

  		var w0 = Math.max(size.x, size.y),
  		    w1 = w0 * this.getZoomScale(startZoom, targetZoom),
  		    u1 = (to.distanceTo(from)) || 1,
  		    rho = 1.42,
  		    rho2 = rho * rho;

  		function r(i) {
  			var s1 = i ? -1 : 1,
  			    s2 = i ? w1 : w0,
  			    t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
  			    b1 = 2 * s2 * rho2 * u1,
  			    b = t1 / b1,
  			    sq = Math.sqrt(b * b + 1) - b;

  			    // workaround for floating point precision bug when sq = 0, log = -Infinite,
  			    // thus triggering an infinite loop in flyTo
  			    var log = sq < 0.000000001 ? -18 : Math.log(sq);

  			return log;
  		}

  		function sinh(n) { return (Math.exp(n) - Math.exp(-n)) / 2; }
  		function cosh(n) { return (Math.exp(n) + Math.exp(-n)) / 2; }
  		function tanh(n) { return sinh(n) / cosh(n); }

  		var r0 = r(0);

  		function w(s) { return w0 * (cosh(r0) / cosh(r0 + rho * s)); }
  		function u(s) { return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2; }

  		function easeOut(t) { return 1 - Math.pow(1 - t, 1.5); }

  		var start = Date.now(),
  		    S = (r(1) - r0) / rho,
  		    duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

  		function frame() {
  			var t = (Date.now() - start) / duration,
  			    s = easeOut(t) * S;

  			if (t <= 1) {
  				this._flyToFrame = requestAnimFrame(frame, this);

  				this._move(
  					this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom),
  					this.getScaleZoom(w0 / w(s), startZoom),
  					{flyTo: true});

  			} else {
  				this
  					._move(targetCenter, targetZoom)
  					._moveEnd(true);
  			}
  		}

  		this._moveStart(true, options.noMoveStart);

  		frame.call(this);
  		return this;
  	},

  	// @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
  	// Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
  	// but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
  	flyToBounds: function (bounds, options) {
  		var target = this._getBoundsCenterZoom(bounds, options);
  		return this.flyTo(target.center, target.zoom, options);
  	},

  	// @method setMaxBounds(bounds: LatLngBounds): this
  	// Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
  	setMaxBounds: function (bounds) {
  		bounds = toLatLngBounds(bounds);

  		if (!bounds.isValid()) {
  			this.options.maxBounds = null;
  			return this.off('moveend', this._panInsideMaxBounds);
  		} else if (this.options.maxBounds) {
  			this.off('moveend', this._panInsideMaxBounds);
  		}

  		this.options.maxBounds = bounds;

  		if (this._loaded) {
  			this._panInsideMaxBounds();
  		}

  		return this.on('moveend', this._panInsideMaxBounds);
  	},

  	// @method setMinZoom(zoom: Number): this
  	// Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
  	setMinZoom: function (zoom) {
  		var oldZoom = this.options.minZoom;
  		this.options.minZoom = zoom;

  		if (this._loaded && oldZoom !== zoom) {
  			this.fire('zoomlevelschange');

  			if (this.getZoom() < this.options.minZoom) {
  				return this.setZoom(zoom);
  			}
  		}

  		return this;
  	},

  	// @method setMaxZoom(zoom: Number): this
  	// Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
  	setMaxZoom: function (zoom) {
  		var oldZoom = this.options.maxZoom;
  		this.options.maxZoom = zoom;

  		if (this._loaded && oldZoom !== zoom) {
  			this.fire('zoomlevelschange');

  			if (this.getZoom() > this.options.maxZoom) {
  				return this.setZoom(zoom);
  			}
  		}

  		return this;
  	},

  	// @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
  	// Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
  	panInsideBounds: function (bounds, options) {
  		this._enforcingBounds = true;
  		var center = this.getCenter(),
  		    newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

  		if (!center.equals(newCenter)) {
  			this.panTo(newCenter, options);
  		}

  		this._enforcingBounds = false;
  		return this;
  	},

  	// @method panInside(latlng: LatLng, options?: options): this
  	// Pans the map the minimum amount to make the `latlng` visible. Use
  	// `padding`, `paddingTopLeft` and `paddingTopRight` options to fit
  	// the display to more restricted bounds, like [`fitBounds`](#map-fitbounds).
  	// If `latlng` is already within the (optionally padded) display bounds,
  	// the map will not be panned.
  	panInside: function (latlng, options) {
  		options = options || {};

  		var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
  		    paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
  		    center = this.getCenter(),
  		    pixelCenter = this.project(center),
  		    pixelPoint = this.project(latlng),
  		    pixelBounds = this.getPixelBounds(),
  		    halfPixelBounds = pixelBounds.getSize().divideBy(2),
  		    paddedBounds = toBounds([pixelBounds.min.add(paddingTL), pixelBounds.max.subtract(paddingBR)]);

  		if (!paddedBounds.contains(pixelPoint)) {
  			this._enforcingBounds = true;
  			var diff = pixelCenter.subtract(pixelPoint),
  			    newCenter = toPoint(pixelPoint.x + diff.x, pixelPoint.y + diff.y);

  			if (pixelPoint.x < paddedBounds.min.x || pixelPoint.x > paddedBounds.max.x) {
  				newCenter.x = pixelCenter.x - diff.x;
  				if (diff.x > 0) {
  					newCenter.x += halfPixelBounds.x - paddingTL.x;
  				} else {
  					newCenter.x -= halfPixelBounds.x - paddingBR.x;
  				}
  			}
  			if (pixelPoint.y < paddedBounds.min.y || pixelPoint.y > paddedBounds.max.y) {
  				newCenter.y = pixelCenter.y - diff.y;
  				if (diff.y > 0) {
  					newCenter.y += halfPixelBounds.y - paddingTL.y;
  				} else {
  					newCenter.y -= halfPixelBounds.y - paddingBR.y;
  				}
  			}
  			this.panTo(this.unproject(newCenter), options);
  			this._enforcingBounds = false;
  		}
  		return this;
  	},

  	// @method invalidateSize(options: Zoom/pan options): this
  	// Checks if the map container size changed and updates the map if so —
  	// call it after you've changed the map size dynamically, also animating
  	// pan by default. If `options.pan` is `false`, panning will not occur.
  	// If `options.debounceMoveend` is `true`, it will delay `moveend` event so
  	// that it doesn't happen often even if the method is called many
  	// times in a row.

  	// @alternative
  	// @method invalidateSize(animate: Boolean): this
  	// Checks if the map container size changed and updates the map if so —
  	// call it after you've changed the map size dynamically, also animating
  	// pan by default.
  	invalidateSize: function (options) {
  		if (!this._loaded) { return this; }

  		options = extend({
  			animate: false,
  			pan: true
  		}, options === true ? {animate: true} : options);

  		var oldSize = this.getSize();
  		this._sizeChanged = true;
  		this._lastCenter = null;

  		var newSize = this.getSize(),
  		    oldCenter = oldSize.divideBy(2).round(),
  		    newCenter = newSize.divideBy(2).round(),
  		    offset = oldCenter.subtract(newCenter);

  		if (!offset.x && !offset.y) { return this; }

  		if (options.animate && options.pan) {
  			this.panBy(offset);

  		} else {
  			if (options.pan) {
  				this._rawPanBy(offset);
  			}

  			this.fire('move');

  			if (options.debounceMoveend) {
  				clearTimeout(this._sizeTimer);
  				this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
  			} else {
  				this.fire('moveend');
  			}
  		}

  		// @section Map state change events
  		// @event resize: ResizeEvent
  		// Fired when the map is resized.
  		return this.fire('resize', {
  			oldSize: oldSize,
  			newSize: newSize
  		});
  	},

  	// @section Methods for modifying map state
  	// @method stop(): this
  	// Stops the currently running `panTo` or `flyTo` animation, if any.
  	stop: function () {
  		this.setZoom(this._limitZoom(this._zoom));
  		if (!this.options.zoomSnap) {
  			this.fire('viewreset');
  		}
  		return this._stop();
  	},

  	// @section Geolocation methods
  	// @method locate(options?: Locate options): this
  	// Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
  	// event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
  	// and optionally sets the map view to the user's location with respect to
  	// detection accuracy (or to the world view if geolocation failed).
  	// Note that, if your page doesn't use HTTPS, this method will fail in
  	// modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  	// See `Locate options` for more details.
  	locate: function (options) {

  		options = this._locateOptions = extend({
  			timeout: 10000,
  			watch: false
  			// setView: false
  			// maxZoom: <Number>
  			// maximumAge: 0
  			// enableHighAccuracy: false
  		}, options);

  		if (!('geolocation' in navigator)) {
  			this._handleGeolocationError({
  				code: 0,
  				message: 'Geolocation not supported.'
  			});
  			return this;
  		}

  		var onResponse = bind(this._handleGeolocationResponse, this),
  		    onError = bind(this._handleGeolocationError, this);

  		if (options.watch) {
  			this._locationWatchId =
  			        navigator.geolocation.watchPosition(onResponse, onError, options);
  		} else {
  			navigator.geolocation.getCurrentPosition(onResponse, onError, options);
  		}
  		return this;
  	},

  	// @method stopLocate(): this
  	// Stops watching location previously initiated by `map.locate({watch: true})`
  	// and aborts resetting the map view if map.locate was called with
  	// `{setView: true}`.
  	stopLocate: function () {
  		if (navigator.geolocation && navigator.geolocation.clearWatch) {
  			navigator.geolocation.clearWatch(this._locationWatchId);
  		}
  		if (this._locateOptions) {
  			this._locateOptions.setView = false;
  		}
  		return this;
  	},

  	_handleGeolocationError: function (error) {
  		var c = error.code,
  		    message = error.message ||
  		            (c === 1 ? 'permission denied' :
  		            (c === 2 ? 'position unavailable' : 'timeout'));

  		if (this._locateOptions.setView && !this._loaded) {
  			this.fitWorld();
  		}

  		// @section Location events
  		// @event locationerror: ErrorEvent
  		// Fired when geolocation (using the [`locate`](#map-locate) method) failed.
  		this.fire('locationerror', {
  			code: c,
  			message: 'Geolocation error: ' + message + '.'
  		});
  	},

  	_handleGeolocationResponse: function (pos) {
  		var lat = pos.coords.latitude,
  		    lng = pos.coords.longitude,
  		    latlng = new LatLng(lat, lng),
  		    bounds = latlng.toBounds(pos.coords.accuracy * 2),
  		    options = this._locateOptions;

  		if (options.setView) {
  			var zoom = this.getBoundsZoom(bounds);
  			this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
  		}

  		var data = {
  			latlng: latlng,
  			bounds: bounds,
  			timestamp: pos.timestamp
  		};

  		for (var i in pos.coords) {
  			if (typeof pos.coords[i] === 'number') {
  				data[i] = pos.coords[i];
  			}
  		}

  		// @event locationfound: LocationEvent
  		// Fired when geolocation (using the [`locate`](#map-locate) method)
  		// went successfully.
  		this.fire('locationfound', data);
  	},

  	// TODO Appropriate docs section?
  	// @section Other Methods
  	// @method addHandler(name: String, HandlerClass: Function): this
  	// Adds a new `Handler` to the map, given its name and constructor function.
  	addHandler: function (name, HandlerClass) {
  		if (!HandlerClass) { return this; }

  		var handler = this[name] = new HandlerClass(this);

  		this._handlers.push(handler);

  		if (this.options[name]) {
  			handler.enable();
  		}

  		return this;
  	},

  	// @method remove(): this
  	// Destroys the map and clears all related event listeners.
  	remove: function () {

  		this._initEvents(true);
  		this.off('moveend', this._panInsideMaxBounds);

  		if (this._containerId !== this._container._leaflet_id) {
  			throw new Error('Map container is being reused by another instance');
  		}

  		try {
  			// throws error in IE6-8
  			delete this._container._leaflet_id;
  			delete this._containerId;
  		} catch (e) {
  			/*eslint-disable */
  			this._container._leaflet_id = undefined;
  			/* eslint-enable */
  			this._containerId = undefined;
  		}

  		if (this._locationWatchId !== undefined) {
  			this.stopLocate();
  		}

  		this._stop();

  		remove(this._mapPane);

  		if (this._clearControlPos) {
  			this._clearControlPos();
  		}
  		if (this._resizeRequest) {
  			cancelAnimFrame(this._resizeRequest);
  			this._resizeRequest = null;
  		}

  		this._clearHandlers();

  		if (this._loaded) {
  			// @section Map state change events
  			// @event unload: Event
  			// Fired when the map is destroyed with [remove](#map-remove) method.
  			this.fire('unload');
  		}

  		var i;
  		for (i in this._layers) {
  			this._layers[i].remove();
  		}
  		for (i in this._panes) {
  			remove(this._panes[i]);
  		}

  		this._layers = [];
  		this._panes = [];
  		delete this._mapPane;
  		delete this._renderer;

  		return this;
  	},

  	// @section Other Methods
  	// @method createPane(name: String, container?: HTMLElement): HTMLElement
  	// Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
  	// then returns it. The pane is created as a child of `container`, or
  	// as a child of the main map pane if not set.
  	createPane: function (name, container) {
  		var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
  		    pane = create$1('div', className, container || this._mapPane);

  		if (name) {
  			this._panes[name] = pane;
  		}
  		return pane;
  	},

  	// @section Methods for Getting Map State

  	// @method getCenter(): LatLng
  	// Returns the geographical center of the map view
  	getCenter: function () {
  		this._checkIfLoaded();

  		if (this._lastCenter && !this._moved()) {
  			return this._lastCenter;
  		}
  		return this.layerPointToLatLng(this._getCenterLayerPoint());
  	},

  	// @method getZoom(): Number
  	// Returns the current zoom level of the map view
  	getZoom: function () {
  		return this._zoom;
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the geographical bounds visible in the current map view
  	getBounds: function () {
  		var bounds = this.getPixelBounds(),
  		    sw = this.unproject(bounds.getBottomLeft()),
  		    ne = this.unproject(bounds.getTopRight());

  		return new LatLngBounds(sw, ne);
  	},

  	// @method getMinZoom(): Number
  	// Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
  	getMinZoom: function () {
  		return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
  	},

  	// @method getMaxZoom(): Number
  	// Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
  	getMaxZoom: function () {
  		return this.options.maxZoom === undefined ?
  			(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
  			this.options.maxZoom;
  	},

  	// @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
  	// Returns the maximum zoom level on which the given bounds fit to the map
  	// view in its entirety. If `inside` (optional) is set to `true`, the method
  	// instead returns the minimum zoom level on which the map view fits into
  	// the given bounds in its entirety.
  	getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
  		bounds = toLatLngBounds(bounds);
  		padding = toPoint(padding || [0, 0]);

  		var zoom = this.getZoom() || 0,
  		    min = this.getMinZoom(),
  		    max = this.getMaxZoom(),
  		    nw = bounds.getNorthWest(),
  		    se = bounds.getSouthEast(),
  		    size = this.getSize().subtract(padding),
  		    boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
  		    snap = any3d ? this.options.zoomSnap : 1,
  		    scalex = size.x / boundsSize.x,
  		    scaley = size.y / boundsSize.y,
  		    scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);

  		zoom = this.getScaleZoom(scale, zoom);

  		if (snap) {
  			zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
  			zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
  		}

  		return Math.max(min, Math.min(max, zoom));
  	},

  	// @method getSize(): Point
  	// Returns the current size of the map container (in pixels).
  	getSize: function () {
  		if (!this._size || this._sizeChanged) {
  			this._size = new Point(
  				this._container.clientWidth || 0,
  				this._container.clientHeight || 0);

  			this._sizeChanged = false;
  		}
  		return this._size.clone();
  	},

  	// @method getPixelBounds(): Bounds
  	// Returns the bounds of the current map view in projected pixel
  	// coordinates (sometimes useful in layer and overlay implementations).
  	getPixelBounds: function (center, zoom) {
  		var topLeftPoint = this._getTopLeftPoint(center, zoom);
  		return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
  	},

  	// TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
  	// the map pane? "left point of the map layer" can be confusing, specially
  	// since there can be negative offsets.
  	// @method getPixelOrigin(): Point
  	// Returns the projected pixel coordinates of the top left point of
  	// the map layer (useful in custom layer and overlay implementations).
  	getPixelOrigin: function () {
  		this._checkIfLoaded();
  		return this._pixelOrigin;
  	},

  	// @method getPixelWorldBounds(zoom?: Number): Bounds
  	// Returns the world's bounds in pixel coordinates for zoom level `zoom`.
  	// If `zoom` is omitted, the map's current zoom level is used.
  	getPixelWorldBounds: function (zoom) {
  		return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
  	},

  	// @section Other Methods

  	// @method getPane(pane: String|HTMLElement): HTMLElement
  	// Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
  	getPane: function (pane) {
  		return typeof pane === 'string' ? this._panes[pane] : pane;
  	},

  	// @method getPanes(): Object
  	// Returns a plain object containing the names of all [panes](#map-pane) as keys and
  	// the panes as values.
  	getPanes: function () {
  		return this._panes;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTML element that contains the map.
  	getContainer: function () {
  		return this._container;
  	},


  	// @section Conversion Methods

  	// @method getZoomScale(toZoom: Number, fromZoom: Number): Number
  	// Returns the scale factor to be applied to a map transition from zoom level
  	// `fromZoom` to `toZoom`. Used internally to help with zoom animations.
  	getZoomScale: function (toZoom, fromZoom) {
  		// TODO replace with universal implementation after refactoring projections
  		var crs = this.options.crs;
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
  		return crs.scale(toZoom) / crs.scale(fromZoom);
  	},

  	// @method getScaleZoom(scale: Number, fromZoom: Number): Number
  	// Returns the zoom level that the map would end up at, if it is at `fromZoom`
  	// level and everything is scaled by a factor of `scale`. Inverse of
  	// [`getZoomScale`](#map-getZoomScale).
  	getScaleZoom: function (scale, fromZoom) {
  		var crs = this.options.crs;
  		fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
  		var zoom = crs.zoom(scale * crs.scale(fromZoom));
  		return isNaN(zoom) ? Infinity : zoom;
  	},

  	// @method project(latlng: LatLng, zoom: Number): Point
  	// Projects a geographical coordinate `LatLng` according to the projection
  	// of the map's CRS, then scales it according to `zoom` and the CRS's
  	// `Transformation`. The result is pixel coordinate relative to
  	// the CRS origin.
  	project: function (latlng, zoom) {
  		zoom = zoom === undefined ? this._zoom : zoom;
  		return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
  	},

  	// @method unproject(point: Point, zoom: Number): LatLng
  	// Inverse of [`project`](#map-project).
  	unproject: function (point, zoom) {
  		zoom = zoom === undefined ? this._zoom : zoom;
  		return this.options.crs.pointToLatLng(toPoint(point), zoom);
  	},

  	// @method layerPointToLatLng(point: Point): LatLng
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  	// returns the corresponding geographical coordinate (for the current zoom level).
  	layerPointToLatLng: function (point) {
  		var projectedPoint = toPoint(point).add(this.getPixelOrigin());
  		return this.unproject(projectedPoint);
  	},

  	// @method latLngToLayerPoint(latlng: LatLng): Point
  	// Given a geographical coordinate, returns the corresponding pixel coordinate
  	// relative to the [origin pixel](#map-getpixelorigin).
  	latLngToLayerPoint: function (latlng) {
  		var projectedPoint = this.project(toLatLng(latlng))._round();
  		return projectedPoint._subtract(this.getPixelOrigin());
  	},

  	// @method wrapLatLng(latlng: LatLng): LatLng
  	// Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
  	// map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
  	// CRS's bounds.
  	// By default this means longitude is wrapped around the dateline so its
  	// value is between -180 and +180 degrees.
  	wrapLatLng: function (latlng) {
  		return this.options.crs.wrapLatLng(toLatLng(latlng));
  	},

  	// @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
  	// Returns a `LatLngBounds` with the same size as the given one, ensuring that
  	// its center is within the CRS's bounds.
  	// By default this means the center longitude is wrapped around the dateline so its
  	// value is between -180 and +180 degrees, and the majority of the bounds
  	// overlaps the CRS's bounds.
  	wrapLatLngBounds: function (latlng) {
  		return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
  	},

  	// @method distance(latlng1: LatLng, latlng2: LatLng): Number
  	// Returns the distance between two geographical coordinates according to
  	// the map's CRS. By default this measures distance in meters.
  	distance: function (latlng1, latlng2) {
  		return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
  	},

  	// @method containerPointToLayerPoint(point: Point): Point
  	// Given a pixel coordinate relative to the map container, returns the corresponding
  	// pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
  	containerPointToLayerPoint: function (point) { // (Point)
  		return toPoint(point).subtract(this._getMapPanePos());
  	},

  	// @method layerPointToContainerPoint(point: Point): Point
  	// Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
  	// returns the corresponding pixel coordinate relative to the map container.
  	layerPointToContainerPoint: function (point) { // (Point)
  		return toPoint(point).add(this._getMapPanePos());
  	},

  	// @method containerPointToLatLng(point: Point): LatLng
  	// Given a pixel coordinate relative to the map container, returns
  	// the corresponding geographical coordinate (for the current zoom level).
  	containerPointToLatLng: function (point) {
  		var layerPoint = this.containerPointToLayerPoint(toPoint(point));
  		return this.layerPointToLatLng(layerPoint);
  	},

  	// @method latLngToContainerPoint(latlng: LatLng): Point
  	// Given a geographical coordinate, returns the corresponding pixel coordinate
  	// relative to the map container.
  	latLngToContainerPoint: function (latlng) {
  		return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
  	},

  	// @method mouseEventToContainerPoint(ev: MouseEvent): Point
  	// Given a MouseEvent object, returns the pixel coordinate relative to the
  	// map container where the event took place.
  	mouseEventToContainerPoint: function (e) {
  		return getMousePosition(e, this._container);
  	},

  	// @method mouseEventToLayerPoint(ev: MouseEvent): Point
  	// Given a MouseEvent object, returns the pixel coordinate relative to
  	// the [origin pixel](#map-getpixelorigin) where the event took place.
  	mouseEventToLayerPoint: function (e) {
  		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
  	},

  	// @method mouseEventToLatLng(ev: MouseEvent): LatLng
  	// Given a MouseEvent object, returns geographical coordinate where the
  	// event took place.
  	mouseEventToLatLng: function (e) { // (MouseEvent)
  		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
  	},


  	// map initialization methods

  	_initContainer: function (id) {
  		var container = this._container = get(id);

  		if (!container) {
  			throw new Error('Map container not found.');
  		} else if (container._leaflet_id) {
  			throw new Error('Map container is already initialized.');
  		}

  		on(container, 'scroll', this._onScroll, this);
  		this._containerId = stamp(container);
  	},

  	_initLayout: function () {
  		var container = this._container;

  		this._fadeAnimated = this.options.fadeAnimation && any3d;

  		addClass(container, 'leaflet-container' +
  			(touch ? ' leaflet-touch' : '') +
  			(retina ? ' leaflet-retina' : '') +
  			(ielt9 ? ' leaflet-oldie' : '') +
  			(safari ? ' leaflet-safari' : '') +
  			(this._fadeAnimated ? ' leaflet-fade-anim' : ''));

  		var position = getStyle(container, 'position');

  		if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
  			container.style.position = 'relative';
  		}

  		this._initPanes();

  		if (this._initControlPos) {
  			this._initControlPos();
  		}
  	},

  	_initPanes: function () {
  		var panes = this._panes = {};
  		this._paneRenderers = {};

  		// @section
  		//
  		// Panes are DOM elements used to control the ordering of layers on the map. You
  		// can access panes with [`map.getPane`](#map-getpane) or
  		// [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
  		// [`map.createPane`](#map-createpane) method.
  		//
  		// Every map has the following default panes that differ only in zIndex.
  		//
  		// @pane mapPane: HTMLElement = 'auto'
  		// Pane that contains all other map panes

  		this._mapPane = this.createPane('mapPane', this._container);
  		setPosition(this._mapPane, new Point(0, 0));

  		// @pane tilePane: HTMLElement = 200
  		// Pane for `GridLayer`s and `TileLayer`s
  		this.createPane('tilePane');
  		// @pane overlayPane: HTMLElement = 400
  		// Pane for overlay shadows (e.g. `Marker` shadows)
  		this.createPane('shadowPane');
  		// @pane shadowPane: HTMLElement = 500
  		// Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
  		this.createPane('overlayPane');
  		// @pane markerPane: HTMLElement = 600
  		// Pane for `Icon`s of `Marker`s
  		this.createPane('markerPane');
  		// @pane tooltipPane: HTMLElement = 650
  		// Pane for `Tooltip`s.
  		this.createPane('tooltipPane');
  		// @pane popupPane: HTMLElement = 700
  		// Pane for `Popup`s.
  		this.createPane('popupPane');

  		if (!this.options.markerZoomAnimation) {
  			addClass(panes.markerPane, 'leaflet-zoom-hide');
  			addClass(panes.shadowPane, 'leaflet-zoom-hide');
  		}
  	},


  	// private methods that modify map state

  	// @section Map state change events
  	_resetView: function (center, zoom) {
  		setPosition(this._mapPane, new Point(0, 0));

  		var loading = !this._loaded;
  		this._loaded = true;
  		zoom = this._limitZoom(zoom);

  		this.fire('viewprereset');

  		var zoomChanged = this._zoom !== zoom;
  		this
  			._moveStart(zoomChanged, false)
  			._move(center, zoom)
  			._moveEnd(zoomChanged);

  		// @event viewreset: Event
  		// Fired when the map needs to redraw its content (this usually happens
  		// on map zoom or load). Very useful for creating custom overlays.
  		this.fire('viewreset');

  		// @event load: Event
  		// Fired when the map is initialized (when its center and zoom are set
  		// for the first time).
  		if (loading) {
  			this.fire('load');
  		}
  	},

  	_moveStart: function (zoomChanged, noMoveStart) {
  		// @event zoomstart: Event
  		// Fired when the map zoom is about to change (e.g. before zoom animation).
  		// @event movestart: Event
  		// Fired when the view of the map starts changing (e.g. user starts dragging the map).
  		if (zoomChanged) {
  			this.fire('zoomstart');
  		}
  		if (!noMoveStart) {
  			this.fire('movestart');
  		}
  		return this;
  	},

  	_move: function (center, zoom, data) {
  		if (zoom === undefined) {
  			zoom = this._zoom;
  		}
  		var zoomChanged = this._zoom !== zoom;

  		this._zoom = zoom;
  		this._lastCenter = center;
  		this._pixelOrigin = this._getNewPixelOrigin(center);

  		// @event zoom: Event
  		// Fired repeatedly during any change in zoom level, including zoom
  		// and fly animations.
  		if (zoomChanged || (data && data.pinch)) {	// Always fire 'zoom' if pinching because #3530
  			this.fire('zoom', data);
  		}

  		// @event move: Event
  		// Fired repeatedly during any movement of the map, including pan and
  		// fly animations.
  		return this.fire('move', data);
  	},

  	_moveEnd: function (zoomChanged) {
  		// @event zoomend: Event
  		// Fired when the map has changed, after any animations.
  		if (zoomChanged) {
  			this.fire('zoomend');
  		}

  		// @event moveend: Event
  		// Fired when the center of the map stops changing (e.g. user stopped
  		// dragging the map).
  		return this.fire('moveend');
  	},

  	_stop: function () {
  		cancelAnimFrame(this._flyToFrame);
  		if (this._panAnim) {
  			this._panAnim.stop();
  		}
  		return this;
  	},

  	_rawPanBy: function (offset) {
  		setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
  	},

  	_getZoomSpan: function () {
  		return this.getMaxZoom() - this.getMinZoom();
  	},

  	_panInsideMaxBounds: function () {
  		if (!this._enforcingBounds) {
  			this.panInsideBounds(this.options.maxBounds);
  		}
  	},

  	_checkIfLoaded: function () {
  		if (!this._loaded) {
  			throw new Error('Set map center and zoom first.');
  		}
  	},

  	// DOM event handling

  	// @section Interaction events
  	_initEvents: function (remove$$1) {
  		this._targets = {};
  		this._targets[stamp(this._container)] = this;

  		var onOff = remove$$1 ? off : on;

  		// @event click: MouseEvent
  		// Fired when the user clicks (or taps) the map.
  		// @event dblclick: MouseEvent
  		// Fired when the user double-clicks (or double-taps) the map.
  		// @event mousedown: MouseEvent
  		// Fired when the user pushes the mouse button on the map.
  		// @event mouseup: MouseEvent
  		// Fired when the user releases the mouse button on the map.
  		// @event mouseover: MouseEvent
  		// Fired when the mouse enters the map.
  		// @event mouseout: MouseEvent
  		// Fired when the mouse leaves the map.
  		// @event mousemove: MouseEvent
  		// Fired while the mouse moves over the map.
  		// @event contextmenu: MouseEvent
  		// Fired when the user pushes the right mouse button on the map, prevents
  		// default browser context menu from showing if there are listeners on
  		// this event. Also fired on mobile when the user holds a single touch
  		// for a second (also called long press).
  		// @event keypress: KeyboardEvent
  		// Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
  		// @event keydown: KeyboardEvent
  		// Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
  		// the `keydown` event is fired for keys that produce a character value and for keys
  		// that do not produce a character value.
  		// @event keyup: KeyboardEvent
  		// Fired when the user releases a key from the keyboard while the map is focused.
  		onOff(this._container, 'click dblclick mousedown mouseup ' +
  			'mouseover mouseout mousemove contextmenu keypress keydown keyup', this._handleDOMEvent, this);

  		if (this.options.trackResize) {
  			onOff(window, 'resize', this._onResize, this);
  		}

  		if (any3d && this.options.transform3DLimit) {
  			(remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
  		}
  	},

  	_onResize: function () {
  		cancelAnimFrame(this._resizeRequest);
  		this._resizeRequest = requestAnimFrame(
  		        function () { this.invalidateSize({debounceMoveend: true}); }, this);
  	},

  	_onScroll: function () {
  		this._container.scrollTop  = 0;
  		this._container.scrollLeft = 0;
  	},

  	_onMoveEnd: function () {
  		var pos = this._getMapPanePos();
  		if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
  			// https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
  			// a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
  			this._resetView(this.getCenter(), this.getZoom());
  		}
  	},

  	_findEventTargets: function (e, type) {
  		var targets = [],
  		    target,
  		    isHover = type === 'mouseout' || type === 'mouseover',
  		    src = e.target || e.srcElement,
  		    dragging = false;

  		while (src) {
  			target = this._targets[stamp(src)];
  			if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
  				// Prevent firing click after you just dragged an object.
  				dragging = true;
  				break;
  			}
  			if (target && target.listens(type, true)) {
  				if (isHover && !isExternalTarget(src, e)) { break; }
  				targets.push(target);
  				if (isHover) { break; }
  			}
  			if (src === this._container) { break; }
  			src = src.parentNode;
  		}
  		if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
  			targets = [this];
  		}
  		return targets;
  	},

  	_handleDOMEvent: function (e) {
  		if (!this._loaded || skipped(e)) { return; }

  		var type = e.type;

  		if (type === 'mousedown' || type === 'keypress' || type === 'keyup' || type === 'keydown') {
  			// prevents outline when clicking on keyboard-focusable element
  			preventOutline(e.target || e.srcElement);
  		}

  		this._fireDOMEvent(e, type);
  	},

  	_mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],

  	_fireDOMEvent: function (e, type, targets) {

  		if (e.type === 'click') {
  			// Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
  			// @event preclick: MouseEvent
  			// Fired before mouse click on the map (sometimes useful when you
  			// want something to happen on click before any existing click
  			// handlers start running).
  			var synth = extend({}, e);
  			synth.type = 'preclick';
  			this._fireDOMEvent(synth, synth.type, targets);
  		}

  		if (e._stopped) { return; }

  		// Find the layer the event is propagating from and its parents.
  		targets = (targets || []).concat(this._findEventTargets(e, type));

  		if (!targets.length) { return; }

  		var target = targets[0];
  		if (type === 'contextmenu' && target.listens(type, true)) {
  			preventDefault(e);
  		}

  		var data = {
  			originalEvent: e
  		};

  		if (e.type !== 'keypress' && e.type !== 'keydown' && e.type !== 'keyup') {
  			var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
  			data.containerPoint = isMarker ?
  				this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
  			data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
  			data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
  		}

  		for (var i = 0; i < targets.length; i++) {
  			targets[i].fire(type, data, true);
  			if (data.originalEvent._stopped ||
  				(targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1)) { return; }
  		}
  	},

  	_draggableMoved: function (obj) {
  		obj = obj.dragging && obj.dragging.enabled() ? obj : this;
  		return (obj.dragging && obj.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
  	},

  	_clearHandlers: function () {
  		for (var i = 0, len = this._handlers.length; i < len; i++) {
  			this._handlers[i].disable();
  		}
  	},

  	// @section Other Methods

  	// @method whenReady(fn: Function, context?: Object): this
  	// Runs the given function `fn` when the map gets initialized with
  	// a view (center and zoom) and at least one layer, or immediately
  	// if it's already initialized, optionally passing a function context.
  	whenReady: function (callback, context) {
  		if (this._loaded) {
  			callback.call(context || this, {target: this});
  		} else {
  			this.on('load', callback, context);
  		}
  		return this;
  	},


  	// private methods for getting map state

  	_getMapPanePos: function () {
  		return getPosition(this._mapPane) || new Point(0, 0);
  	},

  	_moved: function () {
  		var pos = this._getMapPanePos();
  		return pos && !pos.equals([0, 0]);
  	},

  	_getTopLeftPoint: function (center, zoom) {
  		var pixelOrigin = center && zoom !== undefined ?
  			this._getNewPixelOrigin(center, zoom) :
  			this.getPixelOrigin();
  		return pixelOrigin.subtract(this._getMapPanePos());
  	},

  	_getNewPixelOrigin: function (center, zoom) {
  		var viewHalf = this.getSize()._divideBy(2);
  		return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
  	},

  	_latLngToNewLayerPoint: function (latlng, zoom, center) {
  		var topLeft = this._getNewPixelOrigin(center, zoom);
  		return this.project(latlng, zoom)._subtract(topLeft);
  	},

  	_latLngBoundsToNewLayerBounds: function (latLngBounds, zoom, center) {
  		var topLeft = this._getNewPixelOrigin(center, zoom);
  		return toBounds([
  			this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
  			this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
  		]);
  	},

  	// layer point of the current center
  	_getCenterLayerPoint: function () {
  		return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
  	},

  	// offset of the specified place to the current center in pixels
  	_getCenterOffset: function (latlng) {
  		return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
  	},

  	// adjust center for view to get inside bounds
  	_limitCenter: function (center, zoom, bounds) {

  		if (!bounds) { return center; }

  		var centerPoint = this.project(center, zoom),
  		    viewHalf = this.getSize().divideBy(2),
  		    viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
  		    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

  		// If offset is less than a pixel, ignore.
  		// This prevents unstable projections from getting into
  		// an infinite loop of tiny offsets.
  		if (offset.round().equals([0, 0])) {
  			return center;
  		}

  		return this.unproject(centerPoint.add(offset), zoom);
  	},

  	// adjust offset for view to get inside bounds
  	_limitOffset: function (offset, bounds) {
  		if (!bounds) { return offset; }

  		var viewBounds = this.getPixelBounds(),
  		    newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

  		return offset.add(this._getBoundsOffset(newBounds, bounds));
  	},

  	// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
  	_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
  		var projectedMaxBounds = toBounds(
  		        this.project(maxBounds.getNorthEast(), zoom),
  		        this.project(maxBounds.getSouthWest(), zoom)
  		    ),
  		    minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
  		    maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),

  		    dx = this._rebound(minOffset.x, -maxOffset.x),
  		    dy = this._rebound(minOffset.y, -maxOffset.y);

  		return new Point(dx, dy);
  	},

  	_rebound: function (left, right) {
  		return left + right > 0 ?
  			Math.round(left - right) / 2 :
  			Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
  	},

  	_limitZoom: function (zoom) {
  		var min = this.getMinZoom(),
  		    max = this.getMaxZoom(),
  		    snap = any3d ? this.options.zoomSnap : 1;
  		if (snap) {
  			zoom = Math.round(zoom / snap) * snap;
  		}
  		return Math.max(min, Math.min(max, zoom));
  	},

  	_onPanTransitionStep: function () {
  		this.fire('move');
  	},

  	_onPanTransitionEnd: function () {
  		removeClass(this._mapPane, 'leaflet-pan-anim');
  		this.fire('moveend');
  	},

  	_tryAnimatedPan: function (center, options) {
  		// difference between the new and current centers in pixels
  		var offset = this._getCenterOffset(center)._trunc();

  		// don't animate too far unless animate: true specified in options
  		if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

  		this.panBy(offset, options);

  		return true;
  	},

  	_createAnimProxy: function () {

  		var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');
  		this._panes.mapPane.appendChild(proxy);

  		this.on('zoomanim', function (e) {
  			var prop = TRANSFORM,
  			    transform = this._proxy.style[prop];

  			setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));

  			// workaround for case when transform is the same and so transitionend event is not fired
  			if (transform === this._proxy.style[prop] && this._animatingZoom) {
  				this._onZoomTransitionEnd();
  			}
  		}, this);

  		this.on('load moveend', this._animMoveEnd, this);

  		this._on('unload', this._destroyAnimProxy, this);
  	},

  	_destroyAnimProxy: function () {
  		remove(this._proxy);
  		this.off('load moveend', this._animMoveEnd, this);
  		delete this._proxy;
  	},

  	_animMoveEnd: function () {
  		var c = this.getCenter(),
  		    z = this.getZoom();
  		setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
  	},

  	_catchTransitionEnd: function (e) {
  		if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
  			this._onZoomTransitionEnd();
  		}
  	},

  	_nothingToAnimate: function () {
  		return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
  	},

  	_tryAnimatedZoom: function (center, zoom, options) {

  		if (this._animatingZoom) { return true; }

  		options = options || {};

  		// don't animate if disabled, not supported or zoom difference is too large
  		if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
  		        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

  		// offset is the pixel coords of the zoom origin relative to the current center
  		var scale = this.getZoomScale(zoom),
  		    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);

  		// don't animate if the zoom origin isn't within one screen from the current center, unless forced
  		if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

  		requestAnimFrame(function () {
  			this
  			    ._moveStart(true, false)
  			    ._animateZoom(center, zoom, true);
  		}, this);

  		return true;
  	},

  	_animateZoom: function (center, zoom, startAnim, noUpdate) {
  		if (!this._mapPane) { return; }

  		if (startAnim) {
  			this._animatingZoom = true;

  			// remember what center/zoom to set after animation
  			this._animateToCenter = center;
  			this._animateToZoom = zoom;

  			addClass(this._mapPane, 'leaflet-zoom-anim');
  		}

  		// @section Other Events
  		// @event zoomanim: ZoomAnimEvent
  		// Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
  		this.fire('zoomanim', {
  			center: center,
  			zoom: zoom,
  			noUpdate: noUpdate
  		});

  		// Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
  		setTimeout(bind(this._onZoomTransitionEnd, this), 250);
  	},

  	_onZoomTransitionEnd: function () {
  		if (!this._animatingZoom) { return; }

  		if (this._mapPane) {
  			removeClass(this._mapPane, 'leaflet-zoom-anim');
  		}

  		this._animatingZoom = false;

  		this._move(this._animateToCenter, this._animateToZoom);

  		// This anim frame should prevent an obscure iOS webkit tile loading race condition.
  		requestAnimFrame(function () {
  			this._moveEnd(true);
  		}, this);
  	}
  });

  // @section

  // @factory L.map(id: String, options?: Map options)
  // Instantiates a map object given the DOM ID of a `<div>` element
  // and optionally an object literal with `Map options`.
  //
  // @alternative
  // @factory L.map(el: HTMLElement, options?: Map options)
  // Instantiates a map object given an instance of a `<div>` HTML element
  // and optionally an object literal with `Map options`.
  function createMap(id, options) {
  	return new Map(id, options);
  }

  /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */

  var Control = Class.extend({
  	// @section
  	// @aka Control options
  	options: {
  		// @option position: String = 'topright'
  		// The position of the control (one of the map corners). Possible values are `'topleft'`,
  		// `'topright'`, `'bottomleft'` or `'bottomright'`
  		position: 'topright'
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	/* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */
  	getPosition: function () {
  		return this.options.position;
  	},

  	// @method setPosition(position: string): this
  	// Sets the position of the control.
  	setPosition: function (position) {
  		var map = this._map;

  		if (map) {
  			map.removeControl(this);
  		}

  		this.options.position = position;

  		if (map) {
  			map.addControl(this);
  		}

  		return this;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTMLElement that contains the control.
  	getContainer: function () {
  		return this._container;
  	},

  	// @method addTo(map: Map): this
  	// Adds the control to the given map.
  	addTo: function (map) {
  		this.remove();
  		this._map = map;

  		var container = this._container = this.onAdd(map),
  		    pos = this.getPosition(),
  		    corner = map._controlCorners[pos];

  		addClass(container, 'leaflet-control');

  		if (pos.indexOf('bottom') !== -1) {
  			corner.insertBefore(container, corner.firstChild);
  		} else {
  			corner.appendChild(container);
  		}

  		this._map.on('unload', this.remove, this);

  		return this;
  	},

  	// @method remove: this
  	// Removes the control from the map it is currently active on.
  	remove: function () {
  		if (!this._map) {
  			return this;
  		}

  		remove(this._container);

  		if (this.onRemove) {
  			this.onRemove(this._map);
  		}

  		this._map.off('unload', this.remove, this);
  		this._map = null;

  		return this;
  	},

  	_refocusOnMap: function (e) {
  		// if map exists and event is not a keyboard event
  		if (this._map && e && e.screenX > 0 && e.screenY > 0) {
  			this._map.getContainer().focus();
  		}
  	}
  });

  var control = function (options) {
  	return new Control(options);
  };

  /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */

  /* @namespace Map
   * @section Methods for Layers and Controls
   */
  Map.include({
  	// @method addControl(control: Control): this
  	// Adds the given control to the map
  	addControl: function (control) {
  		control.addTo(this);
  		return this;
  	},

  	// @method removeControl(control: Control): this
  	// Removes the given control from the map
  	removeControl: function (control) {
  		control.remove();
  		return this;
  	},

  	_initControlPos: function () {
  		var corners = this._controlCorners = {},
  		    l = 'leaflet-',
  		    container = this._controlContainer =
  		            create$1('div', l + 'control-container', this._container);

  		function createCorner(vSide, hSide) {
  			var className = l + vSide + ' ' + l + hSide;

  			corners[vSide + hSide] = create$1('div', className, container);
  		}

  		createCorner('top', 'left');
  		createCorner('top', 'right');
  		createCorner('bottom', 'left');
  		createCorner('bottom', 'right');
  	},

  	_clearControlPos: function () {
  		for (var i in this._controlCorners) {
  			remove(this._controlCorners[i]);
  		}
  		remove(this._controlContainer);
  		delete this._controlCorners;
  		delete this._controlContainer;
  	}
  });

  /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */

  var Layers = Control.extend({
  	// @section
  	// @aka Control.Layers options
  	options: {
  		// @option collapsed: Boolean = true
  		// If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
  		collapsed: true,
  		position: 'topright',

  		// @option autoZIndex: Boolean = true
  		// If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
  		autoZIndex: true,

  		// @option hideSingleBase: Boolean = false
  		// If `true`, the base layers in the control will be hidden when there is only one.
  		hideSingleBase: false,

  		// @option sortLayers: Boolean = false
  		// Whether to sort the layers. When `false`, layers will keep the order
  		// in which they were added to the control.
  		sortLayers: false,

  		// @option sortFunction: Function = *
  		// A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  		// that will be used for sorting the layers, when `sortLayers` is `true`.
  		// The function receives both the `L.Layer` instances and their names, as in
  		// `sortFunction(layerA, layerB, nameA, nameB)`.
  		// By default, it sorts layers alphabetically by their name.
  		sortFunction: function (layerA, layerB, nameA, nameB) {
  			return nameA < nameB ? -1 : (nameB < nameA ? 1 : 0);
  		}
  	},

  	initialize: function (baseLayers, overlays, options) {
  		setOptions(this, options);

  		this._layerControlInputs = [];
  		this._layers = [];
  		this._lastZIndex = 0;
  		this._handlingClick = false;

  		for (var i in baseLayers) {
  			this._addLayer(baseLayers[i], i);
  		}

  		for (i in overlays) {
  			this._addLayer(overlays[i], i, true);
  		}
  	},

  	onAdd: function (map) {
  		this._initLayout();
  		this._update();

  		this._map = map;
  		map.on('zoomend', this._checkDisabledLayers, this);

  		for (var i = 0; i < this._layers.length; i++) {
  			this._layers[i].layer.on('add remove', this._onLayerChange, this);
  		}

  		return this._container;
  	},

  	addTo: function (map) {
  		Control.prototype.addTo.call(this, map);
  		// Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
  		return this._expandIfNotCollapsed();
  	},

  	onRemove: function () {
  		this._map.off('zoomend', this._checkDisabledLayers, this);

  		for (var i = 0; i < this._layers.length; i++) {
  			this._layers[i].layer.off('add remove', this._onLayerChange, this);
  		}
  	},

  	// @method addBaseLayer(layer: Layer, name: String): this
  	// Adds a base layer (radio button entry) with the given name to the control.
  	addBaseLayer: function (layer, name) {
  		this._addLayer(layer, name);
  		return (this._map) ? this._update() : this;
  	},

  	// @method addOverlay(layer: Layer, name: String): this
  	// Adds an overlay (checkbox entry) with the given name to the control.
  	addOverlay: function (layer, name) {
  		this._addLayer(layer, name, true);
  		return (this._map) ? this._update() : this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Remove the given layer from the control.
  	removeLayer: function (layer) {
  		layer.off('add remove', this._onLayerChange, this);

  		var obj = this._getLayer(stamp(layer));
  		if (obj) {
  			this._layers.splice(this._layers.indexOf(obj), 1);
  		}
  		return (this._map) ? this._update() : this;
  	},

  	// @method expand(): this
  	// Expand the control container if collapsed.
  	expand: function () {
  		addClass(this._container, 'leaflet-control-layers-expanded');
  		this._section.style.height = null;
  		var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
  		if (acceptableHeight < this._section.clientHeight) {
  			addClass(this._section, 'leaflet-control-layers-scrollbar');
  			this._section.style.height = acceptableHeight + 'px';
  		} else {
  			removeClass(this._section, 'leaflet-control-layers-scrollbar');
  		}
  		this._checkDisabledLayers();
  		return this;
  	},

  	// @method collapse(): this
  	// Collapse the control container if expanded.
  	collapse: function () {
  		removeClass(this._container, 'leaflet-control-layers-expanded');
  		return this;
  	},

  	_initLayout: function () {
  		var className = 'leaflet-control-layers',
  		    container = this._container = create$1('div', className),
  		    collapsed = this.options.collapsed;

  		// makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
  		container.setAttribute('aria-haspopup', true);

  		disableClickPropagation(container);
  		disableScrollPropagation(container);

  		var section = this._section = create$1('section', className + '-list');

  		if (collapsed) {
  			this._map.on('click', this.collapse, this);

  			if (!android) {
  				on(container, {
  					mouseenter: this.expand,
  					mouseleave: this.collapse
  				}, this);
  			}
  		}

  		var link = this._layersLink = create$1('a', className + '-toggle', container);
  		link.href = '#';
  		link.title = 'Layers';

  		if (touch) {
  			on(link, 'click', stop);
  			on(link, 'click', this.expand, this);
  		} else {
  			on(link, 'focus', this.expand, this);
  		}

  		if (!collapsed) {
  			this.expand();
  		}

  		this._baseLayersList = create$1('div', className + '-base', section);
  		this._separator = create$1('div', className + '-separator', section);
  		this._overlaysList = create$1('div', className + '-overlays', section);

  		container.appendChild(section);
  	},

  	_getLayer: function (id) {
  		for (var i = 0; i < this._layers.length; i++) {

  			if (this._layers[i] && stamp(this._layers[i].layer) === id) {
  				return this._layers[i];
  			}
  		}
  	},

  	_addLayer: function (layer, name, overlay) {
  		if (this._map) {
  			layer.on('add remove', this._onLayerChange, this);
  		}

  		this._layers.push({
  			layer: layer,
  			name: name,
  			overlay: overlay
  		});

  		if (this.options.sortLayers) {
  			this._layers.sort(bind(function (a, b) {
  				return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
  			}, this));
  		}

  		if (this.options.autoZIndex && layer.setZIndex) {
  			this._lastZIndex++;
  			layer.setZIndex(this._lastZIndex);
  		}

  		this._expandIfNotCollapsed();
  	},

  	_update: function () {
  		if (!this._container) { return this; }

  		empty(this._baseLayersList);
  		empty(this._overlaysList);

  		this._layerControlInputs = [];
  		var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;

  		for (i = 0; i < this._layers.length; i++) {
  			obj = this._layers[i];
  			this._addItem(obj);
  			overlaysPresent = overlaysPresent || obj.overlay;
  			baseLayersPresent = baseLayersPresent || !obj.overlay;
  			baseLayersCount += !obj.overlay ? 1 : 0;
  		}

  		// Hide base layers section if there's only one layer.
  		if (this.options.hideSingleBase) {
  			baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
  			this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
  		}

  		this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';

  		return this;
  	},

  	_onLayerChange: function (e) {
  		if (!this._handlingClick) {
  			this._update();
  		}

  		var obj = this._getLayer(stamp(e.target));

  		// @namespace Map
  		// @section Layer events
  		// @event baselayerchange: LayersControlEvent
  		// Fired when the base layer is changed through the [layers control](#control-layers).
  		// @event overlayadd: LayersControlEvent
  		// Fired when an overlay is selected through the [layers control](#control-layers).
  		// @event overlayremove: LayersControlEvent
  		// Fired when an overlay is deselected through the [layers control](#control-layers).
  		// @namespace Control.Layers
  		var type = obj.overlay ?
  			(e.type === 'add' ? 'overlayadd' : 'overlayremove') :
  			(e.type === 'add' ? 'baselayerchange' : null);

  		if (type) {
  			this._map.fire(type, obj);
  		}
  	},

  	// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
  	_createRadioElement: function (name, checked) {

  		var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' +
  				name + '"' + (checked ? ' checked="checked"' : '') + '/>';

  		var radioFragment = document.createElement('div');
  		radioFragment.innerHTML = radioHtml;

  		return radioFragment.firstChild;
  	},

  	_addItem: function (obj) {
  		var label = document.createElement('label'),
  		    checked = this._map.hasLayer(obj.layer),
  		    input;

  		if (obj.overlay) {
  			input = document.createElement('input');
  			input.type = 'checkbox';
  			input.className = 'leaflet-control-layers-selector';
  			input.defaultChecked = checked;
  		} else {
  			input = this._createRadioElement('leaflet-base-layers_' + stamp(this), checked);
  		}

  		this._layerControlInputs.push(input);
  		input.layerId = stamp(obj.layer);

  		on(input, 'click', this._onInputClick, this);

  		var name = document.createElement('span');
  		name.innerHTML = ' ' + obj.name;

  		// Helps from preventing layer control flicker when checkboxes are disabled
  		// https://github.com/Leaflet/Leaflet/issues/2771
  		var holder = document.createElement('div');

  		label.appendChild(holder);
  		holder.appendChild(input);
  		holder.appendChild(name);

  		var container = obj.overlay ? this._overlaysList : this._baseLayersList;
  		container.appendChild(label);

  		this._checkDisabledLayers();
  		return label;
  	},

  	_onInputClick: function () {
  		var inputs = this._layerControlInputs,
  		    input, layer;
  		var addedLayers = [],
  		    removedLayers = [];

  		this._handlingClick = true;

  		for (var i = inputs.length - 1; i >= 0; i--) {
  			input = inputs[i];
  			layer = this._getLayer(input.layerId).layer;

  			if (input.checked) {
  				addedLayers.push(layer);
  			} else if (!input.checked) {
  				removedLayers.push(layer);
  			}
  		}

  		// Bugfix issue 2318: Should remove all old layers before readding new ones
  		for (i = 0; i < removedLayers.length; i++) {
  			if (this._map.hasLayer(removedLayers[i])) {
  				this._map.removeLayer(removedLayers[i]);
  			}
  		}
  		for (i = 0; i < addedLayers.length; i++) {
  			if (!this._map.hasLayer(addedLayers[i])) {
  				this._map.addLayer(addedLayers[i]);
  			}
  		}

  		this._handlingClick = false;

  		this._refocusOnMap();
  	},

  	_checkDisabledLayers: function () {
  		var inputs = this._layerControlInputs,
  		    input,
  		    layer,
  		    zoom = this._map.getZoom();

  		for (var i = inputs.length - 1; i >= 0; i--) {
  			input = inputs[i];
  			layer = this._getLayer(input.layerId).layer;
  			input.disabled = (layer.options.minZoom !== undefined && zoom < layer.options.minZoom) ||
  			                 (layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom);

  		}
  	},

  	_expandIfNotCollapsed: function () {
  		if (this._map && !this.options.collapsed) {
  			this.expand();
  		}
  		return this;
  	},

  	_expand: function () {
  		// Backward compatibility, remove me in 1.1.
  		return this.expand();
  	},

  	_collapse: function () {
  		// Backward compatibility, remove me in 1.1.
  		return this.collapse();
  	}

  });


  // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
  // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
  var layers = function (baseLayers, overlays, options) {
  	return new Layers(baseLayers, overlays, options);
  };

  /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */

  var Zoom = Control.extend({
  	// @section
  	// @aka Control.Zoom options
  	options: {
  		position: 'topleft',

  		// @option zoomInText: String = '+'
  		// The text set on the 'zoom in' button.
  		zoomInText: '+',

  		// @option zoomInTitle: String = 'Zoom in'
  		// The title set on the 'zoom in' button.
  		zoomInTitle: 'Zoom in',

  		// @option zoomOutText: String = '&#x2212;'
  		// The text set on the 'zoom out' button.
  		zoomOutText: '&#x2212;',

  		// @option zoomOutTitle: String = 'Zoom out'
  		// The title set on the 'zoom out' button.
  		zoomOutTitle: 'Zoom out'
  	},

  	onAdd: function (map) {
  		var zoomName = 'leaflet-control-zoom',
  		    container = create$1('div', zoomName + ' leaflet-bar'),
  		    options = this.options;

  		this._zoomInButton  = this._createButton(options.zoomInText, options.zoomInTitle,
  		        zoomName + '-in',  container, this._zoomIn);
  		this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
  		        zoomName + '-out', container, this._zoomOut);

  		this._updateDisabled();
  		map.on('zoomend zoomlevelschange', this._updateDisabled, this);

  		return container;
  	},

  	onRemove: function (map) {
  		map.off('zoomend zoomlevelschange', this._updateDisabled, this);
  	},

  	disable: function () {
  		this._disabled = true;
  		this._updateDisabled();
  		return this;
  	},

  	enable: function () {
  		this._disabled = false;
  		this._updateDisabled();
  		return this;
  	},

  	_zoomIn: function (e) {
  		if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
  			this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
  		}
  	},

  	_zoomOut: function (e) {
  		if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
  			this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
  		}
  	},

  	_createButton: function (html, title, className, container, fn) {
  		var link = create$1('a', className, container);
  		link.innerHTML = html;
  		link.href = '#';
  		link.title = title;

  		/*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */
  		link.setAttribute('role', 'button');
  		link.setAttribute('aria-label', title);

  		disableClickPropagation(link);
  		on(link, 'click', stop);
  		on(link, 'click', fn, this);
  		on(link, 'click', this._refocusOnMap, this);

  		return link;
  	},

  	_updateDisabled: function () {
  		var map = this._map,
  		    className = 'leaflet-disabled';

  		removeClass(this._zoomInButton, className);
  		removeClass(this._zoomOutButton, className);

  		if (this._disabled || map._zoom === map.getMinZoom()) {
  			addClass(this._zoomOutButton, className);
  		}
  		if (this._disabled || map._zoom === map.getMaxZoom()) {
  			addClass(this._zoomInButton, className);
  		}
  	}
  });

  // @namespace Map
  // @section Control options
  // @option zoomControl: Boolean = true
  // Whether a [zoom control](#control-zoom) is added to the map by default.
  Map.mergeOptions({
  	zoomControl: true
  });

  Map.addInitHook(function () {
  	if (this.options.zoomControl) {
  		// @section Controls
  		// @property zoomControl: Control.Zoom
  		// The default zoom control (only available if the
  		// [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
  		this.zoomControl = new Zoom();
  		this.addControl(this.zoomControl);
  	}
  });

  // @namespace Control.Zoom
  // @factory L.control.zoom(options: Control.Zoom options)
  // Creates a zoom control
  var zoom = function (options) {
  	return new Zoom(options);
  };

  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */

  var Scale = Control.extend({
  	// @section
  	// @aka Control.Scale options
  	options: {
  		position: 'bottomleft',

  		// @option maxWidth: Number = 100
  		// Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
  		maxWidth: 100,

  		// @option metric: Boolean = True
  		// Whether to show the metric scale line (m/km).
  		metric: true,

  		// @option imperial: Boolean = True
  		// Whether to show the imperial scale line (mi/ft).
  		imperial: true

  		// @option updateWhenIdle: Boolean = false
  		// If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
  	},

  	onAdd: function (map) {
  		var className = 'leaflet-control-scale',
  		    container = create$1('div', className),
  		    options = this.options;

  		this._addScales(options, className + '-line', container);

  		map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  		map.whenReady(this._update, this);

  		return container;
  	},

  	onRemove: function (map) {
  		map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
  	},

  	_addScales: function (options, className, container) {
  		if (options.metric) {
  			this._mScale = create$1('div', className, container);
  		}
  		if (options.imperial) {
  			this._iScale = create$1('div', className, container);
  		}
  	},

  	_update: function () {
  		var map = this._map,
  		    y = map.getSize().y / 2;

  		var maxMeters = map.distance(
  			map.containerPointToLatLng([0, y]),
  			map.containerPointToLatLng([this.options.maxWidth, y]));

  		this._updateScales(maxMeters);
  	},

  	_updateScales: function (maxMeters) {
  		if (this.options.metric && maxMeters) {
  			this._updateMetric(maxMeters);
  		}
  		if (this.options.imperial && maxMeters) {
  			this._updateImperial(maxMeters);
  		}
  	},

  	_updateMetric: function (maxMeters) {
  		var meters = this._getRoundNum(maxMeters),
  		    label = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';

  		this._updateScale(this._mScale, label, meters / maxMeters);
  	},

  	_updateImperial: function (maxMeters) {
  		var maxFeet = maxMeters * 3.2808399,
  		    maxMiles, miles, feet;

  		if (maxFeet > 5280) {
  			maxMiles = maxFeet / 5280;
  			miles = this._getRoundNum(maxMiles);
  			this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);

  		} else {
  			feet = this._getRoundNum(maxFeet);
  			this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
  		}
  	},

  	_updateScale: function (scale, text, ratio) {
  		scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
  		scale.innerHTML = text;
  	},

  	_getRoundNum: function (num) {
  		var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
  		    d = num / pow10;

  		d = d >= 10 ? 10 :
  		    d >= 5 ? 5 :
  		    d >= 3 ? 3 :
  		    d >= 2 ? 2 : 1;

  		return pow10 * d;
  	}
  });


  // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.
  var scale = function (options) {
  	return new Scale(options);
  };

  /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */

  var Attribution = Control.extend({
  	// @section
  	// @aka Control.Attribution options
  	options: {
  		position: 'bottomright',

  		// @option prefix: String = 'Leaflet'
  		// The HTML text shown before the attributions. Pass `false` to disable.
  		prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
  	},

  	initialize: function (options) {
  		setOptions(this, options);

  		this._attributions = {};
  	},

  	onAdd: function (map) {
  		map.attributionControl = this;
  		this._container = create$1('div', 'leaflet-control-attribution');
  		disableClickPropagation(this._container);

  		// TODO ugly, refactor
  		for (var i in map._layers) {
  			if (map._layers[i].getAttribution) {
  				this.addAttribution(map._layers[i].getAttribution());
  			}
  		}

  		this._update();

  		return this._container;
  	},

  	// @method setPrefix(prefix: String): this
  	// Sets the text before the attributions.
  	setPrefix: function (prefix) {
  		this.options.prefix = prefix;
  		this._update();
  		return this;
  	},

  	// @method addAttribution(text: String): this
  	// Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
  	addAttribution: function (text) {
  		if (!text) { return this; }

  		if (!this._attributions[text]) {
  			this._attributions[text] = 0;
  		}
  		this._attributions[text]++;

  		this._update();

  		return this;
  	},

  	// @method removeAttribution(text: String): this
  	// Removes an attribution text.
  	removeAttribution: function (text) {
  		if (!text) { return this; }

  		if (this._attributions[text]) {
  			this._attributions[text]--;
  			this._update();
  		}

  		return this;
  	},

  	_update: function () {
  		if (!this._map) { return; }

  		var attribs = [];

  		for (var i in this._attributions) {
  			if (this._attributions[i]) {
  				attribs.push(i);
  			}
  		}

  		var prefixAndAttribs = [];

  		if (this.options.prefix) {
  			prefixAndAttribs.push(this.options.prefix);
  		}
  		if (attribs.length) {
  			prefixAndAttribs.push(attribs.join(', '));
  		}

  		this._container.innerHTML = prefixAndAttribs.join(' | ');
  	}
  });

  // @namespace Map
  // @section Control options
  // @option attributionControl: Boolean = true
  // Whether a [attribution control](#control-attribution) is added to the map by default.
  Map.mergeOptions({
  	attributionControl: true
  });

  Map.addInitHook(function () {
  	if (this.options.attributionControl) {
  		new Attribution().addTo(this);
  	}
  });

  // @namespace Control.Attribution
  // @factory L.control.attribution(options: Control.Attribution options)
  // Creates an attribution control.
  var attribution = function (options) {
  	return new Attribution(options);
  };

  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;

  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;

  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */

  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
  	initialize: function (map) {
  		this._map = map;
  	},

  	// @method enable(): this
  	// Enables the handler
  	enable: function () {
  		if (this._enabled) { return this; }

  		this._enabled = true;
  		this.addHooks();
  		return this;
  	},

  	// @method disable(): this
  	// Disables the handler
  	disable: function () {
  		if (!this._enabled) { return this; }

  		this._enabled = false;
  		this.removeHooks();
  		return this;
  	},

  	// @method enabled(): Boolean
  	// Returns `true` if the handler is enabled
  	enabled: function () {
  		return !!this._enabled;
  	}

  	// @section Extension methods
  	// Classes inheriting from `Handler` must implement the two following methods:
  	// @method addHooks()
  	// Called when the handler is enabled, should add event hooks.
  	// @method removeHooks()
  	// Called when the handler is disabled, should remove the event hooks added previously.
  });

  // @section There is static function which can be called without instantiating L.Handler:
  // @function addTo(map: Map, name: String): this
  // Adds a new Handler to the given map with the given name.
  Handler.addTo = function (map, name) {
  	map.addHandler(name, this);
  	return this;
  };

  var Mixin = {Events: Events};

  /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */

  var START = touch ? 'touchstart mousedown' : 'mousedown';
  var END = {
  	mousedown: 'mouseup',
  	touchstart: 'touchend',
  	pointerdown: 'touchend',
  	MSPointerDown: 'touchend'
  };
  var MOVE = {
  	mousedown: 'mousemove',
  	touchstart: 'touchmove',
  	pointerdown: 'touchmove',
  	MSPointerDown: 'touchmove'
  };


  var Draggable = Evented.extend({

  	options: {
  		// @section
  		// @aka Draggable options
  		// @option clickTolerance: Number = 3
  		// The max number of pixels a user can shift the mouse pointer during a click
  		// for it to be considered a valid click (as opposed to a mouse drag).
  		clickTolerance: 3
  	},

  	// @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
  	// Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
  	initialize: function (element, dragStartTarget, preventOutline$$1, options) {
  		setOptions(this, options);

  		this._element = element;
  		this._dragStartTarget = dragStartTarget || element;
  		this._preventOutline = preventOutline$$1;
  	},

  	// @method enable()
  	// Enables the dragging ability
  	enable: function () {
  		if (this._enabled) { return; }

  		on(this._dragStartTarget, START, this._onDown, this);

  		this._enabled = true;
  	},

  	// @method disable()
  	// Disables the dragging ability
  	disable: function () {
  		if (!this._enabled) { return; }

  		// If we're currently dragging this draggable,
  		// disabling it counts as first ending the drag.
  		if (Draggable._dragging === this) {
  			this.finishDrag();
  		}

  		off(this._dragStartTarget, START, this._onDown, this);

  		this._enabled = false;
  		this._moved = false;
  	},

  	_onDown: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }

  		this._moved = false;

  		if (hasClass(this._element, 'leaflet-zoom-anim')) { return; }

  		if (Draggable._dragging || e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }
  		Draggable._dragging = this;  // Prevent dragging multiple objects at once.

  		if (this._preventOutline) {
  			preventOutline(this._element);
  		}

  		disableImageDrag();
  		disableTextSelection();

  		if (this._moving) { return; }

  		// @event down: Event
  		// Fired when a drag is about to start.
  		this.fire('down');

  		var first = e.touches ? e.touches[0] : e,
  		    sizedParent = getSizedParentNode(this._element);

  		this._startPoint = new Point(first.clientX, first.clientY);

  		// Cache the scale, so that we can continuously compensate for it during drag (_onMove).
  		this._parentScale = getScale(sizedParent);

  		on(document, MOVE[e.type], this._onMove, this);
  		on(document, END[e.type], this._onUp, this);
  	},

  	_onMove: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }

  		if (e.touches && e.touches.length > 1) {
  			this._moved = true;
  			return;
  		}

  		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
  		    offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);

  		if (!offset.x && !offset.y) { return; }
  		if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) { return; }

  		// We assume that the parent container's position, border and scale do not change for the duration of the drag.
  		// Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
  		// and we can use the cached value for the scale.
  		offset.x /= this._parentScale.x;
  		offset.y /= this._parentScale.y;

  		preventDefault(e);

  		if (!this._moved) {
  			// @event dragstart: Event
  			// Fired when a drag starts
  			this.fire('dragstart');

  			this._moved = true;
  			this._startPos = getPosition(this._element).subtract(offset);

  			addClass(document.body, 'leaflet-dragging');

  			this._lastTarget = e.target || e.srcElement;
  			// IE and Edge do not give the <use> element, so fetch it
  			// if necessary
  			if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) {
  				this._lastTarget = this._lastTarget.correspondingUseElement;
  			}
  			addClass(this._lastTarget, 'leaflet-drag-target');
  		}

  		this._newPos = this._startPos.add(offset);
  		this._moving = true;

  		cancelAnimFrame(this._animRequest);
  		this._lastEvent = e;
  		this._animRequest = requestAnimFrame(this._updatePosition, this, true);
  	},

  	_updatePosition: function () {
  		var e = {originalEvent: this._lastEvent};

  		// @event predrag: Event
  		// Fired continuously during dragging *before* each corresponding
  		// update of the element's position.
  		this.fire('predrag', e);
  		setPosition(this._element, this._newPos);

  		// @event drag: Event
  		// Fired continuously during dragging.
  		this.fire('drag', e);
  	},

  	_onUp: function (e) {
  		// Ignore simulated events, since we handle both touch and
  		// mouse explicitly; otherwise we risk getting duplicates of
  		// touch events, see #4315.
  		// Also ignore the event if disabled; this happens in IE11
  		// under some circumstances, see #3666.
  		if (e._simulated || !this._enabled) { return; }
  		this.finishDrag();
  	},

  	finishDrag: function () {
  		removeClass(document.body, 'leaflet-dragging');

  		if (this._lastTarget) {
  			removeClass(this._lastTarget, 'leaflet-drag-target');
  			this._lastTarget = null;
  		}

  		for (var i in MOVE) {
  			off(document, MOVE[i], this._onMove, this);
  			off(document, END[i], this._onUp, this);
  		}

  		enableImageDrag();
  		enableTextSelection();

  		if (this._moved && this._moving) {
  			// ensure drag is not fired after dragend
  			cancelAnimFrame(this._animRequest);

  			// @event dragend: DragEndEvent
  			// Fired when the drag ends.
  			this.fire('dragend', {
  				distance: this._newPos.distanceTo(this._startPos)
  			});
  		}

  		this._moving = false;
  		Draggable._dragging = false;
  	}

  });

  /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */

  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
  // Improves rendering performance dramatically by lessening the number of points to draw.

  // @function simplify(points: Point[], tolerance: Number): Point[]
  // Dramatically reduces the number of points in a polyline while retaining
  // its shape and returns a new array of simplified points, using the
  // [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
  // Used for a huge performance boost when processing/displaying Leaflet polylines for
  // each zoom level and also reducing visual noise. tolerance affects the amount of
  // simplification (lesser value means higher quality but slower and with more points).
  // Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).
  function simplify(points, tolerance) {
  	if (!tolerance || !points.length) {
  		return points.slice();
  	}

  	var sqTolerance = tolerance * tolerance;

  	    // stage 1: vertex reduction
  	    points = _reducePoints(points, sqTolerance);

  	    // stage 2: Douglas-Peucker simplification
  	    points = _simplifyDP(points, sqTolerance);

  	return points;
  }

  // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
  // Returns the distance between point `p` and segment `p1` to `p2`.
  function pointToSegmentDistance(p, p1, p2) {
  	return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
  }

  // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
  // Returns the closest point from a point `p` on a segment `p1` to `p2`.
  function closestPointOnSegment(p, p1, p2) {
  	return _sqClosestPointOnSegment(p, p1, p2);
  }

  // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
  function _simplifyDP(points, sqTolerance) {

  	var len = points.length,
  	    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
  	    markers = new ArrayConstructor(len);

  	    markers[0] = markers[len - 1] = 1;

  	_simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

  	var i,
  	    newPoints = [];

  	for (i = 0; i < len; i++) {
  		if (markers[i]) {
  			newPoints.push(points[i]);
  		}
  	}

  	return newPoints;
  }

  function _simplifyDPStep(points, markers, sqTolerance, first, last) {

  	var maxSqDist = 0,
  	index, i, sqDist;

  	for (i = first + 1; i <= last - 1; i++) {
  		sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

  		if (sqDist > maxSqDist) {
  			index = i;
  			maxSqDist = sqDist;
  		}
  	}

  	if (maxSqDist > sqTolerance) {
  		markers[index] = 1;

  		_simplifyDPStep(points, markers, sqTolerance, first, index);
  		_simplifyDPStep(points, markers, sqTolerance, index, last);
  	}
  }

  // reduce points that are too close to each other to a single point
  function _reducePoints(points, sqTolerance) {
  	var reducedPoints = [points[0]];

  	for (var i = 1, prev = 0, len = points.length; i < len; i++) {
  		if (_sqDist(points[i], points[prev]) > sqTolerance) {
  			reducedPoints.push(points[i]);
  			prev = i;
  		}
  	}
  	if (prev < len - 1) {
  		reducedPoints.push(points[len - 1]);
  	}
  	return reducedPoints;
  }

  var _lastCode;

  // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
  // Clips the segment a to b by rectangular bounds with the
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
  // (modifying the segment points directly!). Used by Leaflet to only show polyline
  // points that are on the screen or near, increasing performance.
  function clipSegment(a, b, bounds, useLastCode, round) {
  	var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
  	    codeB = _getBitCode(b, bounds),

  	    codeOut, p, newCode;

  	    // save 2nd code to avoid calculating it on the next segment
  	    _lastCode = codeB;

  	while (true) {
  		// if a,b is inside the clip window (trivial accept)
  		if (!(codeA | codeB)) {
  			return [a, b];
  		}

  		// if a,b is outside the clip window (trivial reject)
  		if (codeA & codeB) {
  			return false;
  		}

  		// other cases
  		codeOut = codeA || codeB;
  		p = _getEdgeIntersection(a, b, codeOut, bounds, round);
  		newCode = _getBitCode(p, bounds);

  		if (codeOut === codeA) {
  			a = p;
  			codeA = newCode;
  		} else {
  			b = p;
  			codeB = newCode;
  		}
  	}
  }

  function _getEdgeIntersection(a, b, code, bounds, round) {
  	var dx = b.x - a.x,
  	    dy = b.y - a.y,
  	    min = bounds.min,
  	    max = bounds.max,
  	    x, y;

  	if (code & 8) { // top
  		x = a.x + dx * (max.y - a.y) / dy;
  		y = max.y;

  	} else if (code & 4) { // bottom
  		x = a.x + dx * (min.y - a.y) / dy;
  		y = min.y;

  	} else if (code & 2) { // right
  		x = max.x;
  		y = a.y + dy * (max.x - a.x) / dx;

  	} else if (code & 1) { // left
  		x = min.x;
  		y = a.y + dy * (min.x - a.x) / dx;
  	}

  	return new Point(x, y, round);
  }

  function _getBitCode(p, bounds) {
  	var code = 0;

  	if (p.x < bounds.min.x) { // left
  		code |= 1;
  	} else if (p.x > bounds.max.x) { // right
  		code |= 2;
  	}

  	if (p.y < bounds.min.y) { // bottom
  		code |= 4;
  	} else if (p.y > bounds.max.y) { // top
  		code |= 8;
  	}

  	return code;
  }

  // square distance (to avoid unnecessary Math.sqrt calls)
  function _sqDist(p1, p2) {
  	var dx = p2.x - p1.x,
  	    dy = p2.y - p1.y;
  	return dx * dx + dy * dy;
  }

  // return closest point on segment or distance to that point
  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
  	var x = p1.x,
  	    y = p1.y,
  	    dx = p2.x - x,
  	    dy = p2.y - y,
  	    dot = dx * dx + dy * dy,
  	    t;

  	if (dot > 0) {
  		t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

  		if (t > 1) {
  			x = p2.x;
  			y = p2.y;
  		} else if (t > 0) {
  			x += dx * t;
  			y += dy * t;
  		}
  	}

  	dx = p.x - x;
  	dy = p.y - y;

  	return sqDist ? dx * dx + dy * dy : new Point(x, y);
  }


  // @function isFlat(latlngs: LatLng[]): Boolean
  // Returns true if `latlngs` is a flat array, false is nested.
  function isFlat(latlngs) {
  	return !isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');
  }

  function _flat(latlngs) {
  	console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
  	return isFlat(latlngs);
  }

  var LineUtil = ({
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat
  });

  /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */

  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */
  function clipPolygon(points, bounds, round) {
  	var clippedPoints,
  	    edges = [1, 4, 2, 8],
  	    i, j, k,
  	    a, b,
  	    len, edge, p;

  	for (i = 0, len = points.length; i < len; i++) {
  		points[i]._code = _getBitCode(points[i], bounds);
  	}

  	// for each edge (left, bottom, right, top)
  	for (k = 0; k < 4; k++) {
  		edge = edges[k];
  		clippedPoints = [];

  		for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
  			a = points[i];
  			b = points[j];

  			// if a is inside the clip window
  			if (!(a._code & edge)) {
  				// if b is outside the clip window (a->b goes out of screen)
  				if (b._code & edge) {
  					p = _getEdgeIntersection(b, a, edge, bounds, round);
  					p._code = _getBitCode(p, bounds);
  					clippedPoints.push(p);
  				}
  				clippedPoints.push(a);

  			// else if b is inside the clip window (a->b enters the screen)
  			} else if (!(b._code & edge)) {
  				p = _getEdgeIntersection(b, a, edge, bounds, round);
  				p._code = _getBitCode(p, bounds);
  				clippedPoints.push(p);
  			}
  		}
  		points = clippedPoints;
  	}

  	return points;
  }

  var PolyUtil = ({
    clipPolygon: clipPolygon
  });

  /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */

  var LonLat = {
  	project: function (latlng) {
  		return new Point(latlng.lng, latlng.lat);
  	},

  	unproject: function (point) {
  		return new LatLng(point.y, point.x);
  	},

  	bounds: new Bounds([-180, -90], [180, 90])
  };

  /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */

  var Mercator = {
  	R: 6378137,
  	R_MINOR: 6356752.314245179,

  	bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),

  	project: function (latlng) {
  		var d = Math.PI / 180,
  		    r = this.R,
  		    y = latlng.lat * d,
  		    tmp = this.R_MINOR / r,
  		    e = Math.sqrt(1 - tmp * tmp),
  		    con = e * Math.sin(y);

  		var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
  		y = -r * Math.log(Math.max(ts, 1E-10));

  		return new Point(latlng.lng * d * r, y);
  	},

  	unproject: function (point) {
  		var d = 180 / Math.PI,
  		    r = this.R,
  		    tmp = this.R_MINOR / r,
  		    e = Math.sqrt(1 - tmp * tmp),
  		    ts = Math.exp(-point.y / r),
  		    phi = Math.PI / 2 - 2 * Math.atan(ts);

  		for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
  			con = e * Math.sin(phi);
  			con = Math.pow((1 - con) / (1 + con), e / 2);
  			dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
  			phi += dphi;
  		}

  		return new LatLng(phi * d, point.x * d / r);
  	}
  };

  /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.

   */

  var index = ({
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */
  var EPSG3395 = extend({}, Earth, {
  	code: 'EPSG:3395',
  	projection: Mercator,

  	transformation: (function () {
  		var scale = 0.5 / (Math.PI * Mercator.R);
  		return toTransformation(scale, 0.5, -scale, 0.5);
  	}())
  });

  /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */

  var EPSG4326 = extend({}, Earth, {
  	code: 'EPSG:4326',
  	projection: LonLat,
  	transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
  });

  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
  	projection: LonLat,
  	transformation: toTransformation(1, 0, -1, 0),

  	scale: function (zoom) {
  		return Math.pow(2, zoom);
  	},

  	zoom: function (scale) {
  		return Math.log(scale) / Math.LN2;
  	},

  	distance: function (latlng1, latlng2) {
  		var dx = latlng2.lng - latlng1.lng,
  		    dy = latlng2.lat - latlng1.lat;

  		return Math.sqrt(dx * dx + dy * dy);
  	},

  	infinite: true
  });

  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;

  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */


  var Layer = Evented.extend({

  	// Classes extending `L.Layer` will inherit the following options:
  	options: {
  		// @option pane: String = 'overlayPane'
  		// By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
  		pane: 'overlayPane',

  		// @option attribution: String = null
  		// String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
  		attribution: null,

  		bubblingMouseEvents: true
  	},

  	/* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */
  	addTo: function (map) {
  		map.addLayer(this);
  		return this;
  	},

  	// @method remove: this
  	// Removes the layer from the map it is currently active on.
  	remove: function () {
  		return this.removeFrom(this._map || this._mapToAdd);
  	},

  	// @method removeFrom(map: Map): this
  	// Removes the layer from the given map
  	//
  	// @alternative
  	// @method removeFrom(group: LayerGroup): this
  	// Removes the layer from the given `LayerGroup`
  	removeFrom: function (obj) {
  		if (obj) {
  			obj.removeLayer(this);
  		}
  		return this;
  	},

  	// @method getPane(name? : String): HTMLElement
  	// Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
  	getPane: function (name) {
  		return this._map.getPane(name ? (this.options[name] || name) : this.options.pane);
  	},

  	addInteractiveTarget: function (targetEl) {
  		this._map._targets[stamp(targetEl)] = this;
  		return this;
  	},

  	removeInteractiveTarget: function (targetEl) {
  		delete this._map._targets[stamp(targetEl)];
  		return this;
  	},

  	// @method getAttribution: String
  	// Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
  	getAttribution: function () {
  		return this.options.attribution;
  	},

  	_layerAdd: function (e) {
  		var map = e.target;

  		// check in case layer gets added and then removed before the map is ready
  		if (!map.hasLayer(this)) { return; }

  		this._map = map;
  		this._zoomAnimated = map._zoomAnimated;

  		if (this.getEvents) {
  			var events = this.getEvents();
  			map.on(events, this);
  			this.once('remove', function () {
  				map.off(events, this);
  			}, this);
  		}

  		this.onAdd(map);

  		if (this.getAttribution && map.attributionControl) {
  			map.attributionControl.addAttribution(this.getAttribution());
  		}

  		this.fire('add');
  		map.fire('layeradd', {layer: this});
  	}
  });

  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */


  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */
  Map.include({
  	// @method addLayer(layer: Layer): this
  	// Adds the given layer to the map
  	addLayer: function (layer) {
  		if (!layer._layerAdd) {
  			throw new Error('The provided object is not a Layer.');
  		}

  		var id = stamp(layer);
  		if (this._layers[id]) { return this; }
  		this._layers[id] = layer;

  		layer._mapToAdd = this;

  		if (layer.beforeAdd) {
  			layer.beforeAdd(this);
  		}

  		this.whenReady(layer._layerAdd, layer);

  		return this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Removes the given layer from the map.
  	removeLayer: function (layer) {
  		var id = stamp(layer);

  		if (!this._layers[id]) { return this; }

  		if (this._loaded) {
  			layer.onRemove(this);
  		}

  		if (layer.getAttribution && this.attributionControl) {
  			this.attributionControl.removeAttribution(layer.getAttribution());
  		}

  		delete this._layers[id];

  		if (this._loaded) {
  			this.fire('layerremove', {layer: layer});
  			layer.fire('remove');
  		}

  		layer._map = layer._mapToAdd = null;

  		return this;
  	},

  	// @method hasLayer(layer: Layer): Boolean
  	// Returns `true` if the given layer is currently added to the map
  	hasLayer: function (layer) {
  		return !!layer && (stamp(layer) in this._layers);
  	},

  	/* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */
  	eachLayer: function (method, context) {
  		for (var i in this._layers) {
  			method.call(context, this._layers[i]);
  		}
  		return this;
  	},

  	_addLayers: function (layers) {
  		layers = layers ? (isArray(layers) ? layers : [layers]) : [];

  		for (var i = 0, len = layers.length; i < len; i++) {
  			this.addLayer(layers[i]);
  		}
  	},

  	_addZoomLimit: function (layer) {
  		if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
  			this._zoomBoundLayers[stamp(layer)] = layer;
  			this._updateZoomLevels();
  		}
  	},

  	_removeZoomLimit: function (layer) {
  		var id = stamp(layer);

  		if (this._zoomBoundLayers[id]) {
  			delete this._zoomBoundLayers[id];
  			this._updateZoomLevels();
  		}
  	},

  	_updateZoomLevels: function () {
  		var minZoom = Infinity,
  		    maxZoom = -Infinity,
  		    oldZoomSpan = this._getZoomSpan();

  		for (var i in this._zoomBoundLayers) {
  			var options = this._zoomBoundLayers[i].options;

  			minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
  			maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
  		}

  		this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
  		this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;

  		// @section Map state change events
  		// @event zoomlevelschange: Event
  		// Fired when the number of zoomlevels on the map is changed due
  		// to adding or removing a layer.
  		if (oldZoomSpan !== this._getZoomSpan()) {
  			this.fire('zoomlevelschange');
  		}

  		if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
  			this.setZoom(this._layersMaxZoom);
  		}
  		if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
  			this.setZoom(this._layersMinZoom);
  		}
  	}
  });

  /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */

  var LayerGroup = Layer.extend({

  	initialize: function (layers, options) {
  		setOptions(this, options);

  		this._layers = {};

  		var i, len;

  		if (layers) {
  			for (i = 0, len = layers.length; i < len; i++) {
  				this.addLayer(layers[i]);
  			}
  		}
  	},

  	// @method addLayer(layer: Layer): this
  	// Adds the given layer to the group.
  	addLayer: function (layer) {
  		var id = this.getLayerId(layer);

  		this._layers[id] = layer;

  		if (this._map) {
  			this._map.addLayer(layer);
  		}

  		return this;
  	},

  	// @method removeLayer(layer: Layer): this
  	// Removes the given layer from the group.
  	// @alternative
  	// @method removeLayer(id: Number): this
  	// Removes the layer with the given internal ID from the group.
  	removeLayer: function (layer) {
  		var id = layer in this._layers ? layer : this.getLayerId(layer);

  		if (this._map && this._layers[id]) {
  			this._map.removeLayer(this._layers[id]);
  		}

  		delete this._layers[id];

  		return this;
  	},

  	// @method hasLayer(layer: Layer): Boolean
  	// Returns `true` if the given layer is currently added to the group.
  	// @alternative
  	// @method hasLayer(id: Number): Boolean
  	// Returns `true` if the given internal ID is currently added to the group.
  	hasLayer: function (layer) {
  		if (!layer) { return false; }
  		var layerId = typeof layer === 'number' ? layer : this.getLayerId(layer);
  		return layerId in this._layers;
  	},

  	// @method clearLayers(): this
  	// Removes all the layers from the group.
  	clearLayers: function () {
  		return this.eachLayer(this.removeLayer, this);
  	},

  	// @method invoke(methodName: String, …): this
  	// Calls `methodName` on every layer contained in this group, passing any
  	// additional parameters. Has no effect if the layers contained do not
  	// implement `methodName`.
  	invoke: function (methodName) {
  		var args = Array.prototype.slice.call(arguments, 1),
  		    i, layer;

  		for (i in this._layers) {
  			layer = this._layers[i];

  			if (layer[methodName]) {
  				layer[methodName].apply(layer, args);
  			}
  		}

  		return this;
  	},

  	onAdd: function (map) {
  		this.eachLayer(map.addLayer, map);
  	},

  	onRemove: function (map) {
  		this.eachLayer(map.removeLayer, map);
  	},

  	// @method eachLayer(fn: Function, context?: Object): this
  	// Iterates over the layers of the group, optionally specifying context of the iterator function.
  	// ```js
  	// group.eachLayer(function (layer) {
  	// 	layer.bindPopup('Hello');
  	// });
  	// ```
  	eachLayer: function (method, context) {
  		for (var i in this._layers) {
  			method.call(context, this._layers[i]);
  		}
  		return this;
  	},

  	// @method getLayer(id: Number): Layer
  	// Returns the layer with the given internal ID.
  	getLayer: function (id) {
  		return this._layers[id];
  	},

  	// @method getLayers(): Layer[]
  	// Returns an array of all the layers added to the group.
  	getLayers: function () {
  		var layers = [];
  		this.eachLayer(layers.push, layers);
  		return layers;
  	},

  	// @method setZIndex(zIndex: Number): this
  	// Calls `setZIndex` on every layer contained in this group, passing the z-index.
  	setZIndex: function (zIndex) {
  		return this.invoke('setZIndex', zIndex);
  	},

  	// @method getLayerId(layer: Layer): Number
  	// Returns the internal ID for a layer
  	getLayerId: function (layer) {
  		return stamp(layer);
  	}
  });


  // @factory L.layerGroup(layers?: Layer[], options?: Object)
  // Create a layer group, optionally given an initial set of layers and an `options` object.
  var layerGroup = function (layers, options) {
  	return new LayerGroup(layers, options);
  };

  /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */

  var FeatureGroup = LayerGroup.extend({

  	addLayer: function (layer) {
  		if (this.hasLayer(layer)) {
  			return this;
  		}

  		layer.addEventParent(this);

  		LayerGroup.prototype.addLayer.call(this, layer);

  		// @event layeradd: LayerEvent
  		// Fired when a layer is added to this `FeatureGroup`
  		return this.fire('layeradd', {layer: layer});
  	},

  	removeLayer: function (layer) {
  		if (!this.hasLayer(layer)) {
  			return this;
  		}
  		if (layer in this._layers) {
  			layer = this._layers[layer];
  		}

  		layer.removeEventParent(this);

  		LayerGroup.prototype.removeLayer.call(this, layer);

  		// @event layerremove: LayerEvent
  		// Fired when a layer is removed from this `FeatureGroup`
  		return this.fire('layerremove', {layer: layer});
  	},

  	// @method setStyle(style: Path options): this
  	// Sets the given path options to each layer of the group that has a `setStyle` method.
  	setStyle: function (style) {
  		return this.invoke('setStyle', style);
  	},

  	// @method bringToFront(): this
  	// Brings the layer group to the top of all other layers
  	bringToFront: function () {
  		return this.invoke('bringToFront');
  	},

  	// @method bringToBack(): this
  	// Brings the layer group to the back of all other layers
  	bringToBack: function () {
  		return this.invoke('bringToBack');
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
  	getBounds: function () {
  		var bounds = new LatLngBounds();

  		for (var id in this._layers) {
  			var layer = this._layers[id];
  			bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
  		}
  		return bounds;
  	}
  });

  // @factory L.featureGroup(layers?: Layer[], options?: Object)
  // Create a feature group, optionally given an initial set of layers and an `options` object.
  var featureGroup = function (layers, options) {
  	return new FeatureGroup(layers, options);
  };

  /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */

  var Icon = Class.extend({

  	/* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */

  	options: {
  		popupAnchor: [0, 0],
  		tooltipAnchor: [0, 0]
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	// @method createIcon(oldIcon?: HTMLElement): HTMLElement
  	// Called internally when the icon has to be shown, returns a `<img>` HTML element
  	// styled according to the options.
  	createIcon: function (oldIcon) {
  		return this._createIcon('icon', oldIcon);
  	},

  	// @method createShadow(oldIcon?: HTMLElement): HTMLElement
  	// As `createIcon`, but for the shadow beneath it.
  	createShadow: function (oldIcon) {
  		return this._createIcon('shadow', oldIcon);
  	},

  	_createIcon: function (name, oldIcon) {
  		var src = this._getIconUrl(name);

  		if (!src) {
  			if (name === 'icon') {
  				throw new Error('iconUrl not set in Icon options (see the docs).');
  			}
  			return null;
  		}

  		var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);
  		this._setIconStyles(img, name);

  		return img;
  	},

  	_setIconStyles: function (img, name) {
  		var options = this.options;
  		var sizeOption = options[name + 'Size'];

  		if (typeof sizeOption === 'number') {
  			sizeOption = [sizeOption, sizeOption];
  		}

  		var size = toPoint(sizeOption),
  		    anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor ||
  		            size && size.divideBy(2, true));

  		img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

  		if (anchor) {
  			img.style.marginLeft = (-anchor.x) + 'px';
  			img.style.marginTop  = (-anchor.y) + 'px';
  		}

  		if (size) {
  			img.style.width  = size.x + 'px';
  			img.style.height = size.y + 'px';
  		}
  	},

  	_createImg: function (src, el) {
  		el = el || document.createElement('img');
  		el.src = src;
  		return el;
  	},

  	_getIconUrl: function (name) {
  		return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
  	}
  });


  // @factory L.icon(options: Icon options)
  // Creates an icon instance with the given options.
  function icon(options) {
  	return new Icon(options);
  }

  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */

  var IconDefault = Icon.extend({

  	options: {
  		iconUrl:       'marker-icon.png',
  		iconRetinaUrl: 'marker-icon-2x.png',
  		shadowUrl:     'marker-shadow.png',
  		iconSize:    [25, 41],
  		iconAnchor:  [12, 41],
  		popupAnchor: [1, -34],
  		tooltipAnchor: [16, -28],
  		shadowSize:  [41, 41]
  	},

  	_getIconUrl: function (name) {
  		if (!IconDefault.imagePath) {	// Deprecated, backwards-compatibility only
  			IconDefault.imagePath = this._detectIconPath();
  		}

  		// @option imagePath: String
  		// `Icon.Default` will try to auto-detect the location of the
  		// blue icon images. If you are placing these images in a non-standard
  		// way, set this option to point to the right path.
  		return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
  	},

  	_detectIconPath: function () {
  		var el = create$1('div',  'leaflet-default-icon-path', document.body);
  		var path = getStyle(el, 'background-image') ||
  		           getStyle(el, 'backgroundImage');	// IE8

  		document.body.removeChild(el);

  		if (path === null || path.indexOf('url') !== 0) {
  			path = '';
  		} else {
  			path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
  		}

  		return path;
  	}
  });

  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */


  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
  	initialize: function (marker) {
  		this._marker = marker;
  	},

  	addHooks: function () {
  		var icon = this._marker._icon;

  		if (!this._draggable) {
  			this._draggable = new Draggable(icon, icon, true);
  		}

  		this._draggable.on({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).enable();

  		addClass(icon, 'leaflet-marker-draggable');
  	},

  	removeHooks: function () {
  		this._draggable.off({
  			dragstart: this._onDragStart,
  			predrag: this._onPreDrag,
  			drag: this._onDrag,
  			dragend: this._onDragEnd
  		}, this).disable();

  		if (this._marker._icon) {
  			removeClass(this._marker._icon, 'leaflet-marker-draggable');
  		}
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	_adjustPan: function (e) {
  		var marker = this._marker,
  		    map = marker._map,
  		    speed = this._marker.options.autoPanSpeed,
  		    padding = this._marker.options.autoPanPadding,
  		    iconPos = getPosition(marker._icon),
  		    bounds = map.getPixelBounds(),
  		    origin = map.getPixelOrigin();

  		var panBounds = toBounds(
  			bounds.min._subtract(origin).add(padding),
  			bounds.max._subtract(origin).subtract(padding)
  		);

  		if (!panBounds.contains(iconPos)) {
  			// Compute incremental movement
  			var movement = toPoint(
  				(Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) -
  				(Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x),

  				(Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) -
  				(Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)
  			).multiplyBy(speed);

  			map.panBy(movement, {animate: false});

  			this._draggable._newPos._add(movement);
  			this._draggable._startPos._add(movement);

  			setPosition(marker._icon, this._draggable._newPos);
  			this._onDrag(e);

  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDragStart: function () {
  		// @section Dragging events
  		// @event dragstart: Event
  		// Fired when the user starts dragging the marker.

  		// @event movestart: Event
  		// Fired when the marker starts moving (because of dragging).

  		this._oldLatLng = this._marker.getLatLng();

  		// When using ES6 imports it could not be set when `Popup` was not imported as well
  		this._marker.closePopup && this._marker.closePopup();

  		this._marker
  			.fire('movestart')
  			.fire('dragstart');
  	},

  	_onPreDrag: function (e) {
  		if (this._marker.options.autoPan) {
  			cancelAnimFrame(this._panRequest);
  			this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
  		}
  	},

  	_onDrag: function (e) {
  		var marker = this._marker,
  		    shadow = marker._shadow,
  		    iconPos = getPosition(marker._icon),
  		    latlng = marker._map.layerPointToLatLng(iconPos);

  		// update shadow position
  		if (shadow) {
  			setPosition(shadow, iconPos);
  		}

  		marker._latlng = latlng;
  		e.latlng = latlng;
  		e.oldLatLng = this._oldLatLng;

  		// @event drag: Event
  		// Fired repeatedly while the user drags the marker.
  		marker
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_onDragEnd: function (e) {
  		// @event dragend: DragEndEvent
  		// Fired when the user stops dragging the marker.

  		 cancelAnimFrame(this._panRequest);

  		// @event moveend: Event
  		// Fired when the marker stops moving (because of dragging).
  		delete this._oldLatLng;
  		this._marker
  		    .fire('moveend')
  		    .fire('dragend', e);
  	}
  });

  /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */

  var Marker = Layer.extend({

  	// @section
  	// @aka Marker options
  	options: {
  		// @option icon: Icon = *
  		// Icon instance to use for rendering the marker.
  		// See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
  		// If not specified, a common instance of `L.Icon.Default` is used.
  		icon: new IconDefault(),

  		// Option inherited from "Interactive layer" abstract class
  		interactive: true,

  		// @option keyboard: Boolean = true
  		// Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
  		keyboard: true,

  		// @option title: String = ''
  		// Text for the browser tooltip that appear on marker hover (no tooltip by default).
  		title: '',

  		// @option alt: String = ''
  		// Text for the `alt` attribute of the icon image (useful for accessibility).
  		alt: '',

  		// @option zIndexOffset: Number = 0
  		// By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
  		zIndexOffset: 0,

  		// @option opacity: Number = 1.0
  		// The opacity of the marker.
  		opacity: 1,

  		// @option riseOnHover: Boolean = false
  		// If `true`, the marker will get on top of others when you hover the mouse over it.
  		riseOnHover: false,

  		// @option riseOffset: Number = 250
  		// The z-index offset used for the `riseOnHover` feature.
  		riseOffset: 250,

  		// @option pane: String = 'markerPane'
  		// `Map pane` where the markers icon will be added.
  		pane: 'markerPane',

  		// @option shadowPane: String = 'shadowPane'
  		// `Map pane` where the markers shadow will be added.
  		shadowPane: 'shadowPane',

  		// @option bubblingMouseEvents: Boolean = false
  		// When `true`, a mouse event on this marker will trigger the same event on the map
  		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
  		bubblingMouseEvents: false,

  		// @section Draggable marker options
  		// @option draggable: Boolean = false
  		// Whether the marker is draggable with mouse/touch or not.
  		draggable: false,

  		// @option autoPan: Boolean = false
  		// Whether to pan the map when dragging this marker near its edge or not.
  		autoPan: false,

  		// @option autoPanPadding: Point = Point(50, 50)
  		// Distance (in pixels to the left/right and to the top/bottom) of the
  		// map edge to start panning the map.
  		autoPanPadding: [50, 50],

  		// @option autoPanSpeed: Number = 10
  		// Number of pixels the map should pan by.
  		autoPanSpeed: 10
  	},

  	/* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */

  	initialize: function (latlng, options) {
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);
  	},

  	onAdd: function (map) {
  		this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

  		if (this._zoomAnimated) {
  			map.on('zoomanim', this._animateZoom, this);
  		}

  		this._initIcon();
  		this.update();
  	},

  	onRemove: function (map) {
  		if (this.dragging && this.dragging.enabled()) {
  			this.options.draggable = true;
  			this.dragging.removeHooks();
  		}
  		delete this.dragging;

  		if (this._zoomAnimated) {
  			map.off('zoomanim', this._animateZoom, this);
  		}

  		this._removeIcon();
  		this._removeShadow();
  	},

  	getEvents: function () {
  		return {
  			zoom: this.update,
  			viewreset: this.update
  		};
  	},

  	// @method getLatLng: LatLng
  	// Returns the current geographical position of the marker.
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setLatLng(latlng: LatLng): this
  	// Changes the marker position to the given point.
  	setLatLng: function (latlng) {
  		var oldLatLng = this._latlng;
  		this._latlng = toLatLng(latlng);
  		this.update();

  		// @event move: Event
  		// Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
  	},

  	// @method setZIndexOffset(offset: Number): this
  	// Changes the [zIndex offset](#marker-zindexoffset) of the marker.
  	setZIndexOffset: function (offset) {
  		this.options.zIndexOffset = offset;
  		return this.update();
  	},

  	// @method getIcon: Icon
  	// Returns the current icon used by the marker
  	getIcon: function () {
  		return this.options.icon;
  	},

  	// @method setIcon(icon: Icon): this
  	// Changes the marker icon.
  	setIcon: function (icon) {

  		this.options.icon = icon;

  		if (this._map) {
  			this._initIcon();
  			this.update();
  		}

  		if (this._popup) {
  			this.bindPopup(this._popup, this._popup.options);
  		}

  		return this;
  	},

  	getElement: function () {
  		return this._icon;
  	},

  	update: function () {

  		if (this._icon && this._map) {
  			var pos = this._map.latLngToLayerPoint(this._latlng).round();
  			this._setPos(pos);
  		}

  		return this;
  	},

  	_initIcon: function () {
  		var options = this.options,
  		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

  		var icon = options.icon.createIcon(this._icon),
  		    addIcon = false;

  		// if we're not reusing the icon, remove the old one and init new one
  		if (icon !== this._icon) {
  			if (this._icon) {
  				this._removeIcon();
  			}
  			addIcon = true;

  			if (options.title) {
  				icon.title = options.title;
  			}

  			if (icon.tagName === 'IMG') {
  				icon.alt = options.alt || '';
  			}
  		}

  		addClass(icon, classToAdd);

  		if (options.keyboard) {
  			icon.tabIndex = '0';
  		}

  		this._icon = icon;

  		if (options.riseOnHover) {
  			this.on({
  				mouseover: this._bringToFront,
  				mouseout: this._resetZIndex
  			});
  		}

  		var newShadow = options.icon.createShadow(this._shadow),
  		    addShadow = false;

  		if (newShadow !== this._shadow) {
  			this._removeShadow();
  			addShadow = true;
  		}

  		if (newShadow) {
  			addClass(newShadow, classToAdd);
  			newShadow.alt = '';
  		}
  		this._shadow = newShadow;


  		if (options.opacity < 1) {
  			this._updateOpacity();
  		}


  		if (addIcon) {
  			this.getPane().appendChild(this._icon);
  		}
  		this._initInteraction();
  		if (newShadow && addShadow) {
  			this.getPane(options.shadowPane).appendChild(this._shadow);
  		}
  	},

  	_removeIcon: function () {
  		if (this.options.riseOnHover) {
  			this.off({
  				mouseover: this._bringToFront,
  				mouseout: this._resetZIndex
  			});
  		}

  		remove(this._icon);
  		this.removeInteractiveTarget(this._icon);

  		this._icon = null;
  	},

  	_removeShadow: function () {
  		if (this._shadow) {
  			remove(this._shadow);
  		}
  		this._shadow = null;
  	},

  	_setPos: function (pos) {

  		if (this._icon) {
  			setPosition(this._icon, pos);
  		}

  		if (this._shadow) {
  			setPosition(this._shadow, pos);
  		}

  		this._zIndex = pos.y + this.options.zIndexOffset;

  		this._resetZIndex();
  	},

  	_updateZIndex: function (offset) {
  		if (this._icon) {
  			this._icon.style.zIndex = this._zIndex + offset;
  		}
  	},

  	_animateZoom: function (opt) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

  		this._setPos(pos);
  	},

  	_initInteraction: function () {

  		if (!this.options.interactive) { return; }

  		addClass(this._icon, 'leaflet-interactive');

  		this.addInteractiveTarget(this._icon);

  		if (MarkerDrag) {
  			var draggable = this.options.draggable;
  			if (this.dragging) {
  				draggable = this.dragging.enabled();
  				this.dragging.disable();
  			}

  			this.dragging = new MarkerDrag(this);

  			if (draggable) {
  				this.dragging.enable();
  			}
  		}
  	},

  	// @method setOpacity(opacity: Number): this
  	// Changes the opacity of the marker.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;
  		if (this._map) {
  			this._updateOpacity();
  		}

  		return this;
  	},

  	_updateOpacity: function () {
  		var opacity = this.options.opacity;

  		if (this._icon) {
  			setOpacity(this._icon, opacity);
  		}

  		if (this._shadow) {
  			setOpacity(this._shadow, opacity);
  		}
  	},

  	_bringToFront: function () {
  		this._updateZIndex(this.options.riseOffset);
  	},

  	_resetZIndex: function () {
  		this._updateZIndex(0);
  	},

  	_getPopupAnchor: function () {
  		return this.options.icon.options.popupAnchor;
  	},

  	_getTooltipAnchor: function () {
  		return this.options.icon.options.tooltipAnchor;
  	}
  });


  // factory L.marker(latlng: LatLng, options? : Marker options)

  // @factory L.marker(latlng: LatLng, options? : Marker options)
  // Instantiates a Marker object given a geographical point and optionally an options object.
  function marker(latlng, options) {
  	return new Marker(latlng, options);
  }

  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */

  var Path = Layer.extend({

  	// @section
  	// @aka Path options
  	options: {
  		// @option stroke: Boolean = true
  		// Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
  		stroke: true,

  		// @option color: String = '#3388ff'
  		// Stroke color
  		color: '#3388ff',

  		// @option weight: Number = 3
  		// Stroke width in pixels
  		weight: 3,

  		// @option opacity: Number = 1.0
  		// Stroke opacity
  		opacity: 1,

  		// @option lineCap: String= 'round'
  		// A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
  		lineCap: 'round',

  		// @option lineJoin: String = 'round'
  		// A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
  		lineJoin: 'round',

  		// @option dashArray: String = null
  		// A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashArray: null,

  		// @option dashOffset: String = null
  		// A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
  		dashOffset: null,

  		// @option fill: Boolean = depends
  		// Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
  		fill: false,

  		// @option fillColor: String = *
  		// Fill color. Defaults to the value of the [`color`](#path-color) option
  		fillColor: null,

  		// @option fillOpacity: Number = 0.2
  		// Fill opacity.
  		fillOpacity: 0.2,

  		// @option fillRule: String = 'evenodd'
  		// A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
  		fillRule: 'evenodd',

  		// className: '',

  		// Option inherited from "Interactive layer" abstract class
  		interactive: true,

  		// @option bubblingMouseEvents: Boolean = true
  		// When `true`, a mouse event on this path will trigger the same event on the map
  		// (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
  		bubblingMouseEvents: true
  	},

  	beforeAdd: function (map) {
  		// Renderer is set here because we need to call renderer.getEvents
  		// before this.getEvents.
  		this._renderer = map.getRenderer(this);
  	},

  	onAdd: function () {
  		this._renderer._initPath(this);
  		this._reset();
  		this._renderer._addPath(this);
  	},

  	onRemove: function () {
  		this._renderer._removePath(this);
  	},

  	// @method redraw(): this
  	// Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
  	redraw: function () {
  		if (this._map) {
  			this._renderer._updatePath(this);
  		}
  		return this;
  	},

  	// @method setStyle(style: Path options): this
  	// Changes the appearance of a Path based on the options in the `Path options` object.
  	setStyle: function (style) {
  		setOptions(this, style);
  		if (this._renderer) {
  			this._renderer._updateStyle(this);
  			if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, 'weight')) {
  				this._updateBounds();
  			}
  		}
  		return this;
  	},

  	// @method bringToFront(): this
  	// Brings the layer to the top of all path layers.
  	bringToFront: function () {
  		if (this._renderer) {
  			this._renderer._bringToFront(this);
  		}
  		return this;
  	},

  	// @method bringToBack(): this
  	// Brings the layer to the bottom of all path layers.
  	bringToBack: function () {
  		if (this._renderer) {
  			this._renderer._bringToBack(this);
  		}
  		return this;
  	},

  	getElement: function () {
  		return this._path;
  	},

  	_reset: function () {
  		// defined in child classes
  		this._project();
  		this._update();
  	},

  	_clickTolerance: function () {
  		// used when doing hit detection for Canvas layers
  		return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
  	}
  });

  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */

  var CircleMarker = Path.extend({

  	// @section
  	// @aka CircleMarker options
  	options: {
  		fill: true,

  		// @option radius: Number = 10
  		// Radius of the circle marker, in pixels
  		radius: 10
  	},

  	initialize: function (latlng, options) {
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);
  		this._radius = this.options.radius;
  	},

  	// @method setLatLng(latLng: LatLng): this
  	// Sets the position of a circle marker to a new location.
  	setLatLng: function (latlng) {
  		var oldLatLng = this._latlng;
  		this._latlng = toLatLng(latlng);
  		this.redraw();

  		// @event move: Event
  		// Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
  		return this.fire('move', {oldLatLng: oldLatLng, latlng: this._latlng});
  	},

  	// @method getLatLng(): LatLng
  	// Returns the current geographical position of the circle marker
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle marker. Units are in pixels.
  	setRadius: function (radius) {
  		this.options.radius = this._radius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of the circle
  	getRadius: function () {
  		return this._radius;
  	},

  	setStyle : function (options) {
  		var radius = options && options.radius || this._radius;
  		Path.prototype.setStyle.call(this, options);
  		this.setRadius(radius);
  		return this;
  	},

  	_project: function () {
  		this._point = this._map.latLngToLayerPoint(this._latlng);
  		this._updateBounds();
  	},

  	_updateBounds: function () {
  		var r = this._radius,
  		    r2 = this._radiusY || r,
  		    w = this._clickTolerance(),
  		    p = [r + w, r2 + w];
  		this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
  	},

  	_update: function () {
  		if (this._map) {
  			this._updatePath();
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updateCircle(this);
  	},

  	_empty: function () {
  		return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p) {
  		return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
  	}
  });


  // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.
  function circleMarker(latlng, options) {
  	return new CircleMarker(latlng, options);
  }

  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */

  var Circle = CircleMarker.extend({

  	initialize: function (latlng, options, legacyOptions) {
  		if (typeof options === 'number') {
  			// Backwards compatibility with 0.7.x factory (latlng, radius, options?)
  			options = extend({}, legacyOptions, {radius: options});
  		}
  		setOptions(this, options);
  		this._latlng = toLatLng(latlng);

  		if (isNaN(this.options.radius)) { throw new Error('Circle radius cannot be NaN'); }

  		// @section
  		// @aka Circle options
  		// @option radius: Number; Radius of the circle, in meters.
  		this._mRadius = this.options.radius;
  	},

  	// @method setRadius(radius: Number): this
  	// Sets the radius of a circle. Units are in meters.
  	setRadius: function (radius) {
  		this._mRadius = radius;
  		return this.redraw();
  	},

  	// @method getRadius(): Number
  	// Returns the current radius of a circle. Units are in meters.
  	getRadius: function () {
  		return this._mRadius;
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the `LatLngBounds` of the path.
  	getBounds: function () {
  		var half = [this._radius, this._radiusY || this._radius];

  		return new LatLngBounds(
  			this._map.layerPointToLatLng(this._point.subtract(half)),
  			this._map.layerPointToLatLng(this._point.add(half)));
  	},

  	setStyle: Path.prototype.setStyle,

  	_project: function () {

  		var lng = this._latlng.lng,
  		    lat = this._latlng.lat,
  		    map = this._map,
  		    crs = map.options.crs;

  		if (crs.distance === Earth.distance) {
  			var d = Math.PI / 180,
  			    latR = (this._mRadius / Earth.R) / d,
  			    top = map.project([lat + latR, lng]),
  			    bottom = map.project([lat - latR, lng]),
  			    p = top.add(bottom).divideBy(2),
  			    lat2 = map.unproject(p).lat,
  			    lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) /
  			            (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

  			if (isNaN(lngR) || lngR === 0) {
  				lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
  			}

  			this._point = p.subtract(map.getPixelOrigin());
  			this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
  			this._radiusY = p.y - top.y;

  		} else {
  			var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));

  			this._point = map.latLngToLayerPoint(this._latlng);
  			this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
  		}

  		this._updateBounds();
  	}
  });

  // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.
  function circle(latlng, options, legacyOptions) {
  	return new Circle(latlng, options, legacyOptions);
  }

  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */


  var Polyline = Path.extend({

  	// @section
  	// @aka Polyline options
  	options: {
  		// @option smoothFactor: Number = 1.0
  		// How much to simplify the polyline on each zoom level. More means
  		// better performance and smoother look, and less means more accurate representation.
  		smoothFactor: 1.0,

  		// @option noClip: Boolean = false
  		// Disable polyline clipping.
  		noClip: false
  	},

  	initialize: function (latlngs, options) {
  		setOptions(this, options);
  		this._setLatLngs(latlngs);
  	},

  	// @method getLatLngs(): LatLng[]
  	// Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
  	getLatLngs: function () {
  		return this._latlngs;
  	},

  	// @method setLatLngs(latlngs: LatLng[]): this
  	// Replaces all the points in the polyline with the given array of geographical points.
  	setLatLngs: function (latlngs) {
  		this._setLatLngs(latlngs);
  		return this.redraw();
  	},

  	// @method isEmpty(): Boolean
  	// Returns `true` if the Polyline has no LatLngs.
  	isEmpty: function () {
  		return !this._latlngs.length;
  	},

  	// @method closestLayerPoint(p: Point): Point
  	// Returns the point closest to `p` on the Polyline.
  	closestLayerPoint: function (p) {
  		var minDistance = Infinity,
  		    minPoint = null,
  		    closest = _sqClosestPointOnSegment,
  		    p1, p2;

  		for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
  			var points = this._parts[j];

  			for (var i = 1, len = points.length; i < len; i++) {
  				p1 = points[i - 1];
  				p2 = points[i];

  				var sqDist = closest(p, p1, p2, true);

  				if (sqDist < minDistance) {
  					minDistance = sqDist;
  					minPoint = closest(p, p1, p2);
  				}
  			}
  		}
  		if (minPoint) {
  			minPoint.distance = Math.sqrt(minDistance);
  		}
  		return minPoint;
  	},

  	// @method getCenter(): LatLng
  	// Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}

  		var i, halfDist, segDist, dist, p1, p2, ratio,
  		    points = this._rings[0],
  		    len = points.length;

  		if (!len) { return null; }

  		// polyline centroid algorithm; only uses the first ring if there are multiple

  		for (i = 0, halfDist = 0; i < len - 1; i++) {
  			halfDist += points[i].distanceTo(points[i + 1]) / 2;
  		}

  		// The line is so small in the current view that all points are on the same pixel.
  		if (halfDist === 0) {
  			return this._map.layerPointToLatLng(points[0]);
  		}

  		for (i = 0, dist = 0; i < len - 1; i++) {
  			p1 = points[i];
  			p2 = points[i + 1];
  			segDist = p1.distanceTo(p2);
  			dist += segDist;

  			if (dist > halfDist) {
  				ratio = (dist - halfDist) / segDist;
  				return this._map.layerPointToLatLng([
  					p2.x - ratio * (p2.x - p1.x),
  					p2.y - ratio * (p2.y - p1.y)
  				]);
  			}
  		}
  	},

  	// @method getBounds(): LatLngBounds
  	// Returns the `LatLngBounds` of the path.
  	getBounds: function () {
  		return this._bounds;
  	},

  	// @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
  	// Adds a given point to the polyline. By default, adds to the first ring of
  	// the polyline in case of a multi-polyline, but can be overridden by passing
  	// a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
  	addLatLng: function (latlng, latlngs) {
  		latlngs = latlngs || this._defaultShape();
  		latlng = toLatLng(latlng);
  		latlngs.push(latlng);
  		this._bounds.extend(latlng);
  		return this.redraw();
  	},

  	_setLatLngs: function (latlngs) {
  		this._bounds = new LatLngBounds();
  		this._latlngs = this._convertLatLngs(latlngs);
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
  	},

  	// recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
  	_convertLatLngs: function (latlngs) {
  		var result = [],
  		    flat = isFlat(latlngs);

  		for (var i = 0, len = latlngs.length; i < len; i++) {
  			if (flat) {
  				result[i] = toLatLng(latlngs[i]);
  				this._bounds.extend(result[i]);
  			} else {
  				result[i] = this._convertLatLngs(latlngs[i]);
  			}
  		}

  		return result;
  	},

  	_project: function () {
  		var pxBounds = new Bounds();
  		this._rings = [];
  		this._projectLatlngs(this._latlngs, this._rings, pxBounds);

  		if (this._bounds.isValid() && pxBounds.isValid()) {
  			this._rawPxBounds = pxBounds;
  			this._updateBounds();
  		}
  	},

  	_updateBounds: function () {
  		var w = this._clickTolerance(),
  		    p = new Point(w, w);
  		this._pxBounds = new Bounds([
  			this._rawPxBounds.min.subtract(p),
  			this._rawPxBounds.max.add(p)
  		]);
  	},

  	// recursively turns latlngs into a set of rings with projected coordinates
  	_projectLatlngs: function (latlngs, result, projectedBounds) {
  		var flat = latlngs[0] instanceof LatLng,
  		    len = latlngs.length,
  		    i, ring;

  		if (flat) {
  			ring = [];
  			for (i = 0; i < len; i++) {
  				ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
  				projectedBounds.extend(ring[i]);
  			}
  			result.push(ring);
  		} else {
  			for (i = 0; i < len; i++) {
  				this._projectLatlngs(latlngs[i], result, projectedBounds);
  			}
  		}
  	},

  	// clip polyline by renderer bounds so that we have less to render for performance
  	_clipPoints: function () {
  		var bounds = this._renderer._bounds;

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		var parts = this._parts,
  		    i, j, k, len, len2, segment, points;

  		for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
  			points = this._rings[i];

  			for (j = 0, len2 = points.length; j < len2 - 1; j++) {
  				segment = clipSegment(points[j], points[j + 1], bounds, j, true);

  				if (!segment) { continue; }

  				parts[k] = parts[k] || [];
  				parts[k].push(segment[0]);

  				// if segment goes out of screen, or it's the last one, it's the end of the line part
  				if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
  					parts[k].push(segment[1]);
  					k++;
  				}
  			}
  		}
  	},

  	// simplify each clipped part of the polyline for performance
  	_simplifyPoints: function () {
  		var parts = this._parts,
  		    tolerance = this.options.smoothFactor;

  		for (var i = 0, len = parts.length; i < len; i++) {
  			parts[i] = simplify(parts[i], tolerance);
  		}
  	},

  	_update: function () {
  		if (!this._map) { return; }

  		this._clipPoints();
  		this._simplifyPoints();
  		this._updatePath();
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p, closed) {
  		var i, j, k, len, len2, part,
  		    w = this._clickTolerance();

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// hit detection for polylines
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				if (!closed && (j === 0)) { continue; }

  				if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
  					return true;
  				}
  			}
  		}
  		return false;
  	}
  });

  // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a `Polyline` object with
  // multiple separate lines (`MultiPolyline`) by passing an array of arrays
  // of geographic points.
  function polyline(latlngs, options) {
  	return new Polyline(latlngs, options);
  }

  // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
  Polyline._flat = _flat;

  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */

  var Polygon = Polyline.extend({

  	options: {
  		fill: true
  	},

  	isEmpty: function () {
  		return !this._latlngs.length || !this._latlngs[0].length;
  	},

  	getCenter: function () {
  		// throws error when not yet added to map as this center calculation requires projected coordinates
  		if (!this._map) {
  			throw new Error('Must add layer to map before using getCenter()');
  		}

  		var i, j, p1, p2, f, area, x, y, center,
  		    points = this._rings[0],
  		    len = points.length;

  		if (!len) { return null; }

  		// polygon centroid algorithm; only uses the first ring if there are multiple

  		area = x = y = 0;

  		for (i = 0, j = len - 1; i < len; j = i++) {
  			p1 = points[i];
  			p2 = points[j];

  			f = p1.y * p2.x - p2.y * p1.x;
  			x += (p1.x + p2.x) * f;
  			y += (p1.y + p2.y) * f;
  			area += f * 3;
  		}

  		if (area === 0) {
  			// Polygon is so small that all points are on same pixel.
  			center = points[0];
  		} else {
  			center = [x / area, y / area];
  		}
  		return this._map.layerPointToLatLng(center);
  	},

  	_convertLatLngs: function (latlngs) {
  		var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
  		    len = result.length;

  		// remove last point if it equals first one
  		if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
  			result.pop();
  		}
  		return result;
  	},

  	_setLatLngs: function (latlngs) {
  		Polyline.prototype._setLatLngs.call(this, latlngs);
  		if (isFlat(this._latlngs)) {
  			this._latlngs = [this._latlngs];
  		}
  	},

  	_defaultShape: function () {
  		return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
  	},

  	_clipPoints: function () {
  		// polygons need a different clipping algorithm so we redefine that

  		var bounds = this._renderer._bounds,
  		    w = this.options.weight,
  		    p = new Point(w, w);

  		// increase clip padding by stroke width to avoid stroke on clip edges
  		bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));

  		this._parts = [];
  		if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
  			return;
  		}

  		if (this.options.noClip) {
  			this._parts = this._rings;
  			return;
  		}

  		for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
  			clipped = clipPolygon(this._rings[i], bounds, true);
  			if (clipped.length) {
  				this._parts.push(clipped);
  			}
  		}
  	},

  	_updatePath: function () {
  		this._renderer._updatePoly(this, true);
  	},

  	// Needed by the `Canvas` renderer for interactivity
  	_containsPoint: function (p) {
  		var inside = false,
  		    part, p1, p2, i, j, k, len, len2;

  		if (!this._pxBounds || !this._pxBounds.contains(p)) { return false; }

  		// ray casting algorithm for detecting if point is in polygon
  		for (i = 0, len = this._parts.length; i < len; i++) {
  			part = this._parts[i];

  			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
  				p1 = part[j];
  				p2 = part[k];

  				if (((p1.y > p.y) !== (p2.y > p.y)) && (p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
  					inside = !inside;
  				}
  			}
  		}

  		// also check if it's on polygon stroke
  		return inside || Polyline.prototype._containsPoint.call(this, p, true);
  	}

  });


  // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
  function polygon(latlngs, options) {
  	return new Polygon(latlngs, options);
  }

  /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */

  var GeoJSON = FeatureGroup.extend({

  	/* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */

  	initialize: function (geojson, options) {
  		setOptions(this, options);

  		this._layers = {};

  		if (geojson) {
  			this.addData(geojson);
  		}
  	},

  	// @method addData( <GeoJSON> data ): this
  	// Adds a GeoJSON object to the layer.
  	addData: function (geojson) {
  		var features = isArray(geojson) ? geojson : geojson.features,
  		    i, len, feature;

  		if (features) {
  			for (i = 0, len = features.length; i < len; i++) {
  				// only add this if geometry or geometries are set and not null
  				feature = features[i];
  				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
  					this.addData(feature);
  				}
  			}
  			return this;
  		}

  		var options = this.options;

  		if (options.filter && !options.filter(geojson)) { return this; }

  		var layer = geometryToLayer(geojson, options);
  		if (!layer) {
  			return this;
  		}
  		layer.feature = asFeature(geojson);

  		layer.defaultOptions = layer.options;
  		this.resetStyle(layer);

  		if (options.onEachFeature) {
  			options.onEachFeature(geojson, layer);
  		}

  		return this.addLayer(layer);
  	},

  	// @method resetStyle( <Path> layer? ): this
  	// Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
  	// If `layer` is omitted, the style of all features in the current layer is reset.
  	resetStyle: function (layer) {
  		if (layer === undefined) {
  			return this.eachLayer(this.resetStyle, this);
  		}
  		// reset any custom styles
  		layer.options = extend({}, layer.defaultOptions);
  		this._setLayerStyle(layer, this.options.style);
  		return this;
  	},

  	// @method setStyle( <Function> style ): this
  	// Changes styles of GeoJSON vector layers with the given style function.
  	setStyle: function (style) {
  		return this.eachLayer(function (layer) {
  			this._setLayerStyle(layer, style);
  		}, this);
  	},

  	_setLayerStyle: function (layer, style) {
  		if (layer.setStyle) {
  			if (typeof style === 'function') {
  				style = style(layer.feature);
  			}
  			layer.setStyle(style);
  		}
  	}
  });

  // @section
  // There are several static functions which can be called without instantiating L.GeoJSON:

  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
  // Creates a `Layer` from a given GeoJSON feature. Can use a custom
  // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
  // functions if provided as options.
  function geometryToLayer(geojson, options) {

  	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
  	    coords = geometry ? geometry.coordinates : null,
  	    layers = [],
  	    pointToLayer = options && options.pointToLayer,
  	    _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
  	    latlng, latlngs, i, len;

  	if (!coords && !geometry) {
  		return null;
  	}

  	switch (geometry.type) {
  	case 'Point':
  		latlng = _coordsToLatLng(coords);
  		return _pointToLayer(pointToLayer, geojson, latlng, options);

  	case 'MultiPoint':
  		for (i = 0, len = coords.length; i < len; i++) {
  			latlng = _coordsToLatLng(coords[i]);
  			layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
  		}
  		return new FeatureGroup(layers);

  	case 'LineString':
  	case 'MultiLineString':
  		latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
  		return new Polyline(latlngs, options);

  	case 'Polygon':
  	case 'MultiPolygon':
  		latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
  		return new Polygon(latlngs, options);

  	case 'GeometryCollection':
  		for (i = 0, len = geometry.geometries.length; i < len; i++) {
  			var layer = geometryToLayer({
  				geometry: geometry.geometries[i],
  				type: 'Feature',
  				properties: geojson.properties
  			}, options);

  			if (layer) {
  				layers.push(layer);
  			}
  		}
  		return new FeatureGroup(layers);

  	default:
  		throw new Error('Invalid GeoJSON object.');
  	}
  }

  function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
  	return pointToLayerFn ?
  		pointToLayerFn(geojson, latlng) :
  		new Marker(latlng, options && options.markersInheritOptions && options);
  }

  // @function coordsToLatLng(coords: Array): LatLng
  // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
  function coordsToLatLng(coords) {
  	return new LatLng(coords[1], coords[0], coords[2]);
  }

  // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
  // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
  // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
  // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
  	var latlngs = [];

  	for (var i = 0, len = coords.length, latlng; i < len; i++) {
  		latlng = levelsDeep ?
  			coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) :
  			(_coordsToLatLng || coordsToLatLng)(coords[i]);

  		latlngs.push(latlng);
  	}

  	return latlngs;
  }

  // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
  // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
  function latLngToCoords(latlng, precision) {
  	precision = typeof precision === 'number' ? precision : 6;
  	return latlng.alt !== undefined ?
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] :
  		[formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
  }

  // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
  // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
  // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
  	var coords = [];

  	for (var i = 0, len = latlngs.length; i < len; i++) {
  		coords.push(levelsDeep ?
  			latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) :
  			latLngToCoords(latlngs[i], precision));
  	}

  	if (!levelsDeep && closed) {
  		coords.push(coords[0]);
  	}

  	return coords;
  }

  function getFeature(layer, newGeometry) {
  	return layer.feature ?
  		extend({}, layer.feature, {geometry: newGeometry}) :
  		asFeature(newGeometry);
  }

  // @function asFeature(geojson: Object): Object
  // Normalize GeoJSON geometries/features into GeoJSON features.
  function asFeature(geojson) {
  	if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
  		return geojson;
  	}

  	return {
  		type: 'Feature',
  		properties: {},
  		geometry: geojson
  	};
  }

  var PointToGeoJSON = {
  	toGeoJSON: function (precision) {
  		return getFeature(this, {
  			type: 'Point',
  			coordinates: latLngToCoords(this.getLatLng(), precision)
  		});
  	}
  };

  // @namespace Marker
  // @section Other methods
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
  Marker.include(PointToGeoJSON);

  // @namespace CircleMarker
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
  Circle.include(PointToGeoJSON);
  CircleMarker.include(PointToGeoJSON);


  // @namespace Polyline
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
  Polyline.include({
  	toGeoJSON: function (precision) {
  		var multi = !isFlat(this._latlngs);

  		var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);

  		return getFeature(this, {
  			type: (multi ? 'Multi' : '') + 'LineString',
  			coordinates: coords
  		});
  	}
  });

  // @namespace Polygon
  // @method toGeoJSON(precision?: Number): Object
  // `precision` is the number of decimal places for coordinates.
  // The default value is 6 places.
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
  Polygon.include({
  	toGeoJSON: function (precision) {
  		var holes = !isFlat(this._latlngs),
  		    multi = holes && !isFlat(this._latlngs[0]);

  		var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

  		if (!holes) {
  			coords = [coords];
  		}

  		return getFeature(this, {
  			type: (multi ? 'Multi' : '') + 'Polygon',
  			coordinates: coords
  		});
  	}
  });


  // @namespace LayerGroup
  LayerGroup.include({
  	toMultiPoint: function (precision) {
  		var coords = [];

  		this.eachLayer(function (layer) {
  			coords.push(layer.toGeoJSON(precision).geometry.coordinates);
  		});

  		return getFeature(this, {
  			type: 'MultiPoint',
  			coordinates: coords
  		});
  	},

  	// @method toGeoJSON(precision?: Number): Object
  	// `precision` is the number of decimal places for coordinates.
  	// The default value is 6 places.
  	// Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
  	toGeoJSON: function (precision) {

  		var type = this.feature && this.feature.geometry && this.feature.geometry.type;

  		if (type === 'MultiPoint') {
  			return this.toMultiPoint(precision);
  		}

  		var isGeometryCollection = type === 'GeometryCollection',
  		    jsons = [];

  		this.eachLayer(function (layer) {
  			if (layer.toGeoJSON) {
  				var json = layer.toGeoJSON(precision);
  				if (isGeometryCollection) {
  					jsons.push(json.geometry);
  				} else {
  					var feature = asFeature(json);
  					// Squash nested feature collections
  					if (feature.type === 'FeatureCollection') {
  						jsons.push.apply(jsons, feature.features);
  					} else {
  						jsons.push(feature);
  					}
  				}
  			}
  		});

  		if (isGeometryCollection) {
  			return getFeature(this, {
  				geometries: jsons,
  				type: 'GeometryCollection'
  			});
  		}

  		return {
  			type: 'FeatureCollection',
  			features: jsons
  		};
  	}
  });

  // @namespace GeoJSON
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
  // Creates a GeoJSON layer. Optionally accepts an object in
  // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
  // (you can alternatively add it later with `addData` method) and an `options` object.
  function geoJSON(geojson, options) {
  	return new GeoJSON(geojson, options);
  }

  // Backward compatibility.
  var geoJson = geoJSON;

  /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */

  var ImageOverlay = Layer.extend({

  	// @section
  	// @aka ImageOverlay options
  	options: {
  		// @option opacity: Number = 1.0
  		// The opacity of the image overlay.
  		opacity: 1,

  		// @option alt: String = ''
  		// Text for the `alt` attribute of the image (useful for accessibility).
  		alt: '',

  		// @option interactive: Boolean = false
  		// If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
  		interactive: false,

  		// @option crossOrigin: Boolean|String = false
  		// Whether the crossOrigin attribute will be added to the image.
  		// If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
  		crossOrigin: false,

  		// @option errorOverlayUrl: String = ''
  		// URL to the overlay image to show in place of the overlay that failed to load.
  		errorOverlayUrl: '',

  		// @option zIndex: Number = 1
  		// The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
  		zIndex: 1,

  		// @option className: String = ''
  		// A custom class name to assign to the image. Empty by default.
  		className: ''
  	},

  	initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
  		this._url = url;
  		this._bounds = toLatLngBounds(bounds);

  		setOptions(this, options);
  	},

  	onAdd: function () {
  		if (!this._image) {
  			this._initImage();

  			if (this.options.opacity < 1) {
  				this._updateOpacity();
  			}
  		}

  		if (this.options.interactive) {
  			addClass(this._image, 'leaflet-interactive');
  			this.addInteractiveTarget(this._image);
  		}

  		this.getPane().appendChild(this._image);
  		this._reset();
  	},

  	onRemove: function () {
  		remove(this._image);
  		if (this.options.interactive) {
  			this.removeInteractiveTarget(this._image);
  		}
  	},

  	// @method setOpacity(opacity: Number): this
  	// Sets the opacity of the overlay.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;

  		if (this._image) {
  			this._updateOpacity();
  		}
  		return this;
  	},

  	setStyle: function (styleOpts) {
  		if (styleOpts.opacity) {
  			this.setOpacity(styleOpts.opacity);
  		}
  		return this;
  	},

  	// @method bringToFront(): this
  	// Brings the layer to the top of all overlays.
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._image);
  		}
  		return this;
  	},

  	// @method bringToBack(): this
  	// Brings the layer to the bottom of all overlays.
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._image);
  		}
  		return this;
  	},

  	// @method setUrl(url: String): this
  	// Changes the URL of the image.
  	setUrl: function (url) {
  		this._url = url;

  		if (this._image) {
  			this._image.src = url;
  		}
  		return this;
  	},

  	// @method setBounds(bounds: LatLngBounds): this
  	// Update the bounds that this ImageOverlay covers
  	setBounds: function (bounds) {
  		this._bounds = toLatLngBounds(bounds);

  		if (this._map) {
  			this._reset();
  		}
  		return this;
  	},

  	getEvents: function () {
  		var events = {
  			zoom: this._reset,
  			viewreset: this._reset
  		};

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}

  		return events;
  	},

  	// @method setZIndex(value: Number): this
  	// Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
  	setZIndex: function (value) {
  		this.options.zIndex = value;
  		this._updateZIndex();
  		return this;
  	},

  	// @method getBounds(): LatLngBounds
  	// Get the bounds that this ImageOverlay covers
  	getBounds: function () {
  		return this._bounds;
  	},

  	// @method getElement(): HTMLElement
  	// Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
  	// used by this overlay.
  	getElement: function () {
  		return this._image;
  	},

  	_initImage: function () {
  		var wasElementSupplied = this._url.tagName === 'IMG';
  		var img = this._image = wasElementSupplied ? this._url : create$1('img');

  		addClass(img, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(img, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(img, this.options.className); }

  		img.onselectstart = falseFn;
  		img.onmousemove = falseFn;

  		// @event load: Event
  		// Fired when the ImageOverlay layer has loaded its image
  		img.onload = bind(this.fire, this, 'load');
  		img.onerror = bind(this._overlayOnError, this, 'error');

  		if (this.options.crossOrigin || this.options.crossOrigin === '') {
  			img.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
  		}

  		if (this.options.zIndex) {
  			this._updateZIndex();
  		}

  		if (wasElementSupplied) {
  			this._url = img.src;
  			return;
  		}

  		img.src = this._url;
  		img.alt = this.options.alt;
  	},

  	_animateZoom: function (e) {
  		var scale = this._map.getZoomScale(e.zoom),
  		    offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

  		setTransform(this._image, offset, scale);
  	},

  	_reset: function () {
  		var image = this._image,
  		    bounds = new Bounds(
  		        this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
  		        this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
  		    size = bounds.getSize();

  		setPosition(image, bounds.min);

  		image.style.width  = size.x + 'px';
  		image.style.height = size.y + 'px';
  	},

  	_updateOpacity: function () {
  		setOpacity(this._image, this.options.opacity);
  	},

  	_updateZIndex: function () {
  		if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
  			this._image.style.zIndex = this.options.zIndex;
  		}
  	},

  	_overlayOnError: function () {
  		// @event error: Event
  		// Fired when the ImageOverlay layer fails to load its image
  		this.fire('error');

  		var errorUrl = this.options.errorOverlayUrl;
  		if (errorUrl && this._url !== errorUrl) {
  			this._url = errorUrl;
  			this._image.src = errorUrl;
  		}
  	}
  });

  // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
  // Instantiates an image overlay object given the URL of the image and the
  // geographical bounds it is tied to.
  var imageOverlay = function (url, bounds, options) {
  	return new ImageOverlay(url, bounds, options);
  };

  /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */

  var VideoOverlay = ImageOverlay.extend({

  	// @section
  	// @aka VideoOverlay options
  	options: {
  		// @option autoplay: Boolean = true
  		// Whether the video starts playing automatically when loaded.
  		autoplay: true,

  		// @option loop: Boolean = true
  		// Whether the video will loop back to the beginning when played.
  		loop: true,

  		// @option keepAspectRatio: Boolean = true
  		// Whether the video will save aspect ratio after the projection.
  		// Relevant for supported browsers. Browser compatibility- https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
  		keepAspectRatio: true,

  		// @option muted: Boolean = false
  		// Whether the video starts on mute when loaded.
  		muted: false
  	},

  	_initImage: function () {
  		var wasElementSupplied = this._url.tagName === 'VIDEO';
  		var vid = this._image = wasElementSupplied ? this._url : create$1('video');

  		addClass(vid, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(vid, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(vid, this.options.className); }

  		vid.onselectstart = falseFn;
  		vid.onmousemove = falseFn;

  		// @event load: Event
  		// Fired when the video has finished loading the first frame
  		vid.onloadeddata = bind(this.fire, this, 'load');

  		if (wasElementSupplied) {
  			var sourceElements = vid.getElementsByTagName('source');
  			var sources = [];
  			for (var j = 0; j < sourceElements.length; j++) {
  				sources.push(sourceElements[j].src);
  			}

  			this._url = (sourceElements.length > 0) ? sources : [vid.src];
  			return;
  		}

  		if (!isArray(this._url)) { this._url = [this._url]; }

  		if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, 'objectFit')) {
  			vid.style['objectFit'] = 'fill';
  		}
  		vid.autoplay = !!this.options.autoplay;
  		vid.loop = !!this.options.loop;
  		vid.muted = !!this.options.muted;
  		for (var i = 0; i < this._url.length; i++) {
  			var source = create$1('source');
  			source.src = this._url[i];
  			vid.appendChild(source);
  		}
  	}

  	// @method getElement(): HTMLVideoElement
  	// Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
  	// used by this overlay.
  });


  // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
  // geographical bounds it is tied to.

  function videoOverlay(video, bounds, options) {
  	return new VideoOverlay(video, bounds, options);
  }

  /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */

  var SVGOverlay = ImageOverlay.extend({
  	_initImage: function () {
  		var el = this._image = this._url;

  		addClass(el, 'leaflet-image-layer');
  		if (this._zoomAnimated) { addClass(el, 'leaflet-zoom-animated'); }
  		if (this.options.className) { addClass(el, this.options.className); }

  		el.onselectstart = falseFn;
  		el.onmousemove = falseFn;
  	}

  	// @method getElement(): SVGElement
  	// Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
  	// used by this overlay.
  });


  // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
  // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
  // A viewBox attribute is required on the SVG element to zoom in and out properly.

  function svgOverlay(el, bounds, options) {
  	return new SVGOverlay(el, bounds, options);
  }

  /*
   * @class DivOverlay
   * @inherits Layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
   */

  // @namespace DivOverlay
  var DivOverlay = Layer.extend({

  	// @section
  	// @aka DivOverlay options
  	options: {
  		// @option offset: Point = Point(0, 7)
  		// The offset of the popup position. Useful to control the anchor
  		// of the popup when opening it on some overlays.
  		offset: [0, 7],

  		// @option className: String = ''
  		// A custom CSS class name to assign to the popup.
  		className: '',

  		// @option pane: String = 'popupPane'
  		// `Map pane` where the popup will be added.
  		pane: 'popupPane'
  	},

  	initialize: function (options, source) {
  		setOptions(this, options);

  		this._source = source;
  	},

  	onAdd: function (map) {
  		this._zoomAnimated = map._zoomAnimated;

  		if (!this._container) {
  			this._initLayout();
  		}

  		if (map._fadeAnimated) {
  			setOpacity(this._container, 0);
  		}

  		clearTimeout(this._removeTimeout);
  		this.getPane().appendChild(this._container);
  		this.update();

  		if (map._fadeAnimated) {
  			setOpacity(this._container, 1);
  		}

  		this.bringToFront();
  	},

  	onRemove: function (map) {
  		if (map._fadeAnimated) {
  			setOpacity(this._container, 0);
  			this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
  		} else {
  			remove(this._container);
  		}
  	},

  	// @namespace Popup
  	// @method getLatLng: LatLng
  	// Returns the geographical point of popup.
  	getLatLng: function () {
  		return this._latlng;
  	},

  	// @method setLatLng(latlng: LatLng): this
  	// Sets the geographical point where the popup will open.
  	setLatLng: function (latlng) {
  		this._latlng = toLatLng(latlng);
  		if (this._map) {
  			this._updatePosition();
  			this._adjustPan();
  		}
  		return this;
  	},

  	// @method getContent: String|HTMLElement
  	// Returns the content of the popup.
  	getContent: function () {
  		return this._content;
  	},

  	// @method setContent(htmlContent: String|HTMLElement|Function): this
  	// Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
  	setContent: function (content) {
  		this._content = content;
  		this.update();
  		return this;
  	},

  	// @method getElement: String|HTMLElement
  	// Returns the HTML container of the popup.
  	getElement: function () {
  		return this._container;
  	},

  	// @method update: null
  	// Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
  	update: function () {
  		if (!this._map) { return; }

  		this._container.style.visibility = 'hidden';

  		this._updateContent();
  		this._updateLayout();
  		this._updatePosition();

  		this._container.style.visibility = '';

  		this._adjustPan();
  	},

  	getEvents: function () {
  		var events = {
  			zoom: this._updatePosition,
  			viewreset: this._updatePosition
  		};

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}
  		return events;
  	},

  	// @method isOpen: Boolean
  	// Returns `true` when the popup is visible on the map.
  	isOpen: function () {
  		return !!this._map && this._map.hasLayer(this);
  	},

  	// @method bringToFront: this
  	// Brings this popup in front of other popups (in the same map pane).
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._container);
  		}
  		return this;
  	},

  	// @method bringToBack: this
  	// Brings this popup to the back of other popups (in the same map pane).
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._container);
  		}
  		return this;
  	},

  	_prepareOpen: function (parent, layer, latlng) {
  		if (!(layer instanceof Layer)) {
  			latlng = layer;
  			layer = parent;
  		}

  		if (layer instanceof FeatureGroup) {
  			for (var id in parent._layers) {
  				layer = parent._layers[id];
  				break;
  			}
  		}

  		if (!latlng) {
  			if (layer.getCenter) {
  				latlng = layer.getCenter();
  			} else if (layer.getLatLng) {
  				latlng = layer.getLatLng();
  			} else {
  				throw new Error('Unable to get source layer LatLng.');
  			}
  		}

  		// set overlay source to this layer
  		this._source = layer;

  		// update the overlay (content, layout, ect...)
  		this.update();

  		return latlng;
  	},

  	_updateContent: function () {
  		if (!this._content) { return; }

  		var node = this._contentNode;
  		var content = (typeof this._content === 'function') ? this._content(this._source || this) : this._content;

  		if (typeof content === 'string') {
  			node.innerHTML = content;
  		} else {
  			while (node.hasChildNodes()) {
  				node.removeChild(node.firstChild);
  			}
  			node.appendChild(content);
  		}
  		this.fire('contentupdate');
  	},

  	_updatePosition: function () {
  		if (!this._map) { return; }

  		var pos = this._map.latLngToLayerPoint(this._latlng),
  		    offset = toPoint(this.options.offset),
  		    anchor = this._getAnchor();

  		if (this._zoomAnimated) {
  			setPosition(this._container, pos.add(anchor));
  		} else {
  			offset = offset.add(pos).add(anchor);
  		}

  		var bottom = this._containerBottom = -offset.y,
  		    left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;

  		// bottom position the popup in case the height of the popup changes (images loading etc)
  		this._container.style.bottom = bottom + 'px';
  		this._container.style.left = left + 'px';
  	},

  	_getAnchor: function () {
  		return [0, 0];
  	}

  });

  /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   * Here's a more complicated way to open a popup on a map:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */


  // @namespace Popup
  var Popup = DivOverlay.extend({

  	// @section
  	// @aka Popup options
  	options: {
  		// @option maxWidth: Number = 300
  		// Max width of the popup, in pixels.
  		maxWidth: 300,

  		// @option minWidth: Number = 50
  		// Min width of the popup, in pixels.
  		minWidth: 50,

  		// @option maxHeight: Number = null
  		// If set, creates a scrollable container of the given height
  		// inside a popup if its content exceeds it.
  		maxHeight: null,

  		// @option autoPan: Boolean = true
  		// Set it to `false` if you don't want the map to do panning animation
  		// to fit the opened popup.
  		autoPan: true,

  		// @option autoPanPaddingTopLeft: Point = null
  		// The margin between the popup and the top left corner of the map
  		// view after autopanning was performed.
  		autoPanPaddingTopLeft: null,

  		// @option autoPanPaddingBottomRight: Point = null
  		// The margin between the popup and the bottom right corner of the map
  		// view after autopanning was performed.
  		autoPanPaddingBottomRight: null,

  		// @option autoPanPadding: Point = Point(5, 5)
  		// Equivalent of setting both top left and bottom right autopan padding to the same value.
  		autoPanPadding: [5, 5],

  		// @option keepInView: Boolean = false
  		// Set it to `true` if you want to prevent users from panning the popup
  		// off of the screen while it is open.
  		keepInView: false,

  		// @option closeButton: Boolean = true
  		// Controls the presence of a close button in the popup.
  		closeButton: true,

  		// @option autoClose: Boolean = true
  		// Set it to `false` if you want to override the default behavior of
  		// the popup closing when another popup is opened.
  		autoClose: true,

  		// @option closeOnEscapeKey: Boolean = true
  		// Set it to `false` if you want to override the default behavior of
  		// the ESC key for closing of the popup.
  		closeOnEscapeKey: true,

  		// @option closeOnClick: Boolean = *
  		// Set it if you want to override the default behavior of the popup closing when user clicks
  		// on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.

  		// @option className: String = ''
  		// A custom CSS class name to assign to the popup.
  		className: ''
  	},

  	// @namespace Popup
  	// @method openOn(map: Map): this
  	// Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
  	openOn: function (map) {
  		map.openPopup(this);
  		return this;
  	},

  	onAdd: function (map) {
  		DivOverlay.prototype.onAdd.call(this, map);

  		// @namespace Map
  		// @section Popup events
  		// @event popupopen: PopupEvent
  		// Fired when a popup is opened in the map
  		map.fire('popupopen', {popup: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Popup events
  			// @event popupopen: PopupEvent
  			// Fired when a popup bound to this layer is opened
  			this._source.fire('popupopen', {popup: this}, true);
  			// For non-path layers, we toggle the popup when clicking
  			// again the layer, so prevent the map to reopen it.
  			if (!(this._source instanceof Path)) {
  				this._source.on('preclick', stopPropagation);
  			}
  		}
  	},

  	onRemove: function (map) {
  		DivOverlay.prototype.onRemove.call(this, map);

  		// @namespace Map
  		// @section Popup events
  		// @event popupclose: PopupEvent
  		// Fired when a popup in the map is closed
  		map.fire('popupclose', {popup: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Popup events
  			// @event popupclose: PopupEvent
  			// Fired when a popup bound to this layer is closed
  			this._source.fire('popupclose', {popup: this}, true);
  			if (!(this._source instanceof Path)) {
  				this._source.off('preclick', stopPropagation);
  			}
  		}
  	},

  	getEvents: function () {
  		var events = DivOverlay.prototype.getEvents.call(this);

  		if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
  			events.preclick = this._close;
  		}

  		if (this.options.keepInView) {
  			events.moveend = this._adjustPan;
  		}

  		return events;
  	},

  	_close: function () {
  		if (this._map) {
  			this._map.closePopup(this);
  		}
  	},

  	_initLayout: function () {
  		var prefix = 'leaflet-popup',
  		    container = this._container = create$1('div',
  			prefix + ' ' + (this.options.className || '') +
  			' leaflet-zoom-animated');

  		var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
  		this._contentNode = create$1('div', prefix + '-content', wrapper);

  		disableClickPropagation(container);
  		disableScrollPropagation(this._contentNode);
  		on(container, 'contextmenu', stopPropagation);

  		this._tipContainer = create$1('div', prefix + '-tip-container', container);
  		this._tip = create$1('div', prefix + '-tip', this._tipContainer);

  		if (this.options.closeButton) {
  			var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
  			closeButton.href = '#close';
  			closeButton.innerHTML = '&#215;';

  			on(closeButton, 'click', this._onCloseButtonClick, this);
  		}
  	},

  	_updateLayout: function () {
  		var container = this._contentNode,
  		    style = container.style;

  		style.width = '';
  		style.whiteSpace = 'nowrap';

  		var width = container.offsetWidth;
  		width = Math.min(width, this.options.maxWidth);
  		width = Math.max(width, this.options.minWidth);

  		style.width = (width + 1) + 'px';
  		style.whiteSpace = '';

  		style.height = '';

  		var height = container.offsetHeight,
  		    maxHeight = this.options.maxHeight,
  		    scrolledClass = 'leaflet-popup-scrolled';

  		if (maxHeight && height > maxHeight) {
  			style.height = maxHeight + 'px';
  			addClass(container, scrolledClass);
  		} else {
  			removeClass(container, scrolledClass);
  		}

  		this._containerWidth = this._container.offsetWidth;
  	},

  	_animateZoom: function (e) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
  		    anchor = this._getAnchor();
  		setPosition(this._container, pos.add(anchor));
  	},

  	_adjustPan: function () {
  		if (!this.options.autoPan) { return; }
  		if (this._map._panAnim) { this._map._panAnim.stop(); }

  		var map = this._map,
  		    marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
  		    containerHeight = this._container.offsetHeight + marginBottom,
  		    containerWidth = this._containerWidth,
  		    layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

  		layerPos._add(getPosition(this._container));

  		var containerPos = map.layerPointToContainerPoint(layerPos),
  		    padding = toPoint(this.options.autoPanPadding),
  		    paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
  		    paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
  		    size = map.getSize(),
  		    dx = 0,
  		    dy = 0;

  		if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
  			dx = containerPos.x + containerWidth - size.x + paddingBR.x;
  		}
  		if (containerPos.x - dx - paddingTL.x < 0) { // left
  			dx = containerPos.x - paddingTL.x;
  		}
  		if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
  			dy = containerPos.y + containerHeight - size.y + paddingBR.y;
  		}
  		if (containerPos.y - dy - paddingTL.y < 0) { // top
  			dy = containerPos.y - paddingTL.y;
  		}

  		// @namespace Map
  		// @section Popup events
  		// @event autopanstart: Event
  		// Fired when the map starts autopanning when opening a popup.
  		if (dx || dy) {
  			map
  			    .fire('autopanstart')
  			    .panBy([dx, dy]);
  		}
  	},

  	_onCloseButtonClick: function (e) {
  		this._close();
  		stop(e);
  	},

  	_getAnchor: function () {
  		// Where should we anchor the popup on the source layer?
  		return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
  	}

  });

  // @namespace Popup
  // @factory L.popup(options?: Popup options, source?: Layer)
  // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
  var popup = function (options, source) {
  	return new Popup(options, source);
  };


  /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */
  Map.mergeOptions({
  	closePopupOnClick: true
  });


  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({
  	// @method openPopup(popup: Popup): this
  	// Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
  	// @alternative
  	// @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
  	// Creates a popup with the specified content and options and opens it in the given point on a map.
  	openPopup: function (popup, latlng, options) {
  		if (!(popup instanceof Popup)) {
  			popup = new Popup(options).setContent(popup);
  		}

  		if (latlng) {
  			popup.setLatLng(latlng);
  		}

  		if (this.hasLayer(popup)) {
  			return this;
  		}

  		if (this._popup && this._popup.options.autoClose) {
  			this.closePopup();
  		}

  		this._popup = popup;
  		return this.addLayer(popup);
  	},

  	// @method closePopup(popup?: Popup): this
  	// Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
  	closePopup: function (popup) {
  		if (!popup || popup === this._popup) {
  			popup = this._popup;
  			this._popup = null;
  		}
  		if (popup) {
  			this.removeLayer(popup);
  		}
  		return this;
  	}
  });

  /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */

  // @section Popup methods
  Layer.include({

  	// @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
  	// Binds a popup to the layer with the passed `content` and sets up the
  	// necessary event listeners. If a `Function` is passed it will receive
  	// the layer as the first argument and should return a `String` or `HTMLElement`.
  	bindPopup: function (content, options) {

  		if (content instanceof Popup) {
  			setOptions(content, options);
  			this._popup = content;
  			content._source = this;
  		} else {
  			if (!this._popup || options) {
  				this._popup = new Popup(options, this);
  			}
  			this._popup.setContent(content);
  		}

  		if (!this._popupHandlersAdded) {
  			this.on({
  				click: this._openPopup,
  				keypress: this._onKeyPress,
  				remove: this.closePopup,
  				move: this._movePopup
  			});
  			this._popupHandlersAdded = true;
  		}

  		return this;
  	},

  	// @method unbindPopup(): this
  	// Removes the popup previously bound with `bindPopup`.
  	unbindPopup: function () {
  		if (this._popup) {
  			this.off({
  				click: this._openPopup,
  				keypress: this._onKeyPress,
  				remove: this.closePopup,
  				move: this._movePopup
  			});
  			this._popupHandlersAdded = false;
  			this._popup = null;
  		}
  		return this;
  	},

  	// @method openPopup(latlng?: LatLng): this
  	// Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
  	openPopup: function (layer, latlng) {
  		if (this._popup && this._map) {
  			latlng = this._popup._prepareOpen(this, layer, latlng);

  			// open the popup on the map
  			this._map.openPopup(this._popup, latlng);
  		}

  		return this;
  	},

  	// @method closePopup(): this
  	// Closes the popup bound to this layer if it is open.
  	closePopup: function () {
  		if (this._popup) {
  			this._popup._close();
  		}
  		return this;
  	},

  	// @method togglePopup(): this
  	// Opens or closes the popup bound to this layer depending on its current state.
  	togglePopup: function (target) {
  		if (this._popup) {
  			if (this._popup._map) {
  				this.closePopup();
  			} else {
  				this.openPopup(target);
  			}
  		}
  		return this;
  	},

  	// @method isPopupOpen(): boolean
  	// Returns `true` if the popup bound to this layer is currently open.
  	isPopupOpen: function () {
  		return (this._popup ? this._popup.isOpen() : false);
  	},

  	// @method setPopupContent(content: String|HTMLElement|Popup): this
  	// Sets the content of the popup bound to this layer.
  	setPopupContent: function (content) {
  		if (this._popup) {
  			this._popup.setContent(content);
  		}
  		return this;
  	},

  	// @method getPopup(): Popup
  	// Returns the popup bound to this layer.
  	getPopup: function () {
  		return this._popup;
  	},

  	_openPopup: function (e) {
  		var layer = e.layer || e.target;

  		if (!this._popup) {
  			return;
  		}

  		if (!this._map) {
  			return;
  		}

  		// prevent map click
  		stop(e);

  		// if this inherits from Path its a vector and we can just
  		// open the popup at the new location
  		if (layer instanceof Path) {
  			this.openPopup(e.layer || e.target, e.latlng);
  			return;
  		}

  		// otherwise treat it like a marker and figure out
  		// if we should toggle it open/closed
  		if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
  			this.closePopup();
  		} else {
  			this.openPopup(layer, e.latlng);
  		}
  	},

  	_movePopup: function (e) {
  		this._popup.setLatLng(e.latlng);
  	},

  	_onKeyPress: function (e) {
  		if (e.originalEvent.keyCode === 13) {
  			this._openPopup(e);
  		}
  	}
  });

  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */


  // @namespace Tooltip
  var Tooltip = DivOverlay.extend({

  	// @section
  	// @aka Tooltip options
  	options: {
  		// @option pane: String = 'tooltipPane'
  		// `Map pane` where the tooltip will be added.
  		pane: 'tooltipPane',

  		// @option offset: Point = Point(0, 0)
  		// Optional offset of the tooltip position.
  		offset: [0, 0],

  		// @option direction: String = 'auto'
  		// Direction where to open the tooltip. Possible values are: `right`, `left`,
  		// `top`, `bottom`, `center`, `auto`.
  		// `auto` will dynamically switch between `right` and `left` according to the tooltip
  		// position on the map.
  		direction: 'auto',

  		// @option permanent: Boolean = false
  		// Whether to open the tooltip permanently or only on mouseover.
  		permanent: false,

  		// @option sticky: Boolean = false
  		// If true, the tooltip will follow the mouse instead of being fixed at the feature center.
  		sticky: false,

  		// @option interactive: Boolean = false
  		// If true, the tooltip will listen to the feature events.
  		interactive: false,

  		// @option opacity: Number = 0.9
  		// Tooltip container opacity.
  		opacity: 0.9
  	},

  	onAdd: function (map) {
  		DivOverlay.prototype.onAdd.call(this, map);
  		this.setOpacity(this.options.opacity);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipopen: TooltipEvent
  		// Fired when a tooltip is opened in the map.
  		map.fire('tooltipopen', {tooltip: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipopen: TooltipEvent
  			// Fired when a tooltip bound to this layer is opened.
  			this._source.fire('tooltipopen', {tooltip: this}, true);
  		}
  	},

  	onRemove: function (map) {
  		DivOverlay.prototype.onRemove.call(this, map);

  		// @namespace Map
  		// @section Tooltip events
  		// @event tooltipclose: TooltipEvent
  		// Fired when a tooltip in the map is closed.
  		map.fire('tooltipclose', {tooltip: this});

  		if (this._source) {
  			// @namespace Layer
  			// @section Tooltip events
  			// @event tooltipclose: TooltipEvent
  			// Fired when a tooltip bound to this layer is closed.
  			this._source.fire('tooltipclose', {tooltip: this}, true);
  		}
  	},

  	getEvents: function () {
  		var events = DivOverlay.prototype.getEvents.call(this);

  		if (touch && !this.options.permanent) {
  			events.preclick = this._close;
  		}

  		return events;
  	},

  	_close: function () {
  		if (this._map) {
  			this._map.closeTooltip(this);
  		}
  	},

  	_initLayout: function () {
  		var prefix = 'leaflet-tooltip',
  		    className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');

  		this._contentNode = this._container = create$1('div', className);
  	},

  	_updateLayout: function () {},

  	_adjustPan: function () {},

  	_setPosition: function (pos) {
  		var subX, subY,
  		    map = this._map,
  		    container = this._container,
  		    centerPoint = map.latLngToContainerPoint(map.getCenter()),
  		    tooltipPoint = map.layerPointToContainerPoint(pos),
  		    direction = this.options.direction,
  		    tooltipWidth = container.offsetWidth,
  		    tooltipHeight = container.offsetHeight,
  		    offset = toPoint(this.options.offset),
  		    anchor = this._getAnchor();

  		if (direction === 'top') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight;
  		} else if (direction === 'bottom') {
  			subX = tooltipWidth / 2;
  			subY = 0;
  		} else if (direction === 'center') {
  			subX = tooltipWidth / 2;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'right') {
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else if (direction === 'left') {
  			subX = tooltipWidth;
  			subY = tooltipHeight / 2;
  		} else if (tooltipPoint.x < centerPoint.x) {
  			direction = 'right';
  			subX = 0;
  			subY = tooltipHeight / 2;
  		} else {
  			direction = 'left';
  			subX = tooltipWidth + (offset.x + anchor.x) * 2;
  			subY = tooltipHeight / 2;
  		}

  		pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);

  		removeClass(container, 'leaflet-tooltip-right');
  		removeClass(container, 'leaflet-tooltip-left');
  		removeClass(container, 'leaflet-tooltip-top');
  		removeClass(container, 'leaflet-tooltip-bottom');
  		addClass(container, 'leaflet-tooltip-' + direction);
  		setPosition(container, pos);
  	},

  	_updatePosition: function () {
  		var pos = this._map.latLngToLayerPoint(this._latlng);
  		this._setPosition(pos);
  	},

  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;

  		if (this._container) {
  			setOpacity(this._container, opacity);
  		}
  	},

  	_animateZoom: function (e) {
  		var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
  		this._setPosition(pos);
  	},

  	_getAnchor: function () {
  		// Where should we anchor the tooltip on the source layer?
  		return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
  	}

  });

  // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
  var tooltip = function (options, source) {
  	return new Tooltip(options, source);
  };

  // @namespace Map
  // @section Methods for Layers and Controls
  Map.include({

  	// @method openTooltip(tooltip: Tooltip): this
  	// Opens the specified tooltip.
  	// @alternative
  	// @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
  	// Creates a tooltip with the specified content and options and open it.
  	openTooltip: function (tooltip, latlng, options) {
  		if (!(tooltip instanceof Tooltip)) {
  			tooltip = new Tooltip(options).setContent(tooltip);
  		}

  		if (latlng) {
  			tooltip.setLatLng(latlng);
  		}

  		if (this.hasLayer(tooltip)) {
  			return this;
  		}

  		return this.addLayer(tooltip);
  	},

  	// @method closeTooltip(tooltip?: Tooltip): this
  	// Closes the tooltip given as parameter.
  	closeTooltip: function (tooltip) {
  		if (tooltip) {
  			this.removeLayer(tooltip);
  		}
  		return this;
  	}

  });

  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */

  // @section Tooltip methods
  Layer.include({

  	// @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
  	// Binds a tooltip to the layer with the passed `content` and sets up the
  	// necessary event listeners. If a `Function` is passed it will receive
  	// the layer as the first argument and should return a `String` or `HTMLElement`.
  	bindTooltip: function (content, options) {

  		if (content instanceof Tooltip) {
  			setOptions(content, options);
  			this._tooltip = content;
  			content._source = this;
  		} else {
  			if (!this._tooltip || options) {
  				this._tooltip = new Tooltip(options, this);
  			}
  			this._tooltip.setContent(content);

  		}

  		this._initTooltipInteractions();

  		if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
  			this.openTooltip();
  		}

  		return this;
  	},

  	// @method unbindTooltip(): this
  	// Removes the tooltip previously bound with `bindTooltip`.
  	unbindTooltip: function () {
  		if (this._tooltip) {
  			this._initTooltipInteractions(true);
  			this.closeTooltip();
  			this._tooltip = null;
  		}
  		return this;
  	},

  	_initTooltipInteractions: function (remove$$1) {
  		if (!remove$$1 && this._tooltipHandlersAdded) { return; }
  		var onOff = remove$$1 ? 'off' : 'on',
  		    events = {
  			remove: this.closeTooltip,
  			move: this._moveTooltip
  		    };
  		if (!this._tooltip.options.permanent) {
  			events.mouseover = this._openTooltip;
  			events.mouseout = this.closeTooltip;
  			if (this._tooltip.options.sticky) {
  				events.mousemove = this._moveTooltip;
  			}
  			if (touch) {
  				events.click = this._openTooltip;
  			}
  		} else {
  			events.add = this._openTooltip;
  		}
  		this[onOff](events);
  		this._tooltipHandlersAdded = !remove$$1;
  	},

  	// @method openTooltip(latlng?: LatLng): this
  	// Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
  	openTooltip: function (layer, latlng) {
  		if (this._tooltip && this._map) {
  			latlng = this._tooltip._prepareOpen(this, layer, latlng);

  			// open the tooltip on the map
  			this._map.openTooltip(this._tooltip, latlng);

  			// Tooltip container may not be defined if not permanent and never
  			// opened.
  			if (this._tooltip.options.interactive && this._tooltip._container) {
  				addClass(this._tooltip._container, 'leaflet-clickable');
  				this.addInteractiveTarget(this._tooltip._container);
  			}
  		}

  		return this;
  	},

  	// @method closeTooltip(): this
  	// Closes the tooltip bound to this layer if it is open.
  	closeTooltip: function () {
  		if (this._tooltip) {
  			this._tooltip._close();
  			if (this._tooltip.options.interactive && this._tooltip._container) {
  				removeClass(this._tooltip._container, 'leaflet-clickable');
  				this.removeInteractiveTarget(this._tooltip._container);
  			}
  		}
  		return this;
  	},

  	// @method toggleTooltip(): this
  	// Opens or closes the tooltip bound to this layer depending on its current state.
  	toggleTooltip: function (target) {
  		if (this._tooltip) {
  			if (this._tooltip._map) {
  				this.closeTooltip();
  			} else {
  				this.openTooltip(target);
  			}
  		}
  		return this;
  	},

  	// @method isTooltipOpen(): boolean
  	// Returns `true` if the tooltip bound to this layer is currently open.
  	isTooltipOpen: function () {
  		return this._tooltip.isOpen();
  	},

  	// @method setTooltipContent(content: String|HTMLElement|Tooltip): this
  	// Sets the content of the tooltip bound to this layer.
  	setTooltipContent: function (content) {
  		if (this._tooltip) {
  			this._tooltip.setContent(content);
  		}
  		return this;
  	},

  	// @method getTooltip(): Tooltip
  	// Returns the tooltip bound to this layer.
  	getTooltip: function () {
  		return this._tooltip;
  	},

  	_openTooltip: function (e) {
  		var layer = e.layer || e.target;

  		if (!this._tooltip || !this._map) {
  			return;
  		}
  		this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
  	},

  	_moveTooltip: function (e) {
  		var latlng = e.latlng, containerPoint, layerPoint;
  		if (this._tooltip.options.sticky && e.originalEvent) {
  			containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
  			layerPoint = this._map.containerPointToLayerPoint(containerPoint);
  			latlng = this._map.layerPointToLatLng(layerPoint);
  		}
  		this._tooltip.setLatLng(latlng);
  	}
  });

  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
  	options: {
  		// @section
  		// @aka DivIcon options
  		iconSize: [12, 12], // also can be set through CSS

  		// iconAnchor: (Point),
  		// popupAnchor: (Point),

  		// @option html: String|HTMLElement = ''
  		// Custom HTML code to put inside the div element, empty by default. Alternatively,
  		// an instance of `HTMLElement`.
  		html: false,

  		// @option bgPos: Point = [0, 0]
  		// Optional relative position of the background, in pixels
  		bgPos: null,

  		className: 'leaflet-div-icon'
  	},

  	createIcon: function (oldIcon) {
  		var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
  		    options = this.options;

  		if (options.html instanceof Element) {
  			empty(div);
  			div.appendChild(options.html);
  		} else {
  			div.innerHTML = options.html !== false ? options.html : '';
  		}

  		if (options.bgPos) {
  			var bgPos = toPoint(options.bgPos);
  			div.style.backgroundPosition = (-bgPos.x) + 'px ' + (-bgPos.y) + 'px';
  		}
  		this._setIconStyles(div, 'icon');

  		return div;
  	},

  	createShadow: function () {
  		return null;
  	}
  });

  // @factory L.divIcon(options: DivIcon options)
  // Creates a `DivIcon` instance with the given options.
  function divIcon(options) {
  	return new DivIcon(options);
  }

  Icon.Default = IconDefault;

  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */


  var GridLayer = Layer.extend({

  	// @section
  	// @aka GridLayer options
  	options: {
  		// @option tileSize: Number|Point = 256
  		// Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
  		tileSize: 256,

  		// @option opacity: Number = 1.0
  		// Opacity of the tiles. Can be used in the `createTile()` function.
  		opacity: 1,

  		// @option updateWhenIdle: Boolean = (depends)
  		// Load new tiles only when panning ends.
  		// `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
  		// `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
  		// [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
  		updateWhenIdle: mobile,

  		// @option updateWhenZooming: Boolean = true
  		// By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
  		updateWhenZooming: true,

  		// @option updateInterval: Number = 200
  		// Tiles will not update more than once every `updateInterval` milliseconds when panning.
  		updateInterval: 200,

  		// @option zIndex: Number = 1
  		// The explicit zIndex of the tile layer.
  		zIndex: 1,

  		// @option bounds: LatLngBounds = undefined
  		// If set, tiles will only be loaded inside the set `LatLngBounds`.
  		bounds: null,

  		// @option minZoom: Number = 0
  		// The minimum zoom level down to which this layer will be displayed (inclusive).
  		minZoom: 0,

  		// @option maxZoom: Number = undefined
  		// The maximum zoom level up to which this layer will be displayed (inclusive).
  		maxZoom: undefined,

  		// @option maxNativeZoom: Number = undefined
  		// Maximum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
  		// from `maxNativeZoom` level and auto-scaled.
  		maxNativeZoom: undefined,

  		// @option minNativeZoom: Number = undefined
  		// Minimum zoom number the tile source has available. If it is specified,
  		// the tiles on all zoom levels lower than `minNativeZoom` will be loaded
  		// from `minNativeZoom` level and auto-scaled.
  		minNativeZoom: undefined,

  		// @option noWrap: Boolean = false
  		// Whether the layer is wrapped around the antimeridian. If `true`, the
  		// GridLayer will only be displayed once at low zoom levels. Has no
  		// effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
  		// in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
  		// tiles outside the CRS limits.
  		noWrap: false,

  		// @option pane: String = 'tilePane'
  		// `Map pane` where the grid layer will be added.
  		pane: 'tilePane',

  		// @option className: String = ''
  		// A custom class name to assign to the tile layer. Empty by default.
  		className: '',

  		// @option keepBuffer: Number = 2
  		// When panning the map, keep this many rows and columns of tiles before unloading them.
  		keepBuffer: 2
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  	},

  	onAdd: function () {
  		this._initContainer();

  		this._levels = {};
  		this._tiles = {};

  		this._resetView();
  		this._update();
  	},

  	beforeAdd: function (map) {
  		map._addZoomLimit(this);
  	},

  	onRemove: function (map) {
  		this._removeAllTiles();
  		remove(this._container);
  		map._removeZoomLimit(this);
  		this._container = null;
  		this._tileZoom = undefined;
  	},

  	// @method bringToFront: this
  	// Brings the tile layer to the top of all tile layers.
  	bringToFront: function () {
  		if (this._map) {
  			toFront(this._container);
  			this._setAutoZIndex(Math.max);
  		}
  		return this;
  	},

  	// @method bringToBack: this
  	// Brings the tile layer to the bottom of all tile layers.
  	bringToBack: function () {
  		if (this._map) {
  			toBack(this._container);
  			this._setAutoZIndex(Math.min);
  		}
  		return this;
  	},

  	// @method getContainer: HTMLElement
  	// Returns the HTML element that contains the tiles for this layer.
  	getContainer: function () {
  		return this._container;
  	},

  	// @method setOpacity(opacity: Number): this
  	// Changes the [opacity](#gridlayer-opacity) of the grid layer.
  	setOpacity: function (opacity) {
  		this.options.opacity = opacity;
  		this._updateOpacity();
  		return this;
  	},

  	// @method setZIndex(zIndex: Number): this
  	// Changes the [zIndex](#gridlayer-zindex) of the grid layer.
  	setZIndex: function (zIndex) {
  		this.options.zIndex = zIndex;
  		this._updateZIndex();

  		return this;
  	},

  	// @method isLoading: Boolean
  	// Returns `true` if any tile in the grid layer has not finished loading.
  	isLoading: function () {
  		return this._loading;
  	},

  	// @method redraw: this
  	// Causes the layer to clear all the tiles and request them again.
  	redraw: function () {
  		if (this._map) {
  			this._removeAllTiles();
  			this._update();
  		}
  		return this;
  	},

  	getEvents: function () {
  		var events = {
  			viewprereset: this._invalidateAll,
  			viewreset: this._resetView,
  			zoom: this._resetView,
  			moveend: this._onMoveEnd
  		};

  		if (!this.options.updateWhenIdle) {
  			// update tiles on move, but not more often than once per given interval
  			if (!this._onMove) {
  				this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
  			}

  			events.move = this._onMove;
  		}

  		if (this._zoomAnimated) {
  			events.zoomanim = this._animateZoom;
  		}

  		return events;
  	},

  	// @section Extension methods
  	// Layers extending `GridLayer` shall reimplement the following method.
  	// @method createTile(coords: Object, done?: Function): HTMLElement
  	// Called only internally, must be overridden by classes extending `GridLayer`.
  	// Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
  	// is specified, it must be called when the tile has finished loading and drawing.
  	createTile: function () {
  		return document.createElement('div');
  	},

  	// @section
  	// @method getTileSize: Point
  	// Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
  	getTileSize: function () {
  		var s = this.options.tileSize;
  		return s instanceof Point ? s : new Point(s, s);
  	},

  	_updateZIndex: function () {
  		if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
  			this._container.style.zIndex = this.options.zIndex;
  		}
  	},

  	_setAutoZIndex: function (compare) {
  		// go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)

  		var layers = this.getPane().children,
  		    edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

  		for (var i = 0, len = layers.length, zIndex; i < len; i++) {

  			zIndex = layers[i].style.zIndex;

  			if (layers[i] !== this._container && zIndex) {
  				edgeZIndex = compare(edgeZIndex, +zIndex);
  			}
  		}

  		if (isFinite(edgeZIndex)) {
  			this.options.zIndex = edgeZIndex + compare(-1, 1);
  			this._updateZIndex();
  		}
  	},

  	_updateOpacity: function () {
  		if (!this._map) { return; }

  		// IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
  		if (ielt9) { return; }

  		setOpacity(this._container, this.options.opacity);

  		var now = +new Date(),
  		    nextFrame = false,
  		    willPrune = false;

  		for (var key in this._tiles) {
  			var tile = this._tiles[key];
  			if (!tile.current || !tile.loaded) { continue; }

  			var fade = Math.min(1, (now - tile.loaded) / 200);

  			setOpacity(tile.el, fade);
  			if (fade < 1) {
  				nextFrame = true;
  			} else {
  				if (tile.active) {
  					willPrune = true;
  				} else {
  					this._onOpaqueTile(tile);
  				}
  				tile.active = true;
  			}
  		}

  		if (willPrune && !this._noPrune) { this._pruneTiles(); }

  		if (nextFrame) {
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		}
  	},

  	_onOpaqueTile: falseFn,

  	_initContainer: function () {
  		if (this._container) { return; }

  		this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));
  		this._updateZIndex();

  		if (this.options.opacity < 1) {
  			this._updateOpacity();
  		}

  		this.getPane().appendChild(this._container);
  	},

  	_updateLevels: function () {

  		var zoom = this._tileZoom,
  		    maxZoom = this.options.maxZoom;

  		if (zoom === undefined) { return undefined; }

  		for (var z in this._levels) {
  			z = Number(z);
  			if (this._levels[z].el.children.length || z === zoom) {
  				this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
  				this._onUpdateLevel(z);
  			} else {
  				remove(this._levels[z].el);
  				this._removeTilesAtZoom(z);
  				this._onRemoveLevel(z);
  				delete this._levels[z];
  			}
  		}

  		var level = this._levels[zoom],
  		    map = this._map;

  		if (!level) {
  			level = this._levels[zoom] = {};

  			level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
  			level.el.style.zIndex = maxZoom;

  			level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
  			level.zoom = zoom;

  			this._setZoomTransform(level, map.getCenter(), map.getZoom());

  			// force the browser to consider the newly added element for transition
  			falseFn(level.el.offsetWidth);

  			this._onCreateLevel(level);
  		}

  		this._level = level;

  		return level;
  	},

  	_onUpdateLevel: falseFn,

  	_onRemoveLevel: falseFn,

  	_onCreateLevel: falseFn,

  	_pruneTiles: function () {
  		if (!this._map) {
  			return;
  		}

  		var key, tile;

  		var zoom = this._map.getZoom();
  		if (zoom > this.options.maxZoom ||
  			zoom < this.options.minZoom) {
  			this._removeAllTiles();
  			return;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			tile.retain = tile.current;
  		}

  		for (key in this._tiles) {
  			tile = this._tiles[key];
  			if (tile.current && !tile.active) {
  				var coords = tile.coords;
  				if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
  					this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
  				}
  			}
  		}

  		for (key in this._tiles) {
  			if (!this._tiles[key].retain) {
  				this._removeTile(key);
  			}
  		}
  	},

  	_removeTilesAtZoom: function (zoom) {
  		for (var key in this._tiles) {
  			if (this._tiles[key].coords.z !== zoom) {
  				continue;
  			}
  			this._removeTile(key);
  		}
  	},

  	_removeAllTiles: function () {
  		for (var key in this._tiles) {
  			this._removeTile(key);
  		}
  	},

  	_invalidateAll: function () {
  		for (var z in this._levels) {
  			remove(this._levels[z].el);
  			this._onRemoveLevel(Number(z));
  			delete this._levels[z];
  		}
  		this._removeAllTiles();

  		this._tileZoom = undefined;
  	},

  	_retainParent: function (x, y, z, minZoom) {
  		var x2 = Math.floor(x / 2),
  		    y2 = Math.floor(y / 2),
  		    z2 = z - 1,
  		    coords2 = new Point(+x2, +y2);
  		coords2.z = +z2;

  		var key = this._tileCoordsToKey(coords2),
  		    tile = this._tiles[key];

  		if (tile && tile.active) {
  			tile.retain = true;
  			return true;

  		} else if (tile && tile.loaded) {
  			tile.retain = true;
  		}

  		if (z2 > minZoom) {
  			return this._retainParent(x2, y2, z2, minZoom);
  		}

  		return false;
  	},

  	_retainChildren: function (x, y, z, maxZoom) {

  		for (var i = 2 * x; i < 2 * x + 2; i++) {
  			for (var j = 2 * y; j < 2 * y + 2; j++) {

  				var coords = new Point(i, j);
  				coords.z = z + 1;

  				var key = this._tileCoordsToKey(coords),
  				    tile = this._tiles[key];

  				if (tile && tile.active) {
  					tile.retain = true;
  					continue;

  				} else if (tile && tile.loaded) {
  					tile.retain = true;
  				}

  				if (z + 1 < maxZoom) {
  					this._retainChildren(i, j, z + 1, maxZoom);
  				}
  			}
  		}
  	},

  	_resetView: function (e) {
  		var animating = e && (e.pinch || e.flyTo);
  		this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
  	},

  	_animateZoom: function (e) {
  		this._setView(e.center, e.zoom, true, e.noUpdate);
  	},

  	_clampZoom: function (zoom) {
  		var options = this.options;

  		if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
  			return options.minNativeZoom;
  		}

  		if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
  			return options.maxNativeZoom;
  		}

  		return zoom;
  	},

  	_setView: function (center, zoom, noPrune, noUpdate) {
  		var tileZoom = Math.round(zoom);
  		if ((this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom) ||
  		    (this.options.minZoom !== undefined && tileZoom < this.options.minZoom)) {
  			tileZoom = undefined;
  		} else {
  			tileZoom = this._clampZoom(tileZoom);
  		}

  		var tileZoomChanged = this.options.updateWhenZooming && (tileZoom !== this._tileZoom);

  		if (!noUpdate || tileZoomChanged) {

  			this._tileZoom = tileZoom;

  			if (this._abortLoading) {
  				this._abortLoading();
  			}

  			this._updateLevels();
  			this._resetGrid();

  			if (tileZoom !== undefined) {
  				this._update(center);
  			}

  			if (!noPrune) {
  				this._pruneTiles();
  			}

  			// Flag to prevent _updateOpacity from pruning tiles during
  			// a zoom anim or a pinch gesture
  			this._noPrune = !!noPrune;
  		}

  		this._setZoomTransforms(center, zoom);
  	},

  	_setZoomTransforms: function (center, zoom) {
  		for (var i in this._levels) {
  			this._setZoomTransform(this._levels[i], center, zoom);
  		}
  	},

  	_setZoomTransform: function (level, center, zoom) {
  		var scale = this._map.getZoomScale(zoom, level.zoom),
  		    translate = level.origin.multiplyBy(scale)
  		        .subtract(this._map._getNewPixelOrigin(center, zoom)).round();

  		if (any3d) {
  			setTransform(level.el, translate, scale);
  		} else {
  			setPosition(level.el, translate);
  		}
  	},

  	_resetGrid: function () {
  		var map = this._map,
  		    crs = map.options.crs,
  		    tileSize = this._tileSize = this.getTileSize(),
  		    tileZoom = this._tileZoom;

  		var bounds = this._map.getPixelWorldBounds(this._tileZoom);
  		if (bounds) {
  			this._globalTileRange = this._pxBoundsToTileRange(bounds);
  		}

  		this._wrapX = crs.wrapLng && !this.options.noWrap && [
  			Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x),
  			Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)
  		];
  		this._wrapY = crs.wrapLat && !this.options.noWrap && [
  			Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x),
  			Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)
  		];
  	},

  	_onMoveEnd: function () {
  		if (!this._map || this._map._animatingZoom) { return; }

  		this._update();
  	},

  	_getTiledPixelBounds: function (center) {
  		var map = this._map,
  		    mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
  		    scale = map.getZoomScale(mapZoom, this._tileZoom),
  		    pixelCenter = map.project(center, this._tileZoom).floor(),
  		    halfSize = map.getSize().divideBy(scale * 2);

  		return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
  	},

  	// Private method to load tiles in the grid's active zoom level according to map bounds
  	_update: function (center) {
  		var map = this._map;
  		if (!map) { return; }
  		var zoom = this._clampZoom(map.getZoom());

  		if (center === undefined) { center = map.getCenter(); }
  		if (this._tileZoom === undefined) { return; }	// if out of minzoom/maxzoom

  		var pixelBounds = this._getTiledPixelBounds(center),
  		    tileRange = this._pxBoundsToTileRange(pixelBounds),
  		    tileCenter = tileRange.getCenter(),
  		    queue = [],
  		    margin = this.options.keepBuffer,
  		    noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]),
  		                              tileRange.getTopRight().add([margin, -margin]));

  		// Sanity check: panic if the tile range contains Infinity somewhere.
  		if (!(isFinite(tileRange.min.x) &&
  		      isFinite(tileRange.min.y) &&
  		      isFinite(tileRange.max.x) &&
  		      isFinite(tileRange.max.y))) { throw new Error('Attempted to load an infinite number of tiles'); }

  		for (var key in this._tiles) {
  			var c = this._tiles[key].coords;
  			if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
  				this._tiles[key].current = false;
  			}
  		}

  		// _update just loads more tiles. If the tile zoom level differs too much
  		// from the map's, let _setView reset levels and prune old tiles.
  		if (Math.abs(zoom - this._tileZoom) > 1) { this._setView(center, zoom); return; }

  		// create a queue of coordinates to load tiles from
  		for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
  			for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
  				var coords = new Point(i, j);
  				coords.z = this._tileZoom;

  				if (!this._isValidTile(coords)) { continue; }

  				var tile = this._tiles[this._tileCoordsToKey(coords)];
  				if (tile) {
  					tile.current = true;
  				} else {
  					queue.push(coords);
  				}
  			}
  		}

  		// sort tile queue to load tiles in order of their distance to center
  		queue.sort(function (a, b) {
  			return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
  		});

  		if (queue.length !== 0) {
  			// if it's the first batch of tiles to load
  			if (!this._loading) {
  				this._loading = true;
  				// @event loading: Event
  				// Fired when the grid layer starts loading tiles.
  				this.fire('loading');
  			}

  			// create DOM fragment to append tiles in one batch
  			var fragment = document.createDocumentFragment();

  			for (i = 0; i < queue.length; i++) {
  				this._addTile(queue[i], fragment);
  			}

  			this._level.el.appendChild(fragment);
  		}
  	},

  	_isValidTile: function (coords) {
  		var crs = this._map.options.crs;

  		if (!crs.infinite) {
  			// don't load tile if it's out of bounds and not wrapped
  			var bounds = this._globalTileRange;
  			if ((!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x)) ||
  			    (!crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y))) { return false; }
  		}

  		if (!this.options.bounds) { return true; }

  		// don't load tile if it doesn't intersect the bounds in options
  		var tileBounds = this._tileCoordsToBounds(coords);
  		return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
  	},

  	_keyToBounds: function (key) {
  		return this._tileCoordsToBounds(this._keyToTileCoords(key));
  	},

  	_tileCoordsToNwSe: function (coords) {
  		var map = this._map,
  		    tileSize = this.getTileSize(),
  		    nwPoint = coords.scaleBy(tileSize),
  		    sePoint = nwPoint.add(tileSize),
  		    nw = map.unproject(nwPoint, coords.z),
  		    se = map.unproject(sePoint, coords.z);
  		return [nw, se];
  	},

  	// converts tile coordinates to its geographical bounds
  	_tileCoordsToBounds: function (coords) {
  		var bp = this._tileCoordsToNwSe(coords),
  		    bounds = new LatLngBounds(bp[0], bp[1]);

  		if (!this.options.noWrap) {
  			bounds = this._map.wrapLatLngBounds(bounds);
  		}
  		return bounds;
  	},
  	// converts tile coordinates to key for the tile cache
  	_tileCoordsToKey: function (coords) {
  		return coords.x + ':' + coords.y + ':' + coords.z;
  	},

  	// converts tile cache key to coordinates
  	_keyToTileCoords: function (key) {
  		var k = key.split(':'),
  		    coords = new Point(+k[0], +k[1]);
  		coords.z = +k[2];
  		return coords;
  	},

  	_removeTile: function (key) {
  		var tile = this._tiles[key];
  		if (!tile) { return; }

  		remove(tile.el);

  		delete this._tiles[key];

  		// @event tileunload: TileEvent
  		// Fired when a tile is removed (e.g. when a tile goes off the screen).
  		this.fire('tileunload', {
  			tile: tile.el,
  			coords: this._keyToTileCoords(key)
  		});
  	},

  	_initTile: function (tile) {
  		addClass(tile, 'leaflet-tile');

  		var tileSize = this.getTileSize();
  		tile.style.width = tileSize.x + 'px';
  		tile.style.height = tileSize.y + 'px';

  		tile.onselectstart = falseFn;
  		tile.onmousemove = falseFn;

  		// update opacity on tiles in IE7-8 because of filter inheritance problems
  		if (ielt9 && this.options.opacity < 1) {
  			setOpacity(tile, this.options.opacity);
  		}

  		// without this hack, tiles disappear after zoom on Chrome for Android
  		// https://github.com/Leaflet/Leaflet/issues/2078
  		if (android && !android23) {
  			tile.style.WebkitBackfaceVisibility = 'hidden';
  		}
  	},

  	_addTile: function (coords, container) {
  		var tilePos = this._getTilePos(coords),
  		    key = this._tileCoordsToKey(coords);

  		var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

  		this._initTile(tile);

  		// if createTile is defined with a second argument ("done" callback),
  		// we know that tile is async and will be ready later; otherwise
  		if (this.createTile.length < 2) {
  			// mark tile as ready, but delay one frame for opacity animation to happen
  			requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
  		}

  		setPosition(tile, tilePos);

  		// save tile in cache
  		this._tiles[key] = {
  			el: tile,
  			coords: coords,
  			current: true
  		};

  		container.appendChild(tile);
  		// @event tileloadstart: TileEvent
  		// Fired when a tile is requested and starts loading.
  		this.fire('tileloadstart', {
  			tile: tile,
  			coords: coords
  		});
  	},

  	_tileReady: function (coords, err, tile) {
  		if (err) {
  			// @event tileerror: TileErrorEvent
  			// Fired when there is an error loading a tile.
  			this.fire('tileerror', {
  				error: err,
  				tile: tile,
  				coords: coords
  			});
  		}

  		var key = this._tileCoordsToKey(coords);

  		tile = this._tiles[key];
  		if (!tile) { return; }

  		tile.loaded = +new Date();
  		if (this._map._fadeAnimated) {
  			setOpacity(tile.el, 0);
  			cancelAnimFrame(this._fadeFrame);
  			this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
  		} else {
  			tile.active = true;
  			this._pruneTiles();
  		}

  		if (!err) {
  			addClass(tile.el, 'leaflet-tile-loaded');

  			// @event tileload: TileEvent
  			// Fired when a tile loads.
  			this.fire('tileload', {
  				tile: tile.el,
  				coords: coords
  			});
  		}

  		if (this._noTilesToLoad()) {
  			this._loading = false;
  			// @event load: Event
  			// Fired when the grid layer loaded all visible tiles.
  			this.fire('load');

  			if (ielt9 || !this._map._fadeAnimated) {
  				requestAnimFrame(this._pruneTiles, this);
  			} else {
  				// Wait a bit more than 0.2 secs (the duration of the tile fade-in)
  				// to trigger a pruning.
  				setTimeout(bind(this._pruneTiles, this), 250);
  			}
  		}
  	},

  	_getTilePos: function (coords) {
  		return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
  	},

  	_wrapCoords: function (coords) {
  		var newCoords = new Point(
  			this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x,
  			this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
  		newCoords.z = coords.z;
  		return newCoords;
  	},

  	_pxBoundsToTileRange: function (bounds) {
  		var tileSize = this.getTileSize();
  		return new Bounds(
  			bounds.min.unscaleBy(tileSize).floor(),
  			bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
  	},

  	_noTilesToLoad: function () {
  		for (var key in this._tiles) {
  			if (!this._tiles[key].loaded) { return false; }
  		}
  		return true;
  	}
  });

  // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.
  function gridLayer(options) {
  	return new GridLayer(options);
  }

  /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */


  var TileLayer = GridLayer.extend({

  	// @section
  	// @aka TileLayer options
  	options: {
  		// @option minZoom: Number = 0
  		// The minimum zoom level down to which this layer will be displayed (inclusive).
  		minZoom: 0,

  		// @option maxZoom: Number = 18
  		// The maximum zoom level up to which this layer will be displayed (inclusive).
  		maxZoom: 18,

  		// @option subdomains: String|String[] = 'abc'
  		// Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
  		subdomains: 'abc',

  		// @option errorTileUrl: String = ''
  		// URL to the tile image to show in place of the tile that failed to load.
  		errorTileUrl: '',

  		// @option zoomOffset: Number = 0
  		// The zoom number used in tile URLs will be offset with this value.
  		zoomOffset: 0,

  		// @option tms: Boolean = false
  		// If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
  		tms: false,

  		// @option zoomReverse: Boolean = false
  		// If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
  		zoomReverse: false,

  		// @option detectRetina: Boolean = false
  		// If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
  		detectRetina: false,

  		// @option crossOrigin: Boolean|String = false
  		// Whether the crossOrigin attribute will be added to the tiles.
  		// If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
  		// Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
  		crossOrigin: false
  	},

  	initialize: function (url, options) {

  		this._url = url;

  		options = setOptions(this, options);

  		// detecting retina displays, adjusting tileSize and zoom levels
  		if (options.detectRetina && retina && options.maxZoom > 0) {

  			options.tileSize = Math.floor(options.tileSize / 2);

  			if (!options.zoomReverse) {
  				options.zoomOffset++;
  				options.maxZoom--;
  			} else {
  				options.zoomOffset--;
  				options.minZoom++;
  			}

  			options.minZoom = Math.max(0, options.minZoom);
  		}

  		if (typeof options.subdomains === 'string') {
  			options.subdomains = options.subdomains.split('');
  		}

  		// for https://github.com/Leaflet/Leaflet/issues/137
  		if (!android) {
  			this.on('tileunload', this._onTileRemove);
  		}
  	},

  	// @method setUrl(url: String, noRedraw?: Boolean): this
  	// Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
  	// If the URL does not change, the layer will not be redrawn unless
  	// the noRedraw parameter is set to false.
  	setUrl: function (url, noRedraw) {
  		if (this._url === url && noRedraw === undefined) {
  			noRedraw = true;
  		}

  		this._url = url;

  		if (!noRedraw) {
  			this.redraw();
  		}
  		return this;
  	},

  	// @method createTile(coords: Object, done?: Function): HTMLElement
  	// Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
  	// to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
  	// callback is called when the tile has been loaded.
  	createTile: function (coords, done) {
  		var tile = document.createElement('img');

  		on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
  		on(tile, 'error', bind(this._tileOnError, this, done, tile));

  		if (this.options.crossOrigin || this.options.crossOrigin === '') {
  			tile.crossOrigin = this.options.crossOrigin === true ? '' : this.options.crossOrigin;
  		}

  		/*
  		 Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
  		 http://www.w3.org/TR/WCAG20-TECHS/H67
  		*/
  		tile.alt = '';

  		/*
  		 Set role="presentation" to force screen readers to ignore this
  		 https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
  		*/
  		tile.setAttribute('role', 'presentation');

  		tile.src = this.getTileUrl(coords);

  		return tile;
  	},

  	// @section Extension methods
  	// @uninheritable
  	// Layers extending `TileLayer` might reimplement the following method.
  	// @method getTileUrl(coords: Object): String
  	// Called only internally, returns the URL for a tile given its coordinates.
  	// Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
  	getTileUrl: function (coords) {
  		var data = {
  			r: retina ? '@2x' : '',
  			s: this._getSubdomain(coords),
  			x: coords.x,
  			y: coords.y,
  			z: this._getZoomForUrl()
  		};
  		if (this._map && !this._map.options.crs.infinite) {
  			var invertedY = this._globalTileRange.max.y - coords.y;
  			if (this.options.tms) {
  				data['y'] = invertedY;
  			}
  			data['-y'] = invertedY;
  		}

  		return template(this._url, extend(data, this.options));
  	},

  	_tileOnLoad: function (done, tile) {
  		// For https://github.com/Leaflet/Leaflet/issues/3332
  		if (ielt9) {
  			setTimeout(bind(done, this, null, tile), 0);
  		} else {
  			done(null, tile);
  		}
  	},

  	_tileOnError: function (done, tile, e) {
  		var errorUrl = this.options.errorTileUrl;
  		if (errorUrl && tile.getAttribute('src') !== errorUrl) {
  			tile.src = errorUrl;
  		}
  		done(e, tile);
  	},

  	_onTileRemove: function (e) {
  		e.tile.onload = null;
  	},

  	_getZoomForUrl: function () {
  		var zoom = this._tileZoom,
  		maxZoom = this.options.maxZoom,
  		zoomReverse = this.options.zoomReverse,
  		zoomOffset = this.options.zoomOffset;

  		if (zoomReverse) {
  			zoom = maxZoom - zoom;
  		}

  		return zoom + zoomOffset;
  	},

  	_getSubdomain: function (tilePoint) {
  		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
  		return this.options.subdomains[index];
  	},

  	// stops loading all tiles in the background layer
  	_abortLoading: function () {
  		var i, tile;
  		for (i in this._tiles) {
  			if (this._tiles[i].coords.z !== this._tileZoom) {
  				tile = this._tiles[i].el;

  				tile.onload = falseFn;
  				tile.onerror = falseFn;

  				if (!tile.complete) {
  					tile.src = emptyImageUrl;
  					remove(tile);
  					delete this._tiles[i];
  				}
  			}
  		}
  	},

  	_removeTile: function (key) {
  		var tile = this._tiles[key];
  		if (!tile) { return; }

  		// Cancels any pending http requests associated with the tile
  		// unless we're on Android's stock browser,
  		// see https://github.com/Leaflet/Leaflet/issues/137
  		if (!androidStock) {
  			tile.el.setAttribute('src', emptyImageUrl);
  		}

  		return GridLayer.prototype._removeTile.call(this, key);
  	},

  	_tileReady: function (coords, err, tile) {
  		if (!this._map || (tile && tile.getAttribute('src') === emptyImageUrl)) {
  			return;
  		}

  		return GridLayer.prototype._tileReady.call(this, coords, err, tile);
  	}
  });


  // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
  // Instantiates a tile layer object given a `URL template` and optionally an options object.

  function tileLayer(url, options) {
  	return new TileLayer(url, options);
  }

  /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */

  var TileLayerWMS = TileLayer.extend({

  	// @section
  	// @aka TileLayer.WMS options
  	// If any custom options not documented here are used, they will be sent to the
  	// WMS server as extra parameters in each request URL. This can be useful for
  	// [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
  	defaultWmsParams: {
  		service: 'WMS',
  		request: 'GetMap',

  		// @option layers: String = ''
  		// **(required)** Comma-separated list of WMS layers to show.
  		layers: '',

  		// @option styles: String = ''
  		// Comma-separated list of WMS styles.
  		styles: '',

  		// @option format: String = 'image/jpeg'
  		// WMS image format (use `'image/png'` for layers with transparency).
  		format: 'image/jpeg',

  		// @option transparent: Boolean = false
  		// If `true`, the WMS service will return images with transparency.
  		transparent: false,

  		// @option version: String = '1.1.1'
  		// Version of the WMS service to use
  		version: '1.1.1'
  	},

  	options: {
  		// @option crs: CRS = null
  		// Coordinate Reference System to use for the WMS requests, defaults to
  		// map CRS. Don't change this if you're not sure what it means.
  		crs: null,

  		// @option uppercase: Boolean = false
  		// If `true`, WMS request parameter keys will be uppercase.
  		uppercase: false
  	},

  	initialize: function (url, options) {

  		this._url = url;

  		var wmsParams = extend({}, this.defaultWmsParams);

  		// all keys that are not TileLayer options go to WMS params
  		for (var i in options) {
  			if (!(i in this.options)) {
  				wmsParams[i] = options[i];
  			}
  		}

  		options = setOptions(this, options);

  		var realRetina = options.detectRetina && retina ? 2 : 1;
  		var tileSize = this.getTileSize();
  		wmsParams.width = tileSize.x * realRetina;
  		wmsParams.height = tileSize.y * realRetina;

  		this.wmsParams = wmsParams;
  	},

  	onAdd: function (map) {

  		this._crs = this.options.crs || map.options.crs;
  		this._wmsVersion = parseFloat(this.wmsParams.version);

  		var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
  		this.wmsParams[projectionKey] = this._crs.code;

  		TileLayer.prototype.onAdd.call(this, map);
  	},

  	getTileUrl: function (coords) {

  		var tileBounds = this._tileCoordsToNwSe(coords),
  		    crs = this._crs,
  		    bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
  		    min = bounds.min,
  		    max = bounds.max,
  		    bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ?
  		    [min.y, min.x, max.y, max.x] :
  		    [min.x, min.y, max.x, max.y]).join(','),
  		    url = TileLayer.prototype.getTileUrl.call(this, coords);
  		return url +
  			getParamString(this.wmsParams, url, this.options.uppercase) +
  			(this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
  	},

  	// @method setParams(params: Object, noRedraw?: Boolean): this
  	// Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
  	setParams: function (params, noRedraw) {

  		extend(this.wmsParams, params);

  		if (!noRedraw) {
  			this.redraw();
  		}

  		return this;
  	}
  });


  // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
  function tileLayerWMS(url, options) {
  	return new TileLayerWMS(url, options);
  }

  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;

  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({

  	// @section
  	// @aka Renderer options
  	options: {
  		// @option padding: Number = 0.1
  		// How much to extend the clip area around the map view (relative to its size)
  		// e.g. 0.1 would be 10% of map view in each direction
  		padding: 0.1,

  		// @option tolerance: Number = 0
  		// How much to extend click tolerance round a path/object on the map
  		tolerance : 0
  	},

  	initialize: function (options) {
  		setOptions(this, options);
  		stamp(this);
  		this._layers = this._layers || {};
  	},

  	onAdd: function () {
  		if (!this._container) {
  			this._initContainer(); // defined by renderer implementations

  			if (this._zoomAnimated) {
  				addClass(this._container, 'leaflet-zoom-animated');
  			}
  		}

  		this.getPane().appendChild(this._container);
  		this._update();
  		this.on('update', this._updatePaths, this);
  	},

  	onRemove: function () {
  		this.off('update', this._updatePaths, this);
  		this._destroyContainer();
  	},

  	getEvents: function () {
  		var events = {
  			viewreset: this._reset,
  			zoom: this._onZoom,
  			moveend: this._update,
  			zoomend: this._onZoomEnd
  		};
  		if (this._zoomAnimated) {
  			events.zoomanim = this._onAnimZoom;
  		}
  		return events;
  	},

  	_onAnimZoom: function (ev) {
  		this._updateTransform(ev.center, ev.zoom);
  	},

  	_onZoom: function () {
  		this._updateTransform(this._map.getCenter(), this._map.getZoom());
  	},

  	_updateTransform: function (center, zoom) {
  		var scale = this._map.getZoomScale(zoom, this._zoom),
  		    position = getPosition(this._container),
  		    viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
  		    currentCenterPoint = this._map.project(this._center, zoom),
  		    destCenterPoint = this._map.project(center, zoom),
  		    centerOffset = destCenterPoint.subtract(currentCenterPoint),

  		    topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

  		if (any3d) {
  			setTransform(this._container, topLeftOffset, scale);
  		} else {
  			setPosition(this._container, topLeftOffset);
  		}
  	},

  	_reset: function () {
  		this._update();
  		this._updateTransform(this._center, this._zoom);

  		for (var id in this._layers) {
  			this._layers[id]._reset();
  		}
  	},

  	_onZoomEnd: function () {
  		for (var id in this._layers) {
  			this._layers[id]._project();
  		}
  	},

  	_updatePaths: function () {
  		for (var id in this._layers) {
  			this._layers[id]._update();
  		}
  	},

  	_update: function () {
  		// Update pixel bounds of renderer container (for positioning/sizing/clipping later)
  		// Subclasses are responsible of firing the 'update' event.
  		var p = this.options.padding,
  		    size = this._map.getSize(),
  		    min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

  		this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());

  		this._center = this._map.getCenter();
  		this._zoom = this._map.getZoom();
  	}
  });

  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var Canvas = Renderer.extend({
  	getEvents: function () {
  		var events = Renderer.prototype.getEvents.call(this);
  		events.viewprereset = this._onViewPreReset;
  		return events;
  	},

  	_onViewPreReset: function () {
  		// Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
  		this._postponeUpdatePaths = true;
  	},

  	onAdd: function () {
  		Renderer.prototype.onAdd.call(this);

  		// Redraw vectors since canvas is cleared upon removal,
  		// in case of removing the renderer itself from the map.
  		this._draw();
  	},

  	_initContainer: function () {
  		var container = this._container = document.createElement('canvas');

  		on(container, 'mousemove', this._onMouseMove, this);
  		on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
  		on(container, 'mouseout', this._handleMouseOut, this);

  		this._ctx = container.getContext('2d');
  	},

  	_destroyContainer: function () {
  		cancelAnimFrame(this._redrawRequest);
  		delete this._ctx;
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  	},

  	_updatePaths: function () {
  		if (this._postponeUpdatePaths) { return; }

  		var layer;
  		this._redrawBounds = null;
  		for (var id in this._layers) {
  			layer = this._layers[id];
  			layer._update();
  		}
  		this._redraw();
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    container = this._container,
  		    size = b.getSize(),
  		    m = retina ? 2 : 1;

  		setPosition(container, b.min);

  		// set canvas size (also clearing it); use double size on retina
  		container.width = m * size.x;
  		container.height = m * size.y;
  		container.style.width = size.x + 'px';
  		container.style.height = size.y + 'px';

  		if (retina) {
  			this._ctx.scale(2, 2);
  		}

  		// translate so we use the same path coordinates after canvas element moves
  		this._ctx.translate(-b.min.x, -b.min.y);

  		// Tell paths to redraw themselves
  		this.fire('update');
  	},

  	_reset: function () {
  		Renderer.prototype._reset.call(this);

  		if (this._postponeUpdatePaths) {
  			this._postponeUpdatePaths = false;
  			this._updatePaths();
  		}
  	},

  	_initPath: function (layer) {
  		this._updateDashArray(layer);
  		this._layers[stamp(layer)] = layer;

  		var order = layer._order = {
  			layer: layer,
  			prev: this._drawLast,
  			next: null
  		};
  		if (this._drawLast) { this._drawLast.next = order; }
  		this._drawLast = order;
  		this._drawFirst = this._drawFirst || this._drawLast;
  	},

  	_addPath: function (layer) {
  		this._requestRedraw(layer);
  	},

  	_removePath: function (layer) {
  		var order = layer._order;
  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			this._drawLast = prev;
  		}
  		if (prev) {
  			prev.next = next;
  		} else {
  			this._drawFirst = next;
  		}

  		delete layer._order;

  		delete this._layers[stamp(layer)];

  		this._requestRedraw(layer);
  	},

  	_updatePath: function (layer) {
  		// Redraw the union of the layer's old pixel
  		// bounds and the new pixel bounds.
  		this._extendRedrawBounds(layer);
  		layer._project();
  		layer._update();
  		// The redraw will extend the redraw bounds
  		// with the new pixel bounds.
  		this._requestRedraw(layer);
  	},

  	_updateStyle: function (layer) {
  		this._updateDashArray(layer);
  		this._requestRedraw(layer);
  	},

  	_updateDashArray: function (layer) {
  		if (typeof layer.options.dashArray === 'string') {
  			var parts = layer.options.dashArray.split(/[, ]+/),
  			    dashArray = [],
  			    dashValue,
  			    i;
  			for (i = 0; i < parts.length; i++) {
  				dashValue = Number(parts[i]);
  				// Ignore dash array containing invalid lengths
  				if (isNaN(dashValue)) { return; }
  				dashArray.push(dashValue);
  			}
  			layer.options._dashArray = dashArray;
  		} else {
  			layer.options._dashArray = layer.options.dashArray;
  		}
  	},

  	_requestRedraw: function (layer) {
  		if (!this._map) { return; }

  		this._extendRedrawBounds(layer);
  		this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
  	},

  	_extendRedrawBounds: function (layer) {
  		if (layer._pxBounds) {
  			var padding = (layer.options.weight || 0) + 1;
  			this._redrawBounds = this._redrawBounds || new Bounds();
  			this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));
  			this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
  		}
  	},

  	_redraw: function () {
  		this._redrawRequest = null;

  		if (this._redrawBounds) {
  			this._redrawBounds.min._floor();
  			this._redrawBounds.max._ceil();
  		}

  		this._clear(); // clear layers in redraw bounds
  		this._draw(); // draw layers

  		this._redrawBounds = null;
  	},

  	_clear: function () {
  		var bounds = this._redrawBounds;
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
  		} else {
  			this._ctx.save();
  			this._ctx.setTransform(1, 0, 0, 1, 0, 0);
  			this._ctx.clearRect(0, 0, this._container.width, this._container.height);
  			this._ctx.restore();
  		}
  	},

  	_draw: function () {
  		var layer, bounds = this._redrawBounds;
  		this._ctx.save();
  		if (bounds) {
  			var size = bounds.getSize();
  			this._ctx.beginPath();
  			this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
  			this._ctx.clip();
  		}

  		this._drawing = true;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (!bounds || (layer._pxBounds && layer._pxBounds.intersects(bounds))) {
  				layer._updatePath();
  			}
  		}

  		this._drawing = false;

  		this._ctx.restore();  // Restore state before clipping.
  	},

  	_updatePoly: function (layer, closed) {
  		if (!this._drawing) { return; }

  		var i, j, len2, p,
  		    parts = layer._parts,
  		    len = parts.length,
  		    ctx = this._ctx;

  		if (!len) { return; }

  		ctx.beginPath();

  		for (i = 0; i < len; i++) {
  			for (j = 0, len2 = parts[i].length; j < len2; j++) {
  				p = parts[i][j];
  				ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
  			}
  			if (closed) {
  				ctx.closePath();
  			}
  		}

  		this._fillStroke(ctx, layer);

  		// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
  	},

  	_updateCircle: function (layer) {

  		if (!this._drawing || layer._empty()) { return; }

  		var p = layer._point,
  		    ctx = this._ctx,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;

  		if (s !== 1) {
  			ctx.save();
  			ctx.scale(1, s);
  		}

  		ctx.beginPath();
  		ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

  		if (s !== 1) {
  			ctx.restore();
  		}

  		this._fillStroke(ctx, layer);
  	},

  	_fillStroke: function (ctx, layer) {
  		var options = layer.options;

  		if (options.fill) {
  			ctx.globalAlpha = options.fillOpacity;
  			ctx.fillStyle = options.fillColor || options.color;
  			ctx.fill(options.fillRule || 'evenodd');
  		}

  		if (options.stroke && options.weight !== 0) {
  			if (ctx.setLineDash) {
  				ctx.setLineDash(layer.options && layer.options._dashArray || []);
  			}
  			ctx.globalAlpha = options.opacity;
  			ctx.lineWidth = options.weight;
  			ctx.strokeStyle = options.color;
  			ctx.lineCap = options.lineCap;
  			ctx.lineJoin = options.lineJoin;
  			ctx.stroke();
  		}
  	},

  	// Canvas obviously doesn't have mouse events for individual drawn objects,
  	// so we emulate that by calculating what's under the mouse on mousemove/click manually

  	_onClick: function (e) {
  		var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				if (!(e.type === 'click' || e.type !== 'preclick') || !this._map._draggableMoved(layer)) {
  					clickedLayer = layer;
  				}
  			}
  		}
  		if (clickedLayer)  {
  			fakeStop(e);
  			this._fireEvent([clickedLayer], e);
  		}
  	},

  	_onMouseMove: function (e) {
  		if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) { return; }

  		var point = this._map.mouseEventToLayerPoint(e);
  		this._handleMouseHover(e, point);
  	},


  	_handleMouseOut: function (e) {
  		var layer = this._hoveredLayer;
  		if (layer) {
  			// if we're leaving the layer, fire mouseout
  			removeClass(this._container, 'leaflet-interactive');
  			this._fireEvent([layer], e, 'mouseout');
  			this._hoveredLayer = null;
  			this._mouseHoverThrottled = false;
  		}
  	},

  	_handleMouseHover: function (e, point) {
  		if (this._mouseHoverThrottled) {
  			return;
  		}

  		var layer, candidateHoveredLayer;

  		for (var order = this._drawFirst; order; order = order.next) {
  			layer = order.layer;
  			if (layer.options.interactive && layer._containsPoint(point)) {
  				candidateHoveredLayer = layer;
  			}
  		}

  		if (candidateHoveredLayer !== this._hoveredLayer) {
  			this._handleMouseOut(e);

  			if (candidateHoveredLayer) {
  				addClass(this._container, 'leaflet-interactive'); // change cursor
  				this._fireEvent([candidateHoveredLayer], e, 'mouseover');
  				this._hoveredLayer = candidateHoveredLayer;
  			}
  		}

  		if (this._hoveredLayer) {
  			this._fireEvent([this._hoveredLayer], e);
  		}

  		this._mouseHoverThrottled = true;
  		setTimeout(bind(function () {
  			this._mouseHoverThrottled = false;
  		}, this), 32);
  	},

  	_fireEvent: function (layers, e, type) {
  		this._map._fireDOMEvent(e, type || e.type, layers);
  	},

  	_bringToFront: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (next) {
  			next.prev = prev;
  		} else {
  			// Already last
  			return;
  		}
  		if (prev) {
  			prev.next = next;
  		} else if (next) {
  			// Update first entry unless this is the
  			// single entry
  			this._drawFirst = next;
  		}

  		order.prev = this._drawLast;
  		this._drawLast.next = order;

  		order.next = null;
  		this._drawLast = order;

  		this._requestRedraw(layer);
  	},

  	_bringToBack: function (layer) {
  		var order = layer._order;

  		if (!order) { return; }

  		var next = order.next;
  		var prev = order.prev;

  		if (prev) {
  			prev.next = next;
  		} else {
  			// Already first
  			return;
  		}
  		if (next) {
  			next.prev = prev;
  		} else if (prev) {
  			// Update last entry unless this is the
  			// single entry
  			this._drawLast = prev;
  		}

  		order.prev = null;

  		order.next = this._drawFirst;
  		this._drawFirst.prev = order;
  		this._drawFirst = order;

  		this._requestRedraw(layer);
  	}
  });

  // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.
  function canvas$1(options) {
  	return canvas ? new Canvas(options) : null;
  }

  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */


  var vmlCreate = (function () {
  	try {
  		document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
  		return function (name) {
  			return document.createElement('<lvml:' + name + ' class="lvml">');
  		};
  	} catch (e) {
  		return function (name) {
  			return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
  		};
  	}
  })();


  /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */

  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
  var vmlMixin = {

  	_initContainer: function () {
  		this._container = create$1('div', 'leaflet-vml-container');
  	},

  	_update: function () {
  		if (this._map._animatingZoom) { return; }
  		Renderer.prototype._update.call(this);
  		this.fire('update');
  	},

  	_initPath: function (layer) {
  		var container = layer._container = vmlCreate('shape');

  		addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));

  		container.coordsize = '1 1';

  		layer._path = vmlCreate('path');
  		container.appendChild(layer._path);

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		var container = layer._container;
  		this._container.appendChild(container);

  		if (layer.options.interactive) {
  			layer.addInteractiveTarget(container);
  		}
  	},

  	_removePath: function (layer) {
  		var container = layer._container;
  		remove(container);
  		layer.removeInteractiveTarget(container);
  		delete this._layers[stamp(layer)];
  	},

  	_updateStyle: function (layer) {
  		var stroke = layer._stroke,
  		    fill = layer._fill,
  		    options = layer.options,
  		    container = layer._container;

  		container.stroked = !!options.stroke;
  		container.filled = !!options.fill;

  		if (options.stroke) {
  			if (!stroke) {
  				stroke = layer._stroke = vmlCreate('stroke');
  			}
  			container.appendChild(stroke);
  			stroke.weight = options.weight + 'px';
  			stroke.color = options.color;
  			stroke.opacity = options.opacity;

  			if (options.dashArray) {
  				stroke.dashStyle = isArray(options.dashArray) ?
  				    options.dashArray.join(' ') :
  				    options.dashArray.replace(/( *, *)/g, ' ');
  			} else {
  				stroke.dashStyle = '';
  			}
  			stroke.endcap = options.lineCap.replace('butt', 'flat');
  			stroke.joinstyle = options.lineJoin;

  		} else if (stroke) {
  			container.removeChild(stroke);
  			layer._stroke = null;
  		}

  		if (options.fill) {
  			if (!fill) {
  				fill = layer._fill = vmlCreate('fill');
  			}
  			container.appendChild(fill);
  			fill.color = options.fillColor || options.color;
  			fill.opacity = options.fillOpacity;

  		} else if (fill) {
  			container.removeChild(fill);
  			layer._fill = null;
  		}
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point.round(),
  		    r = Math.round(layer._radius),
  		    r2 = Math.round(layer._radiusY || r);

  		this._setPath(layer, layer._empty() ? 'M0 0' :
  			'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + (65535 * 360));
  	},

  	_setPath: function (layer, path) {
  		layer._path.v = path;
  	},

  	_bringToFront: function (layer) {
  		toFront(layer._container);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._container);
  	}
  };

  var create$2 = vml ? vmlCreate : svgCreate;

  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var SVG = Renderer.extend({

  	getEvents: function () {
  		var events = Renderer.prototype.getEvents.call(this);
  		events.zoomstart = this._onZoomStart;
  		return events;
  	},

  	_initContainer: function () {
  		this._container = create$2('svg');

  		// makes it possible to click through svg root; we'll reset it back in individual paths
  		this._container.setAttribute('pointer-events', 'none');

  		this._rootGroup = create$2('g');
  		this._container.appendChild(this._rootGroup);
  	},

  	_destroyContainer: function () {
  		remove(this._container);
  		off(this._container);
  		delete this._container;
  		delete this._rootGroup;
  		delete this._svgSize;
  	},

  	_onZoomStart: function () {
  		// Drag-then-pinch interactions might mess up the center and zoom.
  		// In this case, the easiest way to prevent this is re-do the renderer
  		//   bounds and padding when the zooming starts.
  		this._update();
  	},

  	_update: function () {
  		if (this._map._animatingZoom && this._bounds) { return; }

  		Renderer.prototype._update.call(this);

  		var b = this._bounds,
  		    size = b.getSize(),
  		    container = this._container;

  		// set size of svg-container if changed
  		if (!this._svgSize || !this._svgSize.equals(size)) {
  			this._svgSize = size;
  			container.setAttribute('width', size.x);
  			container.setAttribute('height', size.y);
  		}

  		// movement: update container viewBox so that we don't have to change coordinates of individual layers
  		setPosition(container, b.min);
  		container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));

  		this.fire('update');
  	},

  	// methods below are called by vector layers implementations

  	_initPath: function (layer) {
  		var path = layer._path = create$2('path');

  		// @namespace Path
  		// @option className: String = null
  		// Custom class name set on an element. Only for SVG renderer.
  		if (layer.options.className) {
  			addClass(path, layer.options.className);
  		}

  		if (layer.options.interactive) {
  			addClass(path, 'leaflet-interactive');
  		}

  		this._updateStyle(layer);
  		this._layers[stamp(layer)] = layer;
  	},

  	_addPath: function (layer) {
  		if (!this._rootGroup) { this._initContainer(); }
  		this._rootGroup.appendChild(layer._path);
  		layer.addInteractiveTarget(layer._path);
  	},

  	_removePath: function (layer) {
  		remove(layer._path);
  		layer.removeInteractiveTarget(layer._path);
  		delete this._layers[stamp(layer)];
  	},

  	_updatePath: function (layer) {
  		layer._project();
  		layer._update();
  	},

  	_updateStyle: function (layer) {
  		var path = layer._path,
  		    options = layer.options;

  		if (!path) { return; }

  		if (options.stroke) {
  			path.setAttribute('stroke', options.color);
  			path.setAttribute('stroke-opacity', options.opacity);
  			path.setAttribute('stroke-width', options.weight);
  			path.setAttribute('stroke-linecap', options.lineCap);
  			path.setAttribute('stroke-linejoin', options.lineJoin);

  			if (options.dashArray) {
  				path.setAttribute('stroke-dasharray', options.dashArray);
  			} else {
  				path.removeAttribute('stroke-dasharray');
  			}

  			if (options.dashOffset) {
  				path.setAttribute('stroke-dashoffset', options.dashOffset);
  			} else {
  				path.removeAttribute('stroke-dashoffset');
  			}
  		} else {
  			path.setAttribute('stroke', 'none');
  		}

  		if (options.fill) {
  			path.setAttribute('fill', options.fillColor || options.color);
  			path.setAttribute('fill-opacity', options.fillOpacity);
  			path.setAttribute('fill-rule', options.fillRule || 'evenodd');
  		} else {
  			path.setAttribute('fill', 'none');
  		}
  	},

  	_updatePoly: function (layer, closed) {
  		this._setPath(layer, pointsToPath(layer._parts, closed));
  	},

  	_updateCircle: function (layer) {
  		var p = layer._point,
  		    r = Math.max(Math.round(layer._radius), 1),
  		    r2 = Math.max(Math.round(layer._radiusY), 1) || r,
  		    arc = 'a' + r + ',' + r2 + ' 0 1,0 ';

  		// drawing a circle with two half-arcs
  		var d = layer._empty() ? 'M0 0' :
  			'M' + (p.x - r) + ',' + p.y +
  			arc + (r * 2) + ',0 ' +
  			arc + (-r * 2) + ',0 ';

  		this._setPath(layer, d);
  	},

  	_setPath: function (layer, path) {
  		layer._path.setAttribute('d', path);
  	},

  	// SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
  	_bringToFront: function (layer) {
  		toFront(layer._path);
  	},

  	_bringToBack: function (layer) {
  		toBack(layer._path);
  	}
  });

  if (vml) {
  	SVG.include(vmlMixin);
  }

  // @namespace SVG
  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.
  function svg$1(options) {
  	return svg || vml ? new SVG(options) : null;
  }

  Map.include({
  	// @namespace Map; @method getRenderer(layer: Path): Renderer
  	// Returns the instance of `Renderer` that should be used to render the given
  	// `Path`. It will ensure that the `renderer` options of the map and paths
  	// are respected, and that the renderers do exist on the map.
  	getRenderer: function (layer) {
  		// @namespace Path; @option renderer: Renderer
  		// Use this specific instance of `Renderer` for this path. Takes
  		// precedence over the map's [default renderer](#map-renderer).
  		var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

  		if (!renderer) {
  			renderer = this._renderer = this._createRenderer();
  		}

  		if (!this.hasLayer(renderer)) {
  			this.addLayer(renderer);
  		}
  		return renderer;
  	},

  	_getPaneRenderer: function (name) {
  		if (name === 'overlayPane' || name === undefined) {
  			return false;
  		}

  		var renderer = this._paneRenderers[name];
  		if (renderer === undefined) {
  			renderer = this._createRenderer({pane: name});
  			this._paneRenderers[name] = renderer;
  		}
  		return renderer;
  	},

  	_createRenderer: function (options) {
  		// @namespace Map; @option preferCanvas: Boolean = false
  		// Whether `Path`s should be rendered on a `Canvas` renderer.
  		// By default, all `Path`s are rendered in a `SVG` renderer.
  		return (this.options.preferCanvas && canvas$1(options)) || svg$1(options);
  	}
  });

  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */


  var Rectangle = Polygon.extend({
  	initialize: function (latLngBounds, options) {
  		Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
  	},

  	// @method setBounds(latLngBounds: LatLngBounds): this
  	// Redraws the rectangle with the passed bounds.
  	setBounds: function (latLngBounds) {
  		return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
  	},

  	_boundsToLatLngs: function (latLngBounds) {
  		latLngBounds = toLatLngBounds(latLngBounds);
  		return [
  			latLngBounds.getSouthWest(),
  			latLngBounds.getNorthWest(),
  			latLngBounds.getNorthEast(),
  			latLngBounds.getSouthEast()
  		];
  	}
  });


  // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
  function rectangle(latLngBounds, options) {
  	return new Rectangle(latLngBounds, options);
  }

  SVG.create = create$2;
  SVG.pointsToPath = pointsToPath;

  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;

  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option boxZoom: Boolean = true
  	// Whether the map can be zoomed to a rectangular area specified by
  	// dragging the mouse while pressing the shift key.
  	boxZoom: true
  });

  var BoxZoom = Handler.extend({
  	initialize: function (map) {
  		this._map = map;
  		this._container = map._container;
  		this._pane = map._panes.overlayPane;
  		this._resetStateTimeout = 0;
  		map.on('unload', this._destroy, this);
  	},

  	addHooks: function () {
  		on(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	removeHooks: function () {
  		off(this._container, 'mousedown', this._onMouseDown, this);
  	},

  	moved: function () {
  		return this._moved;
  	},

  	_destroy: function () {
  		remove(this._pane);
  		delete this._pane;
  	},

  	_resetState: function () {
  		this._resetStateTimeout = 0;
  		this._moved = false;
  	},

  	_clearDeferredResetState: function () {
  		if (this._resetStateTimeout !== 0) {
  			clearTimeout(this._resetStateTimeout);
  			this._resetStateTimeout = 0;
  		}
  	},

  	_onMouseDown: function (e) {
  		if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

  		// Clear the deferred resetState if it hasn't executed yet, otherwise it
  		// will interrupt the interaction and orphan a box element in the container.
  		this._clearDeferredResetState();
  		this._resetState();

  		disableTextSelection();
  		disableImageDrag();

  		this._startPoint = this._map.mouseEventToContainerPoint(e);

  		on(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseMove: function (e) {
  		if (!this._moved) {
  			this._moved = true;

  			this._box = create$1('div', 'leaflet-zoom-box', this._container);
  			addClass(this._container, 'leaflet-crosshair');

  			this._map.fire('boxzoomstart');
  		}

  		this._point = this._map.mouseEventToContainerPoint(e);

  		var bounds = new Bounds(this._point, this._startPoint),
  		    size = bounds.getSize();

  		setPosition(this._box, bounds.min);

  		this._box.style.width  = size.x + 'px';
  		this._box.style.height = size.y + 'px';
  	},

  	_finish: function () {
  		if (this._moved) {
  			remove(this._box);
  			removeClass(this._container, 'leaflet-crosshair');
  		}

  		enableTextSelection();
  		enableImageDrag();

  		off(document, {
  			contextmenu: stop,
  			mousemove: this._onMouseMove,
  			mouseup: this._onMouseUp,
  			keydown: this._onKeyDown
  		}, this);
  	},

  	_onMouseUp: function (e) {
  		if ((e.which !== 1) && (e.button !== 1)) { return; }

  		this._finish();

  		if (!this._moved) { return; }
  		// Postpone to next JS tick so internal click event handling
  		// still see it as "moved".
  		this._clearDeferredResetState();
  		this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);

  		var bounds = new LatLngBounds(
  		        this._map.containerPointToLatLng(this._startPoint),
  		        this._map.containerPointToLatLng(this._point));

  		this._map
  			.fitBounds(bounds)
  			.fire('boxzoomend', {boxZoomBounds: bounds});
  	},

  	_onKeyDown: function (e) {
  		if (e.keyCode === 27) {
  			this._finish();
  		}
  	}
  });

  // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.
  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);

  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */

  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
  	// @option doubleClickZoom: Boolean|String = true
  	// Whether the map can be zoomed in by double clicking on it and
  	// zoomed out by double clicking while holding shift. If passed
  	// `'center'`, double-click zoom will zoom to the center of the
  	//  view regardless of where the mouse was.
  	doubleClickZoom: true
  });

  var DoubleClickZoom = Handler.extend({
  	addHooks: function () {
  		this._map.on('dblclick', this._onDoubleClick, this);
  	},

  	removeHooks: function () {
  		this._map.off('dblclick', this._onDoubleClick, this);
  	},

  	_onDoubleClick: function (e) {
  		var map = this._map,
  		    oldZoom = map.getZoom(),
  		    delta = map.options.zoomDelta,
  		    zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

  		if (map.options.doubleClickZoom === 'center') {
  			map.setZoom(zoom);
  		} else {
  			map.setZoomAround(e.containerPoint, zoom);
  		}
  	}
  });

  // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see `Handler` methods). For example:
  //
  // ```js
  // map.doubleClickZoom.disable();
  // ```
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.
  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);

  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @option dragging: Boolean = true
  	// Whether the map be draggable with mouse/touch or not.
  	dragging: true,

  	// @section Panning Inertia Options
  	// @option inertia: Boolean = *
  	// If enabled, panning of the map will have an inertia effect where
  	// the map builds momentum while dragging and continues moving in
  	// the same direction for some time. Feels especially nice on touch
  	// devices. Enabled by default unless running on old Android devices.
  	inertia: !android23,

  	// @option inertiaDeceleration: Number = 3000
  	// The rate with which the inertial movement slows down, in pixels/second².
  	inertiaDeceleration: 3400, // px/s^2

  	// @option inertiaMaxSpeed: Number = Infinity
  	// Max speed of the inertial movement, in pixels/second.
  	inertiaMaxSpeed: Infinity, // px/s

  	// @option easeLinearity: Number = 0.2
  	easeLinearity: 0.2,

  	// TODO refactor, move to CRS
  	// @option worldCopyJump: Boolean = false
  	// With this option enabled, the map tracks when you pan to another "copy"
  	// of the world and seamlessly jumps to the original one so that all overlays
  	// like markers and vector layers are still visible.
  	worldCopyJump: false,

  	// @option maxBoundsViscosity: Number = 0.0
  	// If `maxBounds` is set, this option will control how solid the bounds
  	// are when dragging the map around. The default value of `0.0` allows the
  	// user to drag outside the bounds at normal speed, higher values will
  	// slow down map dragging outside bounds, and `1.0` makes the bounds fully
  	// solid, preventing the user from dragging outside the bounds.
  	maxBoundsViscosity: 0.0
  });

  var Drag = Handler.extend({
  	addHooks: function () {
  		if (!this._draggable) {
  			var map = this._map;

  			this._draggable = new Draggable(map._mapPane, map._container);

  			this._draggable.on({
  				dragstart: this._onDragStart,
  				drag: this._onDrag,
  				dragend: this._onDragEnd
  			}, this);

  			this._draggable.on('predrag', this._onPreDragLimit, this);
  			if (map.options.worldCopyJump) {
  				this._draggable.on('predrag', this._onPreDragWrap, this);
  				map.on('zoomend', this._onZoomEnd, this);

  				map.whenReady(this._onZoomEnd, this);
  			}
  		}
  		addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');
  		this._draggable.enable();
  		this._positions = [];
  		this._times = [];
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-grab');
  		removeClass(this._map._container, 'leaflet-touch-drag');
  		this._draggable.disable();
  	},

  	moved: function () {
  		return this._draggable && this._draggable._moved;
  	},

  	moving: function () {
  		return this._draggable && this._draggable._moving;
  	},

  	_onDragStart: function () {
  		var map = this._map;

  		map._stop();
  		if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
  			var bounds = toLatLngBounds(this._map.options.maxBounds);

  			this._offsetLimit = toBounds(
  				this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1),
  				this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1)
  					.add(this._map.getSize()));

  			this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
  		} else {
  			this._offsetLimit = null;
  		}

  		map
  		    .fire('movestart')
  		    .fire('dragstart');

  		if (map.options.inertia) {
  			this._positions = [];
  			this._times = [];
  		}
  	},

  	_onDrag: function (e) {
  		if (this._map.options.inertia) {
  			var time = this._lastTime = +new Date(),
  			    pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

  			this._positions.push(pos);
  			this._times.push(time);

  			this._prunePositions(time);
  		}

  		this._map
  		    .fire('move', e)
  		    .fire('drag', e);
  	},

  	_prunePositions: function (time) {
  		while (this._positions.length > 1 && time - this._times[0] > 50) {
  			this._positions.shift();
  			this._times.shift();
  		}
  	},

  	_onZoomEnd: function () {
  		var pxCenter = this._map.getSize().divideBy(2),
  		    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

  		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
  		this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
  	},

  	_viscousLimit: function (value, threshold) {
  		return value - (value - threshold) * this._viscosity;
  	},

  	_onPreDragLimit: function () {
  		if (!this._viscosity || !this._offsetLimit) { return; }

  		var offset = this._draggable._newPos.subtract(this._draggable._startPos);

  		var limit = this._offsetLimit;
  		if (offset.x < limit.min.x) { offset.x = this._viscousLimit(offset.x, limit.min.x); }
  		if (offset.y < limit.min.y) { offset.y = this._viscousLimit(offset.y, limit.min.y); }
  		if (offset.x > limit.max.x) { offset.x = this._viscousLimit(offset.x, limit.max.x); }
  		if (offset.y > limit.max.y) { offset.y = this._viscousLimit(offset.y, limit.max.y); }

  		this._draggable._newPos = this._draggable._startPos.add(offset);
  	},

  	_onPreDragWrap: function () {
  		// TODO refactor to be able to adjust map pane position after zoom
  		var worldWidth = this._worldWidth,
  		    halfWidth = Math.round(worldWidth / 2),
  		    dx = this._initialWorldOffset,
  		    x = this._draggable._newPos.x,
  		    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
  		    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
  		    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

  		this._draggable._absPos = this._draggable._newPos.clone();
  		this._draggable._newPos.x = newX;
  	},

  	_onDragEnd: function (e) {
  		var map = this._map,
  		    options = map.options,

  		    noInertia = !options.inertia || this._times.length < 2;

  		map.fire('dragend', e);

  		if (noInertia) {
  			map.fire('moveend');

  		} else {
  			this._prunePositions(+new Date());

  			var direction = this._lastPos.subtract(this._positions[0]),
  			    duration = (this._lastTime - this._times[0]) / 1000,
  			    ease = options.easeLinearity,

  			    speedVector = direction.multiplyBy(ease / duration),
  			    speed = speedVector.distanceTo([0, 0]),

  			    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
  			    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

  			    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
  			    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

  			if (!offset.x && !offset.y) {
  				map.fire('moveend');

  			} else {
  				offset = map._limitOffset(offset, map.options.maxBounds);

  				requestAnimFrame(function () {
  					map.panBy(offset, {
  						duration: decelerationDuration,
  						easeLinearity: ease,
  						noMoveStart: true,
  						animate: true
  					});
  				});
  			}
  		}
  	}
  });

  // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).
  Map.addInitHook('addHandler', 'dragging', Drag);

  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */

  // @namespace Map
  // @section Keyboard Navigation Options
  Map.mergeOptions({
  	// @option keyboard: Boolean = true
  	// Makes the map focusable and allows users to navigate the map with keyboard
  	// arrows and `+`/`-` keys.
  	keyboard: true,

  	// @option keyboardPanDelta: Number = 80
  	// Amount of pixels to pan when pressing an arrow key.
  	keyboardPanDelta: 80
  });

  var Keyboard = Handler.extend({

  	keyCodes: {
  		left:    [37],
  		right:   [39],
  		down:    [40],
  		up:      [38],
  		zoomIn:  [187, 107, 61, 171],
  		zoomOut: [189, 109, 54, 173]
  	},

  	initialize: function (map) {
  		this._map = map;

  		this._setPanDelta(map.options.keyboardPanDelta);
  		this._setZoomDelta(map.options.zoomDelta);
  	},

  	addHooks: function () {
  		var container = this._map._container;

  		// make the container focusable by tabbing
  		if (container.tabIndex <= 0) {
  			container.tabIndex = '0';
  		}

  		on(container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.on({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	removeHooks: function () {
  		this._removeHooks();

  		off(this._map._container, {
  			focus: this._onFocus,
  			blur: this._onBlur,
  			mousedown: this._onMouseDown
  		}, this);

  		this._map.off({
  			focus: this._addHooks,
  			blur: this._removeHooks
  		}, this);
  	},

  	_onMouseDown: function () {
  		if (this._focused) { return; }

  		var body = document.body,
  		    docEl = document.documentElement,
  		    top = body.scrollTop || docEl.scrollTop,
  		    left = body.scrollLeft || docEl.scrollLeft;

  		this._map._container.focus();

  		window.scrollTo(left, top);
  	},

  	_onFocus: function () {
  		this._focused = true;
  		this._map.fire('focus');
  	},

  	_onBlur: function () {
  		this._focused = false;
  		this._map.fire('blur');
  	},

  	_setPanDelta: function (panDelta) {
  		var keys = this._panKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.left.length; i < len; i++) {
  			keys[codes.left[i]] = [-1 * panDelta, 0];
  		}
  		for (i = 0, len = codes.right.length; i < len; i++) {
  			keys[codes.right[i]] = [panDelta, 0];
  		}
  		for (i = 0, len = codes.down.length; i < len; i++) {
  			keys[codes.down[i]] = [0, panDelta];
  		}
  		for (i = 0, len = codes.up.length; i < len; i++) {
  			keys[codes.up[i]] = [0, -1 * panDelta];
  		}
  	},

  	_setZoomDelta: function (zoomDelta) {
  		var keys = this._zoomKeys = {},
  		    codes = this.keyCodes,
  		    i, len;

  		for (i = 0, len = codes.zoomIn.length; i < len; i++) {
  			keys[codes.zoomIn[i]] = zoomDelta;
  		}
  		for (i = 0, len = codes.zoomOut.length; i < len; i++) {
  			keys[codes.zoomOut[i]] = -zoomDelta;
  		}
  	},

  	_addHooks: function () {
  		on(document, 'keydown', this._onKeyDown, this);
  	},

  	_removeHooks: function () {
  		off(document, 'keydown', this._onKeyDown, this);
  	},

  	_onKeyDown: function (e) {
  		if (e.altKey || e.ctrlKey || e.metaKey) { return; }

  		var key = e.keyCode,
  		    map = this._map,
  		    offset;

  		if (key in this._panKeys) {
  			if (!map._panAnim || !map._panAnim._inProgress) {
  				offset = this._panKeys[key];
  				if (e.shiftKey) {
  					offset = toPoint(offset).multiplyBy(3);
  				}

  				map.panBy(offset);

  				if (map.options.maxBounds) {
  					map.panInsideBounds(map.options.maxBounds);
  				}
  			}
  		} else if (key in this._zoomKeys) {
  			map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);

  		} else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
  			map.closePopup();

  		} else {
  			return;
  		}

  		stop(e);
  	}
  });

  // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.
  Map.addInitHook('addHandler', 'keyboard', Keyboard);

  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Mouse wheel options
  	// @option scrollWheelZoom: Boolean|String = true
  	// Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
  	// it will zoom to the center of the view regardless of where the mouse was.
  	scrollWheelZoom: true,

  	// @option wheelDebounceTime: Number = 40
  	// Limits the rate at which a wheel can fire (in milliseconds). By default
  	// user can't zoom via wheel more often than once per 40 ms.
  	wheelDebounceTime: 40,

  	// @option wheelPxPerZoomLevel: Number = 60
  	// How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
  	// mean a change of one full zoom level. Smaller values will make wheel-zooming
  	// faster (and vice versa).
  	wheelPxPerZoomLevel: 60
  });

  var ScrollWheelZoom = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'wheel', this._onWheelScroll, this);

  		this._delta = 0;
  	},

  	removeHooks: function () {
  		off(this._map._container, 'wheel', this._onWheelScroll, this);
  	},

  	_onWheelScroll: function (e) {
  		var delta = getWheelDelta(e);

  		var debounce = this._map.options.wheelDebounceTime;

  		this._delta += delta;
  		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

  		if (!this._startTime) {
  			this._startTime = +new Date();
  		}

  		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

  		clearTimeout(this._timer);
  		this._timer = setTimeout(bind(this._performZoom, this), left);

  		stop(e);
  	},

  	_performZoom: function () {
  		var map = this._map,
  		    zoom = map.getZoom(),
  		    snap = this._map.options.zoomSnap || 0;

  		map._stop(); // stop panning and fly animations if any

  		// map the delta with a sigmoid function to -4..4 range leaning on -1..1
  		var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
  		    d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
  		    d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
  		    delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;

  		this._delta = 0;
  		this._startTime = null;

  		if (!delta) { return; }

  		if (map.options.scrollWheelZoom === 'center') {
  			map.setZoom(zoom + delta);
  		} else {
  			map.setZoomAround(this._lastMousePos, zoom + delta);
  		}
  	}
  });

  // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.
  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);

  /*
   * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option tap: Boolean = true
  	// Enables mobile hacks for supporting instant taps (fixing 200ms click
  	// delay on iOS/Android) and touch holds (fired as `contextmenu` events).
  	tap: true,

  	// @option tapTolerance: Number = 15
  	// The max number of pixels a user can shift his finger during touch
  	// for it to be considered a valid tap.
  	tapTolerance: 15
  });

  var Tap = Handler.extend({
  	addHooks: function () {
  		on(this._map._container, 'touchstart', this._onDown, this);
  	},

  	removeHooks: function () {
  		off(this._map._container, 'touchstart', this._onDown, this);
  	},

  	_onDown: function (e) {
  		if (!e.touches) { return; }

  		preventDefault(e);

  		this._fireClick = true;

  		// don't simulate click or track longpress if more than 1 touch
  		if (e.touches.length > 1) {
  			this._fireClick = false;
  			clearTimeout(this._holdTimeout);
  			return;
  		}

  		var first = e.touches[0],
  		    el = first.target;

  		this._startPos = this._newPos = new Point(first.clientX, first.clientY);

  		// if touching a link, highlight it
  		if (el.tagName && el.tagName.toLowerCase() === 'a') {
  			addClass(el, 'leaflet-active');
  		}

  		// simulate long hold but setting a timeout
  		this._holdTimeout = setTimeout(bind(function () {
  			if (this._isTapValid()) {
  				this._fireClick = false;
  				this._onUp();
  				this._simulateEvent('contextmenu', first);
  			}
  		}, this), 1000);

  		this._simulateEvent('mousedown', first);

  		on(document, {
  			touchmove: this._onMove,
  			touchend: this._onUp
  		}, this);
  	},

  	_onUp: function (e) {
  		clearTimeout(this._holdTimeout);

  		off(document, {
  			touchmove: this._onMove,
  			touchend: this._onUp
  		}, this);

  		if (this._fireClick && e && e.changedTouches) {

  			var first = e.changedTouches[0],
  			    el = first.target;

  			if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
  				removeClass(el, 'leaflet-active');
  			}

  			this._simulateEvent('mouseup', first);

  			// simulate click if the touch didn't move too much
  			if (this._isTapValid()) {
  				this._simulateEvent('click', first);
  			}
  		}
  	},

  	_isTapValid: function () {
  		return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
  	},

  	_onMove: function (e) {
  		var first = e.touches[0];
  		this._newPos = new Point(first.clientX, first.clientY);
  		this._simulateEvent('mousemove', first);
  	},

  	_simulateEvent: function (type, e) {
  		var simulatedEvent = document.createEvent('MouseEvents');

  		simulatedEvent._simulated = true;
  		e.target._simulatedClick = true;

  		simulatedEvent.initMouseEvent(
  		        type, true, true, window, 1,
  		        e.screenX, e.screenY,
  		        e.clientX, e.clientY,
  		        false, false, false, false, 0, null);

  		e.target.dispatchEvent(simulatedEvent);
  	}
  });

  // @section Handlers
  // @property tap: Handler
  // Mobile touch hacks (quick tap and touch hold) handler.
  if (touch && (!pointer || safari)) {
  	Map.addInitHook('addHandler', 'tap', Tap);
  }

  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */

  // @namespace Map
  // @section Interaction Options
  Map.mergeOptions({
  	// @section Touch interaction options
  	// @option touchZoom: Boolean|String = *
  	// Whether the map can be zoomed by touch-dragging with two fingers. If
  	// passed `'center'`, it will zoom to the center of the view regardless of
  	// where the touch events (fingers) were. Enabled for touch-capable web
  	// browsers except for old Androids.
  	touchZoom: touch && !android23,

  	// @option bounceAtZoomLimits: Boolean = true
  	// Set it to false if you don't want the map to zoom beyond min/max zoom
  	// and then bounce back when pinch-zooming.
  	bounceAtZoomLimits: true
  });

  var TouchZoom = Handler.extend({
  	addHooks: function () {
  		addClass(this._map._container, 'leaflet-touch-zoom');
  		on(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	removeHooks: function () {
  		removeClass(this._map._container, 'leaflet-touch-zoom');
  		off(this._map._container, 'touchstart', this._onTouchStart, this);
  	},

  	_onTouchStart: function (e) {
  		var map = this._map;
  		if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

  		var p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]);

  		this._centerPoint = map.getSize()._divideBy(2);
  		this._startLatLng = map.containerPointToLatLng(this._centerPoint);
  		if (map.options.touchZoom !== 'center') {
  			this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
  		}

  		this._startDist = p1.distanceTo(p2);
  		this._startZoom = map.getZoom();

  		this._moved = false;
  		this._zooming = true;

  		map._stop();

  		on(document, 'touchmove', this._onTouchMove, this);
  		on(document, 'touchend', this._onTouchEnd, this);

  		preventDefault(e);
  	},

  	_onTouchMove: function (e) {
  		if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

  		var map = this._map,
  		    p1 = map.mouseEventToContainerPoint(e.touches[0]),
  		    p2 = map.mouseEventToContainerPoint(e.touches[1]),
  		    scale = p1.distanceTo(p2) / this._startDist;

  		this._zoom = map.getScaleZoom(scale, this._startZoom);

  		if (!map.options.bounceAtZoomLimits && (
  			(this._zoom < map.getMinZoom() && scale < 1) ||
  			(this._zoom > map.getMaxZoom() && scale > 1))) {
  			this._zoom = map._limitZoom(this._zoom);
  		}

  		if (map.options.touchZoom === 'center') {
  			this._center = this._startLatLng;
  			if (scale === 1) { return; }
  		} else {
  			// Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
  			var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
  			if (scale === 1 && delta.x === 0 && delta.y === 0) { return; }
  			this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
  		}

  		if (!this._moved) {
  			map._moveStart(true, false);
  			this._moved = true;
  		}

  		cancelAnimFrame(this._animRequest);

  		var moveFn = bind(map._move, map, this._center, this._zoom, {pinch: true, round: false});
  		this._animRequest = requestAnimFrame(moveFn, this, true);

  		preventDefault(e);
  	},

  	_onTouchEnd: function () {
  		if (!this._moved || !this._zooming) {
  			this._zooming = false;
  			return;
  		}

  		this._zooming = false;
  		cancelAnimFrame(this._animRequest);

  		off(document, 'touchmove', this._onTouchMove, this);
  		off(document, 'touchend', this._onTouchEnd, this);

  		// Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
  		if (this._map.options.zoomAnimation) {
  			this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
  		} else {
  			this._map._resetView(this._center, this._map._limitZoom(this._zoom));
  		}
  	}
  });

  // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.
  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);

  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.Tap = Tap;
  Map.TouchZoom = TouchZoom;

  exports.version = version;
  exports.Control = Control;
  exports.control = control;
  exports.Browser = Browser;
  exports.Evented = Evented;
  exports.Mixin = Mixin;
  exports.Util = Util;
  exports.Class = Class;
  exports.Handler = Handler;
  exports.extend = extend;
  exports.bind = bind;
  exports.stamp = stamp;
  exports.setOptions = setOptions;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.PosAnimation = PosAnimation;
  exports.Draggable = Draggable;
  exports.LineUtil = LineUtil;
  exports.PolyUtil = PolyUtil;
  exports.Point = Point;
  exports.point = toPoint;
  exports.Bounds = Bounds;
  exports.bounds = toBounds;
  exports.Transformation = Transformation;
  exports.transformation = toTransformation;
  exports.Projection = index;
  exports.LatLng = LatLng;
  exports.latLng = toLatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.latLngBounds = toLatLngBounds;
  exports.CRS = CRS;
  exports.GeoJSON = GeoJSON;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.layerGroup = layerGroup;
  exports.FeatureGroup = FeatureGroup;
  exports.featureGroup = featureGroup;
  exports.ImageOverlay = ImageOverlay;
  exports.imageOverlay = imageOverlay;
  exports.VideoOverlay = VideoOverlay;
  exports.videoOverlay = videoOverlay;
  exports.SVGOverlay = SVGOverlay;
  exports.svgOverlay = svgOverlay;
  exports.DivOverlay = DivOverlay;
  exports.Popup = Popup;
  exports.popup = popup;
  exports.Tooltip = Tooltip;
  exports.tooltip = tooltip;
  exports.Icon = Icon;
  exports.icon = icon;
  exports.DivIcon = DivIcon;
  exports.divIcon = divIcon;
  exports.Marker = Marker;
  exports.marker = marker;
  exports.TileLayer = TileLayer;
  exports.tileLayer = tileLayer;
  exports.GridLayer = GridLayer;
  exports.gridLayer = gridLayer;
  exports.SVG = SVG;
  exports.svg = svg$1;
  exports.Renderer = Renderer;
  exports.Canvas = Canvas;
  exports.canvas = canvas$1;
  exports.Path = Path;
  exports.CircleMarker = CircleMarker;
  exports.circleMarker = circleMarker;
  exports.Circle = Circle;
  exports.circle = circle;
  exports.Polyline = Polyline;
  exports.polyline = polyline;
  exports.Polygon = Polygon;
  exports.polygon = polygon;
  exports.Rectangle = Rectangle;
  exports.rectangle = rectangle;
  exports.Map = Map;
  exports.map = createMap;

  var oldL = window.L;
  exports.noConflict = function() {
  	window.L = oldL;
  	return this;
  }

  // Always export us to window global (see #2364)
  window.L = exports;

})));
//# sourceMappingURL=leaflet-src.js.map


/***/ }),

/***/ "6aoV":
/*!**********************************************************************!*\
  !*** ./src/app/view/shop/shop-item/geocoding/geocoding.component.ts ***!
  \**********************************************************************/
/*! exports provided: GeocodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodingComponent", function() { return GeocodingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/component */ "P/fe");
/* harmony import */ var src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/sticky/modules/maps/nominatim.service */ "LFOW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["form"];
class GeocodingComponent extends src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"] {
    constructor(nominatimService) {
        super();
        this.nominatimService = nominatimService;
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.locationSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addressLookup(address) {
        if (address.length > 3) {
            this.nominatimService.addressLookup(address).subscribe(results => {
                this.searchResults = results;
            });
        }
        else {
            this.searchResults = [];
        }
        this.onSearch.emit(this.searchResults);
    }
    addressLookupCoordinates() {
        if (this.form) {
            if (!this.validateForm(this.form, 'map')) {
                return;
            }
            if (this.form.form.dirty) {
                this.nominatimService.addressLookupCoordinates(this.lat, this.lon).subscribe(results => {
                    this.searchResult = results;
                    console.log(results);
                });
            }
            else {
                this.searchResult = undefined;
            }
            this.onSearch.emit(this.searchResults);
        }
    }
}
GeocodingComponent.ɵfac = function GeocodingComponent_Factory(t) { return new (t || GeocodingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_2__["NominatimService"])); };
GeocodingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeocodingComponent, selectors: [["app-geocoding"]], viewQuery: function GeocodingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, outputs: { onSearch: "onSearch", locationSelect: "locationSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [["autocomplete", "off", "id", "map"], ["form", "ngForm"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["type", "number", "name", "lat", "required", "", "autofocus", "", 1, "form-control", 3, "placeholder", "ngModel", "click", "ngModelChange"], ["type", "number", "name", "lon", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "click", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function GeocodingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeocodingComponent_Template_input_click_8_listener($event) { return $event.stopPropagation(); })("ngModelChange", function GeocodingComponent_Template_input_ngModelChange_8_listener($event) { return ctx.lat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeocodingComponent_Template_input_click_12_listener($event) { return $event.stopPropagation(); })("ngModelChange", function GeocodingComponent_Template_input_ngModelChange_12_listener($event) { return ctx.lon = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeocodingComponent_Template_button_click_13_listener() { return ctx.addressLookupCoordinates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Shop add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lon);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".address-lookup[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2NvZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQiIsImZpbGUiOiJnZW9jb2RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLWxvb2t1cCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"] });


/***/ }),

/***/ "76mz":
/*!************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/osm-result/osm-result.component.ts ***!
  \************************************************************************/
/*! exports provided: OsmResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsmResultComponent", function() { return OsmResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OsmResultComponent {
    constructor() { }
    ngOnInit() {
    }
}
OsmResultComponent.ɵfac = function OsmResultComponent_Factory(t) { return new (t || OsmResultComponent)(); };
OsmResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OsmResultComponent, selectors: [["app-osm-result"]], decls: 2, vars: 0, template: function OsmResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "osm-result works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvc20tcmVzdWx0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "7Fxh":
/*!****************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/shop-osm-api/shop-osm-api.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShopOsmApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopOsmApiComponent", function() { return ShopOsmApiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.component */ "kQ1R");


class ShopOsmApiComponent {
}
ShopOsmApiComponent.ɵfac = function ShopOsmApiComponent_Factory(t) { return new (t || ShopOsmApiComponent)(); };
ShopOsmApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopOsmApiComponent, selectors: [["app-shop-osm-api"]], decls: 1, vars: 0, template: function ShopOsmApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map");
    } }, directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], styles: ["#hotel_map[_ngcontent-%COMP%]{\n    height: 400px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Atb3NtLWFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzaG9wLW9zbS1hcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob3RlbF9tYXB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "9ns6":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(self,(function(){return function(){var e=[,function(e){const t="api.tomtom.com";e.exports={"sdk.name":"MapsWebSDK","sdk.version":"6.13.0","sdk.examples.version":"SDK-${version}","analytics.header.name":"TomTom-User-Agent","analytics.header.sdkName":"MapsWebSDK","endpoints.copyrightsWorld":"".concat(t,"/map/1/copyrights.{contentType}"),"endpoints.copyrightsBounds":"".concat(t,"/map/1/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{contentType}"),"endpoints.copyrightsZoom":"".concat(t,"/map/1/copyrights/{zoom}/{x}/{y}.{contentType}"),"endpoints.caption":"".concat(t,"/map/1/copyrights/caption.{contentType}"),"endpoints.geocode":"".concat(t,"/search/2/geocode/{query}.{contentType}"),"endpoints.structuredGeocode":"".concat(t,"/search/2/structuredGeocode.{contentType}"),"endpoints.search":"".concat(t,"/search/2/{type}/{query}.{contentType}"),"endpoints.nearbySearch":"".concat(t,"/search/2/nearbySearch/.{contentType}"),"endpoints.batchNearbySearchQuery":"/{type}/.{contentType}","endpoints.batchSearch":"".concat(t,"/search/2/batch.{contentType}"),"endpoints.batchSyncSearch":"".concat(t,"/search/2/batch/sync.{contentType}"),"endpoints.batchSearchQuery":"/{type}/{query}.{contentType}","endpoints.batchStructuredGeocodeQuery":"/structuredGeocode.{contentType}","endpoints.adp":"".concat(t,"/search/2/additionalData.{contentType}"),"endpoints.batchAdpQuery":"/additionalData.{contentType}","endpoints.reverseGeocode":"".concat(t,"/search/2/{type}/{position}.{contentType}"),"endpoints.batchReverseGeocodeQuery":"/{type}/{position}.{contentType}","endpoints.autocomplete":"".concat(t,"/search/2/autocomplete/{query}.{contentType}"),"endpoints.poiCategories":"".concat(t,"/search/2/poiCategories.{contentType}"),"endpoints.chargingAvailability":"".concat(t,"/search/2/chargingAvailability.{contentType}"),"endpoints.batchChargingAvailabilityQuery":"/chargingAvailability.{contentType}","endpoints.poiDetails":"".concat(t,"/search/2/poiDetails.{contentType}"),"endpoints.poiPhotos":"".concat(t,"/search/2/poiPhoto"),"endpoints.placeById":"".concat(t,"/search/2/place.{contentType}"),"endpoints.incidentDetails":"".concat(t,"/traffic/services/4/incidentDetails/{style}/{minLat},{minLon},{maxLat},{maxLon}/{zoom}/{trafficModelID}/{contentType}"),"endpoints.incidentDetailsV5":"".concat(t,"/traffic/services/5/incidentDetails"),"endpoints.incidentViewport":"".concat(t,"/traffic/services/4/incidentViewport/0,0,.1,.1/0/0,0,.1,.1/0/false/{contentType}"),"endpoints.flowSegmentData":"".concat(t,"/traffic/services/4/flowSegmentData/{style}/{zoom}/{contentType}"),"endpoints.incidentRegions":"".concat(t,"/traffic/services/4/incidentRegions/{contentType}"),"endpoints.rasterTrafficIncidentTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/incidents/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"),"endpoints.vectorTrafficIncidentTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf"),"endpoints.rasterTrafficFlowTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.png"),"endpoints.vectorTrafficFlowTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.pbf"),"endpoints.tileLayer":"{s}.".concat(t,"/map/1/tile/{layer}/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"),"endpoints.wmsLayer":"{s}.".concat(t,"/map/1/wms/?service=WMS&version=1.1.1&request=GetMap&bbox={bbox-epsg-3857}&srs=EPSG:3857&width=512&height=512&layers=basic&styles=&format={format}"),"endpoints.vectorTileLayer":"{s}.".concat(t,"/map/1/tile/{layer}/{style}/{z}/{x}/{y}.pbf"),"endpoints.routing":"".concat(t,"/routing/1/calculateRoute/{locations}/{contentType}"),"endpoints.calculateReachableRange":"".concat(t,"/routing/1/calculateReachableRange/{origin}/{contentType}"),"endpoints.batchRouting":"".concat(t,"/routing/1/batch/{contentType}"),"endpoints.batchSyncRouting":"".concat(t,"/routing/1/batch/sync/{contentType}"),"endpoints.batchRoutingQuery":"/calculateRoute/{locations}/{contentType}","endpoints.batchReachableRangeQuery":"/calculateReachableRange/{origin}/{contentType}","endpoints.matrixRouting":"".concat(t,"/routing/1/matrix/{contentType}"),"endpoints.matrixSyncRouting":"".concat(t,"/routing/1/matrix/sync/{contentType}"),"endpoints.longDistanceEVRouting":"".concat(t,"/routing/1/calculateLongDistanceEVRoute/{locations}/{contentType}"),"endpoints.staticImage":"https://".concat(t,"/map/1/staticimage"),"vector.glyphs":"https://"+t+"/maps-sdk-js/6.13.0/glyphs/{fontstack}/{range}.pbf","vector.sprites":"https://"+t+"/maps-sdk-js/6.13.0/sprites/sprite","endpoints.styles":"https://".concat(t,"/style/1/style/{version}?map=basic_main&traffic_incidents=incidents_day&traffic_flow=flow_relative0&poi=poi_main"),origin:t,hostedStylesVersion:"21.1.0-*"}},function(e,t,n){var r=n(3),o=n(9);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){var r=n(4),o=n(7),a=n(8),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},function(e,t,n){var r=n(5).Symbol;e.exports=r},function(e,t,n){var r=n(6),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},function(e,t,n){var r=n(4),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(3),o=n(11),a=n(12);e.exports=function(e){return"string"==typeof e||!o(e)&&a(e)&&"[object String]"==r(e)}},function(e){var t=Array.isArray;e.exports=t},function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e){e.exports=function(e){return null==e}},function(e,t,n){var r=n(15);e.exports=function(e){return"number"==typeof e&&e==r(e)}},function(e,t,n){var r=n(16);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},function(e,t,n){var r=n(17),o=1/0;e.exports=function(e){return e?(e=r(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},function(e,t,n){var r=n(9),o=n(18),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}},function(e,t,n){var r=n(3),o=n(12);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},function(e,t,n){var r=n(20),o=n(21);e.exports=function(e,t){return null!=e&&o(e,t,r)}},function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},function(e,t,n){var r=n(22),o=n(60),a=n(11),i=n(62),s=n(63),c=n(64);e.exports=function(e,t,n){for(var l=-1,u=(t=r(t,e)).length,p=!1;++l<u;){var d=c(t[l]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++l!=u?p:!!(u=null==e?0:e.length)&&s(u)&&i(d,u)&&(a(e)||o(e))}},function(e,t,n){var r=n(11),o=n(23),a=n(24),i=n(57);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},function(e,t,n){var r=n(11),o=n(18),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},function(e,t,n){var r=n(25),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},function(e,t,n){var r=n(26);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},function(e,t,n){var r=n(27);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},function(e,t,n){var r=n(28),o=n(51),a=n(54),i=n(55),s=n(56);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e,t,n){var r=n(29),o=n(42),a=n(50);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t,n){var r=n(30),o=n(38),a=n(39),i=n(40),s=n(41);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e,t,n){var r=n(31);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(32)(Object,"create");e.exports=r},function(e,t,n){var r=n(33),o=n(37);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(2),o=n(34),a=n(9),i=n(36),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,p=l.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?d:s).test(i(e))}},function(e,t,n){var r,o=n(35),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(5)["__core-js_shared__"];e.exports=r},function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(31),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(31),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(31);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,n){var r=n(43),o=n(44),a=n(47),i=n(48),s=n(49);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(45),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(46);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(45);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(45);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(45);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(32)(n(5),"Map");e.exports=r},function(e,t,n){var r=n(52);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t,n){var r=n(53);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(52);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(52);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(52);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t,n){var r=n(58);e.exports=function(e){return null==e?"":r(e)}},function(e,t,n){var r=n(4),o=n(59),a=n(11),i=n(18),s=r?r.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},function(e,t,n){var r=n(61),o=n(12),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(3),o=n(12);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,n){var r=n(18);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return p.default}});var r=d(n(66)),o=d(n(71)),a=d(n(75)),i=d(n(76)),s=d(n(78)),c=d(n(79)),l=d(n(69)),u=d(n(68)),p=d(n(73));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67)),o=a(n(68));function a(e){return e&&e.__esModule?e:{default:e}}let i,s,c=0,l=0;var u=function(e,t,n){let a=t&&n||0;const u=t||new Array(16);let p=(e=e||{}).node||i,d=void 0!==e.clockseq?e.clockseq:s;if(null==p||null==d){const t=e.random||(e.rng||r.default)();null==p&&(p=i=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==d&&(d=s=16383&(t[6]<<8|t[7]))}let f=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:l+1;const y=f-c+(h-l)/1e4;if(y<0&&void 0===e.clockseq&&(d=d+1&16383),(y<0||f>c)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=f,l=h,s=d,f+=122192928e5;const v=(1e4*(268435455&f)+h)%4294967296;u[a++]=v>>>24&255,u[a++]=v>>>16&255,u[a++]=v>>>8&255,u[a++]=255&v;const g=f/4294967296*1e4&268435455;u[a++]=g>>>8&255,u[a++]=255&g,u[a++]=g>>>24&15|16,u[a++]=g>>>16&255,u[a++]=d>>>8|128,u[a++]=255&d;for(let e=0;e<6;++e)u[a+e]=p[e];return t||(0,o.default)(u)};t.default=u},function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)};const r=new Uint8Array(16)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).substr(1));var i=function(e,t=0){const n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!(0,o.default)(n))throw TypeError("Stringified UUID is invalid");return n};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(70))&&r.__esModule?r:{default:r};var a=function(e){return"string"==typeof e&&o.default.test(e)};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(72)),o=a(n(74));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)("v3",48,o.default);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){function a(e,a,i,s){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof a&&(a=(0,o.default)(a)),16!==a.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+e.length);if(c.set(a),c.set(e,a.length),c=n(c),c[6]=15&c[6]|t,c[8]=63&c[8]|128,i){s=s||0;for(let e=0;e<16;++e)i[s+e]=c[e];return i}return(0,r.default)(c)}try{a.name=e}catch(e){}return a.DNS=i,a.URL=s,a},t.URL=t.DNS=void 0;var r=a(n(68)),o=a(n(73));function a(e){return e&&e.__esModule?e:{default:e}}const i="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=i;const s="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};var a=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};t.default=a},function(e,t){"use strict";function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,n,o,a,i){return r((s=r(r(t,e),r(o,i)))<<(c=a)|s>>>32-c,n);var s,c}function a(e,t,n,r,a,i,s){return o(t&n|~t&r,e,t,a,i,s)}function i(e,t,n,r,a,i,s){return o(t&r|n&~r,e,t,a,i,s)}function s(e,t,n,r,a,i,s){return o(t^n^r,e,t,a,i,s)}function c(e,t,n,r,a,i,s){return o(n^(t|~r),e,t,a,i,s)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,r="0123456789abcdef";for(let o=0;o<n;o+=8){const n=e[o>>5]>>>o%32&255,a=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let o=1732584193,l=-271733879,u=-1732584194,p=271733878;for(let t=0;t<e.length;t+=16){const n=o,d=l,f=u,h=p;o=a(o,l,u,p,e[t],7,-680876936),p=a(p,o,l,u,e[t+1],12,-389564586),u=a(u,p,o,l,e[t+2],17,606105819),l=a(l,u,p,o,e[t+3],22,-1044525330),o=a(o,l,u,p,e[t+4],7,-176418897),p=a(p,o,l,u,e[t+5],12,1200080426),u=a(u,p,o,l,e[t+6],17,-1473231341),l=a(l,u,p,o,e[t+7],22,-45705983),o=a(o,l,u,p,e[t+8],7,1770035416),p=a(p,o,l,u,e[t+9],12,-1958414417),u=a(u,p,o,l,e[t+10],17,-42063),l=a(l,u,p,o,e[t+11],22,-1990404162),o=a(o,l,u,p,e[t+12],7,1804603682),p=a(p,o,l,u,e[t+13],12,-40341101),u=a(u,p,o,l,e[t+14],17,-1502002290),l=a(l,u,p,o,e[t+15],22,1236535329),o=i(o,l,u,p,e[t+1],5,-165796510),p=i(p,o,l,u,e[t+6],9,-1069501632),u=i(u,p,o,l,e[t+11],14,643717713),l=i(l,u,p,o,e[t],20,-373897302),o=i(o,l,u,p,e[t+5],5,-701558691),p=i(p,o,l,u,e[t+10],9,38016083),u=i(u,p,o,l,e[t+15],14,-660478335),l=i(l,u,p,o,e[t+4],20,-405537848),o=i(o,l,u,p,e[t+9],5,568446438),p=i(p,o,l,u,e[t+14],9,-1019803690),u=i(u,p,o,l,e[t+3],14,-187363961),l=i(l,u,p,o,e[t+8],20,1163531501),o=i(o,l,u,p,e[t+13],5,-1444681467),p=i(p,o,l,u,e[t+2],9,-51403784),u=i(u,p,o,l,e[t+7],14,1735328473),l=i(l,u,p,o,e[t+12],20,-1926607734),o=s(o,l,u,p,e[t+5],4,-378558),p=s(p,o,l,u,e[t+8],11,-2022574463),u=s(u,p,o,l,e[t+11],16,1839030562),l=s(l,u,p,o,e[t+14],23,-35309556),o=s(o,l,u,p,e[t+1],4,-1530992060),p=s(p,o,l,u,e[t+4],11,1272893353),u=s(u,p,o,l,e[t+7],16,-155497632),l=s(l,u,p,o,e[t+10],23,-1094730640),o=s(o,l,u,p,e[t+13],4,681279174),p=s(p,o,l,u,e[t],11,-358537222),u=s(u,p,o,l,e[t+3],16,-722521979),l=s(l,u,p,o,e[t+6],23,76029189),o=s(o,l,u,p,e[t+9],4,-640364487),p=s(p,o,l,u,e[t+12],11,-421815835),u=s(u,p,o,l,e[t+15],16,530742520),l=s(l,u,p,o,e[t+2],23,-995338651),o=c(o,l,u,p,e[t],6,-198630844),p=c(p,o,l,u,e[t+7],10,1126891415),u=c(u,p,o,l,e[t+14],15,-1416354905),l=c(l,u,p,o,e[t+5],21,-57434055),o=c(o,l,u,p,e[t+12],6,1700485571),p=c(p,o,l,u,e[t+3],10,-1894986606),u=c(u,p,o,l,e[t+10],15,-1051523),l=c(l,u,p,o,e[t+1],21,-2054922799),o=c(o,l,u,p,e[t+8],6,1873313359),p=c(p,o,l,u,e[t+15],10,-30611744),u=c(u,p,o,l,e[t+6],15,-1560198380),l=c(l,u,p,o,e[t+13],21,1309151649),o=c(o,l,u,p,e[t+4],6,-145523070),p=c(p,o,l,u,e[t+11],10,-1120210379),u=c(u,p,o,l,e[t+2],15,718787259),l=c(l,u,p,o,e[t+9],21,-343485551),o=r(o,n),l=r(l,d),u=r(u,f),p=r(p,h)}return[o,l,u,p]}(function(e){if(0===e.length)return[];const t=8*e.length,r=new Uint32Array(n(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67)),o=a(n(68));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t,n){const a=(e=e||{}).random||(e.rng||r.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return(0,o.default)(a)};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(72)),o=a(n(77));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)("v5",80,o.default);t.default=i},function(e,t){"use strict";function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const a=e.length/4+2,i=Math.ceil(a/16),s=new Array(i);for(let t=0;t<i;++t){const n=new Uint32Array(16);for(let r=0;r<16;++r)n[r]=e[64*t+4*r]<<24|e[64*t+4*r+1]<<16|e[64*t+4*r+2]<<8|e[64*t+4*r+3];s[t]=n}s[i-1][14]=8*(e.length-1)/Math.pow(2,32),s[i-1][14]=Math.floor(s[i-1][14]),s[i-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<i;++e){const a=new Uint32Array(80);for(let t=0;t<16;++t)a[t]=s[e][t];for(let e=16;e<80;++e)a[e]=r(a[e-3]^a[e-8]^a[e-14]^a[e-16],1);let i=o[0],c=o[1],l=o[2],u=o[3],p=o[4];for(let e=0;e<80;++e){const o=Math.floor(e/20),s=r(i,5)+n(o,c,l,u)+p+t[o]+a[e]>>>0;p=u,u=l,l=r(c,30)>>>0,c=i,i=s}o[0]=o[0]+i>>>0,o[1]=o[1]+c>>>0,o[2]=o[2]+l>>>0,o[3]=o[3]+u>>>0,o[4]=o[4]+p>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="00000000-0000-0000-0000-000000000000"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};var a=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)};t.default=a},function(e){e.exports=function(e){return void 0===e}},function(e,t,n){var r=n(82),o=n(86),a=n(60),i=n(11),s=n(91),c=n(92),l=n(83),u=n(94),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||a(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}},function(e,t,n){var r=n(83),o=n(84),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},function(e,t,n){var r=n(85)(Object.keys,Object);e.exports=r},function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(87),o=n(50),a=n(88),i=n(89),s=n(90),c=n(3),l=n(36),u="[object Map]",p="[object Promise]",d="[object Set]",f="[object WeakMap]",h="[object DataView]",y=l(r),v=l(o),g=l(a),m=l(i),b=l(s),w=c;(r&&w(new r(new ArrayBuffer(1)))!=h||o&&w(new o)!=u||a&&w(a.resolve())!=p||i&&w(new i)!=d||s&&w(new s)!=f)&&(w=function(e){var t=c(e),n="[object Object]"==t?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case y:return h;case v:return u;case g:return p;case m:return d;case b:return f}return t}),e.exports=w},function(e,t,n){var r=n(32)(n(5),"DataView");e.exports=r},function(e,t,n){var r=n(32)(n(5),"Promise");e.exports=r},function(e,t,n){var r=n(32)(n(5),"Set");e.exports=r},function(e,t,n){var r=n(32)(n(5),"WeakMap");e.exports=r},function(e,t,n){var r=n(2),o=n(63);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){e=n.nmd(e);var r=n(5),o=n(93),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;e.exports=c},function(e){e.exports=function(){return!1}},function(e,t,n){var r=n(95),o=n(96),a=n(97),i=a&&a.isTypedArray,s=i?o(i):r;e.exports=s},function(e,t,n){var r=n(3),o=n(63),a=n(12),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){e=n.nmd(e);var r=n(6),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,s=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},function(e,t,n){var r=n(11);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},function(e,t,n){var r=n(100);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},function(e,t,n){var r=n(101),o=n(102);e.exports=function e(t,n,a,i,s){var c=-1,l=t.length;for(a||(a=o),s||(s=[]);++c<l;){var u=t[c];n>0&&a(u)?n>1?e(u,n-1,a,i,s):r(s,u):i||(s[s.length]=u)}return s}},function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(4),o=n(60),a=n(11),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}}],t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var r={};return function(){"use strict";n.r(r),n.d(r,{default:function(){return ti}});var e={};n.r(e),n.d(e,{additionalData:function(){return yr},alongRouteSearch:function(){return Ur},autocomplete:function(){return jo},categorySearch:function(){return lo},crossStreetLookup:function(){return Zo},evChargingStationsAvailability:function(){return po},fuzzySearch:function(){return ho},geocode:function(){return Ko},geometrySearch:function(){return vo},nearbySearch:function(){return mo},placeById:function(){return wo},poiCategories:function(){return Po},poiDetails:function(){return So},poiPhotos:function(){return xo},poiSearch:function(){return Io},reverseGeocode:function(){return zo},structuredGeocode:function(){return Xo}});var t={};n.r(t),n.d(t,{calculateReachableRange:function(){return oa},calculateRoute:function(){return fa},longDistanceEVRouting:function(){return va},matrixRouting:function(){return _a}});var o={};n.r(o),n.d(o,{incidentDetails:function(){return Na},incidentDetailsV5:function(){return Wa},incidentViewport:function(){return Oa},trafficFlowSegmentData:function(){return Aa}});var a={};n.r(a),n.d(a,{copyrights:function(){return $a},copyrightsCaption:function(){return Xa},staticImage:function(){return Ka}});var i=n(1),s=n.n(i);const c=s()["analytics.header.sdkName"]+"/"+s()["sdk.version"],l=s()["analytics.header.name"],u=()=>(n.g.__tomtomAnalyticsInfo_=n.g.__tomtomAnalyticsInfo_?n.g.__tomtomAnalyticsInfo_:{},n.g.__tomtomAnalyticsInfo_),p=()=>{const e=void 0!==u().productInfo?" "+u().productInfo:"";return c+e},d=()=>{const e={};return e[l]=p(),e},f="EXTENDED_SEARCH",h="MAP",y="ROUTING",v="SEARCH",g="TRAFFIC_FLOW",m="TRAFFIC_INCIDENTS";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){return"number"==typeof e&&isFinite(e)}function O(e){return null!=e&&!function(e){return e!=e}(e)}function S(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Array.isArray(e[n])?t[n]=e[n].slice(0):"object"==typeof e[n]?(t[n]={},S(e[n],t[n])):t[n]=e[n])}function E(e,t,n){var r;e[t]=void 0===(r=e[t])?{}:r;for(const r in n[t])Object.prototype.hasOwnProperty.call(n[t],r)&&(e[t][r]=n[t][r])}function x(e,t){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function T(e,t,n){if(-1===t.indexOf(e))throw new TypeError(n);return e}function I(e){if("string"!=typeof e)return{};let t=-1;const n=new RegExp("[a-zA-Z]");return function r(o){let a={},i="";for(;++t<e.length;){const s=e.charAt(t);switch(s){case"}":return""!==i&&(a[i]=!0),a;case"{":""===i?o?a=r():r():(a[i]=r(),i="");break;case",":""!==i&&(a[i]=!0),i="";break;default:n.test(s)&&(i+=s)}}return""!==i&&(a[i]=!0),a}(!0)}function A(e){const t={};return S(e,t),t}const j=/(-?\d+(?:\.\d+)?)(?:\s+|\s*,\s*)(-?\d+(?:\.\d+)?)/,k=/circle\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d+)\)/;function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=w({},t);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&E(n,t,e);return n}var L=n(2),R=n.n(L),D=n(10),V=n.n(D),M=n(13),F=n.n(M),U=n(14),N=n.n(U);const B={"af-ZA":{synonyms:{af:null,afr:null,"af-za":null,af_za:null,afrikaans:null},label:"Afrikaans"},ar:{synonyms:{ar:null,ara:null,"ar-ar":null,ar_ar:null,arabic:null},label:"Arabic"},"bg-BG":{synonyms:{bg:null,bul:null,"bg-bg":null,bg_bg:null,bulgarian:null},label:"Bulgarian"},"ca-ES":{synonyms:{ca:null,cat:null,"ca-fr":null,ca_fr:null,"ca-es":null,ca_es:null,catalan:null},label:"Catalan"},"zh-CN":{synonyms:{"zh-cn":null,zh_cn:null},label:"Chinese (PRC)"},"zh-TW":{synonyms:{zh:null,chi:null,"zh-tw":null,zh_tw:null,chinese:null},label:"Chinese (Taiwan)"},"cs-CZ":{synonyms:{cs:null,cz:null,cze:null,"cs-cz":null,cs_cz:null,czech:null},label:"Czech"},"da-DK":{synonyms:{da:null,dan:null,"da-dk":null,da_dk:null,danish:null},label:"Danish"},"nl-BE":{synonyms:{"nl-be":null,nl_be:null,"dutch belgium":null},label:"Dutch (Belgium)"},"nl-NL":{synonyms:{nl:null,dut:null,"nl-nl":null,nl_nl:null,dutch:null},label:"Dutch"},"en-AU":{synonyms:{aue:null,aus:null,"en-au":null,en_au:null,"english au":null},label:"English (Australia)"},"en-GB":{synonyms:{en:null,eng:null,"en-gb":null,en_gb:null,english:null,default:null},label:"English (Great Britain)"},"en-NZ":{synonyms:{"en-nz":null,en_nz:null,"english new zealand":null},label:"English (New Zealand)"},"en-US":{synonyms:{us:null,ame:null,"en-us":null,en_us:null,"english us":null},label:"English (US)"},"et-EE":{synonyms:{"et-ee":null,et_ee:null,estonian:null},label:"Estonian"},"eu-ES":{synonyms:{"eu-es":null,eu_es:null,basque:null},label:"Basque (Spain)"},"fi-FI":{synonyms:{fi:null,fin:null,"fi-fi":null,fi_fi:null,finnish:null},label:"Finnish"},"fr-CA":{synonyms:{"fr-ca":null,fr_ca:null,"french canadian":null},label:"French (Canadian)"},"fr-FR":{synonyms:{fr:null,fre:null,"fr-fr":null,fr_fr:null,french:null},label:"French"},"de-DE":{synonyms:{de:null,ger:null,"de-de":null,de_de:null,german:null},label:"German"},"el-GR":{synonyms:{el:null,gre:null,"el-gr":null,el_gr:null,greek:null},label:"Greek"},"gl-ES":{synonyms:{"gl-es":null,gl_es:null,galician:null},label:"Galician (Spain)"},"he-IL":{synonyms:{"he-il":null,he_il:null,hebrew:null},label:"Hebrew (Israel)"},"hr-HR":{synonyms:{hr:null,"hr-hr":null,hr_hr:null,croatian:null},label:"Croatian"},"hu-HU":{synonyms:{hu:null,hun:null,"hu-hu":null,hu_hu:null,hungarian:null},label:"Hungarian"},"id-ID":{synonyms:{id:null,ind:null,"id-id":null,id_id:null,indonesian:null},label:"Indonesian"},"it-IT":{synonyms:{it:null,ita:null,"it-it":null,it_it:null,italian:null},label:"Italian"},"kk-KZ":{synonyms:{"kk-kz":null,kk_kz:null,kazakh:null},label:"Kazakh (Kazakhstan)"},"lv-LV":{synonyms:{lt:null,"lv-lv":null,lv_lv:null,latvian:null},label:"Latvian"},"lt-LT":{synonyms:{lt:null,lit:null,"lt-lt":null,lt_lt:null,lithuanian:null},label:"Lithuanian"},"ms-MY":{synonyms:{ms:null,mal:null,"ms-my":null,ms_my:null,malay:null},label:"Malay"},"no-NO":{synonyms:{no:null,nb:null,nor:null,"nb-no":null,nb_no:null,"no-no":null,no_no:null,norwegian:null},label:"Norwegian"},"pl-PL":{synonyms:{pl:null,pol:null,"pl-pl":null,pl_pl:null,polish:null},label:"Polish"},"ro-RO":{synonyms:{"ro-ro":null,ro_ro:null,romanian:null},label:"Romanian"},"ru-RU":{synonyms:{ru:null,rus:null,"ru-ru":null,ru_ru:null,russian:null},label:"Russian"},"sr-RS":{synonyms:{"sr-rs":null,sr_rs:null,serbian:null},label:"Serbian"},"sk-SK":{synonyms:{sk:null,slo:null,"sk-sk":null,sk_sk:null,slovak:null},label:"Slovak"},"sl-SI":{synonyms:{sl:null,slv:null,"sl-si":null,sl_si:null,slovenian:null},label:"Slovenian"},"es-ES":{synonyms:{es:null,spa:null,"es-es":null,es_es:null,spanish:null},label:"Spanish"},"es-419":{synonyms:{"es-419":null,es_419:null,"latin america spanish":null},label:"Latin American Spanish"},"sv-SE":{synonyms:{sv:null,swe:null,"sv-se":null,sv_se:null,swedish:null},label:"Swedish"},"th-TH":{synonyms:{th:null,tha:null,"th-th":null,th_th:null,thai:null},label:"Thai"},"tr-TR":{synonyms:{tr:null,tur:null,"tr-tr":null,tr_tr:null,turkish:null},label:"Turkish"},"uk-UA":{synonyms:{"uk-ua":null,uk_ua:null,ukrainian:null},label:"Ukrainian"},"vi-VN":{synonyms:{"vi-vn":null,vi_vn:null,vietnamese:null},label:"Vietnamese (Viet Nam)"},NGT:{synonyms:{ngt:null},label:"Neutral Ground Truth"},"NGT-Latn":{synonyms:{"ngt-latn":null},label:"Neutral Ground Truth - Latin exonyms"},"en-CA":{synonyms:{"en-ca":null,en_ca:null,"english canadian":null},label:"English (Canada)"},"ko-KR":{synonyms:{ko:null,kor:null,"ko-kr":null,ko_kr:null,korean:null},label:"Korean"},"nb-NO":{synonyms:{nb:null,nor:null,"nb-no":null,nb_no:null,norwegian:null},label:"Norwegian"},"pt-BR":{synonyms:{br:null,pob:null,"pt-br":null,pt_br:null,"portuguese br":null},label:"Portuguese (BR)"},"pt-PT":{synonyms:{pt:null,por:null,"pt-pt":null,pt_pt:null,portuguese:null},label:"Portuguese"},"ru-Latn-RU":{synonyms:{"ru-latn-ru":null,ru_latn_ru:null},label:"Russian (Latin)"},"ru-Cyrl-RU":{synonyms:{"ru-cyrl-ru":null,ru_cyrl_ru:null},label:"Russian (Cyrlic)"},"es-MX":{synonyms:{mx:null,spm:null,"es-mx":null,es_mx:null,"spanish mx":null},label:"Spanish (Mexico)"},defaultValue:{value:"en-GB",label:"English (Great Britain)"}},W={ar:B.ar,ca:B["ca-ES"],cs:B["cs-CZ"],da:B["da-DK"],de:B["de-DE"],el:B["el-GR"],en:{synonyms:{en:null,eng:null,"en-gb":null,en_gb:null,english:null,us:null,ame:null,"en-us":null,en_us:null,"english us":null,default:null},label:"English"},es:{synonyms:{es:null,spa:null,"es-es":null,es_es:null,spanish:null,mx:null,spm:null,"es-mx":null,es_mx:null,"spanish mx":null},label:"Spanish"},et:B["et-EE"],fi:B["fi-FI"],fr:B["fr-FR"],he:B["he-IL"],hu:B["hu-HU"],id:B["id-ID"],it:B["it-IT"],lt:B["lt-LT"],lv:B["lv-LV"],nb:B["nb-NO"],nl:B["nl-NL"],no:B["no-NO"],pl:B["pl-PL"],pt:{synonyms:{br:null,por:null,"pt-br":null,pt_br:null,portuguese:null,pt:null,pob:null,"pt-pt":null,pt_pt:null,"portuguese br":null},label:"Portuguese"},ro:B["ro-RO"],ru:B["ru-RU"],sk:B["sk-SK"],sv:B["sv-SE"],th:B["th-TH"],tr:B["tr-TR"],zh:B["zh-TW"],defaultValue:{value:"en",label:"English (Great Britain)"}},z={ar:B.ar,"af-ZA":B["af-ZA"],"bg-BG":B["bg-BG"],"zh-TW":B["zh-TW"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"nl-NL":B["nl-NL"],"en-GB":B["en-GB"],"en-US":B["en-US"],"fi-FI":B["fi-FI"],"fr-FR":B["fr-FR"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"ko-KR":B["ko-KR"],"lt-LT":B["lt-LT"],"ms-MY":B["ms-MY"],"nb-NO":B["nb-NO"],"pl-PL":B["pl-PL"],"pt-BR":B["pt-BR"],"pt-PT":B["pt-PT"],"ru-RU":B["ru-RU"],"sk-SK":B["sk-SK"],"sl-SI":B["sl-SI"],"es-ES":B["es-ES"],"es-MX":B["es-MX"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],defaultValue:B.defaultValue},q={NGT:B.NGT,"NGT-Latn":B["NGT-Latn"],"af-ZA":B["af-ZA"],ar:B.ar,"eu-ES":B["eu-ES"],"bg-BG":B["bg-BG"],"ca-ES":B["ca-ES"],"zh-CN":B["zh-CN"],"zh-TW":B["zh-TW"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"nl-BE":B["nl-BE"],"nl-NL":B["nl-NL"],"en-AU":B["en-AU"],"en-NZ":B["en-NZ"],"en-GB":B["en-GB"],"en-US":B["en-US"],"et-EE":B["et-EE"],"fi-FI":B["fi-FI"],"fr-CA":B["fr-CA"],"fr-FR":B["fr-FR"],"gl-ES":B["gl-ES"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"hr-HR":B["hr-HR"],"he-IL":B["he-IL"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"kk-KZ":B["kk-KZ"],"lv-LV":B["lv-LV"],"lt-LT":B["lt-LT"],"ms-MY":B["ms-MY"],"no-NO":B["no-NO"],"nb-NO":B["nb-NO"],"pl-PL":B["pl-PL"],"pt-BR":B["pt-BR"],"pt-PT":B["pt-PT"],"ro-RO":B["ro-RO"],"ru-RU":B["ru-RU"],"ru-Latn-RU":B["ru-Latn-RU"],"ru-Cyrl-RU":B["ru-Cyrl-RU"],"sr-RS":B["sr-RS"],"sk-SK":B["sk-SK"],"sl-SI":B["sl-SI"],"es-ES":B["es-ES"],"es-419":B["es-419"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],"uk-UA":B["uk-UA"],"vi-VN":B["vi-VN"],defaultValue:B.defaultValue},G={ar:B.ar,"ca-ES":B["ca-ES"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"en-GB":B["en-GB"],"en-US":B["en-US"],"es-ES":B["es-ES"],"et-EE":B["et-EE"],"fi-FI":B["fi-FI"],"fr-FR":B["fr-FR"],"he-IL":B["he-IL"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"lt-LT":B["lt-LT"],"lv-LV":B["lv-LV"],"nb-NO":B["nb-NO"],"nl-NL":B["nl-NL"],"pl-PL":B["pl-PL"],"pt-PT":B["pt-PT"],"ro-RO":B["ro-RO"],"ru-RU":B["ru-RU"],"sk-SK":B["sk-SK"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],"zh-TW":B["zh-TW"],defaultValue:B.defaultValue};function H(e){if(!V()(e)&&!R()(e))throw new TypeError("Unsupported key type",e);return e}function K(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("a number is expected, but "+e+" ["+typeof e+"] given");return t}function Z(e,t){return n=>T(n,e,"Supported "+t+" is expected (one of: "+e+"), but "+n+" ["+typeof n+"] was given.")}const $=["StandardHouseholdCountrySpecific","IEC62196Type2CableAttached","IEC60309AC1PhaseBlue","IEC60309AC3PhaseRed","IEC62196Type2Outlet","IEC62196Type1CCS","IEC62196Type2CCS","IEC60309DCWhite","IEC62196Type1","IEC62196Type3","GBT20234Part2","GBT20234Part3","Chademo","Tesla"],Q=["Small_Paddle_Inductive","Large_Paddle_Inductive","IEC_60309_1_Phase","IEC_60309_3_Phase","IEC_62196_Type_1_Outlet","IEC_62196_Type_2_Outlet","IEC_62196_Type_3_Outlet","IEC_62196_Type_1_Connector_Cable_Attached","IEC_62196_Type_2_Connector_Cable_Attached","IEC_62196_Type_3_Connector_Cable_Attached","Combo_to_IEC_62196_Type_1_Base","Combo_to_IEC_62196_Type_2_Base","Type_E_French_Standard_CEE_7_5","Type_F_Schuko_CEE_7_4","Type_G_British_Standard_BS_1363","Type_J_Swiss_Standard_SEV_1011","China_GB_Part_2","China_GB_Part_3","IEC_309_DC_Plug","AVCON_Connector","Tesla_Connector","NEMA_5_20","CHAdeMO","SAE_J1772","TEPCO","Better_Place_Socket","Marechal_Socket","Standard_Household_Country_Specific"],X=["Battery_Exchange","Charge_100_to_120V_1_Phase_at_8A","Charge_100_to_120V_1_Phase_at_10A","Charge_100_to_120V_1_Phase_at_12A","Charge_100_to_120V_1_Phase_at_13A","Charge_100_to_120V_1_Phase_at_16A","Charge_100_to_120V_1_Phase_at_32A","Charge_200_to_240V_1_Phase_at_8A","Charge_200_to_240V_1_Phase_at_10A","Charge_200_to_240V_1_Phase_at_12A","Charge_200_to_240V_1_Phase_at_16A","Charge_200_to_240V_1_Phase_at_20A","Charge_200_to_240V_1_Phase_at_32A","Charge_200_to_240V_1_Phase_above_32A","Charge_200_to_240V_3_Phase_at_16A","Charge_200_to_240V_3_Phase_at_32A","Charge_380_to_480V_3_Phase_at_16A","Charge_380_to_480V_3_Phase_at_32A","Charge_380_to_480V_3_Phase_at_63A","Charge_50_to_500V_Direct_Current_at_62A_25kW","Charge_50_to_500V_Direct_Current_at_125A_50kW","Charge_200_to_450V_Direct_Current_at_200A_90kW","Charge_200_to_480V_Direct_Current_at_255A_120kW","Charge_Direct_Current_at_20kW","Charge_Direct_Current_at_50kW","Charge_Direct_Current_above_50kW"],J=["NGT","NGT-Latn","ar","bg-BG","zh-TW","cs-CZ","da-DK","nl-NL","en-AU","en-CA","en-GB","en-NZ","en-US","fi-FI","fr-FR","de-DE","el-GR","hu-HU","id-ID","it-IT","ko-KR","lt-LT","ms-MY","nb-NO","pl-PL","pt-BR","pt-PT","ru-RU","ru-Latn-RU","ru-Cyrl-RU","sk-SK","sl-SI","es-ES","es-MX","sv-SE","th-TH","tr-TR"],Y=["Petrol","LPG","Diesel","Biodiesel","DieselForCommercialVehicles","E85","LNG","CNG","Hydrogen","AdBlue"],ee="\n    {\n        incidents {\n            type,\n            geometry {\n                type,\n                coordinates\n            },\n            properties {\n                id,\n                iconCategory,\n                magnitudeOfDelay,\n                events {\n                    description,\n                    code,\n                    iconCategory\n                },\n                startTime,\n                endTime,\n                from,\n                to,\n                length,\n                delay,\n                roadNumbers,\n                aci {\n                    probabilityOfOccurrence,\n                    numberOfReports,\n                    lastReportTime\n                }\n            }\n        }\n    }";function te(e){return e.toString().match(/(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/)}function ne(e,t,n){return isFinite(e)&&e>=t&&e<=n}function re(e){return e.constructor.toString().indexOf("Array")<0}function oe(e,t){if(e)throw new TypeError(t)}function ae(e){const t=parseFloat(e);if(!ne(t,-180,180))throw new TypeError("an longitude <-180,180> is expected, but "+e+" ["+typeof e+"] given");return t}function ie(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"chargingConnections")&&Object.prototype.hasOwnProperty.call(t,"chargingCurve"))),"a chargingMode is expected, but "+e+" ["+typeof e+"] given"),se(e.chargingCurve),de(e.chargingConnections),e}function se(e){if(e.length>10)throw new Error("Given chargingCurve array contains more than 10 elements.");return e.forEach((e=>{ce(e)})),e}function ce(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"chargeInkWh")&&Object.prototype.hasOwnProperty.call(t,"timeToChargeInSeconds"))),"a chargingCurveSupportPoint is expected, but "+e+" ["+typeof e+"] given"),oe(!ne(e.chargeInkWh,0,Number.MAX_VALUE),"a chargeInkWh is expected, but "+e.chargeInkWh+" ["+typeof e.chargeInkWh+"] given"),oe(!ne(e.timeToChargeInSeconds,0,Number.MAX_VALUE),"a timeToChargeInSeconds is expected, but "+e.timeToChargeInSeconds+" ["+typeof e.timeToChargeInSeconds+"] given"),e}function le(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"facilityType")&&Object.prototype.hasOwnProperty.call(t,"plugType"))),"a chargingConnection is expected, but "+e+" ["+typeof e+"] given"),ue(e.plugType),pe(e.facilityType),e}function ue(e){return T(e,Q,"Plug type is expected to be one of supported values, but "+e+" ["+typeof e+"] given")}function pe(e){return T(e,X,"Facility type is expected to be one of supported values, but "+e+" ["+typeof e+"] given")}function de(e){if(e.length>20)throw new Error("Given chargingConnections array contains more than 20 elements.");return e.forEach((e=>{le(e)})),e}function fe(e){const t=parseFloat(e);if(!ne(t,-90,90))throw new TypeError("an latitude <-90,90> is expected, but "+e+" ["+typeof e+"] given");return t}function he(e){let t,n;if(Array.isArray(e)){if(2!==e.length||2!==e.filter(isFinite).length)throw new TypeError("Invalid point array in route points");t=e[1],n=e[0]}else{if(!isFinite(e.lat)||!isFinite(e.lon)&&!isFinite(e.lng))throw new TypeError("Invalid point object in route points");t=e.lat,n=void 0!==e.lon?e.lon:e.lng}if(!("number"==typeof t||t instanceof Number)||!("number"==typeof n||n instanceof Number))throw new TypeError("Lat and lon components of point should be finite numbers");ae(n),fe(t)}function ye(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Object.prototype.hasOwnProperty.call(t,n)&&Array.isArray(e[n].validators))for(const r of e[n].validators)R()(r)&&(t[n]=r(t[n]));if(!0===e[n].required&&!Object.prototype.hasOwnProperty.call(t,n))throw new Error("Missing required "+n)}}function ve(e,t,n,r){if(F()(e)||F()(t))throw new TypeError("Number in interval validator requires min and max value parameters");return function(o){const a=parseFloat(o);if(!ne(a,e,t)||r&&!N()(a))throw new TypeError(n+", but "+o+" ["+typeof o+"] given");return a}}function ge(e,t,n){return ve(e,t,n,!0)}function me(e,t,n){if(V()(e)&&(e=e.split(",")),Array.isArray(e)&&e.length>0){for(let r=0;r<e.length;r+=1)T(e[r],n,t);return e.join(",")}throw new TypeError(t)}function be(e,t){if(!te(e))throw new TypeError('Invalid "'.concat(t,'" parameter value.\n        Valid format: YYYY-MM-DDThh:mm:ss.SSSTZD'));return e}function we(e){if(V()(e)&&/^[a-zA-Z0-9-]{1,100}$/.test(e))return e;throw new TypeError("a string matching regular expression ^[a-zA-Z0-9-]{1,100}$ is expected, but "+e+" ["+typeof e+"] given")}function _e(e){return"false"!==e&&Boolean(e)}function Pe(e){const t=parseFloat(e);if(!N()(t)||t<0)throw new TypeError("a natural integer (greater than or equal 0) is expected, but "+e+" ["+typeof e+"] given");return t}function Oe(e){const t=parseFloat(e);if(!N()(t)||t<=0)throw new TypeError("a positive integer (greater than 0) is expected, but "+e+" ["+typeof e+"] given");return t}function Se(e){const t=parseFloat(e);if(!N()(t))throw new TypeError("an integer is expected, but "+e+" ["+typeof e+"] given");return t}function Ee(e){return oe(!function(e){return Object.prototype.hasOwnProperty.call(e,"minLon")&&Object.prototype.hasOwnProperty.call(e,"maxLon")&&Object.prototype.hasOwnProperty.call(e,"minLat")&&Object.prototype.hasOwnProperty.call(e,"maxLat")}(e),"a bounding box is expected, but "+e+" ["+typeof e+"] given"),oe(!ne(e.minLat,-90,90),"a bounding box minimal latitude is expected "+e.minLat+" ["+typeof e.minLat+"] given"),oe(!ne(e.maxLat,-90,90),"a bounding box maximal latitude is expected "+e.maxLat+" ["+typeof e.maxLat+"] given"),oe(!ne(e.minLon,-270,180),"a bounding box minimal longitude is expected "+e.minLon+" ["+typeof e.minLon+"] given"),oe(!ne(e.maxLon,-180,270),"a bounding box maximal longitude is expected "+e.maxLon+" ["+typeof e.maxLon+"] given"),oe(function(e){return parseFloat(e.maxLat)<=parseFloat(e.minLat)||parseFloat(e.maxLon)<=parseFloat(e.minLon)}(e),"a bounding box expected but max <= min"),e}function xe(e,t){return ve(e,t,"a number in interval <"+e+", "+t+"> is expected")}function Te(e,t){return ge(e,t,"an integer in interval <"+e+", "+t+"> is expected")}function Ie(e){if(!V()(e))throw new TypeError("a string is expected, but "+e+" ["+typeof e+"] given");return e}function Ae(e){return ge(0,22,"zoom level <0, 22> is expected")(e)}function je(e){if(!V()(e)||3!==e.length&&2!==e.length)throw new TypeError("a 2 or 3-characters long country name is expected, but "+e+" ["+typeof e+"] given");return e}function ke(e){const t=Object.keys(q);if(!V()(e)||t.indexOf(e)<0)throw new TypeError("One of pre-defined language codes was expected: "+t+", but "+e+" ["+typeof e+"] given");return e}function Ce(e){oe(!V()(e)&&re(e),"An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but "+e+" ["+typeof e+"] given");const t=V()(e)?e:e.join();return oe(!t.match(/^([a-zA-z]{2,3},)*[a-zA-z]{2,3}$/),"An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but "+e+" ["+typeof e+"] given"),t}function Le(e){return me(e,"List of pre-defined EV connector names was expected,but "+e+" ["+typeof e+"] given",$)}function Re(e){return me(e,"List of pre-defined Fuel types names was expected,but "+e+" ["+typeof e+"] given",Y)}function De(e){const t=["Local","International","Alternative"],n="List of pre-defined mapcode types names was expected,but "+e+" ["+typeof e+"] given";if(V()(e)&&(e=e.split(",")),Array.isArray(e)&&e.length>0){for(let r=0;r<e.length;r+=1)T(e[r],t,n);return e.join(",")}throw new TypeError(n)}function Ve(e,t){oe(!V()(t)&&re(t),"An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but "+t+" ["+typeof t+"] given");const n=V()(t)?t:t.join();return e&&""===n||oe(!n.match(/^([a-zA-z]{3},)*[a-zA-z]{3}$/),"An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but "+t+" ["+typeof t+"] given"),t}function Me(e){return function(e){if(!V()(e)||!j.test(e))throw new TypeError("A point is expected, but "+e+" ["+typeof e+"] given")}(e),e}function Fe(e){return ge(1,4,"Fuzziness level value (a positive integer lower than 5) is expected")(e)}function Ue(e){return ge(1,100,"Limit value (a positive integer lower than 100) is expected")(e)}function Ne(e){return ge(0,1900,"Offset an integer value <0, 1900> is expected")(e)}function Be(e){const t=["Country","CountrySubdivision","CountrySecondarySubdivision","CountryTertiarySubdivision","Municipality","MunicipalitySubdivision","Neighbourhood","PostalCodeArea"];for(const n of e.split(","))if(-1===t.indexOf(n))throw new TypeError("Entity type (".concat(t,") is expected, but ").concat(e," [").concat(typeof e,"] given"));return e}function We(e,t){return n=>{const r="Supported "+t+" type is expected (array with one of: "+e+"), but "+n+" ["+typeof n+"] given";if(re(n))throw new TypeError("an array is expected, but "+n+"  ["+typeof n+"] given");for(let t=0;t<n.length;t+=1)T(n[t],e,r);return n}}function ze(e){if(oe(re(e),"An array of geometry objects is expected, but "+e+" ["+typeof e+"] given"),!(e.length>0))throw new TypeError("An array of geometry objects is expected, but "+e+" ["+typeof e+"] given");for(let t=0;t<e.length;t+=1){const n=e[t];oe(!(Object.prototype.hasOwnProperty.call(n,"type")&&(Object.prototype.hasOwnProperty.call(n,"vertices")||Object.prototype.hasOwnProperty.call(n,"position")&&Object.prototype.hasOwnProperty.call(n,"radius"))),"An array of geometry objects is expected, but "+e+" ["+typeof e+"] given")}return e}function qe(e){if(isNaN(e)||!N()(e)||!(120===e||e>=5&&e<=60))throw new TypeError("Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60.");return e}function Ge(e){return be(e,"clientTime")}var He=n(19),Ke=n.n(He);class Ze{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e}convert(e){return this._isSinglePoint(e)?this._convertPoint(e):this._convertToArrayOfPoints(e)}_isSinglePoint(e){if(Array.isArray(e))return 2===e.length&&"object"!=typeof e[0];if(V()(e)){if(e.split(":").length>=2)return!1}return!0}_convertToArrayOfPoints(e){return V()(e)?e.split(":").map(this._convertPoint.bind(this)):e.map(this._convertPoint.bind(this))}_convertPoint(e){return Ke()(e,"lat")&&Ke()(e,"lon")?this._covertToDefaultFormat(e.lon,e.lat):Ke()(e,"latitude")&&Ke()(e,"longitude")?this._covertToDefaultFormat(e.longitude,e.latitude):Ke()(e,"x")&&Ke()(e,"y")?this._covertToDefaultFormat(e.x,e.y):Array.isArray(e)&&2===e.length?this.options.isLatLon?this._covertToDefaultFormat(e[1],e[0]):this._covertToDefaultFormat(e[0],e[1]):V()(e)?this._convertStringPoint(e):e}_convertStringPoint(e){const t=e.split(",");if(!/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(e)||2!==t.length)throw new Error("The point is not valid: "+e);return this.options.isLatLon?this._covertToDefaultFormat(t[1],t[0]):this._covertToDefaultFormat(t[0],t[1])}_covertToDefaultFormat(e,t){if(!e&&0!==e||!t&&0!==t)throw new Error("Longitude and latitude must be provided.");return R()(this.options.customPointConverter)?this.options.customPointConverter(e,t):{lng:parseFloat(e),lat:parseFloat(t)}}}var $e=n(9),Qe=n.n($e);const Xe=new Ze,Je=e=>{e&&(e.boundingBox&&(e.boundingBox.btmRightPoint=Xe.convert(e.boundingBox.btmRightPoint),e.boundingBox.topLeftPoint=Xe.convert(e.boundingBox.topLeftPoint)),e.viewport&&(e.viewport.btmRightPoint=Xe.convert(e.viewport.btmRightPoint),e.viewport.topLeftPoint=Xe.convert(e.viewport.topLeftPoint)),e.position&&(e.position=Xe.convert(e.position)),e.summary&&e.summary.geoBias&&(e.summary.geoBias=Xe.convert(e.summary.geoBias)))},Ye=(e,t,n)=>{F()(n)||(e[t]=n)},et=(e,t)=>({type:"Feature",geometry:{type:t,coordinates:[]},properties:e}),tt=e=>{const t={};t.id=e.id,Qe()(e)&&Object.keys(e).forEach((n=>{Ye(t,n,e[n])}));const n=et(t,"Point");return n.geometry.coordinates=[e.position.lng,e.position.lat],n},nt=e=>{const t={type:"FeatureCollection",features:[]};for(let n=0;n<e.results.length;n++){const r=tt(e.results[n]);t.features.push(r)}return t};function rt(e){e&&e.entryPoints&&Array.isArray(e.entryPoints)&&e.entryPoints.forEach((e=>{Je(e)}))}function ot(e){return e?(Array.isArray(e.results)?e.results.forEach((e=>{Array.isArray(e)?e.forEach((e=>{Je(e),rt(e)})):(Je(e),rt(e))})):(Je(e),rt(e)),Object.assign(e,{toGeoJson:()=>nt(e)})):e}function at(e){return Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:ot(e.response))),e):null}var it="POST",st="PATH",ct="QUERY",lt="OTHER",ut="HEADER";function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e,t){let{data:n,trackingId:r}=e;const o=t?t(n):function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){dt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);return o.getTrackingId=()=>r||null,o}var ht=n(65);const yt=s()["endpoints.copyrightsWorld"],vt=s()["endpoints.copyrightsBounds"],gt=s()["endpoints.copyrightsZoom"],mt=s()["endpoints.caption"],bt=s()["endpoints.batchSearch"],wt=s()["endpoints.batchSyncSearch"],_t=s()["endpoints.batchSearchQuery"],Pt=s()["endpoints.geocode"],Ot=s()["endpoints.reverseGeocode"],St=s()["endpoints.batchReverseGeocodeQuery"],Et=s()["endpoints.structuredGeocode"],xt=s()["endpoints.search"],Tt=s()["endpoints.batchStructuredGeocodeQuery"],It=s()["endpoints.adp"],At=s()["endpoints.batchAdpQuery"],jt=s()["endpoints.nearbySearch"],kt=s()["endpoints.batchNearbySearchQuery"],Ct=s()["endpoints.autocomplete"],Lt=s()["endpoints.poiCategories"],Rt=s()["endpoints.chargingAvailability"],Dt=s()["endpoints.batchChargingAvailabilityQuery"],Vt=s()["endpoints.poiDetails"],Mt=s()["endpoints.poiPhotos"],Ft=s()["endpoints.placeById"],Ut=s()["endpoints.routing"],Nt=s()["endpoints.calculateReachableRange"],Bt=s()["endpoints.batchRoutingQuery"],Wt=s()["endpoints.batchRouting"],zt=s()["endpoints.batchSyncRouting"],qt=s()["endpoints.matrixRouting"],Gt=s()["endpoints.matrixSyncRouting"],Ht=s()["endpoints.batchReachableRangeQuery"],Kt=s()["endpoints.longDistanceEVRouting"],Zt=s()["endpoints.incidentDetails"],$t=s()["endpoints.incidentDetailsV5"],Qt=s()["endpoints.incidentViewport"],Xt=s()["endpoints.flowSegmentData"],Jt=(s()["endpoints.incidentRegions"],s()["endpoints.trafficLayer"],s()["endpoints.rasterTrafficFlowTilesLayer"],s()["endpoints.vectorTrafficFlowTilesLayer"],s()["endpoints.tileLayer"],s()["endpoints.staticImage"]),Yt=s().origin;class en extends Error{constructor(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];super(...n),Error.captureStackTrace&&Error.captureStackTrace(this,en);let o="\n";e.forEach((e=>{o+=e.message+"\n"})),this.errors=e,this.message="Validation errors occured: "+o}}const tn=/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/;class nn{constructor(e){let{validators:t,converters:n,required:r,defaultValue:o,deprecationDate:a}=e;Object.assign(this,{validators:t,converters:n,required:r,defaultValue:o,deprecationDate:a}),this._validateFields()}_isArrayOfFunctions(e){if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(!R()(e[t]))return!1;return!0}_validateFields(){if(null===this.validators||this.validators&&!this._isArrayOfFunctions(this.validators))throw new Error("Validators are not an array of functions.");if(null===this.converters||this.converters&&!this._isArrayOfFunctions(this.converters))throw new Error("Converters are not an array of functions.");if(void 0!==this.required&&"boolean"!=typeof this.required)throw new Error("Required must be a Boolean.");if(this.deprecationDate&&(Number.isNaN(Date.parse(this.deprecationDate))||!tn.test(this.deprecationDate)))throw new Error("deprecationDate must contain a valid date")}getDefaultValue(){return R()(this.defaultValue)?this.defaultValue():this.defaultValue}getConverters(){return this.converters?this.converters:[]}getValidators(){return this.validators?this.validators:[]}getDeprecationDate(){return this.deprecationDate}isRequired(){return!0===this.required}}var rn=new class{constructor(){this.log={}}_isLogPrinted(e,t){const n=this.log[e];return!!n&&n[t]}_setLog(e,t){this.log[e]=this.log[e]||{},this.log[e][t]=!0}_displayWarning(e,t,n){const r=Date.now()>Date.parse(t),o="default"!==n?"(used in ".concat(n,") "):"";r?console.error("[DEPRECATION WARNING] The parameter '".concat(e,"' ").concat(o," deprecation period ")+"has ended. It is recommended to stop using it as it may stop working. Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information"):console.warn("[DEPRECATION NOTICE] The parameter '".concat(e,"' ").concat(o,"is deprecated. ")+"By ".concat(t," we can not guarantee that it will continue to work. ")+"Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information")}checkDeprecation(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";F()(e)||F()(t)||this._isLogPrinted(n,e)||(this._displayWarning(e,t,n),this._setLog(n,e))}};function on(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?on(Object(n),!0).forEach((function(t){sn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):on(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cn(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function ln(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){cn(a,r,o,i,s,"next",e)}function s(e){cn(a,r,o,i,s,"throw",e)}i(void 0)}))}}const un=(e,t,n,r)=>{const o=[];for(const a of t)try{a(e,n,r)}catch(e){o.push(e)}return o},pn=e=>{const t={};for(const[n,r]of Object.entries(e))t[n]=new nn(r);return t},dn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r=pn(e);let o=[];for(const[e,a]of Object.entries(r)){const r=t[e],i="__all"===e;if(F()(r)&&a.isRequired())o.push(new Error("".concat(e," is a required field.")));else if(!F()(r)||i){rn.checkDeprecation(e,a.getDeprecationDate(),n);const i=un(r,a.getValidators(),t,e);o=[...o,...i]}}return o},fn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r=pn(e),o={};for(const[e,a]of Object.entries(r)){const r=a.getDefaultValue();let i=t[e];if(F()(i)||""===i){if(F()(r))continue;i=r}const s=a.getConverters();o[e]=s.reduce(((e,t)=>t(e,n)),i)}return o};function hn(e,t,n,r){const o={};let a=[];if(e.batchItems&&t.batchItems&&(o.batchItems=t.batchItems.map((t=>{const o=fn(e.batchItems,t,n);return a=a.concat(dn(e.batchItems,o,r)),o})),t.batchMode&&(o.batchMode=Z(["sync","async","redirect"],"batchMode")(t.batchMode)),t.key&&(o.key=H(t.key)),o.trackingId=t.trackingId?we(t.trackingId):(0,ht.v4)(),t.waitTimeSeconds)){if(K(t.waitTimeSeconds),!(120===t.waitTimeSeconds||t.waitTimeSeconds>=5&&t.waitTimeSeconds<=60))throw new Error("Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60.");o.waitTimeSeconds=t.waitTimeSeconds}return{batchProperties:o,batchErrors:a}}function yn(e){return vn.apply(this,arguments)}function vn(){return(vn=ln((function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=fn(e,t,n),s=dn(e,i,r);if(e.batchItems&&t.batchItems){const{batchProperties:o,batchErrors:a}=hn(e,t,n,r);i=an(an({},i),o),s=s.concat(a)}if(s.length)throw new en(s);return o(i,a)}))).apply(this,arguments)}function gn(e,t,n,r,o){const a={batchItems:e};return function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=r,l=i,u=e;return i.batchItems&&R()(o)&&(l={trackingId:i.trackingId,batchMode:i.batchMode,waitTimeSeconds:i.waitTimeSeconds,batchItems:i.batchItems,key:i.key},c=o,u=a),yn(u,l,t,n,c,s.abortSignal)}}var mn=window.fetch,bn=n(80),wn=n.n(bn);function _n(e,t){return e.replace(/\{ *([\w_]+) *\}/g,((e,n)=>{let r=t[n];return wn()(r)?"{"+n+"}":(R()(r)&&(r=r(n)),"query"===n?encodeURIComponent(r):r)}))}function Pn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function On(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pn(Object(n),!0).forEach((function(t){Sn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function En(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function xn(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){En(a,r,o,i,s,"next",e)}function s(e){En(a,r,o,i,s,"throw",e)}i(void 0)}))}}function Tn(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)}function In(e,t){if(!e.queryParameters)return t;return t+"?"+Object.keys(e.queryParameters).map((function(t){return function(e,t){const n=e.queryParameters[t];let r="";return r=Array.isArray(n)?n.map((function(e){return Tn(t,e)})).join("&"):Tn(t,e.queryParameters[t]),r}(e,t)})).join("&")}function An(e,t){const n=function(e){try{return JSON.stringify(e)}catch(e){return null}}(e);if(!n)throw new Error("Unsupported request body type: "+e);return function(e,t,n){e.headers||(e.headers={}),e.headers[t]||e.headers[t.toLowerCase()]||(e.headers[t]=n)}(t,"Content-Type","application/json"),n}const jn=(e,t)=>{if(!e)return;const{error:n,detailedError:r}=e;return n&&r?{message:n.description,data:r,status:t}:e},kn=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return mn(In(e,t),n).then(function(){var t=xn((function*(t){const n=yield t.json();if(!t.ok)return Promise.reject({response:t,data:n});if(e._getOriginalResponse)return t;if("batch"===e.requestType&&202===t.status)return t.headers.location;const r=t.headers&&(t.headers.get("tracking-id")||t.headers.get("Tracking-ID"));return On({data:n},r&&{trackingId:r})}));return function(e){return t.apply(this,arguments)}}()).catch((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.signal&&!0===n.signal.aborted)return Promise.reject(t);const{response:r,data:o}=t,a=e._getOriginalResponse?r||t:jn(o,r&&r.status)||t;return Promise.reject(a)}))},Cn=function(e,t){e.pathParameters=e.pathParameters||{},e.pathParameters.contentType="json",e.pathParameters.protocol=e.pathParameters.protocol||"https";const n=_n(e.url,e.pathParameters),r=d();r.Accept="application/json",e.headers&&e.headers.trackingId&&(r["Tracking-ID"]=e.headers.trackingId);let o=On({method:"GET",headers:r,mode:"cors"},e.abortSignal&&{signal:e.abortSignal});return t&&(o=On(On({},o),{},{transformResponse:t})),kn(e,n,o)},Ln=function(e){e.pathParameters=e.pathParameters||{},e.pathParameters.contentType="json",e.pathParameters.protocol=e.pathParameters.protocol||"https";const t=_n(e.url,e.pathParameters),n=d();n.Accept="application/json",e.headers&&e.headers.trackingId&&(n["Tracking-ID"]=e.headers.trackingId);const r=On({method:"POST",headers:n,mode:"cors",redirect:"follow"},e.abortSignal&&{signal:e.abortSignal});return function(e,t){const n=e.bodyParameters;let r;n&&(Qe()(n)?r=An(n,t):V()(n)&&(r=n),t.body=r)}(e,r),kn(e,t,r)};let Rn=!1;const Dn=()=>Rn?"http":"https";var Vn=(e,t)=>(e.protocol=e&&e.protocol||Dn(),Cn(e,t)),Mn=e=>(e.protocol=e.protocol||Dn(),Ln(e));function Fn(e){const t=e[1];return!t.application||t.application===ct}function Un(e){return e[1].application===st}function Nn(e){return e[1].application===it}function Bn(e){return e[1].application===lt}function Wn(e){return e[1].application===ut}function zn(e){return{name:e[0],fieldName:e[2]}}function qn(e,t){let n=Object.keys(e).map((r=e,e=>[r[e]&&r[e].name||e,r[e],e]));var r;return n=n.filter(t),n=n.map(zn),n}function Gn(e){return qn(e,Fn)}function Hn(e){return qn(e,Un)}function Kn(e){return qn(e,Nn)}function Zn(e){return qn(e,Bn)}function $n(e){return qn(e,Wn)}function Qn(e,t,n){const r={};return t(e).forEach((t=>{if(t.fieldName in n){const o=e[t.fieldName],a=n[t.fieldName];o.cast?o.cast(a,r):r[t.name]=a}})),r}function Xn(e,t){return{pathParams:Qn(e,Hn,t),queryParams:Qn(e,Gn,t),postParams:Qn(e,Kn,t),otherParams:Qn(e,Zn,t),headerParams:Qn(e,$n,t)}}var Jn=n(81),Yn=n.n(Jn);const er="contentType";function tr(e){const t=Object.assign({},e);return t[er]={application:st},t}function nr(e){return e[er]="json",e}const rr=e=>(t,n,r)=>{const{pathParams:o,queryParams:a,postParams:i,headerParams:s}=Xn(tr(t),nr(n)),c={headers:s,url:"{protocol}://"+e,pathParameters:o,queryParameters:a,abortSignal:r};return Yn()(i)?Vn(c):(c.bodyParameters=i,Mn(c))};var or=(e,t)=>{if(null==e)throw new TypeError(t);return e};function ar(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)}function ir(e,t){if(!t)return e;return e+"?"+Object.keys(t).map((e=>function(e,t){const n=t[e];let r="";return r=Array.isArray(n)?n.map((function(t){return ar(e,t)})).join("&"):ar(e,t[e]),r}(e,t))).join("&")}var sr=(e,t,n)=>ir(_n(e,t),n);function cr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function lr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ur(e){let t;switch(e.batchMode){case"async":t=e.endpoints.async;break;case"sync":t=e.endpoints.sync;break;default:t=e.endpoints.async,e.queryParams.redirectMode="manual"}return"sync"!==e.batchMode&&e.waitTimeSeconds?e.queryParams.waitTimeSeconds=e.waitTimeSeconds:e.queryParams&&e.queryParams.waitTimeSeconds&&delete e.queryParams.waitTimeSeconds,Mn(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cr(Object(n),!0).forEach((function(t){lr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({url:"{protocol}://"+t,queryParameters:e.queryParams,bodyParameters:e.bodyParams,headers:e.headers,requestType:"batch"},e.abortSignal&&{abortSignal:e.abortSignal})).then((t=>"manual"===e.queryParams.redirectMode?Vn({url:"{protocol}://"+Yt+t}):t))}const pr=(e,t)=>(n,r,o)=>{const a={},i={};a.key=r.key;const s={};r.trackingId&&(s.trackingId=r.trackingId);const c=or(r.batchItems);n=tr(n),i.batchItems=c.map((function(e){const{pathParams:r,queryParams:o,postParams:a}=Xn(n,nr(e)),i={query:sr(t.single,r,o)};return Yn()(a)||(i.post=a),i}));return ur({batchMode:r.batchMode||(i.batchItems.length<=e?"sync":"redirect"),waitTimeSeconds:r.waitTimeSeconds,queryParams:a,bodyParams:i,headers:s,endpoints:{sync:t.batchSync,async:t.batch},abortSignal:o})},dr=["origins","destinations"];function fr(e){const t={origins:e.origins,destinations:e.destinations},n=function(e){const t=Object.keys(e).filter((e=>-1===dr.indexOf(e)));return t.length?t.reduce(((t,n)=>(t[n]=e[n],t)),{}):null}(e);return n&&(t.options={post:n}),t}const hr={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},geometries:{validators:[function(e){if(re(e))throw new TypeError("an array is expected, but "+e+"  ["+typeof e+"] given");return e}],required:!0},geometriesZoom:{validators:[function(e){return ve(0,22,"a geometries zoom value <0, 22> is expected")(e)}]}};function yr(e,t){const n=rr(It),r=pr(100,{single:At,batchSync:wt,batch:bt});return gn(hr,v,"additionalData",(function(e,t){return n(hr,e,t).then(ft)}),(function(e,t){return r(hr,e,t).then((e=>ft(e,at)))}))(e,t)}var vr=n(98),gr=n.n(vr);function mr(e,t){if(e)throw new TypeError(t)}function br(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("an number is expected, but "+e+" ["+typeof e+"] given");return t-180*Math.ceil((t-90)/180)}function wr(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("an number is expected, but "+e+" ["+typeof e+"] given");return t-360*Math.ceil((t-180)/360)}function _r(e){if(Array.isArray(e)&&2===e.length)return[...e].reverse();if(V()(e)){const t=e.match(j);return mr(!t||!t[1]||!t[2],"A point is expected, but "+e+" ["+typeof e+"] given"),[t[2],t[1]]}if(function(e){return R()(e.lat)&&R()(e.lng)}(e))return[e.lat(),e.lng()];if(r=e,Object.prototype.hasOwnProperty.call(r,"lat")&&(Object.prototype.hasOwnProperty.call(r,"lon")||Object.prototype.hasOwnProperty.call(r,"lng")))return[e.lat,(t=e.lon,n=e.lng,void 0===t?n:t)];var t,n,r,o;if(o=e,Object.prototype.hasOwnProperty.call(o,"x")&&Object.prototype.hasOwnProperty.call(o,"y"))return[e.y,e.x];if(function(e){return Object.prototype.hasOwnProperty.call(e,"latitude")&&Object.prototype.hasOwnProperty.call(e,"longitude")}(e))return[e.latitude,e.longitude];throw new TypeError("A point is expected, but "+e+" ["+typeof e+"] given")}function Pr(e){let t,n;if(function(e){return Object.prototype.hasOwnProperty.call(e,"minLon")&&Object.prototype.hasOwnProperty.call(e,"minLat")&&Object.prototype.hasOwnProperty.call(e,"maxLon")&&Object.prototype.hasOwnProperty.call(e,"maxLat")}(e))return e;if(function(e){return Object.prototype.hasOwnProperty.call(e,"left")&&Object.prototype.hasOwnProperty.call(e,"bottom")&&Object.prototype.hasOwnProperty.call(e,"right")&&Object.prototype.hasOwnProperty.call(e,"top")}(e))return{minLon:e.left,minLat:e.bottom,maxLon:e.right,maxLat:e.top};if(function(e){return R()(e.getWest)&&R()(e.getEast)&&R()(e.getSouth)&&R()(e.getNorth)}(e))return{minLon:e.getWest(),minLat:e.getSouth(),maxLon:e.getEast(),maxLat:e.getNorth()};if(R()(e.getNorthEast)&&R()(e.getSouthWest))return n=_r(e.getNorthEast()),t=_r(e.getSouthWest()),{minLon:t[1],minLat:t[0],maxLon:n[1],maxLat:n[0]};if(Array.isArray(e)&&4===e.length)return{minLon:e[0],minLat:e[1],maxLon:e[2],maxLat:e[3]};if(Array.isArray(e)&&2===e.length)return t=_r(e[0]),n=_r(e[1]),{minLon:t[1],minLat:t[0],maxLon:n[1],maxLat:n[0]};if(V()(e)&&4===(e=e.trim().split(/\s*,\s*/)).length)return{minLon:parseFloat(e[0]),minLat:parseFloat(e[1]),maxLon:parseFloat(e[2]),maxLat:parseFloat(e[3])};throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to bounding box")}function Or(e,t){if(F()(e)||""===e)return"";if(t[e])return e;e=e.toLowerCase();for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&"defaultValue"!==n&&Object.prototype.hasOwnProperty.call(t[n].synonyms,e))return n;return console.warn("Value provided is invalid ("+e+"). Default value ("+t.defaultValue.value+") will be used instead."),t.defaultValue.value}function Sr(e){const t=_r(e);return br(t[0])+","+wr(t[1])}function Er(e){return V()(e)&&e.indexOf("circle")>-1?function(e){const t=e.match(k);mr(!(t&&t[1]&&t[2]&&t[3]),"Unable to cast "+e+" ["+typeof e+"] to circle");const n=parseFloat(t[2]),r=parseFloat(t[1]),o=parseFloat(t[3]);return mr(!isFinite(n)||!isFinite(r),"Unable to cast "+e+" ["+typeof e+"] to circle"),"circle("+n+","+r+","+o+")"}(e):Array.isArray(e)&&3===e.length?"circle("+br(e[1])+","+wr(e[0])+","+e[2]+")":Sr(e)}function xr(e){const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(Sr(e[n]));return t}function Tr(e){if(!V()(e))return e;const t=e.split(",");return{latitude:t[0],longitude:t[1]}}function Ir(e){return function(e){let t=e.minLon,n=e.maxLon,r=e.minLat,o=e.maxLat;if(n-t>360)n=180,t=-180;else{if(n>270){const e=Math.ceil(t/360);n-=360*e,t-=360*e}if(t<-270){const e=Math.ceil(-n/360);n+=360*e,t+=360*e}}return r=r<-90?-90:r,o=o>90?90:o,{minLon:t,minLat:r,maxLon:n,maxLat:o}}(Pr(e))}function Ar(e){return Sr(e)}function jr(e){if(e&&e instanceof Date)return e.toISOString();if(!e||!V()(e))throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to datetime value.");return"now"!==e&&(e=new Date(e).toISOString()),e}function kr(e){let t;mr(!e||!Array.isArray(e),"Unable to cast "+e+" ["+typeof e+"] to geometry list (array)");for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t=e[n],"POLYGON"===t.type?t.vertices=xr(t.vertices):"CIRCLE"===t.type&&(t.position=Sr(t.position)));return e}function Cr(e){return Or(e,q)}function Lr(e){if(!e)return[];if(V()(e))return(e=e.trim().replace(/\s*[,;]\s*/g,",")).split(/[,;]+/);if(Array.isArray(e))return e;throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to array of strings")}function Rr(e){return Math.round(Number(e))}function Dr(e){if(V()(e))return e;if(!Array.isArray(e))throw new TypeError("An array is required");return e.join(":")}function Vr(e){if(Array.isArray(e))return e.join();throw new TypeError("An array is required")}function Mr(e){return gr()(e)}const Fr={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},maxDetourTime:{validators:[Te(1,3600)],required:!0},spreadingMode:{validators:[Z(["auto"],"spreading mode")]},route:{required:!0,converters:[function(e){return{points:e.map(_r).map((e=>{let[t,n]=e;return{lat:t,lon:n}}))}}],validators:[function(e){let t;if(void 0===e.points)throw new TypeError("Invalid structure of the route object");if(t=e.points,t&&!(Array.isArray(t)&&t.length>2))throw new TypeError("Provided route array "+t+" is not valid. It should be an array with at least 2 points.");return t.forEach(he),e}],application:it},query:{required:!0,validators:[Ie],application:st},limit:{validators:[Te(1,20)]},type:{validators:[Ie],defaultValue:"searchAlongRoute",application:st},brandSet:{validators:[Ie]},categorySet:{validators:[Ie]},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]},openingHours:{validators:[Z(["nextSevenDays"],"openingHours parameter")]},timeZone:{validators:[Ie]},sortBy:{validators:[Z(["detourTime","detourOffset","detourDistance"],"sortBy")]},detourOffset:{validators:[_e]},view:{validators:[Ie]}};function Ur(e,t){const n=rr(xt),r=pr(100,{single:_t,batchSync:wt,batch:bt});return gn(Fr,v,"alongRouteSearch",((e,t)=>n(Fr,e,t).then((e=>ft(e,ot)))),((e,t)=>r(Fr,e,t).then((e=>ft(e,ot)))))(e,t)}const Nr="combustion",Br="electric",Wr="any";function zr(e){if(isNaN(parseFloat(e))||!isFinite(e))throw new Error("A value parsable to float is expected, but "+e+" ["+typeof e+"] given")}function qr(e){const t={};e.forEach((function(e){const n=e.split(",");if(2!==n.length)throw new Error("Invalid number of parameters in the pair around "+e);if(0===n[0].trim().length)throw new Error("Speed value must not be empty.");if(0===n[1].trim().length)throw new Error("Consumption value must not be empty.");if(zr(n[0]),zr(n[1]),Object.prototype.hasOwnProperty.call(t,parseFloat(n[0])))throw new Error("Duplicate speed: "+n[0]);t[parseFloat(n[0])]=parseFloat(n[1])})),Object.keys(t).length>1&&function(e){const t=Object.keys(e).sort((function(e,t){return parseFloat(e)>parseFloat(t)})),n=t.length;if(e[t[n-2]]>e[t[n-1]])throw new Error("Consumption for two highest speeds should be increasing")}(t)}function Gr(e,t){if(e.vehicleEngineType&&e.vehicleEngineType!==t&&t!==Wr)throw new Error("Expecting vehicleEngineType set to "+t)}function Hr(e,t,n){if(!e[t]||!e[n])throw new Error("Missing dependant parameter. Expecting both defined: "+t+", "+n)}function Kr(e){if("bicycle"===e.travelMode||"pedestrian"===e.travelMode)throw new Error("Consumption model parameters cannot be set if travelMode is set to bicycle or pedestrian")}function Zr(e){if(!e.constantSpeedConsumptionInLitersPerHundredkm&&!e.constantSpeedConsumptionInkWhPerHundredkm)throw new Error("Consumption model cannot be used without setting constant speed consumption parameter")}function $r(e){return(t,n)=>{if(null==t)return;if(Kr(n),Gr(n,e),!V()(t))throw new TypeError('Expecting a String like "15.2,12.2:8.0,9.0"');const r=t.split(":");if(r.length<1||r.length>25)throw new Error("Incorrect amount of speed-consumption pairs provided. Expecting 1-25, but got "+t.length);qr(r)}}function Qr(e,t){return function(n,r){if(n&&(Kr(r),Zr(r),Gr(r,e),zr(n),n<0))throw new Error(t+": Expecting positive value")}}function Xr(e,t){return function(n,r){n&&(Kr(r),Zr(r),Gr(r,Wr),Hr(r,e,t),Hr(r,e,"vehicleWeight"),r.vehicleEngineType===Nr&&Hr(r,e,"fuelEnergyDensityInMJoulesPerLiter"),function(e,t,n){if(e[t]*e[n]>1)throw new Error("Product of "+t+" and "+n+" cannot exceed 1")}(r,e,t),zr(n))}}function Jr(e,t){return function(n,r){n&&(Kr(r),Zr(r),Gr(r,Br),Hr(r,e,t),zr(n))}}function Yr(e,t){let n,r;if("electric"===t.vehicleEngineType){if(n=t.currentChargeInkWh,r=t.energyBudgetInkWh,r>n)throw new Error("Energy budget may not be greater than current energy.")}else if(n=t.currentFuelInLiters,r=t.fuelBudgetInLiters,r>n)throw new Error("Fuel budget may not be greater than current fuel.");if(r<0)throw new Error("Budget may not be negative.")}function eo(e,t,n){const r="constantSpeedConsumptionInLitersPerHundredkm"in t,o="constantSpeedConsumptionInkWhPerHundredkm"in t,a="electric"===t.vehicleEngineType;if("energyBudgetInkWh"===n&&e){if(!a)throw new Error('Engine type should be "electric" when energyBudgetInkWh is set');if(!o)throw new Error("Missing constant speed consumption for electric engine.")}else if("fuelBudgetInLiters"===n&&e){if(a)throw new Error('Engine type should be "combustion" or undefined when fuelBudgetInLiters is set');if(!r)throw new Error("Missing constant speed consumption for combustion engine.")}}function to(e,t){return function(n,r){if(n&&Object.prototype.hasOwnProperty.call(r,t)&&O(r[t]))throw new Error(e+" parameter cannot be used in conjunction with "+t)}}function no(e,t){return function(n,r){if(n&&!Object.prototype.hasOwnProperty.call(r,t))throw new Error(t+" must be specified when using with "+e)}}function ro(e,t){const n=Yn()(t.query),r=Yn()(t.brandSet),o=Yn()(t.categorySet);if(n&&r&&o)throw new Error("Empty query parameter is only allowed when used with brandSet or categorySet filters")}function oo(e,t){const n=t.recuperationInkWhPerkmAltitudeLoss,r=t.consumptionInkWhPerkmAltitudeGain;if(zr(n),zr(r),r<n)throw new Error("consumptionInkWhPerkmAltitudeGain must be greater than recuperationInkWhPerkmAltitudeLoss");if(r>500)throw new Error("recuperationInkWhPerkmAltitudeLoss and less than 500.0");if(n<0)throw new Error("recuperationInkWhPerkmAltitudeLoss must be greater than 0.0")}var ao=()=>({__all:{validators:[ro]},key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],application:st,defaultValue:""},typeahead:{validators:[_e]},limit:{validators:[Ue]},offset:{validators:[Ne],name:"ofs"},language:{validators:[ke],converters:[Cr]},countrySet:{validators:[Ce]},radius:{validators:[Pe]},center:{converters:[Ar],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},type:{validators:[Ie],defaultValue:"search",application:st},bestResult:{validators:[_e],cast:(e,t)=>{e&&(t.limit=1,t.ofs=0)}},protocol:{validators:[Z(["http","https"],"protocol")]},extendedPostalCodesFor:{validators:[Ie]},view:{validators:[Z(["IL","MA","IN","PK","Unified","RU","TR","AR","CN"],"view")]},brandSet:{validators:[Ie]},categorySet:{validators:[Ie]},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]},openingHours:{validators:[Z(["nextSevenDays"],"openingHours parameter")]},timeZone:{validators:[Ie]},mapcodes:{validators:[De]},fuelSet:{validators:[Re]},relatedPois:{validators:[Z(["off","child","parent","all"],"relatedPois")]}});const io=()=>({validators:[Ee],converters:[Ir],cast:(e,t)=>{t.topLeft="".concat(e.maxLat,",").concat(e.minLon),t.btmRight="".concat(e.minLat,",").concat(e.maxLon)}});class so{constructor(e,t){this.options=e,this.additionalOptions=t,this.defaultFields=A(ao()),this.fields={}}_getRestService(){return{search:rr(xt),batch:pr(100,{single:_t,batchSync:wt,batch:bt})}}handleBatchServiceCall(e,t){return this._getRestService().batch(this.fields,e,t).then((e=>ft(e,at)))}handleServiceCall(e,t){return this._getRestService().search(this.fields,e,t).then((t=>{let{data:n,trackingId:r}=t;return ft({data:e.bestResult?n.results[0]:n,trackingId:r},ot)}))}construct(e){this.fields=C(this.fields,this.defaultFields);return gn(this.fields,v,e||"search",this.handleServiceCall.bind(this),this.handleBatchServiceCall.bind(this))(this.options,this.additionalOptions)}}class co extends so{constructor(e,t){super(e,t),this.fields.type={defaultValue:"categorySearch",visible:!1},this.fields.boundingBox=io()}}function lo(e,t){return new co(e,t).construct("categorySearch")}const uo={key:{validators:[H]},chargingAvailability:{validators:[Ie],required:!0},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]}};function po(e,t){const n=rr(Rt),r=pr(100,{single:Dt,batchSync:wt,batch:bt});return gn(uo,f,"chargingAvailability",(function(e,t){return n(uo,e,t).then(ft)}),(function(e,t){return r(uo,e,t).then((e=>ft(e,at)))}))(e,t)}class fo extends so{constructor(e,t){super(e,t),this.fields.minFuzzyLevel={validators:[Fe],defaultValue:1},this.fields.maxFuzzyLevel={validators:[Fe],defaultValue:2},this.fields.idxSet={validators:[Ie]},this.fields.entityTypeSet={converters:[Mr,Vr],validators:[Be]},this.fields.sessionId={validators:[Ie]},this.fields.clientTime={validators:[Ge]},this.fields.boundingBox=io()}}function ho(e,t){return new fo(e,t).construct("fuzzySearch")}class yo extends so{constructor(e,t){super(e,t),this.fields.type={defaultValue:"geometrySearch",visible:!1,application:st},this.fields.key={validators:[H]},this.fields.limit={validators:[Ue]},this.fields.language={validators:[ke]},this.fields.geometryList={validators:[ze],converters:[kr],application:it},this.fields.idxSet={validators:[Ie]},this.fields.protocol={validators:[Z(["http","https"],"protocol")]},this.fields.extendedPostalCodesFor={validators:[Ie]},this.fields.entityTypeSet={converters:[Mr,Vr],validators:[Be]},this.fields.boundingBox=io()}}function vo(e,t){return new yo(e,t).construct("geometrySearch")}class go extends so{constructor(e,t){super(e,t),this.fields.__all={validators:[]},this.fields.type={defaultValue:"nearbySearch",visible:!1},this.fields.query={visible:!1},this.fields.center={required:!0},this.fields.radius={required:!1,validators:[xe(1,5e4)]},this.fields.typeahead={visible:!1}}_getRestService(){return{search:rr(jt),batch:pr(100,{single:kt,batchSync:wt,batch:bt})}}}function mo(e,t){return new go(e,t).construct("nearbySearch")}const bo={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},entityId:{validators:[Ie],required:!0},language:{validators:[ke],converters:[Cr]}};function wo(e,t){const n=rr(Ft);return gn(bo,v,"placeById",((e,t)=>n(bo,e,t).then((e=>ft(e,ot)))))(e,t)}const _o={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},language:{validators:[ke]}};function Po(e,t){return gn(_o,v,"poiCategories",((e,t)=>rr(Lt)(_o,e,t).then(ft)))(e,t)}const Oo={key:{validators:[Ie],required:!0},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},id:{validators:[Ie],required:!0}};function So(e,t){const n=rr(Vt);return gn(Oo,v,"poiDetails",(function(e,t){return n(Oo,e,t).then(ft)}))(e,t)}const Eo={key:{validators:[Ie],required:!0},id:{validators:[Ie],required:!0},height:{validators:[Se],converters:[Rr]},width:{validators:[Se],converters:[Rr]}};function xo(e,t){return gn(Eo,v,"poiPhotos",(function(e){return"https://"+sr(Mt,{},e)}))(e,t)}class To extends so{constructor(e,t){super(e,t),this.fields.type={defaultValue:"poiSearch",visible:!1},this.fields.boundingBox=io()}}function Io(e,t){return new To(e,t).construct("poiSearch")}const Ao={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],required:!0,application:st},language:{validators:[ke],converters:[Cr],required:!0},limit:{validators:[Ue]},countrySet:{validators:[Ce]},radius:{validators:[Pe]},resultSet:{validators:[Ie]},center:{converters:[Ar],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},sessionId:{validators:[Ie]},clientTime:{validators:[Ge]}};function jo(e,t){const n=rr(Ct);return gn(Ao,v,"autocomplete",(function(e,t){return n(Ao,e,t).then((e=>ft(e)))}))(e,t)}const ko=new Ze({isLatLon:!0}),Co=e=>{e.position&&(e.position=ko.convert(e.position)),e.address&&e.address.boundingBox&&(e.address.boundingBox.northEast=ko.convert(e.address.boundingBox.northEast),e.address.boundingBox.southWest=ko.convert(e.address.boundingBox.southWest))};function Lo(e){return e.addresses.forEach((e=>{Array.isArray(e)&&e.forEach((e=>{Co(e)})),Co(e)})),e}function Ro(e){return e.batchItems instanceof Array?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:Lo(e.response))),e):null}function Do(e,t){this.options=e,this.additionalOptions=t,this.fields={}}function Vo(e){return new Do(e).construct()}Do.prototype.TYPE={reverseGeocode:"reverseGeocode",crossStreetLookup:"reverseGeocode/crossStreet"},Do.prototype.construct=function(e){return gn(C(this.fields,this.defaultFields),v,e||"reverseGeocodeBase",this.handleServiceCall.bind(this),this.handleBatchServiceCall.bind(this))(this.options,this.additionalOptions)},Do.prototype.handleServiceCall=function(e,t){return rr(Ot)(this.fields,e,t).then((e=>ft(e,Lo)))},Do.prototype.handleBatchServiceCall=function(e,t){return pr(100,{single:St,batch:bt,batchSync:wt})(this.fields,e,t).then((e=>ft(e,Ro)))},Vo.prototype.constructor=Do;const Mo="reverseGeocode",Fo="reverseGeocode/crossStreet",Uo={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},language:{validators:[ke]},position:{converters:[Ar],validators:[Me],required:!0,application:st},heading:{validators:[K]},radius:{validators:[Pe]},protocol:{validators:[Z(["http","https"],"protocol")]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},allowFreeformNewline:{validators:[_e]}},No={type:{defaultValue:Mo,visible:!1,application:st},entityType:{converters:[Mr,Vr],validators:[Be]},returnSpeedLimit:{validators:[_e]},number:{validators:[Ie]},returnRoadUse:{validators:[_e]},roadUse:{converters:[function(e){if(V()(e))return'["'+e.replace(/["']|^\s+|\s+$/g,"").split(/[\s,]+/).join('","')+'"]';if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]=String(e[t]).replace(/["']|^\s+|\s+$/g,"");return'["'+e.join('","')+'"]'}throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to road use string")}],validators:[function(e){const t=["LimitedAccess","Arterial","Terminal","Ramp","Rotary","LocalStreet"];oe(!V()(e)||!e.match(/^\[("\w*",?)+\]$/),"Road use is expected, but "+e+"  ["+typeof e+"] given");const n=e.replace(/["[\]]/g,"").split(",");for(let r=0;r<n.length;r+=1)oe(t.indexOf(n[r])<0,"Road use ("+t+") is expected, but "+e+"  ["+typeof e+"] given");return e}]},streetNumber:{validators:[Ie]},returnMatchType:{validators:[_e]},mapcodes:{validators:[De]},dateTime:{validators:[function(e){return be(e,"dateTime")}]}},Bo={type:{defaultValue:Fo,visible:!1,application:st},limit:{validators:[Ue]}};function Wo(e){if(e===Mo)return Object.assign({},Uo,No);if(e===Fo)return Object.assign({},Uo,Bo);throw new Error("Unsupported geocode type: "+e)}function zo(e,t){const n=Vo.prototype.constructor;function r(e,t){n.call(this,e,t),this.fields=Wo(Mo)}return r.prototype=new n,r.prototype.constructor=r,new r(e,t).construct("reverseGeocode")}function qo(e){return e?(Array.isArray(e.results)&&e.results.forEach((e=>{Array.isArray(e)?e.forEach((e=>{Je(e)})):Je(e)})),Je(e),Object.assign(e,{toGeoJson:()=>nt(e)})):e}function Go(e){return e.batchItems instanceof Array?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:qo(e.response))),e):null}const Ho=(()=>({extendedPostalCodesFor:{validators:[Ie]},type:{defaultValue:"geocode",application:st},key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],required:!0,application:st},typeahead:{validators:[_e]},limit:{validators:[Oe]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},offset:{validators:[Pe],name:"ofs"},language:{validators:[ke]},boundingBox:{validators:[Ee],converters:[Ir],cast:(e,t)=>{t.topLeft="".concat(e.maxLat,",").concat(e.minLon),t.btmRight="".concat(e.minLat,",").concat(e.maxLon)}},center:{converters:[Ar],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},countrySet:{validators:[Ce]},radius:{validators:[Pe]},bestResult:{validators:[_e],cast:(e,t)=>{e&&(t.limit=1,t.ofs=0)}},protocol:{validators:[Z(["http","https"],"protocol")]},timeZone:{validators:[Ie]},entityTypeSet:{converters:[Mr,Vr],validators:[Be]}}))();function Ko(e,t){const n=rr(Pt),r=pr(100,{single:_t,batchSync:wt,batch:bt});return gn(Ho,v,"geocode",(function(e,t){return n(Ho,e,t).then((t=>{let{data:n,trackingId:r}=t;return ft({data:e.bestResult?n.results[0]:n,trackingId:r},qo)}))}),(function(e,t){return r(Ho,e,t).then((e=>ft(e,Go)))}))(e,t)}function Zo(e,t){const n=Vo.prototype.constructor;function r(e,t){n.call(this,e,t),this.fields=Wo(Fo)}return r.prototype=new n,r.prototype.constructor=r,new r(e,t).construct("crossStreetLookup")}const $o={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},countryCode:{validators:[je],required:!0},limit:{validators:[Ue]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},offset:{validator:[Pe],name:"ofs"},language:{validators:[ke]},streetNumber:{validators:[Ie]},streetName:{validators:[Ie]},crossStreet:{validators:[Ie]},municipality:{validators:[Ie]},municipalitySubdivision:{validators:[Ie]},countryTertiarySubdivision:{validators:[Ie]},countrySecondarySubdivision:{validators:[Ie]},countrySubdivision:{validators:[Ie]},postalCode:{validators:[Ie]},protocol:{validators:[Z(["http","https"],"protocol")]},bestResult:{validators:[_e]},timeZone:{validators:[Ie]},extendedPostalCodesFor:{validators:[Ie]},entityTypeSet:{converters:[Mr,Vr],validators:[Be]}};function Qo(e){(function(e){const t=Boolean(e.bestResult);return delete e.bestResult,t})(e)&&(e.limit=1,e.offset=0)}function Xo(e,t){const n=pr(100,{single:Tt,batch:bt,batchSync:wt}),r=rr(Et);return gn($o,v,"structuredGeocode",(function(e,t){const n=Boolean(e.bestResult);return Qo(e),r($o,e,t).then((e=>{let{data:t,trackingId:r}=e;return ft({data:n?t.results[0]:t,trackingId:r},qo)}))}),(function(e,t){return e.batchItems.forEach(Qo),n($o,e,t).then((e=>ft(e,Go)))}))(e,t)}const Jo={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},routeType:{validators:[Z(["fastest","shortest","eco","thrilling"],"route type")]},traffic:{validators:[_e]},avoid:{validators:[We(["tollRoads","motorways","ferries","unpavedRoads","carpools","alreadyUsedRoads"],"avoid")],converters:[Lr]},departAt:{validators:[function(e){if("now"===e||te(e)&&Date.now()<Date.parse(e))return e;throw new TypeError("Supported departAt is now or rfc3339 format and no earlier than now(), but "+e+" ["+typeof e+"] given")}],converters:[jr]},arriveAt:{validators:[function(e){if(te(e)&&Date.now()<Date.parse(e))return e;throw new TypeError("Supported arriveAt is rfc3339 format, but and no earlier than now() "+e+" ["+typeof e+"] given")}],converters:[jr]},travelMode:{validators:[Z(["car","truck","taxi","bus","van","motorcycle","bicycle","pedestrian"],"travel mode")]},hilliness:{validators:[Z(["low","normal","high"],"hilliness")]},windingness:{validators:[Z(["low","normal","high"],"windingness")]},report:{validators:[Z(["effectiveSettings"],"report")]},vehicleEngineType:{validators:[Z(["combustion","electric"],"vehicle engine type")]},vehicleMaxSpeed:{validators:[Pe]},vehicleWeight:{validators:[Pe,function(e,t){if(function(e){return e.accelerationEfficiency||e.decelerationEfficiency||e.uphillEfficiency||e.downhillEfficiency}(t)&&void 0===e)throw new Error("vehicleWeight parameter must be set if any efficiency parameters is present")}]},vehicleAxleWeight:{validators:[Pe]},vehicleLength:{validators:[xe(0,Number.MAX_VALUE)]},vehicleWidth:{validators:[xe(0,Number.MAX_VALUE)]},vehicleHeight:{validators:[xe(0,Number.MAX_VALUE)]},vehicleCommercial:{validators:[_e]},vehicleLoadType:{validators:[We(["USHazmatClass1","USHazmatClass2","USHazmatClass3","USHazmatClass4","USHazmatClass5","USHazmatClass6","USHazmatClass7","USHazmatClass8","USHazmatClass9","otherHazmatExplosive","otherHazmatGeneral","otherHazmatHarmfulToWater"],"vehicle load type")],converters:[Lr]},constantSpeedConsumptionInLitersPerHundredkm:{validators:[$r("combustion")],converters:[Dr]},currentFuelInLiters:{validators:[Qr("combustion","currentFuelInLiters")]},auxiliaryPowerInLitersPerHour:{validators:[Qr("combustion","auxiliaryPowerInLitersPerHour")]},fuelEnergyDensityInMJoulesPerLiter:{validators:[function(e,t){e&&(Kr(t),zr(e),Zr(t),Gr(t,"combustion"),function(e,t){if(!(O(e.accelerationEfficiency)&&O(e.decelerationEfficiency)&&O(e.uphillEfficiency)&&O(e.downhillEfficiency)))throw new Error("Efficiency parameters are required when using "+t)}(t,"fuelEnergyDensityInMJoulesPerLiter"))}]},accelerationEfficiency:{validators:[Xr("accelerationEfficiency","decelerationEfficiency")]},decelerationEfficiency:{validators:[Xr("decelerationEfficiency","accelerationEfficiency")]},uphillEfficiency:{validators:[Xr("uphillEfficiency","downhillEfficiency")]},downhillEfficiency:{validators:[Xr("downhillEfficiency","uphillEfficiency")]},constantSpeedConsumptionInkWhPerHundredkm:{validators:[$r("electric")],converters:[Dr]},currentChargeInkWh:{validators:[Jr("currentChargeInkWh","maxChargeInkWh")]},maxChargeInkWh:{validators:[Jr("maxChargeInkWh","currentChargeInkWh")]},auxiliaryPowerInkW:{validators:[Qr("electric","auxiliaryPowerInkW")]},protocol:{validators:[Z(["http","https"],"protocol")]},avoidAreas:{converters:[function(e){if(!Array.isArray(e))throw new TypeError("An array is required");return{rectangles:e.map((e=>({southWestCorner:Tr(Sr(e.southWestCorner)),northEastCorner:Tr(Sr(e.northEastCorner))})))}}],application:it},avoidVignette:{validators:[Ve.bind(void 0,!1),to("avoidVignette","allowVignette")],converters:[Lr],application:it},allowVignette:{validators:[Ve.bind(void 0,!0),to("allowVignette","avoidVignette")],converters:[Lr],application:it},recuperationInkWhPerkmAltitudeLoss:{validators:[no("recuperationInkWhPerkmAltitudeLoss","consumptionInkWhPerkmAltitudeGain"),oo]},consumptionInkWhPerkmAltitudeGain:{validators:[no("consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"),oo]},vehicleAdrTunnelRestrictionCode:{validators:[Z(["B","C","D","E"],"vehicleAdrTunnelRestrictionCode")]}};let Yo={__all:{validators:[function(e,t){const n=["fuelBudgetInLiters"in t,"energyBudgetInkWh"in t,"timeBudgetInSec"in t,"distanceBudgetInMeters"in t].filter((e=>e)).length;if(0===n||n>1)throw new Error("Exactly one of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and distanceBudgetInMeters must be set.")},function(e,t){const n="alreadyUsedRoads";if("avoid"in t&&t.avoid.indexOf(n)>-1)throw new Error(n+" is not allowed value for avoid parameter in Calculate Reachable Route request.");if("travelMode"in t&&["bicycle","pedestrian"].indexOf(t.travelMode)>-1)throw new Error(t.travelMode+" is not allowed value for travelMode parameter in Calculate Reachable Route request.");if("arriveAt"in t)throw new Error("arriveAt parameter is not allowed in Calculate Reachable Route request.")}]},origin:{validators:[Me],converters:[Ar],application:st},fuelBudgetInLiters:{validators:[eo,Yr]},energyBudgetInkWh:{validators:[eo,Yr]},distanceBudgetInMeters:{validators:[xe(0,Number.MAX_VALUE)]},timeBudgetInSec:{validators:[xe(0,Number.MAX_VALUE)]}};Yo=x(Yo,Jo);const ea=new Ze;var ta=e=>(e.reachableRange&&e.reachableRange.boundary&&Array.isArray(e.reachableRange.boundary)&&(e.reachableRange.boundary=ea.convert(e.reachableRange.boundary),e.reachableRange.center=ea.convert(e.reachableRange.center)),Object.assign(e,{toGeoJson:()=>(e=>({type:"Feature",geometry:{type:"Polygon",coordinates:[e.reachableRange.boundary.map((e=>[e.lng,e.lat]))]}}))(e)})),na=e=>Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:ta(e.response))),e):null;const ra=(e=>{const t=A(Yo);return e instanceof Array&&e.forEach((function(e){delete t[e]})),t})();function oa(e,t){const n=rr(Nt),r=pr(100,{batchSync:zt,batch:Wt,single:Ht});return gn(ra,y,"calculateReachableRange",((e,t)=>n(ra,e,t).then((e=>ft(e,ta)))),((e,t)=>r(ra,e,t).then((e=>ft(e,na)))))(e,t)}function aa(e){const t=[];for(let n=0;n<e.length;n+=1)t.push([e[n].lng,e[n].lat]);return t}function ia(e){const t=e.legs.length>1,n=function(e){return{type:"Feature",properties:{summary:e.summary,sections:e.sections,segmentSummary:[]}}}(e);for(let r=0;r<e.legs.length;r+=1)n.properties.segmentSummary.push(e.legs[r].summary),e.legs[r].points&&(n.geometry=n.geometry||{coordinates:[]},t?(n.geometry.type="MultiLineString",n.geometry.coordinates.push(aa(e.legs[r].points))):(n.geometry.type="LineString",n.geometry.coordinates=aa(e.legs[r].points)));return e.guidance&&(n.properties.guidance=e.guidance),n}const sa=new Ze,ca=(e,t,n)=>{n&&(e[t]=n)};function la(e){const t=e.routes;return t&&t.length&&t.forEach((e=>{e.legs.forEach((e=>{e.points=sa.convert(e.points)}))})),Object.assign(e,{toGeoJson:()=>(e=>{const t={type:"FeatureCollection",features:[]};if(!e||!e.routes)return t;for(let n=0;n<e.routes.length;n+=1)t.features.push(ia(e.routes[n]));return t})(e),toRouteSectionsCollection:()=>(e=>{const t=[];return e&&e.routes?(e.routes.forEach((e=>{const n=[];for(let t=0;t<e.legs.length;t+=1)n.push(...e.legs[t].points);const r={type:"FeatureCollection",features:[]};e.sections.forEach((e=>{let t=n.slice(e.startPointIndex,e.endPointIndex+1);t=t.map((e=>[e.lng,e.lat]));const o={type:"Feature",geometry:{type:"LineString"},properties:{}};o.geometry.coordinates=t,ca(o.properties,"sectionType",e.sectionType),ca(o.properties,"travelMode",e.travelMode),ca(o.properties,"countryCode",e.countryCode),ca(o.properties,"simpleCategory",e.simpleCategory),ca(o.properties,"effectiveSpeedInKmh",e.effectiveSpeedInKmh),ca(o.properties,"delayInSeconds",e.delayInSeconds),ca(o.properties,"magnitudeOfDelay",e.delayInSeconds),ca(o.properties,"tec",e.tec),r.features.push(o)})),t.push(r)})),t):t})(e)})}function ua(e){return Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:la(e.response))),e):null}let pa={alternativeType:{validators:[Z(["anyRoute","betterRoute"],"alternativeType")]},locations:{validators:[function(e){const t=j,n=k;e.constructor.toString().indexOf("Array")>-1&&(e=e.join(":"));const r=new RegExp("^"+t.source+":(?:(?:"+t.source+"|"+n.source+"):)*"+t.source+"$");if(!e.match(r))throw new TypeError("Routing location is expected. But "+e+" ["+typeof e+"] given");return e}],converters:[function(e){const t=[];if(V()(e))return e.split(":").map((e=>e.split(",").reverse().join(","))).join(":");if(Array.isArray(e)){mr(e.length<2,"Unable to cast "+e+" ["+typeof e+"] to routing locations string"),t.push(Sr(e[0]));for(let n=1;n<e.length-1;n+=1)t.push(Er(e[n]));return t.push(Sr(e[e.length-1])),t.join(":")}throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to routing locations string")}],required:!0,application:st},maxAlternatives:{validators:[xe(0,5)]},instructionsType:{validators:[Z(["coded","text","tagged"],"instructions type")]},language:{validators:[function(e){const t=Object.keys(z);return T(e,t,"Supported routing guidance language is expected to be one of: "+t+"), but "+e+" ["+typeof e+"] given")}],converters:[function(e){return Or(e,z)}]},computeBestOrder:{validators:[_e]},routeRepresentation:{validators:[Z(["polyline","none"],"route representation")]},computeTravelTimeFor:{validators:[Z(["none","all"],"compute travel time for")]},vehicleHeading:{validators:[Te(0,359)]},minDeviationDistance:{validators:[Pe,to("minDeviationDistance","arriveAt"),no("minDeviationDistance","supportingPoints")]},minDeviationTime:{validators:[Pe,to("minDeviationTime","arriveAt"),no("minDeviationTime","supportingPoints")]},supportingPoints:{validators:[function(e){if(!Array.isArray(e))throw new TypeError("Expecting array in supporting points validator");if(!e.length||e.length<2)throw new TypeError("There should be at least two supporting points");return e}],converters:[function(e){const t=[];if(V()(e)&&(e=e.split(":")),Array.isArray(e))for(let n=0;n<e.length;n++)t.push(Sr(e[n]));else t.push(Sr(e));return function(e){return e.map(Tr)}(t)}],application:it},sectionType:{validators:[We(["carTrain","country","ferry","motorway","pedestrian","tollRoad","tollVignette","travelMode","tunnel","traffic"],"sectionType")],converters:[Lr]}};function da(e){pa=x(pa,Jo);const t=A(pa);return e instanceof Array&&e.forEach((function(e){delete t[e]})),t}function fa(e,t){const n=da(),r=rr(Ut),o=pr(100,{batchSync:zt,batch:Wt,single:Bt});return gn(n,y,"calculateRoute",(function(e,t){return r(n,e,t).then((e=>ft(e,la)))}),(function(e,t){return o(n,e,t).then((e=>ft(e,ua)))}))(e,t)}const ha=["arriveAt","travelMode","computeTravelTimeFor","alternativeType","maxAlternatives","instructionsType","language","computeBestOrder","routeRepresentation","supportingPoints","minDeviationDistance","minDeviationTime","constantSpeedConsumptionInLitersPerHundredkm","currentFuelInLiters","fuelEnergyDensityInMJoulesPerLiter","hilliness","windingness","routeType","vehicleEngineType","currentChargeInkWh","maxChargeInkWh","constantSpeedConsumptionInkWhPerHundredkm"],ya={auxiliaryPowerInkW:{validators:[Qr("electric","auxiliaryPowerInkW")]},constantSpeedConsumptionInkWhPerHundredkm:{validators:[$r("electric")],converters:[Dr],required:!0},currentChargeInkWh:{validators:[Jr("currentChargeInkWh","maxChargeInkWh")],required:!0},maxChargeInkWh:{validators:[Jr("maxChargeInkWh","currentChargeInkWh")],required:!0},vehicleEngineType:{validators:[Z(["electric"],"vehicleEngineType")],required:!0},chargingModes:{validators:[function(e){if(e.length>10)throw new Error("Given chargingModes array contains more than 10 elements.");return e.forEach((e=>{ie(e)})),e}],required:!0,application:it},minChargeAtDestinationInkWh:{validators:[xe(0,Number.MAX_VALUE)],required:!0},minChargeAtChargingStopsInkWh:{validators:[xe(0,Number.MAX_VALUE)],required:!0},recuperationInkWhPerkmAltitudeLoss:{validators:[no("recuperationInkWhPerkmAltitudeLoss","consumptionInkWhPerkmAltitudeGain"),oo]},consumptionInkWhPerkmAltitudeGain:{validators:[no("consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"),oo]},vehicleAdrTunnelRestrictionCode:{validators:[Z(["B","C","D","E"],"vehicleAdrTunnelRestrictionCode")]},travelMode:{validators:[Z(["car"],"travel mode")]}};function va(e,t){const n=x(da(ha),ya),r=rr(Kt);return gn(n,y,"longDistanceEVRouting",((e,t)=>r(n,e,t).then((e=>ft(e,la)))))(e,t)}function ga(e){return e.error?{error:e.error}:e.matrix?e:null}const ma=["locations","maxAlternatives","instructionsType","language","computeBestOrder","routeRepresentation","vehicleHeading","report","callback","minDeviationTime","minDeviationDistance","alternativeType","sectionType","supportingPoints","allowVignette","avoidAreas","batchMode","consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"],ba={validators:[function(e){return t=>(t.forEach((t=>ye(e,t))),t)}({point:{validators:[(wa={latitude:{validators:[function(e){return fe(e)}],required:!0},longitude:{validators:[function(e){return ae(e)}],required:!0}},e=>(ye(wa,e),e))]}})],converters:[function(e){return t=>(t.forEach((t=>{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.prototype.hasOwnProperty.call(e,n)&&Array.isArray(e[n].converters)&&e[n].converters.forEach((e=>{R()(e)&&(t[n]=e(t[n]))}))})),t)}({point:{converters:[function(e){return t=>{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.prototype.hasOwnProperty.call(e,n)&&R()(e[n].converter)&&(t[n]=e[n].converter(t[n]));return t}}({latitude:{converters:[function(e){return br(e)}],required:!0},longitude:{converters:[function(e){return wr(e)}],required:!0}})]}})],required:!0,application:it};var wa;function _a(e,t){const n=function(e){const t=da(ma);t.origins=ba,t.destinations=ba,t.batchMode={application:lt},t.waitTimeSeconds={application:ct,validators:[qe]};const n=A(t);return e instanceof Array&&e.forEach((function(e){delete n[e]})),n}(),r=function(e,t){return(n,r,o)=>{const a=Xn(n,r),i=fr(a.postParams),s=a.queryParams,c=a.headerParams;return ur({batchMode:r.batchMode||(i.origins.length*i.destinations.length<=e?"sync":"redirect"),headers:c,waitTimeSeconds:r.waitTimeSeconds,queryParams:s,bodyParams:i,endpoints:{sync:t.sync,async:t.async},abortSignal:o})}}(100,{sync:Gt,async:qt});return gn(n,y,"matrixRouting",((e,t)=>r(n,e,t).then((e=>ft(e,ga)))))(e,t)}const Pa={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}};function Oa(e,t){const n=rr(Qt);return gn(Pa,m,"incidentViewport",(function(e,t){return n(Pa,e,t).then(ft)}))(e,t)}function Sa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ea(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Sa(Object(n),!0).forEach((function(t){xa(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sa(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e){const t=e.flowSegmentData.coordinates.coordinate.map((e=>({lat:e.latitude,lng:e.longitude})));return Object.assign(e,{flowSegmentData:Ea(Ea({},e.flowSegmentData),{},{coordinates:{coordinate:t}})})}const Ia={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},zoom:{validators:[Ae],required:!0,application:st},style:{validators:[Z(["absolute","relative","relative-delay","relative0","relative0-dark","reduced-sensitivity"],"traffic flow style")],required:!0,application:st},point:{converters:[Ar],validators:[Me],required:!0},unit:{validators:[Z(["KMPH","MPH"])]},thickness:{validators:[xe(1,20)]},openLr:{validators:[_e]}};function Aa(e,t){const n=rr(Xt);return gn(Ia,g,"trafficFlowSegmentData",((e,t)=>n(Ia,e,t).then((e=>ft(e,Ta)))))(e,t)}function ja(e,t){return e===t}var ka=n(99),Ca=n.n(ka);const La=new Ze,Ra={0:"Unknown",1:"Accident",2:"Fog",3:"Dangerous Conditions",4:"Rain",5:"Ice",6:"Jam",7:"Lane Closed",8:"Road Closed",9:"Road Works",10:"Wind",11:"Flooding",12:"Detour",13:"Cluster",14:"Broken down vehicle"},Da={0:"unknown",1:"minor",2:"moderate",3:"major",4:"undefined"},Va=(e,t)=>{const n=[],r={};if(r.id=e.id,F()(e.cbl)||F()(e.ctr)||(r.clusterBounds=[[e.cbl.lng,e.cbl.lat],[e.ctr.lng,e.ctr.lat]]),F()(e.op)||(r.originalPosition=[e.op.lng,e.op.lat]),F()(e.ic)||(r.incidentCategory=Ra[e.ic]),F()(e.ty)||(r.incidentSeverity=Da[e.ty]),F()(e.v)||(r.vectorGeometry=e.v),Ye(r,"clusterSize",e.cs),Ye(r,"description",e.d),Ye(r,"incidentCause",e.c),Ye(r,"from",e.f),Ye(r,"to",e.t),Ye(r,"roadNumber",e.r),Ye(r,"delaySeconds",e.dl),Ye(r,"lengthMeters",e.l),Ye(r,"endDate",e.ed),e.cpoi&&!t)n.push(...Ca()(e.cpoi.map((e=>Va(e,!1)))));else{e.cpoi&&(r.features=Ca()(e.cpoi.map((e=>Va(e,!0)))));const t=et(r,"Point");t.geometry.coordinates=[e.p.lng,e.p.lat],n.push(t)}return n},Ma=(e,t)=>{const n={type:"FeatureCollection",features:[]},r=e[0]||e;if(!r||!r.tm||!r.tm.poi)return n;e.length>1&&(r.tm.poi=((e,t,n)=>{n||(n=ja);const r=e.concat(t);for(let t=0;t<e.length;t+=1)for(let o=e.length;o<r.length;o+=1)n(r[t],r[o])&&(r.splice(o,1),o-=1);return r})(e[0].tm.poi,e[1].tm.poi,(function(e,t){return e.id===t.id})));for(let e=0;e<r.tm.poi.length;e+=1)n.features.push(...Va(r.tm.poi[e],t));return n};function Fa(e){return t=>(t=(e=>{const t=e=>e&&e.tm&&e.tm.poi?(e.tm.poi.forEach((e=>{e.cbl&&(e.cbl=La.convert(e.cbl)),e.ctr&&(e.ctr=La.convert(e.ctr)),e.p&&(e.p=La.convert(e.p)),e.cpoi&&Array.isArray(e.cpoi)&&e.cpoi.forEach((e=>{e.p=La.convert(e.p)})),e.op&&(e.op=La.convert(e.op))})),e):e;return Array.isArray(e)?e.map(t):t(e)})(t),Object.assign(t,{toGeoJson:()=>Ma(t,e)}))}const Ua={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},zoomLevel:{validators:[Ae],required:!0,application:st,name:"zoom"},boundingBox:{converters:[Ir],validators:[Ee],required:!0,application:st,cast:(e,t)=>{t.minLon=e.minLon,t.maxLon=e.maxLon,t.minLat=e.minLat,t.maxLat=e.maxLat}},style:{validators:[Z(["s0","s0-dark","s1","s2","s3","night"],"traffic style")],required:!0,application:st},language:{converters:[function(e){return Or(e,W)}],validators:[function(e){const t=["ar","ca","cs","da","de","el","en","en-GB","en-US","es","et","fi","fr","he","hu","id","it","lt","lv","nb","nl","no","pl","pt","ro","ru","sk","sv","th","tr","zh"];return T(e,t,"Supported traffic incidents language is expected to be one of: "+t+"), but "+e+" ["+typeof e+"] given")}]},trafficModelID:{validators:[Ie],defaultValue:"-1",application:st},geometries:{validators:[Z(["shifted","original"],"traffic geometries")]},expandCluster:{validators:[_e],defaultValue:!1},preserveCluster:{validators:[_e],defaultValue:!1},originalPosition:{validators:[_e],defaultValue:!1},protocol:{validators:[Z(["http","https"],"protocol")]},projection:{defaultValue:"EPSG4326"}};function Na(e,t){const n=rr(Zt);return gn(Ua,m,"incidentDetails",(function(e,t){const r=Fa(e.preserveCluster);return n(Ua,e,t).then((e=>ft(e,r)))}))(e,t)}const Ba={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},boundingBox:{required:!0,validators:[Ee],converters:[Ir],cast:(e,t)=>{t.bbox="".concat(e.minLon,",").concat(e.minLat,",").concat(e.maxLon,",").concat(e.maxLat)}},fields:{validators:[Ie,function(e){const t=I(ee),n=I(e),r=(e,t)=>{Object.keys(e).forEach((function(n){if(!t.hasOwnProperty(n)||typeof e[n]!=typeof t[n])throw new TypeError("Property ".concat(n," not matches available fields: ")+ee);"object"==typeof e[n]&&r(e[n],t[n])}))};return r(n,t),e}],converters:[function(e){if("string"==typeof e)return e.replace(/\s/g,"");throw new TypeError("A string is required")}]},t:{validators:[Ie]},language:{validators:[ke],converters:[function(e){return Or(e,G)}]}};function Wa(e,t){const n=rr($t);return gn(Ba,m,"incidentDetailsV5",(function(e,t){return n(Ba,e,t).then(ft)}))(e,t)}const za=Jt,qa={basic:["jpg","jpeg","png"],hybrid:["png"],labels:["png"]},Ga={layer:{validators:[Z(["basic","hybrid","labels"],"layers")],defaultValue:"basic"},style:{validators:[Z(["main","night"],"styles")],defaultValue:"main"},format:{validators:[Z(["png","jpg","jpeg"],"formats")],defaultValue:"png"},key:{validators:[H]},zoom:{validators:[Te(0,23)],converters:[Rr]},center:{converters:[Ar],validators:[Me]},width:{validators:[Te(1,8192)]},height:{validators:[Te(1,8192)]},bbox:{validators:[Ee],converters:[Ir]},view:{validators:[Z(["Unified","IL","IN","MA","PK","AR","Arabic","TR","RU","CN"],"view")]},language:{validators:[function(e){return T(e,J,"Supported maps language is expected to be one of: "+J+"), but "+e+" ["+typeof e+"] given")}]}};function Ha(e){const t=Object.keys(Ga).reduce((function(t,n){let r=e[n];return void 0!==r&&(r=function(e,t){if("bbox"===e)t=(n=t).minLon+","+n.minLat+","+n.maxLon+","+n.maxLat;else{if("zoom"===e)return String(parseInt(t,10));if("center"===e){const e=t.split(","),n=[parseFloat(e[1]),parseFloat(e[0])];return n[0]+","+n[1]}}var n;return t}(n,r),t.push(n+"="+encodeURI(r))),t}),[]);return za+"?"+t.join("&")}function Ka(e,t){return gn(Ga,h,"staticImage",(function(e){return function(e){if(!qa[e.layer]||-1===qa[e.layer].indexOf(e.format))throw new Error("Unsupported layer. Please change to PNG or use basic layer.");if(e.bbox&&e.center)throw new Error("The bbox and center properties cannot be used together");if(!e.bbox&&!e.center)throw new Error("Either bbox or center property must be provided");if(e.bbox&&(P(e.width)||P(e.height)))throw new Error("The bbox, width and height properties cannot be used together")}(e),Ha(e)}))(e,t)}const Za=(()=>({key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},boundingBox:{validators:[Ee],converters:[Ir],application:st,cast:(e,t)=>{t.minLon=e.minLon,t.maxLon=e.maxLon,t.minLat=e.minLat,t.maxLat=e.maxLat}},zoom:{validators:[Ae],converters:[Rr],application:st},x:{validators:[Se],converters:[Rr],application:st},y:{validators:[Se],converters:[Rr],application:st},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}}))();function $a(e,t){const n=rr(vt),r=rr(gt),o=rr(yt);return gn(Za,h,"copyrights",(function(e,t){return function(e,t,a){return t.boundingBox?n(e,t,a):t.zoom?r(e,t,a):o(e,t,a)}(Za,e,t).then(ft)}))(e,t)}const Qa={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}};function Xa(e,t){const n=rr(mt);return gn(Qa,h,"copyrightsCaption",(function(e,t){return n(Qa,e,t).then(ft)}))(e,t)}function Ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ya(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ja(Object(n),!0).forEach((function(t){ei(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ja(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ei(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ti={sdkInfo:{version:s()["sdk.version"]},setProductInfo:(e,t)=>{if(!e)throw new Error("ProductId needs to be set");const n=t||0===t?"/"+t:"";u().productInfo=e+n},services:Ya(Ya(Ya(Ya({},e),t),o),a)}}(),r=r.default}()}));
//# sourceMappingURL=services.min.js.map

/***/ }),

/***/ "9tiU":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/core/leaflet.directive.wrapper.js ***!
  \**********************************************************************************************************/
/*! exports provided: LeafletDirectiveWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDirectiveWrapper", function() { return LeafletDirectiveWrapper; });
var LeafletDirectiveWrapper = /** @class */ (function () {
    function LeafletDirectiveWrapper(leafletDirective) {
        this.leafletDirective = leafletDirective;
    }
    LeafletDirectiveWrapper.prototype.init = function () {
        // Nothing for now
    };
    LeafletDirectiveWrapper.prototype.getMap = function () {
        return this.leafletDirective.getMap();
    };
    return LeafletDirectiveWrapper;
}());

//# sourceMappingURL=leaflet.directive.wrapper.js.map

/***/ }),

/***/ "CACp":
/*!****************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/results-list/results-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResultsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsListComponent", function() { return ResultsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ResultsListComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsListComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const result_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectResult(result_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r1.displayName, " ");
} }
class ResultsListComponent {
    constructor() {
        this.locationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectResult(result) {
        this.locationSelected.emit(result);
    }
}
ResultsListComponent.ɵfac = function ResultsListComponent_Factory(t) { return new (t || ResultsListComponent)(); };
ResultsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsListComponent, selectors: [["app-results-list"]], inputs: { results: "results" }, outputs: { locationSelected: "locationSelected" }, decls: 6, vars: 1, consts: [["id", "results-list"], ["id", "results"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function ResultsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResultsListComponent_li_5_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#results-list[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n  }\n  \n  #results[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoicmVzdWx0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVzdWx0cy1saXN0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAjcmVzdWx0cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"] });


/***/ }),

/***/ "Ck+l":
/*!**********************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/shop-google-api/shop-google-api.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ShopGoogleApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopGoogleApiComponent", function() { return ShopGoogleApiComponent; });
/* harmony import */ var _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomtom-international/web-sdk-maps */ "OAsu");
/* harmony import */ var _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_module_sticky_modules_maps_tomtom_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/module/sticky/modules/maps/tomtom-map.service */ "pL2d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
// import { Loader } from '@googlemaps/js-api-loader';
// import { google } from "google-maps";





function ShopGoogleApiComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.company.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.address.geo.lng);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.address.geo.lat);
} }
// declare var google : google;
class ShopGoogleApiComponent {
    constructor(httpclient, mapService) {
        this.httpclient = httpclient;
        this.mapService = mapService;
        this.title = 'my-map-app';
        this.speedyPizzaCoordinates = [21.016028, 105.800520];
    }
    ngOnInit() {
        this.mapService.geoCoding("Athena coffee hanoi");
        this.map = _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.map({
            container: 'map',
            key: 'PNAk0ku7BFNMCaRADAGi0c45eDwbYPJv',
            center: [21.016028, 105.800520],
            zoom: 15
        });
        let marker = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.Marker().setLngLat([21.016028, 105.800520]).addTo(this.map);
        let popup = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.Popup({ offset: {
                top: [0, 0],
                bottom: [0, -70],
                'bottom-right': [0, -70],
                'bottom-left': [0, -70],
                left: [25, -35],
                right: [-25, -35]
            } }).setHTML("<b>Speedy's pizza</b><br/>100 Century Center Ct 210, San Jose, CA 95112, USA");
        marker.setPopup(popup).togglePopup();
        // this.map = tt.map({
        //   key: 'PNAk0ku7BFNMCaRADAGi0c45eDwbYPJv',
        //   container: 'map',
        //   style: 'tomtom://vector/1/basic-main',
        //   zoom:1.2
        // });
        // this.map.addControl(new tt.FullscreenControl());
        // this.map.addControl(new tt.NavigationControl());
        // this.getJsonData();
    }
    getJsonData() {
        this.httpclient.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
            this.userData = res;
            for (var i = 0; i < this.userData.length; i++) {
                this.marker = new _tomtom_international_web_sdk_maps__WEBPACK_IMPORTED_MODULE_0___default.a.Marker({ draggable: false })
                    .setLngLat([this.userData[i].address.geo.lng, this.userData[i].address.geo.lat])
                    .addTo(this.map);
            }
        });
    }
    search() {
        //  this.mapService.searchWithQuery().then(function(response) {
        //   map = tt.map({
        // 	key: API_KEY,
        // 	container: 'map-div',
        // 	center: response.results[0].position,
        // 	zoom: 12
        //   });
        // });
    }
}
ShopGoogleApiComponent.ɵfac = function ShopGoogleApiComponent_Factory(t) { return new (t || ShopGoogleApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_module_sticky_modules_maps_tomtom_map_service__WEBPACK_IMPORTED_MODULE_3__["TomtomMapService"])); };
ShopGoogleApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShopGoogleApiComponent, selectors: [["app-shop-google-api"]], decls: 14, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["id", "map", 1, "map"]], template: function ShopGoogleApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ShopGoogleApiComponent_tr_12_Template, 9, 4, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n\n\n#map {\n    height: 80vh;\n    width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtZ29vZ2xlLWFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzaG9wLWdvb2dsZS1hcGkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbiNtYXAge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogODB2dztcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "GL7m":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-layer.directive.js ***!
  \**********************************************************************************************************/
/*! exports provided: LeafletLayerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayerDirective", function() { return LeafletLayerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/leaflet.directive */ "TTNa");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ "9tiU");
/* harmony import */ var _core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/leaflet.util */ "tjn2");




/**
 * Layer directive
 *
 * This directive is used to directly control a single map layer. The purpose of this directive is to
 * be used as part of a child structural directive of the map element.
 *
 */


var LeafletLayerDirective = /** @class */ (function () {
    function LeafletLayerDirective(leafletDirective, zone) {
        this.zone = zone;
        // Layer Events
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
    }
    LeafletLayerDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
    };
    LeafletLayerDirective.prototype.ngOnDestroy = function () {
        if (null != this.layer) {
            // Unregister the event handlers
            this.removeLayerEventListeners(this.layer);
            // Remove the layer from the map
            this.layer.remove();
        }
    };
    LeafletLayerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['layer']) {
            // Update the layer
            var p_1 = changes['layer'].previousValue;
            var n_1 = changes['layer'].currentValue;
            this.zone.runOutsideAngular(function () {
                if (null != p_1) {
                    _this.removeLayerEventListeners(p_1);
                    p_1.remove();
                }
                if (null != n_1) {
                    _this.addLayerEventListeners(n_1);
                    _this.leafletDirective.getMap().addLayer(n_1);
                }
            });
        }
    };
    LeafletLayerDirective.prototype.addLayerEventListeners = function (l) {
        var _this = this;
        this.onAddLayerHandler = function (e) { return _core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__["LeafletUtil"].handleEvent(_this.zone, _this.onAdd, e); };
        l.on('add', this.onAddLayerHandler);
        this.onRemoveLayerHandler = function (e) { return _core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__["LeafletUtil"].handleEvent(_this.zone, _this.onRemove, e); };
        l.on('remove', this.onRemoveLayerHandler);
    };
    LeafletLayerDirective.prototype.removeLayerEventListeners = function (l) {
        l.off('add', this.onAddLayerHandler);
        l.off('remove', this.onRemoveLayerHandler);
    };
    LeafletLayerDirective.ctorParameters = function () { return [
        { type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    LeafletLayerDirective.propDecorators = {
        layer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletLayer',] }],
        onAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletLayerAdd',] }],
        onRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletLayerRemove',] }]
    };
LeafletLayerDirective.ɵfac = function LeafletLayerDirective_Factory(t) { return new (t || LeafletLayerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LeafletLayerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafletLayerDirective, selectors: [["", "leafletLayer", ""]], inputs: { layer: ["leafletLayer", "layer"] }, outputs: { onAdd: "leafletLayerAdd", onRemove: "leafletLayerRemove" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletLayerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[leafletLayer]'
            }]
    }], function () { return [{ type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { onAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletLayerAdd']
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletLayerRemove']
        }], layer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletLayer']
        }] }); })();
    return LeafletLayerDirective;
}());


//# sourceMappingURL=leaflet-layer.directive.js.map

/***/ }),

/***/ "Hq5+":
/*!******************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/leaflet.module.js ***!
  \******************************************************************************************/
/*! exports provided: LeafletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletModule", function() { return LeafletModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/leaflet.directive */ "TTNa");
/* harmony import */ var _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/leaflet-layer.directive */ "GL7m");
/* harmony import */ var _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/leaflet-layers.directive */ "Y6vS");
/* harmony import */ var _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers/control/leaflet-control-layers.directive */ "XXBV");
/* harmony import */ var _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layers/base/leaflet-baselayers.directive */ "dDCi");







var LeafletModule = /** @class */ (function () {
    function LeafletModule() {
    }
LeafletModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LeafletModule });
LeafletModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LeafletModule_Factory(t) { return new (t || LeafletModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LeafletModule, { declarations: function () { return [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
        _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
        _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
        _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
        _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]]; }, exports: function () { return [_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
        _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
        _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
        _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
        _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
                    _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
                    _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
                    _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
                    _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]
                ],
                declarations: [
                    _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"],
                    _layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletLayerDirective"],
                    _layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_3__["LeafletLayersDirective"],
                    _layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayersControlDirective"],
                    _layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletBaseLayersDirective"]
                ]
            }]
    }], function () { return []; }, null); })();
    return LeafletModule;
}());


//# sourceMappingURL=leaflet.module.js.map

/***/ }),

/***/ "KIL+":
/*!***************************************************************!*\
  !*** ./src/app/module/sticky/modules/maps/constants.model.ts ***!
  \***************************************************************/
/*! exports provided: BASE_NOMINATIM_URL, DEFAULT_VIEW_BOX, DEFAULT_LATITUDE, DEFAULT_LONGITUDE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_NOMINATIM_URL", function() { return BASE_NOMINATIM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_BOX", function() { return DEFAULT_VIEW_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LATITUDE", function() { return DEFAULT_LATITUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LONGITUDE", function() { return DEFAULT_LONGITUDE; });
const BASE_NOMINATIM_URL = 'nominatim.openstreetmap.org';
const DEFAULT_VIEW_BOX = 'viewbox=-25.0000%2C70.0000%2C50.0000%2C40.0000';
const DEFAULT_LATITUDE = 21.016548575018312;
const DEFAULT_LONGITUDE = 105.80049600853822;


/***/ }),

/***/ "LFOW":
/*!******************************************************************!*\
  !*** ./src/app/module/sticky/modules/maps/nominatim.service.ts ***!
  \******************************************************************/
/*! exports provided: NominatimService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NominatimService", function() { return NominatimService; });
/* harmony import */ var _nominatim_response_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nominatim-response.model */ "1g5a");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.model */ "KIL+");
/* harmony import */ var _common_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/http/http.service */ "ivkc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class NominatimService extends _common_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] {
    constructor() {
        super();
    }
    addressLookup(req) {
        let url = `https://${_constants_model__WEBPACK_IMPORTED_MODULE_2__["BASE_NOMINATIM_URL"]}/search?format=json&q=${req}&${_constants_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_VIEW_BOX"]}&bounded=1`;
        return this.httpClient
            .get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data.map((item) => new _nominatim_response_model__WEBPACK_IMPORTED_MODULE_0__["NominatimResponse"](item.lat, item.lon, item.display_name))));
    }
    addressLookupCoordinates(lat, lon) {
        let url = `https://${_constants_model__WEBPACK_IMPORTED_MODULE_2__["BASE_NOMINATIM_URL"]}/reverse?format=json&lat=${lat}&lon=${lon}&${_constants_model__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_VIEW_BOX"]}&bounded=1`;
        return this.httpClient
            .get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((item) => new _nominatim_response_model__WEBPACK_IMPORTED_MODULE_0__["NominatimResponse"](item.lat, item.lon, item.display_name)));
    }
}
NominatimService.ɵfac = function NominatimService_Factory(t) { return new (t || NominatimService)(); };
NominatimService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NominatimService, factory: NominatimService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NA9L":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-tile-layer-definition.model.js ***!
  \**********************************************************************************************************************/
/*! exports provided: LeafletTileLayerDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletTileLayerDefinition", function() { return LeafletTileLayerDefinition; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

var LeafletTileLayerDefinition = /** @class */ (function () {
    function LeafletTileLayerDefinition(type, url, options) {
        this.type = type;
        this.url = url;
        this.options = options;
    }
    /**
     * Creates a TileLayer from the provided definition. This is a convenience function
     * to help with generating layers from objects.
     *
     * @param layerDef The layer to create
     * @returns {TileLayer} The TileLayer that has been created
     */
    LeafletTileLayerDefinition.createTileLayer = function (layerDef) {
        var layer;
        switch (layerDef.type) {
            case 'xyz':
                layer = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"])(layerDef.url, layerDef.options);
                break;
            case 'wms':
            default:
                layer = leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"].wms(layerDef.url, layerDef.options);
                break;
        }
        return layer;
    };
    /**
     * Creates a TileLayer for each key in the incoming map. This is a convenience function
     * for generating an associative array of layers from an associative array of objects
     *
     * @param layerDefs A map of key to tile layer definition
     * @returns {{[p: string]: TileLayer}} A new map of key to TileLayer
     */
    LeafletTileLayerDefinition.createTileLayers = function (layerDefs) {
        var layers = {};
        for (var k in layerDefs) {
            if (layerDefs.hasOwnProperty(k)) {
                layers[k] = (LeafletTileLayerDefinition.createTileLayer(layerDefs[k]));
            }
        }
        return layers;
    };
    /**
     * Create a Tile Layer from the current state of this object
     *
     * @returns {TileLayer} A new TileLayer
     */
    LeafletTileLayerDefinition.prototype.createTileLayer = function () {
        return LeafletTileLayerDefinition.createTileLayer(this);
    };
    return LeafletTileLayerDefinition;
}());

//# sourceMappingURL=leaflet-tile-layer-definition.model.js.map

/***/ }),

/***/ "OAsu":
/*!**************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-maps/dist/maps.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//# sourceMappingURL=maps.min.js.map

/***/ }),

/***/ "OwhE":
/*!*************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js ***!
  \*************************************************************************/
/*! exports provided: LeafletModule, LeafletDirective, LeafletDirectiveWrapper, LeafletUtil, LeafletLayerDirective, LeafletLayersDirective, LeafletTileLayerDefinition, LeafletBaseLayersDirective, LeafletLayersControlDirective, LeafletControlLayersWrapper, LeafletControlLayersConfig, LeafletControlLayersChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaflet/leaflet.module */ "Hq5+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletModule", function() { return _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__["LeafletModule"]; });

/* harmony import */ var _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive */ "TTNa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletDirective", function() { return _leaflet_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"]; });

/* harmony import */ var _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet/core/leaflet.directive.wrapper */ "9tiU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletDirectiveWrapper", function() { return _leaflet_core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"]; });

/* harmony import */ var _leaflet_core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet/core/leaflet.util */ "tjn2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletUtil", function() { return _leaflet_core_leaflet_util__WEBPACK_IMPORTED_MODULE_3__["LeafletUtil"]; });

/* harmony import */ var _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layer.directive */ "GL7m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayerDirective", function() { return _leaflet_layers_leaflet_layer_directive__WEBPACK_IMPORTED_MODULE_4__["LeafletLayerDirective"]; });

/* harmony import */ var _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaflet/layers/leaflet-layers.directive */ "Y6vS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersDirective", function() { return _leaflet_layers_leaflet_layers_directive__WEBPACK_IMPORTED_MODULE_5__["LeafletLayersDirective"]; });

/* harmony import */ var _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaflet/layers/leaflet-tile-layer-definition.model */ "NA9L");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletTileLayerDefinition", function() { return _leaflet_layers_leaflet_tile_layer_definition_model__WEBPACK_IMPORTED_MODULE_6__["LeafletTileLayerDefinition"]; });

/* harmony import */ var _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leaflet/layers/base/leaflet-baselayers.directive */ "dDCi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletBaseLayersDirective", function() { return _leaflet_layers_base_leaflet_baselayers_directive__WEBPACK_IMPORTED_MODULE_7__["LeafletBaseLayersDirective"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers.directive */ "XXBV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersControlDirective", function() { return _leaflet_layers_control_leaflet_control_layers_directive__WEBPACK_IMPORTED_MODULE_8__["LeafletLayersControlDirective"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers.wrapper */ "PIrj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersWrapper", function() { return _leaflet_layers_control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_9__["LeafletControlLayersWrapper"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers-config.model */ "a1D6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersConfig", function() { return _leaflet_layers_control_leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_10__["LeafletControlLayersConfig"]; });

/* harmony import */ var _leaflet_layers_control_leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leaflet/layers/control/leaflet-control-layers-changes.model */ "yPUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersChanges", function() { return _leaflet_layers_control_leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_11__["LeafletControlLayersChanges"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ "PIrj":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers.wrapper.js ***!
  \*************************************************************************************************************************/
/*! exports provided: LeafletControlLayersWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersWrapper", function() { return LeafletControlLayersWrapper; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaflet-control-layers-changes.model */ "yPUA");


var LeafletControlLayersWrapper = /** @class */ (function () {
    function LeafletControlLayersWrapper(zone, layersControlReady) {
        this.zone = zone;
        this.layersControlReady = layersControlReady;
    }
    LeafletControlLayersWrapper.prototype.getLayersControl = function () {
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.init = function (controlConfig, controlOptions) {
        var _this = this;
        var baseLayers = controlConfig.baseLayers || {};
        var overlays = controlConfig.overlays || {};
        // Create the control outside of angular to ensure events don't trigger change detection
        this.zone.runOutsideAngular(function () {
            _this.layersControl = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].layers(baseLayers, overlays, controlOptions);
        });
        this.layersControlReady.emit(this.layersControl);
        return this.layersControl;
    };
    LeafletControlLayersWrapper.prototype.applyBaseLayerChanges = function (changes) {
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != this.layersControl) {
            results = this.applyChanges(changes, this.layersControl.addBaseLayer);
        }
        return results;
    };
    LeafletControlLayersWrapper.prototype.applyOverlayChanges = function (changes) {
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != this.layersControl) {
            results = this.applyChanges(changes, this.layersControl.addOverlay);
        }
        return results;
    };
    LeafletControlLayersWrapper.prototype.applyChanges = function (changes, addFn) {
        var _this = this;
        var results = new _leaflet_control_layers_changes_model__WEBPACK_IMPORTED_MODULE_1__["LeafletControlLayersChanges"]();
        if (null != changes) {
            // All layer management is outside angular to avoid layer events from triggering change detection
            this.zone.runOutsideAngular(function () {
                changes.forEachChangedItem(function (c) {
                    _this.layersControl.removeLayer(c.previousValue);
                    addFn.call(_this.layersControl, c.currentValue, c.key);
                    results.layersChanged++;
                });
                changes.forEachRemovedItem(function (c) {
                    _this.layersControl.removeLayer(c.previousValue);
                    results.layersRemoved++;
                });
                changes.forEachAddedItem(function (c) {
                    addFn.call(_this.layersControl, c.currentValue, c.key);
                    results.layersAdded++;
                });
            });
        }
        return results;
    };
    return LeafletControlLayersWrapper;
}());

//# sourceMappingURL=leaflet-control-layers.wrapper.js.map

/***/ }),

/***/ "Q9AX":
/*!************************************************************!*\
  !*** ./src/app/view/shop/shop-item/shop-item.component.ts ***!
  \************************************************************/
/*! exports provided: ShopItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopItemComponent", function() { return ShopItemComponent; });
/* harmony import */ var _module_sticky_modules_review_review_request_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../module/sticky/modules/review/review-request.payload */ "xP/o");
/* harmony import */ var src_app_module_sticky_component_base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/component/base-list.component */ "LqhL");
/* harmony import */ var src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/sticky/modules/shop/shop-request.payload */ "+AN7");
/* harmony import */ var src_app_module_sticky_modules_user_shop_user_shop_request_payload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/module/sticky/modules/user-shop/user-shop-request.payload */ "7mip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/module/sticky/common/notification/notification.service */ "w6oe");
/* harmony import */ var src_app_module_sticky_modules_user_shop_user_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/module/sticky/modules/user-shop/user-shop.service */ "rF8k");
/* harmony import */ var src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/module/sticky/modules/shop/shop.service */ "m4aj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _module_sticky_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../module/sticky/modules/auth/auth.service */ "8VXs");
/* harmony import */ var src_app_module_sticky_modules_review_review_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/module/sticky/modules/review/review.service */ "R1yZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_view_reviewer_review_add_review_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/view/reviewer/review-add/review-add.component */ "gqqX");
/* harmony import */ var _module_sticky_base_base_waiting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../module/sticky/base/base-waiting.component */ "vR4d");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/togglebutton */ "Y+ZO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _module_sticky_review_review_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../module/sticky/review/review.component */ "IaCn");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/carousel */ "LwO5");























function ShopItemComponent_app_waiting_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-waiting");
} }
function ShopItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ShopItemComponent_app_waiting_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-waiting");
} }
function ShopItemComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-toggleButton", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ShopItemComponent_div_7_div_1_Template_p_toggleButton_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.status = $event; })("onChange", function ShopItemComponent_div_7_div_1_Template_p_toggleButton_onChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.saveShop($event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r7.status);
} }
const _c0 = function () { return ["/login"]; };
function ShopItemComponent_div_7_p_messages_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", " to save this shop!", "");
} }
function ShopItemComponent_div_7_p_messages_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-messages", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_7_p_messages_2_ng_template_1_Template, 4, 3, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_7_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r14.name + " ", " ");
} }
function ShopItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_7_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShopItemComponent_div_7_p_messages_2_Template, 2, 0, "p-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "General information");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ShopItemComponent_div_7_span_11_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.authService.isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.authService.isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "Name: " + ctx_r3.shopItem.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "Description: " + ctx_r3.shopItem.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "Categories:", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.shopItem.shopCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"]("", ctx_r3.shopItem.address, "", ctx_r3.shopItem.street, "", ctx_r3.shopItem.district, "", ctx_r3.shopItem.city, "");
} }
function ShopItemComponent_div_11_p_messages_45_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No data to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_p_messages_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-messages", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_11_p_messages_45_ng_template_1_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r23, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", "There is a picture here");
} }
function ShopItemComponent_div_11_p_messages_50_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " to start a review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function ShopItemComponent_div_11_p_messages_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-messages", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_11_p_messages_50_ng_template_1_Template, 4, 2, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_p_messages_51_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Start a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ShopItemComponent_div_11_p_messages_51_ng_template_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r26.onReviewAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "now! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_p_messages_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-messages", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_11_p_messages_51_ng_template_1_Template, 5, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_p_messages_52_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No data to display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_p_messages_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-messages", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ShopItemComponent_div_11_p_messages_52_ng_template_1_Template, 2, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_11_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-review", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("event", function ShopItemComponent_div_11_div_54_Template_app_review_event_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r30.initData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", i_r29.id)("service", ctx_r20.reviewService)("userName", i_r29.name);
} }
function ShopItemComponent_div_11_app_waiting_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-waiting");
} }
const _c1 = function () { return { "max-width": "640px" }; };
function ShopItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Shop Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Shop Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Shop Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Telphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Price Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ShopItemComponent_div_11_p_messages_45_Template, 2, 0, "p-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p-galleria", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, ShopItemComponent_div_11_ng_template_48_Template, 1, 2, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ShopItemComponent_div_11_p_messages_50_Template, 2, 0, "p-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, ShopItemComponent_div_11_p_messages_51_Template, 2, 0, "p-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ShopItemComponent_div_11_p_messages_52_Template, 2, 0, "p-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scrolled", function ShopItemComponent_div_11_Template_div_scrolled_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.onScrollDown(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ShopItemComponent_div_11_div_54_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ShopItemComponent_div_11_app_waiting_55_Template, 1, 0, "app-waiting", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.shopItem.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.shopItem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.shopItem.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.shopItem.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"]("", ctx_r4.shopItem.address, " ", ctx_r4.shopItem.street, " ", ctx_r4.shopItem.district, " ", ctx_r4.shopItem.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r4.shopItem.minPrice, " - ", ctx_r4.shopItem.maxPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.images || ctx_r4.images.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r4.images)("responsiveOptions", ctx_r4.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c1))("numVisible", 5)("circular", true)("showItemNavigators", true)("showThumbnails", false)("showIndicators", true)("showItemNavigatorsOnHover", true)("changeItemOnIndicatorHover", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.authService.isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.authService.isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.data || ctx_r4.data.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isLoaded == false);
} }
function ShopItemComponent_div_12_app_waiting_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-waiting");
} }
function ShopItemComponent_div_12_div_4_ng_template_2_Template(rf, ctx) { }
function ShopItemComponent_div_12_div_4_ng_template_3_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Opening hours:", " " + shop_r38.openingHour, "-", shop_r38.endingHour, "");
} }
function ShopItemComponent_div_12_div_4_ng_template_3_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This shop has no opening hours data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/app/shop/shop-item", a1]; };
function ShopItemComponent_div_12_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ShopItemComponent_div_12_div_4_ng_template_3_small_16_Template, 2, 2, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ShopItemComponent_div_12_div_4_ng_template_3_small_17_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c2, shop_r38.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", shop_r38.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](shop_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"]("", shop_r38.address, " ", shop_r38.street, " ", shop_r38.district, " ", shop_r38.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Price range: ", shop_r38.minPrice, "-", shop_r38.maxPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Telephone: ", shop_r38.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](shop_r38.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", shop_r38.openingHour || shop_r38.endingHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(shop_r38.openingHour || shop_r38.endingHour));
} }
function ShopItemComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-carousel", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShopItemComponent_div_12_div_4_ng_template_2_Template, 0, 0, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShopItemComponent_div_12_div_4_ng_template_3_Template, 18, 15, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r35.similarCategory)("numVisible", 3)("numScroll", 1)("circular", true)("autoplayInterval", 3000)("responsiveOptions", ctx_r35.responsiveOptions2);
} }
function ShopItemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShopItemComponent_div_12_app_waiting_3_Template, 1, 0, "app-waiting", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ShopItemComponent_div_12_div_4_Template, 4, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Similar shops with category ", ctx_r5.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.loadedCategory == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.loadedCategory == true);
} }
function ShopItemComponent_div_13_app_waiting_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-waiting");
} }
function ShopItemComponent_div_13_div_4_ng_template_2_Template(rf, ctx) { }
function ShopItemComponent_div_13_div_4_ng_template_3_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Opening hours:", " " + shop_r46.openingHour, "-", shop_r46.endingHour, "");
} }
function ShopItemComponent_div_13_div_4_ng_template_3_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "This shop has no opening hours data");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ShopItemComponent_div_13_div_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ShopItemComponent_div_13_div_4_ng_template_3_small_16_Template, 2, 2, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ShopItemComponent_div_13_div_4_ng_template_3_small_17_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c2, shop_r46.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", shop_r46.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](shop_r46.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"]("", shop_r46.address, " ", shop_r46.street, " ", shop_r46.district, " ", shop_r46.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Price range: ", shop_r46.minPrice, "-", shop_r46.maxPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Telephone: ", shop_r46.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](shop_r46.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", shop_r46.openingHour || shop_r46.endingHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(shop_r46.openingHour || shop_r46.endingHour));
} }
function ShopItemComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-carousel", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ShopItemComponent_div_13_div_4_ng_template_2_Template, 0, 0, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShopItemComponent_div_13_div_4_ng_template_3_Template, 18, 15, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r43.similarDistrict)("numVisible", 3)("numScroll", 1)("circular", true)("autoplayInterval", 3000)("responsiveOptions", ctx_r43.responsiveOptions2);
} }
function ShopItemComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShopItemComponent_div_13_app_waiting_3_Template, 1, 0, "app-waiting", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ShopItemComponent_div_13_div_4_Template, 4, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Shops near ", ctx_r6.district, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.loadedDistrict == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.loadedDistrict == true);
} }
class ShopItemComponent extends src_app_module_sticky_component_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListComponent"] {
    constructor(route, router, noti, userShopService, shopService, cdr, sanitizer, authService, reviewService) {
        super();
        this.route = route;
        this.router = router;
        this.noti = noti;
        this.userShopService = userShopService;
        this.shopService = shopService;
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.reviewService = reviewService;
        this.userShop = {};
        this.shopRequest = new src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_2__["ShopRequestPayload"]();
        this.loaded = false;
        this.loadedCategory = false;
        this.loadedDistrict = false;
        this.formDisplay = false;
        this.input = {};
        this.images = [];
        this.shopItem = {};
        this.userShopRequest = new src_app_module_sticky_modules_user_shop_user_shop_request_payload__WEBPACK_IMPORTED_MODULE_3__["UserShopRequestPayload"]();
        this.reviewRequest = new _module_sticky_modules_review_review_request_payload__WEBPACK_IMPORTED_MODULE_0__["ReviewRequestPayload"]();
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        this.responsiveOptions2 = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '900px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        this.allItems = false;
        this.stopScroll = false;
        this.isLoaded = false;
        this.status = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.loaded = false;
            // this.id = +params['id']; // (+) converts string 'id' to a number
            this.id = params['id'];
            if (this.authService.isAuthenticated()) {
                this.userShopService.getAll().subscribe(res => {
                    if (res && res.length > 0) {
                        let ids = res.map(x => x.id);
                        let index = ids.indexOf(this.id);
                        if (index > -1) {
                            this.status = true;
                        }
                        else {
                            this.status = false;
                        }
                    }
                });
            }
            this.shopService.selectById(this.id).subscribe(res => {
                this.shopItem = res;
                if (res && res.imageDirectories && res.imageDirectories.length > 0) {
                    res.imageDirectories.forEach(e => {
                        this.images.push(e);
                    });
                }
                this.profileImage = (this.images && this.images.length > 0) ? this.images[0] : 'assets/img/cf_bg1.jpg';
                if (this.shopItem && this.shopItem.shopCategory && this.shopItem.shopCategory.length > 0) {
                    let temp = this.shopItem.shopCategory[0].id;
                    this.category = this.shopItem.shopCategory[0].name;
                    this.initShopByCategory(temp);
                }
                if (this.shopItem && this.shopItem.district) {
                    let temp = this.shopItem.district;
                    this.district = temp;
                    this.initShopByDistrict(temp);
                }
                this.loaded = true;
                if (this.cd && !this.cd['destroyed']) {
                    this.cdr.detectChanges();
                }
            });
            this.initData();
        });
    }
    initData() {
        this.reviewRequest.pageIndex = 0;
        this.reviewRequest.pageSize = 3;
        this.reviewRequest.shopId = this.id;
        this.reviewService.selectReviewsByShop(this.reviewRequest).subscribe(res => {
            this.data = res;
            if (this.data) {
                this.data.forEach(element => {
                    if (element.length == 0) {
                        this.allItems = true;
                        return;
                    }
                    let temp = [];
                    if (element.imageDirectories && element.imageDirectories.length > 0) {
                        element.imageDirectories.forEach(e => {
                            temp.push(e);
                        });
                        element.images = temp;
                        if (element.images) {
                            element.image = element.images[0];
                        }
                    }
                    this.cdr.detectChanges();
                });
            }
            this.stopScroll = false;
            this.allItems = false;
        });
    }
    onScrollDown() {
        if (this.stopScroll == true || this.allItems == true) {
            this.isLoaded = true;
            return;
        }
        this.isLoaded = false;
        this.reviewRequest.pageIndex++;
        this.reviewRequest.shopId = this.id;
        this.reviewService.selectReviewsByShop(this.reviewRequest).subscribe(res => {
            if (res.length == 0) {
                this.allItems = true;
                return;
            }
            res.forEach(element => {
                let temp = [];
                if (element.imageDirectories && element.imageDirectories.length > 0) {
                    element.imageDirectories.forEach(e => {
                        temp.push(e);
                        // reader.readAsDataURL(new Blob(e.imagePath]));
                    });
                    element.images = temp;
                }
            });
            this.isLoaded = true;
            this.data =
                this.data = this.data ? this.data.concat(res) : res;
        });
    }
    goToShopItem(id) {
        this.router.navigate(['/app/shop/shop-item', id]);
    }
    initShopByDistrict(district) {
        this.shopRequest = new src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_2__["ShopRequestPayload"]();
        this.shopRequest.excludeIds = [];
        this.shopRequest.excludeIds.push(this.shopItem.id);
        this.shopRequest.districts = [];
        this.shopRequest.districts.push(district);
        this.loadedDistrict = false;
        this.shopService.select(this.shopRequest).subscribe((response) => {
            this.similarDistrict = response;
            if (this.similarDistrict && this.similarDistrict.length > 0) {
                this.similarDistrict.forEach(e => {
                    e.image = e.imagePath ? e.imagePath : 'assets/img/cf_bg1.jpg';
                });
            }
            this.loadedDistrict = true;
            if (this.cd && !this.cd['destroyed']) {
                this.cdr.detectChanges();
            }
        });
    }
    initShopByCategory(id) {
        this.shopRequest = new src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_2__["ShopRequestPayload"]();
        this.shopRequest.excludeIds = [];
        this.shopRequest.excludeIds.push(this.shopItem.id);
        this.shopRequest.categoryIds = [];
        this.shopRequest.categoryIds.push(id);
        this.loadedCategory = false;
        this.shopService.select(this.shopRequest).subscribe((response) => {
            this.similarCategory = response;
            if (this.similarCategory && this.similarCategory.length > 0) {
                this.similarCategory.forEach(e => {
                    e.image = e.imagePath ? e.imagePath : 'assets/img/cf_bg1.jpg';
                });
            }
            this.loadedCategory = true;
            if (this.cd && !this.cd['destroyed']) {
                this.cdr.detectChanges();
            }
        });
    }
    onReviewAdd() {
        this.input = {};
        this.input.content = "";
        this.input.shopId = this.id;
        this.input.shopName = this.shopItem.name;
        this.formDisplay = true;
    }
    saveShop(event) {
        if (event) {
            this.userShop = {};
            this.userShop.id = this.id;
            this.userShopService.insert(this.userShop).subscribe(res => {
                this.userShop = {};
                this.noti.showSuccess();
            });
        }
        else {
            this.userShopRequest = new src_app_module_sticky_modules_user_shop_user_shop_request_payload__WEBPACK_IMPORTED_MODULE_3__["UserShopRequestPayload"]();
            this.userShopRequest.shopId = this.id;
            this.userShopService.deleteShopFromUser(this.userShopRequest).subscribe(res => {
                this.userShopRequest.shopId = undefined;
                this.noti.showSuccess();
            });
        }
    }
    onUploadEvent(event) {
        this.formDisplay = false;
        if (event) {
            this.initData();
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
ShopItemComponent.ɵfac = function ShopItemComponent_Factory(t) { return new (t || ShopItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_module_sticky_modules_user_shop_user_shop_service__WEBPACK_IMPORTED_MODULE_7__["UserShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_8__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_module_sticky_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_module_sticky_modules_review_review_service__WEBPACK_IMPORTED_MODULE_11__["ReviewService"])); };
ShopItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ShopItemComponent, selectors: [["app-shop-item"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 10, consts: [[1, "container-fluid", "shop-profile"], [1, "row"], [1, "col-md-4"], [4, "ngIf"], ["class", "profile-head", 4, "ngIf"], [1, "col-md-8", 2, "word-wrap", "break-word", "padding-bottom", "5px", "border-bottom", "1px black solid"], [1, "row", 2, "margin-top", "10px"], [1, "col-md-8"], ["class", "tab-content profile-tab", "id", "myTabContent", "style", "word-wrap: break-word;", 4, "ngIf"], [3, "formDisplay", "input", "viewMode", "event"], [1, "profile-head"], [1, "profile-img"], ["alt", "image here", 1, "img-profile", "img-fluid", 3, "src"], ["severity", "info", 4, "ngIf"], [1, "proile-rating"], [4, "ngFor", "ngForOf"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#image", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "profile-tab", "data-toggle", "tab", "href", "#review", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["onLabel", "Unsave", "offLabel", "Save", "offIcon", "pi pi-check", "onIcon", "pi pi-times", "iconPos", "right", 3, "ngModel", "ngModelChange", "onChange"], ["severity", "info"], ["pTemplate", ""], [1, "p-ml-2"], [3, "routerLink"], ["id", "myTabContent", 1, "tab-content", "profile-tab", 2, "word-wrap", "break-word"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "image", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "row", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [3, "value", "responsiveOptions", "containerStyle", "numVisible", "circular", "showItemNavigators", "showThumbnails", "showIndicators", "showItemNavigatorsOnHover", "changeItemOnIndicatorHover"], ["pTemplate", "item"], ["id", "review", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["infinite-scroll", "", 2, "width", "100%", "word-wrap", "break-word", 3, "scrolled"], [2, "width", "100%", "object-fit", "cover", "height", "15rem", "display", "block", 3, "src", "alt"], [2, "cursor", "pointer", "text-decoration", "underline", "color", "deeppink", 3, "click"], [3, "id", "service", "userName", "event"], ["styleClass", "custom-carousel", 3, "value", "numVisible", "numScroll", "circular", "autoplayInterval", "responsiveOptions"], ["pTemplate", "header"], [1, "card-deck", 2, "margin", ".3rem", "padding", "2rem 0"], [1, "card"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Go to shop    ", "trigger", "hover focus", 1, "shop-item", 3, "routerLink"], ["alt", "Card image cap", 1, "img-shop", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"]], template: function ShopItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ShopItemComponent_app_waiting_3_Template, 1, 0, "app-waiting", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ShopItemComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ShopItemComponent_app_waiting_6_Template, 1, 0, "app-waiting", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ShopItemComponent_div_7_Template, 24, 10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ShopItemComponent_div_11_Template, 56, 27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ShopItemComponent_div_12_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ShopItemComponent_div_13_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-review-add", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("event", function ShopItemComponent_Template_app_review_add_event_14_listener($event) { return ctx.onUploadEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loaded == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.similarCategory && ctx.similarCategory.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.similarDistrict && ctx.similarDistrict.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formDisplay", ctx.formDisplay)("input", ctx.input)("viewMode", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], src_app_view_reviewer_review_add_review_add_component__WEBPACK_IMPORTED_MODULE_13__["ReviewAddComponent"], _module_sticky_base_base_waiting_component__WEBPACK_IMPORTED_MODULE_14__["BaseWaitingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_15__["ToggleButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], primeng_messages__WEBPACK_IMPORTED_MODULE_17__["Messages"], primeng_api__WEBPACK_IMPORTED_MODULE_18__["PrimeTemplate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], primeng_galleria__WEBPACK_IMPORTED_MODULE_19__["Galleria"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__["InfiniteScrollDirective"], _module_sticky_review_review_component__WEBPACK_IMPORTED_MODULE_21__["ReviewItemComponent"], primeng_carousel__WEBPACK_IMPORTED_MODULE_22__["Carousel"]], styles: ["body[_ngcontent-%COMP%] {\n    background: -webkit-linear-gradient(left, var(--dark-color), #00c6ff);\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    color: deeppink;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n    background-color: white;\n    color: black !important;\n}\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.img-profile[_ngcontent-%COMP%] {\n    display: block;\n    height: 300px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.img-shop[_ngcontent-%COMP%] {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%;\n    height: 9rem;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n    transition: .5s ease;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.shop-item[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n\n.shop-item[_ngcontent-%COMP%]:hover {\n    color: rgb(41, 37, 59);\n    text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: black;\n    background: transparent;\n    padding: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUVBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaG9wLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHZhcigtLWRhcmstY29sb3IpLCAjMDBjNmZmKTtcbn1cblxuLm5hdi1saW5rIHtcbiAgICBjb2xvcjogZGVlcHBpbms7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltZy1wcm9maWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW1nLXNob3Age1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOXJlbTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaG9wLWl0ZW0ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaG9wLWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoNDEsIDM3LCA1OSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uYXYge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG59Il19 */"] });


/***/ }),

/***/ "TTNa":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/core/leaflet.directive.js ***!
  \**************************************************************************************************/
/*! exports provided: LeafletDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletDirective", function() { return LeafletDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leaflet_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet.util */ "tjn2");




var LeafletDirective = /** @class */ (function () {
    function LeafletDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.DEFAULT_ZOOM = 1;
        this.DEFAULT_CENTER = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(38.907192, -77.036871);
        this.DEFAULT_FPZ_OPTIONS = {};
        this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
        this.panOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
        // Default configuration
        this.options = {};
        // Configure callback function for the map
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Mouse Map Events
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Map Move Events
        this.onMapMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapMoveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapMoveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Map Zoom Events
        this.onMapZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapZoomStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMapZoomEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mapEventHandlers = {};
        // Nothing here
    }
    LeafletDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Create the map outside of angular so the various map events don't trigger change detection
        this.zone.runOutsideAngular(function () {
            // Create the map with some reasonable defaults
            _this.map = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["map"])(_this.element.nativeElement, _this.options);
            _this.addMapEventListeners();
        });
        // Only setView if there is a center/zoom
        if (null != this.center && null != this.zoom) {
            this.setView(this.center, this.zoom);
        }
        // Set up all the initial settings
        if (null != this.fitBounds) {
            this.setFitBounds(this.fitBounds);
        }
        if (null != this.maxBounds) {
            this.setMaxBounds(this.maxBounds);
        }
        if (null != this.minZoom) {
            this.setMinZoom(this.minZoom);
        }
        if (null != this.maxZoom) {
            this.setMaxZoom(this.maxZoom);
        }
        this.doResize();
        // Fire map ready event
        this.mapReady.emit(this.map);
    };
    LeafletDirective.prototype.ngOnChanges = function (changes) {
        /*
         * The following code is to address an issue with our (basic) implementation of
         * zooming and panning. From our testing, it seems that a pan operation followed
         * by a zoom operation in the same thread will interfere with eachother. The zoom
         * operation interrupts/cancels the pan, resulting in a final center point that is
         * inaccurate. The solution seems to be to either separate them with a timeout or
          * to collapse them into a setView call.
         */
        // Zooming and Panning
        if (changes['zoom'] && changes['center'] && null != this.zoom && null != this.center) {
            this.setView(changes['center'].currentValue, changes['zoom'].currentValue);
        }
        // Set the zoom level
        else if (changes['zoom']) {
            this.setZoom(changes['zoom'].currentValue);
        }
        // Set the map center
        else if (changes['center']) {
            this.setCenter(changes['center'].currentValue);
        }
        // Other options
        if (changes['fitBounds']) {
            this.setFitBounds(changes['fitBounds'].currentValue);
        }
        if (changes['maxBounds']) {
            this.setMaxBounds(changes['maxBounds'].currentValue);
        }
        if (changes['minZoom']) {
            this.setMinZoom(changes['minZoom'].currentValue);
        }
        if (changes['maxZoom']) {
            this.setMaxZoom(changes['maxZoom'].currentValue);
        }
    };
    LeafletDirective.prototype.ngOnDestroy = function () {
        // If this directive is destroyed, the map is too
        this.map.remove();
    };
    LeafletDirective.prototype.getMap = function () {
        return this.map;
    };
    LeafletDirective.prototype.onResize = function () {
        this.delayResize();
    };
    LeafletDirective.prototype.addMapEventListeners = function () {
        var _this = this;
        var registerEventHandler = function (eventName, handler) {
            _this.mapEventHandlers[eventName] = handler;
            _this.map.on(eventName, handler);
        };
        // Add all the pass-through mouse event handlers
        registerEventHandler('click', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onClick, e); });
        registerEventHandler('dblclick', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onDoubleClick, e); });
        registerEventHandler('mousedown', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseDown, e); });
        registerEventHandler('mouseup', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseUp, e); });
        registerEventHandler('mouseover', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseOver, e); });
        registerEventHandler('mouseout', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseOut, e); });
        registerEventHandler('mousemove', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMouseMove, e); });
        registerEventHandler('zoomstart', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoomStart, e); });
        registerEventHandler('zoom', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoom, e); });
        registerEventHandler('zoomend', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapZoomEnd, e); });
        registerEventHandler('movestart', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMoveStart, e); });
        registerEventHandler('move', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMove, e); });
        registerEventHandler('moveend', function (e) { return _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.onMapMoveEnd, e); });
        // Update any things for which we provide output bindings
        var outputUpdateHandler = function () {
            var zoom = _this.map.getZoom();
            if (zoom !== _this.zoom) {
                _this.zoom = zoom;
                _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.zoomChange, zoom);
            }
            var center = _this.map.getCenter();
            if (null != center || null != _this.center) {
                if (((null == center || null == _this.center) && center !== _this.center)
                    || (center.lat !== _this.center.lat || center.lng !== _this.center.lng)) {
                    _this.center = center;
                    _leaflet_util__WEBPACK_IMPORTED_MODULE_2__["LeafletUtil"].handleEvent(_this.zone, _this.centerChange, center);
                }
            }
        };
        registerEventHandler('moveend', outputUpdateHandler);
        registerEventHandler('zoomend', outputUpdateHandler);
    };
    /**
     * Resize the map to fit it's parent container
     */
    LeafletDirective.prototype.doResize = function () {
        var _this = this;
        // Run this outside of angular so the map events stay outside of angular
        this.zone.runOutsideAngular(function () {
            // Invalidate the map size to trigger it to update itself
            _this.map.invalidateSize({});
        });
    };
    /**
     * Manage a delayed resize of the component
     */
    LeafletDirective.prototype.delayResize = function () {
        if (null != this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
    };
    /**
     * Set the view (center/zoom) all at once
     * @param center The new center
     * @param zoom The new zoom level
     */
    LeafletDirective.prototype.setView = function (center, zoom) {
        if (this.map && null != center && null != zoom) {
            this.map.setView(center, zoom, this.zoomPanOptions);
        }
    };
    /**
     * Set the map zoom level
     * @param zoom the new zoom level for the map
     */
    LeafletDirective.prototype.setZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setZoom(zoom, this.zoomOptions);
        }
    };
    /**
     * Set the center of the map
     * @param center the center point
     */
    LeafletDirective.prototype.setCenter = function (center) {
        if (this.map && null != center) {
            this.map.panTo(center, this.panOptions);
        }
    };
    /**
     * Fit the map to the bounds
     * @param latLngBounds the boundary to set
     */
    LeafletDirective.prototype.setFitBounds = function (latLngBounds) {
        if (this.map && null != latLngBounds) {
            this.map.fitBounds(latLngBounds, this.fitBoundsOptions);
        }
    };
    /**
     * Set the map's max bounds
     * @param latLngBounds the boundary to set
     */
    LeafletDirective.prototype.setMaxBounds = function (latLngBounds) {
        if (this.map && null != latLngBounds) {
            this.map.setMaxBounds(latLngBounds);
        }
    };
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    LeafletDirective.prototype.setMinZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setMinZoom(zoom);
        }
    };
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    LeafletDirective.prototype.setMaxZoom = function (zoom) {
        if (this.map && null != zoom) {
            this.map.setMaxZoom(zoom);
        }
    };
    LeafletDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    LeafletDirective.propDecorators = {
        fitBoundsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletFitBoundsOptions',] }],
        panOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletPanOptions',] }],
        zoomOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletZoomOptions',] }],
        zoomPanOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletZoomPanOptions',] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletOptions',] }],
        mapReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapReady',] }],
        zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletZoom',] }],
        zoomChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletZoomChange',] }],
        center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletCenter',] }],
        centerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletCenterChange',] }],
        fitBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletFitBounds',] }],
        maxBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletMaxBounds',] }],
        minZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletMinZoom',] }],
        maxZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletMaxZoom',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletClick',] }],
        onDoubleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletDoubleClick',] }],
        onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMouseDown',] }],
        onMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMouseUp',] }],
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMouseMove',] }],
        onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMouseOver',] }],
        onMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMouseOut',] }],
        onMapMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapMove',] }],
        onMapMoveStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapMoveStart',] }],
        onMapMoveEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapMoveEnd',] }],
        onMapZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapZoom',] }],
        onMapZoomStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapZoomStart',] }],
        onMapZoomEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletMapZoomEnd',] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', [],] }]
    };
LeafletDirective.ɵfac = function LeafletDirective_Factory(t) { return new (t || LeafletDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LeafletDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafletDirective, selectors: [["", "leaflet", ""]], hostBindings: function LeafletDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LeafletDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { fitBoundsOptions: ["leafletFitBoundsOptions", "fitBoundsOptions"], panOptions: ["leafletPanOptions", "panOptions"], zoomOptions: ["leafletZoomOptions", "zoomOptions"], zoomPanOptions: ["leafletZoomPanOptions", "zoomPanOptions"], options: ["leafletOptions", "options"], zoom: ["leafletZoom", "zoom"], center: ["leafletCenter", "center"], fitBounds: ["leafletFitBounds", "fitBounds"], maxBounds: ["leafletMaxBounds", "maxBounds"], minZoom: ["leafletMinZoom", "minZoom"], maxZoom: ["leafletMaxZoom", "maxZoom"] }, outputs: { mapReady: "leafletMapReady", zoomChange: "leafletZoomChange", centerChange: "leafletCenterChange", onClick: "leafletClick", onDoubleClick: "leafletDoubleClick", onMouseDown: "leafletMouseDown", onMouseUp: "leafletMouseUp", onMouseMove: "leafletMouseMove", onMouseOver: "leafletMouseOver", onMouseOut: "leafletMouseOut", onMapMove: "leafletMapMove", onMapMoveStart: "leafletMapMoveStart", onMapMoveEnd: "leafletMapMoveEnd", onMapZoom: "leafletMapZoom", onMapZoomStart: "leafletMapZoomStart", onMapZoomEnd: "leafletMapZoomEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[leaflet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { fitBoundsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletFitBoundsOptions']
        }], panOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletPanOptions']
        }], zoomOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletZoomOptions']
        }], zoomPanOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletZoomPanOptions']
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletOptions']
        }], mapReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapReady']
        }], zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletZoomChange']
        }], centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletCenterChange']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletClick']
        }], onDoubleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletDoubleClick']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMouseDown']
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMouseUp']
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMouseMove']
        }], onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMouseOver']
        }], onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMouseOut']
        }], onMapMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapMove']
        }], onMapMoveStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapMoveStart']
        }], onMapMoveEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapMoveEnd']
        }], onMapZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapZoom']
        }], onMapZoomStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapZoomStart']
        }], onMapZoomEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletMapZoomEnd']
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletZoom']
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletCenter']
        }], fitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletFitBounds']
        }], maxBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletMaxBounds']
        }], minZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletMinZoom']
        }], maxZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletMaxZoom']
        }] }); })();
    return LeafletDirective;
}());


//# sourceMappingURL=leaflet.directive.js.map

/***/ }),

/***/ "XXBV":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers.directive.js ***!
  \***************************************************************************************************************************/
/*! exports provided: LeafletLayersControlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersControlDirective", function() { return LeafletLayersControlDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/leaflet.directive */ "TTNa");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ "9tiU");
/* harmony import */ var _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leaflet-control-layers.wrapper */ "PIrj");
/* harmony import */ var _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leaflet-control-layers-config.model */ "a1D6");





/**
 * Layers Control
 *
 * This directive is used to configure the layers control. The input accepts an object with two
 * key-value maps of layer name -> layer. Mutable changes are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the last one it sees will be used.
 */


var LeafletLayersControlDirective = /** @class */ (function () {
    function LeafletLayersControlDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.layersControlReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
        this.controlLayers = new _leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_3__["LeafletControlLayersWrapper"](this.zone, this.layersControlReady);
        // Generate differs
        this.baseLayersDiffer = this.differs.find({}).create();
        this.overlaysDiffer = this.differs.find({}).create();
    }
    Object.defineProperty(LeafletLayersControlDirective.prototype, "layersControlConfig", {
        get: function () {
            return this.layersControlConfigValue;
        },
        set: function (v) {
            // Validation/init stuff
            if (null == v) {
                v = new _leaflet_control_layers_config_model__WEBPACK_IMPORTED_MODULE_4__["LeafletControlLayersConfig"]();
            }
            if (null == v.baseLayers) {
                v.baseLayers = {};
            }
            if (null == v.overlays) {
                v.overlays = {};
            }
            // Store the value
            this.layersControlConfigValue = v;
            // Update the map
            this.updateLayers();
        },
        enumerable: false,
        configurable: true
    });
    LeafletLayersControlDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Init the map
        this.leafletDirective.init();
        // Set up control outside of angular to avoid change detection when using the control
        this.zone.runOutsideAngular(function () {
            // Set up all the initial settings
            _this.controlLayers
                .init({}, _this.layersControlOptions)
                .addTo(_this.leafletDirective.getMap());
        });
        this.updateLayers();
    };
    LeafletLayersControlDirective.prototype.ngOnDestroy = function () {
        this.layersControlConfig = { baseLayers: {}, overlays: {} };
        this.controlLayers.getLayersControl().remove();
    };
    LeafletLayersControlDirective.prototype.ngDoCheck = function () {
        this.updateLayers();
    };
    LeafletLayersControlDirective.prototype.updateLayers = function () {
        var map = this.leafletDirective.getMap();
        var layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl) {
            // Run the baselayers differ
            if (null != this.baseLayersDiffer && null != this.layersControlConfigValue.baseLayers) {
                var changes = this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);
                this.controlLayers.applyBaseLayerChanges(changes);
            }
            // Run the overlays differ
            if (null != this.overlaysDiffer && null != this.layersControlConfigValue.overlays) {
                var changes = this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);
                this.controlLayers.applyOverlayChanges(changes);
            }
        }
    };
    LeafletLayersControlDirective.ctorParameters = function () { return [
        { type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    LeafletLayersControlDirective.propDecorators = {
        layersControlConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletLayersControl',] }],
        layersControlOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletLayersControlOptions',] }],
        layersControlReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletLayersControlReady',] }]
    };
LeafletLayersControlDirective.ɵfac = function LeafletLayersControlDirective_Factory(t) { return new (t || LeafletLayersControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LeafletLayersControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafletLayersControlDirective, selectors: [["", "leafletLayersControl", ""]], inputs: { layersControlConfig: ["leafletLayersControl", "layersControlConfig"], layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"] }, outputs: { layersControlReady: "leafletLayersControlReady" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletLayersControlDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[leafletLayersControl]'
            }]
    }], function () { return [{ type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { layersControlReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletLayersControlReady']
        }], layersControlConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletLayersControl']
        }], layersControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletLayersControlOptions']
        }] }); })();
    return LeafletLayersControlDirective;
}());


//# sourceMappingURL=leaflet-control-layers.directive.js.map

/***/ }),

/***/ "Y6vS":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/leaflet-layers.directive.js ***!
  \***********************************************************************************************************/
/*! exports provided: LeafletLayersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletLayersDirective", function() { return LeafletLayersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/leaflet.directive */ "TTNa");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/leaflet.directive.wrapper */ "9tiU");



/**
 * Layers directive
 *
 * This directive is used to directly control map layers. As changes are made to the input array of
 * layers, the map is synched to the array. As layers are added or removed from the input array, they
 * are also added or removed from the map. The input array is treated as immutable. To detect changes,
 * you must change the array instance.
 *
 * Important Note: The input layers array is assumed to be immutable. This means you need to use an
 * immutable array implementation or create a new copy of your array when you make changes, otherwise
 * this directive won't detect the change. This is by design. It's for performance reasons. Change
 * detection of mutable arrays requires diffing the state of the array on every DoCheck cycle, which
 * is extremely expensive from a time complexity perspective.
 *
 */


var LeafletLayersDirective = /** @class */ (function () {
    function LeafletLayersDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
        this.layersDiffer = this.differs.find([]).create();
    }
    Object.defineProperty(LeafletLayersDirective.prototype, "layers", {
        get: function () {
            return this.layersValue;
        },
        // Set/get the layers
        set: function (v) {
            this.layersValue = v;
            // Now that we have a differ, do an immediate layer update
            this.updateLayers();
        },
        enumerable: false,
        configurable: true
    });
    LeafletLayersDirective.prototype.ngDoCheck = function () {
        this.updateLayers();
    };
    LeafletLayersDirective.prototype.ngOnInit = function () {
        // Init the map
        this.leafletDirective.init();
        // Update layers once the map is ready
        this.updateLayers();
    };
    LeafletLayersDirective.prototype.ngOnDestroy = function () {
        this.layers = [];
    };
    /**
     * Update the state of the layers.
     * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
     * This is important because it allows us to react to changes to the contents of the array as well
     * as changes to the actual array instance.
     */
    LeafletLayersDirective.prototype.updateLayers = function () {
        var map = this.leafletDirective.getMap();
        if (null != map && null != this.layersDiffer) {
            var changes_1 = this.layersDiffer.diff(this.layersValue);
            if (null != changes_1) {
                // Run outside angular to ensure layer events don't trigger change detection
                this.zone.runOutsideAngular(function () {
                    changes_1.forEachRemovedItem(function (c) {
                        map.removeLayer(c.item);
                    });
                    changes_1.forEachAddedItem(function (c) {
                        map.addLayer(c.item);
                    });
                });
            }
        }
    };
    LeafletLayersDirective.ctorParameters = function () { return [
        { type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    LeafletLayersDirective.propDecorators = {
        layers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletLayers',] }]
    };
LeafletLayersDirective.ɵfac = function LeafletLayersDirective_Factory(t) { return new (t || LeafletLayersDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LeafletLayersDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafletLayersDirective, selectors: [["", "leafletLayers", ""]], inputs: { layers: ["leafletLayers", "layers"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletLayersDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[leafletLayers]'
            }]
    }], function () { return [{ type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_1__["LeafletDirective"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { layers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletLayers']
        }] }); })();
    return LeafletLayersDirective;
}());


//# sourceMappingURL=leaflet-layers.directive.js.map

/***/ }),

/***/ "YDOE":
/*!*********************************************!*\
  !*** ./src/app/view/shop/shop.component.ts ***!
  \*********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var src_app_module_sticky_component_base_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/module/sticky/component/base-list.component */ "LqhL");
/* harmony import */ var src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/modules/shop/shop-request.payload */ "+AN7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/module/sticky/modules/shop/shop.service */ "m4aj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/overlaypanel */ "z8Lm");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/multiselect */ "lVkt");
/* harmony import */ var _module_sticky_base_base_waiting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../module/sticky/base/base-waiting.component */ "vR4d");















const _c0 = function () { return { width: "100%" }; };
function ShopComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Search by name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopComponent_ng_template_14_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.shopRequest.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Shop name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cities");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-multiSelect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopComponent_ng_template_14_Template_p_multiSelect_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.shopRequest.cities = $event; })("onChange", function ShopComponent_ng_template_14_Template_p_multiSelect_onChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeCities(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Districts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p-multiSelect", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopComponent_ng_template_14_Template_p_multiSelect_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.shopRequest.districts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Streets");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-multiSelect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopComponent_ng_template_14_Template_p_multiSelect_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.shopRequest.streets = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-multiSelect", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopComponent_ng_template_14_Template_p_multiSelect_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.shopRequest.categoryIds = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopComponent_ng_template_14_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.initShop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.shopRequest.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.cities)("ngModel", ctx_r1.shopRequest.cities)("selectionLimit", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.filteredDistricts)("ngModel", ctx_r1.shopRequest.districts)("selectionLimit", 1)("selectedItemsLabel", "{0} items selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.filteredStreets)("ngModel", ctx_r1.shopRequest.streets)("selectedItemsLabel", "{0} items selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.categories)("ngModel", ctx_r1.shopRequest.categoryIds);
} }
function ShopComponent_div_19_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Opening hours:", " " + shop_r12.openingHour, "-", shop_r12.endingHour, "");
} }
function ShopComponent_div_19_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This shop has no opening hours data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/app/shop/shop-item", a1]; };
function ShopComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ShopComponent_div_19_small_18_Template, 2, 2, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ShopComponent_div_19_small_19_Template, 2, 0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, shop_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", shop_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shop_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("", shop_r12.address, " ", shop_r12.street, " ", shop_r12.district, " ", shop_r12.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Price range: ", shop_r12.minPrice, "-", shop_r12.maxPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Telephone: ", shop_r12.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](shop_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", shop_r12.openingHour || shop_r12.endingHour);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(shop_r12.openingHour || shop_r12.endingHour));
} }
function ShopComponent_app_waiting_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-waiting");
} }
const _c2 = function () { return ["/app/home"]; };
const _c3 = function () { return { width: "90%" }; };
class ShopComponent extends src_app_module_sticky_component_base_list_component__WEBPACK_IMPORTED_MODULE_0__["BaseListComponent"] {
    constructor(router, shopService, cdr, sanitizer) {
        super();
        this.router = router;
        this.shopService = shopService;
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.shopRequest = new src_app_module_sticky_modules_shop_shop_request_payload__WEBPACK_IMPORTED_MODULE_1__["ShopRequestPayload"]();
        this.dataSource = {};
        this.loaded = false;
        this.stopScrolling = false;
    }
    ngOnInit() {
        this.shopRequest.pageIndex = 0;
        this.shopRequest.pageSize = 6;
        this.initShop();
        this.shopService.selectShopSearch().subscribe(res => {
            this.cities = res.cities;
            this.districts = res.districts;
            this.streets = res.streets;
            this.filteredStreets = res.streets;
            this.filteredDistricts = res.districts;
            this.categories = res.categories;
        });
        // this.shopService.getShopCategory(true).pipe(map(response => {
        //   const treeData = [];
        //   for (const item of response) {
        //     const parentNode: MenuItem = {
        //       label: item.name,
        //       id: item.id,
        //       routerLink: item.link,
        //       expanded: false
        //     };
        //     treeData.push(parentNode);
        //   }
        //   return treeData;
        // })).subscribe(res =>
        //   this.items[0].items = res)
    }
    goToShopItem(id) {
        this.router.navigate(['/app/shop/shop-item', id]);
    }
    onScrollDown() {
        if (this.stopScrolling == true) {
            this.loaded = true;
            return;
        }
        this.loaded = false;
        this.shopRequest.pageIndex++;
        this.loaded = false;
        this.shopService.select(this.shopRequest).subscribe((response) => {
            if (!response || response == [] || response.length == 0) {
                this.stopScrolling = true;
                return;
            }
            response.forEach(e => {
                e.image = e.imagePath;
            });
            this.loaded = true;
            this.dataSource.items = this.dataSource.items ? this.dataSource.items.concat(response) : response;
        });
    }
    initShop() {
        this.shopRequest.pageIndex = 0;
        this.shopRequest.pageSize = 12;
        this.loaded = false;
        const sub = this.shopService.select(this.shopRequest).subscribe((response) => {
            this.dataSource.items = response;
            if (this.dataSource.items && this.dataSource.items.length > 0) {
                this.dataSource.items.forEach(e => {
                    e.image = e.imagePath ? e.imagePath : 'assets/img/cf_bg1.jpg';
                });
            }
            this.loaded = true;
            if (this.cd && !this.cd['destroyed']) {
                this.cdr.detectChanges();
            }
        });
        this.cdr.detectChanges();
        this.subscriptions.push(sub);
        this.cdr.detectChanges();
    }
    changeCities() {
        this.shopRequest.districts = null;
        this.shopRequest.streets = null;
        if (this.shopRequest.cities[0]) {
            this.filteredDistricts = this.districts.filter(x => x.city == this.shopRequest.cities[0]);
            this.filteredStreets = this.districts.filter(x => x.city == this.shopRequest.cities[0]);
        }
        else {
            this.filteredDistricts = this.districts;
            this.filteredStreets = this.streets;
        }
    }
    changeStreets() {
        this.shopRequest.streets = null;
        if (this.shopRequest.districts[0]) {
            this.filteredStreets = this.streets.filter(x => x.city == this.shopRequest.districts[0]);
        }
        else {
            this.filteredStreets = this.streets;
        }
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 9, consts: [[1, "container-fluid"], [2, "text-align", "center", "margin-top", "2rem"], [2, "text-align", "center", "margin-bottom", "2rem"], [3, "routerLink"], [1, "nav", "flex-row", 2, "top", "4rem", "width", "100%"], ["pButton", "", "label", "Filter", "icon", "pi pi-search", 1, "float-right", 3, "click"], ["appendTo", "body", 3, "baseZIndex", "showCloseIcon"], ["op", ""], ["pTemplate", ""], [1, "row"], [1, "col-lg-1", "col-md-1", "col-xl-1"], [1, "col-lg-10", "col-md-10", "col-xl-10"], ["infinite-scroll", "", 1, "row", 2, "width", "100%", "word-wrap", "break-word", 3, "scrolled"], ["class", "col-md-6 col-xl-4 col-lg-4", "style", "padding: 20px;", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-md-3"], [1, "p-float-label"], ["id", "float-input", "type", "text", "pInputText", "", 2, "width", "100%", "max-width", "100%", 3, "ngModel", "ngModelChange"], ["for", "float-input"], [1, "col-md-2"], ["optionLabel", "name", "optionValue", "city", "defaultLabel", "Select a city", "selectedItemsLabel", "{0} items selected", 3, "options", "ngModel", "selectionLimit", "ngModelChange", "onChange"], ["optionLabel", "name", "optionValue", "district", "defaultLabel", "Select districts", 3, "options", "ngModel", "selectionLimit", "selectedItemsLabel", "ngModelChange"], ["optionLabel", "name", "optionValue", "street", "defaultLabel", "Select streets", 3, "options", "ngModel", "selectedItemsLabel", "ngModelChange"], ["defaultLabel", "Select categories", "optionLabel", "name", "optionValue", "categoryId", "selectedItemsLabel", "{0} items selected", 3, "options", "ngModel", "ngModelChange"], [1, "col-md-1"], ["type", "button", "pButton", "", "label", "", "icon", "pi pi-search", 2, "margin-left", ".25em", 3, "click"], [1, "col-md-6", "col-xl-4", "col-lg-4", 2, "padding", "20px"], [1, "hi"], [1, "card-deck"], [1, "card"], ["data-toggle", "tooltip", "data-placement", "bottom", "title", "Go to shop    ", "trigger", "hover focus", 1, "shop-item", 3, "routerLink"], ["alt", "Card image cap", 1, "img-shop", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Welcome to our list of available cafes!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Click on an item to view detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "If you want to view items by page, please visit our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "home page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r0.toggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p-overlayPanel", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ShopComponent_ng_template_14_Template, 30, 25, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scrolled", function ShopComponent_Template_div_scrolled_18_listener() { return ctx.onScrollDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ShopComponent_div_19_Template, 20, 15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ShopComponent_app_waiting_20_Template, 1, 0, "app-waiting", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("baseZIndex", 9999)("showCloseIcon", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dataSource.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loaded == false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_7__["OverlayPanel"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_13__["MultiSelect"], _module_sticky_base_base_waiting_component__WEBPACK_IMPORTED_MODULE_14__["BaseWaitingComponent"]], styles: [".first[_ngcontent-%COMP%] {\n    height: 50vh;\n    min-height: 200px;\n    background-size: cover;\n    background-image: url('https://images.unsplash.com/photo-1470434151738-dc5f4474c239?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb');\n    background-position: center;\n}\n\n.img-shop[_ngcontent-%COMP%] {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%;\n    height: 9rem;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n    transition: .5s ease;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.shop-item[_ngcontent-%COMP%] {\n    color: black;\n    text-decoration: none;\n}\n\n.shop-item[_ngcontent-%COMP%]:hover {\n    color: rgb(41, 37, 59);\n    text-decoration: none;\n}\n\nnav[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: black;\n    background: transparent;\n    padding: 8px 16px;\n}\n\n[_nghost-%COMP%] .p-multiselect {\n    max-width: 100%;\n    width: 100%;\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLDRKQUE0SjtJQUM1SiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0IHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcwNDM0MTUxNzM4LWRjNWY0NDc0YzIzOT9kcHI9MSZhdXRvPWZvcm1hdCZjcm9wPWVudHJvcHkmZml0PWNyb3Amdz0xNTAwJmg9MTAwMCZxPTgwJmNzPXRpbnlzcmdiJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaW1nLXNob3Age1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOXJlbTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaG9wLWl0ZW0ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaG9wLWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoNDEsIDM3LCA1OSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uYXYge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbjpob3N0Pj4+LnAtbXVsdGlzZWxlY3Qge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiAuaW1nLXNob3Age1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOXJlbTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5zaG9wLWl0ZW0ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaG9wLWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoNDEsIDM3LCA1OSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSAqL1xuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "a1D6":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/control/leaflet-control-layers-config.model.js ***!
  \******************************************************************************************************************************/
/*! exports provided: LeafletControlLayersConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletControlLayersConfig", function() { return LeafletControlLayersConfig; });
var LeafletControlLayersConfig = /** @class */ (function () {
    function LeafletControlLayersConfig() {
        this.baseLayers = {};
        this.overlays = {};
    }
    return LeafletControlLayersConfig;
}());

//# sourceMappingURL=leaflet-control-layers-config.model.js.map

/***/ }),

/***/ "cfso":
/*!************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/osm-search/osm-search.component.ts ***!
  \************************************************************************/
/*! exports provided: OsmSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsmSearchComponent", function() { return OsmSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/component */ "P/fe");
/* harmony import */ var src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/sticky/modules/maps/nominatim.service */ "LFOW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["form"];
class OsmSearchComponent extends src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"] {
    constructor(nominatimService) {
        super();
        this.nominatimService = nominatimService;
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.locationSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    addressLookup(address) {
        if (address.length > 3) {
            this.nominatimService.addressLookup(address).subscribe(results => {
                this.searchResults = results;
            });
        }
        else {
            this.searchResults = [];
        }
        this.onSearch.emit(this.searchResults);
    }
    addressLookupCoordinates() {
        if (this.form) {
            if (!this.validateForm(this.form, 'map')) {
                return;
            }
            if (this.form.form.dirty) {
                this.nominatimService.addressLookupCoordinates(this.lat, this.lon).subscribe(results => {
                    this.searchResult = results;
                    console.log(results);
                });
            }
            else {
                this.searchResult = undefined;
            }
            this.onSearch.emit(this.searchResults);
        }
    }
}
OsmSearchComponent.ɵfac = function OsmSearchComponent_Factory(t) { return new (t || OsmSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_2__["NominatimService"])); };
OsmSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OsmSearchComponent, selectors: [["app-osm-search"]], viewQuery: function OsmSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, outputs: { onSearch: "onSearch", locationSelect: "locationSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 7, consts: [["autocomplete", "off", "id", "map"], ["form", "ngForm"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["type", "number", "name", "lat", "required", "", "autofocus", "", 1, "form-control", 3, "placeholder", "ngModel", "click", "ngModelChange"], ["type", "number", "name", "lon", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "click", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function OsmSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OsmSearchComponent_Template_input_click_8_listener($event) { return $event.stopPropagation(); })("ngModelChange", function OsmSearchComponent_Template_input_ngModelChange_8_listener($event) { return ctx.lat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OsmSearchComponent_Template_input_click_12_listener($event) { return $event.stopPropagation(); })("ngModelChange", function OsmSearchComponent_Template_input_ngModelChange_12_listener($event) { return ctx.lon = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OsmSearchComponent_Template_button_click_13_listener() { return ctx.addressLookupCoordinates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Shop add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lon);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".address-lookup[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zbS1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakIiLCJmaWxlIjoib3NtLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtbG9va3VwIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "dDCi":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/leaflet/layers/base/leaflet-baselayers.directive.js ***!
  \********************************************************************************************************************/
/*! exports provided: LeafletBaseLayersDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletBaseLayersDirective", function() { return LeafletBaseLayersDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_leaflet_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/leaflet.util */ "tjn2");
/* harmony import */ var _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/leaflet.directive */ "TTNa");
/* harmony import */ var _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/leaflet.directive.wrapper */ "9tiU");
/* harmony import */ var _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../control/leaflet-control-layers.wrapper */ "PIrj");





/**
 * Baselayers directive
 *
 * This directive is provided as a convenient way to add baselayers to the map. The input accepts
 * a key-value map of layer name -> layer. Mutable changed are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed. This directive
 * will also add the layers control so users can switch between available base layers.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the plugin will use the last one it sees.
 */


var LeafletBaseLayersDirective = /** @class */ (function () {
    function LeafletBaseLayersDirective(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        // Output for once the layers control is ready
        this.layersControlReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leafletDirective = new _core_leaflet_directive_wrapper__WEBPACK_IMPORTED_MODULE_3__["LeafletDirectiveWrapper"](leafletDirective);
        this.controlLayers = new _control_leaflet_control_layers_wrapper__WEBPACK_IMPORTED_MODULE_4__["LeafletControlLayersWrapper"](this.zone, this.layersControlReady);
        this.baseLayersDiffer = this.differs.find({}).create();
    }
    Object.defineProperty(LeafletBaseLayersDirective.prototype, "baseLayers", {
        get: function () {
            return this.baseLayersValue;
        },
        // Set/get baseLayers
        set: function (v) {
            this.baseLayersValue = v;
            this.updateBaseLayers();
        },
        enumerable: false,
        configurable: true
    });
    LeafletBaseLayersDirective.prototype.ngOnDestroy = function () {
        this.baseLayers = {};
        this.controlLayers.getLayersControl().remove();
    };
    LeafletBaseLayersDirective.prototype.ngOnInit = function () {
        var _this = this;
        // Init the map
        this.leafletDirective.init();
        // Create the control outside angular to prevent events from triggering chnage detection
        this.zone.runOutsideAngular(function () {
            // Initially configure the controlLayers
            _this.controlLayers
                .init({}, _this.layersControlOptions)
                .addTo(_this.leafletDirective.getMap());
        });
        this.updateBaseLayers();
    };
    LeafletBaseLayersDirective.prototype.ngDoCheck = function () {
        this.updateBaseLayers();
    };
    LeafletBaseLayersDirective.prototype.updateBaseLayers = function () {
        var map = this.leafletDirective.getMap();
        var layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl && null != this.baseLayersDiffer) {
            var changes = this.baseLayersDiffer.diff(this.baseLayersValue);
            var results = this.controlLayers.applyBaseLayerChanges(changes);
            if (results.changed()) {
                this.syncBaseLayer();
            }
        }
    };
    /**
     * Check the current base layer and change it to the new one if necessary
     */
    LeafletBaseLayersDirective.prototype.syncBaseLayer = function () {
        var _this = this;
        var map = this.leafletDirective.getMap();
        var layers = _core_leaflet_util__WEBPACK_IMPORTED_MODULE_1__["LeafletUtil"].mapToArray(this.baseLayers);
        var foundLayer;
        // Search all the layers in the map to see if we can find them in the baselayer array
        map.eachLayer(function (l) {
            foundLayer = layers.find(function (bl) { return (l === bl); });
        });
        // Did we find the layer?
        if (null != foundLayer) {
            // Yes - set the baselayer to the one we found
            this.baseLayer = foundLayer;
        }
        else {
            // No - set the baselayer to the first in the array and add it to the map
            if (layers.length > 0) {
                this.baseLayer = layers[0];
                // Add layers outside of angular to prevent events from triggering change detection
                this.zone.runOutsideAngular(function () {
                    _this.baseLayer.addTo(map);
                });
            }
        }
    };
    LeafletBaseLayersDirective.ctorParameters = function () { return [
        { type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    LeafletBaseLayersDirective.propDecorators = {
        baseLayers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletBaseLayers',] }],
        layersControlOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['leafletLayersControlOptions',] }],
        layersControlReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['leafletLayersControlReady',] }]
    };
LeafletBaseLayersDirective.ɵfac = function LeafletBaseLayersDirective_Factory(t) { return new (t || LeafletBaseLayersDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LeafletBaseLayersDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LeafletBaseLayersDirective, selectors: [["", "leafletBaseLayers", ""]], inputs: { baseLayers: ["leafletBaseLayers", "baseLayers"], layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"] }, outputs: { layersControlReady: "leafletLayersControlReady" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeafletBaseLayersDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[leafletBaseLayers]'
            }]
    }], function () { return [{ type: _core_leaflet_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { layersControlReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['leafletLayersControlReady']
        }], baseLayers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletBaseLayers']
        }], layersControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['leafletLayersControlOptions']
        }] }); })();
    return LeafletBaseLayersDirective;
}());


//# sourceMappingURL=leaflet-baselayers.directive.js.map

/***/ }),

/***/ "i9yD":
/*!**************************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/coordinate-search/coordinate-search.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CoordinateSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateSearchComponent", function() { return CoordinateSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/component */ "P/fe");
/* harmony import */ var src_app_module_sticky_modules_maps_nominatim_response_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/module/sticky/modules/maps/nominatim-response.model */ "1g5a");
/* harmony import */ var src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/module/sticky/modules/maps/nominatim.service */ "LFOW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/module/sticky/common/notification/notification.service */ "w6oe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _module_sticky_crud_validate_form_validate_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../module/sticky/crud/validate-form/validate-form.component */ "+pS1");
/* harmony import */ var _module_sticky_crud_validate_form_validate_form_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../module/sticky/crud/validate-form/validate-form.directive */ "oVSs");










const _c0 = ["form"];
function CoordinateSearchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "validate-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoordinateSearchComponent_div_6_Template_input_click_6_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "validate-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoordinateSearchComponent_div_6_Template_input_click_11_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateForm", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Lon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", "lon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateForm", _r0);
} }
class CoordinateSearchComponent extends src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_1__["BaseFormComponent"] {
    constructor(nominatimService, fb, noti) {
        super();
        this.nominatimService = nominatimService;
        this.fb = fb;
        this.noti = noti;
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addPoint = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.locationSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        setTimeout(() => {
            this.form.form.markAsPristine();
        }, 0);
        this.personsForm = this.fb.group({
            persons: this.fb.array([])
        });
    }
    onFormSubmit() {
        alert(JSON.stringify(this.personsForm.value));
    }
    addPerson() {
        if (this.form) {
            if (!this.validateForm(this.form, 'map')) {
                this.noti.showError("the form is invalid");
                return;
            }
            if (this.personsForm.value.persons && this.personsForm.value.persons.length > 0) {
                this.addPoint.emit(new src_app_module_sticky_modules_maps_nominatim_response_model__WEBPACK_IMPORTED_MODULE_2__["NominatimResponse"](this.personsForm.value.persons[this.personsForm.value.persons.length - 1].lat, this.personsForm.value.persons[this.personsForm.value.persons.length - 1].lon, "name"));
            } // this.personsForm.value[this.personsForm.value.length-1]);
            this.personsForm.get('persons').push(this.fb.group({
                lat: [],
                lon: []
            }));
        }
    }
    get persons() {
        return this.personsForm.get('persons').controls;
    }
    addressLookup(address) {
        if (address.length > 3) {
            this.nominatimService.addressLookup(address).subscribe(results => {
                this.searchResults = results;
            });
        }
        else {
            this.searchResults = [];
        }
        this.onSearch.emit(this.searchResults);
    }
    addressLookupCoordinates() {
        if (this.form) {
            if (!this.validateForm(this.form, 'map')) {
                return;
            }
            if (this.form.form.dirty) {
                this.nominatimService.addressLookupCoordinates(this.lat, this.lon).subscribe(results => {
                    this.searchResult = results;
                    console.log(results);
                });
            }
            else {
                this.searchResult = undefined;
            }
            this.onSearch.emit(this.searchResults);
        }
    }
}
CoordinateSearchComponent.ɵfac = function CoordinateSearchComponent_Factory(t) { return new (t || CoordinateSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_module_sticky_modules_maps_nominatim_service__WEBPACK_IMPORTED_MODULE_3__["NominatimService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
CoordinateSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoordinateSearchComponent, selectors: [["app-coordinate-search"]], viewQuery: function CoordinateSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, outputs: { onSearch: "onSearch", addPoint: "addPoint", locationSelect: "locationSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 2, consts: [["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "map", "autocomplete", "off", 3, "formGroup", "submit"], ["form", "ngForm"], ["formArrayName", "persons"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "btn", "btn-secondary"], [1, "btn", "btn-link", 3, "click"], [3, "formGroupName"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["controlName", "lat", 3, "form"], ["validateTooltip", "", "name", "lat", "type", "number", "formControlName", "lat", "required", "", 1, "form-control", 3, "validateForm", "placeholder", "click"], ["controlName", "lon", 3, "form"], ["validateTooltip", "", "name", "lon", "type", "number", "formControlName", "lon", "required", "", 1, "form-control", 3, "validateForm", "placeholder", "click"]], template: function CoordinateSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoordinateSearchComponent_Template_button_click_0_listener() { return ctx.addPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CoordinateSearchComponent_Template_form_submit_3_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CoordinateSearchComponent_div_6_Template, 12, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoordinateSearchComponent_Template_button_click_9_listener() { return ctx.addressLookupCoordinates(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.persons);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _module_sticky_crud_validate_form_validate_form_component__WEBPACK_IMPORTED_MODULE_7__["ValidateMessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _module_sticky_crud_validate_form_validate_form_directive__WEBPACK_IMPORTED_MODULE_8__["ValidateTooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb29yZGluYXRlLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "jV91":
/*!********************************************************************!*\
  !*** ./src/app/view/shop/shop-item-add/shop-item-add.component.ts ***!
  \********************************************************************/
/*! exports provided: TITLE, ShopItemAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopItemAddComponent", function() { return ShopItemAddComponent; });
/* harmony import */ var src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/module/sticky/component */ "P/fe");
/* harmony import */ var src_app_module_sticky_crud_component_form_dynamic_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/sticky/crud/component/form-dynamic-data.model */ "dWId");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/module/sticky/modules/shop/shop.service */ "m4aj");
/* harmony import */ var src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/module/sticky/common/notification/notification.service */ "w6oe");
/* harmony import */ var _module_sticky_crud_component_form_dynamic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../module/sticky/crud/component/form-dynamic.component */ "YS1T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _module_sticky_crud_validate_form_validate_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../module/sticky/crud/validate-form/validate-form.component */ "+pS1");
/* harmony import */ var _module_sticky_control_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../module/sticky/control/input-time/input-time.component */ "bIUK");
/* harmony import */ var _module_sticky_control_async_select_async_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../module/sticky/control/async-select/async-select.component */ "lvTd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _module_sticky_upload_multiple_upload_multiple_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../module/sticky/upload-multiple/upload-multiple.component */ "doB+");













const _c0 = ["form"];
function ShopItemAddComponent_label_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Reselect images");
} }
const TITLE = [
    { id: 1, name: 'Mr.' },
    { id: 2, name: 'Mrs.' },
    { id: 3, name: 'Miss' }
];
class ShopItemAddComponent extends src_app_module_sticky_component__WEBPACK_IMPORTED_MODULE_0__["BaseFormComponent"] {
    constructor(route, router, shopService, 
    // public orgService: OrgChartService,
    cd, notice) {
        super();
        this.route = route;
        this.router = router;
        this.shopService = shopService;
        this.cd = cd;
        this.notice = notice;
        this.status = false;
        this.formData = new src_app_module_sticky_crud_component_form_dynamic_data_model__WEBPACK_IMPORTED_MODULE_1__["FormDynamicData"]();
        this.shopData = {};
        this.titles = TITLE;
        // public mainConfig: any = mainConfig.MAIN_CONFIG;
        this.formTitle = 'Shop detail';
        this.formDataAdd = new FormData();
        this.formData = {
            formId: 'shop-edit',
            title: 'Detail',
            isCancel: true,
            service: this.shopService,
        };
    }
    ngOnInit() {
        const routeSub = this.route.params.subscribe((params) => {
            if (params.id) {
                this.currentshopId = params.id;
                this.shopService.selectById(params.id).subscribe((res) => {
                    this.shopData = res;
                    this.cd.detectChanges();
                    setTimeout(() => {
                        this.form.form.markAsPristine();
                    }, 0);
                });
                // Set role id for operation dialog ref
            }
            else {
                this.shopData = {};
            }
        });
        this.subscriptions.push(routeSub);
    }
    upload(event) {
        this.formDataAdd = event;
    }
    onBtnSaveClick() {
        if (this.form) {
            if (!this.validateForm(this.form, 'shop-edit')) {
                return;
            }
            if (this.form.form.dirty) {
                if (this.status == false) {
                    this.shopData.status = 0;
                }
                else {
                    this.shopData.status = 1;
                }
                this.shopService.merge(this.shopData).subscribe(event => {
                    this.shopService.uploadShopImages(event.id, this.formDataAdd).subscribe(res => {
                        this.notice.showSuccess();
                        this.onBtnCancelClick();
                    });
                });
            }
        }
    }
    markFormTouched() {
        setTimeout(() => {
            this.form.form.markAsDirty();
        }, 0);
    }
    onChangeBuyer(event) {
        this.shopData.shopId = event ? event.personId : null;
    }
    onBtnCancelClick() {
        const pathStrings = document.location.pathname.split('/');
        pathStrings.pop();
        if (this.currentshopId) {
            pathStrings.pop();
        }
        const path = pathStrings.join('/');
        this.router.navigate([`${path}`]);
    }
}
ShopItemAddComponent.ɵfac = function ShopItemAddComponent_Factory(t) { return new (t || ShopItemAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_module_sticky_modules_shop_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_module_sticky_common_notification_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
ShopItemAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShopItemAddComponent, selectors: [["app-shop-item-add"]], viewQuery: function ShopItemAddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 91, vars: 65, consts: [[1, "container"], [3, "formData", "form", "save", "cancel"], [1, "row"], [1, "col-lg-12"], ["autocomplete", "off", "id", "shop-edit"], ["form", "ngForm"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["type", "number", "name", "minprice", "required", "", "autofocus", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "number", "name", "maxPrice", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "form-required"], ["controlName", "name", 3, "form"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "description", 3, "form"], ["type", "text", "name", "description", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "telephone", 3, "form"], ["type", "text", "name", "telephone", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "name", "alternativeTelephone", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "address", 3, "form"], ["type", "text", "name", "address", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "street", "name", "street", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "city", 3, "form"], ["type", "text", "name", "city", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "district", 3, "form"], ["type", "text", "name", "district", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["name", "openingHour", 3, "ngModel", "ngModelChange"], ["name", "endingHour", 3, "ngModel", "ngModelChange"], ["controlName", "latitude", 3, "form"], ["type", "number", "name", "latitude", "step", "any", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "longitude", 3, "form"], ["type", "number", "name", "longtitude", "step", "any", "required", "", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["controlName", "category", 3, "form"], ["name", "category", "bindLabel", "name", "required", "", 3, "actionGet", "actionCount", "placeholder", "multiple", "closeOnSelect", "service", "ngModel", "ngModelChange"], [4, "ngIf"], [3, "onFileLoad"]], template: function ShopItemAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form-dynamic", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("save", function ShopItemAddComponent_Template_form_dynamic_save_1_listener() { return ctx.onBtnSaveClick(); })("cancel", function ShopItemAddComponent_Template_form_dynamic_cancel_1_listener() { return ctx.onBtnCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_13_listener($event) { return ctx.shopData.minPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_17_listener($event) { return ctx.shopData.maxPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "validate-form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_23_listener($event) { return ctx.shopData.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "validate-form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_28_listener($event) { return ctx.shopData.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "validate-form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_34_listener($event) { return ctx.shopData.telephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_38_listener($event) { return ctx.shopData.alternativeTelephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "validate-form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_44_listener($event) { return ctx.shopData.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "validate-form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_49_listener($event) { return ctx.shopData.street = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "validate-form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_55_listener($event) { return ctx.shopData.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "validate-form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_60_listener($event) { return ctx.shopData.district = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "input-time", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_time_ngModelChange_65_listener($event) { return ctx.shopData.openingHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "input-time", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_time_ngModelChange_69_listener($event) { return ctx.shopData.endingHour = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "validate-form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_75_listener($event) { return ctx.shopData.latitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "validate-form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_input_ngModelChange_80_listener($event) { return ctx.shopData.longitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "validate-form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](87, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "async-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ShopItemAddComponent_Template_async_select_ngModelChange_88_listener($event) { return ctx.shopData.shopCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, ShopItemAddComponent_label_89_Template, 2, 1, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "app-upload-multiple", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileLoad", function ShopItemAddComponent_Template_app_upload_multiple_onFileLoad_90_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.formData)("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Shop add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Min Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Min Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.minPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Max Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Max Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.maxPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.telephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Alternative Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Alternative Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.alternativeTelephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "street");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("District");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.district);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Opening hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.openingHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Ending hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.endingHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Latitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.latitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Longitude");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.shopData.longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("form", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](87, 63, ctx.shopData.shopCategory), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", "Shop Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("actionGet", "selectCategory")("actionCount", "countCategory")("multiple", true)("closeOnSelect", true)("service", ctx.shopService)("ngModel", ctx.shopData.shopCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentshopId);
    } }, directives: [_module_sticky_crud_component_form_dynamic_component__WEBPACK_IMPORTED_MODULE_6__["FormDynamicComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _module_sticky_crud_validate_form_validate_form_component__WEBPACK_IMPORTED_MODULE_8__["ValidateMessageComponent"], _module_sticky_control_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_9__["InputTimeComponent"], _module_sticky_control_async_select_async_select_component__WEBPACK_IMPORTED_MODULE_10__["NgSelectAsyncComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _module_sticky_upload_multiple_upload_multiple_component__WEBPACK_IMPORTED_MODULE_12__["UploadMultipleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWl0ZW0tYWRkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kQ1R":
/*!**********************************************************!*\
  !*** ./src/app/view/shop/shop-item/map/map.component.ts ***!
  \**********************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_sticky_modules_maps_constants_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../module/sticky/modules/maps/constants.model */ "KIL+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _coordinate_search_coordinate_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coordinate-search/coordinate-search.component */ "i9yD");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class MapComponent {
    constructor() {
    }
    ngOnInit() {
        this.initializeDefaultMapPoint();
        this.initializeMapOptions();
    }
    initializeMap(map) {
        this.map = map;
        this.createMarker(false);
    }
    calculateDistance() {
        if (this.center && this.mapPoint && this.mapPoint.length > 1) {
            console.log(this.mapPoint.map(x => this.distance(x.latitude, x.longitude, this.center.latitude, this.center.longitude)));
        }
    }
    //  distance(lat1,lon1,lat2,lon2) {
    //     var R = 6371; // Radius of the earth in km
    //     var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    //     var dLon = this.deg2rad(lon2-lon1); 
    //     var a = 
    //       Math.sin(dLat/2) * Math.sin(dLat/2) +
    //       Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
    //       Math.sin(dLon/2) * Math.sin(dLon/2)
    //       ; 
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    //     var d = R * c; // Distance in km
    //     return d;
    //   }
    //   deg2rad(deg) {
    //     return deg * (Math.PI/180)
    //   }
    distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;
        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }
    getAddress(result) {
        this.updateMapPoint(result.latitude, result.longitude, result.displayName);
        this.createMarker(false);
    }
    refreshSearchList(results) {
        this.results = results;
    }
    onMapAdd(e) {
        this.updateMapPoint(e.latitude, e.longitude);
        this.createMarker(false);
        if (this.mapPoint && this.mapPoint.length > 1) {
            let lat = this.mapPoint.map(x => x.latitude).reduce((a, b) => a + b, 0) / this.mapPoint.length;
            let lon = this.mapPoint.map(x => x.longitude).reduce((a, b) => a + b, 0) / this.mapPoint.length;
            this.center = {
                name: 'center',
                latitude: lat,
                longitude: lon
            };
            // this.mapPoint.push(this.center);
            this.createMarker(true);
            // this.mapPoint.pop();
        }
        this.calculateDistance();
    }
    onMapClick(e) {
        // this.clearMap();
        this.updateMapPoint(e.latlng.lat, e.latlng.lng);
        this.createMarker(false);
        if (this.mapPoint && this.mapPoint.length > 1) {
            let lat = this.mapPoint.map(x => x.latitude).reduce((a, b) => a + b, 0) / this.mapPoint.length;
            let lon = this.mapPoint.map(x => x.longitude).reduce((a, b) => a + b, 0) / this.mapPoint.length;
            this.center = {
                name: 'center',
                latitude: lat,
                longitude: lon
            };
            // this.mapPoint.push(this.center);
            this.createMarker(true);
            // this.mapPoint.pop();
        }
        this.calculateDistance();
    }
    initializeMapOptions() {
        this.options = {
            zoom: 15,
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: 'OSM' })
            ]
        };
    }
    initializeDefaultMapPoint() {
        this.mapPoint = [{
                name: 'Hello',
                latitude: _module_sticky_modules_maps_constants_model__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LATITUDE"],
                longitude: _module_sticky_modules_maps_constants_model__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LONGITUDE"]
            }];
    }
    updateMapPoint(latitude, longitude, name) {
        this.mapPoint.push({
            latitude: latitude,
            longitude: longitude,
            name: name ? name : this.mapPoint[this.mapPoint.length - 1].name
        });
    }
    createMarker(isCenter) {
        // this.clearMap();
        if (isCenter) {
            this.clearCenter();
            const mapIcon = this.getDefaultIcon();
            const coordinates = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])([this.center.latitude, this.center.longitude]);
            this.location = coordinates;
            this.centerLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"])(coordinates).setIcon(mapIcon).addTo(this.map);
            this.centerLayer.bindPopup('This is the center<br>Hello.').openPopup();
            //   marker([51.5, -0.09]).addTo(this.map)
            // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            // .openPopup()
            this.map.setView(coordinates, this.map.getZoom());
        }
        else {
            const mapIcon = this.getDefaultIcon();
            const coordinates = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])([this.mapPoint[this.mapPoint.length - 1].latitude, this.mapPoint[this.mapPoint.length - 1].longitude]);
            this.location = coordinates;
            this.lastLayer = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"])(coordinates).setIcon(mapIcon).addTo(this.map);
            this.map.setView(coordinates, this.map.getZoom());
        }
    }
    getDefaultIcon() {
        return Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon-2x.png'
        });
    }
    clearCenter() {
        if (this.map.hasLayer(this.centerLayer))
            this.map.removeLayer(this.centerLayer);
    }
    clearMap() {
        if (this.map.hasLayer(this.lastLayer))
            this.map.removeLayer(this.lastLayer);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 6, vars: 4, consts: [[3, "onSearch", "addPoint"], ["id", "map", "leaflet", "", 3, "leafletOptions", "leafletMapReady", "leafletClick"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-coordinate-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSearch", function MapComponent_Template_app_coordinate_search_onSearch_3_listener($event) { return ctx.refreshSearchList($event); })("addPoint", function MapComponent_Template_app_coordinate_search_addPoint_3_listener($event) { return ctx.onMapAdd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("leafletMapReady", function MapComponent_Template_div_leafletMapReady_5_listener($event) { return ctx.initializeMap($event); })("leafletClick", function MapComponent_Template_div_leafletClick_5_listener($event) { return ctx.onMapClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.mapPoint), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leafletOptions", ctx.options);
    } }, directives: [_coordinate_search_coordinate_search_component__WEBPACK_IMPORTED_MODULE_3__["CoordinateSearchComponent"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["#map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.leaflet-bottom[_ngcontent-%COMP%], .leaflet-left[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5sZWFmbGV0LWJvdHRvbSwgLmxlYWZsZXQtbGVmdCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ "pL2d":
/*!******************************************************************!*\
  !*** ./src/app/module/sticky/modules/maps/tomtom-map.service.ts ***!
  \******************************************************************/
/*! exports provided: TomtomMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomtomMapService", function() { return TomtomMapService; });
/* harmony import */ var _common_http_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/http/http.service */ "ivkc");
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tomtom-international/web-sdk-services */ "9ns6");
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TomtomMapService extends _common_http_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"] {
    constructor() {
        super();
        this.key = "PNAk0ku7BFNMCaRADAGi0c45eDwbYPJv";
        this.url = this.origin + 'user';
    }
    searchWithQuery() {
        _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1___default.a.services.fuzzySearch({
            key: this.key,
            query: 'Golden Gate Bridge'
        });
    }
    geoCoding(query) {
        var geocodeOptions = {
            query: query,
            key: this.key
        };
        // Look up the geocode of the given address 
        _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1___default.a.services.geocode(geocodeOptions).then(function (geocodeRes) {
            console.log(geocodeRes);
            var reverseOptions = {
                position: geocodeRes.results[0].position,
                key: 'Vn26cA8knt2E8sl0WBEWvAgWGRUf59mm'
            };
            // with our geocode, do a reverse look-up to get our original address back 
            _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_1___default.a.services.reverseGeocode(reverseOptions).then(function (reverseRes) {
                console.log(reverseRes);
            });
        });
    }
}
TomtomMapService.ɵfac = function TomtomMapService_Factory(t) { return new (t || TomtomMapService)(); };
TomtomMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TomtomMapService, factory: TomtomMapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qH+1":
/*!********************************************************************************!*\
  !*** ./src/app/view/shop/shop-item/map-point-form/map-point-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: MapPointFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPointFormComponent", function() { return MapPointFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class MapPointFormComponent {
    constructor() { }
}
MapPointFormComponent.ɵfac = function MapPointFormComponent_Factory(t) { return new (t || MapPointFormComponent)(); };
MapPointFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapPointFormComponent, selectors: [["app-map-point-form"]], inputs: { mapPoint: "mapPoint" }, decls: 15, vars: 3, consts: [["id", "map-point-form"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 3, "ngModel", "ngModelChange"], ["for", "longitude"], ["type", "text", "id", "longitude", "name", "longitude", "disabled", "true", 3, "ngModel"], ["for", "latitude"], ["type", "text", "id", "latitude", "name", "latitude", "disabled", "true", 3, "ngModel"]], template: function MapPointFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapPointFormComponent_Template_input_ngModelChange_6_listener($event) { return ctx.mapPoint.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Longitude: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Latitude: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mapPoint.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mapPoint.longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mapPoint.latitude);


/***/ }),
