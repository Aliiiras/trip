const flattenObject = (obj, delimiter = ".", prefix = "") => {
    const flattObject = Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? `${prefix}${delimiter}` : "";
      if (
        typeof obj[k] === "object" &&
        obj[k] !== null &&
        Object.keys(obj[k]).length > 0
      )
        Object.assign(acc, flattenObject(obj[k], delimiter, k));
      else acc[k] = obj[k];
      return acc;
    }, {});
  
    return flattObject;
  };
  
  const DateToIso = (date) => new Date(date).toISOString();
  
  export { flattenObject, DateToIso };
  
  
  export const getImagePath = (path) => {
    if(path.startsWith('http://') || path.startsWith('https://')){
      return path
    }
    const BASE_PATH = '/assets/images';
    return `${BASE_PATH}/${path}`; 
  };