// Есть склад, массив товаров.
// Товар имеет свойства - список категорий, цену, название.
// Нужно, создать 2 функции для преобразования:
// 1. Фильтр - простой список товаров, фильтровать по определённой категории, выбирать нужную категорию propmt-ом.
// В propmt-е отобразить названия возможных категорий, дубликаты удалять.
// 2. Группировка - список с группировкой по категории. Показывать один и тот же товар в разных группах
// (если он им пренадлежит).

let items = [
    { category: ['D', 'B'], price: 25, name: "Some product1" },
    { category: ['A'], price: 20, name: "Some product2" },
    { category: ['C'], price: 30, name: "Some product3" },
    { category: ['A', 'C'], price: 35, name: "Some product4" },
    { category: ['D'], price: 5, name: "Some product5" },
    { category: ['C'], price: 15, name: "Some product6" }
];

let avaliableCategories = new Set();

const formListOfCategories = (itemsList) => {
    for (let val of items) {
        if (Array.isArray(val.category)){
            for (let i of val.category) {
                itemsList.add(i);
            }
        } else {
            itemsList.add(val.category);
        }
    }
    return itemsList;
}

let namesList = Array.from(formListOfCategories(avaliableCategories));

// console.log(`For prompt: ${Array.from(list)}`);
// console.log(namesList);
let category = 'A';

const filterItems = (category) => {
    return items.filter(key => String(key.category).includes(category));
}

// console.log(filterItems(category));

const groupByCategory = (itemsList) => {
    let groupedList = {};
    for (let categoryName of namesList) {
        for (goods of itemsList) {
            for (let value of goods.category) {
                if (value === categoryName) {
                    if (goods.category in groupedList) {
                        groupedList[categoryName].push([goods.name, goods.price]);
                    }
                    else {
                        groupedList[categoryName] = [[goods.name, goods.price]];
                    }
                }
            }
        }
    }

    return groupedList;
}

console.log(groupByCategory(items));