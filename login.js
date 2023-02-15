// Make a file to store all login id's,passwords and read the list from the file
var list=[["sam","pass1"],["kan","pass2"]];
var invalid_login_count=3;
var z=[];
function login(){
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var c=false;
    z=[];
    for (var i=0;i<list.length;i++){
        if (list[i][0]===name){
            z=list[i];
            if (z[1]===pass){
                c=true;
            }
            break;
        }
    }
    if (invalid_login_count===0){
        document.getElementById("login_validity").innerText = "Maximum Attempts Reached\n Try again Later"
    }
    else if (z===[]){
        document.getElementById("login_validity").innerText = "Invalid Student ID\n Remaining Attempts "+invalid_login_count;
        invalid_login_count-=1;
    }else if(c===false){
        document.getElementById("pass").innerHTML="";
        document.getElementById("login_validity").innerText = "Invalid Password\n Remaining Attempts "+invalid_login_count;
        invalid_login_count-=1;
    }else{
        window.location="studentpage.html?stud_name="+z[0];
        invalid_login_count=3;
    }
    async function sleep() {
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
function studpage(){
    const queryString = window.location.search;
    const st_name = new URLSearchParams(queryString).get('stud_name');
    document.getElementById("stname").innerHTML+=st_name;
}