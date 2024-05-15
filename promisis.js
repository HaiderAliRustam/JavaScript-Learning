// Pahly hum ny sadaaa function bnaya thaaa ab hum os ko call Back (cb) function bnaty han

function Register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //return reject("Register me Reject krny pir error aya ");
      console.log("Register End");
      resolve("Register me Reject krny pir Success ho gaya ");
    }, 1000);
  });
}
function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Send Email End ");
      resolve();
    }, 2000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" End Log-in");
      resolve();
    }, 3000);
  });
}
function getUserDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" End Get User Data");
      resolve();
    }, 5000);
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display User Data End ");
      resolve();
    }, 1000);
  });
}

// ye jo is tarah sy Nested Functiuon bnaen han myny in ko (Call back Hell ) bolty han

// Register(() => {
//   login(() => {
//     sendEmail(() => {
//       getUserDate(() => {
//         displayUserData();
//       });
//     });
//   });
// });

// ab is ko Call Back sy krten han

// Axha yahan pir .then me bi ik function ko dyna hota hy
/*
Register()
  .then(login)
  .then(sendEmail)
  .then(getUserDate)
  .then(displayUserData)
  .catch((err) => {
    console.log(" Catch me Error aya ", err);
  });
  */

// Ab hum ise example or bi sadhaaa or Asaaan krten han

//Async me By Default Retun lgaaa wa hota hy

/* async function authentication() {
  await Register();
  await login();
  await sendEmail();
  await getUserDate();
  await displayUserData();

  // is me return na bi lgao to ye return krta hi hy
}
authentication()
  .then(() => {
    console.log(" All is Well");
  })
  .catch((err) => {
    console.log("Primisis me error a gaya", err);
  });
  */

// is sy Power Full Methord or jo Commen use bi hotaaa hy
async function authentication() {
  try {
    const messege = await Register();
    await login();
    await sendEmail();
    await getUserDate();
    await displayUserData();
    console.log("chal success", messege);
  } catch (err) {
    console.log("Primisis me error a gaya", err);
    throw new Error();
  }

  // is me return na bi lgao to ye return krta hi hy
}

const background = async () => {
  setTimeout(() => {
    console.log("async");
  }, 3000);
};

console.log("first");
console.log("2nd");

background();
console.log("2nd");

authentication()
  .then(() => {
    console.log("All is Well");
  })
  .catch((err) => {
    console.log("Try Catch me Error ", err);
  });

console.log("The Other Application has to be Run");
