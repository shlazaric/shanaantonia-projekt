document.getElementById("prijaviSeBtn").addEventListener("click", function () {
    var ime = document.getElementById("ime").value;
    var prezime = document.getElementById("prezime").value;
    var email = document.getElementById("email").value;
    var lozinka = document.getElementById("lozinka").value;
    var ponovnaLozinka = document.getElementById("ponovna-lozinka").value;

    // Ovdje možete dodati logiku za provjeru unesenih podataka i njihovu obradu

    // Primjer: Provjera jesu li lozinka i ponovni unos lozinke isti
    if (lozinka !== ponovnaLozinka) {
        alert("Lozinka se ne podudara. Molimo unesite istu lozinku.");
        return; // Zaustavlja daljnje izvršavanje funkcije
    }

    // Primjer: Slanje podataka na server
    // Ovdje možete dodati logiku za slanje podataka na server ili druge manipulacije s podacima

    // Preusmjeravanje korisnika na drugu stranicu nakon prijave
    window.location.href = "potvrda.html";
});
