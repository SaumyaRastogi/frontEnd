import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CancerPredictionService } from '../cancer-prediction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  public answer: String;
  area_mean: any;
 
area_se: any;
compactness_mean: any;
compactness_se: any;
compactness_worst: any;
concave_points_mean: any;
concave_points_se: any;
concavity_se: any;
concavity_worst: any;
fractal_dimension_mean: any;
fractal_dimension_se: any;
fractal_dimension_worst: any;
smoothness_mean: any;
smoothness_se: any;
smoothness_worst: any;
symmetry_mean: any;
symmetry_se: any;
symmetry_worst: any;
texture_mean: any;
texture_se: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cancerPredictionService: CancerPredictionService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {

    this.loginForm = this.formBuilder.group({
      area_mean: ['', Validators.required],
      area_se: ['', Validators.required],
      compactness_mean: ['', Validators.required],
      compactness_se: ['', Validators.required],
      compactness_worst: ['', Validators.required],
      concave_points_mean: ['', Validators.required],
      concave_points_se: ['', Validators.required],
      concavity_se: ['', Validators.required],
      concavity_worst: ['', Validators.required],
      fractal_dimension_mean: ['', Validators.required],
      fractal_dimension_se: ['', Validators.required],
      fractal_dimension_worst: ['', Validators.required],
      smoothness_mean: ['', Validators.required],
      smoothness_se: ['', Validators.required],
      smoothness_worst: ['', Validators.required],
      symmetry_mean: ['', Validators.required],
      symmetry_se: ['', Validators.required],
      symmetry_worst: ['', Validators.required],
      texture_mean: ['', Validators.required],
      texture_se: ['', Validators.required],

    });


  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log("clicked")
    // let answer="abc";
    // this.router.navigate(['response',answer]);
    
    this.cancerPredictionService.cancerPrediction(
      this.area_mean.value,
      this.area_se.value,
      this.compactness_mean.value,
      this.compactness_se.value,
      this.compactness_worst.value,
      this.concave_points_mean.value,
      this.concave_points_se.value,
      this.concavity_se.value,
      this.concavity_worst.value,
      this.fractal_dimension_mean.value,
      this.fractal_dimension_se.value,
      this.fractal_dimension_worst.value,
      this.smoothness_mean.value,
      this.smoothness_se.value,
      this.smoothness_worst.value,
      this.symmetry_mean.value,
      this.symmetry_se.value,
      this.symmetry_worst.value,
      this.texture_mean.value,
      this.texture_se.value)
            .subscribe(
                (data) => {
                    this.answer=data.svm;
                    this.router.navigate(['response',this.answer]);
                    console.log(this.answer)

                },
                (error) => {
                    console.log(error)


                });

              } 
  }

