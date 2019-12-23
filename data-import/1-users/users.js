
const names = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];
const min = 18;
const max = 100;

module.exports = names.map(name => ({
    username: name,
    password: 123456,
    name: name
}))