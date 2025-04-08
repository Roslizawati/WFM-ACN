{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 1. Countdown to next shift\
const shiftTime = new Date();\
shiftTime.setHours(9, 0, 0, 0); // Example shift at 9:00 AM\
\
function updateCountdown() \{\
  const now = new Date();\
  let diff = shiftTime - now;\
\
  if (diff < 0) \{\
    diff += 24 * 60 * 60 * 1000; // If past, show next day\
  \}\
\
  const hours = Math.floor(diff / (1000 * 60 * 60));\
  const minutes = Math.floor((diff / (1000 * 60)) % 60);\
\
  const countdownText = `$\{hours\}h $\{minutes\}m`;\
  document.getElementById('shiftCountdown').innerText = countdownText;\
\}\
\
setInterval(updateCountdown, 1000);\
updateCountdown();\
\
\
// 2. Highlight active sidebar item\
const sidebarItems = document.querySelectorAll(".sidebar ul li");\
\
sidebarItems.forEach(item => \{\
  item.addEventListener("click", () => \{\
    sidebarItems.forEach(el => el.classList.remove("active"));\
    item.classList.add("active");\
  \});\
\});\
\
// 3. Optional: Display current time somewhere (use <span id="currentTime"> in HTML)\
function updateCurrentTime() \{\
  const now = new Date();\
  document.getElementById("currentTime").innerText = now.toLocaleTimeString();\
\}\
setInterval(updateCurrentTime, 1000);\
}