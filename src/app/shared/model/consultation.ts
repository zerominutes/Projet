export class Consultation{
    id: number;
    details: string;
    maladie: string;
    medecinConsult: number;
    patientC: number;
    dossier:number;

    constructor (){
        this.id=null;
        this.details='';
        this.maladie='';
        this.medecinConsult=null;
        this.patientC=null;
        this.dossier=null;
      }
}