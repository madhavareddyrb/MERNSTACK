followers = '1400'
followers = '1400'+ 500

console.log(followers);

friends = ["madhava","sharath",]
friendsCheck = friends.includes("shankar") // includes checks friedns avaiable or not

console.log(friendsCheck) // false

// ## 🔢 Part 2: Primitive Data Types (Simple Values)v-- signle value

// 1.String(text data within quotes)

userName = "Madhava Reddy"

// 2.Numbers

following = 100
following = 100 + 5
console.log(following); // maths works

// 3.Boolean (yes / no )

isVerified = true
isPrivate = false

// 4.Null (empty)

bio = null

// undefined (never set) not declared

let location;

console.log(location);

// Non-Primitives 

// which stores more than a single value is know as non-primitive data types (Array, Object)

// 1.Array

following = ['luffy','zoro','chopper']

// to access the content inside we have indexs 
console.log(following[0]);

// how to add one more following 

following.push("userName")

console.log(following);

// 2.Object

userProfile = {
  username: "Madhava",
  followers: 150,
  isVerified: true,
}

// access using key

console.log(userProfile.username);


// real worlds Examples

instagramPost = {
  postId: 12345,  // number
  caption: "Anime is so good", // string
  likes : 523, // number
  isLiked: false, // Boolean
  comments: [
    {user: 'luffy', text: 'Amazing'},
    {user: "zoro", text: "So Good"},
  ],  // array 
  hastags: ['#anime', "#zoro"],  // array

}

// Accessing Nested Data

instagramPost.comments[0].user 
console.log(instagramPost.likes);
console.log(instagramPost.comments[0].user);
console.log(instagramPost.comments[1].user);


// Part4 : Primitives vs Non-Primitives difference

//primitive copying

let oldfollowers = 100; 

let newFollowers = oldfollowers ;
console.log(newFollowers);

newFollowers = 200
console.log(newFollowers);
console.log(oldfollowers);

// primitives each variable has its own copy 


// Non-Primitives (Reference Copy)

let follower1 = {
  username : "chopper",
  followers : 100,
}  // acutual object 

let follower2 = follower1

console.log(follower2);


// here when we try to copy values but won't copy values directly the follower2 also referce to same object in memory location so then if we change follower1 data its refelct on follower2 vise varsa

follower2.username = "Luffy"
follower1.followers = 200

console.log(follower2);
console.log(follower1);


// real example and what problems we face

let profileBioHistory = {
  user : "madhava",
  bio: 'Travleing',
}

let newbiohistory = profileBioHistory

//console.log(profileBioHistory);
//console.log(newbiohistory);


newbiohistory.bio = "Watching Anime"

console.log(newbiohistory);
console.log(profileBioHistory); 

// here profileBioHistory should be same as first one i don't want to show new value only 
// what we see in history is old bio, new bio so we don't want new bio should be same as old bio which is maintainable history

// So to avoid we use spread operator

let oldBio = {
  user: "Luffy",
  bio: "oldBio"
}

let newBio = {...oldBio};
console.log(newBio);
console.log(oldBio);


newBio.bio = "NewBio"

console.log(oldBio);
console.log(newBio);







