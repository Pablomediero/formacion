var admin = {
    name: "Administrador",
    lastName: "123",
    role: [1, 'Admin']
};
var developer = {
    name: 'Pablo',
    lastName: "Mediero",
    role: [2, 'Developer']
};
var editor = {
    name: 'Raul',
    lastName: "Castro",
    role: [3, 'Editor']
};
var POSTS = [
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
];
var postLog = {};
function isAdmin(person) {
    var _a = person.role, role = _a[0], roleName = _a[1];
    return role === 1 && roleName === 'Admin';
}
function notHasPermissionLog(_a, _b) {
    var name = _a.name, role = _a.role;
    var title = _b.title;
    console.log("User " + name + " with the role " + role[1] + " has no permission");
}
for (var index = 0; index < POSTS.length; index++) {
    var post = POSTS[index];
    if (isAdmin(post.author)) {
        if (!(post.id in postLog)) {
            var copyPost = JSON.parse(JSON.stringify(post));
            copyPost.title = '¿Es realmente TypeScript util?';
            copyPost.author = admin;
            var editedPost = {
                oldPost: post,
                edittedBy: admin,
                edittedAt: Date.now(),
                newPost: copyPost
            };
            postLog[post.id] = editedPost;
            postLog[post.id].oldPost = post;
            postLog[post.id].edittedBy = admin;
            postLog[post.id].edittedAt = Date.now();
        }
    }
    else {
    }
}
