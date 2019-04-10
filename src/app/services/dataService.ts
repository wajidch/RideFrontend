import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Projet } from 'app/models/projet.models';
import { Marche } from 'app/models/marche.models';
import { Convention } from 'app/models/convention.models';
import { AppelOffre } from 'app/models/appelOffre.models';

@Injectable()
export class DataService {


  private messageSourcePr = new BehaviorSubject(new Projet())
  private messageSourceMa = new BehaviorSubject(new Marche())
  private messageSourceCo = new BehaviorSubject(new Convention())
  private messageSourceAo = new BehaviorSubject(new AppelOffre())
  private messageSourcePh = new BehaviorSubject('')
  private messageSourcePhObj = new BehaviorSubject({'phase':'', 'obj': null})

  currentMessagePr = this.messageSourcePr.asObservable();
  currentMessageMa = this.messageSourceMa.asObservable();
  currentMessageCo = this.messageSourceCo.asObservable();
  currentMessageAo = this.messageSourceAo.asObservable();
  currentMessagePh = this.messageSourcePh.asObservable();
  currentMessagePhObj = this.messageSourcePhObj.asObservable();
  

  changeMessagePr(message: any) {
    this.messageSourcePr.next(message)
  }

  changeMessageMa(message: any) {
    this.messageSourceMa.next(message)
  }

  changeMessageCo(message: any) {
    this.messageSourceCo.next(message)
  }

  changeMessageAo(message: any) {
    this.messageSourceAo.next(message)
  }

  changeMessagePh(message: any) {
    this.messageSourcePh.next(message)
  }

  changeMessagePhObj(message: any) {
    this.messageSourcePhObj.next(message)
  }

}