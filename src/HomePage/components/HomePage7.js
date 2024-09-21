import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './../Styling/HomePage7Style.css';
class Landing7 extends Component {
    state = {}
    render() {
        return (
            <footer class='footer' id='landing-s7-footer'>
                <div class="footer-container">
                    <div class="footer-logos" id='footer-logo-div'>
                        <a href="https://instagram.com/tisbnovus" class="social-icon" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="#ffffff" />
                        </a>
                        {/* <a href="https://facebook.com" class="social-icon" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="#ffffff" />
                        </a>
                        <a href="https://twitter.com" class="social-icon" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} size="2x" color="#ffffff" />
                        </a> */}
                        <a href="https://youtube.com/" class="social-icon" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" color="#ffffff" />
                        </a>
                    </div>

                    <div class="footer-info" id="footer-info-div">
                        <p>Have any questions? Write to us at:</p>
                        <h3 id='email-address-h3'>novus@tisb.ac.in</h3>
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Landing7;