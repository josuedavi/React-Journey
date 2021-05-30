import React, { useState} from 'react';
import useSound from 'use-sound';
import sound from '../src/alarm.mp3';



const DropDownData = () => {
    const [play/*, {stop}*/] = useSound(sound, { volume: 0.2 }); 
    const [hrs, setHrs] = useState('');
    const [min, setMin] = useState('');
      const startAlarm = () => {
        const getHrs = new Date().getHours() % 12;
        const getMin = new Date().getMinutes();

        
               if((hrs == (getHrs)) && (min == (getMin) )){
                   alert("Beep!");
                   play();
               }
  
      }
      
/*
      const stopAlarm = () => {
       
       stop();
      
      }*/

      const handlehrs = (event)  => {
        setHrs(event.target.value)
        console.log(event.target.value);
      }

      const handlemin = (event) => {
        setMin(event.target.value)
        console.log(event.target.value);
      }

    return (
        <div>
            <form onSubmit={startAlarm} className="hrs">
                <div className="form-group">
                    <label>Example select
                    <select onChange={handlehrs} className="form-control" id="exampleFormControlSelect1">
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
                    <select onChange={handlemin} className="form-control" id="exampleFormControlSelect1">
                    <option>00</option>
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
                <button onClick={startAlarm} type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
}




export default DropDownData;