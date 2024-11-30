import { CompteBancaire } from "./CompteBancaire.js";

const compte = new CompteBancaire(1000);

compte.ajoutDepot(200); 

compte.retraitSolde(150);  

compte.soldeInteret(0.03); 

compte.afficherHistorique();