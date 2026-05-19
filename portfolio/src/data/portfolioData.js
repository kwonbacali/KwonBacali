export const portfolioData = {
  introduction: {
    name: "Kwon Jin S. Bacali",
    role: "Full-Stack Developer",
    summary: "",
  },
  about: {
    name: "Kwon Jin",
    role: "Full-Stack Developer",
    summary: "I’ve spent the last 6+ years figuring out exactly how to make web applications run efficiently, securely, and reliably. My developer philosophy is simple: write clean code, model databases intelligently, and always ensure there’s thorough tracking and logging to keep production systems stable. My primary toolkit includes PHP, Laravel, CodeIgniter 4, and React.js. Whether I’m designing a complex management system from scratch, tailoring custom web solutions, or setting up hosting environments, I focus on building software that delivers long-term value and an effortless user experience.",
  },
  skills: {
    languages: [
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "JSON", icon: "fa-solid fa-code" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" }
    ],
    frameworks: [
      { name: "Codeigniter 4", icon: "fa-solid fa-fire" }, // CodeIgniter brand icon isn't in FA Free, using flame/fire representation
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "Tailwind CSS", icon: "fa-brands fa-tailwind-css" },
      { name: "Chart.js", icon: "fa-solid fa-chart-line" },
      { name: "Echarts", icon: "fa-solid fa-chart-pie" },
      { name: "Ajax", icon: "fa-solid fa-rotate" },
      { name: "React.js", icon: "fa-brands fa-react" },
      { name: "Shopify Liquid", icon: "fa-solid fa-shop" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" }
    ],
    tools: [
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "JIRA", icon: "fa-brands fa-jira" },
      { name: "VS Code", icon: "fa-solid fa-laptop-code" },
      { name: "GoDaddy", icon: "fa-solid fa-server" }
    ]
  },
  experience: [
    {
      company: "Callmax Solutions",
      role: "MIS - Lead Programmer",
      period: "Jan 2020 - Feb 2022",
      highlights: [
        {
          title:"Team Leadership",
          description: "Served as the Programming Lead, overseeing the development of centralized enterprise software."
        },
        {
          title:"Enterprise Solutions",
          description: "Developed a comprehensive monitoring suite used by Agents, QAs, and Executive leadership to track attendance, billable hours, and performance markdowns."
        },
        {
          title:"Full-Stack Stack",
          description: "Leveraged PHP, JavaScript, and Ajax to create a high-concurrency database environment."
        }
      ]
    },
    {
      company: "uBind",
      role: "Product Developer",
      period: "Feb 2022 - Nov 2024",
      highlights: [
        {
          title:"FinTech Integration",
          description: "Configured complex payment processing integrations with credit card and premium funding providers."
        },
        {
          title:"Data Architecture",
          description: "Developed integration endpoints to facilitate seamless data transfer between disparate systems."
        },
        {
          title:"System Logic",
          description: "Built specialized insurance rating calculations and automated the generation of legal documents (Policy Schedules, Certificates of Currency)."
        },
        {
          title:"Template Engineering",
          description: "Utilized Shopify Liquid to create and design complex insurance documents, including Quote Schedules, Policy Schedules, and Certificates of Currency."
        },
        {
          title:"UX Excellence",
          description: "Implemented best-practice UX principles for form design to optimize user conversion and data accuracy."
        }
      ]
    },
    {
      company: "Freelancing",
      role: "Web Developer",
      period: "2024 - 2026 (Project-based)",
      highlights: [
        {
          title:"Custom Integration",
          description: "Implemented custom plugins and themes to extend core WordPress functionality based on specific client business requirements"
        },
        {
          title:"Performance Optimization",
          description: "Improved site loading speeds and SEO rankings for client sites by optimizing CSS, images, and database queries."
        }
      ]
    },
    {
      company: "BLACKTWENTY Sports Apparel",
      role: "Fullstack Developer",
      period: "2024 - Present (Family Business)",
      highlights: [
        {
          title:"End-to-End Development",
          description: "Architected and deployed a custom internal workflow management system from scratch using PHP (Codeigniter 4) and MySQL."
        },
        {
          title:"Data Visualization",
          description: "Integrated Chart.js and ECharts to provide real-time visual analytics for project tracking and employee productivity. "
        },
        {
          title:"DevOps",
          description: "Managed full server lifecycle on GoDaddy, ensuring 99.9% uptime and performing regular database optimizations."
        },
        {
          title:"Leadership",
          description: "Acted as Lead Developer and Project Manager, translating business requirements into technical specifications."
        }
      ]
    },
  ]
};