// Genericos: Ahorro de codigo

function id<T>(arg: T): T{
return arg
}

function ida<T, X>(arg: T,X): T{
    return arg
    }

const str = id<string>("one")
const bol = id<boolean>(true)

const combi = ida<boolean, string>(true, "")


class Generic<T>{
    public item: T[] = []
}

const inst  = new Generic<number>()
const inst2  = new Generic<string>()

inst.item.push(2)
inst2.item.push("dos")