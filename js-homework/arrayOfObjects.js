
let litmir = [
    {author: 'Хэленка', title: 'Улетела сказка'},
    {author: 'Коул Кресли', title: 'Восстание Аркан'},
    {author: 'Райчел Мид', title: 'Золотая лилия'}
];

const sortObject = (list) => {
    return list.sort((a, b) => a.title > b.title ? 1 : -1);
}

console.log(sortObject(litmir));