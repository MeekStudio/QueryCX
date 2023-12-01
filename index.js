require('dotenv').config();

const { MongoClient } = require('mongodb');
const connectionString = process.env.QUERYCX_CONNECTION_STRING;
const mongoClient = new MongoClient(connectionString);

class Query {
    constructor({database, collection} = {}){
        this.database = mongoClient.db(database);
        this.collection = this.database.collection(collection);
    }

    async dropIndex(field){
        return this.collection.dropIndex(field, {unique: true})
    }

    async listIndexes(){
        const result = await this.collection.listIndexes().toArray();
        
        console.log("Existing indexes:\n");
        for(const doc in result){
            console.log(doc);
        }
    }

    async countDocuments(filter){
        const promise = new Promise(((resolve, reject) => {
            this.collection.countDocuments(filter)
                .then(resolve)
                .catch(reject)

        }))

        return promise;
    }

    

    async createIndex(field){
        const promise = new Promise(((resolve, reject) => {
            const options = {unique: true};

            this.collection.createIndex({[field]: 1}, options)
                .then(resolve)
                .catch(reject)
        }))
        
        return promise;
    }

    insertOne(document){
        
        const promise = new Promise((resolve, reject) => {
            
            if(!document){
                reject(new Error("MISSING_DOCUMENT"))
            }

            this.collection.insertOne(document)
                .then(resolve)
                .catch(reject)

        })

        return promise;
    }

    updateOne(filter, docFrag){
        
        const promise = new Promise((resolve, reject) => {
            
            if(!docFrag){
                reject(new Error("MISSING_DOCUMENT"))
            }

            this.collection.updateOne(filter, docFrag)
                .then(resolve)
                .catch(reject)

        })

        return promise;
    }

    findOne(filter){
        
        const promise = new Promise((resolve, reject) => {
            
            if(!filter){
                reject(new Error("MISSING_FILTER"))
            }

            this.collection.findOne(filter)
                .then(resolve)
                .catch(reject)

        })

        return promise;
    }
    
}

module.exports = { Query }