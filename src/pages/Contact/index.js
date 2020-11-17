import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Facebook from '../../img/social-media/Facebook.png';
import Twitter from '../../img/social-media/Twitter.png';
import Instagram from '../../img/social-media/Instagram.png';
import Telegram from '../../img/social-media/Telegram.png';

const Contact = () => {
  return (
    <>
      <Header />
      <main id="contact">
        <form class="form-label form-js-label">
          <h1>Contact me!</h1>
          <fieldset>
            <input
              id="userName"
              name="userName"
              type="text"
              autocomplete="off"
              required
            />
            <label for="userName">User Name</label>
          </fieldset>
          <fieldset>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              autocomplete="off"
              required
            />
            <label for="userEmail">Email Address</label>
          </fieldset>
          <fieldset>
            <textarea
              id="message"
              name="message"
              type="textarea"
              autocomplete="off"
            />
            <label for="box">Message</label>
          </fieldset>
          <fieldset>
            <a href="#" className="btn" id="send">
              Send
            </a>
          </fieldset>
        </form>
        <div>
          <div>
            <a href="http://www.facebook.com/marianocuestafoto">
              <img src={Facebook} width="10%" height="100" />
              <span>Facebook</span>
            </a>
          </div>
          <div>
            <a href="http://www.twitter.com/macnelus">
              <img src={Twitter} width="10%" height="100" />
              <span>Twitter</span>
            </a>
          </div>
          <div>
            <a href="http://www.instagram.com/marianocuestafoto">
              <img src={Instagram} width="10%" height="100" />
              <span>Instagram</span>
            </a>
          </div>
          <div>
            <a href="http://www.t.me/macnelus">
              <img src={Telegram} width="10%" height="100" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
