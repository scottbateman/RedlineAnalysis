mongo "mongodb+srv://cluster0-lnoo1.mongodb.net/test" --username admin --password 4AnB1q3z8m3vZFOV validation.js

mongoexport --host Cluster0-shard-0/cluster0-shard-00-00-lnoo1.mongodb.net:27017,cluster0-shard-00-01-lnoo1.mongodb.net:27017,cluster0-shard-00-02-lnoo1.mongodb.net:27017 --ssl --username admin --password 4AnB1q3z8m3vZFOV --authenticationDatabase admin --db redline --collection trial_validation --type csv --out trial_validation.csv --fields csvFields.txt

mongoexport --host Cluster0-shard-0/cluster0-shard-00-00-lnoo1.mongodb.net:27017,cluster0-shard-00-01-lnoo1.mongodb.net:27017,cluster0-shard-00-02-lnoo1.mongodb.net:27017 --ssl --username admin --password 4AnB1q3z8m3vZFOV --authenticationDatabase admin --db redline --collection atomic_validation --type csv --out atomic_validation.csv --fields csvFields.txt
