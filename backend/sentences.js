//SIGN UP
db.users.insert(
    { name: 'Santiago',
    surname: 'Betancur Graciano',
    email: 'sbetagra13@gmail.com',
    password: 'SANtiago13'
});

db.users.insert(
    { name: 'Jacobo',
    surname: 'Garcés Oquendo',
    email: 'jacobogo@gmail.com',
    password: 'JAcobo1234'
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
    priority: 1,
    urlimage: 'reu.jpeg',
    expdate: '15/02/2021',
    user: "602b480dba6be7b40cf07e05"
});

db.tasks.insert(
    { taskname: 'Lectura de libro',
    priority: 3,
    urlimage: 'book.jpeg',
    expdate: '15/02/2021',
    user:"602b480dba6be7b40cf07e05"
});
//local user id
//6028566addc2dae124360c47

db.tasks.insert(
    { taskname: 'Prueba matemática',
    priority: 2,
    urlimage: 'math.jpeg',
    expdate: '15/02/2021',
    user:"602b4814ba6be7b40cf07e06"
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

db.tasks.remove({_id:ObjectId("602b4829ba6be7b40cf07e08")});
