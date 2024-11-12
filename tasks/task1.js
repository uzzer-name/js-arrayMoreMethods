// Задача 1: Написати функцію, яка повертає найпопулярніші товарні категорії на основі продажів.
// Спочатку фільтруємо товари, які продані більше 5 разів, потім сортуємо їх за кількістю продажів,
// а потім залишаємо тільки унікальні категорії товарів.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort. Для того щоб залишити лише унікальні категорії товарів можна використати конструкцію new Set, або використати метод filter()/indexOf()/forEach()"

function getPopularCategories(products) {
    // Фільтруємо товари, які продані більше 5 разів
    const filteredProducts = products.filter(products => products.sales > 5);

    // Сортуємо товари за кількістю продажів
    const sortedProducts = filteredProducts.sort((a, b) => b.sales - a.sales);

    // Отримуємо категорії товарів
    const categories = sortedProducts.map(products => products.category);

    // Використовуємо Set для отримання унікальних категорій
    const uniqueCategories = Array.from(new Set(categories));

    return uniqueCategories;
}

// Приклад використання:
/*
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']
*/

module.exports = getPopularCategories;