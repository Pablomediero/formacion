// Union: Unir varios tipos

type PersonName = {
    name: string;
}

type PersonAge = {
    age:number;
}

type Pers = PersonName & PersonAge;


const persona: Pers = {
    name: "Pench",
    age: 20,

}