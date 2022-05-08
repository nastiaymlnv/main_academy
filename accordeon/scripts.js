// const func = () => {
//     return fetch('/data.json')
//         .then(response => response.json())
//         .then(result => {
//             mainFunc(result);
//         })
//         .catch(error => console.error('Start server'));
// }

const getData = async () => {
    try {
        const response = await fetch('server/data.json');
        const result = await response.json();
        mainFunc(result);
    } catch (error) {
        console.log(error);
    }
}

getData();

const mainFunc = (list) => {
    let avaliableCategories = new Set();
    let items = list.films;

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
                for (let name of goods.category) {
                    if (categoryName === name && name in groupedList) {
                        groupedList[name].push(goods.name);
                    } else if (categoryName === name) {
                        groupedList[name] = [goods.name];
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

            for (i of document.querySelector(".display").children) {
                if (i.nodeName !== "UL") { continue; }
                conditionsArr.push(i.firstChild.children[0].classList[1]);
            }

            // console.log(conditionsArr);

            if (conditionsArr.every((item) => item === 'hideContentArrow')) {
                toggleCategoriesCondition('hideContentArrow', 'showContentArrow');
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

                let targetElem = e.target.closest('ul');
                let items = targetElem.children;
                let nameList = targetElem.firstChild.firstElementChild;
                // console.log(targetElem.firstChild.children);

                for (let i = 1; i < items.length; i++){
                    //MODIFY HERE
                    // console.log(items[i]);
                    nameList.classList.toggle('showContentArrow');
                    nameList.classList.toggle('hideContentArrow');
                    items[i].classList.toggle('hideItems');
                }
            });
        }
    }

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

    document.querySelector('.group-list').addEventListener('click', categoriesList);
    document.querySelector('.avaliableOptions').addEventListener('change', chooseCategory);

}

// Form is for adding a new film

let navButtons = document.querySelectorAll(".btn");

const showPopup = () => {
    document.querySelector('.new-item__popup').classList.add('show-popup');
    document.querySelector('.popup-bg').classList.add('show-popup-bg');
    document.body.style.overflowY = 'hidden';
    document.querySelector(".avaliableOptions").disabled = true;
    for (let i of navButtons) {
        i.disabled = true;
    }
}

const hidePopup = () => {
    document.querySelector('.new-item__popup').classList.remove('show-popup');
    document.querySelector('.popup-bg').classList.remove('show-popup-bg');
    document.body.style.overflowY = '';
    document.querySelector(".avaliableOptions").disabled = false;
    for (let i of navButtons) {
        i.disabled = false;
    }
}

document.querySelector('.add-new-item').addEventListener('click', showPopup);
document.querySelector('.cancel-btn').addEventListener('click', hidePopup);

let form = document.querySelector('.new-item-form');

const addNewFilm = (filmName, genre) => {
    let newFilm = {category: filmName, name: genre};

    fetch('http://localhost:3000/films', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFilm)
    })
}

form.onsubmit = () => {
    let values = form.elements;
    let filmName = values[0].value;
    let filmGenre = values[1].value;

    if (filmName == '' || filmGenre == '') return false;

    addNewFilm(filmName, filmGenre);
    form.reset();
    hidePopup();
    return false;
};