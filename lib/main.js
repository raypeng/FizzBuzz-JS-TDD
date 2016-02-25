function fizzbuzz(a, b, c) {
  return {
    say: function(n) {
      if (n.toString().indexOf(a.toString()) !== -1) {
        return "Fizz";
      }
      var str = "";
      if (n % a == 0) {
        str += "Fizz";
      }
      if (n % b == 0) {
        str += "Buzz";
      }
      if (n % c == 0) {
        str += "Whizz";
      }
      return str;
    }
  }
}

module.exports = fizzbuzz;
