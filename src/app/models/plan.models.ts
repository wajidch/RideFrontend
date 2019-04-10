import { Projet } from './projet.models';
import { Intervenant } from './intervenant.models';
import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class Plan {


	private _idPlan: number;
	private _projet: Projet;
	private _typePlan: string;
	private _contenuPlan: string;
	private _fourniPar: Intervenant[];
	private _dateReception: Date;
	private _diffuseA: Intervenant[];
	private _dateDiffusion: Date;
	private _planFiles: PieceJointe[];
	private _marche: Marche;


	constructor(){}


	get idPlan(): number {
      return this._idPlan;
	}

	set idPlan(idPlan: number) {
      this._idPlan = idPlan;
	}



	get projet(): Projet {
      return this._projet;
	}

	set projet(projet: Projet) {
      this._projet = projet;
	}



	get typePlan(): string {
      return this._typePlan;
	}

	set typePlan(typePlan: string) {
      this._typePlan = typePlan;
	}



	get contenuPlan(): string {
      return this._contenuPlan;
	}

	set contenuPlan(contenuPlan: string) {
      this._contenuPlan = contenuPlan;
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



	get planFiles(): PieceJointe[] {
      return this._planFiles;
	}

	set planFiles(planFiles: PieceJointe[]) {
      this._planFiles = planFiles;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}




}
