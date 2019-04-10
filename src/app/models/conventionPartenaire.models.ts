import { Convention } from './convention.models';
import { Partenaire } from './partenaire.models';

export class ConventionPartenaire {

    private _convention: Convention;
	private _partenaire: Partenaire;
	private _contribution :number;


	constructor(){
		this._contribution = 0.0;
	}

	get convention(){
		return this._convention;
	}
	
	
	get partenaire(){
		return this._partenaire;
	}

	get contribution(){
		return this._contribution;
	}




	set convention(convention: Convention){
		this._convention = convention;
	}
	
	
	set partenaire(partenaire: Partenaire){
		this._partenaire = partenaire;
	}

	set contribution(contribution: number){
		this._contribution = contribution;
	}
}