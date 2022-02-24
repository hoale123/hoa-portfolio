const displayName = 'Hoa Le'
const bannerDescription = 'Developer from Georiga'
const mediumUrl = 'https://medium.com/@hoale8594'
const mediumFilterKeyword = 'technology'
const email = 'hoa_le9485@yahoo.com'
const githubUrl = "https://github.com/hoale123"
const linkedInUrl = "https://www.linkedin.com/in/hoa-le/"
const resumePdfTitle = 'Hoa-Resume.pdf'

const projects = [
    {
        title: 'CatTap',
        description: 'An interactive visualisation of the spread of COVID-19 in Singapore across time.',
        stack: ['Python', 'Google Sheets API', 'Tableau'],
        imgName: 'singapore_covid_spread.gif',
        siteUrl: 'https://public.tableau.com/shared/379FDD4MD?:display_count=n&:origin=viz_share_link',
        codeUrl: 'https://github.com/huishun98/SG-COVID-data-automated',
    },
    {
        title: 'SongDedi',
        description: 'A free song dedication service suitable for weddings, parties or any event.',
        stack: ['Vue.js', 'Python Flask', 'Firebase', 'Google Analytics'],
        imgName: 'songdedi.png',
        siteUrl: 'https://songdedi-admin.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/songdedi-admin',
        altCodeUrl: 'https://github.com/huishun98/songdedi-requests'
    },
    {
        title: 'Narie',
        description: 'A beginner-friendly itinerary planner, perfectly customisable to suit your needs.',
        stack: ['Figma', 'Vue.js', 'Python Flask', 'Firebase', 'Google Analytics'],
        imgName: 'narie.png',
        siteUrl: 'https://narie.herokuapp.com/',
        codeUrl: '',
    },
]

export { projects, mediumUrl, mediumFilterKeyword, email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle }