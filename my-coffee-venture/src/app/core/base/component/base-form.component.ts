import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'base-form',
    template: "<div></div>"
})
export class BaseFormComponent implements OnDestroy {
    public formTitle: string;
    public subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(el => el.unsubscribe());
    }

    public validateForm(form: NgForm, formId: string): boolean {
        if (!form) { return false; }
        if (!form.valid && !form.disabled) {
            Object.keys(form.form.controls).forEach(key => {
                if (!!form.form.controls[key].errors) {
                    form.form.controls[key].markAsTouched();
                }
            });
            let firstErrorIndex = null;
            const inputDOMs = document.getElementById(formId)
                .querySelectorAll('input,textarea,ng-select,async-select,p-inputnumber,input-time');
            for (let i = 0; i < inputDOMs.length; i++) {
                if (inputDOMs[i].className.split(' ').indexOf('ng-invalid') !== - 1) {
                    firstErrorIndex = i;
                    break;
                }
            }
            const firstErrorElement: any = inputDOMs[firstErrorIndex];
            if (!!firstErrorElement) {
                if (firstErrorElement.querySelectorAll('input,textarea').length === 0) {
                    firstErrorElement.focus();
                } else {
                    firstErrorElement.querySelectorAll('input,textarea')[0].focus();
                }
            }
            return false;
        } else { return true; }
    }

    public isFormDirty(form: NgForm): boolean {
        if (!form || form.pristine) {
            return false;
        } else if (form.dirty) {
            return true;
        }
    }

    public parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    }

    public toDto(property: string, value: string): any {
        if (value) {
            const obj = {};
            obj[property] = value;
            return obj;
        } else {
            return null;
        }
    }

    public toCamelCase(str) {
        // tslint:disable-next-line:only-arrow-functions
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}
