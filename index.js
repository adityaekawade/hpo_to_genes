const organizeRawData = require('./organizeRawData'); 
const convertHpoDataToJSON = require('./convertHpoDataToJSON'); 
const getHpoGenes = require('./getHpoGenes'); 
const getHpoTermsData = require('./getHpoTermsData'); 
const getListOfTermsAndIds = require('./getListOfTermsAndIds'); 

var output = organizeRawData(); 
output.then(res => {
    return convertHpoDataToJSON(); 
}).then(response => {
    return getHpoGenes(); 
}).then(response => {
    return getHpoTermsData();  
}).then(response => {
    return getListOfTermsAndIds();
}).then(response => {
    console.log("All files have been successfully created"); 
}).catch(error => {
    console.log(error); 
})
