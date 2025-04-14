const ans = document.getElementById("ans");
function appendToDisplay(value) {
  ans.value += value;
}
function clearAns() {
  ans.value = "";
}
function del() {
    ans.value = ans.value.slice(0, -1);
}
function calculate(){
    try
    {
        ans.value = eval(ans.value);
    }
    catch(error)
    {
        ans.value = "Error";
    }
}