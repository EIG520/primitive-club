var matrix = [0,1,2,3,4,5,6,7,8,9,10];
var fs = 2;
document.getElementById("matrix").innerHTML = matrix;

function expand(){
    if(matrix[matrix.length-1]==0){
        fs++;
        matrix = matrix.slice(0,-1);
        document.getElementById("matrix").innerHTML = matrix;
        return;
    }
    for(var i = matrix.length-2; i >= 0; i --){
        if(matrix[i]<matrix[matrix.length - 1]){
            var br = i;
            break;
        }
    }
    bp = matrix.slice(br,-1);
    gp = matrix.slice(0,br);
    
    for(var i = 0; i <= fs; i++){
        gp = gp.concat(bp)
    }
    matrix = gp;
    document.getElementById("matrix").innerHTML = matrix;
    fs ++;
    return;
}