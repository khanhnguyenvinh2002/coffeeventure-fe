import { ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class DialogRef {
    public isDisplay: boolean;
    public isVisible: boolean;
    public input: any;
    public output: any;
    public config: DialogConfig;
    public visibilitySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public visibility$: Observable<boolean> = this.visibilitySubject.asObservable();

    constructor(
        config?: any) {
        this.isDisplay = false;
        this.input = {};
        this.output = {};
        if (config) { this.config = config; } else { this.config = DEFAULT_CONFIG; }
    }
    /**
     * show dialog
     */
    public show(): void {
        this.isDisplay = true;
        this.visibilitySubject.next(true);
    }
    /**
     * hide dialog
     */
    public hide(): void {
        this.isDisplay = false;
        this.visibilitySubject.next(false);
    }
    /**
     * hide mask for dialog
     */
    public hideMask(): void {
        const parentNode = document.getElementsByClassName('dialog-hide')[0].parentNode as any;
        parentNode.hidden = true;
    }
    /**
     * show mask for dialog
     */
    public showMask(): void {
        const parentNode = document.getElementsByClassName('dialog-hide')[0].parentNode as any;
        parentNode.hidden = false;
    }
    /** 
     * make dialog visible
     */
    public visible(): void {
        this.isVisible = true;
    }
    /**
     * make dialog invisible
     */
    public invisible(): void {
        this.isVisible = false;
    }
}

export const DEFAULT_CONFIG: DialogConfig = {
    style: { width: '750px' },
    baseZIndex: 10000,
    draggable: true,
    maximizable: true,
    title: 'Detail',
    btnTitle: 'Save',
    hideBtnCancel: false
};

export class DialogConfig {
    style: any;
    baseZIndex: number;
    draggable: boolean;
    maximizable: boolean;
    title: string;
    btnTitle?: string;
    hideBtnCancel?: boolean;
}
