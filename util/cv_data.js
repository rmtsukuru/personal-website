
const education = [
  {
    name: "City College of San Francisco",
    color: "pink",
    time: "2023 - 2025",
    credentials: [
      { title: "AA in Women's and Gender Studies", year: "2025" },
      { title: "AA in English", year: "2025" },
      { title: "Creative Writing Certificate", year: "2025" },
      { title: "Sexual Health Educator Certificate", year: "2024" },
    ],
  },
  {
    name: "Ohio State University",
    color: "red",
    time: "2011 - 2015",
    credentials: [
      { title: "BS in Computer & Information Science", year: "2015" },
    ],
  },
  {
    name: "Upper Arlington High School",
    color: "yellow",
    time: "2007 - 2011",
    credentials: [
      { title: "AP English Literature & Composition", year: "2011", },
      { title: "AP English Language & Composition", year: "2010", },
      { title: "AP US History/American Studies", year: "2009", },
    ],
  },
];

const workExperience = [
  {
    position: "Library Page",
    color: "turquoise",
    time: "2024 - ",
    employer: "San Francisco Public Library",
    description: "I provide paging services for the Main Branch Youth Centers. These duties include picking up hold items for patrons, sorting and shelving books, tidying and organizing the collection's shelves, and providing occasional customer service for patrons.",
  },
  {
    position: "Freelance Tutor and Career Coach",
    color: "purple",
    time: "2023 - ",
    employer: "Wyzant",
    description: "I provide online tutoring to middle schoolers, high schoolers, college students, and adult learners through the Wyzant tutoring platform with a focus on helping my students achieve their goals and providing a strong foundation of moral support. My teaching subjects are primarily web development and computer programming, but I also offer lessons in other subjects, including math, English, and Japanese.",
  },
  {
    position: "Event Facilitator",
    color: "blue",
    time: "2025 - ",
    employer: "Dogpatch Games",
    description: "I run various gaming-related events for store programs, primarily running Dungeons & Dragons campaigns and one- shot sessions for both children and adults. I also help to support the store’s board game learning events for children, including day camps and the Red Bridge partnership program.",
  },
  {
    position: "Paid Canvasser",
    color: "magenta",
    time: "2024",
    employer: "Jennifer Esteen, RN for Supervisor 2024",
    employer2: "Jackie Fielder for Supervisor 2024",
    description: "I knocked on doors all over Alameda County's District 4 (in support of Jennifer Esteen) and San Francisco’s District 9 (in support of Jackie Fielder), who ran for County/City supervisor in March and November, respectively. By educating voters on political issues while respectfully navigating conflicts, I was able to advocate for progressive politics in both communities. I also mentored less-experienced canvassers and worked together with other members of the team to coordinate our efforts.",
  },
  {
    position: "Paid Peer Educator",
    color: "blue",
    time: "2024",
    employer: "Project SURVIVE, CCSF <i>Women's & Gender Studies Department</i>",
    description: "I delivered in-class presentations and produced educational materials for students about sexual health, issues regarding consent and abusive relationships, and related principles of intersectional feminism. I was also involved in training new peer educators and promoting the program to prevent sexual violence both on campus and throughout society.",
  },
  {
    position: "Information & Referral Specialist",
    color: "pink",
    time: "2023 - 2024",
    employer: "CCSF Women's Resource Center",
    description: "I provided information and resources to students visiting the Center, including helping students navigate other services and advocating for students within campus governance. I also provided event coordination (including planning feminist educational events) and meeting facilitation to help the team meet our goals for the Center.",
  },
  {
    position: "Barista/Team Member",
    color: "teal",
    time: "2023",
    employer: "Asha Tea House, San Francisco Location",
    description: "I prepared drinks, restocked ingredients, and washed dishes in order to keep the work area clean. With my focus on high-quality customer service, relationship management, and in-depth knowledge of the entire tea and drink-making process, I was able to assist the team across multiple roles and responsibilities depending on business needs.",
  },
  {
    position: "Instructional Specialist",
    color: "purple",
    time: "2022 - 2023",
    employer: "edX Coding Bootcamps, <i>University of Washington</i> and <i>UC Berkeley Extension</i>",
    description: "I taught full-stack web development for aspiring junior devs hoping to enter the tech industry. Working together with my Teaching Assistants and Student Success Manager, I prepared lesson plans, delivered course content, and responded to student questions to help them effectively learn the essentials of working as a software engineer and finding their first job.",
  },
  {
    position: "Paid Canvasser",
    color: "magenta",
    time: "2022",
    employer: "Friends of Chesa Boudin Opposing Recall",
    description: "I knocked on doors all over San Francisco to fight back against the recall of progressive district attorney Chesa Boudin. By engaging with, educating, and galvanizing voters on political issues while respectfully navigating conflicts, I was able to facilitate discussions on racial and criminal justice in San Francisco through community outreach.",
  },
  {
    position: "Volunteer Organizer, Community Team Lead",
    color: "blue",
    time: "2021",
    employer: "Democratic Socialists of America, San Francisco Chapter",
    description: "I facilitated effective and democratic meetings, canvassed for progressive electoral issues, prepared queer and socialist feminist educational materials, and planned welcoming and accessible social events. I also helped to resolve fractious conflicts, advocate for policy changes, and build a more inclusive organizational culture, as both a rank-and-file member of the org and, in the latter half of 2021, as a Grievance Officer.",
  },
  {
    position: "Senior Software Engineer",
    color: "turquoise",
    time: "2020 - 2021",
    employer: "Brilliant.org",
    description: "I built and debugged full-stack web applications (primarily working with Vue and Django) while collaborating with designers and product to craft an engaging user experience. I also mentored more junior engineers, documented key information, and advocated for improvements to the engineering team's work culture and hiring process.",
  },
  {
    position: "Software Engineer",
    color: "green",
    time: "2019 - 2020",
    employer: "Academia.edu",
    description: "I developed features for the Academia web application's premium products as part of a small team of engineers, as well as monitoring and analyzing data related to premium funnel performance. This was also a full-stack role, working with Ruby on Rails and React in the AWS environment.",
  },
  {
    position: "Software Engineer",
    color: "blue",
    time: "2015 - 2019",
    employer: "Olive",
    description: "I developed, updated, and maintained both new and existing web applications using Agile methodology in a lean, team-oriented environment. This was another full-stack development position working primarily with ES6 using React and Node in the AWS/Docker environment. I also mentored more junior engineers and worked closely with other teams so we could coordinate effectively.",
  },
  {
    position: "Lead Developer/CTO",
    color: "cyan",
    time: "2013 - 2018",
    employer: "Meet Your Gig",
    description: "I implemented all key features of the company website using the Ruby on Rails framework, both front and back end; tested and maintained the site to ensure its continued operation; administered the company’s technical resources in order to ensure reliable, efficient, and consistent service; and installed/managed all of the software needed to host the site, integrate with third-party services, etc.",
  },
];

export {
  education,
  workExperience,
};

