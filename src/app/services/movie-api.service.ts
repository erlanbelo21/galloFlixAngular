import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

   constructor(private http:HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "4bce308009138c11bd5ec15086f68483";

  //banner API Data
  bannerApiData(): Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }
  trendingMovieApiData():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}&language=pt-BR`);
  }
  movieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}&language=pt-BR`);    
  }
}

export class MovieDetailsComponent {

  constructor(private service:MovieApiService, private router:ActivatedRoute) { }

  movieResult: any;
  movieVideoResult: any;
  movieCastResult: any;

  ngOnInit(): void{
    let id = this.router.snapshot.paramMap.get('id');
    this.getMovie(id);
    this.getVideo(id);
    this.getCast(id);
  }

  getMovie(id:any){
    this.service.movieDetails(id).subscribe((result)=>{
      console.log(result, 'movieDetails#');
      this.movieResult = result;
    });
  }

  getVideo(id:any){
    this.service.movieVideo(id).subscribe((result)=>{
      console.log(result, 'movieVideo#');
      this.movieVideoResult = result;
    });
  }

  getCast(id:any){
    this.service.movieCast(id).subscribe((result)=>{
      console.log(result, 'movieVideo#');
      this.movieCastResult = result;
    });
  }

}

