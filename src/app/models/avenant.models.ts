import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class Avenant {


	private _NUMERO_AVENANT: string;
	private _idAvenant: string;
	private _numeroAvenant: string;
	private _montantAvenant: number;
	private _delaiAvenant: number;
	private _objectAvenant: string;

	
	public get objectAvenant(): string {
		return this._objectAvenant;
	}
	public set objectAvenant(value: string) {
		this._objectAvenant = value;
	}
	private _avenantFile: PieceJointe[];
	private _marche: Marche;


	constructor(){}


	get NUMERO_AVENANT(): string {
      return this._NUMERO_AVENANT;
	}

	set NUMERO_AVENANT(NUMERO_AVENANT: string) {
      this._NUMERO_AVENANT = NUMERO_AVENANT;
	}



	get idAvenant(): string {
      return this._idAvenant;
	}

	set idAvenant(idAvenant: string) {
      this._idAvenant = idAvenant;
	}



	get numeroAvenant(): string {
      return this._numeroAvenant;
	}

	set numeroAvenant(numeroAvenant: string) {
      this._numeroAvenant = numeroAvenant;
	}



	get montantAvenant(): number {
      return this._montantAvenant;
	}

	set montantAvenant(montantAvenant: number) {
      this._montantAvenant = montantAvenant;
	}



	get delaiAvenant(): number {
      return this._delaiAvenant;
	}

	set delaiAvenant(delaiAvenant: number) {
      this._delaiAvenant = delaiAvenant;
	}



	get avenantFile(): PieceJointe[] {
      return this._avenantFile;
	}

	set avenantFile(avenantFile: PieceJointe[]) {
      this._avenantFile = avenantFile;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}



	

}
