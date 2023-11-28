export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e"){
    if (currentElement != "E"){
      result.push(currentElement)
    }
    }
}
  return result.join("")
}

export function aufgabe02(args) {
  const input = args;
  return input.toUpperCase();
}

export function aufgabe03(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const currentElement = text[i];
    if (currentElement.toLowerCase() === 'e') {
      count++;
    }
  }

  return count;
}

export function aufgabe04(args) {
  if (typeof args !== 'string') {
      throw new Error('Ungültiger Eingabetyp. Bitte einen Text als Argument übergeben.');
  }

  const aufgabe04 = args.match(/\S+/g);

  if (!aufgabe04) {
      return 0;
  }

  return aufgabe04.length;
}
