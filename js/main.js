// HANDLE THE LOAD EVENT OF THE WINDOW
function init(){
    var btnEmp = document.getElementById("btnAddEmployee");
    btnEmp.addEventListener("click", function(){
        window.open("add-employee.html", "add-employee", "width=600px,height=600px")
    });
}
window.addEventListener('load', init);

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP