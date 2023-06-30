const getElementDistanceFromTop = (element) => {
    let distance = 0;
    while (element) {
      distance += element.offsetTop;
      element = element.offsetParent;
    }
    return distance;
};

export { getElementDistanceFromTop }