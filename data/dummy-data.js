import Product from '../models/product';

const PRODUCTS = [
  
  new Product(
    'p20',
    'u1',
    'Organic Honey ',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71408567_125704048827387_6492789691580940288_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=gNVM-KmBLDcAX9n3vlx&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=38ac185dcba2ecdd7bd856a5f42456dd&oe=5EDCC552',
    "Natural, raw and unfiltered honey.",
   45000
  ),
  
  new Product(
    'p2',
    'u1',
    'Fig Jam with Walnuts',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71757974_125685248829267_6977884867316940800_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=PGh5-8CvBFIAX9grSMb&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=a11053f0d09e6bd463e6460a385364ff&oe=5EDC69A8',
    'A mouthwatering mix of sun-dried figs with walnuts',
    15000
  ),
  new Product(
    'p3',
    'u2',
    'Fig Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/72097555_125686552162470_2630871638660349952_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=SHshQPyt-_oAX8UbPex&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=f18bc230065945975ab8b5cfc70f7522&oe=5EDB74C9',
    'Perfectly balanced and moderately sweet jam.',
    12000
  ),
  new Product(
    'p7',
    'u1',
    'Whole Fig Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/69245214_125691918828600_5785073677854834688_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=rlXYC4jgbtcAX9F_l5o&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=12bab9d7201e48d516a3de9b802010ce&oe=5EDC50AA',
    "Whole fig jam amd full of flavours!",
   12000
  ),
  new Product(
    'p8',
    'u1',
    'Apricot Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71877286_125692885495170_6709642671960358912_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=b476yjUfwE4AX_pKfb0&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=c2119cdfdd989dc9971dadff988c718e&oe=5EDC1852',
    "One of Lebanon's favorite jam!",
   12000
  ),
  
  new Product(
    'p9',
    'u1',
    'Cherry Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/72052240_125693532161772_2929372260869341184_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=TTDNxJzCF8AAX-GiJnc&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=0cbe42b47fb4f7e782ce6200133e2915&oe=5ED92A1B',
    "Conserving the delicious taste of the Lebanese cherries!",
   12000
  ),
  
  
  new Product(
    'p12',
    'u1',
    'Apple Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71118476_125695788828213_6385282773216657408_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=yB466wkGBa4AX9UdNjI&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=f56a501afa2d254a16c7f1c032e64b51&oe=5ED9D7EB',
    "Tasty fall-flavor jam!",
   10000
  ),
  new Product(
    'p13',
    'u1',
    'Starwberry Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71200315_125696252161500_6423257387989204992_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=yoLhk6Wk-MwAX-lOcN3&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=1e88889715d0f632785f99b80e601ff1&oe=5ED9B2CF',
    "Jar up the freshness of summer with our strawberry jam!",
   10000
  ),
  new Product(
    'p21',
    'u1',
    'Rose Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71373927_125704848827307_3119887093040414720_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=1MvapmQPJcgAX_D73cC&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=88ba66e4ce690965c25a0784b8eb2b9b&oe=5EDCC905',
    "A delightful and savoring rose jam!",
   15000
  ),
  new Product(
    'p22',
    'u1',
    'Bitter Orange Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71110483_125709405493518_2326160583935655936_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=RCVtSTqlTGIAX9dzFbt&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=0944b7e3d1b8b3595c65548f6ac2070e&oe=5EDD041C',
    "Bitter orange jam, a balanced combination of sweetness and bitterness!",
   8000
  ),
  new Product(
    'p24',
    'u1',
    'Pumpkin Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71915689_125709472160178_4240991681781956608_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=gtmc8VUK_ukAX_huG_V&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=baaade521ea8f73ba0a6fa3741b5afb8&oe=5ED9DF96',
    "Enjoy the smooth and savory taste of our Pumpkin jam! ",
   8000
  ),
  new Product(
    'p25',
    'u1',
    'Blackberry Jam',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71333154_125708952160230_6328660467006832640_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=6qOWOoDqFQoAX9EqGpp&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=ec3591e193362fb352dddd15aecc1d5f&oe=5ED9D261',
    "Blackberry jam, the perfect way to preserve the flavor of summer sweetness!",
   12000
  ),
  new Product(
    'p26',
    'u1',
    'Quince Jam ',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71084064_125709078826884_1826904995514023936_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=Nlf_fHt-XYQAX-fDrfd&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=4eb50e72541df2fa838a151210fdde06&oe=5ED9EC8D',
    "A sweet and thick jelly!",
   12000
  ),
  
  new Product(
    'p28',
    'u1',
    'Rose Syrup',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/69716383_125713758826416_3205931750588940288_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=kIuCJC2JSKcAX99iUvd&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=93513392494e336e8fced1dbb61f6223&oe=5EDAE8F9',
    "A natural multi-use essential!",
   10000
  ),
  new Product(
    'p29',
    'u1',
    'Blossom Water',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/70203181_125714228826369_8416055143123910656_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=ncLffj_h5b0AX_i9oI8&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=6a3d91cd596a8074930934d5602d0245&oe=5ED9D84E',
    "Distilled orange blossom water with a subtle fragrance!",
   20000
  ),
  new Product(
    'p30',
    'u1',
    'Mulberry',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71188783_125714238826368_796149639458848768_o.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_ohc=a_monjBguZUAX8HmUPt&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=f9ff2c259812650b4f0fa5f8a2098017&oe=5EDAE30B',
    "A thirst quencher on hot summer afternoons!",
   40000
  ),
  
  new Product(
    'p33',
    'u1',
    'Cherry Syrup',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/72035414_125713805493078_4255939795764641792_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=Uqu479wiqvcAX9uzSwI&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=41ac4b708b4cf959cc99bd44b9a29809&oe=5EDCB124',
    "The most refreshing summer drink!",
   10000
  ),
  new Product(
    'p31',
    'u1',
    'Pomegranate Molasses',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71665349_125714015493057_1947240513040023552_o.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=LidKgLjNOxMAX8rBGl6&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=125365b5e0a981aab82c9bb637f34538&oe=5EDAB5E2',
    "Flavoursome seasoning for your salads and meals!",
   12000
  ),
  new Product(
    'p32',
    'u1',
    'Sage Syrup',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71056247_125713288826463_1616307570576719872_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=nikWNtJRBPoAX_f8k7M&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=76496ab500f5b99c0232fffa2d18a51f&oe=5EDC7AE1',
    "Indulge in the earthy, herbal taste of our Sage drink!",
   9000
  ),
  new Product(
    'p34',
    'u1',
    'Verjuice',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71000760_125714415493017_2440924064294895616_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=JGR1RDnkPTQAX9kE2QR&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=5432dedc7261ae18dd3d7ad4ef220e04&oe=5ED9AF0B',
    "Verjuice, a fantastic alternative to lemon juice!",
   12000
  ),
  new Product(
    'p35',
    'u1',
    'Apple Vinegar',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71147864_125713398826452_7289768302677590016_o.jpg?_nc_cat=101&_nc_sid=e007fa&_nc_ohc=u21HkGrKYhsAX_IXh1a&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=6275081fb8ed72ed6d05ab11db775568&oe=5EDC68C4',
    "Tangy yet smooth apple vinegar!",
   20000
  ),
  new Product(
    'p1',
    'u1',
    'Labneh with Olive Oil',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/72478571_125677705496688_7028914421732737024_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=tHxPinZsL3MAX8FULMY&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=718870988a079d238de0c33a521edc65&oe=5ED90B16',
    'Small labneh balls dipped and preserved in olive oil.',
    15000
  ),
  new Product(
    'p4',
    'u3',
    'Tomato Paste',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71514128_125687828829009_3815247435043700736_o.jpg?_nc_cat=101&_nc_sid=e007fa&_nc_ohc=Aji_w7teF0cAX-T9bse&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=ec3ea3cd69727bccd2950e395905a5c0&oe=5ED993D4',
    "Homemade tomato paste, the perfect addition to your dishes!",
    15000
  ),
  new Product(
    'p5',
    'u3',
    'Pickled Thyme',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71573680_125689042162221_9218596080466264064_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=yJPw9QnWqcgAX8yKfM1&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=a19d7aa3e7bf3a2699c5e439e0a871e2&oe=5EDC3858',
    'Carefully handpicked pickled thyme!',
    10000  
    ),

  new Product(
    'p6',
    'u1',
    'Sun-Dried Tomatoes',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71214673_125691105495348_7820531079692943360_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=CA7tiM5AQFoAX8ZXQT3&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=0a640206dc1b11e6eb392a74cd138df1&oe=5EDC8BBB',
    "Organic, healthy and full of taste!",
   12000
  ),
  
  
  
  new Product(
    'p10',
    'u1',
    'Pickled Beans',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71500553_125694348828357_1643276451912351744_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=bCnHiHJ7jGkAX9HiUkz&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=7f096f5cef24562d3b6589bc9612a998&oe=5EDB95A5',
    "Crisp pickled beans with a wonderful flavor!",
   12000
  ),

  new Product(
    'p11',
    'u1',
    'Garlic Pickled Beans',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71143500_125695148828277_5690093817588350976_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=APGGS4A0m6EAX-W4NGc&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=1e94d18225421c0ba7be38226365e862&oe=5EDAD237',
    "Garlic pickled beans burst with flavors!",
   12000
  ),
  
 
  new Product(
    'p14',
    'u1',
    'Grape Leaves',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71063300_125697752161350_565186965662597120_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=epNxXFrzaokAX8wNma0&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=36df88096b1310994672171e44de98ce&oe=5EDB8F4C',
    "A delicious mediterranean dish!",
   8000
  ),

  new Product(
    'p15',
    'u1',
    'Pickled Cucumbers',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71379004_125700398827752_887492336735485952_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=8OcOs9HODoAAX9w0O_M&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=892e6fb634f35bba5d2d28017d725091&oe=5EDC31B2',
    "Add a crunchy, tangy bite to your favorite sandwich or burger!",
   9000
  ),
  new Product(
    'p16',
    'u1',
    'Olives',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71491948_125701462160979_4315241792199983104_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=tV2cpw4S6LgAX8pab49&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=bc92fec427c9370688f6f57f11182dd4&oe=5ED98079',
    "An exquisite ingredient to accompany your sandwiches!",
   9000
  ),
  new Product(
    'p17',
    'u1',
    'Shanklish in Olive Oil',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71563893_125702782160847_7925888925271326720_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=gTSne-Gmpv4AX9Yocxn&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=bc850c7895113495fc170720b9e4fc48&oe=5ED9370B',
    "Small shanklish balls dipped in fresh thyme and preserved in olive oil.",
   15000
  ),
  new Product(
    'p18',
    'u1',
    'Cornichon',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71967827_125703428827449_3927869547788369920_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=2cq0WCfPR6kAX8wd4dh&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=ecc0007c6745aeacfeb67941e62f42aa&oe=5EDB2434',
    "Delicious cornichon pickles all year long!",
   10000
  ),
  new Product(
    'p19',
    'u1',
    'Makdous',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/70242089_125704082160717_1483674556659924992_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=cXrl-y_2e6kAX-w8Rzh&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=db876649deaea56b297d64798fcb6e2b&oe=5EDA82B6',
    "Baby eggplants filled with mouth-watering ingredients",
   15000
  ),
  
  
  new Product(
    'p23',
    'u1',
    'Pickled Garlic',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71264033_125709082160217_6932250921401319424_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=138JO93XIIsAX8-XEAI&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=fcbe83fdb798ef2c9f85f953b2e07124&oe=5EDBF32B',
    "The garlic's lover choice!",
   12000
  ),
  
  
  
  new Product(
    'p27',
    'u1',
    'Pickled Thyme with Garlic',
    'https://scontent.fbey8-1.fna.fbcdn.net/v/t1.0-9/p720x720/71521914_125709428826849_7824194029666435072_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=QLsObJT-548AX--jfFf&_nc_ht=scontent.fbey8-1.fna&_nc_tp=6&oh=225b4e2d707eb293e0a62a7c2d361d6c&oe=5EDD0567',
    "Enjoy the aromatic flavour of our pickled thyme with garlic!",
   10000
  ),

];

export default PRODUCTS;
