const fs = require('fs');
var jsonFormat = require('json-format');

function organizeRawData(){
    return new Promise((resolve, reject) => {
        let data = fs.readFile('./data/hpo.txt', 'utf8', (err, res) => {
            var r = [];
            var result = [];
            res.split("\n").forEach(function (rec) {
                var fields = rec.split("\t");
                var diseaseId = fields[4];
                var gene_symbol = fields[3];
                var gene_id = fields[2];
                var hpo_id = fields[0];
                var phenotype_term = fields[1];
                result.push({
                    "diseaseId": diseaseId,
                    "gene_symbol": gene_symbol,
                    "gene_id": gene_id,
                    "hpo_id": hpo_id,
                    "phenotype_term": phenotype_term
                });
            })

            result.shift();
            var stringifiedJSON = JSON.stringify(result);

            fs.writeFile('./data/hpoData.txt', stringifiedJSON, 'utf8', function (error) {
                if (error) {
                    reject("failed to create the file", error)
                }
                resolve("file was saved ")
            });
        })
    })

}

module.exports = organizeRawData; 