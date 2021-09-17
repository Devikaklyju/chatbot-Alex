var know = {
    "hello":"Hi",
    "how are you?":"Good",
    "john":"hi john",
    "what is your name?":"Alex",
    "Are you a human?":"No, I am a chatbot!",
    "Who made you?":"Devika K Lyju",
    "Which language do you speak?":"English.",
    "Where does Devika hail from?":"Kottayam,Kerala,India",
    "How old is Devika?":"20",
    "What does Devika do?":"Devika is a B.Tech undergraduate at Government Engineering College, Thrissur.",
    "What is Devika good at?":"Web development!",
    "How to contact Devika?":"You can connect with Devika through LinkedIn, Instagram and Email!"
    // You Can Add More Stuff Here - It is customizable. - you can add more than 3 
};
function talk() {
     var user =document.getElementById("userBox") .value;
     document.getElementById("chatLog").innerHTML +=user+"<br>";
    if(user in know){
        document.getElementById("chatLog").innerHTML += know[user]+"<br>";
    } else{
        document.getElementById("chatLog").innerHTML+="I am not a genius , ask me something that I know!<br>";}}