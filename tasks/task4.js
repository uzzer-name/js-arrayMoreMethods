// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією про її бренд, модель і витрату палива. 
// Завдання — перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км. 
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {
    // Створюємо масив для економічних машин
    const efficientCars = [];

    // Проходимо по масиву автомобілів
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        // Перевіряємо, чи витрата пального менше 6 л/100 км
        if (car.fuelConsumption < 6) {
            // Якщо бренд відповідає, додаємо машину в масив
            if (car.brand === brand) {
                efficientCars.push(car);
            }
        } else {
            // Якщо хоч одна машина має більшу витрату, повертаємо порожній масив
            return [];
        }
    }

    // Сортуємо економічні машини за витратою пального
    for (let j = 0; j < efficientCars.length - 1; j++) {
        for (let k = 0; k < efficientCars.length - 1 - j; k++) {
            if (efficientCars[k].fuelConsumption > efficientCars[k + 1].fuelConsumption) {
                // Обмінюємо місцями
                const temp = efficientCars[k];
                efficientCars[k] = efficientCars[k + 1];
                efficientCars[k + 1] = temp;
            }
        }
    }

    return efficientCars; // Повертаємо масив найбільш економічних машин
}

/*
// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); 

console.log(getMostFuelEfficientCars(cars, 'Honda')); 

console.log(getMostFuelEfficientCars(cars, 'Audi'));  

console.log(getMostFuelEfficientCars(cars, 'Dodge'));  

console.log(getMostFuelEfficientCars(cars, 'Ford'));  
*/

module.exports = getMostFuelEfficientCars;