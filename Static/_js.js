//Toggle button function
function togglemenu(){
  document.getElementById('sidebar').classList.toggle('active');
}


// Slider range 
var slider=document.getElementById("slider");
var lab=document.getElementById("label-right");
lab.innerHTML=slider.value/100;
var value=(slider.value-slider.min)/(slider.max-slider.min)*100;
slider.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value+'%, white 0%)';

document.getElementById("slider").oninput= function(){
  lab.innerHTML=slider.value/100;
  value = (this.value-this.min)/(this.max-this.min)*100;
  slider.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value+'%, white 0%)';
}
function updateTextInput(val) {
  document.getElementById('x1').value=val/100; 
}


var slider2=document.getElementById("slider2");
var lab2=document.getElementById("label-right2");
lab2.innerHTML=slider2.value/100;
var value2=(slider2.value-slider2.min)/(slider2.max-slider2.min)*100;
slider2.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value2+'%, white 0%)';

document.getElementById("slider2").oninput= function(){
  lab2.innerHTML=slider2.value/100;
  value2 = (this.value-this.min)/(this.max-this.min)*100;
  slider2.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value2+'%, white 0%)';
}
function updateTextInput2(val) {
  document.getElementById('y1').value=val/100; 
}


var slider3=document.getElementById("slider3");
var lab3=document.getElementById("label-right3");
lab3.innerHTML=slider3.value/100;
var value3=(slider3.value-slider3.min)/(slider3.max-slider3.min)*100;
slider3.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value3+'%, white 0%)';

document.getElementById("slider3").oninput= function(){
  lab3.innerHTML=slider3.value/100;
  value3 = (this.value-this.min)/(this.max-this.min)*100;
  slider3.style.background='linear-gradient(90deg, rgb(78, 78, 192) '+value3+'%, white 0%)';
}
function updateTextInput3(val) {
  document.getElementById('z1').value=val/100; 
}




const DATA_COUNT = 101;
const labels = [];
for (let i = 0; i <DATA_COUNT; i++) {
  var j=100*i;
labels.push(j.toString());
}
var datapoints;
const data = {
labels: labels,
datasets: [
{
  label: 'Cubic interpolation (monotone)',
  data: datapoints,
  //borderColor: Utils.CHART_COLORS.red,
  fill: false,
  cubicInterpolationMode: 'monotone',
  tension: 0.4,
  pointRadius:0
}, {
    label: 'Cubic interpolation',
  data: datapoints,
  //borderColor: Utils.CHART_COLORS.blue,
  fill: false,
  tension: 0.4,
  pointRadius:0
},
]
};

const config = {
type: 'line',
data: data,
options: {
responsive: true,
plugins: {
  title: {
    display: true,
    text: 'Cubic interpolation',
    color: 'white',
  },
},
interaction: {
  intersect: false,
},
scales: {

  x: {
    display: true,
    title: {
        display: true,
        text: 'Time',
        color:'white'
    },
    grid: {
        display: true,
         tickColor: 'white'
      },
        ticks: {
          color: 'white'
        },
        border: {
          color: 'white'
        }
    
  },
  y: {
    display: true,
    title: {
      display: true,
      text: 'Temperature',
      color:'white'
    },
    grid: {
   
        display: true,
        tickColor: 'white'
      },
      ticks: {
          color: 'white',
         
        },
        border: {
          color: 'white'
        },
    
  }
}
},
};

var mychart = new Chart(
    document.getElementById('myChart'),
    config
    
    );


//time-temp graph
function plot_graph(_arr){

const DATA_COUNT = 101;
const labels = [];
for (let i = 0; i <DATA_COUNT; i++) {
  var j=100*i;
  labels.push(j.toString());
}
const datapoints = _arr;
const data = {
labels: labels,
datasets: [
{
  label: 'Cubic interpolation (monotone)',
  data: datapoints,
  //borderColor: Utils.CHART_COLORS.red,
  fill: false,
  cubicInterpolationMode: 'monotone',
  tension: 0.4,
  pointRadius:0
}, {
    label: 'Cubic interpolation',
  data: datapoints,
  //borderColor: Utils.CHART_COLORS.blue,
  fill: false,
  tension: 0.4,
  pointRadius:0
},]};

const config = {
type: 'line',
data: data,
options: {
responsive: true,
plugins: {
  title: {
    display: true,
    text: 'Cubic interpolation',
    color: 'white',
  },
},
interaction: {
  intersect: false,
},
scales: {
  x: {
    display: true,
    title: {
        display: true,
        text: 'Time',
        color:'white'
    },
    grid: {
        display: true,
        tickColor: 'white'
      },
        ticks: {
          color: 'white'
        },
        border: {
          color: 'white'
        } },
  y: {
    display: true,
    title: {
      display: true,
      text: 'Temperature',
      color:'white'
    },
    grid: {
   
        display: true,
        tickColor: 'white'
      },
      ticks: {
          color: 'white',
        },
        border: {
          color: 'white'
        },
  }}},};

var mychart = new Chart(
    document.getElementById('myChart'),
    config
    );
  return mychart;
}





    var q=100;
    const ctx=document.getElementById('myChart').getContext('2d');
    const gradseg = ctx.createLinearGradient(0,0,450,0);
    gradseg.addColorStop(0,'red');
    gradseg.addColorStop(0.7,'yellow');
    gradseg.addColorStop(1,'green');
    
    const data1 = {
        labels: ['Mon', 'Tue'],
        datasets: [{
          label: 'Weekly Sales',
          data: [q,100-q],
          backgroundColor: [
            gradseg,
            'rgba(0,0,0,0.7)'
          ],
          borderColor: [
            'rgba(255,255,255,1)',
            'rgba(0,0,0,0.1)'
          ],
          borderWidth:5,
          borderAlign:'inner',
          cutout: '85%',
          circumference:180,
          rotation:270
        }]
        
      };
  
      const gaugeChartText={
        id: 'gaugeChartText',
        afterDatasetsDraw(chart,args,pluginOptions){
          const {ctx,data,chartArea:{top,bottom,left,right,width,height},scales:{r}} = chart;
          ctx.save();
          const xcor=chart.getDatasetMeta(0).data[0].x;
          const ycor=chart.getDatasetMeta(0).data[0].y;
  
          //ctx.fillRect(xcor,ycor,200,1)
          function textLabel(text,x,y,fontsize){
            ctx.fillStyle='#FFFFFF';
            ctx.font=`${fontsize}px sans-serif`;
            ctx.fillText(text,x,y);
          }
          textLabel(q,xcor-60,ycor,50);
          textLabel('0',left-20,ycor+7,20);
          textLabel('100',right+4,ycor+7,20);
          textLabel('50',xcor-10,top+45,20);
          textLabel('25',left+35,top+115,20);
          textLabel('75',right-60,top+115,20);
        }
      }
    
  
      const config1 = {
        type: 'doughnut',
        data:data1,
        options: {
          layout:{
            padding:{
             left:20,
             right:40,
            }
          },
          aspectRatio:1.5,
          plugins:{
            legend:{
              display:false
            },
            tooltip:{
              enabled:false
            }
          }
        },
        plugins: [gaugeChartText]
        
       };
  
       var myChart = new Chart(
        document.getElementById('Chart'),
        config1
      );
  









// quality prediction function
function gauge_chart(a,b){

  var temp=a;
  var t=b;
  console.log(t);
  var temp_val=Number(temp)
  var t_val=Number(t);
  var k = 2.685*(10**9)*Math.exp((-48450.9567)/(temp_val*8.314));
  var q_val = 100 - k*t_val;
  if(isNaN(q_val)){ var q=100; }
  else var q=q_val.toFixed(2);
    
  const ctx=document.getElementById('myChart').getContext('2d');
  const gradseg = ctx.createLinearGradient(0,0,450,0);
  gradseg.addColorStop(0,'red');
  gradseg.addColorStop(0.7,'yellow');
  gradseg.addColorStop(1,'green');
  
  const data1 = {
      labels: ['Mon', 'Tue'],
      datasets: [{
        label: 'Weekly Sales',
        data: [q,100-q],
        backgroundColor: [
          gradseg,
          'rgba(0,0,0,0.7)'
        ],
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(0,0,0,0.1)'
        ],
        borderWidth:5,
        borderAlign:'inner',
        cutout: '85%',
        circumference:180,
        rotation:270
      }]
      
    };

    const gaugeChartText={
      id: 'gaugeChartText',
      afterDatasetsDraw(chart,args,pluginOptions){
        const {ctx,data,chartArea:{top,bottom,left,right,width,height},scales:{r}} = chart;
        ctx.save();
        const xcor=chart.getDatasetMeta(0).data[0].x;
        const ycor=chart.getDatasetMeta(0).data[0].y;

        //ctx.fillRect(xcor,ycor,200,1)
        function textLabel(text,x,y,fontsize){
          ctx.fillStyle='#FFFFFF';
          ctx.font=`${fontsize}px sans-serif`;
          ctx.fillText(text,x,y);
        }
        textLabel(q,xcor-60,ycor,50);
        textLabel('0',left-20,ycor+7,20);
        textLabel('100',right+4,ycor+7,20);
        textLabel('50',xcor-10,top+45,20);
        textLabel('25',left+35,top+115,20);
        textLabel('75',right-60,top+115,20);
      }
    }
  

    const config1 = {
      type: 'doughnut',
      data:data1,
      options: {
        layout:{
          padding:{
           left:20,
           right:40,
          }
        },
        aspectRatio:1.5,
        plugins:{
          legend:{
            display:false
          },
          tooltip:{
            enabled:false
          }
        }
      },
      plugins: [gaugeChartText]
      
     };

     var myChart = new Chart(
      document.getElementById('Chart'),
      config1
    );

   return myChart;
}
    
  
var intervalid=setInterval(update_values,1000);
    function update_values(){
      $.getJSON($SCRIPT_ROOT+'/stuff',
      function(data){
       document.getElementById('_s1').value=(data.s1).toFixed(3);
       document.getElementById('_s2').value=(data.s2).toFixed(3);
      
      });
    };

    const myForm = document.getElementById("myForm");
  
$('#abcd').on('click',function(e){
   e.preventDefault();
   $.ajax({
    type:"POST",
    url:"/predict",
    data:{
      sensor1:$("#_s1").val(),
      sensor2:$("#_s2").val(),
      x_val:$("#x1").val(),
      y_val:$("#y1").val(),
      z_val:$("#z1").val(),
    },
    success:function(data)
      {
        $("#pval").text(data.predicted_value);
      }
   })
});


var interval=setInterval(update_page,5000);
 function update_page(){
 // document.getElementById('abcd').click();
 };  



 const _qForm = document.getElementById("_qForm");
  
 $('#ab').on('click',function(e){
    e.preventDefault();
    $.ajax({
     type:"POST",
     url:"/_quality",
     data:{
       sensor1:$("#_s1").val(),
       sensor2:$("#_s2").val(),
       x_val:$("#x1").val(),
       y_val:$("#y1").val(),
       z_val:$("#z1").val(),
       day:$("#_day").val(),
       hour:$("#_hour").val(),
     },
     success:function(data)
       {
         myChart.destroy(); 
         myChart =gauge_chart(data.predicted_value,data.t);
       }
    })
 });
 
 
 var interval=setInterval(update_page,5000);
  function update_page(){
  // document.getElementById('ab').click();
  };  
 



 $('#abc').on('click',function(e){
  e.preventDefault();
  $.ajax({
   type:"POST",
   url:"/plot",
   data:{
     sensor1:$("#_s1").val(),
     sensor2:$("#_s2").val(),
     x_val:$("#x1").val(),
     y_val:$("#y1").val(),
     z_val:$("#z1").val(),
     day:$("#_day").val(),
     hour:$("#_hour").val(),
     second:$("#_second").val(),
   },
   
   success:function(data)
     {
       mychart.destroy();
       mychart=plot_graph(data._graph);
     }
    
  })
});

var interval=setInterval(update_graph,10000);
 function update_graph(){
  //document.getElementById('abc').click();
 // document.getElementById('abcde').click();
  //document.getElementById('abcdef').click();
 };

 const cForm = document.getElementById("cForm");
 $('#abcde').on('click',function(e){
  e.preventDefault();
  $.ajax({
   type:"POST",
   url:"/map",
   data:{
     sensor1:$("#_s1").val(),
     sensor2:$("#_s2").val(),
     z_value:$("#z2").val(),
   },
   
   success:function(data)
     {
      $('#myImage').attr('src', "http://localhost:5000/"+data.image_url);
     }
    
  })
});



//quality map:




const data2 = {
labels: [-2.25,-2.0, -1.75, -1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0.0, 0.25],
datasets: []
};

const config2 = {
type: 'line',
data: data2,
options: {
responsive: true,

interaction: {
  intersect: false,
},

scales: {
  x: {
    display: true,
    title: {
        display: true,
        text: 'X',
        color:'white'
    },
    grid: {
        display: true,
        tickColor: 'white'
      },
        ticks: {
          color: 'white'
        },
        border: {
          color: 'white'
        }
    
  },
  y: {
    display: true,
    title: {
      display: true,
      text: 'Y',
      color:'white'
    },
    grid: {
   
        display: true,
        tickColor: 'white'
      },
      ticks: {
          color: 'white',
        },
        border: {
          color: 'white'
        },
    
  }
},
plugins:{
  legend:{
    display:false
  },
title: {
  display: true,
  text: 'Quality (%)',
  color: 'white',
},
},
},
};


var qchart = new Chart(
    document.getElementById('qChart'),
    config2
    );





//Quality-map function 
function quality(arr){

y=[-4.65, -4.02, -3.45, -2.85, -2.25, -1.65, -1.05, -0.45, 0.15, 0.75];
const data2 = {
labels: [-2.25,-2.0, -1.75, -1.5, -1.25, -1.0, -0.75, -0.5, -0.25, 0.0, 0.25],
datasets: [
  { data: [NaN, -4.65, -4.65, -4.65, -4.65, -4.65, -4.65, -4.65, -4.65, -4.65,-4.65] ,showLine: false},
  { data: [NaN,-4.02, -4.02, -4.02, -4.02, -4.02, -4.02, -4.02, -4.02, -4.02, -4.02] ,showLine: false},
  { data: [NaN,-3.45, -3.45, -3.45, -3.45, -3.45, -3.45, -3.45, -3.45, -3.45, -3.45] ,showLine: false},
  { data: [NaN,-2.85, -2.85, -2.85, -2.85, -2.85, -2.85, -2.85, -2.85, -2.85, -2.85] ,showLine: false},
  { data: [NaN,-2.25, -2.25, -2.25, -2.25, -2.25, -2.25, -2.25, -2.25, -2.25, -2.25] ,showLine: false},
  { data: [NaN,-1.65, -1.65, -1.65, -1.65, -1.65, -1.65, -1.65, -1.65, -1.65, -1.65] ,showLine: false},
  { data: [NaN,-1.05, -1.05, -1.05, -1.05, -1.05, -1.05, -1.05, -1.05, -1.05, -1.05] ,showLine: false},
  { data: [NaN,-0.45, -0.45, -0.45, -0.45, -0.45, -0.45, -0.45, -0.45, -0.45, -0.45] ,showLine: false},
  { data: [NaN,0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15] ,showLine: false},
  { data: [NaN,0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75] ,showLine: false},
]
};

const config2 = {
type: 'line',
data: data2,
options: {
responsive: true,
interaction: {
  intersect: false,
},
scales: {
  x: {
    display: true,
    title: {
        display: true,
        text: 'X',
        color:'white'
    },
    grid: {
        display: true,
        tickColor: 'white'
      },
        ticks: {
          color: 'white'
        },
        border: {
          color: 'white'
        }
  },
  y: {
    display: true,
    title: {
      display: true,
      text: 'Y',
      color:'white'
    },
    grid: {
        display: true,
        tickColor: 'white'
      },
      ticks: {
          color: 'white',
        },
        border: {
          color: 'white'
        },
  }
},
plugins:{
  legend:{
    display:false
  },
title: {
  display: true,
  text: 'Quality (%)',
  color: 'white',
},

  tooltip:{
    displayColors: false,
    callbacks:{
      title:function(){
        return ``;
      },
      
     label:((tooltipItem)=>{
       for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
          if(tooltipItem.parsed.x==i+1 && tooltipItem.parsed.y==y[j]){ return `${arr[i][j]}%`; }
         } }
     })
    }
  },},},};

var qchart = new Chart(
    document.getElementById('qChart'),
    config2
    );

    return qchart
}


  const qForm = document.getElementById("qForm");
    $('#abcdef').on('click',function(e){
     e.preventDefault();
     $.ajax({
      type:"POST",
      url:"/quality",
      data:{
        sensor1:$("#_s1").val(),
        sensor2:$("#_s2").val(),
        z_value:$("#z2").val(),
      },
      
      success:function(data)
        {
          qchart.destroy();
         qchart=quality(data.arr);
        }
     })
   });
