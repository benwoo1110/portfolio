/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Benedict's Portfolio",
  description:
    "A passionate individual studying Cybersecurity in Singapore.",
  og: {
    title: "Benedict Woo Portfolio",
    type: "website",
    url: "http://benergy10.dev/",
  },
};

//Home Page
const greeting = {
  title: "Benedict Woo",
  logo_name: "Benedict Woo",
  nickname: "",
  subTitle:
    "A passionate individual studying Cybersecurity in Singapore.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/benwoo1110/portfolio",
  githubProfile: "https://github.com/benwoo1110",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/benwoo1110",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/benedict-woo-77a483129/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:wben1110@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/benwjk/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
/*
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/benedict_woo_ju1",
    },
    {
      siteName: "DunJudge",
      iconifyClassname: "simple-icons:adonisjs",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://dunjudge.me/users/ben/",
    }
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ngee Ann Polytechnic",
      subtitle: "Cybersecurity and Digital Forensics",
      logo_path: "ngee_ann.png",
      alt_name: "NP",
      duration: "2020 - Present",
      descriptions: [
        "⚡ Current President of Nullsec, a Special Interest Group for cybersecurity",
        "⚡ Current Vice President of Overflow, a Special Interest Group for infocomm technology",
        "⚡ Took up Mobile App Development and Deep Learning as electives"
      ],
      website_link: "https://www.np.edu.sg/",
    },
    {
      title: "School of Science and Technology, Singapore",
      subtitle: "Computing+ Elective",
      logo_path: "sst.png",
      alt_name: "SST",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ Former president of SST Inc., an Infocomm Technology Talent Development Programme",
        "⚡ Achieved Bronze award for the 21th National Olympiad in Informatics",
        "⚡ Achieved Silver award for Australian Informatics Olympiad 2018",
      ],
      website_link: "https://www.sst.edu.sg/",
    },
    {
      title: "Lianhua Primary School",
      subtitle: "",
      logo_path: "lianhua.png",
      alt_name: "Lianhua",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ Actively participated in robotics CCA",
        ""
      ],
      website_link: "https://lianhuapri.moe.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cyber Security - Why SIEM solutions never work",
      subtitle: "Industry Engagement",
      description: 
        "I attended a very insightful webinar that discusses in details Security Event and Incident Management (SEIM) and its effectiveness as a cybersecurity tool. While SEIM allows for a centralised platform, more time should be spent on prevention compared to detection.",
      logo_path: "siem_1.png",
      certificate_link:"",
      alt_name: "Cyber Security - Why SIEM solutions never work",
      color_code: "#8C151599",
    },
    {
      title: "Power what’s next: Preparing future critical capabilities for IT and cyber security teams",
      subtitle: "Industry Engagement",
      description: 
        "The IT and Cybersecurity landscape is always changing, and it is important for corporations to continuously adapt and prepare for the future. This webinar discusses how the bar has been raised for cyber teams and gave insightful advice on how organisations can improve their cyber position.",
      logo_path: "power_1.png",
      certificate_link:"",
      alt_name: "Power what’s next: Preparing future critical capabilities for IT and cyber security teams",
      color_code: "#00000099",
    },
    {
      title: "Log4j - EVERYTHING You Need To Know",
      subtitle: "Industry Engagement",
      description: "After hearing the recent news about a serious vulnerability with Log4j, I wanted to learn more on this topic. Thus, I attended this webinar where they explain and gave a demo on how the exploit works. This is a good reminder of the importance of cybersecurity.",
      logo_path: "logj4_1.png",
      certificate_link:"",
      alt_name: "Log4j - EVERYTHING You Need To Know",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in multiple organization's executive committee. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "President",
          company: "NullSec SIG",
          company_url: "https://nullsecsig.com/",
          logo_path: "nullsec.png",
          duration: "April 2021 - PRESENT",
          location: "Singapore",
          description:
            "As the president, I started various initiatives to help others gain their passion in cybersecurity. In June 2021, the NullSec exco team worked with Cyber Security Agency (CSA) to organise secondary school students' Youth Cyber Exploration Camp. Our NullSec members have a series of monthly workshops covering interesting cybersecurity concepts from Secure Coding with Python to Kali Linux Tools and Commands. Apart from workshops, NullSec also heavily promotes the participants of various Capture-The-Flag (CTF) competitions to put our skills into action.",
          color: "#0879bf",
        },
        {
          title: "Vice President",
          company: "Overflow SIG",
          company_url: "https://np-overflow.club/",
          logo_path: "overflow.png",
          duration: "April 2021 - PRESENT",
          location: "Singapore",
          description:
            "Being the Vice President of Overflow, I assist the president in ensuring the smooth running of events. We conduct weekly workshops, where I am in charge of validating the content, and all the workshop materials are completed on time. These workshops cover any topic related to technology. In addition, every term, Overflow conducts a 3-day Bootcamp converting more complex ventures in more detail. In September of 2021, we had a camp on Algorithms and Data Structures where we touched on arrays and mapping structures, as well as tree and sorting algorithms.",
          color: "#fc1f20",
        },
        {
          title: "President",
          company: "SST Inc.",
          company_url: "https://www.sstinc.org/",
          logo_path: "sstinc.png",
          duration: "June 2018 - June 2019",
          location: "Singapore",
          description:
            "As the elected president in 2018, I directed a team of executive committee members in upholding and building up the cooperate culture of SST Inc. I spearheaded various bonding sessions such as INCamp, and managed progress tracking for all start-ups in SST Inc.",
          color: "#aaaaaa",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "12Geeks",
          company_url: "https://12geeks.com/",
          logo_path: "12geeks.webp",
          duration: "Nov 2017",
          location: "Singapore",
          description:
            "I worked on fun IoT projects to promote. I also helped in stock taking the 12Geeks shop inventory.",
          color: "#111111",
        },
      ],
    },
    {
      title: "Community Service",
      experiences: [
        {
          title: "Leader in Charge (tech)",
          company: "Pathlight School",
          company_url: "https://www.pathlight.org.sg/",
          logo_path: "pathlight.png",
          duration: "Nov 2021",
          location: "Singapore",
          description:
            "I lead a team of Ngee Ann students to teach python at Pathlight School. As the leader In Charge (Tech), I was responsible for managing and planning the workshop’s teaching material. Moreover, I managed the breakout rooms during the virtual event on zoom and oversaw the entire operations.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

const actions = [
  {
    image: "pathlight_workshop.png",
    description: "Organised a python workshop for pathlight students.",
  },
  {
    image: "ycep.png",
    description: "A secondary school outreach program where NullSec collaborated with CSA to organise workshops and a mini-CTF.",
  },
  {
    image: "overflowXnullsec.png",
    description: "First session to welcome AY 2021, joinly organised by Overflow and NullSec!",
  },
  {
    image: "projectsf.png",
    description: "Eye opening school trip to San Francisco to explore technology companies and schools there.",
  },
]

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I have experience in many different areas, from game development to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "benedict.jpg",
    description:
      "I am available anytime on my various socials. Feel free to contact me with your cool ideas on IT and Cybersecurity ;)",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8320758513",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  actions,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
