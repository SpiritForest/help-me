module.exports = function count(s, pairs) {

  var n = 1, answer = 0, k = 0, counter = 0;
  var mask = s.split('');
  var arr = [];
  for (let i = 0; i < pairs.length; i++) {
    n *= Math.pow(pairs[i][0], pairs[i][1]);
  }
  if (n > 1000000) return 0;
    var j = 0;
  for (let i = 0; i <= n; i++){
    if (findGCD(i+j,n) == 1){arr.push(1);}
    if (findGCD(i+j,n) != 1){arr.push(0);}
  /*  if (arr[arr.length - 1] == mask[j]){
      j++;
    }
    if (j > mask.length){
      j = 0;
    }//*/
  }

  var res = arr.join('');
  var pos = -1;
  while ((pos = res.indexOf(s, pos+1)) != -1){
    answer++;
  }
  var result = answer % 1000000007;
  console.log(result);
  return result;
}

function findGCD(one, two){
  var arr = [];
  arr.push(one);
  arr.push(two);
  while((arr[0] != arr[1])){
    arr.sort((a,b)=>a-b);
    if(arr[0] == 0) break;
    arr[1] = arr[1]%arr[0];
  }
  return arr[1];
}
