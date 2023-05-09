const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');

const city_name= document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval===""){
        city_name.innerText = "plesse write your city name first";
    }

   else{
    
     
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=43bd0991c50f3ec02d4ce9ccfdd1a801`;
     const response = await fetch(url);
     const data = await response.json();
     const arrDATA = [data];

     city_name.innerText = `${arrDATA[0].name}, ${arrDATA[0].sys.country}`;
    
  
     temp.innerText = arrDATA[0].main.temp;
    //  temp_status = arrDATA[0].weather[0].main;
     
    const tempmood =  arrDATA[0].weather[0].main;
    
    if(tempmood==="Clear"){
        temp_status.innerHTML = 
        "<i class='fas fa-sun' style = 'color : #eccc68;'></i>";     
    }else if(tempmood==="Clouds"){
        temp_status.innerHTML = 
        "<i class='fas fa-cloud' style = 'color : #f1f2f6;'></i>";    
    }else if(tempmood==="Rain"){
        temp_status.innerHTML = 
        "<i class='fas fa-cloud-rain' style = 'color : #a4b0be;'></i>";    
    }else{
        temp_status.innerHTML = 
        "<i class='fas fa-cloud' style = 'color : #f1f2f6;'></i>";    
    }

  
  }                                                         
}


submitBtn.addEventListener('click', getInfo);