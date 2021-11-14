import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "http://api.giphy.com/v1/gifs/search?api_key=Z9S507rSalhPEtvsnMrv5dOtTxSoE0Yu";
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
          return this.searchResults = response["data"];
        })
      );
    }
  }
//returns the response
public _searchEntries(term: any){
  return this.searchEntries(term);
}
}
