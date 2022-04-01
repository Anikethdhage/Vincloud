
//string methods
// let string="asdfgILKN";
// console.log(string.charAt(0));
// console.log(string.replace("a","D"));
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());
// console.log(string.endsWith("N"));
// console.log(string.search("N"));
// console.log(string.length);
// console.log(string.split(6));
// console.log(string.includes("J"));
// console.log(string.match("d"));
// let name="dkdkdk";
// console.log(name)
// let name1= prompt("enter your name");
// console.log(name1);
// let fname = prompt("Enter your name:");
// console.log("Hi Mr."+fname);
// let age = prompt("Enter your age:");
// console.log("Your age is:"+age);
// if(age<=18){
//     console.log("you cannot vote");
// }
// else{
//     console.log("You can Vote");
// }
let ui=prompt("Enter a number btn 1 to 10:")
console.log("Your have entered a value is:" + ui);
let sdf= (Math.random());
 let sds=Math.round(Math.random()*10);
if(ui<=10){
// console.log("Entered no is invalid")

// console.log(sds);
if(ui==sds){
    console.log("Yeah! You have Won");
}
else if(ui<sds){
    console.log("No is large");
}
else if (ui>sds){
    console.log("No is small");
}
}
else{
    console.log("Retry")
}
