import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service:MovieApiService, private router:ActivatedRoute) { }

  movieResult: any;

  ngOnInit(): void{
    let id = this.router.snapshot.paramMap.get('id');
    this.getMovie(id);
  }

  getVideo(id:any){
    this.service.movieVideo(id).subscribe((result)=>{
      result.results.forEach((elem:any) => {
        if (elem.type == "Trailer")
        {
          this.movieVideoResult = "https://www.youtube.com/embed/" + elem.key;
        }
      });
      console.log(this.movieVideoResult, 'movieVideo#');
    });
  }
  getCast(id:any){
    this.service.movieCasts(id).subscribe((result)=>{
      this.movieCastResult = result.cast;
      console.log(this.movieCastResult, 'movieVideo#');
    });
  }



}