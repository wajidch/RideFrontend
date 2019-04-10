import { Convention } from './convention.models';
import { Recouvrement } from './recouvrement.models';


export class Partenaire {


	private _idPartenaire: number;
	private _partenaire: string;
	private _contribution: number;
	private _conventions: Convention[];
	private _recouvrement: Recouvrement;


	constructor(){}


	get idPartenaire(): number {
      return this._idPartenaire;
	}

	set idPartenaire(idPartenaire: number) {
      this._idPartenaire = idPartenaire;
	}



	get partenaire(): string {
      return this._partenaire;
	}

	set partenaire(partenaire: string) {
      this._partenaire = partenaire;
	}



	get contribution(): number {
      return this._contribution;
	}

	set contribution(contribution: number) {
      this._contribution = contribution;
	}



	get conventions(): Convention[] {
      return this._conventions;
	}

	set conventions(conventions: Convention[]) {
      this._conventions = conventions;
	}



	get recouvrement(): Recouvrement {
      return this._recouvrement;
	}

	set recouvrement(recouvrement: Recouvrement) {
      this._recouvrement = recouvrement;
	}




}
