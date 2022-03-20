type Person = {
    name: string;
    lastName: string;
    role: [number, string]
}

const admin: Person = {
    name: "Administrador",
    lastName: "123",
    role: [1, 'Admin']
}

const developer: Person = {
    name: 'Pablo',
    lastName: "Mediero",
    role: [2, 'Developer']
}

const editor: Person = {
    name: 'Raul',
    lastName: "Castro",
    role: [3, 'Editor']
}

type BlogPost = {
    id: number;
    title: string;
    createdAt: string;
    author: Person;
}

const POSTS: BlogPost[] = {
    {
        id: 1,
        title: "Aprender Typescript",
        createdAt: "12/05/2021",
        author: developer
    },
    {
        id: 2,
        title: "Aprender Typescript",
        createdAt: "12/05/2021",
        author: editor
    },
    {
        id: 3,
        title: "Aprender Typescript",
        createdAt: "12/05/2021",
        author: admin
    }
}