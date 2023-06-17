import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { JsontestService } from '../../services/jsontest/jsontest.service';


@Component({
  selector: 'app-show-datetime',
  templateUrl: './show-datetime.component.html',
  styleUrls: ['./show-datetime.component.css']
})
export class ShowDatetimeComponent implements OnInit {
	public loader = false;
  public dateTime:string = null;

  constructor(
    private _jsontest:JsontestService,
  ) { }

  ngOnInit() {
    this.getDateTime();
  }

  public getDateTime(){
    this.loader = true;
    this._jsontest.getDateTime().subscribe((dateTimeAustralia: string) => {
      this.loader = false;
      this.dateTime = dateTimeAustralia;
    });      
  }

}
