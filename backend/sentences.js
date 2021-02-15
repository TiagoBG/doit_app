//SIGN UP
db.users.insert(
    { name: 'Santiago',
    surename: 'Betancur Graciano',
    email: 'sbetagra13@gmail.com',
    password: 'SANtiago13'
});


//SHOW USERS
db.users.find().pretty()


//DELETE USER
db.users.remove(
    {name:"Carlos"},
    {justOne:true}    
);



//LOG IN


//NEW TASK
db.tasks.insert(
    { taskname: 'Reunión ',
    priority: 'High',
    urlimage: 'reu.jpeg',
    expdate: '15/02/2021',
    user: "6028566addc2dae124360c47"
});

db.tasks.insert(
    { taskname: 'Lectura de libro',
    priority: 'Low',
    urlimage: 'book.jpeg',
    expdate: '15/02/2021',
    user:"6028566addc2dae124360c47"
});

//SHOW TASKS
db.tasks.find(
    { user:"6028566addc2dae124360c47"}
);


//EDIT TASK



//DELETE TASKS
db.tasks.remove(
    {priority:"High"},
    {justOne:true}    
);