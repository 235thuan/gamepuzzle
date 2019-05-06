
let a1 = document.getElementById("m1");
let a2 = document.getElementById("m2");
let a3 = document.getElementById("m3");
let a4 =document.getElementById("m4");
let anh1= "panda_swap_part1x1";
let anh2="panda_swap_part2x1";
let anh3="panda_swap_part3x1";
let anh4="panda_swap_part4x1";




function bam1() {
    if (anh1==="panda_swap_part1x1") {
        anh1="monkey_part1x1";
    }
    else if (anh1==="monkey_part1x1") {
        anh1="funny-cat1_part1x1";
    }
    else if (anh1==="funny-cat1_part1x1") {
        anh1="panda_swap_part1x1";
    }
    a1.src= anh1 +".jpg"
}

function bam2() {
    if (anh2==="panda_swap_part2x1") {
        anh2="monkey_part2x1";
    }
    else if (anh2==="monkey_part2x1") {
        anh2="funny-cat1_part2x1";
    }
    else if (anh2==="funny-cat1_part2x1") {
        anh2="panda_swap_part2x1";
    }
    a2.src= anh2 +".jpg"
}
function bam3() {
    if (anh3==="monkey_part3x1") {
        anh3="funny-cat1_part3x1";
    }
    else if (anh3==="funny-cat1_part3x1") {
        anh3="panda_swap_part3x1";
    }
    else if (anh3==="panda_swap_part3x1") {
        anh3="monkey_part3x1";
    }
    a3.src= anh3 +".jpg"
}
function bam4() {
    if (anh4==="panda_swap_part4x1") {
        anh4="monkey_part4x1";
    }
    else if (anh4==="monkey_part4x1") {
        anh4="funny-cat1_part4x1";
    }
    else if (anh4==="funny-cat1_part4x1") {
        anh4="panda_swap_part4x1";
    }
    a4.src= anh4 +".jpg"
}
