import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// @ts-ignore
import * as OnScan from 'node_modules/onscan.js/onscan.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'escaner';
  //onScan: any;
  value: any;
  onscan = OnScan;


  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }


  ngOnInit(): void {

    this.onscan.attachTo(this.document);
    this.document.addEventListener('scan', (sScancode: any) => {
      this.value = sScancode.detail.scanCode;
    });

  }

  clear() {
    this.value = '';
  }


}

