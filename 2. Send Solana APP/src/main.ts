import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// Fonction simple pour tester
function sayHello(name: string): void {
    console.log(`Bonjour ${name} !`);
}

// Test de la fonction
sayHello("TypeScript");

// Test avec des nombres
const numbers: number[] = [1, 2, 3, 4, 5];
console.log("Tableau de nombres:", numbers);

// Test avec des objets
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Alice",
    age: 25
};

console.log("Objet utilisateur:", user);
