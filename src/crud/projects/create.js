let projects = [
        {    
          id: 1,
          name: "DiData",
          description: "project has the tasks of DiData.",
          todosList: [
              {
                  id: 1,
                  name : "Frontend",
                  description : "frontend tasks & todos",
                  todos: [
                      {
                          id: 1,
                          title: 'html',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'css',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'JavaScript',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'VueJS',
                          completed: true,
                      },
                  ]  
              },{
                  id: 2,
                  name : "Backend",
                  description : "backend tasks & todos",
                  todos: [
                      {
                          id: 1,
                          title: 'php',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Laravel',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'API',
                          completed: false,
                      },
                      {
                          id: 4,
                          title: 'Unittest',
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
          name: "University",
          description: "project has the Todos of my study.",
          todosList: [
            {
                  id: 1,
                  name : "Network Administation",
                  description : "network tasks",
                  todos: [
                      {
                          id: 1,
                          title: 'TP 01',
                          completed: true,
                      },
                      {
                          id: 2,
                          title: 'Chapter 01',
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
                  name : "Web Services",
                  description : "Web Services tasks",
                  todos: [
                      {
                          id: 1,
                          title: 'Coure 01',
                          completed: false,
                      },
                      {
                          id: 2,
                          title: 'Cour 02',
                          completed: true,
                      },
                      {
                          id: 3,
                          title: 'TP 01',
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
                  name : "DATABASE",
                  description : "database tasks and TPs",
                  todos: [
                      {
                          id: 1,
                          title: 'TP 01',
                          completed: false,
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