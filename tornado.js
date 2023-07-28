// --------------------------------------------------------------------------------// 
// D3 Code for CS 416 Final Project - By Chanchal Sarkar
// --------------------------------------------------------------------------------// 

// --------------------------------------------------------------------------------// 
// SETUP --------------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

// Retrieve the scenes
var scene1 = d3.select('#scene1')


var svgWidth = 500;
var svgHight = 300;
var radius = Math.min(svgWidth, svgHight)/2;

var scene2 = d3.select('#scene2')
//var scene3 = d3.select('#scene3')

// constants
var width = 1000
var height = 1000

var margin = { top: 10, right: 100, bottom: 50, left: 50 };
    //width = 1000 - margin.left - margin.right,
    //height = 1000 - margin.top - margin.bottom;
    //width = 1000,
    //height = 500;

// axis definition
var x = d3.scaleBand()
    .domain([10, 50, 90, 130, 180])
    .range([0, width]);



var y = d3.scaleLinear()
    .domain([0, 220])
    .range([height, 0]);

var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(5);

var yAxis = d3.axisLeft()
    .scale(y)
    .ticks(10);

// axis appends

scene2.append("g")
    .attr("transform", "translate(50,300)")
    .attr("class", "axis")
    .call(xAxis);

// axis labels
scene1.append('text')
    .attr('x', 500)
    .attr('y', 800)
    .attr('text-anchor', 'middle')
    .text('State')

scene1.append('text')
    .attr('x', -400)
    .attr('y', 15)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Total_Tornedo')

scene2.append('text')
    .attr('x', 500)
    .attr('y', 340)
    .attr('text-anchor', 'middle')
    .text('Total Tornado')

/*scene3.append('text')
    .attr('x', -500)
    .attr('y', 15)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Number of Cylinders')

scene3.append('text')
    .attr('x', 500)
    .attr('y', 1150)
    .attr('text-anchor', 'middle')
    .text('Fuel Type')*/


var arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(60);

//var color = d3.scaleOrdinal(d3.schemeCategory10);
var color = d3.scaleOrdinal(['#984ea3', '#8DC348', '#36570C', '#B55517', '#FF5733', '#FFAC33', '#0DE30D', '#FCFF33', 
                              '#C1C348',  '#4daf4a','#377eb8','#ff7f00','#E3610D','#e41a1c', '#0C6D0C', '#0C6D3E', '#589578',
                              '#588295',  '#7496EA','#DDD5E3','#E320D7','#B496A0','#B496B2', '#B420E3', '#B674EA', '#74C6EA',
                              '#EB1949',  '#782B3D','#D543CA','#AF9AEE','#9AB6EE','#3763BB', '#A7DFE9', '#A7E9D9', '#B6E9A7']);

var pie = d3.pie().value(function(d){
    return d.Total_Fatalities_2019;
  });

var arc2 = d3.arc()
  .outerRadius(radius)
  .innerRadius(60);

//var color2 = d3.scaleOrdinal(d3.schemeCategory10);

var pie2 = d3.pie().value(function(d){
  return d.Total_Fatalities_2020;
});

var arc3 = d3.arc()
  .outerRadius(radius)
  .innerRadius(60);

var pie3 = d3.pie().value(function(d){
  return d.Total_Fatalities_2021;
});

// --------------------------------------------------------------------------------// 
// SCENE ONE ----------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

var makes = ["Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler",
    "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini",
    "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren Automotive", "Mercedes-Benz", "MINI", "Mitsubishi",
    "Nissan", "Porsche", "Ram", "Rolls-Royce", "Roush Performance", "smart", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"];

var highway_mpgs = ["44", "33", "19", "30", "22", "41", "27", "30", "29", "25", "24", "22", "103", "96", "24", "29", "38", "122",
    "30", "39", "27", "92", "21", "28", "30", "29", "24", "24", "34", "23", "82", "33", "102", "101", "27", "21", "19", "23", "39", "27",
    "98", "30", "28", "29"];

var city_mpgs = ["25", "24", "12", "23", "13", "30", "20", "22", "21", "16", "15", "16", "121", "118", "17", "21", "30", "150", "22",
    "30", "19", "120", "14", "22", "22", "23", "17", "16", "26", "16", "85", "24", "121", "124", "21", "14", "12", "14", "32", "21", "92",
    "23", "21", "22"];

var makes4 = ["ACR", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler",
    "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini",
    "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren Automotive", "Mercedes-Benz", "MINI", "Mitsubishi",
    "Nissan", "Porsche", "Ram", "Rolls-Royce", "Roush Performance", "smart", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"];

var highway_mpgs4 = ["4", "33", "19", "30", "22", "41", "27", "30", "29", "25", "24", "22", "103", "96", "24", "29", "38", "122",
    "30", "39", "27", "92", "21", "28", "30", "29", "24", "24", "34", "23", "82", "33", "102", "101", "27", "21", "19", "23", "39", "27",
    "98", "30", "28", "29"];

var city_mpgs4 = ["25", "24", "12", "23", "13", "30", "20", "22", "21", "16", "15", "16", "121", "118", "17", "21", "30", "150", "22",
    "30", "19", "120", "14", "22", "22", "23", " 17", "16", "26", "16", "85", "24", "121", "124", "21", "14", "12", "14", "32", "21", "92",
    "23", "21", "22"];

var state = ["AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", 
    "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", 
    "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

var total_count_2021 = ["65", "32", "6", "4", "48", "8", "1", "2", "33", "47", "119", "0", "73", "19", "37", "36", 
    "48", "5", "8", "0", "18", "62", "46", "75", "1", "19", "15", "44", "0", "11", "16", 
    "1", "12", "31", "63", "0", "43", "0", "1", "24", "21", "64", "94", "4", "11", "0", "1", "2", 
    "40", "2", "1"];

var total_count_2020 = ["70", "42", "2", "8", "35", "7", "0", "4", "58", "60", "28", "0", "63", "15", "17", "22", 
    "42", "2", "20", "1", "2", "59", "19", "82", "3", "46", "22", "22", "0", "4", "6", 
    "0", "12", "20", "38", "2", "6", "0", "0", "61", "23", "34", "84", "0", "15", "0", "0", "2", 
    "18", "0", "4"];

var total_count_2019 = ["80", "29", "12", "14", "49", "1", "0", "2", "25", "42", 
    "56", "5", "48", "31", "87", "25", "82", "3", "6", "1", 
    "8", "52", "63", "113", "4", "46", "15", "34", "0", "9", 
    "19", "1", "4", "48", "148", "4", "35", "2", "1", "24", 
    "25", "19", "167", "0", "23", "1", "1", "2", "29", "2", 
    "20"];

var dataSet = [
        {"State":"AL", "Total_Count_2019": "80", "Max_Magnitude_FEF_2019": "4", "Total_Injured_2019":"101", "Total_Fatalities_2019": "25", "Total_Count_2020": "70", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"15", "Total_Fatalities_2020": "5", "Total_Count_2021": "65", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"88", "Total_Fatalities_2021": "7"},
        {"State":"AR", "Total_Count_2019": "29", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"25", "Total_Fatalities_2019": "0", "Total_Count_2020": "42", "Max_Magnitude_FEF_2020": "3", "Total_Injured_2020":"30", "Total_Fatalities_2020": "0", "Total_Count_2021": "32", "Max_Magnitude_FEF_2021": "4", "Total_Injured_2021":"17", "Total_Fatalities_2021": "8"},
        {"State":"AZ", "Total_Count_2019": "12", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"5", "Total_Fatalities_2019": "0", "Total_Count_2020": "2", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "6", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"CA", "Total_Count_2019": "14", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "8", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "4", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"CO", "Total_Count_2019": "49", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "35", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "48", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"CT", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "7", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "8", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"DC", "Total_Count_2019": "0", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"DE", "Total_Count_2019": "2", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"1", "Total_Fatalities_2019": "0", "Total_Count_2020": "4", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "2", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"FL", "Total_Count_2019": "25", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "58", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"5", "Total_Fatalities_2020": "0", "Total_Count_2021": "32", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"2", "Total_Fatalities_2021": "0"},
        {"State":"GA", "Total_Count_2019": "42", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"5", "Total_Fatalities_2019": "0", "Total_Count_2020": "60", "Max_Magnitude_FEF_2020": "3", "Total_Injured_2020":"53", "Total_Fatalities_2020": "11", "Total_Count_2021": "47", "Max_Magnitude_FEF_2021": "4", "Total_Injured_2021":"28", "Total_Fatalities_2021": "0"},
        {"State":"IA", "Total_Count_2019": "56", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"2", "Total_Fatalities_2019": "1", "Total_Count_2020": "28", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "119", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"ID", "Total_Count_2019": "5", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"IL", "Total_Count_2019": "48", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"1", "Total_Fatalities_2019": "0", "Total_Count_2020": "63", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"2", "Total_Fatalities_2020": "0", "Total_Count_2021": "73", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"13", "Total_Fatalities_2021": "6"},
        {"State":"IN", "Total_Count_2019": "31", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"5", "Total_Fatalities_2019": "0", "Total_Count_2020": "15", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "19", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"KS", "Total_Count_2019": "87", "Max_Magnitude_FEF_2019": "4", "Total_Injured_2019":"16", "Total_Fatalities_2019": "0", "Total_Count_2020": "17", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "37", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"KY", "Total_Count_2019": "25", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"2", "Total_Fatalities_2019": "0", "Total_Count_2020": "22", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"2", "Total_Fatalities_2020": "0", "Total_Count_2021": "36", "Max_Magnitude_FEF_2021": "4", "Total_Injured_2021":"98", "Total_Fatalities_2021": "17"},
        {"State":"LA", "Total_Count_2019": "82", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"9", "Total_Fatalities_2019": "4", "Total_Count_2020": "42", "Max_Magnitude_FEF_2020": "3", "Total_Injured_2020":"14", "Total_Fatalities_2020": "5", "Total_Count_2021": "46", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"11", "Total_Fatalities_2021": "1"},
        {"State":"MA", "Total_Count_2019": "3", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "2", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "5", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"MD", "Total_Count_2019": "6", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"1", "Total_Fatalities_2019": "0", "Total_Count_2020": "20", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "8", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"ME", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "1", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"MI", "Total_Count_2019": "8", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "2", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "18", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"6", "Total_Fatalities_2021": "0"},
        {"State":"MN", "Total_Count_2019": "52", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "59", "Max_Magnitude_FEF_2020": "4", "Total_Injured_2020":"2", "Total_Fatalities_2020": "1", "Total_Count_2021": "62", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"MO", "Total_Count_2019": "63", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"38", "Total_Fatalities_2019": "3", "Total_Count_2020": "19", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "46", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"4", "Total_Fatalities_2021": "1"},
        {"State":"MS", "Total_Count_2019": "113", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"39", "Total_Fatalities_2019": "2", "Total_Count_2020": "82", "Max_Magnitude_FEF_2020": "4", "Total_Injured_2020":"117", "Total_Fatalities_2020": "12", "Total_Count_2021": "75", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"2", "Total_Fatalities_2021": "1"},
        {"State":"MT", "Total_Count_2019": "4", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "3", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"NC", "Total_Count_2019": "46", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"3", "Total_Fatalities_2019": "0", "Total_Count_2020": "46", "Max_Magnitude_FEF_2020": "3", "Total_Injured_2020":"14", "Total_Fatalities_2020": "2", "Total_Count_2021": "19", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"10", "Total_Fatalities_2021": "3"},
        {"State":"ND", "Total_Count_2019": "15", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "22", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "15", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"NE", "Total_Count_2019": "34", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "22", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "44", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"2", "Total_Fatalities_2021": "0"},
        {"State":"NH", "Total_Count_2019": "0", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"NJ", "Total_Count_2019": "9", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "4", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "11", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"10", "Total_Fatalities_2021": "0"},
        {"State":"NM", "Total_Count_2019": "19", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"7", "Total_Fatalities_2019": "0", "Total_Count_2020": "6", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "16", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"NV", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"NY", "Total_Count_2019": "4", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "12", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"1", "Total_Fatalities_2020": "0", "Total_Count_2021": "12", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"OH", "Total_Count_2019": "48", "Max_Magnitude_FEF_2019": "4", "Total_Injured_2019":"180", "Total_Fatalities_2019": "1", "Total_Count_2020": "20", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "31", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"OK", "Total_Count_2019": "148", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"52", "Total_Fatalities_2019": "4", "Total_Count_2020": "38", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"2", "Total_Fatalities_2020": "2", "Total_Count_2021": "63", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"OR", "Total_Count_2019": "4", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "2", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"PA", "Total_Count_2019": "35", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"3", "Total_Fatalities_2019": "0", "Total_Count_2020": "6", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"18", "Total_Fatalities_2020": "0", "Total_Count_2021": "43", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"3", "Total_Fatalities_2021": "2"},
        {"State":"PR", "Total_Count_2019": "2", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"RI", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"SC", "Total_Count_2019": "24", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"7", "Total_Fatalities_2019": "0", "Total_Count_2020": "61", "Max_Magnitude_FEF_2020": "4", "Total_Injured_2020":"88", "Total_Fatalities_2020": "8", "Total_Count_2021": "24", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"SD", "Total_Count_2019": "25", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"10", "Total_Fatalities_2019": "0", "Total_Count_2020": "23", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "1", "Total_Count_2021": "21", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"TN", "Total_Count_2019": "19", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "34", "Max_Magnitude_FEF_2020": "4", "Total_Injured_2020":"319", "Total_Fatalities_2020": "25", "Total_Count_2021": "64", "Max_Magnitude_FEF_2021": "4", "Total_Injured_2021":"562", "Total_Fatalities_2021": "57"},
        {"State":"TX", "Total_Count_2019": "167", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"32", "Total_Fatalities_2019": "2", "Total_Count_2020": "84", "Max_Magnitude_FEF_2020": "3", "Total_Injured_2020":"46", "Total_Fatalities_2020": "4", "Total_Count_2021": "94", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"13", "Total_Fatalities_2021": "1"},
        {"State":"UT", "Total_Count_2019": "0", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "4", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"VA", "Total_Count_2019": "23", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "15", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"5", "Total_Fatalities_2020": "0", "Total_Count_2021": "11", "Max_Magnitude_FEF_2021": "2", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"VI", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "0", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "0", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"VT", "Total_Count_2019": "1", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"2", "Total_Fatalities_2021": "0"},
        {"State":"WA", "Total_Count_2019": "2", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "2", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "2", "Max_Magnitude_FEF_2021": "0", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"},
        {"State":"WI", "Total_Count_2019": "29", "Max_Magnitude_FEF_2019": "3", "Total_Injured_2019":"3", "Total_Fatalities_2019": "0", "Total_Count_2020": "18", "Max_Magnitude_FEF_2020": "1", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "40", "Max_Magnitude_FEF_2021": "3", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"WV", "Total_Count_2019": "2", "Max_Magnitude_FEF_2019": "1", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "0", "Max_Magnitude_FEF_2020": "0", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "2", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"1", "Total_Fatalities_2021": "0"},
        {"State":"WY", "Total_Count_2019": "20", "Max_Magnitude_FEF_2019": "2", "Total_Injured_2019":"0", "Total_Fatalities_2019": "0", "Total_Count_2020": "4", "Max_Magnitude_FEF_2020": "2", "Total_Injured_2020":"0", "Total_Fatalities_2020": "0", "Total_Count_2021": "1", "Max_Magnitude_FEF_2021": "1", "Total_Injured_2021":"0", "Total_Fatalities_2021": "0"}
  ];

var bar_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "black")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var pai_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var pai_tooltip2 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var pai_tooltip3 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "rgba(222, 214, 214, 0.5)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip5 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "black")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip6 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "black")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

var bubble_tooltip7 = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "black")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")



var width1 = 450
var height1 = 450
var margin1 = 40
var radius1 = Math.min(width1, height1) / 2 - margin1

var scene4 = d3.select("#scene4")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHight)
        .append("g")
        .attr("transform","translate("+ radius +","+radius+")");

//var data1 = {a: 9, b: 20, c:30, d:8, e:12};
//var data2 = {a: 6, b: 16, c:20, d:14, e:19, f:12};

updatePieChaer('2019');

function updatePieChaer(val) {

    if(val=="2019"){

        // Compute the position of each group on the pie:

        var u = scene4.selectAll('path').remove();

        // map to data
        u = scene4.selectAll('path')
            .data(pie(dataSet))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d){
                return color(d.data.State);
            })
            .on("mouseover", function (d) {
                pai_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                pai_tooltip.html(d.data.State+"("+d.data.Total_Fatalities_2019+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 15) + "px");
            })
            .on("mouseout", function (d) {
                /*d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');*/
                pai_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const annotations = [
            {
                note: {
                    label: "AL with fatalities 25",
                    title: "Highest fatality state in 2019"
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 120,
                y: -120,
                dy: 70,
                dx: 70
            }
        ]
        
        scene4.selectAll('g').remove();

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene4.append("g")
            .call(makeAnnotations)
            

        // remove the group that is not present anymore
        u.exit()
         .remove()
    } else if(val=="2020"){
        
        var u = scene4.selectAll('path').remove();
        
        u = scene4.selectAll('path')
            .data(pie2(dataSet))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d){
                return color(d.data.State);
            })
            .on("mouseover", function (d) {
                pai_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                pai_tooltip.html(d.data.State+"("+d.data.Total_Fatalities_2020+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 15) + "px");
            })
            .on("mouseout", function (d) {
                /*d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');*/
                pai_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const annotations = [
            {
                note: {
                    label: "TN with fatalities 25, MS with fatalities 12 and GA with fatalities 11",
                    title: "Highest fatality state in 2020"
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 120,
                y: -120,
                dy: 70,
                dx: 70
            }
        ]
        
        scene4.selectAll('g').remove();

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene4.append("g")
            .call(makeAnnotations)

        // remove the group that is not present anymore
        u.exit()
        .remove()
    } else {
        
        var u = scene4.selectAll('path').remove();
        
        u = scene4.selectAll('path')
            .data(pie3(dataSet))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d){
                return color(d.data.State);
            })
            .on("mouseover", function (d) {
                pai_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                pai_tooltip.html(d.data.State+"("+d.data.Total_Fatalities_2021+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 15) + "px");
            })
            .on("mouseout", function (d) {
                /*d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');*/
                pai_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

            u.append("text")
            .attr("text-anchor", "middle")
            .attr("text-anchor", "2021");

            const annotations = [
                {
                    note: {
                    label: "TN with fatalities 57 & KY with fatalities 17 ",
                    title: "Highest fatality state in 2021"
                    },
                    connector: {
                    end: "dot",        // Can be none, or arrow or dot
                    type: "line",      // ?? don't know what it does
                    lineType : "vertical",    // ?? don't know what it does
                    endScale: 10     // dot size
                    },
                    color: ["blue"],
                    x: 120,
                    y: -120,
                    dy: 70,
                    dx: 70
                }
            ]
            
            scene4.selectAll('g').remove();
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene4.append("g")
                .call(makeAnnotations)

            // remove the group that is not present anymore
            u.exit()
            .remove()
    }

    
  
  }


var data_injured_2019 = [
    {State:"AL", x: 58, y: 85, Total_Injured_2019: 101,color: "#C9D6DF"},
    {State:"AR", x: 195, y: 68, Total_Injured_2019: 25, color: "#F7EECF"},
    {State:"AZ", x: 245, y: 148, Total_Injured_2019: 5, color: "#984ea3"},
    {State:"DE", x: 85, y: 240, Total_Injured_2019: 1, color: "#0E520D"},
    {State:"GA", x: 235, y: 85, Total_Injured_2019: 5, color: "#F9CAC8"},
    {State:"IA", x: 115, y: 270, Total_Injured_2019: 2, color: "#D1C2E0"},
    {State:"IL", x: 145, y: 270, Total_Injured_2019: 1, color: "#8BB589"},
    {State:"IN", x: 165, y: 30, Total_Injured_2019: 5, color: "#BFE8BD"},
    {State:"KS", x: 185, y: 210, Total_Injured_2019: 16, color: "#B55517"},
    {State:"KY", x: 35, y: 210, Total_Injured_2019: 2, color: "#48ACEE"},
    {State:"LA", x: 215, y: 100, Total_Injured_2019: 9, color: "#FFAC33"},
    {State:"MD", x: 190, y: 40, Total_Injured_2019: 1, color: "#0DE30D"},
    {State:"MO", x: 135, y: 235, Total_Injured_2019: 38, color: "#8248EE"},
    {State:"MS", x: 125, y: 52, Total_Injured_2019: 39, color: "#F0B31C"},
    {State:"NC", x: 255, y: 100, Total_Injured_2019: 3, color: "#B5B0A4"},
    {State:"NM", x: 220, y: 165, Total_Injured_2019: 7, color: "#377eb8"},
    {State:"OH", x: 150, y: 140, Total_Injured_2019: 180, color: "#ff7f00"},
    {State:"OK", x: 42, y: 163, Total_Injured_2019: 52, color: "#ADC6C6"},
    {State:"PA", x: 50, y: 230, Total_Injured_2019: 3, color: "#DCCD37"},
    {State:"SC", x: 205, y: 188, Total_Injured_2019: 7, color: "#25C4C9"},
    {State:"SD", x: 235, y: 122, Total_Injured_2019: 10, color: "#82D673"},
    {State:"TX", x: 88, y: 200, Total_Injured_2019: 32, color: "#B5E725"},
    {State:"WI", x: 240, y: 180, Total_Injured_2019: 3, color: "#588295"},
  ];

var scene5 = d3.select("#scene5")
              .attr("width", 320)
              .attr("height", 300);

scene5.selectAll("circle")
    .data(data_injured_2019).enter()
    .append("circle")
    .attr("cx", function(d) {return d.x})
    .attr("cy", function(d) {return d.y})
    .attr("r", function(d) {
        return Math.sqrt(d.Total_Injured_2019*20)
    })
    .attr("fill", function(d) {
        return d.color;
    })
    .on("mouseover", function (d) {
        bubble_tooltip5.transition()
            .duration(200)
            .style("opacity", .9);
        bubble_tooltip5.html(d.State+"("+d.Total_Injured_2019+")")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
    })
    .on("mouseout", function (d) {
        bubble_tooltip5.transition()
            .duration(500)
            .style("opacity", 0);
    });

scene5.selectAll("text")
    .data(data_injured_2019).enter()
    .append("text")
    .attr("x", function(d) {return d.x+(Math.sqrt(d.Total_Injured_2019*20))})
    .attr("y", function(d) {return d.y+4})
    .text(function(d) {return d.State})
    .style("font-family", "arial")
    .style("font-size", "12px")





var data_injured_2020 = [
        {State:"AL", x: 80, y: 85, Total_Injured_2020: 15,color: "#C9D6DF"},
        {State:"AR", x: 225, y: 240, Total_Injured_2020: 30, color: "#F7EECF"},
        {State:"FL", x: 175, y: 250, Total_Injured_2020: 5, color: "#E3E1B2"},
        {State:"GA", x: 195, y: 55, Total_Injured_2020: 53, color: "#F9CAC8"},
        {State:"IL", x: 115, y: 270, Total_Injured_2020: 2, color: "#8BB589"},
        {State:"KY", x: 145, y: 270, Total_Injured_2020: 2, color: "#48ACEE"},
        {State:"LA", x: 55, y: 120, Total_Injured_2020: 14, color: "#36570C"},
        {State:"MN", x: 135, y: 250, Total_Injured_2020: 2, color: "#B55517"},
        {State:"MS", x: 55, y: 250, Total_Injured_2020: 117, color: "#F0B31C"},
        {State:"NC", x: 35, y: 160, Total_Injured_2020: 14, color: "#B5B0A4"},
        {State:"NY", x: 190, y: 10, Total_Injured_2020: 1, color: "#0DE30D"},
        {State:"OK", x: 280, y: 155, Total_Injured_2020: 2, color: "#ADC6C6"},
        {State:"PA", x: 125, y: 60, Total_Injured_2020: 18, color: "#C1C348"},
        {State:"SC", x: 260, y: 105, Total_Injured_2020: 88, color: "#25C4C9"},
        {State:"TN", x: 150, y: 160, Total_Injured_2020: 319, color: "#e41a1c"},
        {State:"TX", x: 260, y: 190, Total_Injured_2020: 46, color: "#B5E725"},
        {State:"VA", x: 45, y: 190, Total_Injured_2020: 5, color: "#E3610D"},
      ]

var scene6 = d3.select("#scene6")
        .attr("width", 320)
        .attr("height", 300);

scene6.selectAll("circle")
    .data(data_injured_2020).enter()
    .append("circle")
    .attr("cx", function(d) {return d.x})
    .attr("cy", function(d) {return d.y})
    .attr("r", function(d) {
        return Math.sqrt(d.Total_Injured_2020*20)
    })
    .attr("fill", function(d) {
        return d.color;
    })
    .on("mouseover", function (d) {
        bubble_tooltip6.transition()
            .duration(200)
            .style("opacity", .9);
        bubble_tooltip6.html(d.State+"("+d.Total_Injured_2020+")")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
    })
    .on("mouseout", function (d) {
        bubble_tooltip6.transition()
            .duration(500)
            .style("opacity", 0);
    });

scene6.selectAll("text")
    .data(data_injured_2020).enter()
    .append("text")
    .attr("x", function(d) {return d.x+(Math.sqrt(d.Total_Injured_2020*20))})
    .attr("y", function(d) {return d.y+4})
    .text(function(d) {return d.State})
    .style("font-family", "arial")
    .style("font-size", "12px")



var data_injured_2021 = [
        {State:"AL", x: 45, y: 42, Total_Injured_2021: 88,color: "#C9D6DF"},
        {State:"AR", x: 215, y: 250, Total_Injured_2021: 17, color: "#F7EECF"},
        {State:"FL", x: 280, y: 148, Total_Injured_2021: 2, color: "#E3E1B2"},
        {State:"GA", x: 25, y: 105, Total_Injured_2021: 28, color: "#F9CAC8"},
        {State:"IA", x: 38, y: 155, Total_Injured_2021: 1, color: "#D1C2E0"},
        {State:"KY", x: 35, y: 210, Total_Injured_2021: 98, color: "#48ACEE"},
        {State:"LA", x: 250, y: 220, Total_Injured_2021: 11, color: "#36570C"},
        {State:"MI", x: 210, y: 20, Total_Injured_2021: 6, color: "#B55517"},
        {State:"MO", x: 135, y: 245, Total_Injured_2021: 4, color: "#8248EE"},
        {State:"MS", x: 100, y: 28, Total_Injured_2021: 2, color: "#F0B31C"},
        {State:"NC", x: 275, y: 82, Total_Injured_2021: 10, color: "#B5B0A4"},
        {State:"NE", x: 278, y: 165, Total_Injured_2021: 2, color: "#FCFF33"},
        {State:"NJ", x: 285, y: 110, Total_Injured_2021: 10, color: "#8F8309"},
        {State:"OH", x: 242, y: 43, Total_Injured_2021: 1, color: "#ff7f00"},
        {State:"OK", x: 252, y: 63, Total_Injured_2021: 1, color: "#ADC6C6"},
        {State:"PA", x: 30, y: 140, Total_Injured_2021: 3, color: "#DCCD37"},
        {State:"SC", x: 170, y: 250, Total_Injured_2021: 1, color: "#25C4C9"},
        {State:"TN", x: 165, y: 132, Total_Injured_2021: 562, color: "#e41a1c"},
        {State:"TX", x: 95, y: 235, Total_Injured_2021: 13, color: "#B5E725"},//0C6D0C
        {State:"VT", x: 140, y: 20, Total_Injured_2021: 2, color: "#0C6D3E"},
        {State:"WI", x: 260, y: 200, Total_Injured_2021: 1, color: "#589578"},
        {State:"WV", x: 270, y: 180, Total_Injured_2021: 1, color: "#588295"},
      ];


var scene7 = d3.select("#scene7")
    .attr("width", 320)
    .attr("height", 300);

scene7.selectAll("circle")
    .data(data_injured_2021).enter()
    .append("circle")
    .attr("cx", function(d) {return d.x})
    .attr("cy", function(d) {return d.y})
    .attr("r", function(d) {
        return Math.sqrt(d.Total_Injured_2021*20)
    })
    .attr("fill", function(d) {
        return d.color;
    })
    .on("mouseover", function (d) {
        bubble_tooltip7.transition()
            .duration(200)
            .style("opacity", .9);
        bubble_tooltip7.html(d.State+"("+d.Total_Injured_2021+")")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 15) + "px");
    })
    .on("mouseout", function (d) {
        bubble_tooltip7.transition()
            .duration(500)
            .style("opacity", 0);
    });

scene7.selectAll("text")
    .data(data_injured_2021).enter()
    .append("text")
    .attr("x", function(d) {return d.x+(Math.sqrt(d.Total_Injured_2021*20))})
    .attr("y", function(d) {return d.y+4})
    .text(function(d) {return d.State})
    .style("font-family", "arial")
    .style("font-size", "12px")





async function load1() {
    d3.csv("https://csarkar1983.github.io/testrepo/data/US_TORNADO_2021.csv").then(function (data_given) {
        

        //console.log(data_given[3])

        var makeScale = d3.scaleBand()
            .range([0, width])
            .domain(data_given.map(function (d) { return d.State; }))

        var makeAxis = d3.axisBottom()
            .scale(makeScale)
            .ticks(5);


        scene1.append("g")
            .attr("transform", "translate(50,750)")
            .attr("class", "axis")
            .call(makeAxis)
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-30)")
            .style("text-anchor", "end");

        scene1.selectAll("mybar")
            .data(data_given)
            .enter()
            .append("rect")
            .attr("x", function (d, i) { return margin.left + makeScale(state[i]); })
            .attr("y", function (d, i) { return y(total_count_2019[i]) - 250; })
            .attr("width", makeScale.bandwidth() - 10)
            .attr("height", function (d, i) { return height - y(total_count_2019[i]); })
            .attr("fill", "#FFA500").on("mouseover", function (d, i) {
                bar_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                bar_tooltip.html(state[i])
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                bar_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const annotations = [
            {
                note: {
                    label: "TX, OK, MS, KS, LA, AL, MO",
                    title: "Higher Tornado Risk States for 2019"
                },
                color: ["red"],
                x: 90,
                y: 90,
                dy: 0,
                dx: 0
            }
        ]

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene1.append("g")
            .call(makeAnnotations)

    })
}

function handleSelectChange(event) {

    var selectElement = event.target;
    var value = selectElement.value;
    //alert(value);
    if (value === "2019") {
        scene1.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", "#FFA500")
            .attr("y", function (d, i) { return y(total_count_2019[i]) - 250; })
            .attr("height", function (d, i) { return height - y(total_count_2019[i]); })

        const annotations = [
            {
                note: {
                    label: "TX, OK, MS, KS, LA, AL, MO",
                    title: "Higher Tornado Risk States for 2019"
                },
                color: ["red"],
                x: 90,
                y: 90,
                dy: 0,
                dx: 0
            }
        ]
        
        scene1.selectAll('g').remove();

        var makeScale = d3.scaleBand()
            .range([0, width])
            .domain(state.map(function (d,i) { return state[i]; }))

        var makeAxis = d3.axisBottom()
            .scale(makeScale)
            .ticks(5);


        scene1.append("g")
            .attr("transform", "translate(50,750)")
            .attr("class", "axis")
            .call(makeAxis)
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-30)")
            .style("text-anchor", "end");

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene1.append("g")
            .call(makeAnnotations)

    } else if (value === "2020") {

        

        scene1.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", "#66C2A5")
            .attr("y", function (d, i) { return y(total_count_2020[i]) - 250; })
            .attr("height", function (d, i) { return height - y(total_count_2020[i]); })

            const annotations = [
                {
                    note: {
                        label: "TX, MS, AL, IL, SC, GA, MN, FL",
                        title: "Higher Tornado Risk States for 2020"
                    },
                    color: ["red"],
                    x: 90,
                    y: 90,
                    dy: 0,
                    dx: 0
                }
            ]
            
            scene1.selectAll('g').remove();
    
            var makeScale = d3.scaleBand()
                .range([0, width])
                .domain(state.map(function (d,i) { return state[i]; }))
    
            var makeAxis = d3.axisBottom()
                .scale(makeScale)
                .ticks(5);
    
    
            scene1.append("g")
                .attr("transform", "translate(50,750)")
                .attr("class", "axis")
                .call(makeAxis)
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-30)")
                .style("text-anchor", "end");
    
            const makeAnnotations = d3.annotation()
                .annotations(annotations)
            scene1.append("g")
                .call(makeAnnotations)

    } else {
        scene1.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", "#5E4FA2")
            .attr("y", function (d, i) { return y(total_count_2021[i]) - 250; })
            .attr("height", function (d, i) { return height - y(total_count_2021[i]); })

        const annotations = [
            {
                note: {
                    label: "IA, TX, MS, IL, AL, TN, OK, MN",
                    title: "Higher Tornado Risk States for 2021"
                },
                color: ["red"],
                x: 90,
                y: 90,
                dy: 0,
                dx: 0
            }
        ]
        
        scene1.selectAll('g').remove();

        var makeScale = d3.scaleBand()
            .range([0, width])
            .domain(state.map(function (d,i) { return state[i]; }))

        var makeAxis = d3.axisBottom()
            .scale(makeScale)
            .ticks(5);


        scene1.append("g")
            .attr("transform", "translate(50,750)")
            .attr("class", "axis")
            .call(makeAxis)
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-30)")
            .style("text-anchor", "end");

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene1.append("g")
            .call(makeAnnotations)
    }
}

// --------------------------------------------------------------------------------// 
// SCENE TWO ----------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

var keys_cyls = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var myColor = d3.scaleOrdinal()
    .domain(keys_cyls)
    .range(["#5E4FA2", "#3288BD", "#66C2A5", "#1CF2F5", "#1CF5A6",
        "#30F51C", "#85F51C", "#B3F51C", "#D4F51C", "#F5F51C"]);

var tooltip = d3.select("body").append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    //.style("background-color", "black")
    .style("background-color", "rgba(66, 79, 119, 0.87)")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

// Legend
var size = 15
scene2.selectAll("legend")
    .data(keys_cyls)
    .enter()
    .append("rect")
    .attr("x", 100)
    .attr("y", function (d, i) { return 40 + i * (size + 5) })
    .attr("width", size)
    .attr("height", size)
    .attr("stroke", "black")
    .style("fill", function (d) { return myColor(d) })
    .on("mouseover", function (d) { highlight(d) })
    .on("mouseleave", function (d) { noHighlight(d) })

scene2.selectAll("labels")
    .data(keys_cyls)
    .enter()
    .append("text")
    .attr("x", 100 + size * 1.2)
    .attr("y", function (d, i) { return 40 + i * (size + 5) + (size / 2) })
    .style("fill", function (d) { return "black" })
    .text(function (d) { return d })
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .on("mouseover", highlight)
    .on("mouseleave", noHighlight)

// Annotation
scene2.append('rect')
    .attr("x", 300)
    .attr("y", 100)
    .attr("width", 460)
    .attr("height", 30)
    .style("fill", 'lightgray')

scene2.append('text')
    .attr("x", 310)
    .attr("y", 120)
    .attr("width", 60)
    .attr("height", 20)
    .style("fill", 'black')
    .text("Climate Change Index are largely correlated with total tornado.")
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")

var highlight = function (d) {
    scene2.selectAll(".datapt").style("opacity", .05)
    scene2.selectAll(".a" + d).style("opacity", 1)
}

var noHighlight = function (d) {
    d3.selectAll(".datapt").style("opacity", 1)
}

async function load2() {
    d3.csv("https://csarkar1983.github.io/testrepo/data/US_TORNADO_2021.csv").then(function (d) {
        scene2.selectAll("div")
            .append("g")
            .data(d)
            .enter()
            .append("circle")
            .attr("class", function (d) { return "datapt " + "a" + d.Climate_Change_index_2019 })
            .attr("cx", function (d) { return d.Total_Count_2019*5})
            .attr("cy", function (d) { return 300 })
            .attr("r", "10")
            .attr("fill", function (d) { return myColor(d.Climate_Change_index_2019); })
            .attr("transform", "translate(90,-30)")
            .on("mouseover", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html(d.State+"("+d.Total_Count_2019+")")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        const annotations = [
            {
                note: {
                label: "There is a +Ve correlation",
                title: "Correlation between Climate Change Index and Total Tornado"
                },
                connector: {
                end: "dot",        // Can be none, or arrow or dot
                type: "line",      // ?? don't know what it does
                lineType : "vertical",    // ?? don't know what it does
                endScale: 10     // dot size
                },
                color: ["blue"],
                x: 800,
                y: 110,
                dy: 0,
                dx: 70
            }
        ]
        

        const makeAnnotations = d3.annotation()
            .annotations(annotations)
        scene2.append("g")
            .call(makeAnnotations)
    })
}

function updateClimateIndex(event) {

    var selectElement = event.target;
    var value = selectElement.value;
    //alert(value);
    if (value === "2019") {
        scene2.selectAll('circle').remove();
        d3.csv("https://csarkar1983.github.io/testrepo/data/US_TORNADO_2021.csv").then(function (d) {
            //alert(value);
            scene2.selectAll("p")
                .append("g")
                .data(d)
                .enter()
                .append("circle")
                .attr("class", function (d) { return "datapt " + "a" + d.Climate_Change_index_2019 })
                .attr("cx", function (d) { return d.Total_Count_2019*5})
                .attr("cy", function (d) { return 300 })
                .attr("r", "10")
                .attr("fill", function (d) { return myColor(d.Climate_Change_index_2019); })
                .attr("transform", "translate(90,-30)")
                .on("mouseover", function (d) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(d.State+"("+d.Total_Count_2019+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        })
    } else if (value === "2020") {
        scene2.selectAll('circle').remove();
        d3.csv("https://csarkar1983.github.io/testrepo/data/US_TORNADO_2021.csv").then(function (d) {
            //alert(value);
            scene2.selectAll("p")
                .append("g")
                .data(d)
                .enter()
                .append("circle")
                .attr("class", function (d) { return "datapt " + "a" + d.Climate_Change_index_2020 })
                .attr("cx", function (d) { return d.Total_Count_2020*5})
                .attr("cy", function (d) { return 300 })
                .attr("r", "10")
                .attr("fill", function (d) { return myColor(d.Climate_Change_index_2020); })
                .attr("transform", "translate(90,-30)")
                .on("mouseover", function (d) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(d.State+"("+d.Total_Count_2020+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        })
    } else {
        scene2.selectAll('circle').remove();
        d3.csv("https://csarkar1983.github.io/testrepo/data/US_TORNADO_2021.csv").then(function (d) {
            scene2.selectAll("p")
                .append("g")
                .data(d)
                .enter()
                .append("circle")
                .attr("class", function (d) { return "datapt " + "a" + d.Climate_Change_index_2021 })
                .attr("cx", function (d) { return d.Total_Count_2021*5})
                .attr("cy", function (d) { return 300 })
                .attr("r", "10")
                .attr("fill", function (d) { return myColor(d.Climate_Change_index_2021); })
                .attr("transform", "translate(90,-30)")
                .on("mouseover", function (d) {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", .9);
                    tooltip.html(d.State+"("+d.Total_Count_2021+")")
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function (d) {
                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0);
                });
        })
    }
}

// --------------------------------------------------------------------------------// 
// SCENE THREE --------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 

// Reference: https://www.d3-graph-gallery.com/graph/connectedscatter_select.html
var keys_fuel = ["Diesel", "Gasoline", "Electricity"]
var shape = d3.scaleOrdinal()
    .domain(keys_fuel)
    .range([d3.symbol().type("circle"), d3.symbol().type("diamond"), d3.symbol().type("square")]);

var scatter_tooltip = d3.select("body")
    .append("div")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "15px")
    .style("color", "white")

/*async function load3() {
    d3.csv("https://flunky.github.io/cars2017.csv").then(function (data) {

        var fuelScale = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.Fuel; }))

        var fuelAxis = d3.axisBottom()
            .scale(fuelScale)
            .ticks(5);

        var cylScale = d3.scaleBand()
            .range([height, 0])
            .domain(keys_cyls)

        var cylAxis = d3.axisLeft()
            .scale(cylScale);

        scene3.append("g")
            .attr("transform", "translate(50,160)")
            .attr("class", "axis")
            .call(cylAxis);

        scene3.append("g")
            .attr("transform", "translate(50,1100)")
            .attr("class", "axis")
            .call(fuelAxis)
            .selectAll("text")

        scene3.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return 200 + fuelScale(d.Fuel); })
            // .attr("cy", function (d) { return 1050 - cylScale(12-d.EngineCylinders); })
            .attr("cy", function (d) { return 1000 - 60 * d.EngineCylinders; })

            .attr("r", function (d) { return d.AverageHighwayMPG / 1.5; })
            .style("fill", function (d) { return "#5E4FA2"; })
            .style("opacity", "0.1")
            .attr("stroke", "black")
            .on("mouseover", function (d) {
                scatter_tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                scatter_tooltip.html(d.Make)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                scatter_tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    })
}*/