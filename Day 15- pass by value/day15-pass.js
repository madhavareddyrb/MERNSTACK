// pass by value

// let names = "Luffy";
// let full_name = names; // creates a copy of original value
// full_name = "Monkey D Luffy";

// console.log(full_name); //
// console.log(names);

// Pass by reference

// const linkedin_profile = {
//   name: "madhava",
//   email: "madhava123@zohomail.in",
//   phone_number: 98667,
//   posts: 10,
// };
// const updateProfile = linkedin_profile;
// updateProfile.name = "madhavareddyrb";

// console.log(linkedin_profile);
// console.log(updateProfile);

// // reference break if we create a new object(let)

// let linkedin_profile = {
//   name: "madhava",
//   email: "madhava123@zohomail.in",
//   phone_number: 98667,
//   posts: 10,
// };

// let updateProfile = linkedin_profile;
// updateProfile.name = "madhavareddyrb";
// console.log(updateProfile);

// updateProfile = {
//   name: "zoro",
//   email: "zoro@gmail.com"
// }

// console.log(updateProfile);
// console.log(linkedin_profile);

const user_details = {
  user: "madhava",
  phoneNUmber: 98667,
  email: "madhavareedyrb@gmail.com",
};

const upadte_user = { ...user_details };
upadte_user.user = "madhavareddy";
// upadte_user = {
//   mad: "madhava"
// } // Error

console.log(user_details);
console.log(upadte_user);
