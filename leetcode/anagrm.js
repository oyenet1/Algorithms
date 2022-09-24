class Analgram {
  constructor(first_words, second_words) {
    this.first_words = first_words;
    this.second_words = second_words;
  }

  methodOne() {
    if (this.first_words.length != this.second_words.length) {
      return false;
    }
    let first = this.first_words.split("");
    let second = this.second_words.split("");
    first = first.sort();
    second = second.sort();
    for (let i = 0; i < first.length; i++) {
      if (first[i] != second[i]) {
        return false;
      }
    }
    return true;
  }
  // this method is used in a class.
}

let first = new Analgram("johnbull", "bullojnh");
console.log(first.methodOne());
