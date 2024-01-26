const langs = [
  {
    _id: "101",
    name: "java",
    topics: 7,
    image:
      "https://ubiqum.com/assets/uploads/2021/12/learn-java-with-ubiqum-logo.png",
    resources: [
      {
        name: "OOPS",
        link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      },
      {
        name: "Exception Handling",
        link: "https://www.geeksforgeeks.org/exceptions-in-java/",
      },
      {
        name: "Collection Framework",
        link: "https://www.javatpoint.com/collections-in-java",
      },
      {
        name: "Multi Threading",
        link: "https://www.javatpoint.com/multithreading-in-java",
      },
      {
        name: "JDBC",
        link: "https://www.javatpoint.com/java-jdbc",
      },
      {
        name: "Interface",
        link: "https://www.geeksforgeeks.org/interfaces-in-java/",
      },
      {
        name: "Design Patterns",
        link: "https://www.javatpoint.com/design-patterns-in-java",
      },
    ],
    faq: [
      {
        question: "What is Java?",
        answer:
          "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is known for its portability, as Java applications can run on various platforms without modification.",
      },
      {
        question: "How do you declare a variable in Java?",
        answer:
          "In Java, you can declare a variable by specifying its data type, followed by the variable name. For example, to declare an integer variable, you can use: `int myVariable;`",
      },
      {
        question: "What is the difference between Java and JavaScript?",
        answer:
          "Java and JavaScript are two distinct programming languages. Java is a statically-typed, compiled language primarily used for building standalone applications, while JavaScript is a dynamically-typed, interpreted language used for web development to add interactivity to websites.",
      },
      {
        question: "What is the Java Virtual Machine (JVM)?",
        answer:
          "The Java Virtual Machine (JVM) is an integral part of the Java platform. It is responsible for executing Java bytecode, which allows Java applications to run on various hardware and operating systems. JVM acts as an intermediary between Java code and the underlying hardware.",
      },
      {
        question: "How do you handle exceptions in Java?",
        answer:
          "In Java, exceptions are handled using try-catch blocks. Code that may throw an exception is placed inside a try block, and potential exceptions are caught and handled in catch blocks. This mechanism allows you to gracefully handle errors and prevent program crashes.",
      },
    ],
  },
  {
    _id: "102",
    name: "javascript",
    topics: 7,
    image: "https://www.ankitweblogic.com/javascript/js_img/javascript.png",
    resources: [
      {
        name: "OOPS",
        link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      },
      {
        name: "Exception Handling",
        link: "https://www.geeksforgeeks.org/exceptions-in-java/",
      },
      {
        name: "Collection Framework",
        link: "https://www.javatpoint.com/collections-in-java",
      },
      {
        name: "Multi Threading",
        link: "https://www.javatpoint.com/multithreading-in-java",
      },
      {
        name: "JDBC",
        link: "https://www.javatpoint.com/java-jdbc",
      },
      {
        name: "Interface",
        link: "https://www.geeksforgeeks.org/interfaces-in-java/",
      },
      {
        name: "Design Patterns",
        link: "https://www.javatpoint.com/design-patterns-in-java",
      },
    ],
    faq: [
      {
        question: "What is JavaScript?",
        answer:
          "JavaScript is a high-level, interpreted programming language commonly used for web development. It allows you to add interactivity and dynamic behavior to web pages, making it an essential technology for front-end development.",
      },
      {
        question: "How do you declare a variable in JavaScript?",
        answer:
          "In JavaScript, you can declare a variable using the `var`, `let`, or `const` keywords, followed by the variable name. For example, you can declare a variable with `let` like this: `let myVariable;`",
      },
      {
        question: "What is the Document Object Model (DOM) in JavaScript?",
        answer:
          "The Document Object Model (DOM) is a programming interface that represents the structure of a web page. JavaScript can manipulate the DOM to dynamically update and modify the content and structure of web pages, making it a fundamental part of web development.",
      },
      {
        question: "How do you handle asynchronous operations in JavaScript?",
        answer:
          "JavaScript uses callbacks, promises, and async/await for handling asynchronous operations. Callbacks are functions that execute when an asynchronous task completes. Promises provide a more structured way to work with asynchronous code, and async/await simplifies asynchronous code by allowing you to write it in a more synchronous style.",
      },
      {
        question:
          "What is the difference between `null` and `undefined` in JavaScript?",
        answer:
          "In JavaScript, `null` is an intentional absence of any object value, while `undefined` represents a variable that has been declared but has not been assigned a value. They are distinct but often used interchangeably to indicate missing or uninitialized data.",
      },
    ],
  },
  {
    _id: "103",
    name: "sql",
    topics: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/320px-Sql_data_base_with_logo.png",
    resources: [
      {
        name: "OOPS",
        link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
      },
      {
        name: "Exception Handling",
        link: "https://www.geeksforgeeks.org/exceptions-in-java/",
      },
      {
        name: "Collection Framework",
        link: "https://www.javatpoint.com/collections-in-java",
      },
      {
        name: "Multi Threading",
        link: "https://www.javatpoint.com/multithreading-in-java",
      },
      {
        name: "JDBC",
        link: "https://www.javatpoint.com/java-jdbc",
      },
      {
        name: "Interface",
        link: "https://www.geeksforgeeks.org/interfaces-in-java/",
      },
      {
        name: "Design Patterns",
        link: "https://www.javatpoint.com/design-patterns-in-java",
      },
    ],
    faq: [
      {
        question: "What is SQL?",
        answer:
          "SQL (Structured Query Language) is a domain-specific programming language used for managing and manipulating relational databases. It allows you to define, query, update, and control data stored in a relational database management system (RDBMS).",
      },
      {
        question: "What are the basic SQL operations?",
        answer:
          "SQL supports four basic operations: SELECT (retrieve data), INSERT (add new data), UPDATE (modify existing data), and DELETE (remove data). These operations are used to interact with the data in a relational database.",
      },
      {
        question: "What is a primary key in SQL?",
        answer:
          "A primary key is a unique identifier for a record in a relational database table. It ensures that each row in the table is uniquely identifiable. Primary keys are used for indexing and maintaining data integrity.",
      },
      {
        question: "What is an SQL JOIN?",
        answer:
          "An SQL JOIN is used to combine rows from two or more tables based on a related column between them. It allows you to retrieve data from multiple tables in a single query and is essential for working with relational databases with normalized data.",
      },
      {
        question: "What is normalization in SQL?",
        answer:
          "Normalization is the process of organizing and structuring a relational database to reduce data redundancy and improve data integrity. It involves breaking large tables into smaller, related tables and creating relationships between them using foreign keys.",
      },
    ],
  },
];

export { langs };
