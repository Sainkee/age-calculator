let inputDob = document.querySelector("#date");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let dob = new Date(inputDob.value);
  let today = new Date();

  let dobdate = dob.getDate();
  let dobmonth = dob.getMonth() + 1;
  let dobyear = dob.getFullYear();

  let currdate = today.getDate();
  let currmonth = today.getMonth() + 1;
  let curryear = today.getFullYear();

  let resyear = curryear - dobyear;

  if (currmonth >= dobmonth) {
    resmonth = currmonth - dobmonth;
  } else {
    resyear--;
    resmonth = 12 + currmonth - dobmonth;
  }

  if (currdate >= dobdate) {
    resdate = currdate - dobdate;
  } else {
    resmonth--;
    resdate = getDateInMonth(dobyear, dobmonth) + currdate - dobdate;
  }

  if (resmonth < 0) {
    resmonth = 11;
    resyear--;
  }
  if (resyear < 0 || resmonth < 0 || resdate < 0) {
    alert("you cant born in future");
  } else {
    document.querySelectorAll("p")[0].innerText = resyear;
    document.querySelectorAll("p")[2].innerText = resmonth;
    document.querySelectorAll("p")[4].innerText = resdate;
  }
});

function getDateInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
