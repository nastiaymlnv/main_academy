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

const setListOptions = () => {
	for (let name of namesList) {
		console.log(name);
	}
}

const avaliableCategoriesList = () => {
    const selector = document.querySelector('.avaliableOptions');
    for (let item of namesList) {
        let option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        selector.append(option);
    }
}

avaliableCategoriesList();

let category = '';

const filterItems = (category) => {
    return items.filter(key => String(key.category).includes(category));
}

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

let display = document.querySelector('.display');

const nonFilteredList = (items) => {
	display.innerHTML = '';
	for (let item of items) {
        let list = document.createElement('h3');
        list.innerHTML = "<hr>" + item.category;
        list.className = "list";
        display.append(list);
        let listItem = document.createElement('p');
        listItem.innerHTML = item.name;
        display.append(listItem);
    }
}

nonFilteredList(items);

const categoriesList = () => {
	display.innerHTML = '';
    const groupedList = groupByCategory(items);
    for (let item in groupedList) {
        let list = document.createElement('ul');
        list.className = "list";
        list.innerHTML = "<hr> <b>" + item + "</b> <hr>";
        display.append(list);
        for (let i in groupedList[item]) {
            let listItem = document.createElement('li');
            listItem.innerHTML = groupedList[item][i];
            list.append(listItem);
        }
    }
}

const chooseCategory = (e) => {
    category = e.target.value;
    displayCategory(category);
}

const displayCategory = (category) => {
    display.innerHTML = '';
    const filteredList = filterItems(category);
    let categoryName = document.createElement('ul');
    categoryName.className = "list";
    categoryName.innerHTML = "<b>" + category + "</b>";
    display.append(categoryName);
    for (let filmName of filteredList) {
        let name = document.createElement('li');
        name.innerHTML = filmName.name;
        categoryName.append(name);
    }
}
