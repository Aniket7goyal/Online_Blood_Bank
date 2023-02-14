import Button from '../buttons/Button.component';
import './campaign-card.css';

const CampaignCard = ({ img, title }) => {
    return (
        <div className="campaign-card">
            <div className="img-div">
                <img
                    src="/Users/shield/Downloads/ST3-Project/client/src/static/patient.jpg"
                    alt="patient.jpg"
                />
            </div>
            <div className="campaign-card-cont">
                <h2>{title}</h2>
                <h4>
                    The blood you donate gives someone another chance at life.
                </h4>
                <div id="b-cc">
                    <Button title={'DONATE NOW'} name={'black-wt-button-sm'} />
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
