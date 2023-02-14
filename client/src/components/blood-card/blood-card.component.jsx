import { Link } from 'react-router-dom';
import Button from '../buttons/Button.component';
import './blood-card.css';

const BloodCard = ({ title, buttonTitle, redirect }) => {
    return (
        <div className="blood-card">
            <div>
                <h1>{title}</h1>
                <p className="text-bc"></p>
                <Link to={`/${redirect}`}>
                    <Button title={buttonTitle} name={'black-wt-button-sm'} />
                </Link>
            </div>
        </div>
    );
};

export default BloodCard;
