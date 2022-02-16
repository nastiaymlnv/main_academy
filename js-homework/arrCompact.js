const compact = (array) => {
    const newArr = array.filter(item => item);
    return newArr;
  }

  const data = [0, 1, false, 2, undefined, '', 3, null];
  console.log(compact(data));