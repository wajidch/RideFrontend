import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class Decompte {


	private _NUMERO_DECOMPTE: string;
	private _idDecompte: number;
	private _numDecompte: string;
	private _dateDecompte: Date;
	private _dateOP: Date;
	private _dateOV: Date;
	private _montantCumule: number;
	private _montantDecompte: number;
	private _decompteFile: PieceJointe[];
	private _statusDecompte: string;
	private _marche: Marche;
	private _attachementFile: PieceJointe[];
	private _ovFile: PieceJointe[];
	private _opFile: PieceJointe[];


	constructor(){}


	get NUMERO_DECOMPTE(): string {
      return this._NUMERO_DECOMPTE;
	}

	set NUMERO_DECOMPTE(NUMERO_DECOMPTE: string) {
      this._NUMERO_DECOMPTE = NUMERO_DECOMPTE;
	}



	get idDecompte(): number {
      return this._idDecompte;
	}

	set idDecompte(idDecompte: number) {
      this._idDecompte = idDecompte;
	}



	get numDecompte(): string {
      return this._numDecompte;
	}

	set numDecompte(numDecompte: string) {
      this._numDecompte = numDecompte;
	}



	get dateDecompte(): Date {
      return this._dateDecompte;
	}

	set dateDecompte(dateDecompte: Date) {
      this._dateDecompte = dateDecompte;
	}



	get dateOP(): Date {
      return this._dateOP;
	}

	set dateOP(dateOP: Date) {
      this._dateOP = dateOP;
	}



	get dateOV(): Date {
      return this._dateOV;
	}

	set dateOV(dateOV: Date) {
      this._dateOV = dateOV;
	}



	get montantCumule(): number {
      return this._montantCumule;
	}

	set montantCumule(montantCumule: number) {
      this._montantCumule = montantCumule;
	}



	get montantDecompte(): number {
      return this._montantDecompte;
	}

	set montantDecompte(montantDecompte: number) {
      this._montantDecompte = montantDecompte;
	}



	get decompteFile(): PieceJointe[] {
      return this._decompteFile;
	}

	set decompteFile(decompteFile: PieceJointe[]) {
      this._decompteFile = decompteFile;
	}



	get statusDecompte(): string {
      return this._statusDecompte;
	}

	set statusDecompte(statusDecompte: string) {
      this._statusDecompte = statusDecompte;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}



	get attachementFile(): PieceJointe[] {
      return this._attachementFile;
	}

	set attachementFile(attachementFile: PieceJointe[]) {
      this._attachementFile = attachementFile;
	}



	get ovFile(): PieceJointe[] {
      return this._ovFile;
	}

	set ovFile(ovFile: PieceJointe[]) {
      this._ovFile = ovFile;
	}



	get opFile(): PieceJointe[] {
      return this._opFile;
	}

	set opFile(opFile: PieceJointe[]) {
      this._opFile = opFile;
	}




}
