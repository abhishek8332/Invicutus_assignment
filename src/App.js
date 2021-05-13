import './App.css';
import axios from 'axios';
import React from'react';

/////////////////////////////Global Variables Used////////////////////////

let n;
let abb;

//////////////////////////////////Object for CSS////////////////////////
let tableStyle={
  width:"500px",
  margin:"auto"
}

let inputStyle={
  width:"500px",
  margin:"auto"
}

////////////////////////////////Functions Used//////////////////////////////


//Function to check whether it is word or number
function isalpha(c) {
  return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')));
}

//Function that take data from the file and implement frequency sort
function fun1(text){
  let dict={};
  var words = text.toLowerCase().replace(/[.]|[,]|[-]|20|1|500/g, "").split(/\s/);

    for(var i=0 ;i<words.length;i++)
    {
      if(isalpha(words[i]))
      {
        if(!dict[words[i]])
        {
          dict[words[i]]=1;
        }
        else
        {
          dict[words[i]]=dict[words[i]]+1;
        }
      }
    }
 
  
  abb= Object.fromEntries(Object.entries(dict).sort(([,a],[,b]) => b-a));
  abb=Object.entries(abb)
  tabb();
  
}

//Function to implement and show the table
let tabb=()=>{
  var html="<tr><td><b>Words</b></td><td><b>Frequency</b></td></tr>";
  if(n>abb.length)
  {
    n=abb.length;
    alert("max size exceed")
    
  }
  for(var i=0;i<n;i++)
  {
    html+="<tr>";
    html+="<td>" + abb[i][0] + "</td>";
    html+="<td>" + abb[i][1] + "</td>";
    html+="</tr>";
  
  }

  if(!n )
  {
    alert("Enter a number");
    document.getElementById("limit").innerHTML="";
    document.getElementById("heading").innerHTML="";
    document.getElementById("box").innerHTML = "";
  }
  else
  {
  document.getElementById("limit").innerHTML="Total distinct words: "+abb.length;
  document.getElementById("heading").innerHTML="Table"
  document.getElementById("box").innerHTML = html;
  }

}

//Function to fetch the data from online file
let submitFun=(e)=>{
  e.preventDefault();
  n=document.getElementById("num").value;
  axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md').then(res=>fun1(res.data))
  
}

///////////////////////////////////Main Structure//////////////////////////////////////

function App() {
  
  return (
    <div className="App">
      <form className="container" onSubmit={(e)=>submitFun(e)}>
        <div className="form-floating mb-3 my-3" style={inputStyle}>
            <input type="number" className="form-control " id="num" placeholder="1" value={n} />
            <label htmlFor="num">Number</label>
        </div>
        <button type="submit" className="btn  btn-success">Submit</button>
      </form>

      <br/>
      <div id="limit"></div>
      <br/>
      <h3 id="heading"></h3>
      <table className="table table-success table-striped " id="box" style={tableStyle}></table>

    </div>
  );
}

export default App;
