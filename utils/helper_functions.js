exports.roundTo5 = function(x) {
  return Math.round(x/5)*5;
}

exports.berechneWohnGeld = function(M, a, b, c, Y) {
  M = parseInt(M);
  Y = parseInt(Y);
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  return Math.round(1.15 * (M - (a + b * M + c * Y) * Y));
}
