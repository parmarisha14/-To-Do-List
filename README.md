📘 Employee Management System – Documentation

🏢 Project Overview
This Employee Management System is a web-based internal tool for SmartTech Pvt. Ltd. to handle employee-related operations such as:

Adding new employees

Viewing all employees

Editing employee details

Viewing individual employee profiles

Assigning tasks

The system is built using Node.js, Express.js, and EJS templating, with in-memory storage for simplicity and fast prototyping.

📂 Files & Purpose
1. index.ejs
Purpose: Serves as the homepage of the application.

Content: Contains welcome text and navigation (included via header.ejs).

Functionality: Introduces users to the system and provides entry points to core features.

2. header.ejs
Purpose: A reusable header file included in all views.

Content: Contains the navigation bar with links to Home, Add Employee, View Employees, and Assign Task.

Functionality: Maintains consistent navigation across all pages.

3. edit.ejs
Purpose: Provides a form to edit an existing employee's information.

Content: Pre-filled form fields with employee details (ID, name, department, salary).

Functionality: Allows the user to modify and update employee records via POST to the backend route.

4. show.ejs
Purpose: Displays detailed information about a single employee.

Content: Structured view showing ID, name, department, and salary.

Functionality: Helps users view individual employee profiles in detail.

5. view.ejs
Purpose: Lists all employee records in a table format.

Content: Displays employee data with options to edit, delete, or view details for each.

Functionality: Central location to manage all existing employees.

6. task.ejs
Purpose: Interface for assigning tasks to employees.

Content: Form with fields such as employee ID, task title, description, and deadline.

Functionality: Enables task assignment, which gets stored in memory or further used.

7. server.js (or app.js)
Purpose: The main backend logic and routing configuration.

Functionality:

Sets up the Express server and EJS view engine.

Handles routes for all major operations:

Homepage display

Adding, editing, deleting, and showing employee records

Task assignment

Stores data in memory using arrays for employees and tasks.

⚙️ Features Summary
Feature	Description
Add Employee	      Allows form submission of new employee data
View All Employees	  Displays all current employees with options to edit or delete
Edit Employee	      Pre-populated form to update existing employee details
View Employee	       View complete profile of a selected employee
Assign Task	           Assign  specific tasks to an employee
Header Navigation	    Consistent menu across all pages for smooth user experience

📝 Technology Stack

Layer	Tools Used
Frontend	HTML, CSS, Bootstrap, EJS
Backend	Node.js, Express.js
Templating	Embedded JavaScript (EJS)
Storage	In-memory arrays (temporary)

✅ Best Practices Followed

Modular EJS templates using includes

RESTful routing structure

Bootstrap-based responsive UI

Clear form validation on input fields

User-friendly UI with consistent styling

employee-management/
│
├── views/
│   ├── index.ejs         # Homepage view
│   ├── header.ejs        # Reusable navigation bar (included in all pages)
│   ├── add.ejs           # Form to add a new employee
│   ├── edit.ejs          # Form to edit existing employee details
│   ├── show.ejs          # Displays a single employee's full details
│   ├── view.ejs          # Shows all employees in a table
│   ├── task.ejs          # Form to assign tasks to employees
│
├── server.js             # Main server file (Node.js + Express)
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Exact versions of installed packages
└── README.md             # (Optional) Project documentation or instructions
