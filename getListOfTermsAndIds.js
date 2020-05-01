var fs = require('fs');
var jf = require('jsonfile');
var jsonFormat = require('json-format')

function getListOfTermsAndIds(){
    return new Promise((resolve, reject) => {
        jf.readFile('output_files/hpo_genes.json', 'utf8', function (err, obj) {
            if(err){
                reject("error getting the file")
            }
            var hpo_ids = [];
            var phenotype_terms = [];

            for (var prop in obj) {
                hpo_ids.push(obj[prop].hpo_id);
                phenotype_terms.push(obj[prop].phenotype_term)
            }

            var file_ids = fs.createWriteStream('output_files/hpo_ids.txt');
            file_ids.on('error', function (err) { console.log(err) });
            hpo_ids.forEach(function (ids) { file_ids.write('"' + ids + '",' + '\n'); });
            file_ids.end();

            var file_terms = fs.createWriteStream('output_files/phenotype_terms.txt');
            file_terms.on('error', function (err) { console.log(err) });
            phenotype_terms.forEach(function (terms) { file_terms.write('"' + terms + '",' + '\n'); });
            file_terms.end();
        });

    }); 
}

module.exports = getListOfTermsAndIds; 
