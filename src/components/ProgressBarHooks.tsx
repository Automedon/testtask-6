import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

const CloseButton = styled(Button)`
  position: fixed;
  top:1rem;
  right: 1rem;
`;

function ProgressBar1() {
    const [time, setTime] = useState(0);
    const timer = useRef(0);
    useEffect(
        () => {
            timer.current = setInterval(() => setTime(time => time + 33.34), 1000);
            return () => {
                clearInterval(timer.current)
            }
        },
        []
    );
    useEffect(() => {
        setTimeout(() => clearInterval(timer.current), 3001)
    }, []);

    return (
        <div className='fixed-bottom'>
        <ProgressBar animated now={time} label={`${(time / 33.34).toFixed(0)}sec`}/>
    {time > 100 && <CloseButton>Close</CloseButton>}
    </div>
    );

}


export default ProgressBar1;
