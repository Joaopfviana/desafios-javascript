const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let acertos = 0;

console.log(`Boas vindas ao quiz de JavaScript!`);
console.log(`Responda com as letras corretas (a, b ou c)\n`);

rl.question(
  `1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n`,
  (resposta1) => {
    switch (resposta1) {
      case 'a':
        console.log("\nErroooooou!\n");
        break;
      case 'b':
        console.log("\nBoa paizão!\n");
        acertos++;
        break;
      case 'c':
        console.log("\nErroooooou!\n");
        break;
      default:
        console.log("\nInsira uma opção válida (a, b ou c)");
    }
    rl.question(
      `2) Qual dessas é um estrutura de repetição?\n(a) loopar()\n(b) repeat\n(c) for\n`,
      (resposta2) => {
        switch (resposta2) {
          case 'a':
            console.log("\nErroooooou!\n");
            break;
          case 'b':
            console.log("\nErroooooou!\n");
            break;
          case 'c':
            console.log("\nBoa paizão!\n");
            acertos++;
            break;
          default:
            console.log("\nInsira uma opção válida (a, b ou c)\n");
        }
        rl.question(
          `3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) 'texto'\n`,
          (resposta3) => {
            switch (resposta3) {
              case 'a':
                console.log("\nErroooooou!\n");
                break;
              case 'b':
                console.log("\nBoa paizão!\n");
                acertos++;
                break;
              case 'c':
                console.log("\nErroooooou!\n");
                break;
              default:
                console.log("\nInsira uma opção válida (a, b ou c)\n");
            }
            rl.close();
            acertos == 3
              ? console.log(`\nParabéns! ${acertos} acertos.`)
              : acertos == 2
                ? console.log(`\nContinue assim! ${acertos} acertos.`)
                : acertos == 1
                  ? console.log(`\nContinue melhorando! ${acertos} acerto.`)
                  : console.log(`\nContinue estudando! ${acertos} acertos.`);
          },
        );
      },
    );
  },
);
