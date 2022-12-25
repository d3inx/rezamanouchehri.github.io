// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact , SiNextdotjs } from "react-icons/si";

const data = [
  {name : 'HTML', iconName : 'SiHtml5'},
  {name : 'CSS', iconName : 'SiCss3'},
  {name : 'Tailwind css', iconName : 'SiTailwindcss'},
  {name : 'Bootstrap', iconName : 'SiBootstrap'},
  {name : 'JavaScript', iconName : 'SiJavascript'},
  {name : 'React.Js', iconName : 'SiReact'},
  {name : 'Next.Js', iconName : 'SiNextdotjs'},
]

export default function handler(req, res) {
  res.status(200).json(data)
}
