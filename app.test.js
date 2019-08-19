//Hello There
// .... . .-.. .-.. ---     - .... . .-. .
//General Kenobi
// --. . -. . .-. .- .-..     -.- . -. --- -... ..

const app = require("./app");

test("Converts Morse Code to an English string", () => {
  expect(app.morseToEnglish(".... . .-.. .-.. ---  - .... . .-. .")).toBe(
    "hello there"
  );
  expect(
    app.morseToEnglish("--. . -. . .-. .- .-..  -.- . -. --- -... ..")
  ).toBe("general kenobi");
  expect(
    app.morseToEnglish(".---- ..--- ...--  ... .. -..- - -.-- - .-- --- -·-·--")
  ).toBe("123 sixtytwo!");
});

test("Converts an English string to Morse Code", () => {
  expect(app.englishToMorse("hello there")).toBe(
    ".... . .-.. .-.. ---  - .... . .-. ."
  );
  expect(app.englishToMorse("general kenobi")).toBe(
    "--. . -. . .-. .- .-..  -.- . -. --- -... .."
  );
  expect(app.englishToMorse("123 sixtytwo!")).toBe(
    ".---- ..--- ...--  ... .. -..- - -.-- - .-- --- -·-·--"
  );
});
