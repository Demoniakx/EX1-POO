class CompteBancaire {

    static tauxInteret = 0.03;
    #solde;
    historiqueOperations;

    constructor(soldeInitial = 0){
    this.#solde = soldeInitial;
    this.historiqueOperations = [];
    }

    //Getter pour le solde
    get solde(){
        return this.#solde;
    }

    //Getter pour le dépot
    get depot(){
        return this.depot;
    }

    //Getter pour le retrait
    get retrait(){
        return this.retrait;
    }

    //Setter pour le depot
    set depot(depot){
        if(depot>=0){
            this.depot = depot;
        }else{
            console.log("Montant du dépot invalide, pas de dépot négatif");
        }

    }

    //Setter pour le retrait
    set retrait(retrait){
        if(retrait <= solde){
            this.retrait = retrait;
        }else{
            console.log("Solde insuffisant")
        }
        
    }

    //Method pour le depot
    ajoutDepot(depot){
            this.#solde += depot;
            this.historiqueOperations.push("Dépot de " + depot + " euros")
            console.log("Vous avez déposé " + depot + "euros. Nouveau solde :" + this.#solde + " euros")
            return this.#solde
    }

    //Method pour le retrait
    retraitSolde(retrait){
        this.#solde -= retrait;
        this.historiqueOperations.push("Retrait de " + retrait + " euros");
        console.log("Vous avez retiré " + retrait + " euros. Nouveau solde: " + this.#solde +" euros");
        return this.#solde
    }

    //Method pour le taux interet
    soldeInteret(tauxInteret) {
        let soldeAvecInteret = this.#solde * tauxInteret + this.#solde;
        soldeAvecInteret = Math.round(soldeAvecInteret); 
        this.historiqueOperations.push("Intérêts de " + tauxInteret * 100 + " %" );
        console.log("Intérêts annuels de " + tauxInteret * 100 + " % ajoutés. Nouveau solde : " + soldeAvecInteret + " euros");
        return soldeAvecInteret;
    }

    //Method pour l'historique
    afficherHistorique(){
        console.log("Historique des opérations");
        this.historiqueOperations.forEach((operation, index) => {
            console.log(index +1, operation);
        });
    }
}

export { CompteBancaire };