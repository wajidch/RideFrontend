import { PieceJointe } from './pieceJointe.models';
import { Intervenant } from './intervenant.models';


export class Correspondance {


	private _idCorrespondance: number;
	private _numCorrespondance: string;
	private _status: string;
	private _messagiaire: Intervenant[];
	private _dataC: string;
	private _objetC: string;
	private _courrierFiles: PieceJointe[];


	constructor(){}


	get idCorrespondance(): number {
      return this._idCorrespondance;
	}

	set idCorrespondance(idCorrespondance: number) {
      this._idCorrespondance = idCorrespondance;
	}



	get numCorrespondance(): string {
      return this._numCorrespondance;
	}

	set numCorrespondance(numCorrespondance: string) {
      this._numCorrespondance = numCorrespondance;
	}



	get status(): string {
      return this._status;
	}

	set status(status: string) {
      this._status = status;
	}



	get messagiaire(): Intervenant[] {
      return this._messagiaire;
	}

	set messagiaire(messagiaire: Intervenant[]) {
      this._messagiaire = messagiaire;
	}



	get dataC(): string {
      return this._dataC;
	}

	set dataC(dataC: string) {
      this._dataC = dataC;
	}



	get objetC(): string {
      return this._objetC;
	}

	set objetC(objetC: string) {
      this._objetC = objetC;
	}



	get courrierFiles(): PieceJointe[] {
      return this._courrierFiles;
	}

	set courrierFiles(courrierFiles: PieceJointe[]) {
      this._courrierFiles = courrierFiles;
	}




}
