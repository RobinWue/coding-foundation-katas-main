# Kata: Filter API Data

Implementiere die Funktion "filterApiData" in "filter-api-data.js" unter Berücksichtigung der folgenden Anforderungen:

-Der erste Parameter "apiData" ist ein Array, das Objekte enthält.
-Die Objekte können unterschiedliche Schlüssel haben.
-Der zweite Parameter "mandatoryKeys" ist ein Array, das alle Schlüssel enthält, die ein Objekt (aus dem "apiData"-Array) haben muss, um den Filtertest zu bestehen.
-Gib ein Array zurück, das nur die Objekte enthält, die alle Schlüssel aus dem "mandatoryKeys"-Array enthalten.

## Filter Api Data Examples

```js
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]
```

```js
const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
```
