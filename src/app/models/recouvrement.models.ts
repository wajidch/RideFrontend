import { Partenaire } from './partenaire.models';
import { Convention } from './convention.models';


export class Recouvrement {


	private _idRecouvrement: number;
	private _partenaire: Partenaire;
	private _numeroAcompte: number;
	private _montantAcompte: number;
	private _dateAcompte: string;
	private _convention: Convention;


	constructor(){}


	get idRecouvrement(): number {
      return this._idRecouvrement;
	}

	set idRecouvrement(idRecouvrement: number) {
      this._idRecouvrement = idRecouvrement;
	}



	get partenaire(): Partenaire {
      return this._partenaire;
	}

	set partenaire(partenaire: Partenaire) {
      this._partenaire = partenaire;
	}



	get numeroAcompte(): number {
      return this._numeroAcompte;
	}

	set numeroAcompte(numeroAcompte: number) {
      this._numeroAcompte = numeroAcompte;
	}



	get montantAcompte(): number {
      return this._montantAcompte;
	}

	set montantAcompte(montantAcompte: number) {
      this._montantAcompte = montantAcompte;
	}



	get dateAcompte(): string {
      return this._dateAcompte;
	}

	set dateAcompte(dateAcompte: string) {
      this._dateAcompte = dateAcompte;
	}



	get convention(): Convention {
      return this._convention;
	}

	set convention(convention: Convention) {
      this._convention = convention;
	}




}
