// under Standing the Function

function login(name) {
  //console.log(name);
  for (i = 0; i <= name.length; i++) {
    //console.log(name[i] + " is Login ");
    // Console me variable ko pass krna  ka ik or treqaa ni hy
    //console.log(`${name} Login Scessfully`);
  }
}

login(["haider", "Ali", "Molvi "]);

//==================
function uppercase(upper) {
  return upper.toUpperCase();

  // Function ky under agher humm return na likhen to ByDefault Undefine pass ho jati

  // or ik cheze jo cheze ko return krna hotaa hy  or ko return ky satgh likhooo
}

const upperValue = uppercase("haider");
//console.log(upperValue);

// Function ky Under Default Parmeter ko kyse pass krten han

// in function me agher height value pass ni krni hy to os ko BY-default value assign krwani ho gi

function Area(Width, hight = 1) {
  const totalArea = Width * hight;
  return totalArea;
}

const printArea = Area(5);
//console.log(printArea);

//==========================================

//Function 2 Tarhan ky hoten han 1 Declaration or Expression

// 1 Declaration vo hota hy jis ko hum upper smaj chuken han ab hum Expreassion ko dykhty  han

const funName = function () {
  console.log(" Login Sucessfully ");
};

// in Function ko hum Variable sy Call kr skten han
//funName();

//===========================
// Invoke Function

(function () {
  console.log("Invoke Function Successfully");
})();
