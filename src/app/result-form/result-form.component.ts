import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { MathGameService } from '../math-game.service';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent implements OnInit {

  resultForm: FormGroup;
  randNum1: number;
  randNum2: number;
  userResults;
  submitted= false;
  messageError: string;
  num: Array<number>;

  @Output() sendNumber: EventEmitter<number> = new EventEmitter;

  constructor(private mathS: MathGameService ,private formBuilder: FormBuilder) {
    this.userResults = {
      userId: `toto`,
      resultNumber1: null,
      resultNumber2: null,
      resultNumber3: null,
      resultNumber4: null,
      resultNumber5: null,
      resultNumber6: null,
      resultNumber7:null,
      resultNumber8: null,
      resultNumber9: null,
      resultNumber10: null
    }
  }

  ngOnInit() {
    this.initResults();
  }

  initResults() {
    this.resultForm = this.formBuilder.group(
      {
        userId: this.userResults.userId,
        resultNumber: [``, Validators.required]
      }
    );
  }



  onSubmit() {
    console.log('resultNumber : ', this.resultForm.value)
    this.sendNumber.emit(this.resultForm.value[`resultNumber`])
    const values = this.resultForm.value;

    this.mathS.addResults(values).subscribe()

    this.submitted = true;
    if (this.resultForm.invalid) {
      return;
    }

  }

}
