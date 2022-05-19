const addCategory = async () => {
    const category = {name: "Films", id: "someId"};

    fetch('http://localhost:3000/categories', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
}

addCategory();