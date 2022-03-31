// Есть склад, массив товаров.
// Товар имеет свойства - список категорий, цену, название.
// Нужно, создать 2 функции для преобразования:
// 1. Фильтр - простой список товаров, фильтровать по определённой категории, выбирать нужную категорию propmt-ом.
// В propmt-е отобразить названия возможных категорий, дубликаты удалять.
// 2. Группировка - список с группировкой по категории. Показывать один и тот же товар в разных группах
// (если он им пренадлежит).

let items = [
    { category: ['Action', 'Adventure'], name: "Logan" },
    { category: ['Fantasy'], name: "Thor" },
    { category: ['Science fiction'], name: "Star Wars" },
    { category: ['Adventure'], name: "The Jungle Book" },
    { category: ['Fantasy', 'Science fiction'], name: "Black Panther" },
    { category: ['Action'], name: "Face/Off" },
    { category: ['Action', 'Adventure'], name: "Incredibles 2" },
    { category: ['Science fiction'], name: "The Matrix" }
];

let avaliableCategories = new Set();

const formListOfCategories = (itemsList) => {
    for (let val of items) {
        for (let i of val.category) {
            itemsList.add(i);
        }
    }
    return itemsList;
}

let namesList = Array.from(formListOfCategories(avaliableCategories));

// console.log(`For prompt: ${namesList}`);
// console.log(namesList);
let category = 'Action';

const filterItems = (category) => {
    return items.filter(key => String(key.category).includes(category));
}

// console.log(filterItems(category));

const groupByCategory = (itemsList) => {
    let groupedList = {};
    for (let categoryName of namesList) {
        for (let goods of itemsList) {
            if (goods.category.length > 1) {
                for (let name of goods.category) {
                    if (categoryName === name) {
                        if (name in groupedList) {
                            groupedList[name].push(goods.name);
                        } else {
                            groupedList[name] = [goods.name];
                        }
                    }
                }
            }
            else {
                if (categoryName === goods.category[0]) {
                    if (goods.category[0] in groupedList) {
                        groupedList[goods.category[0]].push(goods.name);
                    } else {
                        groupedList[goods.category[0]] = [goods.name];
                    }
                }
            }
        }
    }
    return groupedList;
}

console.log(groupByCategory(items));