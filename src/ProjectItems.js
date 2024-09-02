import windowlineImg from '@/assets/images/Projects/Windowline.jpg';
import reehynImg from '@/assets/images/Projects/reehyn.jpg';
import ayursainImg from '@/assets/images/Projects/b61e53161231677.63c182bf577a9.jpg';
import s3lightingImg from '@/assets/images/Projects/451572687_987102726543156_9122364744555825506_n.jpg';
import { v4 as itemId } from 'uuid';

export const projectsItems = [
    {
        name: "Window Line UAE",
        type: "web",
        work: "Web Site",
        photoUrl: windowlineImg,
        projectDetails: 'https://www.windowlineuae.com/',
        id : itemId()
        
        
    },
    {
        name: "Reehyn Perfumes",
        type: "web",
        work: "Web Site",
        photoUrl: reehynImg,
        projectDetails: 'https://www.reehynperfumes.com/',
        id : itemId()
    },
    {
        name: "Ayursain",
        type: "designing",
        work: "Branding",
        photoUrl: ayursainImg,
        projectDetails: 'https://www.behance.net/gallery/161231677/Ayursain-Logo-Creation-Branding',
        id : itemId()
    },
    {
        name: "3S Lighting & Solutions",
        work: "Social Media Poster",
        type: "designing",
        photoUrl: s3lightingImg,
        projectDetails: 'https://www.instagram.com/p/C9euTS3TK2n/?hl=en',
        id : itemId()
    },
    {
        name: "Miamish Karak Tea Powder",
        work: "Package Design",
        type: "designing",
        photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/99636f173416633.64903de9dd47d.jpg",
        projectDetails: 'https://www.behance.net/gallery/173416633/Miamish-Karak-Tea-Powder-Design',
        id : itemId()
    },
    {
        name: "Taj Muwaileh",
        work: "Brochure Design",
        type: "designing",
        photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ff222f160112463.63ad3882efb7d.jpg",
        projectDetails: 'https://www.behance.net/gallery/160112463/Brochure',
        id : itemId()
    },
    {
        name: "Telal",
        work: "Wall Poster Design",
        type: "designing",
        photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/e82a20156114505.6361569942bc8.jpg",
        projectDetails: 'https://www.behance.net/gallery/156114505/Wallpost-Design',
        id : itemId()
    },
    {
        name: "Al Madina Beauty Fair Booklet Design",
        work: "Booklet Design",
        type: "designing",
        photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7c6299171489595.646f62b0124df.jpg",
        projectDetails: 'https://www.behance.net/gallery/171489595/Booklet-Design',
        id : itemId()
    },
    {
        name: "Al Madina Offer Booklet Design",
        work: "Offer Booklet Design",
        type: "designing",
        photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/22ced6171489285.646f61d392b48.jpg",
        projectDetails: 'https://www.behance.net/gallery/171489285/Supermarket-Offer-Booklet-Design',
        id : itemId()
    },
];
