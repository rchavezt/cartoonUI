import  { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Character } from './character.model';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CharacterService{
  private _getCharacter = '/cartoon/get';

  constructor(private http: Http) {
  }

  getCharacter(): Observable<Character>{
    return this.http.get(environment.api + this._getCharacter)
    .map((response: Response) => <Character>response.json())
    .do(data => console.log('getCharacter: ', data))
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
