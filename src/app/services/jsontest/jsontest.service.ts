import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { ENVIRONMENT } from '../../../environments/environment';
import { GetIp } from './jsontest.type';
import { GetDateTime } from './jsontest.type';


@Injectable({
	providedIn: 'root',
})
export class JsontestService {
	constructor(
		private _http: HttpClient,
	) { }

	public getIp() {
		return this._http.get<GetIp>(ENVIRONMENT.services.jsontest.apiUrls.ip + '/');
	}

	public getDateTime(): Observable<string> {
		return this._http.get<GetDateTime>(ENVIRONMENT.services.jsontest.apiUrls.dateTime + '/')
		  .pipe(
			map((currentDateTime: GetDateTime) => {
			  const [month, day, year] = currentDateTime.date.split('-');
			  const [hour, minute, second, period] = currentDateTime.time.split(/[:\s]+/);
	  
			  const localDateTime = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), period === 'PM' ? parseInt(hour) + 12 : parseInt(hour), parseInt(minute), parseInt(second));
	  
			  const australiaTime = localDateTime.toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
	  
			  const [australiaDate, australiaTimeStr] = australiaTime.split(', ');
			  const australiaTimeFormatted = australiaTimeStr.slice(0, -6);
	  
			  const dateTimeAustralia = "Il est " + australiaTimeFormatted + " et nous sommes le " + australiaDate;
			  return dateTimeAustralia;
			})
		  );
	  }
}
