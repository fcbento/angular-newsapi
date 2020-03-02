import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) { }

  public showError(err: string) {
    this.toastr.error(err);
  }

  public showInfo(info: string) {
    this.toastr.info(info);
  }
}
