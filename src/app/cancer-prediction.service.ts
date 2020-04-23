import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancerPredictionService {
  Url:string='http://localhost:8080/users'; //endpoint Url here
  
  constructor(private http: HttpClient) { }
  cancerPrediction(area_mean,
    area_se,
    compactness_mean,
    compactness_se,
    compactness_worst,
    concave_points_mean,
    concave_points_se,
    concavity_se,
    concavity_worst,
    fractal_dimension_mean,
    fractal_dimension_se,
    fractal_dimension_worst,
    smoothness_mean,
    smoothness_se,
    smoothness_worst,
    symmetry_mean,
    symmetry_se,
    symmetry_worst,
    texture_mean,
    texture_se)
  {
    
      return this.http.post<any>(this.Url, { area_mean,
        area_se,
        compactness_mean,
        compactness_se,
        compactness_worst,
        concave_points_mean,
        concave_points_se,
        concavity_se,
        concavity_worst,
        fractal_dimension_mean,
        fractal_dimension_se,
        fractal_dimension_worst,
        smoothness_mean,
        smoothness_se,
        smoothness_worst,
        symmetry_mean,
        symmetry_se,
        symmetry_worst,
        texture_mean,
        texture_se, });
  }


  
}
