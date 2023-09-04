/* Global Variables */

// Creating a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDay()+'.'+d.getMonth()+'.'+d.getFullYear();


const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip='
const apiKey='&appid=55cffcd4e3b75d1539349c5319242113&units=metric';


document.getElementById('generate').addEventListener('click', getUserCredentials);

function getUserCredentials(e) {
   // code logic for getting user credentials
   const userzip = document.getElementById("zip").value;
   const userFav = document.getElementById("feelings").value;
   getUserTemp(baseURL,userzip,apikey)
   .then((data) => {
     const day = data.list[0].dt_txt.slice(0,10);
     postData('/add', {temp:data.list[0].main.temp, date:day, date:day, userRes:userFav})
     updateUI();
   })

  }

const getUserTemp = async (baseURL, userzip, apikey) => {
  const res = await fetch(baseURL+userzip+apikey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

const postData =async (url,data)=> {
  const response = await fetch(url,{
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
  });

  try{
    const newDate = await response.json();
    return newDate;
  } catch(error){
    console.log("error",error);
  }
}

const updateUI = async () =>{
    const res = await fetch('/get');
    try {
    const userData = await res.json()
    document.getElementById('temp').innerHTML =`Your Temprature: ${userData.temp} celcius`;
    document.getElementById('date').innerHTML = `Your Date: ${userData.date}`;
    document.getElementById('content').innerHTML =`You Feel : ${userData.userRes}`;
    }catch(error){
      console.log("error",error);
    }}