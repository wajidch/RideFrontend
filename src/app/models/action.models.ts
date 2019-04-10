import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';


export class Action {


	private _idAction: number;
	private _objetAction: string;
	private _action: string;
	private _docActionFiles: PieceJointe[];
	private _dateAction: Date;
	private _marche: Marche;


	constructor(){}


	get idAction(): number {
      return this._idAction;
	}

	set idAction(idAction: number) {
      this._idAction = idAction;
	}



	get objetAction(): string {
      return this._objetAction;
	}

	set objetAction(objetAction: string) {
      this._objetAction = objetAction;
	}



	get action(): string {
      return this._action;
	}

	set action(action: string) {
      this._action = action;
	}



	get docActionFiles(): PieceJointe[] {
      return this._docActionFiles;
	}

	set docActionFiles(docActionFiles: PieceJointe[]) {
      this._docActionFiles = docActionFiles;
	}



	get dateAction(): Date {
      return this._dateAction;
	}

	set dateAction(dateAction: Date) {
      this._dateAction = dateAction;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}




}
