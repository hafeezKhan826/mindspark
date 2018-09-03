import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';

@Component({
  selector: 'ms-session-report',
  templateUrl: './session-report.component.html',
  styleUrls: ['./session-report.component.scss']
})
export class SessionReportComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  ngOnInit() { }
}
