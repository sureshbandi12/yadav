
 
 var matrixA=[[2,3,5],[3,4,7],[7,8,9]]
 var matrixB=[[4,5,6],[5,6,7],[8,9,7]];
 var resMatrix=[];
 for(i=0;i<matrixA.length;i++){
    var row=[]

    for(j=0;j<matrixA[i].length;j++){
        row.push(matrixA[i][j]+matrixB[i][j]);


    }
    resMatrix.push(row);
    

 }
 
console.log(resMatrix);

    
  
