import cowsay from "npm:cowsay";

export const greet = (name: string): string => `Hello, ${name}`;

export const moo = (name: string): string => cowsay.say(name);
