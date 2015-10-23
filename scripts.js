/**
 * Created by session2 on 10/20/15.
 */
var nameInput = document.getElementById("name");
var descInput = document.getElementById("desc");
var dateInput = document.getElementById("date");
var lifeInput = document.getElementById("life");
var expInput = document.getElementById("exp");

var tableOutput = document.getElementById("table");

function update() {
        var newItem = getInputItem();
        updateTable(newItem);
    }

function getInputItem() {
        var item = {
                name: nameInput.value,
                desc: descInput.value,
                date: dateInput.value,
                life: lifeInput.value,
                exp: expInput.value
        };
    return item;}

function updateTable(item){
    if(item.name=='' || item.desc ==" " || item.date ==" " || item.date ==" " || item.life == "" || item.exp == " ") return;
}
var tablerow = document.createElement("tr");
    var name = document.createElement("td");
    var desc = document.createElement("td");
    var date = document.createElement("td");
    var life = document.createElement("td");
    var exp = document.createElement("td");

name.innerHTML = item.name;
desc.innerHTML = item.desc;
date.innerHTML =item.date;
life.innerHTML = item.life;
exp.innerHTML = item.exp;

if(parseFloat(item.life)<3) tablerow.style.backgroundColor = "red";


