const getElementDistanceFromTop = (element: HTMLElement | Element | null) => {
    let distance = 0;
    while (element instanceof HTMLElement) {
      distance += element.offsetTop;
      element = element.offsetParent;
    }
    return distance;
};

export { getElementDistanceFromTop }