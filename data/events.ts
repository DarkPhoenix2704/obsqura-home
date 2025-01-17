const events = [
  {
    name: "HACK LOOP",
    fee: "500",
    type: "HACKATHON",
    prize: "50K",
    link: "https://hackloop.obsqura.tech",
    image: "/hackLoop.png",
    tags: ["CSE", "HACKATHON", "ALL"],
  },
  {
    name: "CYBER SECURITY WORKSHOP",
    fee: "800",
    type: "WORKSHOP",
    link: "https://www.yepdesk.com/cyber-security/",
    image: "/cybersecurity.png",
    tags: ["AD & CC", "WORKSHOP", "ALL"],
  },
  {
    name: "HTML & DOM MANIPULATION",
    fee: "250",
    type: "WORKSHOP",
    link: "https://forms.gle/sJi6ArV95hrkjh9c7",
    image: "/hrml.png",
    tags: ["AD & CC", "WORKSHOP", "ALL"],
  },
  {
    name: "DISCURSO",
    fee: "30",
    type: "COMPETITION",
    prize: "5K",
    link: "https://www.yepdesk.com/discurso/",
    image: "/debate.png",
    tags: ["CSE", "COMPETITION", "ALL"],
  },
  {
    name: "DIGITAL ART COMPETITION",
    fee: "50",
    type: "COMPETITION",
    prize: "3K",
    link: "https://bit.ly/digitalart_23/",
    image: "/digitalArt.png",
    tags: ["CSE", "COMPETITION", "ALL"],
  },

  {
    name: "CAD MASTER",
    fee: "50",
    type: "COMPETITION",
    link: "https://www.yepdesk.com/cad-master2",
    image: "/cadmasterstrip 1.png",
    tags: ["CIVIL", "COMPETITION", "ALL"],
  },
  {
    name: "24mm",
    fee: "100",
    type: "COMPETITION",
    prize: "3K",
    link: "https://bit.ly/24mm60sec",
    image: "/shortFm.png",
    tags: ["CIVIL", "COMPETITION", "ALL"],
  },
  {
    name: "PES MANIA",
    fee: "50",
    type: "COMPETITION",
    prize: "3K",
    link: "https://bit.ly/pesmania23",
    image: "/pesMania.png",
    tags: ["CIVIL", "COMPETITION", "ALL"],
  },
  /*
  {
    name: "HYBRID VEHICLE WORKSHOP",
    fee: "849",
    type: "WORKSHOP",
    prize: null,
    image: "/harley.png",
    link: "https://www.yepdesk.com/hybrid-vehicles-WORKSHOP/private/a02ovlrp38",
  }, */ {
    name: "PCB WORKSHOP",
    fee: "399",
    type: "WORKSHOP",
    prize: null,
    link: "https://www.yepdesk.com/pcb-workshop/",
    image: "/pcb_strip 1.png",
    tags: ["ECE", "WORKSHOP", "ALL"],
  },
  {
    name: "0 Day Summit-Ethical Hacking Workshop ",
    fee: "300",
    type: "WORKSHOP",
    prize: null,
    link: "https://www.yepdesk.com/0-day-summit-the-new-age-of-computer-xploitation",
    image: "/ethicalhackstrip 1.png",
    tags: ["CSE", "WORKSHOP", "ALL"],
  },
  /* 
  {
    name: "3'S FOOTBALL",
    fee: "286",
    type: "COMPETITION",
    prize: null,
    link: "https://www.yepdesk.com/3-s-football2/private/rv75g41nvg",
  },
  */
  {
    name: "ROBO WAR",
    fee: "600",
    type: "COMPETITION",
    prize: "20K",
    image: "/roboWar.png",
    link: "https://www.yepdesk.com/robo-war3/",
    tags: ["ALL", "COMPETITION", "ECE"],
  },
  {
    name: "CNC DRAWING BOT WORKSHOP",
    fee: "50",
    type: "WORKSHOP",
    prize: null,
    link: "https://www.yepdesk.com/cnc-drawing-bot-workshop/",
    image: "/drawing bot strip png 1.png",
    tags: ["CSE", "WORKSHOP", "ALL"],
  },
  {
    name: "HARLEY DAVIDSON WORKSHOP",
    fee: "849",
    type: "WORKSHOP",
    image: "/harley.png",
    prize: null,
    link: "https://www.yepdesk.com/harley-davidson-workshop2",
    tags: ["MECH", "WORKSHOP", "ALL"],
  },
  {
    name: "CODE CLASH",
    fee: "100",
    type: "COMPETITION",
    prize: "2K",
    link: "https://www.yepdesk.com/code-clash",
    image: "/codeclash.png",
    tags: ["CSE", "COMPETITION", "ALL"],
  },
  {
    name: "DRONE RACE",
    fee: "500",
    image: "/dronerace.png",
    type: "COMPETITION",
    prize: null,
    link: "https://www.yepdesk.com/drone-race/",
    tags: ["ECE", "COMPETITION", "ALL"],
  },
  {
    name: "Workshop on Architectural Design",
    fee: "300",
    image: "/civil Insta Strip 1 1.png",
    type: "WORKSHOP",
    prize: null,
    link: "https://www.yepdesk.com/workshop-on-architectural-design/",
    tags: ["CIVIL", "WORKSHOP", "ALL"],
  },
  {
    name: "LOGO DESIGN COMPETITION",
    fee: "20",
    type: "COMPETITION",
    prize: "1K",
    image: "/logoDe.png",
    link: "https://bit.ly/3AE5po5",
    tags: ["CSE", "COMPETITION", "ALL"],
  },
  {
    name: "PROJECT EXPO",
    fee: "500",
    type: "COMPETITION",
    prize: "10K",
    link: "https://www.yepdesk.com/project-expo5",
    image: "/projectexpo_strip 1.png",
    tags: ["COMPETITION", "MECH", "ALL"],
  },
  {
    name: "Web 3.0 Workshop",
    fee: "290",
    type: "WORKSHOP",
    prize: "10K",
    link: "https://www.yepdesk.com/project-expo5",
    image: "/pacelabstrip 1.png",
    tags: ["WORKSHOP", "CSE", "ALL"],
  },
  {
    name: "E-SPORTS Workshop",
    fee: "50",
    type: "WORKSHOP",
    link: "https://bit.ly/3AByGQe",
    image: "/pacelabstrip 1.png",
    tags: ["WORKSHOP", "CSE", "ALL"],
  },
  /*
  {
    name: "HUNTERS MONARCHY",
    fee: "100",
    type: "COMPETITION",
    prize: "3K",
    link: "https://www.yepdesk.com/huntersmonarchy/private/ploshtk8ho",
  },
  {
    name: "CODE WAR",
    fee: null,
    type: "COMPETITION",
    prize: "2K",
    link: "https://www.yepdesk.com/code-war-coding-and-debugging-COMPETITION-/private/i678pmd47a",
  }, */
  {
    name: "WALTZ AND WANDER",
    fee: "200",
    type: "COMPETITION",
    prize: "5K",
    image: "/waltz.png",
    link: "https://www.yepdesk.com/waltz-and-wander",
    tags: ["COMPETITION", "COMMON", "CULTURAL", "ALL"],
  },
  {
    name: "RUMBA",
    fee: "2000",
    type: "COMPETITION",
    prize: "20K",
    image: "/Rumba.png",
    link: "https://www.yepdesk.com/rumba",
    tags: ["COMPETITION", "COMMON", "CULTURAL", "ALL"],
  },
  {
    name: "GLAMORAMA",
    fee: "2000",
    type: "COMPETITION",
    prize: "20K",
    image: "/fashionshowcover.png",
    link: "https://www.yepdesk.com/glamaroma",
    tags: ["COMPETITION", "COMMON", "CULTURAL", "ALL"],
  },
  {
    name: "Bullet Battle",
    fee: "200",
    type: "COMPETITION",
    prize: "4.5K",
    image: "/bulletstrip.png",
    link: "https://www.yepdesk.com/bullet-battle",
    tags: ["COMPETITION", "MECH", "ALL"],
  },

  {
    name: "Photo Exhibition",
    fee: "Free",
    type: "EXHIBITION",
    prize: "4.5K",
    image: "/photo_exhibition.png",
    link: "https://forms.gle/QvtkHn6F72x22DGU8",
    tags: ["EXHIBITION", "MCA", "ALL"],
  },
  {
    name: "BGMI Tournament",
    fee: "100",
    type: "E-SPORTS",
    prize: "4.5K",
    image: "/bgmi.png",
    link: "https://wa.me/+917016202336",
    tags: ["E_SPORTS", "CSE", "ALL"],
  },
  {
    name: "VALORANT SHOWDOWN",
    fee: "249",
    type: "E-SPORTS",
    prize: "7K",
    image: "/valorant.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfdNU8XOyhMTKmfYoCvrr5_1tM9zBc7RHNzs__qy886awWahg/viewform?usp=sf_link",
    tags: ["E_SPORTS", "CSE", "ALL"],
  },
  {
    name: "CODE BREAKERS JR",
    fee: "100",
    type: "COMEPETITION",
    prize: "1.5K",
    image: "/cbJr.png",
    link: "https://forms.gle/6xfe1J6yqkawAF8G9",
    tags: ["COMPETITION", "MCA", "ALL"],
  },
  {
    name: "CODE BREAKERS SR",
    fee: "100",
    type: "COMEPETITION",
    prize: "3K",
    image: "/cbSr.png",
    link: "https://forms.gle/iCWfM3eduCpiELRB8",
    tags: ["COMPETITION", "MCA", "ALL"],
  },
  {
    name: "NEUROZ",
    fee: "200",
    type: "COMEPETITION",
    prize: "4K",
    image: "/Nueroz.png",
    link: "https://bit.ly/NeurozObsqura23",
    tags: ["COMPETITION", "MBA", "ALL"],
  },
  {
    name: "CARPA-DIEM",
    fee: "400",
    type: "COMEPETITION",
    prize: "5K",
    image: "/carpa.png",
    link: "https://bit.ly/CarpeDiemObsqura23",
    tags: ["COMPETITION", "MBA", "ALL"],
  },
  {
    name: "AD-SELFY",
    fee: "100",
    type: "COMEPETITION",
    prize: "3K",
    image: "/AdFly.png",
    link: "https://bit.ly/adselfyobsqura23",
    tags: ["COMPETITION", "MBA", "ALL"],
  },
  {
    name: "BRAIN MASTER",
    fee: "150",
    type: "COMEPETITION",
    prize: "3K",
    image: "/brain.png",
    link: "https://bit.ly/BrainMasterObsqura23",
    tags: ["COMPETITION", "MBA", "ALL"],
  },
];

export default events;
