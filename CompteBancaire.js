class CompteBancaire {

    static tauxInteret = 0.03;
    #solde;
    historiqueOperations;

    constructor(soldeInitial = 0){
    this.#solde = soldeInitial;
    this.historiqueOperations = [];
    }

    get solde(){
        return this.#solde;
    }

    get depot(){
        return this.depot;
    }

    get retrait(){
        return this.retrait;
    }


    set depot(depot){
        if(depot>=0){
            this.depot = depot
        }else{
            console.log("Montant du dépot invalide, pas de dépot négatif");
        }

    }

    set retrait(retrait){
        if(retrait <= this.#solde){
            this.retrait = retrait
        }else{
            console.log("Solde insuffisant")
        }
        
    }

    ajoutDepot(depot){
            this.#solde += depot;
            this.historiqueOperations.push("Dépot de " + depot + " euros")
            console.log("Vous avez déposé " + depot + "euros. Nouveau solde :" + this.#solde + " euros")
            return this.solde
    }

    retraitSolde(retrait){
        this.#solde -= retrait;
        this.historiqueOperations.push("Retrait de " + retrait + " euros");
        console.log("Vous avez retiré " + retrait + " euros. Nouveau solde: " + this.#solde +" euros");
        return this.solde
    }

    soldeInteret(tauxInteret) {
        let soldeAvecInteret = this.#solde * tauxInteret + this.#solde;
        soldeAvecInteret = Math.round(soldeAvecInteret); 
        this.historiqueOperations.push("Intérêts de " + tauxInteret * 100 + " %" );
        console.log("Intérêts annuels de " + tauxInteret * 100 + " % ajoutés. Nouveau solde : " + soldeAvecInteret + " euros");
        return soldeAvecInteret;
    }

    afficherHistorique(){
        console.log("Historique des opérations");
        this.historiqueOperations.forEach((operation, index) => {
            console.log(index +1, operation);
        });
    }
}

export { CompteBancaire };