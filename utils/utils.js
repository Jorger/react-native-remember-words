export const clrs = {
    black   : 'black', 
    white   : 'white', 
    blue    : 'blue', 
    red     : 'red', 
    gray    : 'gray', 
    pink    : 'pink', 
    mauve   : '#b68cb8', 
    cyan    : '#00BCD4'
};

//Mostrar la primera letra en mayúscula...
export const convert_case = (str) => {
  let lower = str.toLowerCase();
  return lower.replace(/(^| )(\w)/g, (x) =>  x.toUpperCase());
};