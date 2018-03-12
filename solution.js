function checkExam(array1, array2) {
    var scoreCount = 0;
     for(var i = 0; i < array1.length; i++){
        if(array2[i] === ''){
        scoreCount += 0;
        } else if(array2[i] !== array1[i]){
        scoreCount -= 1;
        } else if(array2[i] === array1[i]){
        scoreCount += 4;
        }
    }   
  if(scoreCount < 0){
  scoreCount = 0;
  }
  return scoreCount;
};
