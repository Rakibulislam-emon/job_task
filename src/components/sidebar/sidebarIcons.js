import { GoHome } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoBookOutline } from 'react-icons/io5';
import { PiBatteryPlusVerticalLight, PiChatsCircleDuotone } from 'react-icons/pi';
import { TbCategory2 } from 'react-icons/tb';
import { CiBookmark } from 'react-icons/ci';


// // sidebarIcons.js
// export const icons = [
//     { name: 'home', src: '/icons/home.svg' },
//     { name: 'alldua', src: '/icons/alldua.svg' },
//     { name: 'bookmark', src: '/icons/bookmark.svg' },
//     { name: 'books', src: '/icons/books.svg' },
//     { name: 'duaInfo', src: '/icons/dua-info.svg' },
//     { name: 'memorize', src: '/icons/memorize.svg' },
//     { name: 'ruqyah', src: '/icons/ruqyah.svg' },
//   ];

  export const middleIcons = [
    { component: GoHome, key: 'home' },
    { component: TbCategory2, key: 'category' },
    { component: HiOutlineLightBulb, key: 'lightbulb' },
    { component: CiBookmark, key: 'bookmark' },
    { component: PiBatteryPlusVerticalLight, key: 'battery' },
    { component: PiChatsCircleDuotone, key: 'chats' },
    { component: IoBookOutline, key: 'book' },
  ];