import cowsay from "npm:cowsay@^1.6.0";

export const greet = (name: string): string => `Hello, ${name}`;

export const moo = (name: string): string =>
  cowsay.say({
    text: name,
    e: "oO",
    T: "U "
  });
