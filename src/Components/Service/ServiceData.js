import { BiPencil,  BiDesktop, BiServer } from 'react-icons/bi';

const ServiceData = [
    {
        title : 'Ui/Ux Designer',
        icon : <BiPencil/>,
        description : [
            "Conducting research to understand user needs and behaviours",
            "Creating visually appealing and user-centered design solutions",
            "Designing intuitive and engaging interactions and experiences",
            "Developing and testing prototypes to validate design decisions"
        ],
    },
    {
        title : 'Frontend Developer',
        icon : <BiDesktop/>,
        description : [
            "Buiding fast, responsive and mobile-friendly websites",
            "Creating reusable and customizable UI components",
            "Developing interactive and dynamic applications",
            "Ensuring seamless user experiences across multiple browsers and devices"
        ],
    },
    {
        title : 'Backend Developer',
        icon : <BiServer/>,
        description : [
            "Building scalable and secure APIs for data integration and management",
            "Creating server-side logic, algorithms, and database integrations",
            "Designing implementing and optimizing database for storage and retrieval",
            "Integrating third-party services, libraries, and frameworks for enhanced functionality"
        ],
    },
]

export default ServiceData;