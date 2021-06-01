import React, {  useEffect, useState} from 'react';
import useSound from 'use-sound';
import sound from '../src/alarm.mp3';




        
          
const AlarmClock = (event) => {
   const currentTime =  new Date().toLocaleTimeString('en-US', { hour12: true });
    const [alarmTime, setAlarmTime] = useState(null);
    const [play, {stop}] = useSound(sound, { volume: 0.2 }); 
   // const interval = setInterval(() => checkAlarmClock(), 1000); 
    useEffect(() => {
       
        
    
        
      
      }, []);

      const setTime = () => {
       

      }

      const setAlarm = (event) => {
        
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ':00';
        setAlarmTime(inputAlarmTimeModified);
        
      }

      const checkAlarmClock = () => {
          if(currentTime === alarmTime) {
              alert("currenttime:" + currentTime + "alarm time: " +alarmTime);
              play();
          }
      }

    return (
        <div>
        <form onSubmit={(event) => setAlarm(event)} className="hrs">
            <div className="form-group">
                <label>Example select
                <select className="form-control" id="exampleFormControlSelect1">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                </select>
                </label>
            </div>

        
                <label >Example select
                <select className="form-control" id="exampleFormControlSelect1">
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                </select>
                </label>            
            <button type="submit" value="Submit">Submit</button>
            
        </form>

        <form >
        <button type="submit" value="Submit" onClick={stop()}>Turn Off Alarm</button>
        </form>
    </div>

    );
}

class AlarmSetup extends React.Component {
    constructor() {
        super();
        this.state = {
             currentTime :  "",
             currentHours: new Date().getHours() % 12,
             currentMin: new Date().getMinutes(),
             alarmTime: "",
             hrs: "",
             min: 0
        }
        this.setAlarmTime = this.setAlarmTime.bind(this);
        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.checkAlarmClock = this.checkAlarmClock.bind(this);
        this.handlehrs = this.handlehrs.bind(this);
        this.handlemin = this.handlemin.bind(this);
        this.addZero = this.addZero.bind(this);
    }
    componentDidMount(){
        this.alarm_clock = setInterval(
            () => this.setCurrentTime(),
            1000
        );
        this.ring = setInterval(
            () => this.checkAlarmClock(),
        1000)
        };
    
        componentWillUnmount() {
        clearInterval(this.alarm_clock);
        clearInterval(this.ring);
        }
        
        setCurrentTime(){
            this.setState({
              currentTime: new Date().getHours() % 12 + ":" + new Date().getMinutes()
            });
          }
        
          setAlarmTime(event) {
            event.preventDefault();
           
 
            this.setState({
              alarmTime: this.state.hrs + ":" + this.state.min 
            })
          }
        
          
          checkAlarmClock(props){
            console.log("Current time:" + this.state.currentTime + " alarm time:" + this.state.alarmTime);
              if(this.state.currentTime === this.state.alarmTime) {
                //alert("its time!");
                this.props.play();
              } else {
                console.log("not yet");
              }
            
          }

           handlehrs (event) {
            this.state.hrs = event.target.value;
            console.log(event.target.value);
          }
    
        handlemin(event)  {
            this.state.min = event.target.value;
            console.log(event.target.value);
          }
    
        addZero(timeValue) {
            return timeValue < 10 ? "0" + timeValue : timeValue
          }
    render() {
        return (
            <form onSubmit={(event) => this.setAlarmTime(event)} className="hrs">
                <div className="form-group">
                    <label>Example select
                    <select onChange={this.handlehrs} className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    </select>
                    </label>
                </div>

        
                <label >Example select
                <select onChange={this.handlemin} className="form-control" id="exampleFormControlSelect1">
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                </select>
                </label>            
            <button type="submit" value="Submit">Submit</button>
        </form>
        );
    }
}

const Alarm = (props) => {
    const [play, {stop}] = useSound(sound, { volume: 0.2 }); 
    return (
        <div>
            <AlarmSetup play={play}/>
        </div>
    );
}

export default Alarm;
