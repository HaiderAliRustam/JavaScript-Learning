/*const Langugae = ["java", "Ali"];

//Agher Array me koi value putt krni ho to

Langugae.push("haider");

//console.log(Langugae);
//Agher Arry ki Langeth Print krwani ho to

//console.log("The Array Langht is ", +Langugae.length);

// POP matlab Last ka item nikal dy ga yani print krwaa dy ga
console.log(Langugae.pop());*/

//==================================================================

// Ab hum Array me Object ko pharty hn

const Actor = [
  {
    name: "haider",
    payment: 10,
  },
  {
    name: "ali",
    payment: 20,
  },
];
// console.log(Actor);
// console.log(Actor.lenght);

/*for (i = 0; i <= Actor.length - 1; i++) {
  Actor[i].payment = Actor[i].payment - 10;
  //console.log(Actor.payment);
  //   console.log(Actor[i]);
}
console.log(Actor);
*/

//Now Under Standing For Each  is me sab sy pahly os Array ko pakraa jata hy jis pir foreach ka function ko use krna hy
// For Each ik Arrow Function hy
/*
Actor.forEach((Actor) => {
  Actor.payment = Actor.payment - 6;

  console.log(Actor);
});
*/

// An hum Filter ko smajty han

// is condition mr Actor ki value myny Studnet ky Variable ky rakhwaa de hy
// ab next variable Studnet hi use ho ga

const Filt = Actor.filter((stutnet) => {
  if (stutnet.payment < 50) {
    // Filter hmen Sref True or False hi Return krta hy
    return true;
  } else {
    return false;
  }
});

// Agher is ki mujy ik hi line me Print krwana ho to
/*
const filtdata = Actor.filter((stutnet) => stutnet.payment < 50);
console.log(Filt);
*/
// console.log(Actor.payment);

//====================================================================

// Ab mujy is me map ko smajnaaa hy

const finaluser = Actor.map((user) => {
  return {
    fullname: `${user.name}${user.payment}`,
  };
});

//=====================================
// UnderStanding the Reduce function
/*  

const total = Actor.reduce((acc, redName) => {
  acc = acc + redName.payment;
  return acc;
}, 0);

*/

//=============================================

// Now Under Standing the indexof

const admin = [4, 6, 7];
const user = {
  name: "haider ",
  id: 7,
};

// Agher user.id ki value Array ky under milti hy  to
const adminid = admin.indexOf(user.id);

// Ab is pir hum Condition lgaty han ky user.id ki value Array me mujood hy  to True return kray

const adminid1 = admin.indexOf(user.id) > -1;

//console.log(user.id);

//=======================
// Achaaa yer indexof ki jaghaaa hum include bi use kr skty han

const includeinAraay = admin.includes(user.id);

// ye include ka matlab ye hy user.id ki value Array me hy ye ni

//========================================================
// Ab isi tarhan ik or function hy Array me Find krwana
// matlab ye malom krna hy value object me hy ye ni

const findArray = admin.find((user) => {
  return user.id === 7;
});
console.log(findArray);

//======================================================

// Acha Ab hum  samjty han agher kisi function ko hum ny sort krna hy to

const sortArray = ["haider", "ALi", "Abdullah ", 4, "Bilal"];
sortArray.sort();

//==================================================
// Ab hum Slice ko samjty han is ka matlab ye hotaa hy os index wali value ko hum ny delate krna hy

//yahn First value ka matlab hy vo delate krni hy or second value ka matlab hy kitny (how much ) value ko delate krna hy

sortArray.splice(2, 4);
console.log(sortArray);
