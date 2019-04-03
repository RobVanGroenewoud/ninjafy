const characterMap = new Map<string, string>([
  ["a", "ka"],
  ["b", "zu"],
  ["c", "mi"],
  ["d", "te"],
  ["e", "ku"],
  ["f", "lu"],
  ["g", "ji"],
  ["h", "ri"],
  ["i", "ki"],
  ["j", "zu"],
  ["k", "me"],
  ["l", "ta"],
  ["m", "tin"],
  ["n", "to"],
  ["o", "mo"],
  ["p", "no"],
  ["q", "ke"],
  ["r", "shi"],
  ["s", "ari"],
  ["t", "chi"],
  ["u", "do"],
  ["v", "ru"],
  ["w", "mei"],
  ["x", "na"],
  ["y", "fu"],
  ["z", "zi"]
]);

function capitalized(input?: string) {
  return input && input.charAt(0).toUpperCase() + input.slice(1);
}

export function ninjafy(input: string): string {
  return input
    .split("")
    .map(
      character =>
        characterMap.get(character) ||
        capitalized(characterMap.get(character.toLowerCase())) ||
        character
    )
    .join("");
}
