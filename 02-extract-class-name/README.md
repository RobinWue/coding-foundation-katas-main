## Extract Class Name

-Der erste "parameter" ist eine Zeichenkette.
-Wenn die Zeichenkette das folgende Muster enthält: "Class JAHR MONATSNAME" (z. B. Class 2023 August)
-Dann gib eine neue Zeichenkette zurück, die das Jahr, einen - als Trennzeichen und die in eine Zahl umgewandelte Monatsname enthält, z. B. "Class 2022 September > 2023-09".
-Andernfalls gib null zurück.
-Der Monatsname kann deutsche Umlaute oder die alternative Schreibweise enthalten. Beide sind gültig, z. B. "Class 2022 März > 2023-03" ist gleichwertig mit "Class 2022 Maerz > 2023-03".

### Extract Class Name Example

```js
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
```
