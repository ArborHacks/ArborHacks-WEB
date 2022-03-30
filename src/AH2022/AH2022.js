import React, { Component } from 'react';
import './AH2022.css';
class AH2022 extends Component {
  render = () => {
    return(
        <div>
            <div id="big header">
            <span class='hack'>Hackathon 2022</span>
            <h2>Saturday, April 2nd <br/>
                1pm - 4pm <br/>
                Format: Virtual <br/>
                Zoom Link TBD<br/>
            </h2>
            <p>
              Sign-up form <a href="https://forms.gle/oVP61Lu5UJnU3JHm8">here</a>
            </p>
            </div>
            <div id="details" class='hack'>
              <p>
                <br/><br/>
                <h3> Hackathon 2022 Details </h3>
                Arborhacks is back! We're doing a virtual hackathon this year, but in the spirit of Arborhacks, we've made some pretty challenging questions! 
                <br/> <br/>
                As up-and-coming hackers, you'll be writing solutions to hypothetical scenarios. All that's required to participate is any device that can run browsers, and a working hacker brain! <br/> <br/>
                If you don't have a coding setup on your computer, don't worry! There are web-based code IDE's that you can use (e.g. replit.com). The hackathon can be completed in either C++ or Java, it's up to you. <br/> <br/>
                The event begins with a briefing over zoom at 1pm. At the end of the briefing, we'll show you the hidden link in the Arborhacks website. Once we provide the necessary information for you to begin, you're free to start! There are no particular restrictions on what resources you're allowed to use, so feel free to look things up if you're stuck! <br/> <br/>
                The autograder will automatically stop accepting submissions at 4:00pm. Be sure that you submit your code before that time. <br/> <br/>
                Tips: <br/>
                <ul>
                  <li>Make backups of your code! This can be as simple as making a notepad file and copy-pasting everything in, but it's a lifesafer when things go wrong!</li>
                  <li>Try coming up with your own test cases for your code! It's much faster to test that way than using the autograder</li>
                </ul>
              </p>
            </div> 
        </div>
    );
  }
}

export default AH2022;
