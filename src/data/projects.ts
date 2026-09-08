export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  frontend: string;
  backend: string;
  database: string;
  apiTools: string[];
  categories: string[];
  image: string;
  screenshots: string[];
  githubUrl: string;
  liveUrl: string;
  details: {
    problem: string;
    solution: string;
    features: string[];
    architecture: string;
    contribution: string;
    challenges: string[];
    results: string;
  };
};

const placeholder = "YOUR_PROJECT_INFORMATION";

export const projects: Project[] = [

  {
  id: "dj-pulse-beats",
  name: "DJ Pearls Beed",
  description: "A full-stack DJ and event management web application built to showcase DJ services, manage event-related information, and provide users with a modern and responsive digital experience.",
  technologies: [
    "React",
    "C#",
    ".NET",
    "ASP.NET Web API",
    "REST APIs",
    "Microsoft SQL Server",
  ],
  frontend:
    "React.js — developed the responsive user interface, reusable components, pages, navigation, forms, and API-integrated frontend experience.",
  backend:
    "C# / .NET — developed the backend services and RESTful APIs responsible for application logic, data processing, and communication between the frontend and database.",

  database:
    "Microsoft SQL Server — used for storing and managing application data, with SQL Server Management Studio (SSMS) used for database management and development.",

  apiTools: [
    "REST APIs",
    "ASP.NET Web API",
    "Postman"
  ],

  categories: [
    "Full Stack",
    "React",
    ".NET",
    "API Development",
    "Database"
  ],

  image: "/projects/DJ.jpeg",

  screenshots: [],

  githubUrl: "",
  liveUrl: "",

  details: {
    problem:
      "The project required a modern web platform that could present DJ and event-related services professionally while providing a structured way to manage application data through a backend API and database.",

    solution:
      "Built a complete full-stack application using React for the frontend, C#/.NET for backend API development, and Microsoft SQL Server for persistent data management. The frontend communicates with the backend through REST APIs.",

    features: [
      "Responsive React-based user interface",
      "Modern DJ and event-focused website experience",
      "Reusable React components",
      "REST API integration",
      "Backend business logic using C#/.NET",
      "SQL Server database integration",
      "Structured data management",
      "Frontend-to-backend communication",
      "Responsive design for different screen sizes"
    ],

    architecture:
      "Three-layer full-stack architecture: React frontend → RESTful C#/.NET Web API → Microsoft SQL Server database. The React application consumes backend APIs, while the .NET backend handles application logic and database operations.",

    contribution:
      "Worked across the full-stack implementation, including React frontend development, C#/.NET backend development, REST API integration, SQL Server database connectivity, application functionality, and overall project integration.",

    challenges: [
      "Integrating the React frontend with the .NET backend",
      "Designing reliable REST API communication",
      "Managing frontend and backend data flow",
      "Connecting backend services with SQL Server",
      "Maintaining a responsive and consistent user interface",
      "Handling application data across multiple layers"
    ],

    results:
      "Delivered a full-stack web application combining a modern React frontend with a C#/.NET backend and Microsoft SQL Server database, demonstrating practical experience in frontend development, backend API development, database integration, and end-to-end application architecture."
  }
},

  {
  id: "fees-management-system",
  name: "Fee Record Management System",

  description:
    "A backend-focused fee management system developed to manage student fee records, payment information, and fee-related data through a structured Spring Boot REST API.",

  technologies: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "REST APIs",
    "MySQL"
  ],

  frontend:
    "API-based application architecture with backend services designed to support frontend integration and fee record management workflows.",

  backend:
    "Java with Spring Boot — developed RESTful APIs, business logic, service layers, controllers, and database operations for managing student fee records.",

  database:
    "MySQL — used for storing and managing student, fee, payment, and related record data through Spring Data JPA.",

  apiTools: [
    "REST APIs",
    "Postman"
  ],

  categories: [
    "Java",
    "Spring Boot",
    "Backend",
    "REST API",
    "Database"
  ],

  image: "/projects/Fee_Record.jpeg",

  screenshots: [],

  githubUrl: "",
  liveUrl: "",

  details: {
    problem:
      "Managing student fee records manually can make it difficult to maintain accurate payment information, retrieve records efficiently, and keep fee-related data organized.",

    solution:
      "Developed a Spring Boot-based Fee Record Management System that provides REST APIs for managing fee records and connects the application with a MySQL database using Spring Data JPA.",

    features: [
      "Student fee record management",
      "Fee and payment data management",
      "RESTful API endpoints",
      "CRUD operations",
      "MySQL database integration",
      "Spring Data JPA integration",
      "Layered backend architecture",
      "Structured service and repository layers",
      "API testing using Postman"
    ],

    architecture:
      "Layered Spring Boot architecture consisting of Controller → Service → Repository → MySQL. REST APIs handle client requests, the service layer contains business logic, and Spring Data JPA manages database operations.",

    contribution:
      "Worked on the backend development using Java and Spring Boot, including REST API development, business logic, database integration, JPA-based data persistence, CRUD operations, and API testing.",

    challenges: [
      "Designing REST APIs for fee record operations",
      "Managing relationships between application entities",
      "Implementing reliable database operations",
      "Integrating Spring Data JPA with MySQL",
      "Maintaining clean separation between controller, service, and repository layers",
      "Testing and validating API responses"
    ],

    results:
      "Built a structured fee record management backend that demonstrates practical experience with Java, Spring Boot, REST API development, Spring Data JPA, MySQL, CRUD operations, and layered application architecture."
  }
},

  {
  id: "college-record-system",
  name: "College Leaving Certificate System",

  description:
    "A Java-based college record management system developed to manage student records and streamline the process of maintaining and generating college leaving certificate information.",

  technologies: [
    "Java",
    "Java Servlets",
    "JDBC",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "Apache Tomcat"
  ],

  frontend:
    "HTML, CSS and JavaScript — used to build the user interface for student record management and certificate-related operations.",

  backend:
    "Java Servlets — implemented server-side application logic, request handling, student record processing, and communication between the frontend and database.",

  database:
    "MySQL — used to store and manage student records and college leaving certificate-related information.",

  apiTools: [
    "JDBC",
    "Apache Tomcat"
  ],

  categories: [
    "Java",
    "Java Servlet",
    "JDBC",
    "MySQL",
    "Full Stack"
  ],

  image: "/projects/College_Leaving_Certificate.jpeg",

  screenshots: [],

  githubUrl: "",
  liveUrl: "",

  details: {
    problem:
      "Managing student records and college leaving certificate information manually can be time-consuming and may lead to difficulties in maintaining, searching, and updating student data.",

    solution:
      "Developed a Java Servlet-based system that provides a structured way to manage student records and handle college leaving certificate-related information. The application connects to a MySQL database using JDBC for persistent data management.",

    features: [
      "Student record management",
      "Student information storage",
      "Student record search and retrieval",
      "Record creation and updating",
      "College leaving certificate information management",
      "Database-driven record management",
      "JDBC-based MySQL connectivity",
      "Server-side processing using Java Servlets",
      "Responsive web interface"
    ],

    architecture:
      "Web-based layered architecture using HTML/CSS/JavaScript for the frontend, Java Servlets for server-side processing, JDBC for database connectivity, and MySQL for persistent student record storage. The application runs on Apache Tomcat.",

    contribution:
      "Worked on the complete application development, including frontend interface development, Java Servlet implementation, JDBC database connectivity, MySQL database operations, student record management, and application integration.",

    challenges: [
      "Implementing Java Servlet request and response handling",
      "Connecting the application with MySQL using JDBC",
      "Managing student records efficiently",
      "Implementing database CRUD operations",
      "Maintaining consistent data flow between frontend, backend, and database",
      "Deploying and running the application using Apache Tomcat"
    ],

    results:
      "Developed a functional college record management application that demonstrates practical experience with Java Servlets, JDBC, MySQL, web development, CRUD operations, and end-to-end full-stack application development."
  }
},
  {
  id: "rsf-rsapp",
  name: "RSAPP (Ride Sharing Application)",

  description:
    "A full-stack ride sharing application designed to connect users with ride services through a modern React frontend, .NET backend APIs, SQL Server database, and Firebase integration.",

  technologies: [
    "React",
    "C#",
    ".NET",
    "REST APIs",
    "Microsoft SQL Server",
    "SSMS",
    "Firebase"
  ],

  frontend:
    "React.js — developed the interactive and responsive user interface, reusable components, application screens, navigation, forms, and API-integrated user experience.",

  backend:
    "C# / .NET — developed backend services and REST APIs for application logic, request processing, data management, and communication with the frontend.",

  database:
    "Microsoft SQL Server — used for storing and managing application data, with SQL Server Management Studio (SSMS) used for database development and management.",

  apiTools: [
    "REST APIs",
    "ASP.NET Web API",
    "Postman",
    "Firebase"
  ],

  categories: [
    "React",
    ".NET",
    "C#",
    "Full Stack",
    "REST API",
    "SQL Server"
  ],

  image: "/projects/RSAPP.jpeg",

  screenshots: [],

  githubUrl: "",
  liveUrl: "",

  details: {
    problem:
      "Traditional ride coordination can be difficult when users need a convenient way to interact with ride services, manage ride-related information, and communicate with a centralized application system.",

    solution:
      "Developed RSAPP as a full-stack ride sharing application using React for the frontend and C#/.NET for backend API development. The application uses SQL Server for structured data storage and Firebase for supporting application functionality.",

    features: [
      "Ride sharing application workflow",
      "Modern React-based user interface",
      "Responsive application screens",
      "Ride-related data management",
      "REST API integration",
      "Backend business logic using C#/.NET",
      "SQL Server database integration",
      "Firebase integration",
      "Frontend and backend communication",
      "Structured data management"
    ],

    architecture:
      "Full-stack architecture consisting of React frontend → C#/.NET REST API → Microsoft SQL Server database, with Firebase integrated for supporting application services. The React frontend communicates with the .NET backend through REST APIs.",

    contribution:
      "Worked across the full-stack application, including React frontend development, C#/.NET backend development, REST API integration, SQL Server database connectivity, Firebase integration, data handling, and overall frontend-backend integration.",

    challenges: [
      "Integrating the React frontend with .NET REST APIs",
      "Managing data flow between frontend and backend",
      "Connecting .NET services with SQL Server",
      "Integrating Firebase with the application",
      "Handling ride-related application data",
      "Maintaining responsive and reusable React components",
      "Testing and debugging API communication"
    ],

    results:
      "Developed a complete full-stack ride sharing application demonstrating practical experience with React, C#, .NET, REST APIs, SQL Server, Firebase, frontend-backend integration, and modern web application architecture."
  }
},
];
