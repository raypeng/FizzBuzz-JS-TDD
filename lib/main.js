function fizzbuzz(a, b, c) {
  return {
    say: function(n) {
      if (n % a == 0) {
        return "Fizz";
      } else if (n % b == 0) {
        return "Buzz";
      } else if (n % c == 0) {
        return "Whizz";
      }
    }
  }
}

module.exports = fizzbuzz;
