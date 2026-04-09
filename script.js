// seleziono il div dove mostrerò il risultato
const risultato = document.querySelector("#risultato");

// SNACK 1

// funzione che parte quando clicco il bottone snack 1
function snack1() {

  // creo array di oggetti 
  const bici = [
    {
      nome: "Bici 1",
      peso: 7
    },
    {
      nome: "Bici 2",
      peso: 5
    },
    {
      nome: "Bici 3",
      peso: 8
    }
  ];

   // imposto la prima bici come bici più leggera
  let biciLeggera = bici[0];

  // ciclo tutte le bici
  for (let i = 0; i < bici.length; i++) {

    // controllo se la bici corrente pesa meno della bici più leggera
    if (bici[i].peso < biciLeggera.peso) {

      // se pesa meno diventa la nuova bici più leggera
      biciLeggera = bici[i];
    }

  }

  // stampo il risultato in pagina
  risultato.innerHTML = "La bici più leggera è " + biciLeggera.nome + " con peso " + biciLeggera.peso;

}

// SNACK 2

// funzione che parte quando clicco il bottone snack 2
function snack2() {

  // creo array squadre
  const squadre = [
    {
      nome: "Milan",
      punti: 0,
      falli: 0
    },
    {
      nome: "Inter",
      punti: 0,
      falli: 0
    },
    {
      nome: "Napoli",
      punti: 0,
      falli: 0
    }
  ];

  // ciclo le squadre
  for (let i = 0; i < squadre.length; i++) {

    // genero numeri casuali per i punti
    squadre[i].punti = Math.floor(Math.random() * 100) + 1;

    // genero numeri casuali per i falli
    squadre[i].falli = Math.floor(Math.random() * 50) + 1;

  }

 // creo nuovo array vuoto
  const nuoveSquadre = [];

  // ciclo le squadre
  for (let i = 0; i < squadre.length; i++) {

    // creo nuovo oggetto con solo nome e falli
    const nuovaSquadra = {
      nome: squadre[i].nome,
      falli: squadre[i].falli
    };

    // inserisco il nuovo oggetto nel nuovo array
    nuoveSquadre.push(nuovaSquadra);

  }

  // stampo in console array completo
  console.log("Squadre complete:", squadre);

  // stampo in console nuovo array
  console.log("Nuovo array:", nuoveSquadre);

  // messaggio in pagina
  risultato.innerHTML = "Controlla la console per vedere il risultato";
}