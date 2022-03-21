const user = {}
// if(user?.address?.street?.name === 'Plaza España'){
   
// }

const item: null = null

function f(StringNull: string | null):string{

    if(StringNull === null){
        return "NULL"
    }

    return StringNull
}

// RESUMEN

function fN(StringNull: string | null):string{


    return StringNull ?? "NULL"
}