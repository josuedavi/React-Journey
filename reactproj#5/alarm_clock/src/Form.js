import React, {useState, useInterval} from 'react';
import useSound from 'use-sound';
import sound from '../src/alarm.mp3';

const AppBar = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [play] = useSound(sound, { volume: 0.2 });

  

  const reset = () => {
    setIsRunning(false);
  };

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <nav className="appbar">
      <div className="toggle">
        <button handleChange={toggle} checked={checked} />
      </div>
      <span className="notification">
        <button  onClick={() => reset()} />
         <span className="badge">{count}</span>
      </span>
    </nav>
  );
};
export default AppBar;