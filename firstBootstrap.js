let prixT = document.getElementById("prixT");
let prixU = document.getElementById('prixU');
let nbquantite = document.getElementById('quantite');
let age = document.getElementById('selectAge');
let seance = document.getElementById('selectSeance');
let modal = document.getElementById('tableBody1');
let table = document.getElementById('table');
let i = 1;


// SEANCE

function chooseSeance() // Calcule le prix en fonction de la seance et de l'age
{
    table.addEventListener('change', function () {

        let indexSeance = seance.value;

        if (age.value == "1") {
            switch (indexSeance) {
                case "1":
                    prixU.value = 10;
                    break;

                case "2":
                    prixU.value = 12;
                    break;

                case "3":
                    prixU.value = 12.50;
                    break;


            }
        }

        if (age.value == "2") {
            switch (indexSeance) {
                case "1":
                    prixU.value = 5;
                    break;

                case "2":
                    prixU.value = 6;
                    break;

                case "3":
                    prixU.value = 6;
                    break;


            }
        }
    })
}


// QUANTITE

function quantity() // MULTIPLIE LA QUANTITE PAR LE PRIX UNITAIRE
{
    nbquantite.addEventListener('change', function () {
        let indexQt = nbquantite.value;
        prixT.value = indexQt * prixU.value;

    })

}

function addLines() {

    // CREER LA LIGNE ET LES COLONES
    let row = document.createElement('tr');
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    // CREER LES SELECT ET OPTION
    let selectAge = document.createElement('select');
    let age1 = document.createElement('option');
    let age2 = document.createElement('option');
    let age3 = document.createElement('option');

    let selectSeance = document.createElement('select');
    let seance0Selected = document.createElement('option');
    let seance1 = document.createElement('option');
    let seance2 = document.createElement('option');
    let seance3 = document.createElement('option');

    let selectQt = document.createElement('select');
    let qT0Selected = document.createElement('option');
    let qT1 = document.createElement('option');
    let qT2 = document.createElement('option');
    let qT3 = document.createElement('option');

    // CREER INPUT ET BOUTTON
    let input = document.createElement('input');
    let button = document.createElement('button');

    // APPELLE LES ELEMENTS 
    modal.appendChild(row);
    row.appendChild(td);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);


    td.appendChild(selectAge);
    td2.appendChild(selectSeance);
    td3.appendChild(selectQt);
    td4.appendChild(input);
    td5.appendChild(button);
    // INCREMENTE UN ID ROW DYNAMIQUE
    i++;
    row.setAttribute('id', `tableBody${i}`);

    // CUSTOM LES SELECT AVEC BOOTSTRAP
    selectAge.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');
    selectQt.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');
    selectSeance.setAttribute('class', 'custom-select mb-2 mr-sm-2 mb-sm-0');

    // APPELLE LES SELECT ET CREER LE TEXT
    selectAge.appendChild(age1);
    age1.textContent = 'Âge';

    selectAge.appendChild(age2);
    age2.setAttribute('value', '1');
    age2.textContent = '+14';

    selectAge.appendChild(age3);
    age3.setAttribute('value', '2');
    age3.textContent = '-14';

    selectSeance.appendChild(seance0Selected);
    seance0Selected.textContent = 'Séances'
    selectSeance.appendChild(seance1);

    seance1.textContent = 'Mardi 18 Octobre (14H - 18H)'
    seance1.setAttribute('value', '1');
    selectSeance.appendChild(seance2);
    seance2.textContent = 'Mercredi 18 octobre (18H - 19h30)';
    seance2.setAttribute('value', '2');
    selectSeance.appendChild(seance3);
    seance3.textContent = 'Samedi 20 Octobre (Week-End)';
    seance3.setAttribute('value', '3');

    selectQt.appendChild(qT0Selected);
    qT0Selected.textContent = '0';

    selectQt.appendChild(qT1);
    qT1.textContent = '1';
    qT1.setAttribute('value', '1');
    selectQt.appendChild(qT2);
    qT2.textContent = '2';
    qT2.setAttribute('value', '2');
    selectQt.appendChild(qT3);
    qT3.textContent = '3';
    qT3.setAttribute('value', '3');

    button.textContent = 'X';
    button.setAttribute('class', 'btn btn-danger');
    button.setAttribute('onclick', 'removeElement(this)');

}

function valide() // VALIDE LA RESERVATION
{
    let quantite = document.getElementById('quantite');
    let age = document.getElementById('selectAge');
    let seance = document.getElementById('selectSeance');



    age = age.options[age.selectedIndex].textContent;
    quantite = nbquantite.options[nbquantite.selectedIndex].value;
    seance = seance.options[seance.selectedIndex].textContent;

    films = { // ELEMENT SELECTIONNE CLASSE ICI

        seance: seance,
        age: age,
        nbquantite: quantite
    }

    achat = JSON.stringify(films);
    localStorage.setItem('achat', achat); // INIT DU LOCALSTORAGE

    window.location.href = "monPanier.html";

}

function removeElement(elementId) // SUPPRIMER parentNode du boutton
{
    // Removes an element from the document
    // var element = document.getElementById(elementId);
    // element.parentNode.removeChild(element);
    // document.getElementById("myTable").deleteRow(0);
    // elementId.parentNode.parentNode.parentNode.id = 'tableBody' + i - 1;
    elementId.parentNode.parentNode.parentNode.removeChild(elementId.parentNode.parentNode);
    let idMax = modal.lastElementChild;
    if (modal.hasChildNodes()) {
        //valeurMax = idMax.id.slice(9);
        // valeurMax--;
        // var children = modal.childNodes;
        for (let i = 0; i < children.length; i++) {
            children.id = `tableBody${valeurMax}`
        }
        console.log(children);
    }
}

function removeStorage() {
    localStorage.clear();
    window.location.reload();

}


function recuperePanier() // RECUPERE LA RESERVATION ET AFFICHE SUR monPanier.html
{
    storageValue = JSON.parse(localStorage.getItem('achat'));


    Object.keys(localStorage).forEach(function (achat) {

        // Je recupere les ID

        let head = document.getElementById('head');
        let row = document.getElementById('row');

        // Je créer l'entete
        let title = document.createElement('th');
        title.textContent = 'Votre date de reservation:';
        let title1 = document.createElement('th');
        title1.textContent = 'Âge:';
        let title2 = document.createElement('th');
        title2.textContent = 'Quantité';

        //Je creais la ligne
        let line = document.createElement('td');
        line.textContent = storageValue.seance;
        let line2 = document.createElement('td');
        line2.textContent = storageValue.age;
        let line3 = document.createElement('td');
        line3.textContent = storageValue.nbquantite;

        // Boutton remove
        let button = document.createElement('button');
        button.textContent = 'X';
        button.setAttribute('class', 'btn btn-danger');
        button.setAttribute('onclick', 'removeStorage()');
        // button.addEventListener('click', removeStorage());

        // je fais apparaitre l'entete
        head.appendChild(title);
        head.appendChild(title1);
        head.appendChild(title2);

        //Je fais apparaitre les lignes
        row.appendChild(line);
        row.appendChild(line2);
        row.appendChild(line3);
        row.appendChild(button);

    })



}

chooseSeance();
quantity();
recuperePanier();