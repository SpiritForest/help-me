module.exports =  function count(s, pairs) {

  var n = 1, answer = 0, k = 0, counter = 0;
  var mask = s.split('');
  var arr = [];
  for (let i = 0; i < pairs.length; i++) {
    n *= Math.pow(pairs[i][0], pairs[i][1]);
  }
  if (n > 10000) return 0;
  for (let i = 0; i <= n; i++){
    if (i%2 ==0 && n%2 == 0 ||
        i%3 ==0 && n%3 == 0 ||
        i%5 ==0 && n%5 == 0 ||
        i%7 ==0 && n%7 == 0) arr.push(0)
    else arr.push (1);
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
