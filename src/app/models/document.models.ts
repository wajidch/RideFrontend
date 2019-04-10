import { Intervenant } from './intervenant.models';
import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class Document {


	private _idDocument: number;
	private _typeDocument: string;
	private _contenuDocument: string;
	private _fourniPar: Intervenant[];
	private _dateReception: Date;
	private _diffuseA: Intervenant[];
	private _dateDiffusion: Date;
	private _documentFile: PieceJointe[];
	private _marche: Marche;


	constructor(){}


	get idDocument(): number {
      return this._idDocument;
	}

	set idDocument(idDocument: number) {
      this._idDocument = idDocument;
	}



	get typeDocument(): string {
      return this._typeDocument;
	}

	set typeDocument(typeDocument: string) {
      this._typeDocument = typeDocument;
	}



	get contenuDocument(): string {
      return this._contenuDocument;
	}

	set contenuDocument(contenuDocument: string) {
      this._contenuDocument = contenuDocument;
	}



	get fourniPar(): Intervenant[] {
      return this._fourniPar;
	}

	set fourniPar(fourniPar: Intervenant[]) {
      this._fourniPar = fourniPar;
	}



	get dateReception(): Date {
      return this._dateReception;
	}

	set dateReception(dateReception: Date) {
      this._dateReception = dateReception;
	}



	get diffuseA(): Intervenant[] {
      return this._diffuseA;
	}

	set diffuseA(diffuseA: Intervenant[]) {
      this._diffuseA = diffuseA;
	}



	get dateDiffusion(): Date {
      return this._dateDiffusion;
	}

	set dateDiffusion(dateDiffusion: Date) {
      this._dateDiffusion = dateDiffusion;
	}



	get documentFile(): PieceJointe[] {
      return this._documentFile;
	}

	set documentFile(documentFile: PieceJointe[]) {
      this._documentFile = documentFile;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}




}
