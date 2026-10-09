const sub = document.getElementById("sub");
const calco = document.getElementById("calbgco");
const cal_al = document.getElementById("calalign");
const btnco = document.getElementById("btntco");
const btnthi = document.getElementById("btnthick");
const btnthidis = document.getElementById("disthi");
const btnthidisplay = document.getElementById("disthid");
const cals = document.getElementById("cal-container");
const btnbgco = document.getElementById("btnbgco");
const hid = document.getElementById("hidden");
const nbtn = document.getElementsByClass("numbtn");
const ebtn = document.getElementById("ebtn");
const zbtn = document.getElementById("zbtn");
const btn = [zbtn + ebtn + nbtn];
function sett() {
btn.style.backgroundColor = "btnbgco.value";
btn.style.fontWeight = "btnthi.value";
btn.style.color = "btnco.value";
btnthidisplay.textContent = btnthidisplay.style.color = "btnco.value";
btnthidisplay.style.fontWeight = "btnthi.value";
btnthidis.innerText = btnthi.value;
cals.style.backgroundColor = "calco.value";
if (cal_al.value.toLowerCase === "center") {
cals.style.left = "50vw";
cals.style.top = "50vh";
cals.style.textAlign = "center";
}
else if (cal_al.value.toLowerCase === "left") {cals.style.textAlign = "left";
cals.style.float = "left";}
ese if (cal_al.value.toLowerCase === "right") {
cals.style.textAlign = "right";
cals.style.float = "right"; }
else { void
}
functio sub() {
sub.removeAttribute("disabled");
}}
function toggleSetting() { 
hid.style.display = "block";
cals.style.display = "none";
}
function back() {
hid.style.display = "none";
cals.style.display = "block";
}
