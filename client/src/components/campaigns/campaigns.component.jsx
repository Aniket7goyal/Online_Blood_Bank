import CampaignCard from '../campaign-card/campaign-card.component';
import './campaigns.css';

const Campaigns = () => {
    return (
        <div className="campaigns">
            <div className="campaigns-div">
                <CampaignCard />
                <CampaignCard />
                <CampaignCard />
            </div>
        </div>
    );
};

export default Campaigns;
