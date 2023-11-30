const {Query} = require("../index.js");


const Projects = new Query({
    database: process.env.QUERYCX_DATABASE,
    collection: process.env.QUERYCX_COLLECTION
});



Projects.insertOne({
    phone: "321",
    name: "JUNE",
    email: "lee@bowyer.fr"
})
    .then(result => {
        console.log("result", result);
    })
    .catch(error => {
        console.log("error", error);
    })
/*

    Projects.findOne({name: "Lee"})
    .then(result => {
        console.log("result", result);
    })

Projects.createIndex("email")
    .then(result => {
        console.log("result", result);
    })
    .catch(error => {
        console.log("error", error);
})
*/

/*Projects.insertOne({
    title: `title-${Date.now()}`,
})*/



/*Projects.dropIndex("title_1")
.then(result => {
    console.log("result >>> ", result);
})
.catch(error => {
    console.log("error >>> ", error);
})
*/
//Projects.createIndex({ email: 1 })

/*
Projects.createIndex({ name: 1 })
    .then(result => {
        console.log("result", result);
    })
    .catch(error => {
        console.log("error", error);
    })

Projects.listIndexes();
*/


//const Lee = Projects.findOne({name: "Lee"})