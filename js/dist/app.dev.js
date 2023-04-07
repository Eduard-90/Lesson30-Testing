"use strict";

function test() {
  return false;
}

function validateEmail(email) {
  if (email === "") return false;
  if (typeof email !== "string") return false;
  if (!email.split("").includes("@") || email.split("")[0] === "@") return false;
  if (email.length < 5) return false;
  if (email.split("@").length > 2) return false;
  var mail = email.slice(email.indexOf("@") + 1);
  if (!mail.includes(".") || email.includes(".@")) return false;
  return true;
}