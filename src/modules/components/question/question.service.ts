import { Injectable }           from '@angular/core';

import { QuestionBase }         from './question-base';
import { TextboxQuestion }      from './question-textbox';
import { MultiTextboxQuestion } from './question-multi-textbox';
import { RadioQuestion }        from './question-radio';

@Injectable()
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new RadioQuestion({
        key: 'gender',
        label: 'Votre civilité',
        options: [
          {value: 'F',  label: 'Femme'},
          {value: 'M',  label: 'Homme'},
        ],
        required: false,
        order: 1
      }),

      new MultiTextboxQuestion({
        label: 'Votre date de naissance',
        key: 'dateofbirth',
        options: [
          {key: 'day', label: 'Jour', type: 'number', min: 1, max: 31},
          {key: 'month', label: 'Mois', type: 'number', min: 1, max: 12},
          {key: 'year', label: 'Année', type: 'number', min: 1900, max: (new Date()).getFullYear()},
        ],
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'Votre prénom',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Votre nom',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Votre email',
        type: 'email',
        required: true,
        order: 4
      }),

      new RadioQuestion({
        key: 'active',
        label: 'Voulez-vous vous inscrire à la newsletter ?',
        options: [
          {value: '1',  label: "Je veux m'inscrire"},
          {value: '0',  label: "Je ne veux pas m'inscrire"},
        ],
        required: true,
        order: 5
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
