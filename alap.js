fetch("https://api.open-meteo.com/v1/forecast?latitude=47.53&longitude=21.62&hourly=temperature_2m")
.then(x => x.json())
.then(y => Megjelenit(y));

function Megjelenit(y){
    console.log(y)
    console.log(y.hourly.time.length)
    //          <tr>
    //           <td>John</td>
    //           <td>Doe</td>
    //          </tr>
    var sz = ""
    for (let i = 0; i < y.hourly.time.length; i++) {
        //console.log(i)
        sz+=`
        <tr>
        <td>${y.hourly.time[i]}</td>
        <td>${y.hourly.temperature_2m[i]} C°</td>
        </tr>
        `
        
    }
    document.getElementById("tablazat").innerHTML = sz
//diagram--------------------------------------------------------
    var data = [
        {
          x: y.hourly.time,
          y: y.hourly.temperature_2m,
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('myDiv', data);


      //Maximum diagram------------------------
       var maxtombi=[]
       var maxtombh=[]
      for (let i = 13; i < y.hourly.time.length; i += 24) {
        maxtombi.push(y.hourly.time[i])
        maxtombh.push(y.hourly.temperature_2m[i])
      }

      var ujmaxtombi = maxtombi.map((elem) =>{
        //console.log("bármi"+elem)
        var kecske = elem.split('T')
        return kecske[0]
      })

      var maxdata = [
        {
          x: ujmaxtombi,
          y: maxtombh,
          type: 'bar'
        }
      ];
      Plotly.newPlot('maxDiv', maxdata);

      //mindiagram---------------------------
      var mintombi=[]
      var mintombh=[]
     for (let i = 4; i < y.hourly.time.length; i += 24) {
       mintombi.push(y.hourly.time[i])
       mintombh.push(y.hourly.temperature_2m[i])
     }

     var ujmintombi = mintombi.map((elem) =>{
       //console.log("bármi"+elem)
       var kecske = elem.split('T')
       return kecske[0]
     })

     var mindata = [
       {
         x: ujmintombi,
         y: mintombh,
         type: 'bar'
       }
     ];
     Plotly.newPlot('minDiv', mindata);

 // 2 oszlopos diagram-----------------------------------------------------------------     
 var trace1 = {

    x: mintombi,
  
    y: mintombh,
  
    name: 'Minimum hőmérsékletek',
  
    type: 'bar'
  
  };
  
  
  var trace2 = {
  
    x: maxtombi,
  
    y: maxtombh,
  
    name: 'Maximum hőmérsékletek',
  
    type: 'bar',
    marker:{color:'green'}
  
  };
  
  
  var data = [trace1, trace2];
  
  
  var layout = {barmode: 'group'};
  
  
  Plotly.newPlot('oszlop2Div', data, layout);


}
