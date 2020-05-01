#! /bin/bash

# Curl and get the updated data
curl http://compbio.charite.de/jenkins/job/hpo.annotations/lastSuccessfulBuild/artifact/util/annotation/phenotype_to_genes.txt > data/phenotype_to_genes.tsv

# Clean the data
cd data
cut -f1,2,3,4,7 phenotype_to_genes.tsv > hpo.txt
cd ..

node index