import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!'

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  async createHandler(moment: Moment | null) {
    if (!moment) {
      console.error('O objeto "moment" está nulo ou indefinido.');
      return; // Impede a execução se 'moment' for nulo/undefined.
    }
  
    const formData = new FormData();
  
    // Usa valores padrão se alguma propriedade estiver ausente
    formData.append('title', moment.title ?? '');
    formData.append('description', moment.description ?? '');
  
    if (moment.image) {
      formData.append('image', moment.image);
    }
  
    try {
      const response = await this.momentService.createMoment(formData).toPromise();
      console.log('Momento criado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao criar o momento:', error);
    }

this.messagesService.add('Momento adicionado com sucesso');

this.router.navigate(['/']);

  }
}
