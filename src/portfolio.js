/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nguyễn Tuấn Thành",
  description: "Một cá nhân chưa bao giờ muốn nghỉ ngơi hehe.",
  og: {
    title: "Nguyễn Tuấn Thành Portfolio",
    type: "website",
    url: "https://github.com/ntthanh2603/",
  },
};

//Home Page
const greeting = {
  title: "Nguyễn Tuấn Thành",
  logo_name: "Tuấn Thành",
  nickname: "Software engineer",
  subTitle: `Chào bạn! Mình là Tuấn Thành, một người đam mê công nghệ, đặc biệt là 
  Backend. Mình luôn thích khám phá những công nghệ mới và tìm cách ứng dụng chúng vào thực tế. 
  Rất vui được kết nối và học hỏi cùng bạn!`,
  resumeLink:
    // Có thể thêm 1 link CV vào hoặc để /education hoặc /experience
    "https://www.canva.com/design/DAGe7H4Nr4E/cynll079ufT_Z5eLjOq-mw/edit?ui=eyJEIjp7IlAiOnsiQiI6ZmFsc2V9fX0",
  portfolio_repository: "https://github.com/ntthanh2603/",
  githubProfile: "https://github.com/ntthanh2603/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ntthanh2603/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/striver263/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:tuanthanh2kk4@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ntthanh2603",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Các ngôn ngữ dùng: JavaScript, TypeScript, HTML, CSS",
        `⚡ Framework và library: NestJS, NextJS, React, Tailwind, TypeORM, Mongose, 
        JWT, Ioredis, BullMQ, Websocket, Socket.io, Schedule,
        Swagger, Ant design, Shadcn`,
        "⚡ Khả năng thiết kế và tích hợp API RESTful",
        "⚡ Quản lý cơ sở dữ liệu quan hệ (MySQL, PostgreSQL) và phi quan hệ (Redis, MongoDB)",
        `⚡ Xây dựng hệ thống Backend đảm bảo an toàn thông tin với: CORS, Xác thực người dùng, 
        Phân quyền người dùng, Kiểm tra dữ liệu đầu vào, Helmet, CSRF, Rate limit`,
        "⚡ Chiến thuật tối ưu hóa hiệu suất ứng dụng với Cache, Index, Partition, Sharding",
        "⚡ Quản lý và triển khai các container với Docker, Docker compose",
        `⚡ Hiểu và phòng chống các cuộc tấn công: SQL injection, Cross-Site Scripting(XSS),
        Cross-Site Request Forgery (CSRF),  Denial of Service (DoS)/Distributed Denial of Service (DDoS)`,
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
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
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Ngôn ngữ lập trình: Python, Selenium, Pyautogui, Pandas, Numpy",
        `⚡ Framework và library: Pytorch`,
        "⚡ Thu thập và xử lý dữ liệu",
        `⚡ Kĩ năng về Machine learning, Deep learning:
        Hiểu cách xây dựng các mô hình học từ dữ liệu có gán nhãn, 
        ví dụ như Regressions, Classification. Các thuật toán học máy không giám sát, 
        ví dụ như Clustering, Dimensionality Reduction. Kiến thức vững về mạng nơ-ron 
        nhân tạo (ANN), CNN (Convolutional Neural Networks), RNN (Recurrent Neural Networks)`,
        "⚡ Kĩ năng về NLP: Transformers (BERT, GPT)",
        "⚡ Kĩ năng về Computer version: Yolo, CNN",
        `⚡ Hiểu các chỉ số như accuracy, precision, recall, 
        F1 score để đánh giá hiệu suất mô hình.`,
        "⚡ Kinh nghiệm phát triển và triển khai các mô hình: Hệ thống gợi ý, Phân loại đoạn văn, Phân loại hình ảnh",
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
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/u/ntthanh2603/",
    // },
    // {
    //   siteName: "Github",
    //   iconifyClassname: "simple-icons:github",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://github.com/ntthanh2603",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/liam26032004",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Học Trí tuệ nhân tạo tại Đại học Công nghệ - Đại học Quốc gia Hà Nội",
      subtitle: "",
      logo_path: "Logo_HUET.svg.png",
      alt_name: "Logo UETốt",
      duration: "Tháng 10/2022 - Tháng 6/2026",
      descriptions: [
        "⚡ Mình đang là sinh viên năm 3 và đã hoàn thành gần xong chương trình học",
        "⚡ GPA: 7.0/10",
        `⚡ Mình đã tích lũy được vốn kiến thức trên trường của các môn như: Lập trình hướng đối tượng, Cấu trúc dữ liệu 
        và giải thuật, Cơ sở dữ liệu, Công nghệ phần mềm, Học máy, Học sâu, Kỹ thuật và công nghệ dữ liệu lớn, 
        Xử lý ngôn ngữ tự nhiên...vv`,
        `⚡ Trong quá trình học tập thì mình luôn trau dồi không chỉ riêng kiến thức về AI mà
        mình còn học thêm về Frontend, Backend và các kĩ năng mềm như: Tin học văn phòng(Word, Excel, Canva), 
        giao tiếp, thuyết trình, làm việc nhóm, quản lý thời gian, tư duy phản biện... và đặc biệt là 
        kĩ năng giải quyết vấn đề, à còn kĩ năng tự học hỏi công nghệ mới nữa😇`,
        "⚡ Mình cũng xây dựng được mấy dự án, bạn hãy vào phần Project để tham khảo nhé(Ước gì có người cho star🤔)",
      ],
      website_link: "https://uet.vnu.edu.vn/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
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
  title: "Kinh nghiệm",
  subtitle: "",
  description: `Trong quá trình thực tập Backend Developer, mình đã có cơ hội làm việc với các công 
  nghệ như NestJS, Postgres, Redis, BullMQ, Websocket, SSE, Docker. Tham gia phát triển và tối ưu hệ thống. Mình đã học được cách làm việc nhóm, giải quyết vấn đề thực tế và nâng cao kỹ năng lập trình. Ngoài ra, mình cũng hiểu hơn về quy trình phát triển phần mềm, quản lý cơ sở dữ liệu và triển khai ứng dụng. Đây là trải nghiệm quý giá giúp mình sẵn sàng cho những thử thách mới trong lĩnh vực công nghệ!`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Backend Developer Intern",
          company:
            "Trung tâm Giám sát an toàn không gian mạng quốc gia(NCSC) - Cục an toàn thông tin - Bộ Thông tin và Truyền thông",
          company_url: "https://khonggianmang.vn/",
          logo_path: "images.png",
          duration: "Tháng 9/2024 - Tháng 1/2025",
          location:
            "Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam",
          description: `️🎯 Quy trình triển khai và phát triển sự án
️🎯 Các ngôn ngữ dùng: JavaScript, TypeScript
️🎯 Framework và library: NestJS, TypeORM, Mongose, JWT, Ioredis, BullMQ, Websocket, Socket.io, Schedule, Swagger
️🎯 Khả năng thiết kế và tích hợp API RESTful
️🎯 Quản lý cơ sở dữ liệu quan hệ (MySQL, PostgreSQL) và phi quan hệ (Redis, MongoDB)
️🎯 Xây dựng hệ thống Backend đảm bảo an toàn thông tin với: CORS, Xác thực người dùng, Phân quyền người dùng, Kiểm tra dữ liệu đầu vào, Helmet, CSRF, Rate limit
️🎯 Chiến thuật tối ưu hóa hiệu suất ứng dụng với Cache, Index, Partition, Sharding
️🎯 Quản lý và triển khai các container với Docker, Docker compose
️🎯 Hiểu và phòng chống các cuộc tấn công: SQL injection, Cross-Site Scripting(XSS), Cross-Site Request Forgery (CSRF), Denial of Service (DoS)/Distributed Denial of Service (DDoS)`,
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Developer Intern",
          company:
            "Trung tâm Giám sát an toàn không gian mạng quốc gia(NCSC) - Cục an toàn thông tin - Bộ Thông tin và Truyền thông",
          company_url: "https://khonggianmang.vn/",
          logo_path: "images.png",
          duration: "Tháng 9/2024 - Tháng 1/2025",
          location:
            "Tầng 16 Tòa nhà Cục tần số, 115 Trần Duy Hưng, Hà Nội, Việt Nam",
          description: `️🎯 Quy trình triển khai và phát triển sự án
️🎯 Các ngôn ngữ dùng: JavaScript, TypeScript
️🎯 Framework và library: NestJS, TypeORM, Mongose, JWT, Ioredis, BullMQ, Websocket, Socket.io, Schedule, Swagger
️🎯 Khả năng thiết kế và tích hợp API RESTful
️🎯 Quản lý cơ sở dữ liệu quan hệ (MySQL, PostgreSQL) và phi quan hệ (Redis, MongoDB)
️🎯 Xây dựng hệ thống Backend đảm bảo an toàn thông tin với: CORS, Xác thực người dùng, Phân quyền người dùng, Kiểm tra dữ liệu đầu vào, Helmet, CSRF, Rate limit
️🎯 Chiến thuật tối ưu hóa hiệu suất ứng dụng với Cache, Index, Partition, Sharding
️🎯 Quản lý và triển khai các container với Docker, Docker compose
️🎯 Hiểu và phòng chống các cuộc tấn công: SQL injection, Cross-Site Scripting(XSS), Cross-Site Request Forgery (CSRF), Denial of Service (DoS)/Distributed Denial of Service (DDoS)`,
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Dự án",
  description: `Dưới đây là các dự án mà mình đã thực hiện. Mỗi dự án là một cơ hội để mình áp dụng kiến thức 
  về lập trình, phát triển phần mềm và tối ưu hệ thống. Từ việc xây dựng ứng dụng web, app, thiết kế API RESTful, 
  xây dựng model AI, đến triển khai hệ thống với Docker. Các dự án này không chỉ giúp mình hiểu sâu hơn về công 
  nghệ mà còn rèn luyện khả năng giải quyết vấn đề thực tế. Hãy khám phá chi tiết từng dự án nhé!`,
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Công khai",
  description: "Dưới đây là một số dự án, bài viết của tôi đã public",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Social Network SNet",
      createdAt: "2025-01-25",
      description:
        "Ứng dụng mạng xã hội SNet dùng NestJS, NextJS, Tailwind, Shadcn, Postgres, Redis, BullMQ, Websocket, SSE, Docker",
      url: "https://github.com/ntthanh2603/social-network-SNet-backend.git",
    },
    {
      id: "mdp-diffusion",
      name: "Segmentation Analysis",
      createdAt: "2024-12-10",
      description:
        "Phân loại cảm xúc trong đoạn văn dùng các model Bi-RNN(LSTM), Tranformer(DistilBERT, PhoBERT)",
      url: "https://github.com/ntthanh2603/segmentation-analysis.git",
    },
    {
      id: "consistency-models",
      name: "Game Bomberman",
      createdAt: "2023-06-10",
      description: "Trò chơi tuổi thơ game bomberman dùng Java, Javafx",
      url: "https://github.com/ntthanh2603/game-bomberman.git",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Liên hệ với mình nhé",
    profile_image_path: "IMG_20240921_153510-fotor-2025022141852.png",
    description: `Mình có thường xuyên hoạt động trên mạng xã hội. Bạn có thể nhắn tin cho mình, mình sẽ trả lời trong
       vòng 24 giờ. Chúng ta có thể hợp tác phát triển các dự án về Backend, Frontend, AI`,
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Mình muốn ghi lại một số kinh nghiệm của mình trong hành trình sự nghiệp cũng như chia sẻ một số kiến ​​thức chuyên môn",
    link: "https://viblo.asia/u/tuanthanh2kk4",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Địa chỉ",
    subtitle: "Bắc Từ Liêm, Hà Nội, Việt Nam",
    locality: "",
    country: "Việt Nam",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/C%E1%BB%95+Nhu%E1%BA%BF+1,+C%E1%BB%95+Nhu%E1%BA%BF,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i/data=!4m6!3m5!1s0x3135ab2a5a755a9d:0xd2aaa6f417e3958c!7e2!8m2!3d21.0578889!4d105.7854933?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI1LjcuMhgAINeCAyp1LDk0MjU1NDQ3LDk0MjQyNTQ3LDk0MjIzMjk5LDk0MjE2NDEzLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg0MzkzLDk0MjEzMjAwQgJWTg%3D%3D&skid=59e613e1-e15f-4efa-bd92-866a991e4fa2",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
