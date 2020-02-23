/**
 * A function to wrap it all in.
 */

function loadSchools() {
    'use strict';

    let url;

    //url = "https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1283";
    url = "data/schools.json";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            populate(myJson);
        });
};
// create table rows and populate them with data

function populate(data) {
    var table = document.getElementById("schools");
    table.style.display="block";
    let i=1;
  
    data.Skolenheter.forEach(element => {
        
        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = element.Skolenhetskod;
        cell2.innerHTML = element.Skolenhetsnamn;
        cell3.innerHTML = element.Kommunkod;
        cell4.innerHTML = element.PeOrgNr;

        i++;
    }); 
}