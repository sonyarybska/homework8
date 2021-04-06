//-  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
/*

 function Tags(name,description,attribute,nameOfAtr,actionOfAtr,nameOfAtr2,actionOfAtr2){
     this.name=name;
     this.description=description;
     this.attribute=[{nameOfAtr,actionOfAtr},{nameOfAtr2,actionOfAtr2}];
 }
 let tagA = new Tags("a", "The <a> tag defines a hyperlink, which is used to link from one page to another.",
     '', 'href', 'Specifies the URL of the page the link goes to', 'target', 'Specifies where to open the linked document');
 console.log(tagA);
 let tagDiv = new Tags('div', 'The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.',
     '', 'onerror', 'Script to be run when an error occurs', 'onload', 'Fires after the page is finished loading');
 console.log(tagDiv);
 let tagH = new Tags('h1', '<h1> defines the most important heading', '', 'class', 'Specifies one or more classnames for an element',
     'dir', 'Specifies the text direction for the content in an element');
 console.log(tagH);
 let tagSpan = new Tags('span', "The <span> tag is an inline container used to mark up a part of a text, or a part of a document.",
     '', 'style', 'Specifies an inline CSS style for an element', 'id', 'Specifies a unique id for an element');
 console.log(tagSpan);
 let tagInput = new Tags("input", "The <input> tag specifies an input field where the user can enter data.",
     '', 'form', "Specifies the form the <input> element belongs to", 'accept',
     'Specifies a filter for what file types the user can pick from the file input dialog box');
 console.log(tagInput);
 let tagForm = new Tags('form', "The <form> tag is used to create an HTML form for user input.", '',
     'method', 'Specifies the HTTP method to use when sending form-data', 'name', 'Specifies the name of a form');
 console.log(tagForm);
 let tagOption = new Tags('option', "The <option> tag defines an option in a select list.", '',
     'disabled', 'Specifies that an option should be disabled', 'label', 'Specifies a shorter label for an option');
 console.log(tagOption);
 let tagSelect = new Tags('select', "The <select> element is used to create a drop-down list.", '',
     'multiple', 'Specifies that multiple options can be selected at once', 'size', 'Defines the number of visible options in a drop-down list');
 console.log(tagSelect);
 */


//Те завдання, що і попереднє,але створити класс  для об'єкту який описує теги
/*
 class Tags{
     constructor(description,attribute,nameOfAtr,actionOfAtr,nameOfAtr2,actionOfAtr2) {
     this.name=name;
     this.description=description;
     this.attribute=[{nameOfAtr,actionOfAtr},{nameOfAtr2,actionOfAtr2}];}

 }
 let tagA = new Tags("a", "The <a> tag defines a hyperlink, which is used to link from one page to another.",
     '', 'href', 'Specifies the URL of the page the link goes to', 'target', 'Specifies where to open the linked document');
 console.log(tagA);
 let tagDiv = new Tags('div', 'The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.',
     '', 'onerror', 'Script to be run when an error occurs', 'onload', 'Fires after the page is finished loading');
 console.log(tagDiv);
 let tagH = new Tags('h1', '<h1> defines the most important heading', '', 'class', 'Specifies one or more classnames for an element',
     'dir', 'Specifies the text direction for the content in an element');
 console.log(tagH);
 let tagSpan = new Tags('span', "The <span> tag is an inline container used to mark up a part of a text, or a part of a document.",
     '', 'style', 'Specifies an inline CSS style for an element', 'id', 'Specifies a unique id for an element');
 console.log(tagSpan);
 let tagInput = new Tags("input", "The <input> tag specifies an input field where the user can enter data.",
     '', 'form', "Specifies the form the <input> element belongs to", 'accept',
     'Specifies a filter for what file types the user can pick from the file input dialog box');
 console.log(tagInput);
 let tagForm = new Tags('form', "The <form> tag is used to create an HTML form for user input.", '',
     'method', 'Specifies the HTTP method to use when sending form-data', 'name', 'Specifies the name of a form');
 console.log(tagForm);
 let tagOption = new Tags('option', "The <option> tag defines an option in a select list.", '',
     'disabled', 'Specifies that an option should be disabled', 'label', 'Specifies a shorter label for an option');
 console.log(tagOption);
 let tagSelect = new Tags('select', "The <select> element is used to create a drop-down list.", '',
     'multiple', 'Specifies that multiple options can be selected at once', 'size', 'Defines the number of visible options in a drop-down list');
 console.log(tagSelect);
 */



//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

/*
 let Car = {
     model: "audi",
     creator: "ukraine",
     year: 2001,
     speed: 100,
     size: 160,
     drive: function () {
         console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
     },
     info: function () {
         console.log(`Модель:${this.model}\n Виробник:${this.creator}\n Рік:${this.year}\n
         Швидкість:${this.speed}\n Об'єм ${this.size}`);
     },
     increaseMaxSpeed: function (newSpeed) {
         Car.speed += newSpeed;
         console.log(Car.speed);
     },
     changeYear: function (newValue) {
         Car.year = newValue;
         console.log(newValue);
     },
     addDriver: function (driver) {
         Car.driver = driver;
     }
 }

 console.log(Car);
 Car.drive();
 Car.addDriver({name:'Oleg',age:28,status:true});
 console.log(Car);
 Car.changeYear(2021);
 Car.increaseMaxSpeed(150);
 Car.info();
 */


//Це саме завдання,що і попереднє, тільки створити функцію конструктор
/*
 function Car(model,creator,year,speed,size,){
     this.model=model;
     this.creater=creator;
     this.year=year;
     this.speed=speed;
     this.size=size;
     this.drive=function (){
         console.log(`Їдемо зі швидкістю ${speed} на годину`);
     }
     this.info=function (){
         console.log(`Модель:${model}\n Виробник:${creator}\n Рік:${year}\n Швидкість:${speed}\n Об'єм ${size}`)
     }
 this.increaseMaxSpeed=function (newSpeed){
         speed+=newSpeed;
         console.log(speed);
 }
 this.changeYear=function (newValue){
         year=newValue;
         console.log(newValue);
 }
 this.addDriver=function (driver){
         this.driver=driver;
 }
 }
 let audi=new Car('audi','ukraine',2001,100,160);
 console.log(audi);
 audi.drive();
 audi.info()
 audi.increaseMaxSpeed(150);
 audi.changeYear(2021);
 audi.addDriver({
     name:"Oleg",
     age:21,
     status:true
 })
 */

////Це саме завдання,що і попереднє, тільки створити клас
/*
  class Car{
     constructor( model,creator,year,speed,size) {
         this.model=model;
         this.creater=creator;
         this.year=year;
         this.speed=speed;
         this.size=size;
     }
         drive (){
             console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
         }
         info (){
             console.log(`Модель:${this.model}\n Виробник:${this.creator}\n Рік:${this.year}\n Швидкість:${this.speed}\n Об'єм ${this.size}`)
         }
         increaseMaxSpeed (newSpeed){
             this.speed+=newSpeed;
             console.log(this.speed);
         }
         changeYear (newValue){
             this.year=newValue;
             console.log(newValue);
         }
         addDriver(driver){
             this.driver=driver;
         }

  }
  let audi=new Car('audi','ukraine',2001,100,160);
  console.log(audi);
  audi.drive();
  audi.info()
  audi.increaseMaxSpeed(15);
  audi.changeYear(2021);
  audi.addDriver({
      name:"Oleg",
      age:21,
      status:true
  })
 console.log(audi);
*/



//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

/*
 class Cinderella{
     constructor(name,age,footSize) {
         this.name=name;
         this.age=age;
         this.footSize=footSize;
     }
 }
 class Prince{
     constructor(name,age,shoes) {
         this.name=name;
         this.age=age;
         this.shoes=shoes;
     }
 }



 let Cinder1=new Cinderella("Anna",25,35);
 let Cinder2=new Cinderella('Ira',26,34);
 let Cinder3=new Cinderella('Olga',29,38);
 let Cinder4=new Cinderella('Sonya',20,37);
 let Cinder5=new Cinderella('Karina',23,34);
 let Cinder6=new Cinderella('Veronika',18,33);
 let Cinder7=new Cinderella('Anastasiia',19,36);
 let Cinder8=new Cinderella('Oksana',30,40);
 let Cinder9=new Cinderella('Natali',24,37);
 let Cinder10=new Cinderella('Alina',27,37);

 let prince=new Prince('Oleg',28,33);
 let princes=[Cinder1,Cinder2,Cinder3,Cinder4,Cinder5,Cinder6,Cinder7,Cinder8,Cinder9,Cinder10];

 for (let i = 0; i < princes.length; i++) {
     if(princes[i].footSize===prince.shoes){
         console.log(princes[i]);
     }

  }]
*/


// //Це саме завдання,що і попереднє, тільки створити  функцію конструктор
/*
 function Cinderella(name,age,footSize){
          this.name=name;
          this.age=age;
          this.footSize=footSize;
  }
 function Prince(name,age,shoes){
          this.name=name;
          this.age=age;
          this.shoes=shoes;
  }



  let Cinder1=new Cinderella("Anna",25,35);
  let Cinder2=new Cinderella('Ira',26,34);
  let Cinder3=new Cinderella('Olga',29,38);
  let Cinder4=new Cinderella('Sonya',20,37);
  let Cinder5=new Cinderella('Karina',23,34);
  let Cinder6=new Cinderella('Veronika',18,33);
  let Cinder7=new Cinderella('Anastasiia',19,36);
  let Cinder8=new Cinderella('Oksana',30,40);
  let Cinder9=new Cinderella('Natali',24,37);
  let Cinder10=new Cinderella('Alina',27,37);

  let prince=new Prince('Oleg',28,33);

  let cinderellas=[Cinder1,Cinder2,Cinder3,Cinder4,Cinder5,Cinder6,Cinder7,Cinder8,Cinder9,Cinder10];

  for (let i = 0; i < princes.length; i++) {
      if(cinderellas[i].footSize===prince.shoes){
          console.log(cinderellas[i]);
      }

  }
  */
