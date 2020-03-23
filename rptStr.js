function repeatStr(s, n) {
  let log = ""
  while (n > 0) {
    log += s;
    n--;
  }
  return log;
}
