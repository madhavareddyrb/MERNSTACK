# Day 2 - HTML5 Basics Assignment:

## 1.What is HTML?
Html is a Hyper Text Markup language which is used to create structure of web page(like headings,paragraphs,tables,text,forms etc) and Without HTML browsers are not able to understand what is what, purpose or structure of page, Its Just a text.

Example: Amazon,Products, Images, NavBar etc 

## without html 

all shows just as simple text and we can't create navbar and we can't add image also.

## With HTML:

<h1>Amazon</h1>
<p>Product</p>
<img src="path " alt="laptop" >
<nav> <li> </li> </nav>
Browser Understands that h1 means some bold big heading,h2,h3,h4,h5,h6 one by one size is going to decreases.

img means an photo and in that if image not loaded means alt name shows instand of image

nav -- uses to create navabrs easily

## How Browser Reads HTML?
in simple 3 steps:
1. We write html code

2.Browser understands tags(every tag has some specific meaning and how to show in browser)

3.Browser shows the output on screen

Example:
when we want to create big heading we use <h1>Amazon</h1>
the browser thinks that h1: means big text and it shows big text on screen with bold

## What are HTML Tags?
tags are instructions to browser and how to show output

Format:
<h1> Amazon </h1>
   ↑          ↑            ↑ 
Opening   content	      Closing Tag
Tag	

Exmple:
<h1> Amazon </h1>
   ↑ 	        ↑            ↑ 
Tell It	     Show This         End	

## Basic Html Tags(Important):
heading(h1 to h6), paragraph(p), button, Input Tag,Break

1.Heading Tag:
html →  <h1> A big text with dark color </h1>
shows: A big text with dark color

2.Paragraph tag:
html → <p> This is a normal text </p>
shows: this is a normal text 

3.Button Tag:
html→ <button> submit </button>
shows: A clickable box(button) with submit

4.Input tag:
html → <input type= "text"> 
shows: An empty text box(_____) to enter details of name 

5.Break tag:
html → Paragraph 1 <br> Paragraph 2
shows: 
Paragraph 1
Paragraph 2

## Day2: Assignment Own Practice amazon sign in form

<!doctype html>
<html>
  <head>
    <title>Register</title>
  </head>
  <style>
    body {
      text-align: center;
      background-color: lightcyan;
      font-family: monospace;
    }
    h1{
      font-size: 50px;
    }
    div{
      border: 1px solid black;
    }
    input, button{
      margin: 5px;
      padding: 5px;
      border: 1px solid rgb(75, 10, 21);
      border-radius: 4px;
    }
    p{
      align-items: center;
      font-size: 15px;

    }
    h3{
      font-size: 20px;
    }
    .continue{
      width: 175px;
      background-color: yellow;
      color: black;
      border: none;
      border-radius: 50px;
      padding: 10px;
      font-size: 15px;
    }
    .continue:hover{
      background-color: rgb(240, 240, 88);
    }
  </style>

  <body>
    <h1>Amazon.in</h1>
    <!--<input type="search" />
    <button>Search</button>-->
    <br><br>
    <div>
      <h3>Sign In or Create Account</h3>
    <p>Email or Phone Number</p>
    <input type="text">
    <br>
    <button class="continue"><b>Continue</b></button>

    <br>
    <p>Don't Have Account <a href=""><b>Create Account</b></a></p>


    </div>
    
   
  </body>
</html>


