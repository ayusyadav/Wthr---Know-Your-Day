import React, { useEffect, useState, useRef } from 'react'
import Button from './Button'
import SmallBox from './SmallBox'
import Airquality from './Airquality'
import Airquality2 from './Airquality2'
import Sunset from './Sunset'
import ForecastCard from './ForecastCard'
import icon1 from '../assets/icons/icon1d.svg'
import icon2 from '../assets/icons/icon2d.svg'
import icon3 from '../assets/icons/icon3d.svg'
import icon4 from '../assets/icons/icon4d.svg'
import icon9 from '../assets/icons/icon9d.svg'
import icon10 from '../assets/icons/icon10d.svg'
import icon11 from '../assets/icons/icon11d.svg'
import icon13 from '../assets/icons/icon13d.svg'
import icon50 from '../assets/icons/icon50d.svg'
import Todayattemp from './Todayattemp'
import Todayatwind from './Todayatwind'

const Mainweb = () => {
    const inputRef = useRef()
    const [weatherData, setweatherData] = useState(false)
    const [airpollution, setairpollution] = useState(false)
    const [forecast, setforecast] = useState(false)
    const [windandtemp, setwindandtemp] = useState(false)



    const next3HoursForecast = {
        // --- THUNDERSTORMS ---
        "thunderstorm with light rain": "Expect light rain alongside rumbles of thunder and lightning",
        "thunderstorm with rain": "A steady rain is likely, accompanied by a moderate thunderstorm",
        "thunderstorm with heavy rain": "Be prepared for a downpour, with strong thunder and lightning activity",
        "light thunderstorm": "Isolated lightning and thunder are possible, with minimal rain impact",
        "thunderstorm": "A strong possibility of heavy rain, lightning, and thunder",
        "heavy thunderstorm": "Severe weather is expected, including intense lightning and very heavy rainfall",
        "ragged thunderstorm": "An intense thunderstorm with very irregular, torn-looking cloud edges",
        "thunderstorm with light drizzle": "Light, fine mist-like rain with occasional thunder",
        "thunderstorm with drizzle": "A steady fine mist with the potential for thunder and lightning",
        "thunderstorm with heavy drizzle": "A dense, fine mist or drizzle, combined with thunder and lightning",

        // --- RAIN & DRIZZLE ---
        "light intensity drizzle": "A very light, fine mist or drizzle; visibility remains good",
        "drizzle": "A steady, light, fine rain that falls from low clouds",
        "heavy intensity drizzle": "A thick, continuous, fine mist or drizzle that may reduce visibility",
        "light intensity drizzle rain": "A mix of light drizzle and light rain is falling",
        "drizzle rain": "A mixture of drizzle and steady rain",
        "heavy intensity drizzle rain": "Heavy rain combined with a thick drizzle",
        "shower rain and drizzle": "Intermittent rain showers mixed with periods of drizzle",
        "heavy shower rain and drizzle": "Strong, intermittent rain showers mixed with heavy drizzle",
        "shower drizzle": "Intermittent periods of light, fine mist-like rain",
        "light rain": "Intermittent light rain showers are possible",
        "moderate rain": "Expect a steady and continuous rainfall",
        "heavy intensity rain": "A persistent and heavy downpour is expected",
        "very heavy rain": "Intense, extremely heavy rain; flash flood potential is elevated",
        "extreme rain": "The most intense level of rain, posing a significant flood risk",
        "freezing rain": "Rain that freezes immediately upon contact with surfaces, creating ice",

        // --- SHOWER RAIN ---
        "light intensity shower rain": "Intermittent, light rain showers will pass through",
        "shower rain": "Intermittent light rain showers are possible",
        "heavy intensity shower rain": "Heavy, but short-lived, downpours are likely",
        "ragged shower rain": "Fast-moving, brief, and intense rain showers",

        // --- SNOW, SLEET, & MIXED PRECIPITATION ---
        "light snow": "The chance of light snowfall, with minimal or no accumulation",
        "snow": "A steady snowfall is expected, with potential for accumulation",
        "heavy snow": "A continuous and intense snowfall; travel difficulties are likely",
        "sleet": "A mix of rain and melting snow, or frozen rain pellets",
        "light shower sleet": "Brief periods of light sleet falling",
        "shower sleet": "Intermittent showers of sleet",
        "light rain and snow": "A light mixture of rain and snow is falling",
        "rain and snow": "A steady mix of rain and snow",
        "light shower snow": "Brief, light snow flurries are expected",
        "shower snow": "Intermittent snow showers",
        "heavy shower snow": "Strong, but short-lived, snow squalls are likely",

        // --- VISIBILITY & HAZARDS ---
        "mist": "Visibility may be reduced due to a thin, widespread mist",
        "smoke": "Visibility will be impacted by smoke particles in the air",
        "haze": "A general reduction in visibility due to atmospheric dust or pollution",
        "sand/dust whirls": "Localized, temporary whirlwinds lifting sand and dust",
        "fog": "Dense moisture in the air will significantly reduce visibility",
        "sand": "Air quality and visibility will be poor due to airborne sand",
        "dust": "Air quality and visibility will be poor due to airborne dust",
        "volcanic ash": "Volcanic ash is in the atmosphere, posing a risk to air travel and health",
        "squalls": "Sudden, strong, and violent wind gusts",
        "tornado": "An extremely dangerous rotating column of air; seek immediate shelter",

        // --- CLOUDS & CLEAR SKY ---
        "clear sky": "Enjoy the bright, sunny conditions while they last. A perfect time for outdoor activities",
        "few clouds": "A light, scattered cloud cover will begin to appear, but the sun will still dominate",
        "scattered clouds": "The sky will be partly cloudy, with a mix of sun and clouds",
        "broken clouds": "The sky will be mostly cloudy, with small patches of blue sky visible",
        "overcast clouds": "The sky is completely covered with a solid layer of clouds"
    };


    const aqiMessage = {
        "1": "Good",
        "2": "Fair",
        "3": "Moderate",
        "4": "Poor",
        "5": "Very Poor",
    }


    const allIcons = {
        "01d": icon1,
        "01n": icon1,
        "02d": icon2,
        "02n": icon2,
        "03d": icon3,
        "03n": icon3,
        "04d": icon4,
        "04n": icon4,
        "09d": icon9,
        "09n": icon9,
        "10d": icon10,
        "10n": icon10,
        "11d": icon11,
        "11n": icon11,
        "13d": icon13,
        "13n": icon13,
        "50d": icon50,
        "50n": icon50,
    }

    const allMonths = {
        "1": "Jan",
        "2": "Feb",
        "3": "Mar",
        "4": "Apr",
        "5": "May",
        "6": "Jun",
        "7": "Jul",
        "8": "Aug",
        "9": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec",
    }

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }

    
    const search = async (city) => {
        const APPID = import.meta.env.VITE_APP_ID;
        if (city === "") {
            alert("Enter City Name");
            return;
        }
        try {
            const url2 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${import.meta.env.VITE_APP_ID}`;
            const response2 = await fetch(url2);
            const data2 = await response2.json();

            const lat = data2[0].lat;
            const lon = data2[0].lon
            const url3 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response3 = await fetch(url3);
            const data3 = await response3.json();

            const day1 = new Date((data3.list[0].dt) * 1000);
            const day2 = new Date((data3.list[8].dt) * 1000);
            const day3 = new Date((data3.list[16].dt) * 1000);
            const day4 = new Date((data3.list[24].dt) * 1000);
            const day5 = new Date((data3.list[32].dt) * 1000);





            setforecast({
                formessage: data3.list[1].weather[0].description,
                togive: next3HoursForecast[data3.list[1].weather[0].description],



                month1: allMonths[day1.getMonth() + 1],
                date1: day1.getDate(),
                weekday1: day1.toLocaleString('en-US', { weekday: 'long' }),
                temp1: Math.floor(data3.list[0].main.temp),
                dayicon1: allIcons[data3.list[0].weather[0].icon] || icon1,


                month2: allMonths[day2.getMonth() + 1],
                date2: day2.getDate(),
                weekday2: day2.toLocaleString('en-US', { weekday: 'long' }),
                temp2: Math.floor(data3.list[8].main.temp),
                dayicon2: allIcons[data3.list[8].weather[0].icon] || icon1,

                month3: allMonths[day3.getMonth() + 1],
                date3: day3.getDate(),
                weekday3: day3.toLocaleString('en-US', { weekday: 'long' }),
                temp3: Math.floor(data3.list[16].main.temp),
                dayicon3: allIcons[data3.list[16].weather[0].icon] || icon1,

                month4: allMonths[day4.getMonth() + 1],
                date4: day4.getDate(),
                weekday4: day4.toLocaleString('en-US', { weekday: 'long' }),
                temp4: Math.floor(data3.list[24].main.temp),
                dayicon4: allIcons[data3.list[24].weather[0].icon] || icon1,

                month5: allMonths[day5.getMonth() + 1],
                date5: day5.getDate(),
                weekday5: day5.toLocaleString('en-US', { weekday: 'long' }),
                temp5: Math.floor(data3.list[32].main.temp),
                dayicon5: allIcons[data3.list[32].weather[0].icon] || icon1,

            })


            // const sunriseData = new Date((data.sys.sunrise) * 1000)
            const time1 = new Date((data3.list[0].dt) * 1000)
            const time2 = new Date((data3.list[1].dt) * 1000)
            const time3 = new Date((data3.list[2].dt) * 1000)
            const time4 = new Date((data3.list[3].dt) * 1000)
            const time5 = new Date((data3.list[4].dt) * 1000)
            const time6 = new Date((data3.list[5].dt) * 1000)
            const time7 = new Date((data3.list[6].dt) * 1000)
            const time8 = new Date((data3.list[7].dt) * 1000)


            setwindandtemp({
                // sunrise: sunriseData.toLocaleTimeString('en-US', timeOptions)
                Time1: time1.toLocaleTimeString('en-US', timeOptions),
                Time2: time2.toLocaleTimeString('en-US', timeOptions),
                Time3: time3.toLocaleTimeString('en-US', timeOptions),
                Time4: time4.toLocaleTimeString('en-US', timeOptions),
                Time5: time5.toLocaleTimeString('en-US', timeOptions),
                Time6: time6.toLocaleTimeString('en-US', timeOptions),
                Time7: time7.toLocaleTimeString('en-US', timeOptions),
                Time8: time8.toLocaleTimeString('en-US', timeOptions),

                dayicon1: allIcons[data3.list[0].weather[0].icon] || icon1,
                dayicon2: allIcons[data3.list[1].weather[0].icon] || icon1,
                dayicon3: allIcons[data3.list[2].weather[0].icon] || icon1,
                dayicon4: allIcons[data3.list[3].weather[0].icon] || icon1,
                dayicon5: allIcons[data3.list[4].weather[0].icon] || icon1,
                dayicon6: allIcons[data3.list[5].weather[0].icon] || icon1,
                dayicon7: allIcons[data3.list[6].weather[0].icon] || icon1,
                dayicon8: allIcons[data3.list[7].weather[0].icon] || icon1,

                temp1: Math.floor(data3.list[0].main.temp),
                temp2: Math.floor(data3.list[1].main.temp),
                temp3: Math.floor(data3.list[2].main.temp),
                temp4: Math.floor(data3.list[3].main.temp),
                temp5: Math.floor(data3.list[4].main.temp),
                temp6: Math.floor(data3.list[5].main.temp),
                temp7: Math.floor(data3.list[6].main.temp),
                temp8: Math.floor(data3.list[7].main.temp),

                windspeed1: Math.round((data3.list[0].wind.speed) * 3.6 * 10) / 10,
                windspeed2: Math.round((data3.list[1].wind.speed) * 3.6 * 10) / 10,
                windspeed3: Math.round((data3.list[2].wind.speed) * 3.6 * 10) / 10,
                windspeed4: Math.round((data3.list[3].wind.speed) * 3.6 * 10) / 10,
                windspeed5: Math.round((data3.list[4].wind.speed) * 3.6 * 10) / 10,
                windspeed6: Math.round((data3.list[5].wind.speed) * 3.6 * 10) / 10,
                windspeed7: Math.round((data3.list[6].wind.speed) * 3.6 * 10) / 10,
                windspeed8: Math.round((data3.list[7].wind.speed) * 3.6 * 10) / 10,

                windangle1: (data3.list[0].wind.deg - 45),
                windangle2: (data3.list[1].wind.deg - 45),
                windangle3: (data3.list[2].wind.deg - 45),
                windangle4: (data3.list[3].wind.deg - 45),
                windangle5: (data3.list[4].wind.deg - 45),
                windangle6: (data3.list[5].wind.deg - 45),
                windangle7: (data3.list[6].wind.deg - 45),
                windangle8: (data3.list[7].wind.deg - 45),
            })



            const url4 = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
            const response4 = await fetch(url4)
            const data4 = await response4.json();


            setairpollution({
                pm25: Math.floor(data4.list[0].components.pm2_5 * 10) / 10,
                so2: Math.floor(data4.list[0].components.so2 * 10) / 10,
                no2: Math.floor(data4.list[0].components.no2 * 10) / 10,
                o3: Math.floor(data4.list[0].components.o3 * 10) / 10,

                co: Math.floor(data4.list[0].components.co * 10) / 10,
                nh3: Math.floor(data4.list[0].components.nh3 * 10) / 10,
                no: Math.floor(data4.list[0].components.no * 10) / 10,
                pm10: Math.floor(data4.list[0].components.pm10 * 10) / 10,

                aqi: data4.list[0].main.aqi,
                aqimessage: aqiMessage[data4.list[0].main.aqi],
            })

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || icon1;
            const dateObject = new Date((data.dt) * 1000);
            const sunriseData = new Date((data.sys.sunrise) * 1000)
            const sunsetData = new Date((data.sys.sunset) * 1000)

            setweatherData({
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                windspeed: data.wind.speed,
                visibility: data.visibility / 1000,
                feelslike: Math.floor(data.main.temp * 10) / 10,
                temperature: Math.floor(data.main.temp),
                location: data2[0].name,
                country: data2[0].country,
                icon: icon,
                condition: data.weather[0].main,
                year: dateObject.getFullYear(),
                month: allMonths[dateObject.getMonth() + 1] || "Oct",
                date: dateObject.getDate(),
                weekday: dateObject.toLocaleString('en-US', { weekday: 'long' }),
                sunrise: sunriseData.toLocaleTimeString('en-US', timeOptions),
                sunset: sunsetData.toLocaleTimeString('en-US', timeOptions),
            })
        } catch (error) {

        }

    }

    useEffect(() => {

        search("Lucknow");



    }, [])



    return (<>

        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <div className=' flex flex-col gap-3 h-screen w-full  rounded-3xl pt-4 pl-4 pr-4 overflow-auto '>

            {/* Navbar of website */}
            <div id='nav' className='text-white flex flex-row justify-between items-center ' >
                <span id='logo'>
                    <img width={52} src="./logo.png" alt="" />
                </span>
                <span id='search' className=' bg-gray-700/40 backdrop-blur-[3px] h-12 
                max-lg:w-1/2 lg:w-xl rounded-full flex flex-row justify-between items-center '>
                    <input ref={inputRef} placeholder='Enter city name' type="text" className='text-white h-12 w-full rounded-full px-4 pr-12 outline-0' />
                    <span className='absolute right-4 rounded-r-full cursor-pointer p-3' onClick={() => search(inputRef.current.value)}>
                        <img src="./search.svg" alt="" />
                    </span>
                </span>
                <span id='current location' className='max-lg:text-sm' onClick={() => search("lucknow")} >
                    <Button text="Your Location" />
                </span>
            </div>


            {/* Content */}


            <div id='main content' className='flex max-lg:flex-col max-lg:w-full lg:flex-row h-full p-2 gap-3'>

                {/* Left portion */}

                {/* Now */}
                <div className='flex flex-col max-lg:w-full  lg:w-[16%] h-full gap-4'>

                    <div id='Now' className='text-white bg-gray-700/40 backdrop-blur-[3px] h-fit rounded-2xl p-5 max-lg:w-full flex flex-col gap-5'>
                        <span className='text-xl' >
                            Now
                        </span>
                        <span className='flex flex-row items-center text-7xl gap-10 max-lg:justify-center'>
                            {weatherData.temperature}&deg;c
                            <img className=' w-18 bottom-0' src={weatherData.icon} alt="wind" />
                        </span>
                        <span className=''>
                            {weatherData.condition}
                        </span>
                        <div className='h-[1px] w-full bg-gray-600 text-center' />

                        <span className='flex flex-row items-center gap-3'>
                            <img src="./calendar.svg" alt="calendar" />
                            <span>
                                {weatherData.weekday} {weatherData.date}, {weatherData.month} {weatherData.year}
                            </span>
                        </span>
                        <span className='flex flex-row items-center gap-3'>
                            <img src="./location.svg" alt="calendar" />
                            <span>
                                {weatherData.location}, {weatherData.country}
                            </span>
                        </span>
                    </div>

                    {/* 5 days forecast */}

                    <div id='5 day forecast' className='text-white bg-gray-700/40 backdrop-blur-[3px] h-fit rounded-2xl p-2 pt-4'>

                        <span className='p-3 py-5 text-2xl'>
                            5 Days Forecast
                        </span>

                        <div className='flex flex-col gap-3 py-5'>

                            <ForecastCard temp={forecast.temp1} date={forecast.day1} month={forecast.month1} day={forecast.weekday1} icon={forecast.dayicon1} />


                            <ForecastCard temp={forecast.temp2} date={forecast.day2} month={forecast.month2} day={forecast.weekday2} icon={forecast.dayicon2} />


                            <ForecastCard temp={forecast.temp3} date={forecast.day3} month={forecast.month3} day={forecast.weekday3} icon={forecast.dayicon3} />


                            <ForecastCard temp={forecast.temp4} date={forecast.day4} month={forecast.month4} day={forecast.weekday4} icon={forecast.dayicon4} />


                            <ForecastCard temp={forecast.temp5} date={forecast.day5} month={forecast.month5} day={forecast.weekday5} icon={forecast.dayicon5} />
                        </div>










                    </div>
                </div>







                {/* Right portion */}

                <div className='flex flex-col max-lg:w-full  lg:w-[83.2%] h-full gap-4 text-white'>


                    {/* Today highlight */}
                    <div className='bg-gray-700/40 backdrop-blur-[3px] rounded-2xl h-fit'>
                        <div className='flex flex-row gap-5 py-3 px-5  text-xl items-center justify-between'>
                            <span>
                                Today Highlights
                            </span>




                        </div>

                        <div className='flex flex-row max-lg:flex-col w-full px-4 py-3  gap-4 h-fit'>
                            <Sunset sunset={weatherData.sunset} sunrise={weatherData.sunrise} togive={forecast.togive} />
                            <div className='bg-gray-900/40 rounded-3xl max-lg:w-full  lg:w-1/2 p-3 h-fit gap-3 flex flex-col'>
                                <div className='flex justify-between items-center '>
                                    <span className='text-gray-400'>
                                        Air Quality Index
                                    </span>
                                    <span>
                                        <button className='bg-gray-600/40 rounded-3xl w-fit px-3 py-2'>
                                            {airpollution.aqimessage}
                                        </button>
                                    </span>
                                </div>

                                <span className='flex flex-col gap-3'>

                                    <Airquality pm25={airpollution.pm25} so2={airpollution.so2} no2={airpollution.no2} o3={airpollution.o3} />
                                    <Airquality2 co={airpollution.co} nh3={airpollution.nh3} no={airpollution.no} pm10={airpollution.pm10} />
                                </span>
                            </div>

                        </div>

                        <div className='flex max-lg:flex-col lg:flex-row p-2 gap-3 justify-around w-full'>

                            <span className='flex flex-row gap-8 max-lg:w-full lg:w-1/2 px-3'>


                                <SmallBox text="Humidity" value={weatherData.humidity} unit="%" />

                                <SmallBox text="Pressure" value={weatherData.pressure} unit="hPa" />
                            </span>

                            <span className='flex flex-row gap-8 max-lg:w-full lg:w-1/2 px-3'>

                                <SmallBox text="Visibility" value={weatherData.visibility} unit="km" />

                                <SmallBox text="Feels Like" value={weatherData.feelslike} unit="&deg;c" />
                            </span>
                        </div>



                    </div>









                    {/* today at */}

                    <div className='p-1 flex flex-col gap-1  h-fit max-lg:mb-5'>
                        <div className=' text-xl px-5 pt-2'>
                            Today At
                        </div>

                        <div className='flex max-lg:flex-col lg:flex-row lg:px-5 lg:gap-5 '>


                            {/* part 1 */}


                            <div className='flex flex-col justify-between w-full rounded-2xl'>
                                <div className='flex flex-row justify-between py-3 w-full'>
                                    <Todayattemp temp={windandtemp.temp1} time={windandtemp.Time1} icon={windandtemp.dayicon1} />
                                    <Todayattemp temp={windandtemp.temp2} time={windandtemp.Time2} icon={windandtemp.dayicon2} />
                                    <Todayattemp temp={windandtemp.temp3} time={windandtemp.Time3} icon={windandtemp.dayicon3} />
                                    <Todayattemp temp={windandtemp.temp4} time={windandtemp.Time4} icon={windandtemp.dayicon4} />
                                </div>
                                <div className='flex flex-row justify-between py-3 w-full'>
                                    <Todayatwind time={windandtemp.Time1} speed={windandtemp.windspeed1} angle={windandtemp.windangle1} />
                                    <Todayatwind time={windandtemp.Time2} speed={windandtemp.windspeed2} angle={windandtemp.windangle2} />
                                    <Todayatwind time={windandtemp.Time3} speed={windandtemp.windspeed3} angle={windandtemp.windangle3} />
                                    <Todayatwind time={windandtemp.Time4} speed={windandtemp.windspeed4} angle={windandtemp.windangle4} />
                                </div>



                            </div>
                            <div className='flex flex-col justify-between w-full'>
                                <div className='flex flex-row justify-between py-3 w-full'>
                                    <Todayattemp temp={windandtemp.temp5} time={windandtemp.Time5} icon={windandtemp.dayicon5} />
                                    <Todayattemp temp={windandtemp.temp6} time={windandtemp.Time6} icon={windandtemp.dayicon6} />
                                    <Todayattemp temp={windandtemp.temp7} time={windandtemp.Time7} icon={windandtemp.dayicon7} />
                                    <Todayattemp temp={windandtemp.temp8} time={windandtemp.Time8} icon={windandtemp.dayicon8} />
                                </div>
                                <div className='flex flex-row justify-between py-3 w-full'>
                                    <Todayatwind time={windandtemp.Time5} speed={windandtemp.windspeed5} angle={windandtemp.windangle5} />
                                    <Todayatwind time={windandtemp.Time6} speed={windandtemp.windspeed6} angle={windandtemp.windangle6} />
                                    <Todayatwind time={windandtemp.Time7} speed={windandtemp.windspeed7} angle={windandtemp.windangle7} />
                                    <Todayatwind time={windandtemp.Time8} speed={windandtemp.windspeed8} angle={windandtemp.windangle8} />
                                </div>



                            </div>

                        </div>



                    </div>

                </div>


            </div>


        </div>




    </>
    )
}

export default Mainweb