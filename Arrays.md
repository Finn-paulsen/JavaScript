Arrays sind  Folgen von Werten eines bestimmten Typs. 




╔═══════════════════╗
║          Variable            ║
╚═══════════════════╝
   

╔═══════════════════╗
║                1                 ║
╚═══════════════════╝



**Variable (Datentyp: int):**

- Die Variable "meineVariable" speichert einen einzelnen Ganzzahlwert (integer, int). In diesem Fall ist der Wert 1.


╔═══════════════════╗
║           Array                ║
╚═══════════════════╝



╔═══════════════════╗
║                1                 ║
╚═══════════════════╝



╔═══════════════════╗
║                 2                ║
╚═══════════════════╝



╔═══════════════════╗
║                 3                ║
╚═══════════════════╝



╔═══════════════════╗
║               4                  ║
╚═══════════════════╝



**Array (Datentyp: String):**

- Das Array "meinArray" speichert eine Liste von Werten, die Strings sind. Hier sind die Werte 1, 2, 3 und 4 als Beispiele.







### Array-Methoden:

1. **`.find` Methode:**
    
    - **Was es macht:** Sucht nach einem Element im Array, das eine bestimmte Bedingung erfüllt.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const numbers = [1, 2, 3, 4, 5]; const result = numbers.find(num => num > 3); console.log(result); // Ausgabe: 4`
        
2. **`.filter` Methode:**
    
    - **Was es macht:** Erstellt ein neues Array mit allen Elementen, die eine bestimmte Bedingung erfüllen.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const numbers = [1, 2, 3, 4, 5]; const filtered = numbers.filter(num => num % 2 === 0); console.log(filtered); // Ausgabe: [2, 4]`
        
3. **`.forEach` Methode:**
    
    - **Was es macht:** Führt eine Funktion für jedes Element im Array aus.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const colors = ['red', 'green', 'blue']; colors.forEach(color => console.log(color)); // Ausgabe: // red // green // blue`
        
4. **`.pop` Methode:**
    
    - **Was es macht:** Entfernt das letzte Element aus dem Array und gibt es zurück.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const fruits = ['apple', 'banana', 'orange']; const removedFruit = fruits.pop(); console.log(removedFruit); // Ausgabe: 'orange' console.log(fruits); // Ausgabe: ['apple', 'banana']`
        
5. **`.push` Methode:**
    
    - **Was es macht:** Fügt ein oder mehrere Elemente am Ende des Arrays hinzu.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const fruits = ['apple', 'banana']; fruits.push('orange', 'grape'); console.log(fruits); // Ausgabe: ['apple', 'banana', 'orange', 'grape']`
        

### Object-Methode:

6. **`.assign` Methode:**
    - **Was es macht:** Kopiert die Werte von einem oder mehreren Quellobjekten in ein Zielobjekt.
        
    - **Beispiel:**
        
        javascriptCopy code
        
        `const obj1 = { a: 1, b: 2 }; const obj2 = { b: 3, c: 4 };  const mergedObject = Object.assign({}, obj1, obj2); console.log(mergedObject); // Ausgabe: { a: 1, b: 3, c: 4 }`