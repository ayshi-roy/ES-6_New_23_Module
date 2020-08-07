const person = {name: "Oyshi", phone: 01928295144, address: "Khulna", age:22};

const name = person.name;
//bisal object r modhe theke kisu object r property k include kora sohoj upai
const {phone,address,age} = person;
//console.log(name, phone ,address,age);

//array destructure
const friend = ['sadia','achol','sonia','akhi','fariha','sefa','taskin'];
const [first,second, ...remainFriend] = friend;
//console.log(first,second);
//console.log(remainFriend);

const complexObject = {
    name: 'abc',
    info: {
        address:'gopalgonj',
        leader:'bisnu'
    }
} 
const {leader} = complexObject.info;
console.log(leader);