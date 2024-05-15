// Pahly hum ny sadaaa function bnaya thaaa ab hum os ko call Back (cb) function bnaty han

function Register(callBack) {
  setTimeout(() => {
    console.log("Register End");
    callBack();
  }, 1000);
}
function sendEmail(callBack) {
  setTimeout(() => {
    console.log(" Send Email End ");
    callBack();
  }, 2000);
}
function login(callBack) {
  setTimeout(() => {
    console.log(" End Log-in");
    callBack();
  }, 3000);
}
function getUserDate(callBack) {
  setTimeout(() => {
    console.log(" End Get User Data");
    callBack();
  }, 5000);
}
function displayUserData(callBack) {
  setTimeout(() => {
    console.log("Display User Data End ");
    callBack();
  }, 1000);
}

// ye jo is tarah sy Nested Functiuon bnaen han myny in ko (Call back Hell ) bolty han

Register(() => {
  login(() => {
    sendEmail(() => {
      getUserDate(() => {
        displayUserData();
      });
    });
  });
});
console.log("The Other Application has to be Run");
