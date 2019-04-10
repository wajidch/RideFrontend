

export class Mission {


	private _idMission: number;
	private _missionType: string;
	private _missionCategorie: string;
	private _missionName: string;


	constructor(){}


	get idMission(): number {
      return this._idMission;
	}

	set idMission(idMission: number) {
      this._idMission = idMission;
	}



	get missionType(): string {
      return this._missionType;
	}

	set missionType(missionType: string) {
      this._missionType = missionType;
	}



	get missionCategorie(): string {
      return this._missionCategorie;
	}

	set missionCategorie(missionCategorie: string) {
      this._missionCategorie = missionCategorie;
	}



	get missionName(): string {
      return this._missionName;
	}

	set missionName(missionName: string) {
      this._missionName = missionName;
	}




}
