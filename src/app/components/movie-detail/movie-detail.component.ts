import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {


  movie:any;

  constructor(
    private movieService: MovieServiceService,
    private activateroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMoviesDetail();
  }


  getMoviesDetail(){
    this.activateroute.params
      .subscribe(params => {
        let id = params['imdbID'];
        this.movieService.getMoviesDetail(id)
          .subscribe(resp=> this.movie = resp)
      });
  }

  goBack(){
    window.history.back();
  }

}
