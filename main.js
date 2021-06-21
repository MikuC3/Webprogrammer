let obj = {
    name: "Worachit",
    lastname: "Toto",
    age: 20,
    Salary: 2000,
}

let obj2 = {
    name: "Alen",
    lastname: "Smith",
    age: 25,
    Salary: 3000,
}

const showdata = ({name, lastname, arg, salary}) =>`สวัสดีคุณ ${name} ${lastname}
ขณะนี้คุณมีอายุ ${age}
เงินเดือนของคุณเท่ากับ ${salary}`;

console.log(showdata(obj));
console.log(showdata(obj2));


const fun = (x, y, z) => x + y + z;

let num = [5, 6, 7];

let res = fun(...num);

console.log(res);