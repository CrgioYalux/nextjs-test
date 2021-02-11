const ShuffleArray = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getOnly = (qtyItems, fromArray) => {
  const newArray = []
  for(let i=0; i<qtyItems; i++){
    newArray.push(fromArray[i])
  }
  return newArray
}

const getRandomImgs = async (qty, images) => {
    const rawArrayofImgs = images   
    const only100Imgs = getOnly(100, rawArrayofImgs)
    const shuffledArray = ShuffleArray(only100Imgs)
    const onlyQtyImgs = getOnly(qty, shuffledArray)
    const onlySources = onlyQtyImgs.reduce((acc, img) => [...acc, img.url], [])
    return onlySources
}

export default getRandomImgs