//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie{
  constructor(title,studio,rating){
    this.title=title
    this.studio=studio
    this.rating=rating
  }
}
var m1=new movie("ice age","Universal Pictures","PG-13")
var m2=new movie("moana","Warner Bros","PG-13")
console.log(m1)
console.log(m2)

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie{
    constructor(title,studio,rating){
      this.title=title
      this.studio=studio
      this.rating=rating
      }
  get_rating(){
    return this.rating;
  }
  set_rating(value){
    this.rating=value;  
  }
  }
  var m1=new movie("ice age","Walt disney","PG 13")
  var m2=new movie("Moana","universal pictures","PG 13")
  var m3=new movie("frozen","columbia pictures")
  console.log(m1);
  console.log(m2);
  m3.set_rating("PG");
  console.log(m3);

  //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class movie{
    constructor(title,studio,rating){
      this.title=title
      this.studio=studio
      this.rating=rating
      }
  getPG(arr){
    for(var i=0;i<3;i++){
      return this.title;
    }
  }
  }
  var m1=new movie("ice age","Walt disney","PG")
  var m2=new movie("Moana","universal pictures","PG")
  var m3=new movie("frozen","columbia pictures","PG")
  console.log(m1.getPG());
  console.log(m2.getPG());
  console.log(m3.getPG());

  //d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class movie{
    constructor(title,studio,rating){
      this.title=title
      this.studio=studio
      this.rating=rating
      }
  }
  var m1=new movie("ice age","Walt disney","PG");
  var m2=new movie("Moana","universal pictures","PG");
  var m3=new movie("frozen","columbia pictures","PG");
  var m4=new movie("Casino Royale","Eon Productions","PG 13");
  console.log(m1);
  console.log(m2);
  console.log(m3);
  console.log(m4);

  //2,a,Area of circle
class circle{
    constructor(radius){
      this.radius=radius
      this.pi=3.14
  }
  get_radius(){
    return this.pi*this.radius*this.radius
    }
  }
  var c1=new circle(5)
  console.log(c1.get_radius())

//2,b,Circumference of circle
class circle{
  constructor(radius){
    this.radius=radius
    this.pi=3.14
}
get_radius(){
  return 2*this.pi*this.radius
  }
}
var c1=new circle(5)
console.log(c1.get_radius())

//2,c,get radius
class circle{
  constructor(radius){
    this.radius=radius
   }
get_radius(){
  return this.radius
  }
}
var c1=new circle(5)
console.log(c1.get_radius())

//2,d,get radius and set radius
class circle{
  constructor(radius){
    this.radius=radius
   }
getradius(){
  return this.radius;
  }
setradius(value){
  this.radius=value;
}
}
var c1=new circle(5);
console.log(c1.getradius())
c1.setradius(10);
console.log(c1.getradius())

//2,e,getcolor and setcolor
class circle{
    constructor(color){
      this.color=color
     }
  getcolor(){
    return this.color;
    }
  setcolor(value){
    this.color=value;
  }
  }
  var c1=new circle("Red");
  console.log(c1.getcolor())
  c1.setcolor("Pink");
  console.log(c1.getcolor())


//3,Write a “person” class to hold all the details.
class person{
    constructor(name,age,gender,address,city,country,education,Areaofinterest,hobbies){
      this.name=name
      this.age=age
      this.gender=gender
      this.address=address
      this.city=city
      this.country=country
      this.education=education
      this.Areaofinterest=Areaofinterest
      this.hobbies=hobbies
    }
  }
  var p1=new person("asha",25,"female","Thiruvalluvar nagar","chennai","Tamilnadu","B.E","Developing","reading books")
  console.log(p1);

//4,write a class to calculate the Uber price.
class Uber{
    constructor(km){
      this.km=km;
      }
  getprice(){
    return 18*this.km
  }
  }
  var u1=new Uber(15)
  console.log(u1.getprice());
