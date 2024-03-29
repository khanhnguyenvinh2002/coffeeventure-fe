import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    HostListener,
    ViewChild,
    ChangeDetectorRef,
} from '@angular/core';
import { DialogRef } from './dialog-ref.model';
import { NgForm } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { Guid } from 'guid-typescript';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { SaveConfirmation, DeleteConfirmation, CancelConfirmation } from '../../base/common/confirmation';
import { NotificationService } from '../../base/common/notification/notification.service';
import { BaseFormComponent } from '../../base/component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'util-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent extends BaseFormComponent implements OnInit {
    public key: string;

    constructor(
        private notification: NotificationService,
        public cd: ChangeDetectorRef) {
        super();
        this.key = Guid.create().toString();
    }

    @ViewChild('dlg', { static: true }) dialog: Dialog;
    @ViewChild('dlgConfirm', { static: true }) dlgConfirm: ConfirmDialog;
    @Input() dialogRef: DialogRef = new DialogRef();
    @Input() form: NgForm;
    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<any> = new EventEmitter();
    @Output() delete: EventEmitter<any> = new EventEmitter();
    @Output() show: EventEmitter<any> = new EventEmitter();
    @Output() hide: EventEmitter<any> = new EventEmitter();
    @Input() hideBtnSave = false;

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (this.dialogRef.isDisplay) {
            switch (event.code) {
                case 'Escape':
                    if (!this.dlgConfirm.maskVisible) {
                        this.onBtnCancelClick();
                    }
                    break;
                case 'Enter':
                case 'NumpadEnter':
                    if (!this.dlgConfirm.maskVisible && event.ctrlKey) {
                        this.onBtnSaveClick();
                    } else {
                        // Cannot read property 'acceptEvent' of undefined
                        // this.dlgConfirm.accept();
                    }
                    break;
                case 'Delete':
                    if (
                        this.dialogRef.input.id &&
                        !this.dlgConfirm.maskVisible &&
                        event.ctrlKey
                    ) {
                        this.onBtnDeleteClick();
                    }
                    break;
                case 'KeyF':
                    if (event.altKey) {
                        event.preventDefault();
                        setTimeout(() => {
                            const ele: HTMLElement = this.dialog.headerViewChild.nativeElement
                                .getElementsByClassName(
                                    'p-dialog-header-icons'
                                )[0]
                                .getElementsByTagName(
                                    'BUTTON'
                                )[0] as HTMLElement;
                            setTimeout(() => {
                                ele.click();
                            }, 0);
                        }, 0);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    ngOnInit() { }
    /**
     * handle save event
     */
    public onBtnSaveClick(): void {
        if (this.form) {
            if (!this.validateForm(this.form, 'role-edit')) {
                return;
            }
            if (this.form.form.dirty) {
                if (!this.dialogRef.config.btnTitle) {
                    const saveConfirmation = new SaveConfirmation();
                    saveConfirmation.accept = () => {
                        this.save.emit();
                        this.cd.detectChanges();
                    };
                    this.notification.confirm(saveConfirmation);
                } else {
                    this.save.emit();
                    this.cd.detectChanges();
                }
            } else {
                this.dialogRef.hide();
            }
        } else {
            this.save.emit();
            this.cd.detectChanges();
        }
    }
    /**
     * handle delete event
     */
    public onBtnDeleteClick(): void {
        const deleteConfirmation = new DeleteConfirmation();
        deleteConfirmation.accept = () => {
            this.delete.emit();
            this.cd.detectChanges();
        };
        this.notification.confirm(deleteConfirmation);
    }
    /**
     * reset form
     */
    public resetForm(): void {
        if (this.form) {
            this.form.resetForm();
        }
    }
    /**
     * mark the form as pristine
     */
    public markAsPristine(): void {
        if (this.form) {
            this.form.form.markAsPristine();
        }
    }
    /**
     * handle cancel event
     */
    public onBtnCancelClick(): void {
        if (this.form) {
            if (this.form.form.dirty) {
                const cancelConfirmation = new CancelConfirmation();
                cancelConfirmation.accept = () => {
                    this.dialogRef.hide();
                    this.cancel.emit();
                    this.cd.detectChanges();
                };
                this.notification.confirm(cancelConfirmation);
            } else {
                this.dialogRef.hide();
            }
        } else {
            this.dialogRef.hide();
        }
    }
}
