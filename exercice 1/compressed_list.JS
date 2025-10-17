function decompressed(input) {
  let result = [];
  for (let i = 0; i < input.length; i += 2) {
    let char = input[i];
    let count = parseInt(input[i + 1]);
    for (let j = 0; j < count; j++) {
      result.push(char);
    }
  }
  return result.join("");
}

function UniqueLetter (liste_decompresser) {
  let letter = new Set(liste_decompresser);
  return letter
}

const input = "a3b2c4a1";
let liste_decompresser = decompressed(input);
console.log(liste_decompresser);
console.log(UniqueLetter(liste_decompresser));
console.log(MostFrequent(liste_decompresser));