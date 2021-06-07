import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = (props) =>{
    let percentage=props.percentage;
    const details='Last absence 12th May, 12:00 PM'
    return(
        <div style={{ width: 100, height: 100 }}>
         <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>
    )
}
export default Progress;
