import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiSettings } from '../../../settings/app.api-settings';
import { SharedService } from '../../../shared/shared.service';
import { environment } from '../../../../environments/environment';
import { DoAPICallService } from '../../../shared/services/doAPICall/doAPICall.service';

@Injectable()
export class WorksheetsService {

    private baseURL: string;
    serviceResponse: any;

    constructor(private http: DoAPICallService, private sharedService: SharedService) {
        this.baseURL = environment.apiBaseURL;
    }

    getWorksheetsList(): Observable<any> {
        const data = {};
        const url = ApiSettings.API.worksheets.get;
        let response: any;
        return this.http.post(url, data)
            .map((res) => response = res)
            .catch(this.sharedService.errorHandler);
    }

    getWorsheetReport(): Observable<any> {
        const data = {};
        const url = ApiSettings.API.getWorsheetReport;
        let response: any;
        return this.http.post(url, data)
            .map((res) => response = res)
            .catch(this.sharedService.errorHandler);
    }

    startWorksheet(data): Observable<any> {
        const url = ApiSettings.API.worksheets.open;
        let response: any;
        return this.http.post(url, data)
            .map((res) => response = res)
            .catch(this.sharedService.errorHandler);
    }
    quitWorksheet(): Observable<any> {
        const url = ApiSettings.API.worksheets.quitWorksheet;
        let response: any;
        const data = {};
        return this.http.post(url, data)
            .map((res) => response = res)
            .catch(this.sharedService.errorHandler);
    }

}
