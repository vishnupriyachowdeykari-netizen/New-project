function cal() {
const in = document.getElementByName('date');
const date = new Date();
const out = document.getElementById('out').style.display = block;
const put = eval(in - date)
out.value = put;
}