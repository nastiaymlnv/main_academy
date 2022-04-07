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
        list.className = "nonFilteredList";
        display.append(list);
        let listItem = document.createElement('p');
        listItem.innerHTML = item.name;
        display.append(listItem);
    }
}

nonFilteredList(items);

const categoriesList = () => {
	display.innerHTML = '';
    let searchWindow = `<div class='itemSearcher'>
                            <h3 class='itemSearcherTitle'> Search film </h3>
                            <input class='itemSearcherWindow' type='text' placeholder='Enter film name'>
                            <div class='searchResults'></div>
                        </div>`;
    let accordeonCondition = `<div class='accordeonCondition'>
                                <h3> Click to open or close all categories →</h3>
                                <div class='toggler'>
                                    <img src='./img/arrow-up.svg'>
                                    <img src='./img/arrow-down.svg'>
                                </div>
                            </div>`;
    display.innerHTML += searchWindow;
    display.innerHTML += accordeonCondition;

    document.querySelector('.itemSearcherWindow')
        .addEventListener('input', (e) => {
            let resultsArr = [];
            const itemsArr = document.querySelectorAll('.categoryList');
            for (let test of itemsArr) {
                for (let k = 1; k < test.children.length; k++) {
                    resultsArr.push(test.children[k]);
                }
            }
            for (let i = 0; i < resultsArr.length; i++) {
                if(resultsArr[i].innerText.toLowerCase().indexOf(e.target.value) === 0) {
                    resultsArr[i].hidden = false;
                } else {
                    resultsArr[i].hidden = true;
                }
            }
        }
        );


    const checkCategoriesCondition = (e) => {
        if (e.target.nodeName !== "IMG") { return ;}
        let conditionsArr = [];

        for (let i of  document.querySelector(".display").children) {
            if (i.nodeName !== "UL") { continue; }
            if (i.firstChild.children[0].matches('.hideContentArrow')) {
                conditionsArr.push('open');
            }
            else if (i.firstChild.children[0].matches('.showContentArrow')) {
                conditionsArr.push('close');
            }
        }

        const toggleCategoriesCondition = (oldVal, newVal) => {
            for (let ul of document.querySelector(".display").children) {
                if (ul.nodeName !== "UL") { continue; }
                let ulFirstChild = ul.firstChild.children[0];

                if (ulFirstChild.classList.contains(oldVal)) {
                    ulFirstChild.classList.remove(oldVal);
                    ulFirstChild.classList.add(newVal);
                    for (let li = 1; li < ul.children.length; li++) {
                        ul.children[li].classList.toggle('hideItems');
                    }
                }
            }
        }

        if (conditionsArr.every((item) => item === 'open')) {
            toggleCategoriesCondition('hideContentArrow', 'showContentArrow');
        }
        else if (conditionsArr.every((item) => item === 'close')) {
            toggleCategoriesCondition('showContentArrow', 'hideContentArrow');
        }
        else {
            toggleCategoriesCondition('showContentArrow', 'hideContentArrow');
        }
    }

    document.querySelector('.accordeonCondition').addEventListener('click', checkCategoriesCondition);

    const groupedList = groupByCategory(items);

    for (let item in groupedList) {
        let list = document.createElement('ul');
        list.className = "categoryList";
        list.innerHTML = `<li class='categoryListItem'>
                            ${item}
                            <span class='arrow hideContentArrow'>
                            </span>
                        </li>`;
        display.append(list);

        for (let i in groupedList[item]) {
            let listItem = document.createElement('li');
            listItem.className = "categoryListItem";
            listItem.innerHTML = groupedList[item][i];
            list.append(listItem);
        }
    }

    for (let item of document.querySelectorAll('.categoryList')) {
        // accordeon
        item.firstChild.addEventListener('click', (e) => {
            if (e.target.nodeName !== "SPAN") { return ; }

            let target = e.target.closest('ul');
            let items = target.children;
            let nameList = target.firstChild.children[0];

            for (let i = 1; i < items.length; i++){
                nameList.classList.toggle('showContentArrow');
                nameList.classList.toggle('hideContentArrow');
                items[i].classList.toggle('hideItems');
            }
        });
    }
}

document.querySelector('.btn').addEventListener('click', categoriesList);

const chooseCategory = (e) => {
    const filterItems = (category) => {
        return items.filter(key => String(key.category).includes(category));
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

    category = e.target.value;
    displayCategory(category);
}
