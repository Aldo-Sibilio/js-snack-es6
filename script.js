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

