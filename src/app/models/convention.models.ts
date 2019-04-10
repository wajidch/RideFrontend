import { PieceJointe } from './pieceJointe.models';
import { Reunion } from './reunion.models';
import { Partenaire } from './partenaire.models';
import { Recouvrement } from './recouvrement.models';
import { Projet } from './projet.models';
import { Correspondance } from './correspondance.models';
import { ConventionPartenaire } from './conventionPartenaire.models';


export class Convention {


	private _idConvention: number;
	private _objetConvention: string;
	private _dateSignature: Date;
	private _coutGlobal: number;
	private _conventionFile: PieceJointe[];
	private _reunions: Reunion[];
	private _conventionsPartenaires: ConventionPartenaire[];
	private _recouvrement: Recouvrement;
	private _projets: Projet[];
	private _correspondances: Correspondance[];


	constructor(){}


	get idConvention(): number {
      return this._idConvention;
	}

	set idConvention(idConvention: number) {
      this._idConvention = idConvention;
	}



	get objetConvention(): string {
      return this._objetConvention;
	}

	set objetConvention(objetConvention: string) {
      this._objetConvention = objetConvention;
	}



	get dateSignature(): Date {
      return this._dateSignature;
	}

	set dateSignature(dateSignature: Date) {
      this._dateSignature = dateSignature;
	}



	get coutGlobal(): number {
      return this._coutGlobal;
	}

	set coutGlobal(coutGlobal: number) {
      this._coutGlobal = coutGlobal;
	}



	get conventionFile(): PieceJointe[] {
      return this._conventionFile;
	}

	set conventionFile(conventionFile: PieceJointe[]) {
      this._conventionFile = conventionFile;
	}



	get reunions(): Reunion[] {
      return this._reunions;
	}

	set reunions(reunions: Reunion[]) {
      this._reunions = reunions;
	}



	get conventionsPartenaires(): ConventionPartenaire[] {
      return this._conventionsPartenaires;
	}

	set conventionsPartenaires(conventionsPartenaires: ConventionPartenaire[]) {
      this._conventionsPartenaires = conventionsPartenaires;
	}



	get recouvrement(): Recouvrement {
      return this._recouvrement;
	}

	set recouvrement(recouvrement: Recouvrement) {
      this._recouvrement = recouvrement;
	}



	get projets(): Projet[] {
      return this._projets;
	}

	set projets(projets: Projet[]) {
      this._projets = projets;
	}



	get correspondances(): Correspondance[] {
      return this._correspondances;
	}

	set correspondances(correspondances: Correspondance[]) {
      this._correspondances = correspondances;
	}




}
