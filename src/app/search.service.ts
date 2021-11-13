import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { }
  
  //makes Http call to the API

  public searchEntries(term: any): Observable<any>{
    if(term === ""){
      console.log("Not Defined");
      return of(null);
      //return empty()
    }
    else {
      let params = {q: term}

      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          console.log(response);
          return this.searchResults = { response:["items"] };
        })
      );
    }
  }
//returns the response
public _searchEntries(term: any){
  return this.searchEntries(term);
}
}
