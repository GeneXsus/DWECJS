let personal=["c#", "python", "javascript", "ruby"];

document.write("------for tradicional----------")
for (let i=0; i<personal.length; i++){
    document.write(`<br>${personal[i]}`);
}

document.write("<br>------for in----------");

for (let ele in personal){
    document.write(`<br>${personal[ele]}`);
}

document.write("<br>------for of----------");

for (let ele of personal){
    document.write(`<br>${ele}`);
}

document.write("<br>------for of con índices----------");

for (let [ind, ele] of personal.entries()){
    document.write(`<br>${ind} - ${ele}`);
}

document.write("<br>------for each----------");

personal.forEach(function(ind,ele){
    document.write(`<br>${ind} - ${ele}`);

})

document.write("<br>------for each con función arrow----------");

personal.forEach((ind,ele)=>document.write(`<br>${ind} - ${ele}`));
