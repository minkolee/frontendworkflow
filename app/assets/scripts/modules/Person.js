function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log(this.name + " likes " + this.favoriteColor);
    }
}

module.exports = Person;

