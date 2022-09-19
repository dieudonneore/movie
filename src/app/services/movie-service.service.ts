import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl:string ="http://www.omdbapi.com/?apikey=3d573917";

@Injectable({
  providedIn: 'root'
})



export class MovieServiceService {



  constructor(private http: HttpClient) { }



  searchMovies(searchTerm:string): Observable<any>{
    return this.http.get(baseUrl, {params:{s: searchTerm}});
  }

  getMoviesDetail(imdbID:string): Observable<any>{
    return this.http.get(baseUrl, {params:{i:imdbID}});
  }
}
