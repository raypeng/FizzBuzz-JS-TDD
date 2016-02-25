function fizzbuzz(a, b, c) {
  return {
    say: function(n) {
      if (n % a == 0) {
        return "Fizz";
      } else if (n % b == 0) {
        return "Buzz";
      }
    }
  }
}

module.exports = fizzbuzz;
