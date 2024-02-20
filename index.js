// var x=20;
// console.log(x);

// let y=30;
// console.log(y)

// const z=69;
// console.log(z);

// var x=30;
// console.log(x)

// y=40;
// console.log(y)


// console.log(z);
// let n1=10
// let n2=3
// let res=n1/n2
// console.log(typeof n1)
// console.log(res)
// console.log(parseInt(res))
// console.log(parseFloat(res))
// console.log(res.toPrecision(4))
// console.log(res.toFixed(4))
// console.log(n2.toString())
// var re=2.5*1.001
// console.log(re)
// let n11=10
// let n22=3
// var v=(n22.toString())
// var v1=(n11.toString())
// console.log(v1+v)
// let nn=12345
// let c=0
// while(nn!=0)
// {
//     nn=parseInt(nn/10)
//     c++
// }
// console.log(c)
// let name1="raj"
// console.log(name1.padStart(6,"mr "))

// let bNum=BigInt(12)
// let bNum1=13n
// console.log(Boolean(100000))
// console.log(bNum+BigInt(10));
// console.log(bNum1);
// console.log(typeof bNum)
// console.log(typeof bNum1)
// let a=5
// let b=6
// a=a+b
// b=a-b
// a=a-b
// console.log(a)
// console.log(b)
// let a=5
// let b=6
// let fact=1
// for(let i=1;i<b+1;i++)
// {
//     fact=fact*i
// }
// console.log(fact)
//let no=4321
// let rev=0
// let b=0
// for(let i=no;i>0;i=parseInt(i/10))
// {
//     b=i%10
//     rev=(rev*10)+b;
// }
// console.log(rev);
// let no=8
// for(let i=1;i<no;i++)
// {
//     if(no%i==0)
//     {
//         console.log(i)
//     }
// }
// var x
// prompt(x)
// console.log(x)
// let no=1234
// let b=0
// let sum=0
// for(let i=no;i>0;i=parseInt(i/10))
// {
//     b=no%10
//     sum=sum+b
// }
// console.log(sum)
// let num=1234
// let rev=0
// let b=0
// for(let i=num;i>0;i=parseInt(i/10))
// {
//     b=i%10
//     rev=(rev*10)+b;
// }
// console.log(rev)
//prime number
// const number = parseInt(prompt("Enter a positive number: "));
// let flag = true;
// {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         console.log(prime number`);
//     } else {
//         console.log(not prime number`);
//     }
// }
//perfect number
// var input=prompt("Enter a value");
// var v=input;
// var count=0;
// for(var i=1; i<input; i++)
// {
// if(input%i==0)
// {
// 	count=count+i;
// }
// }
// if(count==v)
// {
// console.log("perfect");
// }
// else
// {
// console.log("not perfect balls");
// }
// console.log("hi+10")
// console.log("hello")
// var a=25;
// var b="Raj"
// var c=true
// console.log(e);
// var e;
// function add(x,y)
//     {
// console.log(x+y);
// }
// add(10,5)
// var a=Number(prompt("enter the num"));
// var b=Number(prompt("enter the second num"));
// console.log(a+b);


// function parent(){
//  console.log("i am a parent")
//  function child(){
//  console.log("i an child fun")
//  }
// return child
// }
// parent()()

// let arr1={
//     name:"rakesh",
//     age:21,
//     location:"goripalya"
// }
// let arr2={
//     name:"rakesh",
//     age:21,
//     location:"goripalya"
// }
// let arr3={arr1,arr2}
// console.log(arr3)
// arr1.name=29
// Object.seal(arr1)
// Object.freeze(arr1)
// console.log(arr1.name)
// console.log(Object.isSealed(arr1))
// console.log(Object.isFrozen(arr1))
// console.log(Object.keys(arr3))
// console.log(Object.entries(arr3))
var currDate=new Date()
console.log(currDate);
console.log(currDate.getDate())