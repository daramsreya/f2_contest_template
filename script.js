/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  const newEmp = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };
  arr.push(newEmp);
  console.log(arr); // fixed (log arr, not undefined variable)
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newEmp = [
    { id: 5, name: "alice", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "25", profession: "manager" },
    { id: 7, name: "charlie", age: "23", profession: "intern" },
  ];
  const combined = arr.concat(newEmp);
  console.log(combined);
}
