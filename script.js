
const search = async () => {
    let searchcity = cityname.value
    console.log(searchcity);
    if (searchcity) {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=400304924046d7591668f20d81417b43`)
       console.log(response.json().then((data)=>{console.log(data)
    

        let temp = data.main.temp
        let feels = data.main.feels_like
        let humi = data.main.humidity
        let pres = data.main.pressure
        let wind = data.wind.speed
        let ico = data.weather['icon']

        let sea = data.main.sea_level
        let grn = data.main.grnd_level
        /* let srise = moment(data.sys.sunrise).format('HH:mm a')
        let sset = moment(data.sys.sunset).format('HH:mm a') */

        let lati = data.coord.lat
        let long = data.coord.lon
        var doclati = window.document.getElementById("lati")
        var doclong = window.document.getElementById("longi")

        doclati.innerHTML = lati;
        doclong.innerHTML = long;
        //OUTPUT

        result.innerHTML =`
                        <div class="col-6">
                            <div class="card ms-4 me-3 pb-4" id="cards">
                                <div class="card-body">
                                  <div class="d-flex justify-content-center align-items-center">
                                    <img src="https://openweathermap.org/img/wn/${ico}" alt="">
                                    <div class="itemx">Light Rain</div>
                                </div>
                                  <div class="whthr-items ps-5 d-flex flex-column ">
                                      <div class="itemx">Temperature :  ${temp}</div>
                                      <div class="itemx">Feels Like :   ${feels}</div>
                                      
                                      <div class="itemx">Humidity :     ${humi}%</div>
                                      <div class="itemx">Pressure :     ${pres}</div>
                                      <div class="itemx">Wind Speed :   ${wind}</div>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="col-6">
                            <div class="card ms-3 me-3 pt-4 pb-4" id="cards">
                                <div class="card-body">
                                  <div class="more-items  d-flex flex-column h-100 justify-content-center">
                                      <div class="row">
                                        <div class="d-flex justify-content-center mb-3"><h5>Coordinates</h5></div>
                                        <div class="col-6 text-center">
                                            <p class="itemy">Latitude :</p>
                                            <p class="itemy" id="lati">${lati}</p>
                                        </div>
                                        <div class="col-6 text-center">
                                            <p class="itemy">Longitude :</p>
                                            <p class="itemy" id="longi">${long}</p>
                                        </div>
                                      </div>
                                      <div class="ps-5">
                                          <div class="itemx">Sea Level : ${sea}ft</div>
                                          <div class="itemx">Ground Level : ${grn}ft</div>
                                          <div class="itemx">Sunrise : </div>
                                          <div class="itemx">Sunset : </div>
                                      </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                        
                        
                        
        `
    }));

    }
    else{
        alert('please enter a valid input')
    }
}
