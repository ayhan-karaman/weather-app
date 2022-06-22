

function WeatherList({weathers}) {
   
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var today = new Date();

    return <div>
     
        
        <table id="weatherTable">
            <tbody>
                <tr>
                    {
                        
                        days.slice(today.getDay()-1,today.getDay()-1+8).map((item, index) => (
                            <th key={index}>{item}</th>
                        ))
                    }
                   
                </tr>
                <tr>
               
                {
                    
                    weathers.map((item,index) => (
                        <td key={index}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`${item.weather[0].icon}`}></img></td>
                    ))
                }
                </tr>
                <tr>
                {
                    weathers.map((item,index) => (
                        <td key={index}> {`${Math.round(item.temp.max-273.15)}°C`} <br/>  <br/>{`${Math.round(item.temp.min-273.15)}°C`}</td>
                    ))
                }
                </tr>
            </tbody>
        </table>
     
    </div>
    
    
}

export default  WeatherList