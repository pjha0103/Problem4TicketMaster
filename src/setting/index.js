//const localServerURL ='http://localhost:5000'; //for nodemon
//const remoteServerURL= 'https://jsonplaceholder.typicode.com';
//for fake API
const remoteServerURL= 'https://app.ticketmaster.com';

let defaultServerURL= remoteServerURL;
function getServerURL(){
  const loc = String (document.location);

  if(!loc.includes('localhost')){
    defaultServerURL= '';
  }
   return defaultServerURL;
}

 /*function getBaseName(){
  const loc= String (document.location);

  let baseName= '';

  if(!loc.includes('localhost')){
    baseName='wwdr_newadmin'
  }
  return baseName;
} */

//export {getServerURL, getBaseName};
export {getServerURL};
