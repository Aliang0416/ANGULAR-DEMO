import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {pictures} from "./pictures.mock";
import {Picture} from "./Picture";

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getPictures(): Observable<Picture[]> {
    const picture = of(pictures)
    return picture
  }
}
