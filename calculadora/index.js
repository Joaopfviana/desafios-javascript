import { createInterface } from 'readline'
import { soma, subtracao, multiplicacao, divisao, resto, exponenciacao } from './operacoesMatematica.js'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`Digite o primeiro número:\n> `, (numero1) => {
  rl.question(`Digite a operação:\n+: soma\n-: subtração\n*: multiplicação\n/: divisão\n%: resto\n**: exponenciação\n> `, (operador) => {
    rl.question(`Digite o segundo número:\n> `, (numero2) => {
      let resultado = null;
      const num1 = Number(numero1);
      const num2 = Number(numero2);

      if (operador == '+') {
        resultado = soma(num1, num2);
      } else if (operador == '-') {
        resultado = subtracao(num1, num2);
      } else if (operador == '*') {
        resultado = multiplicacao(num1, num2);
      } else if (operador == '/') {
        resultado = divisao(num1, num2);
      } else if (operador == '%') {
        resultado = resto(num1, num2);
      } else if (operador == '**') {
        resultado = exponenciacao(num1, num2);
      }

      if (resultado != null) {
        console.log(`O resultado da sua operação é:\n> ${resultado}`);
      } else {
        console.log(`Operação inválida!`);
      }
      rl.close();
    })
  })
})