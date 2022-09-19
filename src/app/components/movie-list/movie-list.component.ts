import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies!: any[];

  public title:string="movies list here ...";

  constructor(
    private movieService: MovieServiceService,
    private activateroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchMovie();
  }

  searchMovie(){
    this.activateroute.queryParams.subscribe(
      qparams => this.movieService.searchMovies(qparams['q'])
      .subscribe(response=> this.movies = response.Search)
    );
  }

}


/* string(329) "id_auto=EV0000018099&num_table=111104055&password=AdminUVCI772&nom=ORE&prenoms=GUIEMANE+PRINCE-MICHAEL&email=guiemane.ore%40uvci.edu.ci&groupe=RS-JANVIER-DAS-L2-S4-G012&niveau=ISN-DAS-L2&rentree=RS-JANVIER-2021-2022&aim=S4&reinscription=0&niveau_etude=LICENCE+2&specialite=ISN-DAS&code_auto_ecue=&code_manuel_ecue=&intitule_ecue=" */
