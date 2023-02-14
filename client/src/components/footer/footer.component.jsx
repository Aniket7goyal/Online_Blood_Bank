import logo from '../../static/Logo-white.png';
import Button from '../buttons/Button.component';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="ab">
                <h1>Description</h1>
                <p>
                    The e-Blood bank enables electronic monitoring of blood
                    collection, testing, storage and final use and disposal. By
                    making such key data available in public domain, it brings
                    in transparency in availability and disbursement of blood
                    units.
                </p>
            </div>
            <div className="Links">
                <div>
                    <h1>LINKS</h1>
                </div>
                <div className="lks">
                    <div>&gt; About Us</div>
                    <div>&gt; Contact Us</div>
                    <div>&gt; Campaigns</div>
                    <div>&gt; Sign Up</div>
                </div>
            </div>
            <div className="news-letter">
                <div></div>
                <div>
                    <br />
                    <Button name={'red-wt-button-sm'} title={'SUBSCRIBE'} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
