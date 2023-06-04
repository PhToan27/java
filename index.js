let PName = document.getElementById("name");
PName.innerHTML = "abc";
// PName.style="background-color:blue"
PName.style.color = "red";
// PName.style="color:black"
/**
 * ham nay tinh tong cua hai tham so
 * @param {int} a tham so thu nhat
 * @param {int} b tham so thu hai
 */
function sum(a, b) {
    return a + b;
}
// let result = sum(2, 3);
// console.log(result);
function ClickVaoButton() {
    console.log("daclickvaobuttonroi");
    let result = sum(2, 3);
    console.log(result);

}
let ButtonHien = document.getElementById("hien");
ButtonHien.onclick = ClickVaoButton;