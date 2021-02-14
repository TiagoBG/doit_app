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
    { task: 'Ejercicio',
    assignee: 'Santiago Betancur Graciano',
    priority: 'Mid',
    image: 'doda.jpeg',
    expdate: '15/02/2021'
});


//SHOW TASKS
db.tasks.find().pretty()


//EDIT TASK



//DELETE TASKS