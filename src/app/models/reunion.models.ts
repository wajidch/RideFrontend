import { PieceJointe } from './pieceJointe.models';
import { Intervenant } from './intervenant.models';


export class Reunion {


	private _idReunion: number;
	private _objetReunion: string;
	private _dataReunion: string;
	private _pvReunionFile: PieceJointe[];
	private _status: string;


	constructor(){}


	get idReunion(): number {
      return this._idReunion;
	}

	set idReunion(idReunion: number) {
      this._idReunion = idReunion;
	}



	get objetReunion(): string {
      return this._objetReunion;
	}

	set objetReunion(objetReunion: string) {
      this._objetReunion = objetReunion;
	}



	get dataReunion(): string {
      return this._dataReunion;
	}

	set dataReunion(dataReunion: string) {
      this._dataReunion = dataReunion;
	}



	get pvReunionFile(): PieceJointe[] {
      return this._pvReunionFile;
	}

	set pvReunionFile(pvReunionFile: PieceJointe[]) {
      this._pvReunionFile = pvReunionFile;
	}



	get status(): string {
      return this._status;
	}

	set status(status: string) {
      this._status = status;
	}




}
