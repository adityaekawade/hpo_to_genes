const { exec } = require("child_process");

function convertHpoDataToJSON(){
    return new Promise((resolve, reject) => {
        exec("cp data/hpoData.txt data/hpoData.json", (error, stdout, stderr) => {
            if (error) {
                reject(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve("hpoData.txt converted to hpoData.json")
        });
    })
}

module.exports = convertHpoDataToJSON; 