// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  {name : 'ایکاد فناوری آرکان', startDate : 'شهریور ۱۴۰۰' , endDate : 'اسفند ۱۴۰۰' , link : 'https://arkantechnology.co/'},
  {name : 'توسعه و مدیریت پارسیان زرین', startDate : 'آبان ۱۴۰۱' , endDate : 'اکنون' , link : 'https://ably.ir/'},
]

export default function handler(req, res) {
  res.status(200).json(data)
}
