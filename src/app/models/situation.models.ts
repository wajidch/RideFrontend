import { Action } from './action.models';
import { Marche } from './marche.models';
import { PieceJointe } from './pieceJointe.models';


export class Situation {


	private _idSituation: number;
	private _actions: Action[];
	private _marche: Marche;
	private _objetSituation: string;
	private _dateSituation: Date;
	private _situation: string;
	private _docSituationFile: PieceJointe[];
	private _photosFile: PieceJointe[];


	constructor(){}


	get idSituation(): number {
      return this._idSituation;
	}

	set idSituation(idSituation: number) {
      this._idSituation = idSituation;
	}



	get actions(): Action[] {
      return this._actions;
	}

	set actions(actions: Action[]) {
      this._actions = actions;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}



	get objetSituation(): string {
      return this._objetSituation;
	}

	set objetSituation(objetSituation: string) {
      this._objetSituation = objetSituation;
	}



	get dateSituation(): Date {
      return this._dateSituation;
	}

	set dateSituation(dateSituation: Date) {
      this._dateSituation = dateSituation;
	}



	get situation(): string {
      return this._situation;
	}

	set situation(situation: string) {
      this._situation = situation;
	}



	get docSituationFile(): PieceJointe[] {
      return this._docSituationFile;
	}

	set docSituationFile(docSituationFile: PieceJointe[]) {
      this._docSituationFile = docSituationFile;
	}



	get photosFile(): PieceJointe[] {
      return this._photosFile;
	}

	set photosFile(photosFile: PieceJointe[]) {
      this._photosFile = photosFile;
	}




}
