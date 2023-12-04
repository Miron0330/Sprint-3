// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
let number = 1;
// b) Utwórz zmienną typu string przechowującą twoje imię.
let firstName = "Miron";
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let text;
text = "random_text";
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const datebase = { name: "Jan", age: 50 };
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let colorRed = true;
const colorName = false;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
let sum = 2 + 2;
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
let lastName = "Demkiw";
let fullname = firstName + " " + lastName;
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
let floatingPoint = 1.5;
// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let salary;
salary = 4000 + 500;
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let town = "Lubin";

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
const toyota = [200, number, "text"];
// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  make: "toyota",
  model: "camry",
  year: 2020,
};
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const numbers = [1, 10, 100];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const person = {
  name: "Jan Kowalski",
  age: 30,
  isStudent: false,
};
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
let paint = {};
paint.color = "red";
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
  { name: "kot", age: 4 },
  { name: "pies", age: 5 },
  { name: "królik", age: 2 },
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const values = [true, false, true];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student = {
  name: "Jan Kowalski",
  grades: [3, 5, 5],
  isActive: true,
};
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const table = [true, 10, "Wordl", { name: "Jan", age: 50 }, null];
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
  title: "Mroczna tajemnica",
  author: "Jan Kowalski",
  yearPublished: 2000,
};

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
let checkNumber = 8;
if (checkNumber > 10) {
  console.log("Liczba jest większa niż 10");
} else {
  console.log("liczba jest mniejsza niż 10");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
let checkWord = "Hello";
if (checkWord != "Hello") {
  console.log("Zmienna nie jest równa 'Hello'");
} else {
  console.log("Zmienna jest równa 'Hello'");
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const workHours = 7;
const timeForWork =
  workHours >= 8 ? "Praca będzie zrobiona" : "Zabraknie czasu";
console.log(timeForWork);
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let age = 18;
if (age >= 18) {
  console.log("Liczba jest większa bądź równa 18");
} else {
  console.log("liczba jest mniejsza niż 18");
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
let Array = [];
if (Array.length === 0) {
  console.log("Tablica jest pusta");
} else {
  console.log("Tablica nie jest pusta");
}
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
let isMember = true;
let discount = isMember ? "20% discount" : "without discount";
console.log(discount);
// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
let check = "autobus";
if (check.length > 5) {
  console.log("jest więcej niż 5 znaków");
} else {
  console.log("jest mniej niż 5 znaków");
}
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
let x = 4;
if (x % 2 === 0) {
  console.log("liczba jest parzysta");
} else {
  console.log("liczba jest nieparzysta");
}
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
const carModel = "Prius";
const makeOfCar = carModel === "Prius" ? "Toyota" : "To nie jest model Toyoty";
console.log(makeOfCar);
// j)Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let object1 = {
  key1: "value1",
  key2: "value2",
};
if (object1.key1 == "value1") {
  console.log("zawiera klucz");
} else {
  console.log("nie zawiera klucza");
}
