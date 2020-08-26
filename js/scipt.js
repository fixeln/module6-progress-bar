const id1 = 1;
const id3 = 3;
const id7 = 7;
let total = 0;

function increaseBar(arg){
    console.log(arg);
    total += arg;
    $("#my-progress").width(`${total}%`);
}


function checkId(arg){
    console.log(arg)
    if(arg === 'id1'){
        increaseBar(id1);
    }else if(arg === 'id3'){
        increaseBar(id3);
    }else if(arg === 'id7') {
        increaseBar(id7);
    }
}

function checkChange() {
    let checkCount = $("input[type=checkbox]:checked").length;
    $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= 1);
    if ($("input[type=checkbox]:checked")) {
        const id = $("input[type=checkbox]:checked").attr("id")
        checkId(id, 'I');
    }
}

function init(){
    $("input[type=checkbox]").change(checkChange);
}


$(document).ready(init);