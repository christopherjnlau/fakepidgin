function fakepidgin(data) {
  return _.map(data, function (string) { return `Eh brah, ${string}`; });
}

console.log(fakepidgin(['would you like to eat?', 'no thank you.']));
