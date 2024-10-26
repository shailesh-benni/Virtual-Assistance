let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice =document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    let day=new Date()
    let hrs =day.getHours()
    if(hrs>=0 && hrs<12){ speak("Good Morning Sir")}
    else if (hrs>=12 && hrs<16)
    {speak("Good Afternoon Sir")}
    else {speak("Good Evening Sir")}

}

  window.addEventListener('load',()=>{
      wishMe()
  })

let speechrecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechrecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText =transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none";
    voice.style.display="block";
})
function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello")||message.includes("hi")){
        speak("Hello Sir, How can I help you? ")
    }
    else if(message.includes("who are you?")){
        speak("I am virtual assistance, created by Shailesh sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube..")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook..")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram..")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open google")){
        speak("opening google..")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
       let finaltext =  "this is what i found on internet regarding"+message.replace("shailu","")
        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message.replace("shailu","")}`)
    }

}

