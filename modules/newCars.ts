import { NewCar, ExpectedCar } from '../types'

const newCars: Array<NewCar> = [
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: '50 Quattro',
    heroImageName: 'e-tron-50',
    price: 9190000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 6.8,
    capacity: 71,
    range: 339,
    evDatabaseURL: 'https://ev-database.org/car/1209/Audi-e-tron-50-quattro',
    drive: 'AWD',
    timeToCharge10T080: 25,
    power: 230,
  },
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: '55 Quattro',
    heroImageName: 'e-tron',
    price: 9890000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 5.7,
    capacity: 95,
    range: 436,
    evDatabaseURL: 'https://ev-database.org/car/1253/Audi-e-tron-55-quattro',
    drive: 'AWD',
    timeToCharge10T080: 26,
    power: 300,
  },
  {
    make: 'Audi',
    model: 'e-tron',
    subModel: 'S',
    heroImageName: 'e-tron-s',
    price: 15990000,
    sellerURL: 'http://www.audi.is/is/web/is/models/tron/audi-e-tron-2021.html',
    acceleration: 4.5,
    capacity: 95,
    range: 364,
    evDatabaseURL: 'https://ev-database.org/car/1271/Audi-e-tron-S-55-quattro',
    drive: 'AWD',
    timeToCharge10T080: 26,
    power: 370,
  },
  {
    make: 'Audi',
    model: 'e-tron Sportback',
    subModel: '55 Quattro',
    heroImageName: 'e-tron-55-sportback',
    price: 10590000,
    sellerURL:
      'http://www.audi.is/is/web/is/models/tron/audi-e-tron-sportback-2021.html',
    acceleration: 5.7,
    capacity: 95,
    range: 446,
    evDatabaseURL:
      'https://ev-database.org/car/1107/Audi-e-tron-Sportback-55-quattro',
    drive: 'AWD',
    timeToCharge10T080: 26,
    power: 300,
  },
  {
    make: 'Audi',
    model: 'e-tron Sportback',
    subModel: 'S',
    heroImageName: 'e-tron-s-sportback',
    price: 16390000,
    sellerURL:
      'http://www.audi.is/is/web/is/models/tron/audi-e-tron-sportback-2021.html',
    acceleration: 4.5,
    capacity: 95,
    range: 370,
    evDatabaseURL:
      'https://ev-database.org/car/1272/Audi-e-tron-S-Sportback-55-quattro',
    drive: 'AWD',
    timeToCharge10T080: 26,
    power: 370,
  },
  {
    make: 'Audi',
    model: 'Q4 e-tron',
    subModel: '35',
    heroImageName: 'audi-q4',
    price: 5790000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 9.0,
    capacity: 55,
    range: 341,
    evDatabaseURL: 'https://ev-database.org/car/1179/Audi-Q4-e-tron-35',
    drive: 'RWD',
    timeToCharge10T080: 31,
    power: 125,
  },
  {
    make: 'Audi',
    model: 'Q4 e-tron',
    subModel: '40',
    heroImageName: 'audi-q4-alt',
    price: 6590000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 8.5,
    capacity: 82,
    range: 522,
    evDatabaseURL: 'https://ev-database.org/car/1490/Audi-Q4-e-tron-40',
    drive: 'RWD',
    timeToCharge10T080: 34,
    power: 150,
  },
  {
    make: 'Audi',
    model: 'Q4 e-tron',
    subModel: '50 quattro',
    heroImageName: 'audi-q4-alt2',
    price: 7690000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 6.2,
    capacity: 82,
    range: 488,
    evDatabaseURL: 'https://ev-database.org/car/1491/Audi-Q4-e-tron-50-quattro',
    drive: 'AWD',
    timeToCharge10T080: 34,
    power: 220,
  },
  {
    make: 'Citroën',
    model: 'ë-C4',
    heroImageName: 'citroen-ec4',
    price: 4090000,
    sellerURL: 'https://www.citroen.is/bill/citroen-e-c4-rafbill/',
    acceleration: 9.7,
    capacity: 50,
    range: 350,
    evDatabaseURL: 'https://ev-database.org/car/1286/Citroen-e-C4',
    drive: 'FWD',
    timeToCharge10T080: 31,
    power: 100,
  },
  {
    make: 'Ford',
    model: 'Mustang Mach-E',
    subModel: 'SR RWD',
    heroImageName: 'ford-mach-e',
    price: 6890000,
    sellerURL: 'https://www.ford.is/is/nyir-bilar/Mustang-Mach-E',
    acceleration: 6.1,
    capacity: 75,
    range: 440,
    evDatabaseURL:
      'https://ev-database.org/car/1242/Ford-Mustang-Mach-E-SR-RWD',
    drive: 'RWD',
    timeToCharge10T080: 38,
    power: 198,
  },
  {
    make: 'Ford',
    model: 'Mustang Mach-E',
    subModel: 'LR RWD',
    heroImageName: 'ford-mach-e-alt',
    price: 7990000,
    sellerURL: 'https://www.ford.is/is/nyir-bilar/Mustang-Mach-E',
    acceleration: 6.2,
    capacity: 98,
    range: 610,
    evDatabaseURL:
      'https://ev-database.org/car/1243/Ford-Mustang-Mach-E-ER-RWD',
    drive: 'RWD',
    power: 216,
    timeToCharge10T080: 43,
  },
  {
    make: 'Ford',
    model: 'Mustang Mach-E',
    subModel: 'SR AWD',
    heroImageName: 'ford-mach-e-alt2',
    price: 7990000,
    sellerURL: 'https://www.ford.is/is/nyir-bilar/Mustang-Mach-E',
    acceleration: 5.6,
    capacity: 75,
    range: 400,
    evDatabaseURL:
      'https://ev-database.org/car/1244/Ford-Mustang-Mach-E-SR-AWD',
    drive: 'AWD',
    timeToCharge10T080: 38,
    power: 198,
  },
  {
    make: 'Ford',
    model: 'Mustang Mach-E',
    subModel: 'LR AWD',
    heroImageName: 'ford-mach-e-alt3',
    price: 8990000,
    sellerURL: 'https://www.ford.is/is/nyir-bilar/Mustang-Mach-E',
    acceleration: 5.1,
    capacity: 98,
    range: 540,
    evDatabaseURL:
      'https://ev-database.org/car/1245/Ford-Mustang-Mach-E-ER-AWD',
    drive: 'AWD',
    power: 258,
    timeToCharge10T080: 43,
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
    drive: 'RWD',
    power: 100,
    timeToCharge10T080: 36,
  },
  {
    make: 'Honda',
    model: 'e',
    subModel: 'Advance',
    heroImageName: 'honda-e-advance',
    price: 4690000,
    sellerURL: 'https://www.honda.is/voruflokkar/bilar/honda-e/',
    acceleration: 8.3,
    capacity: 32.0,
    range: 220,
    evDatabaseURL: 'https://ev-database.org/car/1233/Honda-e-Advance',
    drive: 'RWD',
    power: 113,
    timeToCharge10T080: 36,
  },
  {
    make: 'Hyundai',
    model: 'IONIQ Electric',
    heroImageName: 'ioniq',
    price: 5290000,
    sellerURL: 'https://www.hyundai.is/nyir/ioniq/yfirlit',
    acceleration: 9.7,
    capacity: 38.3,
    range: 311,
    evDatabaseURL: 'https://ev-database.org/car/1165/Hyundai-IONIQ-Electric',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 47,
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    subModel: '39 kWh',
    heroImageName: 'kona-39',
    price: 5290000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 9.9,
    capacity: 39,
    range: 289,
    evDatabaseURL:
      'https://ev-database.org/car/1422/Hyundai-Kona-Electric-39-kWh',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 50,
  },
  {
    make: 'Hyundai',
    model: 'Kona Electric',
    subModel: '64 kWh',
    heroImageName: 'kona',
    price: 5990000,
    sellerURL: 'https://www.hyundai.is/nyir/kona-ev/yfirlit',
    acceleration: 7.6,
    capacity: 64,
    range: 450,
    evDatabaseURL:
      'https://ev-database.org/car/1423/Hyundai-Kona-Electric-64-kWh',
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 44,
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    subModel: 'EV 320',
    heroImageName: 'jaguar-i-pace',
    price: 10590000,
    sellerURL: 'https://www.jaguarisland.is/jaguar-range-i-pace',
    acceleration: 6.4,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1307/Jaguar-I-Pace-EV320',
    drive: 'AWD',
    power: 235,
    timeToCharge10T080: 44,
  },
  {
    make: 'Jaguar',
    model: 'I-PACE',
    subModel: 'EV 400',
    heroImageName: 'jaguar-i-pace-alt',
    price: 11290000,
    sellerURL: 'https://www.jaguarisland.is/jaguar-range-i-pace',
    acceleration: 4.8,
    capacity: 90,
    range: 470,
    evDatabaseURL: 'https://ev-database.org/car/1287/Jaguar-I-Pace-EV400',
    drive: 'AWD',
    power: 294,
    timeToCharge10T080: 44,
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    subModel: '39 kWh',
    heroImageName: 'e-niro-alt',
    price: 4990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-niro/upplifdu/',
    acceleration: 9.8,
    capacity: 39,
    range: 289,
    evDatabaseURL: 'https://ev-database.org/car/1339/Kia-e-Niro-39-kWh',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 43,
  },
  {
    make: 'Kia',
    model: 'e-Niro',
    subModel: '64 kWh',
    heroImageName: 'e-niro',
    price: 5790777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-niro/upplifdu/',
    acceleration: 7.8,
    capacity: 64,
    range: 455,
    evDatabaseURL: 'https://ev-database.org/car/1338/Kia-e-Niro-64-kWh',
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 44,
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    subModel: '39 kWh',
    heroImageName: 'e-soul-alt',
    price: 4990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 9.6,
    capacity: 39,
    range: 277,
    evDatabaseURL: 'https://ev-database.org/car/1289/Kia-e-Soul-39-kWh',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 43,
  },
  {
    make: 'Kia',
    model: 'e-Soul',
    subModel: '64 kWh',
    heroImageName: 'e-soul',
    price: 5990777,
    sellerURL: 'https://www.kia.com/is/nyir-bilar/e-soul/upplifdu/',
    acceleration: 7.9,
    capacity: 64,
    range: 452,
    evDatabaseURL: 'https://ev-database.org/car/1288/Kia-e-Soul-64-kWh',
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 44,
  },
  {
    make: 'Lexus',
    model: 'UX',
    subModel: '300e',
    heroImageName: 'lexus-ux-300e',
    price: 8490000,
    sellerURL: 'https://www.lexus.is/car-models/ux-300e/',
    acceleration: 7.5,
    capacity: 50,
    range: 315,
    evDatabaseURL: 'https://ev-database.org/car/1251/Lexus-UX-300e',
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 69,
  },
  {
    make: 'Maxus',
    model: 'EUNIQ 5',
    heroImageName: 'maxus-euniq-5',
    price: 6690000,
    sellerURL: 'https://vatt.is/euniq/',
    acceleration: 9.5,
    capacity: 52.5,
    range: 356,
    drive: 'FWD',
    power: 130,
    timeToCharge10T080: 38,
  },
  {
    make: 'Mazda',
    model: 'MX-30',
    heroImageName: 'mazda-mx-30',
    price: 3990000,
    sellerURL: 'https://www.mazda.is/is/nyir-bilar/mazda-mx-30',
    acceleration: 9.0,
    capacity: 35.5,
    range: 200,
    evDatabaseURL: 'https://ev-database.org/car/1241/Mazda-MX-30',
    drive: 'FWD',
    power: 105,
    timeToCharge10T080: 39,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '250',
    heroImageName: 'mercedes-eqa',
    price: 6790000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/brochures-pricelists/teaser/_jcr_content/par/productinfotextimage/interactions.attachments.5.EQA_verdlisti.pdf',
    acceleration: 8.9,
    capacity: 66.5,
    range: 426,
    evDatabaseURL: 'https://ev-database.org/car/1147/Mercedes-EQA-250',
    drive: 'FWD',
    power: 140,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '300 4MATIC',
    heroImageName: 'mercedes-eqa-alt',
    price: 7590000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/brochures-pricelists/teaser/_jcr_content/par/productinfotextimage/interactions.attachments.5.EQA_verdlisti.pdf',
    acceleration: 6.9,
    capacity: 66.5,
    range: 423,
    evDatabaseURL: 'https://ev-database.org/car/1495/Mercedes-EQA-300-4MATIC',
    drive: 'AWD',
    power: 168,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQA',
    subModel: '350 4MATIC',
    heroImageName: 'mercedes-eqa-alt2',
    price: 8090000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/brochures-pricelists/teaser/_jcr_content/par/productinfotextimage/interactions.attachments.5.EQA_verdlisti.pdf',
    acceleration: 5.8,
    capacity: 66.5,
    range: 423,
    evDatabaseURL: 'https://ev-database.org/car/1496/Mercedes-EQA-350-4MATIC',
    drive: 'AWD',
    power: 215,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQC',
    subModel: '400 4MATIC',
    heroImageName: 'eqc',
    price: 9590000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/eqc/',
    acceleration: 5.1,
    capacity: 80,
    range: 417,
    evDatabaseURL: 'https://ev-database.org/car/1135/Mercedes-EQC-400-4MATIC',
    drive: 'AWD',
    power: 300,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQV',
    subModel: '300',
    heroImageName: 'eqv',
    price: 11890000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/models/v-class/v-class-447/eqv/labeling.module.html',
    acceleration: 12.1,
    capacity: 90,
    range: 363,
    evDatabaseURL: 'https://ev-database.org/car/1240/Mercedes-EQV-300-Long',
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 47,
  },
  {
    make: 'Mercedes-Benz',
    model: 'eVito',
    subModel: 'Tourer',
    heroImageName: 'mercedes-evito-tourer',
    price: 9950000,
    sellerURL:
      'https://www.mercedes-benz.is/passengercars/mercedes-benz-cars/brochures-pricelists/teaser/_jcr_content/par/productinfotextimage/interactions.attachments.16.eVito_verdlisti.pdf',
    acceleration: 12.1,
    capacity: 90,
    range: 361,
    drive: 'FWD',
    power: 150,
    timeToCharge10T080: 47,
  },
  {
    make: 'MG',
    model: 'ZS EV',
    heroImageName: 'mg-zs-ev',
    price: 4090000,
    sellerURL: 'https://www.bl.is/nyir/mg/zsev/',
    acceleration: 8.2,
    capacity: 44.5,
    range: 263,
    evDatabaseURL: 'https://ev-database.org/car/1201/MG-ZS-EV',
    drive: 'FWD',
    power: 105,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mini Cooper',
    model: 'SE',
    heroImageName: 'mini',
    price: 5190000,
    sellerURL: 'https://www.mini.is/is_IS/home/range/electric.html',
    acceleration: 7.3,
    capacity: 28.9,
    range: 232,
    evDatabaseURL: 'https://ev-database.org/car/1409/Mini-Cooper-SE',
    drive: 'FWD',
    power: 135,
    timeToCharge10T080: 29,
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
    drive: 'FWD',
    power: 80,
    timeToCharge10T080: 42,
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    heroImageName: 'leaf',
    price: 4490000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.9,
    capacity: 40,
    range: 270,
    evDatabaseURL: 'https://ev-database.org/car/1106/Nissan-Leaf',
    drive: 'FWD',
    power: 110,
    timeToCharge10T080: 40,
  },
  {
    make: 'Nissan',
    model: 'Leaf',
    subModel: 'e+',
    heroImageName: 'leaf-eplus',
    price: 5090000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/leaf.html',
    acceleration: 7.3,
    capacity: 62,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1144/Nissan-Leaf-eplus',
    drive: 'FWD',
    power: 160,
    timeToCharge10T080: 35,
  },
  {
    make: 'Opel',
    model: 'Corsa-e',
    heroImageName: 'opel-corsa-e',
    price: 3690000,
    sellerURL: 'https://www.opel.is/cars/corsa-models/corsa-e/overview.html',
    acceleration: 8.1,
    capacity: 50,
    range: 330,
    evDatabaseURL: 'https://ev-database.org/car/1192/Opel-Corsa-e',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 31,
  },
  {
    make: 'Opel',
    model: 'Mokka-e',
    heroImageName: 'opel-mokka-e',
    price: 4590000,
    sellerURL: 'https://www.opel.is/cars/mokka-models/mokka-e/overview.html',
    acceleration: 8.5,
    capacity: 50,
    range: 322,
    evDatabaseURL: 'https://ev-database.org/car/1278/Opel-Mokka-e',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 31,
  },
  {
    make: 'Peugeot',
    model: 'e-2008',
    heroImageName: 'e-2008',
    price: 4490000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-2008/',
    acceleration: 8.5,
    capacity: 50,
    range: 320,
    evDatabaseURL: 'https://ev-database.org/car/1206/Peugeot-e-2008-SUV',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 31,
  },
  {
    make: 'Peugeot',
    model: 'e-208',
    heroImageName: 'e-208',
    price: 4090000,
    sellerURL:
      'https://www.peugeotisland.is/nyir-bilar/velja-bil/glaenyr-peugeot-e-208/',
    acceleration: 8.1,
    capacity: 50,
    range: 340,
    evDatabaseURL: 'https://ev-database.org/car/1168/Peugeot-e-208',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 31,
  },
  {
    make: 'Porsche',
    model: 'Taycan',
    heroImageName: 'porsche-taycan',
    price: 11900000,
    sellerURL: 'https://benni.is/Nyir_Bilar/Porsche/Taycan/',
    acceleration: 5.4,
    capacity: 79.2,
    range: 407,
    evDatabaseURL: 'https://ev-database.org/car/1393/Porsche-Taycan',
    drive: 'RWD',
    power: 300,
    timeToCharge10T080: 21,
  },
  {
    make: 'Porsche',
    model: 'Taycan',
    subModel: '4s',
    heroImageName: 'taycan-4s',
    price: 13900000,
    sellerURL: 'https://benni.is/Nyir_Bilar/Porsche/Taycan/',
    acceleration: 4.0,
    capacity: 79.2,
    range: 407,
    evDatabaseURL: 'https://ev-database.org/car/1237/Porsche-Taycan-4S',
    drive: 'AWD',
    power: 390,
    timeToCharge10T080: 21,
  },
  {
    make: 'Porsche',
    model: 'Taycan',
    subModel: '4 Cross Turismo',
    heroImageName: 'porsche-taycan-cross-turismo',
    price: 13900000,
    sellerURL: 'https://crossturismo.porsche.is',
    acceleration: 5.1,
    capacity: 93.4,
    range: 456,
    evDatabaseURL:
      'https://ev-database.org/car/1186/Porsche-Taycan-4-Cross-Turismo',
    drive: 'AWD',
    power: 350,
    timeToCharge10T080: 19,
  },
  {
    make: 'Renault',
    model: 'Kangoo',
    subModel: 'MAXI II EV',
    heroImageName: 'maxi',
    price: 5150000,
    sellerURL: 'https://renault.is/cars/kangoo/yfirlit.html',
    acceleration: 22.4,
    capacity: 33,
    range: 190,
    evDatabaseURL: 'https://ev-database.org/car/1101/Renault-Kangoo-Maxi-ZE-33',
    drive: 'FWD',
    power: 44,
    timeToCharge10T080: 210,
  },
  {
    make: 'Renault',
    model: 'Zoe',
    subModel: 'R110',
    heroImageName: 'zoe-r110',
    price: 4450000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 11.4,
    capacity: 52,
    range: 395,
    evDatabaseURL: 'https://ev-database.org/car/1164/Renault-Zoe-ZE50-R110',
    drive: 'FWD',
    power: 80,
    timeToCharge10T080: 56,
  },
  {
    make: 'Renault',
    model: 'Zoe',
    subModel: 'R135',
    heroImageName: 'zoe-r135',
    price: 4950000,
    sellerURL: 'https://www.renault.is/cars/zoe/yfirlit.html',
    acceleration: 9.5,
    capacity: 52,
    range: 385,
    evDatabaseURL: 'https://ev-database.org/car/1205/Renault-Zoe-ZE50-R135',
    drive: 'FWD',
    power: 100,
    timeToCharge10T080: 56,
  },
  {
    make: 'Skoda',
    model: 'Enyaq',
    subModel: 'iV 60',
    heroImageName: 'skoda-enyaq',
    price: 5790000,
    sellerURL: 'https://www.skoda.is/models/enyaq/enyaq',
    acceleration: 8.7,
    capacity: 58,
    range: 390,
    evDatabaseURL: 'https://ev-database.org/car/1279/Skoda-Enyaq-iV-60',
    drive: 'RWD',
    power: 132,
    timeToCharge10T080: 33,
  },
  {
    make: 'Skoda',
    model: 'Enyaq',
    subModel: 'iV 80',
    heroImageName: 'skoda-enyaq-alt',
    price: 6490000,
    sellerURL: 'https://www.skoda.is/models/enyaq/enyaq',
    acceleration: 8.5,
    capacity: 77,
    range: 536,
    evDatabaseURL: 'https://ev-database.org/car/1280/Skoda-Enyaq-iV-80',
    drive: 'RWD',
    power: 150,
    timeToCharge10T080: 33,
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Standard Range Plus',
    heroImageName: 'tesla-model-3-alt',
    price: 5837335,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 5.6,
    capacity: 55,
    range: 448,
    evDatabaseURL:
      'https://ev-database.org/car/1320/Tesla-Model-3-Standard-Range-Plus',
    drive: 'RWD',
    power: 239,
    timeToCharge10T080: 29,
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-3',
    price: 6601123,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 4.4,
    capacity: 77,
    range: 614,
    evDatabaseURL:
      'https://ev-database.org/car/1321/Tesla-Model-3-Long-Range-Dual-Motor-LG',
    drive: 'AWD',
    power: 324,
    timeToCharge10T080: 34,
  },
  {
    make: 'Tesla',
    model: 'Model 3',
    subModel: 'Performance',
    heroImageName: 'tesla-model-3-performance',
    price: 7680171,
    sellerURL: 'https://www.tesla.com/is_IS/model3/design',
    acceleration: 3.3,
    capacity: 82,
    range: 567,
    evDatabaseURL:
      'https://ev-database.org/car/1322/Tesla-Model-3-Long-Range-Performance',
    drive: 'AWD',
    power: 377,
    timeToCharge10T080: 21,
  },
  {
    make: 'Tesla',
    model: 'Model S',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-s',
    price: 12476447,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 3.2,
    capacity: 100,
    range: 663,
    evDatabaseURL: 'https://ev-database.org/car/1404/Tesla-Model-S-Long-Range',
    drive: 'AWD',
    power: 500,
    timeToCharge10T080: 23,
  },
  {
    make: 'Tesla',
    model: 'Model S',
    subModel: 'Plaid',
    heroImageName: 'tesla-model-s-alt',
    price: 17241779,
    sellerURL: 'https://www.tesla.com/is_IS/models/design',
    acceleration: 2.1,
    capacity: 100,
    range: 628,
    evDatabaseURL: 'https://ev-database.org/car/1405/Tesla-Model-S-Plaid',
    drive: 'AWD',
    power: 760,
    timeToCharge10T080: 23,
  },
  {
    make: 'Tesla',
    model: 'Model X',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-x',
    price: 13731351,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 3.9,
    capacity: 100,
    range: 580,
    evDatabaseURL: 'https://ev-database.org/car/1407/Tesla-Model-X-Long-Range',
    drive: 'AWD',
    power: 500,
    timeToCharge10T080: 23,
  },
  {
    make: 'Tesla',
    model: 'Model X',
    subModel: 'Plaid',
    heroImageName: 'tesla-model-x-alt',
    price: 17241779,
    sellerURL: 'https://www.tesla.com/is_IS/modelx/design',
    acceleration: 2.6,
    capacity: 100,
    range: 547,
    evDatabaseURL: 'https://ev-database.org/car/1408/Tesla-Model-X-Plaid',
    drive: 'AWD',
    power: 760,
    timeToCharge10T080: 23,
  },
  {
    make: 'Tesla',
    model: 'Model Y',
    subModel: 'Long Range',
    heroImageName: 'tesla-model-y',
    price: 8069170,
    sellerURL: 'https://www.tesla.com/is_is/modely/design',
    acceleration: 5.1,
    capacity: 75,
    range: 505,
    evDatabaseURL:
      'https://ev-database.org/car/1182/Tesla-Model-Y-Long-Range-Dual-Motor',
    drive: 'AWD',
    power: 258,
    timeToCharge10T080: 19,
  },
  {
    make: 'Tesla',
    model: 'Model Y',
    subModel: 'Performance',
    heroImageName: 'tesla-model-y-alt',
    price: 9185183,
    sellerURL: 'https://www.tesla.com/is_is/modely/design',
    acceleration: 3.7,
    capacity: 75,
    range: 480,
    evDatabaseURL: 'https://ev-database.org/car/1183/Tesla-Model-Y-Performance',
    drive: 'AWD',
    power: 340,
    timeToCharge10T080: 19,
  },
  {
    make: 'Volkswagen',
    model: 'e-Up!',
    heroImageName: 'e-up',
    price: 3690000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/e-up.html',
    acceleration: 11.9,
    capacity: 36.8,
    range: 260,
    evDatabaseURL: 'https://ev-database.org/car/1189/Volkswagen-e-Up',
    drive: 'FWD',
    power: 61,
    timeToCharge10T080: 48,
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pure Performance',
    heroImageName: 'vw-id-3',
    price: 4490000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 8.9,
    capacity: 45,
    range: 350,
    evDatabaseURL:
      'https://ev-database.org/car/1127/Volkswagen-ID3-Pure-Performance',
    drive: 'RWD',
    power: 110,
    timeToCharge10T080: 44,
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pro',
    heroImageName: 'vw-id-3-alt',
    price: 4790000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 9.6,
    capacity: 58,
    range: 426,
    evDatabaseURL: 'https://ev-database.org/car/1202/Volkswagen-ID3-Pro',
    drive: 'RWD',
    power: 107,
    timeToCharge10T080: 33,
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pro Performance',
    heroImageName: 'vw-id-3',
    price: 4990000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 7.3,
    capacity: 58,
    range: 426,
    evDatabaseURL:
      'https://ev-database.org/car/1306/Volkswagen-ID3-Pro-Performance',
    drive: 'RWD',
    power: 150,
    timeToCharge10T080: 33,
  },
  {
    make: 'Volkswagen',
    model: 'ID.3',
    subModel: 'Pro S',
    heroImageName: 'vw-id-3-alt',
    price: 6490000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id3.html',
    acceleration: 8.5,
    capacity: 77,
    range: 550,
    evDatabaseURL: 'https://ev-database.org/car/1203/Volkswagen-ID3-Pro-S',
    drive: 'RWD',
    power: 150,
    timeToCharge10T080: 34,
  },
  {
    make: 'Volkswagen',
    model: 'ID.4',
    subModel: 'Pure 2WD',
    heroImageName: 'vw-id-4',
    price: 5090000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/ID4.html',
    acceleration: 10.9,
    capacity: 52,
    range: 346,
    evDatabaseURL: 'https://ev-database.org/car/1489/Volkswagen-ID4-Pure',
    drive: 'RWD',
    power: 109,
    timeToCharge10T080: 34,
  },
  {
    make: 'Volkswagen',
    model: 'ID.4',
    subModel: 'Pure Performance 2WD',
    heroImageName: 'vw-id-4-alt',
    price: 5290000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/ID4.html',
    acceleration: 9.0,
    capacity: 52,
    range: 346,
    evDatabaseURL:
      'https://ev-database.org/car/1411/Volkswagen-ID4-Pure-Performance',
    drive: 'RWD',
    power: 125,
    timeToCharge10T080: 29,
  },
  {
    make: 'Volkswagen',
    model: 'ID.4',
    subModel: 'Pro Performance 2WD',
    heroImageName: 'vw-id-4-alt2',
    price: 5990000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/ID4.html',
    acceleration: 8.5,
    capacity: 77,
    range: 522,
    evDatabaseURL:
      'https://ev-database.org/car/1314/Volkswagen-ID4-Pro-Performance',
    drive: 'RWD',
    power: 150,
    timeToCharge10T080: 34,
  },
  {
    make: 'Volkswagen',
    model: 'ID.4',
    subModel: 'GTX',
    heroImageName: 'vw-id-4-gtx',
    price: 6990000,
    sellerURL: 'https://www.volkswagen.is/is/bilar/id4-gtx.html',
    acceleration: 6.2,
    capacity: 77,
    evDatabaseURL: 'https://ev-database.org/car/1494/Volkswagen-ID4-GTX',
    range: 480,
    drive: 'AWD',
    power: 220,
    timeToCharge10T080: 34,
  },
  {
    make: 'Volvo',
    model: 'XC40',
    subModel: 'P8 AWD Recharge',
    heroImageName: 'volvo-xc-40',
    price: 7640000,
    sellerURL: 'https://www.volvocars.com/is/v/cars/xc40-electric',
    acceleration: 4.9,
    capacity: 78,
    range: 418,
    evDatabaseURL:
      'https://ev-database.org/car/1188/Volvo-XC40-P8-AWD-Recharge',
    drive: 'AWD',
    power: 300,
    timeToCharge10T080: 33,
  },
]

export default newCars

export const expectedCars: Array<ExpectedCar> = [
  {
    make: 'Audi',
    model: 'Q4 Sportback e-tron',
    subModel: '35',
    heroImageName: 'audi-q4-sportback',
    price: 6190000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 9.0,
    capacity: 55,
    range: 349,
    evDatabaseURL:
      'https://ev-database.org/car/1290/Audi-Q4-Sportback-e-tron-35',
    expectedDelivery: 'Júní 2021',
    drive: 'RWD',
    power: 125,
    timeToCharge10T080: 31,
  },
  {
    make: 'Audi',
    model: 'Q4 Sportback e-tron',
    subModel: '40',
    heroImageName: 'audi-q4-sportback-alt',
    price: 6990000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 8.5,
    capacity: 82,
    range: 540,
    expectedDelivery: 'Júní 2021',
    drive: 'RWD',
    power: 150,
    timeToCharge10T080: 34,
  },
  {
    make: 'Audi',
    model: 'Q4 Sportback e-tron',
    subModel: '50 quattro',
    heroImageName: 'audi-q4-sportback-alt2',
    price: 8090000,
    sellerURL: 'http://www.audi.is/is/web/is/models/q4-e-tron/q4-e-tron.html',
    acceleration: 6.2,
    capacity: 82,
    range: 495,
    evDatabaseURL:
      'https://ev-database.org/car/1492/Audi-Q4-Sportback-e-tron-50-quattro',
    expectedDelivery: 'Júní 2021',
    drive: 'AWD',
    power: 220,
    timeToCharge10T080: 34,
  },
  {
    make: 'BMW',
    model: 'i4',
    subModel: 'eDrive 40',
    heroImageName: 'bmw-i4',
    price: 8490000,
    sellerURL:
      'https://www.bmw.is/is/all-models/bmw-i/i4/2021/bmw-i4-forskooun.html',
    acceleration: 5.7,
    capacity: 83.9,
    range: 590,
    evDatabaseURL: 'https://ev-database.org/car/1252/BMW-i4-eDrive40',
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 250,
    timeToCharge10T080: 30,
  },
  {
    make: 'BMW',
    model: 'i4',
    subModel: 'M50',
    heroImageName: 'bmw-i4-m50',
    price: 9900000,
    sellerURL:
      'https://www.bmw.is/is/all-models/bmw-i/i4/2021/bmw-i4-forskooun.html',
    acceleration: 3.9,
    capacity: 83.9,
    range: 510,
    evDatabaseURL: 'https://ev-database.org/car/1519/BMW-i4-M50',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 400,
    timeToCharge10T080: 30,
  },
  {
    make: 'BMW',
    model: 'iX',
    subModel: 'xDrive 40',
    heroImageName: 'bmw-ix',
    price: 10990000,
    sellerURL: 'https://www.bmw.is/is/all-models/bmw-i/bmw-ix/2020/bmw-ix.html',
    acceleration: 6.1,
    capacity: 75,
    range: 400,
    evDatabaseURL: 'https://ev-database.org/car/1472/BMW-iX-xDrive-40',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 240,
    timeToCharge10T080: 31,
  },
  {
    make: 'BMW',
    model: 'iX',
    subModel: 'xDrive 50',
    heroImageName: 'bmw-ix-alt',
    price: 13590000,
    sellerURL: 'https://www.bmw.is/is/all-models/bmw-i/bmw-ix/2020/bmw-ix.html',
    acceleration: 4.8,
    capacity: 110,
    range: 600,
    evDatabaseURL: 'https://ev-database.org/car/1473/BMW-iX-xDrive-50',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 385,
    timeToCharge10T080: 34,
  },
  {
    make: 'Hyundai',
    model: 'IONIQ 5',
    subModel: 'Standard Range 2WD',
    heroImageName: 'hyundai-ioniq-5',
    price: 6390000,
    sellerURL: 'https://www.hyundai.is/nyir/nyr-ioniq-5/yfirlit',
    acceleration: 8.5,
    capacity: 58,
    range: 400,
    evDatabaseURL:
      'https://ev-database.org/car/1476/Hyundai-IONIQ-5-Standard-Range-2WD',
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 125,
    timeToCharge10T080: 18,
  },
  {
    make: 'Hyundai',
    model: 'IONIQ 5',
    subModel: 'Long Range 2WD',
    heroImageName: 'hyundai-ioniq-5-alt',
    price: 6790000,
    sellerURL: 'https://www.hyundai.is/nyir/nyr-ioniq-5/yfirlit',
    acceleration: 7.4,
    capacity: 73,
    range: 485,
    evDatabaseURL:
      'https://ev-database.org/car/1478/Hyundai-IONIQ-5-Long-Range-2WD',
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 160,
    timeToCharge10T080: 18,
  },
  {
    make: 'Hyundai',
    model: 'IONIQ 5',
    subModel: 'Long Range AWD',
    heroImageName: 'hyundai-ioniq-5-alt2',
    price: 7490000,
    sellerURL: 'https://www.hyundai.is/nyir/nyr-ioniq-5/yfirlit',
    acceleration: 5.2,
    capacity: 73,
    range: 460,
    evDatabaseURL:
      'https://ev-database.org/car/1479/Hyundai-IONIQ-5-Long-Range-AWD',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 225,
    timeToCharge10T080: 18,
  },
  {
    make: 'Kia',
    model: 'EV6',
    subModel: 'Standard Range RWD',
    heroImageName: 'kia-ev6',
    price: 5990777,
    sellerURL: 'https://forpontun.kia.is',
    acceleration: 8.5,
    capacity: 58,
    range: 400,
    evDatabaseURL:
      'https://ev-database.org/car/1480/Kia-EV6-Standard-Range-2WD',
    expectedDelivery: 'Lok 2021',
    drive: 'RWD',
    power: 125,
    timeToCharge10T080: 18,
  },
  {
    make: 'Kia',
    model: 'EV6',
    subModel: 'Standard Range AWD',
    heroImageName: 'kia-ev6-alt',
    price: 6490777,
    sellerURL: 'https://forpontun.kia.is',
    acceleration: 6.2,
    capacity: 58,
    range: 380,
    expectedDelivery: 'Lok 2021',
    drive: 'AWD',
    power: 175,
    timeToCharge10T080: 18,
  },
  {
    make: 'Kia',
    model: 'EV6',
    subModel: 'Long Range RWD',
    heroImageName: 'kia-ev6-alt2',
    price: 6650777,
    sellerURL: 'https://forpontun.kia.is',
    acceleration: 7.5,
    capacity: 77.4,
    range: 510,
    evDatabaseURL: 'https://ev-database.org/car/1481/Kia-EV6-Long-Range-2WD',
    expectedDelivery: 'Lok 2021',
    drive: 'RWD',
    power: 168,
    timeToCharge10T080: 18,
  },
  {
    make: 'Kia',
    model: 'EV6',
    subModel: 'Long Range AWD',
    heroImageName: 'kia-ev6-alt3',
    price: 7150777,
    sellerURL: 'https://forpontun.kia.is',
    acceleration: 5.4,
    capacity: 77.4,
    range: 490,
    evDatabaseURL: 'https://ev-database.org/car/1482/Kia-EV6-Long-Range-AWD',
    expectedDelivery: 'Lok 2021',
    drive: 'AWD',
    power: 239,
    timeToCharge10T080: 18,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQB',
    subModel: '250',
    heroImageName: 'mercedes-eqb',
    price: 7400000,
    sellerURL: 'https://www.mercedes-benz.com/en/eq/all-electric-models/eqb/',
    acceleration: 9.1,
    capacity: 66.5,
    range: 422,
    expectedDelivery: 'Lok 2021',
    drive: 'FWD',
    power: 140,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQB',
    subModel: '350 4MATIC',
    heroImageName: 'mercedes-eqb-alt',
    price: 8300000,
    sellerURL: 'https://www.mercedes-benz.com/en/eq/all-electric-models/eqb/',
    acceleration: 5.1,
    capacity: 66.5,
    range: 419,
    evDatabaseURL: 'https://ev-database.org/car/1493/Mercedes-EQB-350-4MATIC',
    expectedDelivery: 'Lok 2021',
    drive: 'AWD',
    power: 215,
    timeToCharge10T080: 35,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQS',
    subModel: '350',
    heroImageName: 'mercedes-eqs',
    price: 14000000,
    sellerURL: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/eqs/',
    acceleration: 5.9,
    capacity: 90,
    range: 630,
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 212,
    timeToCharge10T080: 28,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQS',
    subModel: '450+',
    heroImageName: 'mercedes-eqs-alt',
    price: 16000000,
    sellerURL: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/eqs/',
    acceleration: 5.6,
    capacity: 108,
    range: 770,
    evDatabaseURL: 'https://ev-database.org/car/1483/Mercedes-EQS-450plus',
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 245,
    timeToCharge10T080: 32,
  },
  {
    make: 'Mercedes-Benz',
    model: 'EQS',
    subModel: '580 4MATIC',
    heroImageName: 'mercedes-eqs',
    price: 21000000,
    sellerURL: 'https://www.mercedes-benz.com/en/vehicles/passenger-cars/eqs/',
    acceleration: 4.2,
    capacity: 108,
    range: 702,
    evDatabaseURL: 'https://ev-database.org/car/1483/Mercedes-EQS-450plus',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 385,
    timeToCharge10T080: 32,
  },
  {
    make: 'MG',
    model: ' Marvel R',
    heroImageName: 'mg-marvel-r',
    price: 5800000,
    sellerURL: 'https://mgmotor.eu/is-IS/model/marvel-r',
    acceleration: 7.9,
    capacity: 70,
    range: 402,
    evDatabaseURL: 'https://ev-database.org/car/1475/MG-Marvel-R',
    expectedDelivery: 'Haust 2021',
    drive: 'RWD',
    power: 132,
    timeToCharge10T080: 36,
  },
  {
    make: 'MG',
    model: ' Marvel R',
    subModel: 'Performance',
    heroImageName: 'mg-marvel-r-alt',
    price: 6800000,
    sellerURL: 'https://mgmotor.eu/is-IS/model/marvel-r',
    acceleration: 4.9,
    capacity: 70,
    range: 370,
    evDatabaseURL: 'https://ev-database.org/car/1475/MG-Marvel-R-Performance',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 212,
    timeToCharge10T080: 36,
  },
  {
    make: 'MG',
    model: 'MG5 EV',
    heroImageName: 'mg-mg5-ev',
    price: 4990000,
    sellerURL: 'https://mgmotor.eu/is-IS/model/mg5',
    acceleration: 8.3,
    capacity: 60,
    range: 400,
    evDatabaseURL: 'https://ev-database.org/car/1474/MG-MG5-Electric',
    expectedDelivery: 'Október 2021',
    drive: 'FWD',
    power: 135,
    timeToCharge10T080: 31,
  },
  {
    make: 'Nissan',
    model: 'Ariya',
    heroImageName: 'nissan-ariya',
    price: 7200000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/ariya.html',
    acceleration: 7.9,
    capacity: 63,
    range: 360,
    evDatabaseURL: 'https://ev-database.org/car/1301/Nissan-Ariya-63kWh',
    expectedDelivery: 'Lok 2021',
    drive: 'FWD',
    power: 160,
    timeToCharge10T080: 31,
  },
  {
    make: 'Nissan',
    model: 'Ariya',
    subModel: 'e-4ORCE',
    heroImageName: 'nissan-ariya-alt',
    price: 8600000,
    sellerURL: 'https://www.nissan.is/vehicles/new-vehicles/ariya.html',
    acceleration: 5.7,
    capacity: 87,
    range: 460,
    evDatabaseURL:
      'https://ev-database.org/car/1304/Nissan-Ariya-e-4ORCE-87kWh',
    expectedDelivery: 'Lok 2021',
    drive: 'AWD',
    power: 225,
    timeToCharge10T080: 35,
  },
  {
    make: 'Volvo',
    model: 'C40',
    subModel: 'Recharge',
    heroImageName: 'volvo-c40',
    price: 7990000,
    sellerURL: 'https://www.volvocars.com/is/v/cars/c40-electric',
    acceleration: 4.7,
    capacity: 78,
    range: 420,
    evDatabaseURL: 'https://ev-database.org/car/1421/Volvo-C40-Recharge',
    expectedDelivery: 'Haust 2021',
    drive: 'AWD',
    power: 300,
    timeToCharge10T080: 33,
  },
]
