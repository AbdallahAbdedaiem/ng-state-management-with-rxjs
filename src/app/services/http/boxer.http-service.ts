import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBoxer } from "src/app/models/boxer.model";

@Injectable({
  providedIn: "root"
})
export class BoxerHttpService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBoxer[]> {
    return this.http.get<IBoxer[]>('http://localhost:3000/api/boxers');
  }

}
