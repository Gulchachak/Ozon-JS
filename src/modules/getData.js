const getData = (str) => {

  return fetch(
    `https://ozon-js-9d57a-default-rtdb.firebaseio.com/goods.json`
  ).then((response) => {
    return response.json();
  });
    
};

export default getData;
