var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
apik="b8fa42a73ee4b87866649843649b87b0"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={b8fa42a73ee4b87866649843649b87b0}
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data=>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            

            city.innerHTML=`Weather of ${nameval}`
            temp.innerHTML=`Temperature: ${convertion(temperature)} `
            description.innerHTML=`Sky Conditions: ${descrip}`
            
        })
        

});
