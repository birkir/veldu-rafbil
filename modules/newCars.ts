import { NewCar, ExpectedCar } from '../types'

const newCars: Array<NewCar> = [
  {
    make: 'Audi',
    model: 'e-tron 50',
    heroImageName: 'e-tron-50',
    price: 8890000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-etron-50.html',
    acceleration: 6.8,
    capacity: 71,
    range: 339,
    evDatabaseURL: 'https://ev-database.org/car/1209/Audi-e-tron-50-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron 55',
    heroImageName: 'e-tron',
    price: 11990000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron.html',
    acceleration: 5.7,
    capacity: 95,
    range: 436,
    evDatabaseURL: 'https://ev-database.org/car/1253/Audi-e-tron-55-quattro',
  },
  {
    make: 'Audi',
    model: 'e-tron S',
    heroImageName: 'e-tron',
    price: 15990000,
    sellerURL: 'https://www.hekla.is/static/files/efni/verdlistar/audi/etron-s.pdf',
    acceleration: 4.5,
    capacity: 95,
    range: 364,
    evDatabaseURL: 'https://ev-database.org/car/1271/Audi-e-tron-S-55-quattro',
  },
  {
    make: 'BMW',
    model: 'i3',
    heroImageName: 'i3',
    price: 5940000,
    sellerURL: 'https://www.bl.is/nyir/bmw/i3/',
    acceleration: 7.3,
    capacity: 42.2,
    range: 310,
    evDatabaseURL: 'https://ev-database.org/car/1145/BMW-i3-120-Ah',
  },
  {
    make: 'Honda',
    model: 'e',
    heroImageName: 'honda-e',
    price: 4390000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 9.5,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1171/Honda-e',
  },
  {
    make: 'Hyundai',
    model: 'IONIQ Electric',
    heroImageName: 'ioniq',
    price: 4890000,
    sellerURL: 'https://www.hyundai.is/nyir/ioniq/yfirlit',
    acceleration: 9.7,
    capacity: 38.3,
    range: 311,
    evDatabaseURL: 'https://ev-database.org/car/1165/Hyundai-IONIQ-Electric',
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    heroImageName: 'kona-39',
    price: 5290000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 9.9,
    capacity: 39,
    range: 289,
    evDatabaseURL:
      'https://ev-database.org/car/1239/Hyundai-Kona-Electric-39-kWh',
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    heroImageName: 'kona',
    price: 5990000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 7.6,
    capacity: 64,
    range: 450,
    evDatabaseURL:
      'https://ev-database.org/car/1126/Hyundai-Kona-Electric-64-kWh',
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    heroImageName: 'i-pace',
    price: 10590000,
    sellerURL: 'https://www.jaguarisland.is/jaguar-range-i-pace',
    acceleration: 4.8,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1097/Jaguar-I-Pace',
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    heroImageName: 'e-niro-alt',
    price: 5690777,
    sellerURL:
      'https://issuu.com/askja/docs/kia_verdlisti_19012018/26?e=6076164/57534189',
    acceleration: 9.8,
    capacity: 39,
    range: 289,
    evDatabaseURL: 'https://ev-database.org/car/1137/Kia-e-Niro-39-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    heroImageName: 'e-niro',
    price: 6190777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-niro/upplifdu/',
    acceleration: 7.8,
    capacity: 64,
    range: 455,
    evDatabaseURL: 'https://ev-database.org/car/1125/Kia-e-Niro-64-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    heroImageName: 'e-soul-alt',
    price: 5490777,
    sellerURL:
      'https://issuu.com/askja/docs/kia_verdlisti_19012018/20?e=6076164/57534189',
    acceleration: 9.6,
    capacity: 39,
    range: 277,
    evDatabaseURL: 'https://ev-database.org/car/1169/Kia-e-Soul-39-kWh',
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    heroImageName: 'e-soul',
    price: 6450777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 7.9,
    capacity: 64,
    range: 452,
    evDatabaseURL: 'https://ev-database.org/car/1154/Kia-e-Soul-64-kWh',
  },
  {
    make: 'Mazda',
    model: 'MX-30',
    heroImageName: 'mazda-mx-30',
    price: 3980000,
    sellerURL: 'https://www.mazda.is/is/nyir-bilar/mazda-mx-30',
    acceleration: 9.0,
    capacity: 35.5,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1241/Mazda-MX-30',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQC',
    heroImageName: 'eqc',
    price: 9590000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/eqc/',
    acceleration: 5.1,
    capacity: 80,
    range: 417,
    evDatabaseURL: 'https://ev-database.org/car/1135/Mercedes-EQC-400-4MATIC',
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQV',
    heroImageName: 'eqv',
    price: 11950000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/v-class/v-class-447/eqv/labeling.module.html',
    acceleration: 10.0,
    capacity: 90,
    range: 363,
    evDatabaseURL: 'https://ev-database.org/car/1240/Mercedes-EQV-300-Long',
  },
  {
    make: 'MG',
    model: 'ZS EV',
    heroImageName: 'mg-zs-ev',
    price: 4190000,
    sellerURL: 'https://www.bl.is/nyir/mg/zsev/',
    acceleration: 8.2,
    capacity: 44.5,
    range: 263,
    evDatabaseURL: 'https://ev-database.org/car/1201/MG-ZS-EV',
  },
  {
    make: 'Mini Cooper',
    model: 'SE',
    heroImageName: 'mini',
    price: 4950000,
    sellerURL: 'https://www.mini.is/is_IS/home/range/electric.html',
    acceleration: 7.3,
    capacity: 28.9,
    range: 232,
    evDatabaseURL: 'https://ev-database.org/car/1163/Mini-Cooper-SE',
  },
  {
    make: 'Nissan',
    model: 'e-NV200',
    heroImageName: 'e-nv200',
    price: 5650000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/e-nv200.html',
    acceleration: 14,
    capacity: 40,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1117/Nissan-e-NV200-Evalia',
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    heroImageName: 'leaf',
    price: 4890000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.9,
    capacity: 40,
    range: 270,
    evDatabaseURL: 'https://ev-database.org/car/1106/Nissan-Leaf',
  },
  {
    make: 'Nissan',
    model: 'Leaf e+',
    heroImageName: 'leaf-eplus',
    price: 5890000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.3,
    capacity: 62,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1144/Nissan-Leaf-eplus',
  },
  {
    make: 'Opel',
    model: 'Ampera-e',
    heroImageName: 'ampera-e',
    price: 5290000,
    sellerURL: 'https://ampera-e.opel.is/',
    acceleration: 7.3,
    capacity: 60,
    range: 380,
    evDatabaseURL: 'https://ev-database.org/car/1051/Opel-Ampera-e',
  },
  {
    make: 'Opel',
    model: 'Mokka-e',
    heroImageName: 'opel-mokka-e',
    price: 4590000,
    sellerURL: 'https://www.opel.is/bilar/nyr-mokka',
    acceleration: 8.5,
    capacity: 50,
    range: 322,
    evDatabaseURL: 'https://ev-database.org/car/1278/Opel-Mokka-e',
  },
  {
    make: 'Opel',
    model: 'Corsa-e',
    heroImageName: 'opel-corsa-e',
    price: 3990000,
    sellerURL: 'https://nyir.opel.is/corsa-e/',
    acceleration: 8.1,
    capacity: 50,
    range: 330,
    evDatabaseURL: 'https://ev-database.org/car/1192/Opel-Corsa-e',
  },
  {
    make: 'Peugeot',
    model: 'e-208',
    heroImageName: 'e-208',
    price: 4190000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-208/',
    acceleration: 8.1,
    capacity: 50,
    range: 340,
    evDatabaseURL: 'https://ev-database.org/car/1168/Peugeot-e-208',
  },
  {
    make: 'Peugeot',
    model: 'e-2008',
    heroImageName: 'e-2008',
    price: 4650000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-2008/',
    acceleration: 8.5,
    capacity: 50,
    range: 320,
    evDatabaseURL: 'https://ev-database.org/car/1206/Peugeot-e-2008-SUV',
  },
  {
    make: 'Porsche',
    model: 'Taycan 4s',
    heroImageName: 'taycan-4s',
    price: 13900000,
    sellerURL: 'https://benni.is/Nyir_Bilar/Porsche/Taycan/',
    acceleration: 4.0,
    capacity: 79.2,
    range: 407,
    evDatabaseURL: 'https://ev-database.org/car/1237/Porsche-Taycan-4S',
  },
  {
    make: 'Renault',
    model: 'Zoe R110',
    heroImageName: 'zoe-r110',
    price: 4450000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 11.4,
    capacity: 52,
    range: 395,
    evDatabaseURL: 'https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110',
  },
  {
    make: 'Renault',
    model: 'Zoe R135',
    heroImageName: 'zoe-r135',
    price: 4950000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 9.5,
    capacity: 52,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1205/Renault-Zoe-ZE50-R135',
  },
  {
    make: 'Renault',
    model: 'MAXI II EV',
    heroImageName: 'maxi',
    price: 5150000,
    sellerURL: 'https://renault.is/cars/kangoo/yfirlit.html',
    acceleration: 22.4,
    capacity: 33,
    range: 190,
    evDatabaseURL: 'https://ev-database.org/car/1101/Renault-Kangoo-Maxi-ZE-33',
  },
  {
    make: 'Tesla',
    model: 'Model 3 Standard Range Plus',
    heroImageName: 'tesla-model-3-srplus',
    price: 5683335,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 5.6,
    capacity: 55,
    range: 430,
    evDatabaseURL:
      'https://ev-database.org/car/1177/Tesla-Model-3-Standard-Range-Plus',
  },
  {
    make: 'Tesla',
    model: 'Model 3 Long Range',
    heroImageName: 'tesla-model-3-lr',
    price: 6363035,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 4.4,
    capacity: 75,
    range: 580,
    evDatabaseURL:
      'https://ev-database.org/car/1138/Tesla-Model-3-Long-Range-Dual-Motor',
  },
  {
    make: 'Tesla',
    model: 'Model 3 Performance',
    heroImageName: 'tesla-model-3-performance',
    price: 7409211,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 3.3,
    capacity: 75,
    range: 567,
    evDatabaseURL:
      'https://ev-database.org/car/1139/Tesla-Model-3-Long-Range-Performance',
  },
  {
    make: 'Tesla',
    model: 'Model S Long Range',
    heroImageName: 'tesla-model-s-lr',
    price: 10868191,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 3.8,
    capacity: 100,
    range: 652,
    evDatabaseURL: 'https://ev-database.org/car/1194/Tesla-Model-S-Long-Range',
  },
  {
    make: 'Tesla',
    model: 'Model S Performance',
    heroImageName: 'tesla-model-s-performance',
    price: 13348191,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 2.5,
    capacity: 100,
    range: 639,
    evDatabaseURL: 'https://ev-database.org/car/1207/Tesla-Model-S-Performance',
  },
  {
    make: 'Tesla',
    model: 'Model X Long Range',
    heroImageName: 'tesla-model-x-lr',
    price: 12108191,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 4.6,
    capacity: 100,
    range: 561,
    evDatabaseURL: 'https://ev-database.org/car/1198/Tesla-Model-X-Long-Range',
  },
  {
    make: 'Tesla',
    model: 'Model X Performance',
    heroImageName: 'tesla-model-x-performance',
    price: 14588191,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 2.8,
    capacity: 100,
    range: 548,
    evDatabaseURL: 'https://ev-database.org/car/1208/Tesla-Model-X-Performance',
  },
  {
    make: 'Volkswagen',
    model: 'e-Up!',
    heroImageName: 'e-up',
    price: 3390000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/e-up.html',
    acceleration: 11.9,
    capacity: 36.8,
    range: 260,
    evDatabaseURL: 'https://ev-database.org/car/1189/Volkswagen-e-Up',
  },
  {
    make: 'Volkswagen',
    model: 'ID.3 Pro Performance',
    heroImageName: 'vw-id-3',
    price: 5190000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 7.3,
    capacity: 58,
    range: 420,
    evDatabaseURL:
      'https://ev-database.org/car/1306/Volkswagen-ID3-Pro-Performance',
  },
  {
    make: 'Volkswagen',
    model: 'ID.3 Pro S',
    heroImageName: 'vw-id-3-alt',
    price: 6490000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 8.5,
    capacity: 77,
    range: 550,
    evDatabaseURL: 'https://ev-database.org/car/1203/Volkswagen-ID3-Pro-S',
  },
  {
    make: 'Volkswagen',
    model: 'ID.4 Pro Performance 2WD',
    heroImageName: 'vw-id-4',
    price: 6490000,
    sellerURL: 'https://www.volkswagen.is/is/rafbilar/id-fjolskyldan/id4.html',
    acceleration: 8.5,
    capacity: 77,
    range: 500,
    evDatabaseURL: 'https://ev-database.org/car/1273/Volkswagen-ID4',
  },
  {
    make: 'Volvo',
    model: 'XC40 P8 AWD Recharge',
    heroImageName: 'volvo-xc-40',
    price: 7990000,
    sellerURL:
      'https://www.volvocars.com/is#!/id:5f4900c3f02c4752360e8829/fjrhjladrifinn-rafma/',
    acceleration: 4.9,
    capacity: 78,
    range: 400,
    evDatabaseURL:
      'https://ev-database.org/car/1188/Volvo-XC40-P8-AWD-Recharge',
  },
]

export default newCars

export const expectedCars: Array<ExpectedCar> = [
  {
    make: 'Tesla',
    model: 'Model S Plaid',
    heroImageName: 'tesla-model-s-performance',
    price: 19672191,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 2.1,
    capacity: 130,
    range: 840,
    evDatabaseURL: 'https://ev-database.org/car/1207/Tesla-Model-S-Performance',
    expectedDelivery: 'Lok 2021',
  },
]
