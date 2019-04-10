import { Mission } from './mission.models';
import { Projet } from './projet.models';


export class Intervenant {


	private _idIntervenant: number;
	private _mission: Mission;
	private _intervenant: string;
	private _adresse: string;
	private _telephone: string;
	private _fax: string;
	private _email: string;
	private _projets: Projet[];


	constructor(){}


	get idIntervenant(): number {
      return this._idIntervenant;
	}

	set idIntervenant(idIntervenant: number) {
      this._idIntervenant = idIntervenant;
	}



	get mission(): Mission {
      return this._mission;
	}

	set mission(mission: Mission) {
      this._mission = mission;
	}



	get intervenant(): string {
      return this._intervenant;
	}

	set intervenant(intervenant: string) {
      this._intervenant = intervenant;
	}



	get adresse(): string {
      return this._adresse;
	}

	set adresse(adresse: string) {
      this._adresse = adresse;
	}



	get telephone(): string {
      return this._telephone;
	}

	set telephone(telephone: string) {
      this._telephone = telephone;
	}



	get fax(): string {
      return this._fax;
	}

	set fax(fax: string) {
      this._fax = fax;
	}



	get email(): string {
      return this._email;
	}

	set email(email: string) {
      this._email = email;
	}



	get projets(): Projet[] {
      return this._projets;
	}

	set projets(projets: Projet[]) {
      this._projets = projets;
	}




}
