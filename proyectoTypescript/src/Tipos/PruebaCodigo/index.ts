export {};
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

const POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Aprender Typescript",
        createdAt: "12/05/2021",
        author: developer
    },
    {
        id: 2,
        title: "Aprender JavaScript",
        createdAt: "12/05/2021",
        author: editor
    },
    {
        id: 3,
        title: "¿Es util Typescript?",
        createdAt: "12/05/2021",
        author: admin
    }
]
type EditedPost = {
    oldPost: BlogPost,
    edittedBy: Person,
    edittedAt: number,
    newPost: BlogPost
}
const postLog: Record<number, EditedPost> = {}

function isAdmin(person: Person){
    
    const [role,roleName] = person.role

    return role === 1 && roleName === 'Admin'
}

function notHasPermissionLog({name, role}: Person,{title}: BlogPost){
    console.log("User "+name+" with the role "+role[1]+" has no permission")
}

for(let index = 0; index<POSTS.length; index++){
    const post = POSTS[index]
    if(isAdmin(post.author)){
        if(!(post.id in postLog)){
            const copyPost = JSON.parse(JSON.stringify(post))
            copyPost.title = '¿Es realmente TypeScript util?'
            copyPost.author = admin

            const editedPost: EditedPost = {
                oldPost: post,
                edittedBy: admin,
                edittedAt: Date.now(),
                newPost: copyPost
            }
            postLog[post.id] = editedPost
            postLog[post.id].oldPost = post
            postLog[post.id].edittedBy = admin
            postLog[post.id].edittedAt = Date.now()
            
        }
    } else {

    }
}
