import { Intervenant } from "app/models/intervenant.models";
import { Mission } from "app/models/mission.models";
import { Document } from "app/models/document.models";
import { Plan } from "app/models/plan.models";
import { Marche } from "app/models/marche.models";
import { PieceJointe } from "app/models/pieceJointe.models";
import { Situation } from "app/models/situation.models";
import { AppelOffre } from "app/models/appelOffre.models";
import { Projet } from "app/models/projet.models";
import { Localite } from "app/models/localite.models";
import { Partenaire } from "app/models/partenaire.models";
import { Convention } from "app/models/convention.models";
import { OrdreArretReprise } from "app/models/ordreArretReprise.models";
import { Avenant } from "app/models/avenant.models";

export class FakeData {

    public TAG_ACTION: string = 'action';
    public TAG_APPELOFFRE: string = 'numAO';
    public TAG_AVENANT: string = 'avenant';
    public TAG_CONVENTION: string = 'objetConvention';
    public TAG_CORRESPONDANCE: string = 'correspondance';
    public TAG_CESTATUS: string = 'correspondanceStatus';
    public TAG_DECOMPTE: string = 'decompte';
    public TAG_DOCUMENT: string = 'typeDocument';
    public TAG_INTERVENANT: string = 'intervenant';
    public TAG_LOCALITE: string = 'localite';
    public TAG_MARCHE: string = 'numMarche';
    public TAG_MISSION: string = 'missionName';
    public TAG_ORDREARRETREPRISE: string = 'ordreArretReprise';
    public TAG_PARTENAIRE: string = 'partenaire';
    public TAG_PIECEJOINTE: string = 'piecejointe';
    public TAG_PLAN: string = 'typePlan';
    public TAG_PROJET: string = 'numProjet';
    public TAG_RECOUVREMENT: string = 'recouvrement';
    public TAG_REUNION: string = 'reunion';
    public TAG_SITUATION: string = 'situation';

    public static FORMAT = 'YYYY/MM/DD HH:mm:ss';


    getOAR(){
        var oarList = [];
        var oar = new OrdreArretReprise();

        oar.idOrdre = 1;
        oar.numOrdre = "test";
        oar.dateOrdre = new Date();
        oar.ordreFile = null;
        oar.ordreType = "test";
        oar.marche = null;
        oar.motifArret = "test";

        oarList.push(oar);

        return oarList;
    }


    getAvenant(){
        var avList = [];
        var av = new Avenant();

        av.NUMERO_AVENANT = "1";
        av.idAvenant = "1";
        av.numeroAvenant = "av # 1";
        av.montantAvenant = 120;
        av.delaiAvenant = 120;
        av.objectAvenant = "obj av";

        avList.push(av);

        return avList;
    }



    getPartenaire(){
        var partenaireList: Partenaire[] = [];
        var partenaire = new Partenaire();

        partenaire.contribution = 100;
        partenaire.conventions = [];
        partenaire.partenaire = "M-Partenaire";
        partenaire.recouvrement = null;

        partenaireList.push(partenaire);



        partenaire = new Partenaire();

        partenaire.contribution = 80;
        partenaire.conventions = [];
        partenaire.partenaire = "N-Partenaire 2";
        partenaire.recouvrement = null;

        partenaireList.push(partenaire);

        return partenaireList;
    }

    getIntervenant() {
        var intervenantList: Intervenant[] = [];

        var inter = new Intervenant();
        inter.email = "inter_1@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = "Atijari-Wafa-Bank";
        var mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "Mohamed SALHI";
        mission.missionType = "Type 1";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";
        intervenantList.push(inter);

        inter = new Intervenant();
        inter.email = "inter_2@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = "IAM-TELECOME";
        mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "REDOUAN KHAMLISHI";
        mission.missionType = "Type 2";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";
        intervenantList.push(inter);

 
        inter = new Intervenant();
        inter.email = "inter_3@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = "AMANA EXPRESS";
        mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "REDOUAN KHAMLISHI";
        mission.missionType = "Type 3";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";
        intervenantList.push(inter);


        inter = new Intervenant();
        inter.email = "inter_4@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = "PERCALL";
        mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "REDOUAN KHAMLISHI";
        mission.missionType = "Type 2";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";
        intervenantList.push(inter);

        inter = new Intervenant();
        inter.email = "inter_5@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = "ATTIQNIA";
        mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "REDOUAN KHAMLISHI";
        mission.missionType = "Type 7";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";
        intervenantList.push(inter);

        return intervenantList;
    }


    createIntervenant(name: string) {
        var inter = new Intervenant();
        inter.email = "inter_1@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = name;
        var mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "Mohamed SALHI";
        mission.missionType = "Type 1";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";

        return inter;
    }


    createMission(name: string) {
        var inter = new Intervenant();
        inter.email = "inter_1@email.com";
        inter.fax = "05 32 43 54 65";
        inter.intervenant = name;
        var mission = new Mission();
        mission.missionCategorie = "Architecte";
        mission.missionName = "Mohamed SALHI";
        mission.missionType = "Type 1";
        inter.mission = mission;
        inter.telephone = "06 56 78 98 45";

        return inter;
    }

    getAppelOffre(){
        var aoList: AppelOffre[] = [];

        var ao = new AppelOffre();
        ao.intituleAO = 'intitule AO';
        ao.modePassation = 'Mode passation';
        ao.montantEstimation = 12;
        ao.numAO = 'ao1111' ;
        ao.objetAO = 'obj ao';
        
        aoList.push(ao);


        var ao = new AppelOffre();
        ao.idAppelOffre = 2;
        ao.intituleAO = 'intitule AO 2';
        ao.modePassation = 'Mode passation 2';
        ao.montantEstimation = 0;
        ao.numAO = 'ao2222' ;
        ao.objetAO = 'obj ao 2';
        
        aoList.push(ao);


        var ao = new AppelOffre();
        ao.idAppelOffre = 3;
        ao.intituleAO = 'intitule AO 3';
        ao.modePassation = 'Mode passation 2';
        ao.montantEstimation = 0;
        ao.numAO = 'ao2222' ;
        ao.objetAO = 'obj ao 2';
        
        aoList.push(ao);

        return aoList;
    }


    getDocType() {
        var docTypeList: Document[] = [];

        var doc = new Document();
        doc.typeDocument = "Type Doc 1";
        docTypeList.push(doc);

        doc = new Document();
        doc.typeDocument = "Type Doc 10";
        docTypeList.push(doc);
        

        doc = new Document();
        doc.typeDocument = "Type DocAZ 3";
        docTypeList.push(doc);

        doc = new Document();
        doc.typeDocument = "Type DocAB 1";
        docTypeList.push(doc);

        doc = new Document();
        doc.typeDocument = "Type Doc B 6";
        docTypeList.push(doc);

        doc = new Document();
        doc.typeDocument = "Type Doc A 1";
        docTypeList.push(doc);

        return docTypeList;
    }
    
    getPlanType() {
        var planTypeList: Plan[] = [];

        var plan = new Plan();
        plan.typePlan = "Type Plan 1";
        planTypeList.push(plan);

        plan = new Plan();
        plan.typePlan = "Type Plan 10";
        planTypeList.push(plan);
        

        plan = new Plan();
        plan.typePlan = "Type PlanAZ 3";
        planTypeList.push(plan);

        plan = new Plan();
        plan.typePlan = "Type PlanAB 1";
        planTypeList.push(plan);

        plan = new Plan();
        plan.typePlan = "Type Plan B 6";
        planTypeList.push(plan);

        plan = new Plan();
        plan.typePlan = "Type Plan A 1";
        planTypeList.push(plan);

        return planTypeList;
    }


    getMarche() {
        var marcheList:Marche[] = [];

        var marche = new Marche();

        marche.NUMERO_MARCHE = "#A1000";
        marche.numMarche = "#A1000";
        marche.delaiMarche = 2;
        marche.ordreApprobationFiles = [];
        marche.ordreServiceFiles = [];
        marche.receptionProvisoireFiles = [];
        marche.marcheFiles = [];
        marche.receptionDefinitiveFiles = [];
        var situation = new Situation();
        situation.situation = "My Situation"
        marche.situations = [];
        marche.situations.push(situation);
        marche.plans = [];
        marche.actions = [];
        marche.documents = [];
        marche.ordresAR = [];
        marche.avenants = [];
        marche.reunions = [];
        marche.correspondances = [];
        marche.decomptes = [];
        marche.engagementFiles = [];
        marcheList.push(marche);
        
        
        marche = new Marche();
        marche.NUMERO_MARCHE = "#B1000";
        marche.numMarche = "#B1000";
        marche.delaiMarche = 1;
        marche.ordreApprobationFiles = [];
        marche.ordreServiceFiles = [];
        marche.receptionProvisoireFiles = [];
        marche.marcheFiles = [];
        marche.receptionDefinitiveFiles = [];
        var situation = new Situation();
        marche.situations = [];
        situation.situation = "My Situation"
        marche.situations.push(situation);
        marche.plans = [];
        marche.actions = [];
        marche.documents = [];
        marche.ordresAR = [];
        marche.avenants = [];
        marche.reunions = [];
        marche.correspondances = [];
        marche.decomptes = [];
        marche.engagementFiles = [];
        marcheList.push(marche);


        marche = new Marche();
        marche.NUMERO_MARCHE = "#C1000";
        marche.numMarche = "#C1000";
        marche.delaiMarche = 1;
        marche.ordreApprobationFiles = [];
        marche.ordreServiceFiles = [];
        marche.receptionProvisoireFiles = [];
        marche.marcheFiles = [];
        marche.receptionDefinitiveFiles = [];
        var situation = new Situation();
        marche.situations = [];
        situation.situation = "My Situation"
        marche.situations.push(situation);
        marche.plans = [];
        marche.actions = [];
        marche.documents = [];
        marche.ordresAR = [];
        marche.avenants = [];
        marche.reunions = [];
        marche.correspondances = [];
        marche.decomptes = [];
        marche.engagementFiles = [];
        marcheList.push(marche);

        return marcheList;
    }

    getPhases(){
        return [
            { value: 'marche', viewValue: 'Marché' },
            { value: 'appelOffre', viewValue: "Appel d'offre" },
            { value: 'convention', viewValue: 'Convention' }
          ];
    }

    getProjects(){
        var projectsList = [];
        var project = new Projet();
        project.description = " DESCRIPTION PROj 1 ";
        project.intervenants = [this.getIntervenant()[0], this.getIntervenant()[1]];
        project.numProjet = "num 1";
        var local = new Localite();
            local.region = "REGION 1";
            local.ville = "RABAT";
        project.localite = local;
        projectsList.push(project);

        project = new Projet();
        project.description = " DESCRIPTION PROj 2 ";
        project.intervenants = [this.getIntervenant()[1], this.getIntervenant()[2]];
        project.numProjet = "num 2";
        var local = new Localite();
            local.region = "REGION 2";
            local.ville = "Casa";
        project.localite = local;
        projectsList.push(project);

        project = new Projet();
        project.description = " DESCRIPTION PROj 3 ";
        project.intervenants = [this.getIntervenant()[2], this.getIntervenant()[3]];
        project.numProjet = "num 3";
        project.localite = local;
        projectsList.push(project);

        return projectsList;
    }

    getMission(){
        var missionList: Mission[] = [];
        var mission = new Mission();
        mission.missionCategorie = "Category 1"
        mission.missionName = 'Name M 1';
        mission.missionType = 'Type 1';

        missionList.push(mission);



        mission = new Mission();
        mission.idMission = 2;
        mission.missionCategorie = "Category 2"
        mission.missionName = 'Name M 2';
        mission.missionType = 'Type 2';

        missionList.push(mission);


        mission = new Mission();
        mission.idMission = 3;
        mission.missionCategorie = "Category 3"
        mission.missionName = 'Name M 3';
        mission.missionType = 'Type 3';

        missionList.push(mission);

        return missionList;
    }

    createMarche(marcheNM: string, marcheList: Marche[]): Marche{
        return marcheList.filter(mElem => mElem[this.TAG_MARCHE].toLowerCase().includes(marcheNM.toLowerCase()))[0];
    }

    getConvention(){
        var conventionList = [];
        var cv = new Convention();

        cv.objetConvention = "Object conevention 1#" ;
        cv.dateSignature = new Date();
        cv.coutGlobal = 10000;
        cv.conventionFile = null;
        cv.reunions = null;
        cv.conventionsPartenaires = null;
        cv.recouvrement = null;
        cv.projets = [];
        cv.correspondances = [];

        conventionList.push(cv);

        cv.objetConvention = "Object my conevention 2#" ;
        cv.dateSignature = new Date();
        cv.coutGlobal = 16666;
        cv.conventionFile = null;
        cv.reunions = null;
        cv.conventionsPartenaires = null;
        cv.recouvrement = null;
        cv.projets = [];
        cv.correspondances = [];

        conventionList.push(cv);

        return conventionList;
    }


    getVille(){
        var listVille:string[] = [];

        listVille.push("Aklim");
        listVille.push("Ain Dorij");
        listVille.push("Ain Jemaa");
        listVille.push("Ait Benhaddou");
        listVille.push("Ain Bni Mathar");
        listVille.push("Ain Cheggag");
        listVille.push("Ain Defali");
        listVille.push("Ain El Aouda");
        listVille.push("Ain Erreggada");
        listVille.push("Ain Taoujdate");
        listVille.push("Ait Boubidmane");
        listVille.push("Ait Bouhlal");
        listVille.push("Ait Daoud");
        listVille.push("Ait Iaaza");
        listVille.push("Ait Ourir");
        listVille.push("Ajdir");
        listVille.push("Al Aaroui");
        listVille.push("Al-Hoceima");
        listVille.push("Amalou Ighriben");
        listVille.push("Amgala");
        listVille.push("Amizmiz");
        listVille.push("Aoufous");
        listVille.push("Arbaoua");
        listVille.push("Arfou");
        listVille.push("Asilah");
        listVille.push("Assahrij");
        listVille.push("Bab Berred");
        listVille.push("Bab Taza");
        listVille.push("Ben Ahmed");
        listVille.push("Beni Chiker");
        listVille.push("Beni Ansar");
        listVille.push("Beni Mella");
        listVille.push("Ben Slimane");
        listVille.push("Ben Taieb");
        listVille.push("Ben Yakhlef");
        listVille.push("Berkane");
        listVille.push("Berrechid");
        listVille.push("Bhalil");
        listVille.push("Bir GanBirdus");
        listVille.push("Bir Lehlou");
        listVille.push("Bni Bouayach");
        listVille.push("Bni Drar");
        listVille.push("Bni Hadifa");
        listVille.push("Bni Tadjite");
        listVille.push("Bouarfa");
        listVille.push("Bou Cra");
        listVille.push("Bouanane");
        listVille.push("Boudnib");
        listVille.push("Boufakrane");
        listVille.push("Bouguedra");
        listVille.push("Bouizakarne");
        listVille.push("Boujad");
        listVille.push("Boujdou");
        listVille.push("Bouknadel");
        listVille.push("Boulemane");
        listVille.push("Bouskoura");
        listVille.push("Bouznika");
        listVille.push("Bradia");
        listVille.push("Brikcha");
        listVille.push("Casablanca");
        listVille.push("Chefchaouen");
        listVille.push("Chemaia");
        listVille.push("Chichaoua");
        listVille.push("Dakhl");
        listVille.push("Dar Gueddari");
        listVille.push("Dar Kebdani");
        listVille.push("Demnate");
        listVille.push("Douar Bel Aguid");
        listVille.push("Driouch");
        listVille.push("El Aioun Sidi Mellouk");
        listVille.push("El Guerdane");
        listVille.push("El Hajeb");
        listVille.push("El Hanchane");
        listVille.push("El Jadid");
        listVille.push("Elkbab");
        listVille.push("El Menzel");
        listVille.push("El Ouatia");
        listVille.push("Arfou");
        listVille.push("Errachidi");
        listVille.push("Essaouir");
        listVille.push("Farcia");
        listVille.push("Fès");
        listVille.push("Figuig");
        listVille.push("Fnideq");
        listVille.push("Fquih Ben Salah");
        listVille.push("Er-Rich");
        listVille.push("Guelmim");
        listVille.push("Goulmima");
        listVille.push("Guelta Zemmour");
        listVille.push("Guerguerat");
        listVille.push("Guisser");
        listVille.push("Guercif");
        listVille.push("Had Kourt");
        listVille.push("Hagunia");
        listVille.push("Haj Kaddour");
        listVille.push("Harhoura");
        listVille.push("Ihddaden");
        listVille.push("Ifrane");
        listVille.push("Imilchil");
        listVille.push("Imilili");
        listVille.push("Imintanoute");
        listVille.push("Imouzzer Kandar");
        listVille.push("Immouzer Marmoucha");
        listVille.push("Inezgane");
        listVille.push("jerad");
        listVille.push("Jorf");
        listVille.push("Jorf El Melha");
        listVille.push("Jemâa Sahim");
        listVille.push("Kassita");
        listVille.push("Kattara");
        listVille.push("Kénitr");
        listVille.push("Kehf Nsour");
        listVille.push("Khémisset");
        listVille.push("Khemis Sahel");
        listVille.push("Khemis Zemamr");
        listVille.push("Khenichet");
        listVille.push("Khénifra");
        listVille.push("Khouribga");
        listVille.push("Ksar el-Kébir");
        listVille.push("Laayoun");
        listVille.push("Lagouir");
        listVille.push("Lalla Mimouna");
        listVille.push("Larache");
        listVille.push("Lixus");
        listVille.push("Lqliâa");
        listVille.push("Madagh");
        listVille.push("Riad Heritage");
        listVille.push("Marrakech");
        listVille.push("Martil");
        listVille.push("Mechra Bel Ksiri");
        listVille.push("Mediek ou M'diq");
        listVille.push("Mediouna");
        listVille.push("Mehdia");
        listVille.push("Meknès");
        listVille.push("Melloussa");
        listVille.push("Midelt");
        listVille.push("Mirleft");
        listVille.push("Mohammédi");
        listVille.push("Moqrisset");
        listVille.push("Moulay Ali Cherif");
        listVille.push("Moulay Bousselham");
        listVille.push("Moulay Idriss Zerhoun");
        listVille.push("M'rirt");
        listVille.push("nado");
        listVille.push("nhim");
        listVille.push("Ouarzazate");
        listVille.push("Oualidia");
        listVille.push("Ouezzane");
        listVille.push("Oujd");
        listVille.push("Oukaimeden");
        listVille.push("Oulad Amrane");
        listVille.push("Oulad Ayad");
        listVille.push("Oulad Berhil");
        listVille.push("Oulad Frej");
        listVille.push("Oulad Ghadbane");
        listVille.push("Oulad H Riz Sahel");
        listVille.push("Oulad M'Rah");
        listVille.push("Oulad M Barek");
        listVille.push("Oulad Teïma");
        listVille.push("Oulad Zbair");
        listVille.push("Ouled Tayeb");
        listVille.push("Ouled Youssef");
        listVille.push("Oulmès");
        listVille.push("Ounagha");
        listVille.push("Rabat");
        listVille.push("Ras El Ma");
        listVille.push("Ribate El Kheir");
        listVille.push("Rissan");
        listVille.push("Sabaa Aiyoun");
        listVille.push("Safi");
        listVille.push("Saidia");
        listVille.push("Sal");
        listVille.push("Sebt El Maârif");
        listVille.push("Sebt Gzoula");
        listVille.push("Sebt Jahjouh");
        listVille.push("Sefrou");
        listVille.push("Setta");
        listVille.push("Sid Zouin");
        listVille.push("Sidi Abdallah Ghiat");
        listVille.push("Sidi Addi");
        listVille.push("Sidi Ali Ban Hamdouche");
        listVille.push("Sidi Allal El Bahraoui");
        listVille.push("Sidi Allal Tazi");
        listVille.push("Sidi Bou Othmane");
        listVille.push("Sidi Boubker");
        listVille.push("Sidi Jaber");
        listVille.push("Sidi Kace");
        listVille.push("Sidi Lyamani");
        listVille.push("Sidi Rahhal");
        listVille.push("Sidi Slimane");
        listVille.push("Sidi Smaïl");
        listVille.push("Sidi Taibi");
        listVille.push("Sidi Yahya el Gharb");
        listVille.push("Skhirat");
        listVille.push("Semar");
        listVille.push("Souq Larb'a al Gharb");
        listVille.push("Taddert");
        listVille.push("Tafetachte");
        listVille.push("Tafrisset");
        listVille.push("Taghjijt");
        listVille.push("Tahala");
        listVille.push("Tahannaout");
        listVille.push("Tainaste");
        listVille.push("Taliouine");
        listVille.push("Talmest");
        listVille.push("Talssint");
        listVille.push("Tange");
        listVille.push("Tan-Tan");
        listVille.push("Tamallalt");
        listVille.push("Tamanar");
        listVille.push("Tameslouht");
        listVille.push("Taourirte");
        listVille.push("Tarfay");
        listVille.push("Taroudannt");
        listVille.push("Tata");
        listVille.push("Taza");
        listVille.push("Taznakht");
        listVille.push("Télouet");
        listVille.push("Temara");
        listVille.push("Temsia");
        listVille.push("Tétouan");
        listVille.push("Thar Es-Souk");
        listVille.push("Tichla");
        listVille.push("Tidass");
        listVille.push("Tifariti");
        listVille.push("Tiflet");
        listVille.push("Tingdad");
        listVille.push("Tinghir");
        listVille.push("Tinmel");
        listVille.push("Tiznit");
        listVille.push("Tiztoutine");
        listVille.push("Torres de Alcala");
        listVille.push("Tifelt");
        listVille.push("Volubilis (Oualili)");
        listVille.push("Youssoufia");
        listVille.push("Zagora");
        listVille.push("Zaio");

        return listVille;

    }

}