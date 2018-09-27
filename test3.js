function count(s, pairs) {

  var n = 1, answer = 0;
  var arr = [], arr2 = [];
  let mask = s.split('');
  for (let i = 0; i < pairs.length; i++) {
    n *= Math.pow(pairs[i][0], pairs[i][1]);
    arr2.push(pairs[i][0]);
  }

//if (n > 100000000)  return 0;
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
  console.log(result);
  return result;
}

count('1', [
      [11, 1],
      [13, 1],
      [23, 1],
      [19, 1],
      [2, 1],
      [3, 1],
      [7, 1],
      [17, 1],
      [29, 1],
    ]);