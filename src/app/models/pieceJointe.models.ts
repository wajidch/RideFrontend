

export class PieceJointe {


	private _idPieceJointe: number;
	private _file: File;


	constructor(){}


	get idPieceJointe(): number {
      return this._idPieceJointe;
	}

	set idPieceJointe(idPieceJointe: number) {
      this._idPieceJointe = idPieceJointe;
	}



	get file(): File {
      return this._file;
	}

	set file(mFile: File) {
      this._file = mFile;
	}



}
