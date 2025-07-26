const express = require("express");
const app = express();
const PORT = 3030;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let employees = [];
let tasks = [];


app.get("/", (req, res) => {
  res.render("index");
});


app.post("/", (req, res) => {
  const newEmp = {
    id: Date.now().toString(),
    empId: req.body.empId,
    name: req.body.name,
    department: req.body.department,
    salary: req.body.salary,
  };
  employees.push(newEmp);
  res.redirect("/view");
});


app.get("/view", (req, res) => {
  res.render("view", { employees });
});


app.get("/emp/edit/:id", (req, res) => {
  const emp = employees.find((e) => e.id === req.params.id);
  if (!emp) return res.send("Employee not found");
  res.render("edit", { emp });
});


app.post("/emp/edit/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.map((emp) =>
    emp.id === id
      ? {
          ...emp,
          empId: req.body.empId,
          name: req.body.name,
          department: req.body.department,
          salary: req.body.salary,
        }
      : emp
  );
  res.redirect("/view");
});

app.get("/emp/delete/:id", (req, res) => {
  employees = employees.filter((emp) => emp.id !== req.params.id);
  res.redirect("/view");
});



app.get("/task/:id", (req, res) => {
  const emp = employees.find((e) => e.id === req.params.id);
  if (!emp) return res.send("Employee not found");
  res.render("task", { emp });
});


app.post("/task/:id", (req, res) => {
  const emp = employees.find((e) => e.id === req.params.id);
  if (!emp) return res.send("Employee not found");

  const task = {
    taskId: Date.now().toString(),
    empId: emp.id,
    empName: emp.name,
    title: req.body.title,
    description: req.body.description,
  };
  tasks.push(task); 
  res.redirect("/show");
});


app.get("/show", (req, res) => {
  res.render("show", { tasks }); 
});

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on port ",PORT);
        console.log("http://localhost:"+PORT);
    }
})
