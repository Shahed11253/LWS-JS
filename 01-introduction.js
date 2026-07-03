// #01 JavaScript Bangla Tutorial | Introduction to JavaScript

// এই বিডিওতে দেখানো হয়ছে w3schools থেকে js Home, js introduction, js where to এ বিষয়গুলো ।

// js ইন্ট্যাঅ্যাকটিভের জন্য ব্যাবহার হয় ।

// ES = ECMAScript এর সংক্ষিপ্ত রূপ। এটি একটি স্ট্যান্ডার্ড যা জাভাস্ক্রিপ্টের জন্য নির্ধারিত। ECMAScript হল একটি স্ক্রিপ্টিং ভাষা যা ওয়েব ব্রাউজার এবং সার্ভার-সাইড অ্যাপ্লিকেশনগুলিতে ব্যবহৃত হয়।

// js সিঙেল ('') এবং ডাবল ("") কোটেশন মার্কস ব্যাবহার করে স্ট্রিং ডিফাইন করতে পারে। তবে, সাধারণত ডাবল কোটেশন মার্কস ব্যাবহার করা হয়।

// জাভাস্ক্রিপ্টে সিঙ্গেল (') বা ডাবল (") দুটোই সমানভাবে সঠিক। তবে মডার্ন জাভাস্ক্রিপ্ট কমিউনিটিতে এবং বড় বড় প্রজেক্টে (যেমন React বা Node.js-এ) সিঙ্গেল কোটেশন (') বা ব্যাকটিক (`) বেশি ব্যবহার করা হয়। তাই দুটোই যে সমান জনপ্রিয়, এটা মাথায় রাখা ভালো।

// JavaScript Can Change HTML Content.

// JavaScript Can Change HTML Attribute Values.

// JavaScript Can Change HTML Styles (CSS).

// JavaScript Can Hide HTML Elements.

// JavaScript Can Show HTML Elements.

// <p> Hello World! </p> এখানের পুরো লাইনটি একটি HTML এলিমেন্ট। <p></p> এগুলো ট্যাগ। <p> ট্যাগের মধ্যে থাকা "Hello World!" হল প্যারাগ্রাফের কনটেন্ট বা innerHTML

// মোটামুটি js এইচটিএমএলের সবকিছু্  চেন্জ করতে পারে । 

// ডটের (.) পর js এ কখনো হাইফান ইউজ হয়না [document.getElementById("demo").style.fontSize = "35px";] হাইফানের পরে প্রথম ওয়ার্ডের প্রথম অক্ষর বড় হবে। এটাকে বলা হয় (camelCase) যেমনঃ background-color = backgroundColor

// js code html এর ভিতরে head or body দুইজায়গাতেই লিখা যায় । তবে head এর মধ্যে লিখলে ওয়েবসাইট লোড হতে বেশি সময় লাগবে । তাই js code সাধারণত ending body এর উপরে লেখা হয় ।



/* html এর মধ্যে ‍ <script> </script> ট্যাগের মধ্যে js code লিখা হয় । <script> </script> চাইলে বারবার ও ইউজ করা যায় । যেমন: 
 <!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction1()">Try it</button>

<script>
function myFunction1() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

<script>
function myFunction2() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html> */



/* To add several script files to one page  - use several script tags:[<script src="myScript1.js"></script>
<script src="myScript2.js"></script>] */ 


// external js ফাইল ইউজ করলে কোনো ইউজার একবার ওয়েবসাইট লোড করলে js ফাইলটি একবার লোড হয়ে যায় । এটা ইউজারের ক্যাশ মেমোরিতে থেকে যায় । পরবর্তীতে শুধূ এখান থেকেই  ইউজ হয় । তাই ওয়েবসা্ইট লোড হতে কম সময় লাগে । তাই external js ফাইল ইউজ করা হয় ।



/* মডার্ন ওয়েব ডেভেলপমেন্টে এখন স্ক্রিপ্ট ট্যাগ <head>-এর ভেতরেও রাখা হয়, তবে সাথে একটি স্পেশাল কিওয়ার্ড ব্যবহার করা হয়— defer।
<head>
    <script src="script.js" defer></script>
</head>
এই defer ব্যবহার করলে ব্রাউজার ব্যাকগ্রাউন্ডে JS ডাউনলোড করে কিন্তু HTML লোড শেষ না হওয়া পর্যন্ত কোড এক্সিকিউট করে না। ফলে ওয়েবসাইট স্লো হয় না। */

