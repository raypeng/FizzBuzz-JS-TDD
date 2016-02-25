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

      if (str == '') {
        return n.toString();
      } else {
        return str;
      }
    },

    sayUpTo: function(n) {
      var str = "";
      for (var i = 1; i <= n; i++) {
        str += this.say(i) + "\n";
      }
      return str;
    },

    main: function() {
      var result = this.sayUpTo(100);
      console.log(result);
    }
  }
}

module.exports = fizzbuzz;
