
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Auth {
  token: ID!
  user: User
}

type User {
    _id: ID
    username: String
    email: String
    password: String

}
type Horse {
    _id: ID
    name: String
    ownerName: String
    ownerPhone: String
    feed: String
    vaccineDate: String
    shoeDate: String
    barnName: String
}

type updateHorse {
    _id: ID
    name: String
    ownerName: String
    ownerPhone: String
    feed: String
    vaccineDate: String
    shoeDate: String
    barnName: String
}
type Schedule{
    _id: ID
    visitDay: String
    visitMonth:String
    visitYear:String
    visitReason:String
    horseName:String
    ownerName: String
    

}

type updateSchedule{
    _id: ID
    visitDay: String
    visitMonth:String
    visitYear:String
    visitReason:String
    horseName:String
    ownerName: String
    

}

type Query {
me: User
Users: [User]
User(username: String!): User
Horse(_id: ID!): Horse
Horses(ownerName: String!): [Horse]
HorseDate(visitReason: String): [Horse]
Schedule: [Schedule]
OwnerSchedule(ownerName: String): [Schedule]
HorseSchedule(horseName: String): [Schedule]




}

type Mutation {
     login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addHorse(name: String!, ownerName: String!, ownerPhone: String!, feed: String!,
     vaccineDate: String!, shoeDate:String!, barnName:String!): Horse
  updateHorse(_id: ID!, name: String, ownerName: String, ownerPhone: String, feed: String
    vaccineDate: String, shoeDate:String, barnName:String): Horse
    deleteHorse(_id: ID!): Horse
    addSchedule(visitDay: String!, visitMonth: String!, visitYear: String!, visitReason: String! horseName: String!, ownerName: String!): Schedule
    updateSchedule(_id: ID!, visitDay: String, visitMonth: String, visitYear: String, visitReason: String horseName: String, ownerName: String):Schedule
    deleteSchedule(_id:ID!): Schedule
  }`
;

module.exports= typeDefs
