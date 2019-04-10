import { PieceJointe } from './pieceJointe.models';
import { Situation } from './situation.models';
import { Plan } from './plan.models';
import { Action } from './action.models';
import { Document } from './document.models';
import { OrdreArretReprise } from './ordreArretReprise.models';
import { Avenant } from './avenant.models';
import { Reunion } from './reunion.models';
import { Correspondance } from './correspondance.models';
import { Decompte } from './decompte.models';
import { AppelOffre } from './appelOffre.models';
import { Intervenant } from './intervenant.models';


export class Marche {


	private _NUMERO_MARCHE: string;
	private _idMarche: number;
	private _numMarche: string;
	private _delaiMarche: number;
	private _dateApprobation: Date;
	private _dateOS: Date;
	private _dateRP: Date;
	private _dateRD: Date;
	private _intituleMarche: string;
	private _ordreApprobationFiles: PieceJointe[];
	private _ordreServiceFiles: PieceJointe[];
	private _receptionProvisoireFiles: PieceJointe[];
	private _marcheFiles: PieceJointe[];
	private _receptionDefinitiveFiles: PieceJointe[];
	private _engagementFiles: PieceJointe[];
	private _situations: Situation[];
	private _plans: Plan[];
	private _actions: Action[];
	private _documents: Document[];
	private _ordresAR: OrdreArretReprise[];
	private _avenants: Avenant[];
	private _reunions: Reunion[];
	private _correspondances: Correspondance[];
	private _decomptes: Decompte[];
	private _appelOffre: AppelOffre;
	private _entreprises: Intervenant[];


	constructor() { }


	get NUMERO_MARCHE(): string {
		return this._NUMERO_MARCHE;
	}

	set NUMERO_MARCHE(NUMERO_MARCHE: string) {
		this._NUMERO_MARCHE = NUMERO_MARCHE;
	}

	get intituleMarche(): string {
		return this._intituleMarche;
	}

	set intituleMarche(intituleMarche: string) {
		this._intituleMarche = intituleMarche;
	}

	get idMarche(): number {
		return this._idMarche;
	}

	set idMarche(idMarche: number) {
		this._idMarche = idMarche;
	}



	get numMarche(): string {
		return this._numMarche;
	}

	set numMarche(numMarche: string) {
		this._numMarche = numMarche;
	}



	get delaiMarche(): number {
		return this._delaiMarche;
	}

	set delaiMarche(delaiMarche: number) {
		this._delaiMarche = delaiMarche;
	}



	get dateApprobation(): Date {
		return this._dateApprobation;
	}

	set dateApprobation(dateApprobation: Date) {
		this._dateApprobation = dateApprobation;
	}



	get dateOS(): Date {
		return this._dateOS;
	}

	set dateOS(dateOS: Date) {
		this._dateOS = dateOS;
	}



	get dateRP(): Date {
		return this._dateRP;
	}

	set dateRP(dateRP: Date) {
		this._dateRP = dateRP;
	}



	get dateRD(): Date {
		return this._dateRD;
	}

	set dateRD(dateRD: Date) {
		this._dateRD = dateRD;
	}



	get ordreApprobationFiles(): PieceJointe[] {
		return this._ordreApprobationFiles;
	}

	set ordreApprobationFiles(ordreApprobationFiles: PieceJointe[]) {
		this._ordreApprobationFiles = ordreApprobationFiles;
	}



	get ordreServiceFiles(): PieceJointe[] {
		return this._ordreServiceFiles;
	}

	set ordreServiceFiles(ordreServiceFiles: PieceJointe[]) {
		this._ordreServiceFiles = ordreServiceFiles;
	}



	get receptionProvisoireFiles(): PieceJointe[] {
		return this._receptionProvisoireFiles;
	}

	set receptionProvisoireFiles(receptionProvisoireFiles: PieceJointe[]) {
		this._receptionProvisoireFiles = receptionProvisoireFiles;
	}



	get marcheFiles(): PieceJointe[] {
		return this._marcheFiles;
	}

	set marcheFiles(marcheFiles: PieceJointe[]) {
		this._marcheFiles = marcheFiles;
	}



	get receptionDefinitiveFiles(): PieceJointe[] {
		return this._receptionDefinitiveFiles;
	}

	set receptionDefinitiveFiles(receptionDefinitiveFiles: PieceJointe[]) {
		this._receptionDefinitiveFiles = receptionDefinitiveFiles;
	}



	get situations(): Situation[] {
		return this._situations;
	}

	set situations(situations: Situation[]) {
		this._situations = situations;
	}



	get plans(): Plan[] {
		return this._plans;
	}

	set plans(plans: Plan[]) {
		this._plans = plans;
	}



	get actions(): Action[] {
		return this._actions;
	}

	set actions(actions: Action[]) {
		this._actions = actions;
	}



	get documents(): Document[] {
		return this._documents;
	}

	set documents(documents: Document[]) {
		this._documents = documents;
	}



	get ordresAR(): OrdreArretReprise[] {
		return this._ordresAR;
	}

	set ordresAR(ordresAR: OrdreArretReprise[]) {
		this._ordresAR = ordresAR;
	}



	get avenants(): Avenant[] {
		return this._avenants;
	}

	set avenants(avenants: Avenant[]) {
		this._avenants = avenants;
	}



	get reunions(): Reunion[] {
		return this._reunions;
	}

	set reunions(reunions: Reunion[]) {
		this._reunions = reunions;
	}



	get correspondances(): Correspondance[] {
		return this._correspondances;
	}

	set correspondances(correspondances: Correspondance[]) {
		this._correspondances = correspondances;
	}



	get decomptes(): Decompte[] {
		return this._decomptes;
	}

	set decomptes(decomptes: Decompte[]) {
		this._decomptes = decomptes;
	}



	get appelOffre(): AppelOffre {
		return this._appelOffre;
	}

	set appelOffre(appelOffre: AppelOffre) {
		this._appelOffre = appelOffre;
	}



	get engagementFiles(): PieceJointe[] {
		return this._engagementFiles;
	}

	set engagementFiles(engagementFiles: PieceJointe[]) {
		this._engagementFiles = engagementFiles;
	}


	get entreprises(): Intervenant[] {
		return this._entreprises;
	}

	set entreprises(entreprises: Intervenant[]) {
		this._entreprises = entreprises;
	}

}
