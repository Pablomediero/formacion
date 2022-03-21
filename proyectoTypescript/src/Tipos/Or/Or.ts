// OR: condicional de tipos

type PersonNameOr = {
    name: string;
}

type PersonAgeOr = {
    age:number;
}

type PersOr = PersonNameOr | PersonAgeOr;


const personaOr: PersOr = {
    name: "Pench"

}