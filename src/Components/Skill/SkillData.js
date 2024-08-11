import { PiBracketsCurlyBold } from 'react-icons/pi';
import { BiServer } from 'react-icons/bi';
import { FaSwatchbook } from 'react-icons/fa';

export const skillsData = [
    {
        title:'Frontend Developer',
        subtitle: 'Fresher',
        icon: <PiBracketsCurlyBold/>,
        skills:[
            {name:'HTML', level: '90%'},
            {name:'CSS', level: '80%'},
            {name: 'JavaScript', level: '60%'},
            {name:'React', level: '85%'}
        ],
    },
    {
        title:'Backend Developer',
        subtitle: 'Fresher',
        icon: <BiServer/>,
        skills:[
            {name:'Node JS', level: '70%'},
            {name:'Firebase ', level: '90%'},
        ],
    },
    {
        title:'Designer',
        subtitle: 'Fresher',
        icon: <FaSwatchbook/>,
        skills:[
            {name:'Figma', level: '50%'},
        ],
    },
]