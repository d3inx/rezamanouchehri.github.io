// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
  {name : 'دیجی کالا', description : 'شبیه ساز سایت دیجیکالا با استفاده از api اصلی  آن' , link : 'https://d3inx-digikala.netlify.app'},
  {name : 'اینستاگرام', description : 'سایتی شبیه اینستاگرام با قابلیت آپلود پست , کامنت و لایک کردن' , link : 'https://d3inx-instagram.netlify.app'},
  {name : 'فورتنایت اپ', description : 'سایت بازی اطلاعات بازی آنلاین(فورتنایت) با قابلیت مشهاده اطلاعات کاربری خود , اطلاعات آیتم های کل بازی و فروشگاه بازی' , link : 'https://d3inx-fortnitestats.netlify.app'},
  {name : 'ارز دیجیتال', description : 'سایت مشاهده ارز دیجیتال و تبدیل کردن آن ها' , link : 'https://ephemeral-zuccutto-5649c9.netlify.app'},
  {name : 'سبد خرید', description : 'سبد خرید فروشگاه' , link : 'https://incomparable-fudge-b10e24.netlify.app'},
]

export default function handler(req, res) {
  res.status(200).json(data)
}
