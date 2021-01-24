let projects = [
        {    
          id: 1,
          name: "project 1",
          description: "desc 1",
          todosList: [
              {
                  id: 1,
                  name : "Todos Name 1",
                  description : "Todos Description 1",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 1 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'project 1 list 1 todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 2,
                  name : "Todos Name 2",
                  description : "Todos Description 2",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 2 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 3,
                  name : "Todos Name 3",
                  description : "Todos Description 3",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 3 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 4,
                  name : "Todos Name 4",
                  description : "Todos Description 4",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 4 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 5,
                  name : "Todos Name 5",
                  description : "Todos Description 5",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 5 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 6,
                  name : "Todos Name 6",
                  description : "Todos Description 6",
                  todos: [
                      {
                          id: 1,
                          title: 'project 1 list 6 todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ] 
              },
          ] 
          },{
          id: 2,
          name: "projects 2",
          description: "desc 222",
          todosList: [
            {
                  id: 1,
                  name : "Todos Name 1",
                  description : "Todos Description 1",
                  todos: [
                      {
                          id: 1,
                          title: 'project 2 list 1 todo 1',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 2,
                  name : "Todos Name 2",
                  description : "Todos Description 2",
                  todos: [
                      {
                          id: 1,
                          title: 'project 2 list 2 todo 1',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 3,
                  name : "Todos Name 3",
                  description : "Todos Description 3",
                  todos: [
                      {
                          id: 1,
                          title: 'project 2 list 3 todo 1',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'project 2 list 3 todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'project 2 list 3 todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'project 2 list 3 todo four',
                          completed: true,
                      },
                  ]  
              },{
                  id: 4,
                  name : "Todos Name 3",
                  description : "Todos Description 3",
                  todos: [
                      {
                          id: 1,
                          title: 'Todo One',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Todo Two',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'Todo Three',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Todo four',
                          completed: true,
                      },
                  ]  
              }
          ]   
        },
    ];

function createProjectsList(){
    if( localStorage.getItem('projects') === null ){
        localStorage.setItem('projects', JSON.stringify(projects));
    } 
}

createProjectsList();      