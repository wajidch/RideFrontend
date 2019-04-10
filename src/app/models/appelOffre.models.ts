import { Intervenant } from './intervenant.models';
import { PieceJointe } from './pieceJointe.models';
import { Marche } from './marche.models';
import { Projet } from './projet.models';
import { Correspondance } from './correspondance.models';
import { Reunion } from './reunion.models';


export class AppelOffre {


	private _idAppelOffre: number;
	private _numAO: string;
	private _objetAO: string;
	private _modePassation: string;
	private _intituleAO: string;
	private _dateInsertionAR: Date;
	private _dateInsertionFR: Date;
	private _dateInsertionPMP: Date;
	private _dateHeureOuverture: Date;
	private _montantEstimation: number;
	private _entrepriseRetenue: Intervenant[];
	private _offreRetenue: number;
	private _cahierChargeFiles: PieceJointe[];
	private _decisionCommissionFiles: PieceJointe[];
	private _avisAOFiles: PieceJointe[];
	private _estimationFiles: PieceJointe[];
	private _pvOPFiles: PieceJointe[];
	private _offreFrancieresFiles: PieceJointe[];
	private _marche: Marche;
	private _projet: Projet;
	private _correspondances: Correspondance[];
	private _reunions: Reunion[];


	constructor(){}


	get idAppelOffre(): number {
      return this._idAppelOffre;
	}

	set idAppelOffre(idAppelOffre: number) {
      this._idAppelOffre = idAppelOffre;
	}



	get numAO(): string {
      return this._numAO;
	}

	set numAO(numAO: string) {
      this._numAO = numAO;
	}



	get objetAO(): string {
      return this._objetAO;
	}

	set objetAO(objetAO: string) {
      this._objetAO = objetAO;
	}



	get modePassation(): string {
      return this._modePassation;
	}

	set modePassation(modePassation: string) {
      this._modePassation = modePassation;
	}



	get intituleAO(): string {
      return this._intituleAO;
	}

	set intituleAO(intituleAO: string) {
      this._intituleAO = intituleAO;
	}



	get dateInsertionAR(): Date {
      return this._dateInsertionAR;
	}

	set dateInsertionAR(dateInsertionAR: Date) {
      this._dateInsertionAR = dateInsertionAR;
	}



	get dateInsertionFR(): Date {
      return this._dateInsertionFR;
	}

	set dateInsertionFR(dateInsertionFR: Date) {
      this._dateInsertionFR = dateInsertionFR;
	}



	get dateInsertionPMP(): Date {
      return this._dateInsertionPMP;
	}

	set dateInsertionPMP(dateInsertionPMP: Date) {
      this._dateInsertionPMP = dateInsertionPMP;
	}



	get dateHeureOuverture(): Date {
      return this._dateHeureOuverture;
	}

	set dateHeureOuverture(dateHeureOuverture: Date) {
      this._dateHeureOuverture = dateHeureOuverture;
	}



	get montantEstimation(): number {
      return this._montantEstimation;
	}

	set montantEstimation(montantEstimation: number) {
      this._montantEstimation = montantEstimation;
	}



	get entrepriseRetenue(): Intervenant[] {
      return this._entrepriseRetenue;
	}

	set entrepriseRetenue(entrepriseRetenue: Intervenant[]) {
      this._entrepriseRetenue = entrepriseRetenue;
	}



	get offreRetenue(): number {
      return this._offreRetenue;
	}

	set offreRetenue(offreRetenue: number) {
      this._offreRetenue = offreRetenue;
	}



	get cahierChargeFiles(): PieceJointe[] {
      return this._cahierChargeFiles;
	}

	set cahierChargeFiles(cahierChargeFiles: PieceJointe[]) {
      this._cahierChargeFiles = cahierChargeFiles;
	}



	get decisionCommissionFiles(): PieceJointe[] {
      return this._decisionCommissionFiles;
	}

	set decisionCommissionFiles(decisionCommissionFiles: PieceJointe[]) {
      this._decisionCommissionFiles = decisionCommissionFiles;
	}



	get avisAOFiles(): PieceJointe[] {
      return this._avisAOFiles;
	}

	set avisAOFiles(avisAOFiles: PieceJointe[]) {
      this._avisAOFiles = avisAOFiles;
	}



	get estimationFiles(): PieceJointe[] {
      return this._estimationFiles;
	}

	set estimationFiles(estimationFiles: PieceJointe[]) {
      this._estimationFiles = estimationFiles;
	}



	get pvOPFiles(): PieceJointe[] {
      return this._pvOPFiles;
	}

	set pvOPFiles(pvOPFiles: PieceJointe[]) {
      this._pvOPFiles = pvOPFiles;
	}



	get offreFrancieresFiles(): PieceJointe[] {
      return this._offreFrancieresFiles;
	}

	set offreFrancieresFiles(offreFrancieresFiles: PieceJointe[]) {
      this._offreFrancieresFiles = offreFrancieresFiles;
	}



	get marche(): Marche {
      return this._marche;
	}

	set marche(marche: Marche) {
      this._marche = marche;
	}



	get projet(): Projet {
      return this._projet;
	}

	set projet(projet: Projet) {
      this._projet = projet;
	}



	get correspondances(): Correspondance[] {
      return this._correspondances;
	}

	set correspondances(correspondances: Correspondance[]) {
      this._correspondances = correspondances;
	}



	get reunions(): Reunion[] {
      return this._reunions;
	}

	set reunions(reunions: Reunion[]) {
      this._reunions = reunions;
	}




}
