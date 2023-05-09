import React from "react";
import "../assets/styles/faq.css";
import { Link } from "react-router-dom";
import Faq from "../components/faq";
import { useState } from "react";
import { useEffect } from "react";

const faqs = [
  {
    id: 1,
    question: "What is a smart device?",
    answer:
      "<p>This is simply a device that can be controlled by an app or remote.  It has wifi or bluetooth connected to it.  This has expanded from Tv’s, Shades, thermostats, Audio equipment to even washers and dryers.  The problem lies in the fact that each device usually requires its on app or remote.  So you may need as many as 10 app’s to control everything, not super convienent.</p>",
  },
  {
    id: 2,
    question: "What is a smart home?",
    answer:
      "<p>The term smart home refers to the regular home, which has its appliances,  Shades, Tv’s, Audio, Security, lighting, and electronic devices connected to the internet to enable remote monitoring and management. The homeowner enjoys the convenience of securing, operating, and monitoring their house even from another side of the world. The devices that are connected are lights, security systems, cameras, audio and video systems, televisions, thermostats, and even sprinklers.  Note that most smart devices have an individual app for each item.</p>",
  },
  {
    id: 3,
    question: "Can you control multiple devices on on App or remote?",
    answer:
      "<p>Then answer to this is yes, using any one of three major softwares.  Control4, Lutron, Crestron, Savant and Vivint are examples of software thats been around for a while thot allows you to program and control the entire home from one app or remote.  Keep in mind there are more than these five, but these three are the leaders that have been around a while.  Note that Amazon and Apple’s products are NOT yet flexible enough yet.</p>",
  },
  {
    id: 4,
    question: "What is home automation ?",
    answer:
      "<p>THome automation is the concept that you can used a single central software to control multiple events at the same time.    And through this software you can automate a sequence of events to save time and make life easier. As an example, at nighttime you push the “Good Night” button on your app or device that Switches off all lights you want switched off when you sleep, lowers the shades in every room, turns off all tv’s, locks all the exterior doors, turns off all music in the home and turns the alarm on.  To execute this you need a centralized software program, there are three main ones that allow this to happen.  Control4, Crestron, Lutron, Vivint and Savant have occupied this description for 20+ years.  These are all brands you probably have never heard off, but when you stay at hotels or watch tv shows about Celebrity homes-you will have seen the functions.</p>",
  },
  {
    id: 5,
    question:
      "What is the cost to install and program home automation in my home or office?",
    answer:
      "<p>We shoot straight, so let’s start by making it clear that the minimum a project starts of at is around $30,000 and and can go up as high as $20,000,000 for a hotel.  So while these costs have come down we don’t want to mislead anyone into thinking this is done for less than $30,000.  This is a luxury and requires someone certified in programming these software to do it </p><p>We see costs range in the 3-7% range. That means for a $1,000,000 home, you will spend $30,000 to $70,000 on home automation. The number will very widely depending on quality of equipment, for example a pair of speakers can cost $200 or $2000.</p>",
  },
  {
    id: 6,
    question:
      "What different parts comprise these whole home automation systems from one app?",
    answer:
      "<p>So these systems all have the same formula:</p><ul><li>a.  A centrlized controller that acts as the hub for all devices that run through it</li><li>b.  A centralized video controller where all the video in the home comes through this one device. </li><li>c.  A centralized audio controller where all the audio in the home comes through this one device </li><li>d.  If you want to control every light you will have light switches for the system you are using</li><li>e.  If you want to control the shades you will have a controller for the shades and shades that work with the automation system you are using</li><li>f. Internet router and firewall </li><li>g.  Cable boxes </li></ul><p>All of this will be housed in a centralized rack in the home </p>",
  },
  {
    id: 7,
    question: "What is a centralized home automation rack?",
    answer:
      "<p>It is what will be standard practice in 5 years.  Imagine a storage closet with an electronic rack with everything needed for your home in it.  With this you don’t need anything near your tv’s.  No ugly cable boxes next to the tv or stereo equipment. </p>",
  },
  {
    id: 8,
    question:
      "True home automation is being able to run everything from one app, what systems allow us to do that?",
    answer:
      "<p>So there are a handful that have been in place for decades and then there are up and coming ones.  Control4, Lutron, Vivint,  Crestron and Savant are the leaders in this field.  All Five allow you to control everything from one app or one remote.  What separates these systems from Alexa and Apple’s home automation program is that they are already connected to 30,000+ products.  Whereas Alexa and Apple’s product is fairly new and limited.  </p>",
  },
  {
    id: 9,
    question: "What are the benefits of home automation?",
    answer:
      "<p>Home automation saves time and allows for convenience.  It’s nothing that is necessary, it just makes life easier.  Our guess is that by 2030 almost all New Construction homes will come with basic forms of Home automation.</p>",
  },
  {
    id: 10,
    question:
      "Which devices are most commonly controlled with home automation?",
    answer:
      "<p>There are a variety of devices and appliances that get connected and controlled in a smart home setup. The most common ones fall into four categories, and they are lighting, climate control, entertainment, and security.</p>",
  },
  {
    id: 11,
    question:
      "Are smart homes and the programming of home automation affordable?",
    answer:
      "<p>Thats a subjective question, but todays systems from the big 5 range from $20,000 to 2,000,000.  An average 4 bedroom 2 bath home with Lighting controls, AC controls, 4 Tv controls, Audio in every tv room and 15 shades will run between $30,000 and $50,000.</p>",
  },
  {
    id: 12,
    question: "Does home automation increase home value?",
    answer:
      "<p>Before we answer this, we want to make it clear when we say Home Automation we are talking about a Control4, Crestron or Savant whole home system. </p><p>With that said, we also happen to own a Real Estate brokerage  and have extensive experience in the Real Estate Market for 20+ years. We say this because we think we can answer this question with relative confidence.  If you have a home priced below $400,000 , we don’t think it increases the value of a home, it’s more likely that it will help sell a home quicker over a home that doesn’t have anything. </p><p>If your home is considered a Luxury home in the market(In Central Florida thats anything over $700K) you live in, It won’t increase your value but you’ll get back allot of what you’ve invested in it.  In this price range it’s assumed that your home has to have allot of this technology to compare with other comps in the market.  </p>",
  },
  {
    id: 13,
    question:
      "If something stops working, how do we fix it without a programmer coming in?",
    answer:
      "<p>Okay so here the most frustrating part of these systems, in order to fix programming issues someone has to help you with it.  The good news is we can now remote in to fix these items.  But we can tell you this is the most frustrating part.  Contol4 is allowing users to program on their own a little bit.</p>",
  },
  {
    id: 14,
    question:
      "Will you have to punch holes in my home to install your audio video system or home automation systems?",
    answer:
      "<p>Hard-wiring is a good and reliable option for home automation system – we ensure to avoid drilling in holes but in some instances when there is a need to make holes we would ask you in the first place.  So we are not talking about tearing up your home and the answer is YES we will have to make strategic holes to do it right.  Which explains why most home automation is installed during remodels or new construction.  </p>",
  },
  {
    id: 15,
    question: "Can these systems be installed in new and existing homes?",
    answer:
      "<p>Of course! It is noteworthy that it is cheaper to install a system during the construction of a new home, but building a system into an existing home is still very much doable using wireless technology.</p>",
  },
  {
    id: 16,
    question: "How long does it take to install smart home technology? ",
    answer:
      "<p>In most cases, it takes from one to three weeks for installation, although some projects can take longer. However, our clients become clients for life, which means anytime they have a question about how to operate their system we are there, which makes us unique in this business. Unless our clients understand every aspect of their system, our job is not finished.</p>",
  },
  {
    id: 17,
    question:
      "Does Alexa,(Amazon’s home automation system) and  Apples Home automation system work with everything from one app?",
    answer:
      "<p>Not at this time. You cannot control all the functions you can in Control4 and Crestron from a single app.  What separates Control4 and Crestron is the fact that they pioneered the use of Z-wave and zigbee.  So allot of products have both or one of them built into them.  Allowing them to be used by those systems.    But this will change soon.  In 2022, Apple and Google and Amazon agreed to use a common code called, Matter, to allow all systems in the future to work together. </p>",
  },
  {
    id: 18,
    question: "What is zigbee and zwave",
    answer:
      "<p>Zigbee and Z-Wave are communication protocols used to connect smart controllers and smart appliances.  Both of these protocols have been put in place for over 20 years and manufactures have slowly built their products with both of these protocols in them.  Since these two protocols work with Control4 and Crestron, it has allowed both home automation systems a HUGE leg up on the new Amazon and Apple home automation systems.</p>",
  },
  {
    id: 19,
    question: "What is Googles new open source “Matter”?",
    answer:
      "<p>Matter is an open-source interoperability standard that many smart home device makers have agreed to use as an industry standard for their products.  Amazon, Google and Apple have agreed going forward that this shall be the common language all products shall use to make everything compatible.  The first devices with “Matter” shall ship in early 2023.</p><p>Matter is a communication protocol that leverages existing technologies — Thread, Wi-Fi, Bluetooth, and ethernet — to allow all of your devices to communicate with each other locally, without the need for a cloud.</p><p>What makes Matter more than just another smart home standard is momentum; most of the industry is on board. Organized by the <a href='https://csa-iot.org/'>Connectivity Standards Alliance</a> (or CSA, formerly the Zigbee Alliance), Matter is being developed by <a href='https://www.theverge.com/2022/7/20/23271227/amazon-matter-smart-home-alexa-live-announcements'>Amazon</a>, Apple, <a href='https://www.theverge.com/23065031/matter-google-nest-smart-home-michele-turner-interview'>Google / Nest</a>, and Samsung, alongside many other smart home and smart home-adjacent companies, including Lutron, iRobot, Signify (Philips Hue), Ikea, <a href='https://csa-iot.org/all-solutions/matter/'>and more.</a> </p><p>Driven by a shared need to fix the problems of the smart home, these companies are working together to figure out how to make this standard be the one that sticks.</p>",
  },
  {
    id: 20,
    question: "Does smart home technology work in businesses ?",
    answer:
      "<p>Absolutely. Our commercial clients run the gamut from Fortune 500 companies, colleges and boutique hotels to small businesses, sports bars and restaurants. Our integrated smart home systems are each custom-designed to fit the unique needs of each business so that you, the business owner, can get back to work minus the technology headaches you experienced in the past. The list of <a href='https://lifetronic.net/commercial/'>business automation commercial services</a> we supply is endless, including <a href='https://lifetronic.net/commercial/boardroom/'>conference systems</a>, whole-building audio, multiple smart TVs, <a href='https://lifetronic.net/smart-home/security-surveillance/'>security, surveillance</a>, phones, <a href='https://lifetronic.net/smart-home/smart-lighting-installation/'>lighting, motorized shades</a> and <a href='https://lifetronic.net/smart-home/energy-management/'>green initiatives</a>. Everything is integrated into one automated system, controlled from one simple interface.</p>",
  },
  {
    id: 21,
    question: "What is Josh AI?",
    answer:
      "<p>Josh AI Is a voice controlled home automation app that can effortlessly orchestrate all the tech that powers your home. It uses a proprietary Natural Language Processing technology that allows you to speak commands naturally as you would to a family or friend. It is a platform that is built for everyone and is intuitive to use. Josh AI can be used as a standalone system or in addition with a smart home automation system.  We use these allot with Control4 system’s.  Think of this as Alexa on steroids, Josh can accomplish very specific tasks with ease. </p>",
  },
  {
    id: 22,
    question: "What kind of tasks can the AI in Josh Ai perform?",
    answer:
      "<p>For example, tell Josh to “dim the lights, <a href='https://wipliance.com/blog/category/motorized-window-treatments'>close the shades</a>, and play Tom Petty in the dining room.” Then turn up the volume by saying, “turn it up.” Josh will understand.</p><p>Every Josh Micro speaker and Nano microphone is room-aware, which makes commanding your smart home much simpler and intuitive. Rather than remembering the name of the room you’re in, just tell Josh to “<a href='https://wipliance.com/blog/item/guide-which-lutron-lighting-solution-is-best-for-your-home'>turn up the lights</a>” and watch as the lights illuminate in only the room you’re in.</p><p>You can also create scenes with the same name but for different rooms, and Josh will know the difference. Your “Good Morning” scene in the kitchen will trigger different devices than the “Good Morning” scene in the bedroom, but Josh will know where you are and which one to activate.</p><p>Josh.ai uses machine learning to take note of your habits and help make your life easier. It can turn lights off and set the alarm before bed and <a href='https://wipliance.com/blog/category/whole-home-audio-systems'>start a playlist</a> when you get home from work. Use the Josh app on your smartphone or tablet to view proactive recommendations for you based on the time of day or the state of your home. The more you interact with Josh, the smarter your home becomes.</p>",
  },
];

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const TitleInsuranceFaq = () => {
  const [answer, setAnswer] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 101);
    setFirstNumber(randomFirstNumber);
    const randomSecondNumber = Math.floor(Math.random() * 101);
    setSecondNumber(randomSecondNumber);
  }, []);

  const captureAnswer = firstNumber + secondNumber;

  // Handle changes to the math question input
  function handleAnswerChange(event) {
    const value = event.target.value;
    setAnswer(value);
    setSubmitDisabled(value !== captureAnswer.toString()); // Check if the answer is correct
  }
  return (
    <div className="faq-page">
      <div className="faq-page-container">
        <div className="faq-page-content">
          <div className="faq-page-nav">
            <Link to="/">Home </Link> <span> » Title Insurance FAQ</span>
          </div>
          <div className="faq-page-title">
            <h1>Questions? We’ve got answers!</h1>
            <h4>
              There can be a lot of questions that come up when buying a home.
              We took a crack at answering a few of the most common ones for
              you:
            </h4>
          </div>
          <div className="faq-page-faq-title">
            <h3>Buyer and Seller Basics </h3>
            <Faq faqs={faqs} />
          </div>
        </div>
        <div className="faq-page-contact">
          <h2>Request a closing cost quote today.</h2>
          <p>
            See if you qualify for <span>the REAL REBATE®</span>
          </p>
          <div
            role="form"
            className="wpcf7"
            id="wpcf7-f1145-p1042-o1"
            lang="en-US"
            dir="ltr"
          >
            <form
              action={contactFrom}
              method="post"
              className="wpcf7-form init"
            >
              <input
                type="text"
                placeholder="First Name*"
                name="first-name"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
              />
              <input
                type="text"
                name="last-name"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                placeholder="Email*"
              />
              <select
                name="select1"
                className="wpcf7-form-control wpcf7-select"
                aria-invalid="false"
              >
                <option value="type of transaction">Type of transaction</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
                <option value="refinancing">Refinancing</option>
              </select>
              <select
                name="select2"
                className="wpcf7-form-control wpcf7-select"
                aria-invalid="false"
              >
                <option value="whats your role?">Whats your role?</option>
                <option value="homeowner">Homeowner</option>
                <option value="lender">Lender</option>
              </select>
              <input
                type="text"
                name="property-city"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                placeholder="Property City or County"
              />
              <input
                type="text"
                name="phone"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                placeholder="Phone"
              />
              <input
                type="text"
                name="loan-amount"
                defaultValue=""
                size="40"
                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                placeholder="Loan Amount (if applicable)"
              />
              <div className="math-question">
                <label htmlFor="math-question">
                  What is {firstNumber} + {secondNumber} ?
                </label>
                <input
                  type="number"
                  value={answer}
                  onChange={handleAnswerChange}
                  placeholder="Write Answer"
                ></input>
              </div>

              <button
                type="submit"
                defaultValue="Send"
                className="wpcf7-spinner"
                disabled={submitDisabled}
              >
                Get Your Quote
              </button>
            </form>
          </div>
          <p className="tags">* Required info</p>
        </div>
      </div>
    </div>
  );
};

export default TitleInsuranceFaq;
