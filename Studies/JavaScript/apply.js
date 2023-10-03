const mike = {
    name : "Mike"
}

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.apply(mike, [1999, "singer"]);
console.log(mike)