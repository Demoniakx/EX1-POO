import { CompteBancaire } from "./CompteBancaire.js";

const compte = new CompteBancaire(1000);

// Dépôt
compte.ajoutDepot(200); 

// Retrait
compte.retraitSolde(1500);  

// Intérêts
compte.soldeInteret(0.03); 

// Afficher l'historique des opérations
compte.afficherHistorique();