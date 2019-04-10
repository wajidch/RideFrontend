import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class OrdreArretReprise {


	private _idOrdre: number;
	private _numOrdre: string;
	private _dateOrdre: Date;
	private _ordreFile: PieceJointe[];
	private _ordreType: string;
	private _marche: Marche;
	private _motifArret: string;


	constructor(){}


	get idOrdre(): number {
      return this._idOrdre;
	}

	set idOrdre(idOrdre: number) {
      this._idOrdre = idOrdre;
	}



	get numOrdre(): string {
      return this._numOrdre;
	}

	set numOrdre(numOrdre: string) {
      this._numOrdre = numOrdre;
	}



	get dateOrdre(): Date {
      return this._dateOrdre;
	}

	set dateOrdre(dateOrdre: Date) {
      this._dateOrdre = dateOrdre;
	}



	get ordreFile(): PieceJointe[] {
      return this._ordreFile;
	}

	set ordreFile(ordreFile: PieceJointe[]) {
      this._ordreFile = ordreFile;
	}



	get ordreType(): string {
      return this._ordreType;
	}

	set ordreType(ordreType: string) {
      this._ordreType = ordreType;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}



	get motifArret(): string {
      return this._motifArret;
	}

	set motifArret(motifArret: string) {
      this._motifArret = motifArret;
	}




}
