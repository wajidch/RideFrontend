import { Projet } from './projet.models';


export class Localite {


	private _idLocal: number;
	private _projet: Projet;
	private _region: string;
	private _ville: string;


	constructor(){}


	get idLocal(): number {
      return this._idLocal;
	}

	set idLocal(idLocal: number) {
      this._idLocal = idLocal;
	}



	get projet(): Projet {
      return this._projet;
	}

	set projet(projet: Projet) {
      this._projet = projet;
	}



	get region(): string {
      return this._region;
	}

	set region(region: string) {
      this._region = region;
	}



	get ville(): string {
      return this._ville;
	}

	set ville(ville: string) {
      this._ville = ville;
	}




}
