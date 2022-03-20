// OR: condicional de tipos

type PersonNameOr = {
    name: string;
}

type PersonAgeOr = {
    age:number;
}

type PersOr = PersonName | PersonAge;


const personaOr: PersOr = {
    name: "Pench"

}