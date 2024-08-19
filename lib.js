const calcAddition = (v1, v2) => {
  return v1 + v2;
};

const textElement = document.querySelector("#text");
textElement.innerHTML = calcAddition(5, 3);
