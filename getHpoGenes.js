const fs = require('fs');
const jf = require('jsonfile');
const jsonFormat = require('json-format')

function getHpoGenes(){
    return new Promise((resolve, reject) => {
        jf.readFile('./data/hpoData.json', function (err, data) {
            if(err){
                reject("error getting the file")
            }
            var hpo_obj = {};
            console.log("data", data[data.length-1])
            data.map(obj => {
                if (obj.hpo_id !== ''){
                    if (hpo_obj[obj.hpo_id] === undefined) {
                        hpo_obj[obj.hpo_id] = {
                            gene_symbol: [obj.gene_symbol],
                            hpo_id: obj.hpo_id,
                            phenotype_term: obj.phenotype_term
                        }
                    }
                    else {
                        var x = hpo_obj[obj.hpo_id];
                        if (!x.gene_symbol.includes(obj.gene_symbol)) {
                            x.gene_symbol.push(obj.gene_symbol)
                        }
                    }
                }
            })

            var config = {
                type: 'space',
                size: 2
            }

            fs.writeFile('output_files/hpo_genes.json', jsonFormat(hpo_obj, config), function (err) {
                if (err) throw err;
                resolve("file hpo_genes added successfully!")
            });
        });
    })
}

module.exports = getHpoGenes; 

