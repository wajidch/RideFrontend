import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {

  private headers = new HttpHeaders();
  private API_URL = environment.apiUrl;

  public ACTION: string = 'action';
  public APPELOFFRE: string = 'appelOffre';
  public AVENANT: string = 'avenant';
  public CONVENTION: string = 'convention';
  public CORRESPONDANCE: string = 'correspondance';
  public CORRESPONDANCESTATUS: string = 'correspondanceStatus';
  public DECOMPTE: string = 'decompte';
  public DOCUMENT: string = 'document';
  public INTERVENANT: string = 'intervenant';
  public LOCALITE: string = 'localite';
  public MARCHE: string = 'marche';
  public MISSION: string = 'mission';
  public ORDREARRETREPRISE: string = 'ordreArretReprise';
  public PARTENAIRE: string = 'partenaire';
  public PIECEJOINTE: string = 'piecejointe';
  public PLAN: string = 'plan';
  public PROJET: string = 'projet';
  public RECOUVREMENT: string = 'recouvrement';
  public REUNION: string = 'reunion';
  public SITUATION: string = 'situation';


  constructor(private httpClient: HttpClient) {
    this.headers.set("Access-Control-Allow-Origin", "*");
  }


  // ------------------------------
  // ---------- GET ---------------
  // ------------------------------
  // API: GET /objType

  public getAll(objType: string): Observable<any> {

    return this.httpClient.get(this.API_URL + objType);
  }

  // API: GET /objType/{id}

  public getAllFilterBy(objType: string, idVal: any): Observable<any> {
    return this.httpClient.get(this.API_URL + objType + '/'+idVal);
  }



  // ------------------------------
  // ---------- POST --------------
  // ------------------------------
  // API: POST /objType/add/{action}

  public createObj(objType: string, obj: any): any {
    let params = new HttpParams();
    this.headers.set("Access-Control-Allow-Origin", "*");
    this.headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    //params = this.params_ALL[objType](this.typeCastAs(objType, obj));
    params = params.append(objType, obj);

    var mType = this.httpClient.post(this.API_URL + objType + '/add/', obj, {headers: this.headers} )
    .subscribe(value => {
      console.log(
        'TASK: ' + value['task'] + '\n' +
        'STATUS: ' + value['status'] + '\n'
      );
    });

    console.log("@@@@ TYPE OF");
    console.log(typeof mType);

    return mType;
  }




  // ------------------------------
  // ---------- PUT --------------
  // ------------------------------
  // API: PUT /objType/update/{action}

  public updateAction(objType: string, obj: any): Observable<any> {
    let params = new HttpParams();

    // params = this.params_ALL[objType](this.typeCastAs(objType, obj));
    params = params.append(objType, obj);
    return this.httpClient.put<string>(this.API_URL + objType + '/update/', params);
  }



}
