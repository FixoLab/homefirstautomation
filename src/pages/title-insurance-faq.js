import React from "react";
import "../assets/styles/faq.css";
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
      "<p>So these systems all have the same formula:</p><ol><li>A centrlized controller that acts as the hub for all devices that run through it</li><li>A centralized video controller where all the video in the home comes through this one device. </li><li>A centralized audio controller where all the audio in the home comes through this one device </li><li>If you want to control every light you will have light switches for the system you are using</li><li>If you want to control the shades you will have a controller for the shades and shades that work with the automation system you are using</li><li>Internet router and firewall </li><li>Cable boxes </li></ol><p>All of this will be housed in a centralized rack in the home </p>",
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
  {
    id: 23,
    question: "How Josh Ai and Chat GPT are working together:",
    answer:
      "<p>At <a href='http://www.josh.ai/'>Josh.ai</a>, the mission has been to provide conversational and contextual AI throughout our living spaces. To date, <a href='http://www.josh.ai/'>Josh.ai</a> has established itself as a foremost voice assistant in the smart home industry thanks to best-in-class device integrations while offering some personal assistant functionality like weather conditions, stock prices, math calculations, and more helpful information. While <a href='http://www.josh.ai/'>Josh.ai</a> offers many features, the possibilities become even more limitless when exploring the potential of leveraging <a href='https://edition.cnn.com/2023/01/26/tech/chatgpt-passes-exams/index.html'>ChatGPT’s</a> generative AI.</p><p>We are thrilled to be working on bringing the best of <a href='http://www.josh.ai/'>Josh.ai</a> and <a href='https://edition.cnn.com/2023/01/26/tech/chatgpt-passes-exams/index.html'>ChatGPT’s</a> together to create something truly remarkable — a solution where one plus one equals three. By combining our strengths, we envision delivering an AI experience that is beyond what any smart home is capable of. Potential use cases include:</p><ul><li>“Ok Josh, tell me a bedtime story” where Josh.ai + ChatGPT provides stories based on the location of the home and other factors unique to the family.</li><li>“Hey Josh, what are some interesting nearby attractions?” which can be easily modified to focus on shopping, outdoor activities, the arts, or other parameters of interest to the user.</li><li>“Ok Josh, can you help me understand [topic] at a 3rd grade level” in order to help learn and understand new topics.</li><li>“Hey Josh, what are some public golf courses to try around Malibu?” where any activity in any location can customize a list, even adding variables such as “that are handicap accessible” or “that cost less than $25 per person.”</li><li>“Ok Josh, the kids are coming in and it’s getting dark can you make sure the kitchen is ready for them?” where <a href='http://www.josh.ai/'>Josh.ai</a> + ChatGPT can properly prepare the space.</li></ul><p>The possibilities are endless, and there has never been a more significant moment in the evolution of smart homes and AI. Stay tuned and keep an eye on Josh.ai to witness this exciting opportunity unfold.</p>",
  },
  {
    id: 24,
    question:
      "For Shades, what brand works with these home automation companies?",
    answer:
      "<p>So there are several brands that work with Control4 and some of the other home automation systems. Qmotion and Lutron come in at the high end of the price point, followed by Somfy, Rollease and Serena shades.  Some of these products require you to buy a bridge, like a controller, that works with your automation system.  The type of material usually factors into the cost as well.  Keep in mind these are all custom ordered shades and can take upto 8 weeks to get in. </p>",
  },
  {
    id: 25,
    question: "WHAT CAN I AUTOMATE IN A SMART HOME?",
    answer:
      "<p>Today the popularity of smart homes is rising quickly. There are numerous advantages of using smart home automation systems. Homeowners are installing them to burglar-proof their places down to the every day mundane tasks.</p><p>You can use lots of different items and devices in an integrated home. Including things like thermostats, lighting, and cameras. Which is connected to a programmable network. Making the system appealing.</p><p>Home automation systems additionally make your house safer and smarter. Security devices, gates, windows, smoke detectors, surveillance cameras, locks and more can be controlled and managed by installing smart home automation.</p>",
  },
  {
    id: 26,
    question: "What is Lutron?",
    answer:
      "<p>Lutron is the undisputed industry leader of lighting control systems and motorized shading solutions for homes and businesses. From single-room to whole-home lighting control that you can manage from a mobile app or elegant keypad to whisper-quiet motorized shades that raise and lower on a schedule, </p>",
  },
  {
    id: 27,
    question: "What is creation?",
    answer:
      "<p>Although it is a major player in the home automation/smart home space, Crestron is not a widely known brand compared to Amazon’s Alexa or Google Home.</p><p>That's because Crestron is not active in the mainstream market, and instead services the high-end, luxury home sector.</p><p>Founded in 1971 and based in New Jersey, USA, Crestron Electronics first made its name in the corporate tech sector. It has annual revenues of over $2 billion, and it is estimated that over 90 per cent of Fortune 500 companies use Crestron technology.</p><p>Unlike most other home automation and smart home companies, Crestron manufactures all of its own products, giving it unparalleled cross-system integration and unmatched fail-safe capabilities.</p><p>Their entire range is designed to fit together seamlessly, and to also work with other manufacturer’s products. Crestron integrates seamlessly with Apple’s Siri, HomeKit and Apple TV, as well as Amazon Alexa and Google Home. Last year they were awarded Microsoft’s Partner of the Year for IoT technology.</p><p>With Crestron, you can use a smartphone, tablet, touch screen, or handheld remotes to control functions including:</p><ul><li>Lighting</li><li>Locks and security</li><li>Audio and media</li><li>Satellite and cable feeds</li><li>Home network</li><li>Telephone</li><li>Shading</li><li>HVAC (heating, ventilation and air conditioning)</li></ul><p>These can all be operated from within the home. The Crestron phone app allows you to adjust your home's systems from anywhere, and can alert you to potential issues with live notifications.</p>",
  },
];
const control4Faqs = [
  {
    id: 1,
    question: "What is Control4?",
    answer:
      "<p>Control4 is a home control system that brings together all of your smart home devices into one easy-to-use control panel.</p><p>Working with lighting, music, heating, home cinema, security systems and almost everything in-between, the Control4 OS can automate your home to meet the specific lifestyle needs of your family. The system creates shortcuts to control your home with a single button press, or scheduled events without even needing to lift a finger.</p><p>You've probably seen a Control4 system somewhere. Maybe on a documentary that showed off the inside of a footballer/rapper/NBA star's house. Maybe in a swanky hotel you stayed in. </p><p> You probably didn't realise it was Control4 because it's not a brand you'll see advertised in the mainstream media. And you certainly won't find any Control4 kit on the shelves at Best Buy, or listed on Amazon.</p><p>Control4 has been in the home automation since the early 2000s, way before the current smart home boom took hold, and when the only echo at Amazon was the one you'd hear if you shouted something in one of its big warehouses.</p><p>However, while Control4 is able to control lighting, multi-room audio, HVAC systems, security platforms, smart locks and more – working via the likes of <a href='https://www.the-ambient.com/guides/zigbee-devices-complete-guide-277'>Zigbee</a>, <a href='https://www.the-ambient.com/guides/zwave-z-wave-smart-home-guide-281'>Z-Wave</a>, Wi-Fi and Bluetooth – and is compatible with over 35,000 devices, it's an exclusive club reserved for people with the cash to go through an authorised Control4 dealer.</p>",
  },
  {
    id: 2,
    question: "What are the latest Control 4 Controllers?",
    answer:
      "<p>The “Core” controllers are control4’s latest set of controllers.  Core 1, Core 3 and Core 5 allow you to control both audio and video from this centralized control.</p>",
  },
  {
    id: 3,
    question: "how Does Control4 Work?",
    answer:
      "<p>Control4 gives you the tools to control your entire smart home from a range of control devices. These include wall-mounted touchscreens, keypads, tabletop tablets, voice control, and the MyHome mobile phone app on any smartphone. This means you can control your home whether inside or on-the-go. Using a Wi-Fi connection, Control4’s Scheduler Agent can also automate events based on a specific trigger. These include time of day, lighting levels, temperature, or a range of other specific factors. From blinds rising at the same time as your alarm to driveways lights switching on as you pass entrance gates, Control4 lets you design a home that’s uniquely yours.</p>",
  },
  {
    id: 4,
    question: "What specifically can control4 control?",
    answer:
      "<ul><li>Window Shades—Try controlling your power window shades with an ordinary smart home system. It's possible if they're <a href='https://www.makeuseof.com/best-smart-blinds/'>specifically designed as smart blinds</a>. But if not, Control4 can handle them. Like with other devices integrated into Cotnrol4, opening or closing them can easily be done with a voice command, through your smartphone app, or with a Control4 interface.</li><li>Climate Control—Control4 can turn your ordinary thermostat into a smart thermostat. You can tell Control4 to adjust your HVAC system to heat or cool your home. The Control4 remote access capability might be especially handy in this case, for example, if you are out of town, and you realize you forgot to turn off the air conditioner.</li><li>Lighting—Any light in your house with a wall switch can integrate with a Control4 system. No longer would you need to invest in dozens or more smart bulbs to provide smart access throughout your home. And no longer will you need to worry about the management headaches that might come with setting up and controlling that many light bulbs individually or even as part of a smart home scene.</li><li>Audio and Video—Control4 can integrate seamlessly into your home entertainment center, helping you stream high-quality audio and video in various rooms.</li><li>Security Systems—Depending on the type of security system you own, Control4 can help you manage it. This could include arming and disarming it, checking its status remotely, and more. With Control4, you may be able to integrate more security systems that might be compatible with standard, less expensive smart home systems such as those provided by Google, Amazon, or Apple.</li><li>Ceiling Fans—As previously mentioned, Control4 can integrate many hard-wired devices into your smart home system, such as the standard ceiling fan you already have installed.</li><li>Door Locks—Control4 can lock and unlock your doors at the press of an app button or through a voice command. You can also integrate your door locks into routines. For example, you could ensure that all your exterior doors automatically lock at a certain time each night, in case you forget to lock them yourself.</li></ul>",
  },
  {
    id: 5,
    question: "Is Control4 Compatible with Lutron?",
    answer:
      "<p>The great thing about Control4 is that it’s compatible with thousands of third-party products making it easy to sync all of the technology in your home without hassle. This means that a qualified Control4 programmer can integrate your system with many lighting products and software solutions, including those from Lutron. So whether you already have a Lutron lighting system and are looking to install Control4 automation, you don’t have to worry. Similarly, if you’re hoping for Control4 Lutron integration, this isn’t an issue.</p>",
  },
  {
    id: 6,
    question: "Which is Better, Lutron or Control4?",
    answer:
      "<p>Comparing Control4 with Lutron is a good way to help you determine which system is right for your home. Both Lutron and Control4 offer flexibility and convenience, with Lutron being the world leader in lighting control systems for more than 60 years. Control4 is a newer company, but with impressive automation options across multiple rooms, it’s a popular option for homeowners looking to create a luxurious and tailored atmosphere. So with all this in mind, let’s take a look at the benefits of both:</p>",
  },
];

const contactFrom = process.env.REACT_APP_CONTACTFROM;

const TitleInsuranceFaq = () => {
  const [answer, setAnswer] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 20);
    setFirstNumber(randomFirstNumber);
    const randomSecondNumber = Math.floor(Math.random() * 20);
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
      <div className="faq-wrapper">
        <div className="faq-page-container">
          <div className="faq-page-content-wrapper">
            <div className="faq-page-content">
              <div className="faq-page-title">
                <h1>Questions? We’ve got answers!</h1>
                <h4>
                  There can be a lot of questions that come up when buying a
                  home. We took a crack at answering a few of the most common
                  ones for you:
                </h4>
              </div>
              <div className="faq-page-faq-title">
                <h3>Buyer and Seller Basics</h3>
                <Faq faqs={faqs} />
              </div>
              <div className="faq-page-faq-title">
                <h3>Control4 FAQ's</h3>
                <Faq faqs={control4Faqs} />
              </div>
            </div>
            <div className="faq-page-sidebar">
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
                      <option value="type of transaction">
                        Type of transaction
                      </option>
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
                        What is <br /> {firstNumber} + {secondNumber} ?
                      </label>
                      <input
                        type="number"
                        value={answer}
                        onChange={handleAnswerChange}
                        placeholder="Write Answer"
                      />
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
        </div>
      </div>

      {/* <div className="trusted">
        <div className="faq-page-container">
          <div className="trusted-title">
            <h2>Trusted. Experienced. Reliable.</h2>
            <p>
              We’ve helped over 30,000 Families <b>Buy and Sell Homes</b>,
              alongside our trusted partners.
            </p>
          </div>
          <div className="trusted-company">
            <div className="trusted-company-image">
              <img src="assets/images/kw.png" alt="" />
            </div>
            <div className="trusted-company-image">
              <img src="assets/images/coldwellbanker.png" alt="" />
            </div>
            <div className="trusted-company-image">
              <img src="assets/images/sothebys.png" alt="" />
            </div>
            <div className="trusted-company-image">
              <img src="assets/images/remax.png" alt="" />
            </div>
            <div className="trusted-company-image">
              <img src="assets/images/century21.png" alt="" />
            </div>
            <div className="trusted-company-image">
              <img src="assets/images/douglaselliman.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TitleInsuranceFaq;
