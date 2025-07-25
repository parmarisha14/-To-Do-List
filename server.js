const express = require("express");
const app = express();
const PORT = 3030;

let employees = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home / Add Page
app.get("/", (req, res) => {
    res.render("index");
});

// Handle Add
app.post("/", (req, res) => {
    const newEmp = {
        id: Date.now().toString(),
        empId: req.body.empId,
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
    };
    employees.push(newEmp);
    res.redirect("/view");
});

// View Employees
app.get("/view", (req, res) => {
    res.render("view", { employees });
});

// Edit Form
app.get("/emp/edit/:id", (req, res) => {
    const emp = employees.find(e => e.id === req.params.id);
    if (!emp) return res.send("Employee not found");
    res.render("edit", { emp });
});

// Handle Edit
app.post("/emp/edit/:id", (req, res) => {
    const { id } = req.params;
    employees = employees.map(emp => {
        if (emp.id === id) {
            return {
                ...emp,
                empId: req.body.empId,
                name: req.body.name,
                department: req.body.department,
                salary: req.body.salary
            };
        }
        return emp;
    });
    res.redirect("/view");
});

// Delete
app.get("/emp/delete/:id", (req, res) => {
    employees = employees.filter(emp => emp.id !== req.params.id);
    res.redirect("/view");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
