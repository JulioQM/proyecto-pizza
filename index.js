//const {db} =require("./cnn");
const express=require('express');
const bodyParser=require('body-parser');
const {graphqlExpress ,graphiqlExpress}=require('graphql-server-express');
// PUERTO DE CONECCION
const PORT =3000;
const endPoint='pizza_api'
const shema={};
//
let server =express();

server.use(endPoint,bodyParser.json(),graphqlExpress({
shema
//endpointURL:endPoint,
}));
server.use('/graphiql',graphiqlExpress({
    endpointURL:endPoint,
}));
server.listen(PORT,() => {
   // console.log("Server Ejecutando")
    console.log('GraphQL API listen in http://localhost:' + PORT + endPoint);
    console.log('GraphiQL listen in http://localhost:' + PORT + '/graphiql');
})
console.log("OK!!")

