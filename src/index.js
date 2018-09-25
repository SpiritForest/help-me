module.exports = function count(s, pairs) {

  var n = 1, answer = 0;
  var arr = [];
  for (let i = 0; i < pairs.length; i++) {
    n *= Math.pow(pairs[i][0], pairs[i][1]);
  }
  if (n > 10000000) return 0;

for (let i = 0; i < n; i++){
  if (findGCD(i,n) == 1){arr.push(1);}
  else {arr.push(0);}
}

  var res = arr.join('');
  var pos = -1;
  while ((pos = res.indexOf(s, pos+1)) != -1){
    answer++;
  }

  var result = answer % 1000000007;
  return result;
}

function findGCD(one, two){
  var arr = [one, two];
  while((arr[0] != arr[1])){
    arr.sort((a,b)=>a-b);
    if(arr[0] == 0) break;
    arr[1] = arr[1]%arr[0];
  }
  return arr[1];
}
