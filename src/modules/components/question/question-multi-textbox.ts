import { QuestionBase } from './question-base';

export class MultiTextboxQuestion extends QuestionBase<string> {
  controlType = 'multitextbox';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
