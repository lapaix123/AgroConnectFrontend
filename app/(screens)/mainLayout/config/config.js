

const devEnvironment = {
    API_BASE_URL: 'http://localhost:3000/api', 
  };
  
  const prodEnvironment = {
    API_BASE_URL: '', 
  };
  
  const getConfig = () => {
    if (__DEV__) {
      return devEnvironment;
    } else {
      return prodEnvironment;
    }
  };
  
  export default getConfig();

  
  