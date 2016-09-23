import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question/question-base';


@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.css']
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isInvalid() {
    return this.form.controls[this.question.key].invalid;
  }

  get isTouched() {
    return this.form.controls[this.question.key].touched;
  }

  submit(value: any, part: any) {
    if (part) {
      if (this.question.value === undefined) {
        this.question.value = {};
        this.question.value[this.question.key] = {};
      }
      this.question.value[this.question.key][part.key] = value;
    } else {
      this.question.value = value;
    }
  }
}
