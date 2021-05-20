#! /bin/bash

echo "Running index.sh"

# Create the required directories
echo "Creating data and output_files directories"
mkdir data 
mkdir output_files


# Install dependencies 
echo "Installing npm dependencies"
npm install 


# Curl and get the updated data
# Download link from website: https://hpo.jax.org/app/download/annotation
echo "Fetching the updated data"
curl https://ci.monarchinitiative.org/view/hpo/job/hpo.annotations/lastSuccessfulBuild/artifact/rare-diseases/util/annotation/phenotype_to_genes.txt > data/phenotype_to_genes.tsv


# Clean the data
cd data
cut -f1,2,3,4,7 phenotype_to_genes.tsv > hpo.txt
cd ..


# Run the node.js script 
echo "Creating required files"
node index