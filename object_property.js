const student=[
    {id:22, name:"omor sani"},
    {id:23, name:"manna"},
    {id:42, name:"moyori"},
    {id:52, name:"deepjhol"}
];
const output=[];

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const result=element.name;
    output.push(result);
}
console.log(output);

const names=student.map(x=>x.name);
const ids=student.map(x=>x.id);
const backbebchers=student.filter(x=>x.id>40);
console.log(ids);
console.log(names);
console.log(backbebchers);