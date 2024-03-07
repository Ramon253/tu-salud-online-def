import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FetchSvcService {
    private readonly fetchSvc = inject(HttpClient)

    getDogs():Observable<any>{
        return this.fetchSvc.get('https://dog.ceo/api/breeds/image/random')
    }
}
