import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[date1,setdate1] = useState('');
  let[date2,setdate2] = useState('');
  let[ssec,setsec] = useState('')
  let[smin,setmin] = useState('')
  let[shour,sethour] = useState('')
  let[sday,setday] = useState('')
  let[sweek,setweek] = useState('')
  let[smon,setmon] = useState('')
  let[syear,setyear] = useState('')



  let cal_age = () => {
    let milli, sec, min, hour, day, week, year, month;
    milli = Date.parse(date2) - Date.parse(date1);
    sec = milli/1000;
    min = sec/60;
    hour = min/60;
    day = hour/24;
    week = parseInt(day/7);
    month = parseInt(hour/730);
    year = parseInt(day/365);    

    setsec(sec)
    setmin(min)
    sethour(hour)
    setday(day)
    setweek(week)
    setmon(month)
    setyear(year)

  }


  return (
    <>
      <div class="main d-flex">
        <div class="first">
          <h3>Name :</h3>
          <input type="text" name="" placeholder="Nicename" />
        </div>
        <div class="first">
          <h3>Data of Birth :</h3>
          <input type="date" name="" id="dob" onChange={(e) => { setdate1(e.target.value) }} />
        </div>
        <div class="first">
          <h3>Today Date :</h3>
          <input type="date" name="" id="td" onChange={(e) => {setdate2(e.target.value)}} />
        </div>
      </div>
      <div class="middle d-flex">
        <button class="ans" onClick={cal_age}>
          Calculate Your Age
        </button>
      </div>
      <div class="calculated d-flex">
        <p><input type="text" id="disp_y"  value={syear} />Years</p>
        <p><input type="text" id="disp_m"  value={smon} />Months</p>
        <p><input type="text" id="disp_d" value={sday} />Days</p>
      </div>
      <div class="bottom">
        <p class="d-flex">In Years:<input type="text" id="y" value={syear} /></p>
        <p class="d-flex">In Months:<input type="text" id="display_m" value={smon} /></p>
        <p class="d-flex">In Weeks:<input type="text" id="display_w" value={sweek} /></p>
        <p class="d-flex">In Days:<input type="text" id="display_d" value={sday} /></p>
        <p class="d-flex">In Hours:<input type="text" id="display_h" value={shour} /></p>
        <p class="d-flex">In Minutes:<input type="text" id="display_min" value={smin} /></p>
        <p class="d-flex">In Seconds:<input type="text" id="display_s" value={ssec} /></p>
      </div>
    </>
  );
}

export default App;
