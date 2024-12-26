import reacticon from '../../assets/react_icon.svg'
import htmlicon from '../../assets/html_icon.svg'
import sassicon from '../../assets/Sass_Logo.svg'
import jsicon from '../../assets/js_icon.svg'
import jsonicon from '../../assets/json_icon.svg'
import nodeicon from '../../assets/node-icon.svg'


import markdown from '../../assets/markdown_icon.svg'

const explorerItems = [
    {
      name: 'home.jsx',
      path: '/',
      icon: reacticon,
    },
    {
      name: 'about.html',
      path: '/about',
      icon: htmlicon,
    },
    
    {
      name: 'contact.scss',
      path: '/contact',
      icon: sassicon,
    },
    {
      name: 'projects.js',
      path: '/projects',
      icon: jsicon,
    },
    {
      name: 'articles.json',
      path: '/articles',
      icon: jsonicon,
    },
    {
      name: 'github.md',
      path: '/github',
      icon: markdown,
    },
    {
      name: 'package.json',
      path: '/package',
      icon: nodeicon,
    }
  ];

  export default explorerItems;