const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Report",
        "description": "Prepare the monthly financial report",
        "date": "2025-09-20",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Weekly sync with project team",
        "date": "2025-09-21",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Database",
        "description": "Migrate user data to new schema",
        "date": "2025-09-22",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix Bug #342",
        "description": "Resolve API response mismatch issue",
        "date": "2025-09-19",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Call",
        "description": "Discuss requirements with client",
        "date": "2025-09-20",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Testing Module",
        "description": "Perform unit tests on new features",
        "date": "2025-09-23",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Mockup",
        "description": "Create mockups for landing page",
        "date": "2025-09-19",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review PRs from the frontend team",
        "date": "2025-09-20",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Documentation",
        "description": "Update project documentation",
        "date": "2025-09-22",
        "category": "Docs",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Security Patch",
        "description": "Apply security updates to servers",
        "date": "2025-09-18",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "System Backup",
        "description": "Run full system backup",
        "date": "2025-09-19",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy App",
        "description": "Deploy the latest version to production",
        "date": "2025-09-21",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Market Research",
        "description": "Research on competitor products",
        "date": "2025-09-18",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Blog",
        "description": "Write blog post about new feature",
        "date": "2025-09-20",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "SEO Audit",
        "description": "Check and optimize site SEO",
        "date": "2025-09-22",
        "category": "SEO",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

  export const setLocalStorage = ()=>{
   localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage=()=>{
 const employee = JSON.parse(localStorage.getItem('employees'))
 const admin = JSON.parse(localStorage.getItem('admin'))
 console.log(employee,admin)
}