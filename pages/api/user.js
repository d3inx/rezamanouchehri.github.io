// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const data = {
  user: {
    name: 'رضا منوچهری',
    job: 'فرانت اند دولوپر',
    github: 'https://github.com/d3inx',
    list: [
      {id: 1, span : '۱۹ ساله', icon : 'IdentificationIcon'},
      {id: 2,span : '۰۹۰۳۲۳۲۶۶۱۹', icon : 'PhoneIcon' , link : 'tel:+989032326619'},
      {id: 3,span : 'mr.reza.rm8224@gmail.com', icon : 'EnvelopeIcon' , link : 'mailto:mr.reza.rm8224@gmail.com'},
    ],
  },

}

export default function handler(req, res) {
  res.status(200).json(data)
}
