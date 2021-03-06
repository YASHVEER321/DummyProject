import { ElementRef, AfterViewInit, DoCheck, AfterViewChecked, EventEmitter, QueryList, TemplateRef, Renderer2, ChangeDetectorRef, IterableDiffers } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { ControlValueAccessor } from '@angular/forms';
export declare const AUTOCOMPLETE_VALUE_ACCESSOR: any;
export declare class AutoComplete implements AfterViewInit, AfterViewChecked, DoCheck, ControlValueAccessor {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    objectUtils: ObjectUtils;
    cd: ChangeDetectorRef;
    differs: IterableDiffers;
    minLength: number;
    delay: number;
    style: any;
    styleClass: string;
    inputStyle: any;
    inputId: string;
    inputStyleClass: string;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    maxlength: number;
    size: number;
    appendTo: any;
    autoHighlight: boolean;
    type: string;
    completeMethod: EventEmitter<any>;
    onSelect: EventEmitter<any>;
    onUnselect: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onDropdownClick: EventEmitter<any>;
    onClear: EventEmitter<any>;
    onKeyUp: EventEmitter<any>;
    field: string;
    scrollHeight: string;
    dropdown: boolean;
    multiple: boolean;
    tabindex: number;
    dataKey: string;
    emptyMessage: string;
    immutable: boolean;
    inputEL: ElementRef;
    multiInputEL: ElementRef;
    panelEL: ElementRef;
    multiContainerEL: ElementRef;
    templates: QueryList<any>;
    itemTemplate: TemplateRef<any>;
    selectedItemTemplate: TemplateRef<any>;
    value: any;
    _suggestions: any[];
    onModelChange: Function;
    onModelTouched: Function;
    timeout: any;
    panelVisible: boolean;
    documentClickListener: any;
    suggestionsUpdated: boolean;
    highlightOption: any;
    highlightOptionChanged: boolean;
    focus: boolean;
    filled: boolean;
    inputClick: boolean;
    inputKeyDown: boolean;
    noResults: boolean;
    differ: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, objectUtils: ObjectUtils, cd: ChangeDetectorRef, differs: IterableDiffers);
    suggestions: any[];
    ngDoCheck(): void;
    handleSuggestionsChange(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onInput(event: KeyboardEvent): void;
    onInputClick(event: MouseEvent): void;
    search(event: any, query: string): void;
    selectItem(option: any): void;
    show(): void;
    align(): void;
    hide(): void;
    handleDropdownClick(event: any): void;
    focusInput(): void;
    removeItem(item: any): void;
    onKeydown(event: any): void;
    onKeyup(event: any): void;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    isSelected(val: any): boolean;
    findOptionIndex(option: any): number;
    updateFilledState(): void;
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    ngOnDestroy(): void;
}
export declare class AutoCompleteModule {
}
