import { PieceJointe } from './pieceJointe.models';
import { Mission } from './mission.models';
import { Localite } from './localite.models';
import { Plan } from './plan.models';
import { Intervenant } from './intervenant.models';
import { AppelOffre } from './appelOffre.models';
import { Convention } from './convention.models';


export class Projet {


	private _idProjet: number;
	private _numProjet: string;
	private _projetFile: PieceJointe[];
	private _description: string;
	private _missionProjet: Mission[];
	private _localite: Localite;
	private _plans: Plan[];
	private _intervenants: Intervenant[];
	private _appelsOffre: AppelOffre[];
	private _convention: Convention;


	constructor() { }


	get idProjet(): number {
		return this._idProjet;
	}

	set idProjet(idProjet: number) {
		this._idProjet = idProjet;
	}

	get numProjet(): string {
		return this._numProjet;
	}

	set numProjet(numProjet: string) {
		this._numProjet = numProjet;
	}

	get description(): string {
		return this._description;
	}

	set description(description: string) {
		this._description = description;
	}


	get projetFile(): PieceJointe[] {
		return this._projetFile;
	}

	set projetFile(projetFile: PieceJointe[]) {
		this._projetFile = projetFile;
	}



	get missionProjet(): Mission[] {
		return this._missionProjet;
	}

	set missionProjet(missionProjet: Mission[]) {
		this._missionProjet = missionProjet;
	}



	get localite(): Localite {
		return this._localite;
	}

	set localite(localite: Localite) {
		this._localite = localite;
	}



	get plans(): Plan[] {
		return this._plans;
	}

	set plans(plans: Plan[]) {
		this._plans = plans;
	}



	get intervenants(): Intervenant[] {
		return this._intervenants;
	}

	set intervenants(intervenants: Intervenant[]) {
		this._intervenants = intervenants;
	}



	get appelsOffre(): AppelOffre[] {
		return this._appelsOffre;
	}

	set appelsOffre(appelsOffre: AppelOffre[]) {
		this._appelsOffre = appelsOffre;
	}



	get convention(): Convention {
		return this._convention;
	}

	set convention(convention: Convention) {
		this._convention = convention;
	}




}
