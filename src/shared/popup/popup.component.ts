import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() title = 'Product toevoegen';
  @Input() buttons = [false, false, false];
  @Input() backText = 'Toevoegen en verder winkelen';
  @Input() buttonText = 'Toevoegen en afrekenen';
  @Output() closed = new EventEmitter<void>();
  @Output() savedAndClosed = new EventEmitter<void>();
  @Output() savedAndWent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClose(): void {
    this.closed.emit();
  }

  onSaveAndClose(): void {
    this.savedAndClosed.emit();
  }

  onSaveAndGo(): void {
    this.savedAndWent.emit();
  }
}
