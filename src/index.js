module.exports = function count(s, pairs) {

  var n = 1, answer = 0;
  var arr = [], arr2 = [];
  let mask = s.split('');
  for (let i = 0; i < pairs.length; i++) {
    n *= Math.pow(pairs[i][0], pairs[i][1]);
    arr2.push(pairs[i][0]);
  }

if (n > 100000000)  return 0;
let j = 0;
for (let i = 0; i < n; i++){
  if (arr2.some(elem => i % elem == 0)) arr.push(0);
  else arr.push(1);
}

  var res = arr.join('');
  var pos = -1;
  while ((pos = res.indexOf(s, pos+1)) != -1){
    answer++;
  }

  const result = answer % 1000000007;
  return result;
}
