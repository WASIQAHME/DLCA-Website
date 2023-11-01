//function returns binary o/p of selected gate
function gateOutput()
{
    var i1 = document.getElementById("input1").value;
    var i2 = document.getElementById("input2").value;
    var gt = document.getElementById("gateType").value;
    var o;

    switch(gt)
    {
        case "and": o = i1 & i2; break;
        case "or" : o = i1 | i2; break;
        case "xor": o = i1 ^ i2;;
    }

    document.getElementById("output").value = o;
}