/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(a=>{
    if(a.profession==="developer"){
      console.log(a);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(a=>{
    if(a.profession==="developer"){
      console.log(a);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmp={
    id:4, name:"Susan",age:"20",profession:"intern"};
    arr.push(newEmp);
    console.log(emp);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(emp=>emp.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmp=[
    {id:5,name:"Alice",age:"22",profession:"developer"},
    {id:6,name:"Bob",age:"25",profession:"manager"},
    {id:7,name:"Charlie",age:"23",profession:"intern"}
  ];
  const combined=arr.concat(newEmp);
  console.log(combined);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
