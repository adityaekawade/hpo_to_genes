var fs = require('fs');
var jf = require('jsonfile');
var jsonFormat = require('json-format')

function getHpoTermsData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                jf.readFile('./output_files/hpo_genes.json', 'utf8', function (err, obj) {
                    if (err) {
                        reject("file not found")
                    }
                    var data = [];

                    for (var prop in obj) {
                        data.push({
                            "HPO_Data": `${obj[prop].phenotype_term} - [ ${obj[prop].hpo_id} ] `
                        })
                    }
                    var hpoTermsData = {
                        "data": data
                    };

                    var config = {
                        type: 'space',
                        size: 2
                    }

                    fs.writeFile('./output_files/HpoTermsData.json', jsonFormat(hpoTermsData, config), function (err) {
                        if (err) throw err;
                        resolve("HpoTermsData.json was saved")
                    });
                });
            },5000); 

        })
}

module.exports = getHpoTermsData; 

