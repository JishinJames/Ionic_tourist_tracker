import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Tapkeshwar Temple",
    "profilePic": "assets/img/speakers/TapkeshwarTemple.jpg",
    "about": "Goa has many beaches.",
  };


  constructor() {
    let items = [
      {"name": "Tapkeshwar Temple",
      "profilePic": "assets/img/speakers/TapkeshwarTemple.jpg",
      "about": "Tapkeshwar Temple in Dehradun, also known as Tapkeshwar Mahadev Temple, is one of the most famous temples dedicated to Lord Shiva. Situated by the forest side, the main shivalinga at the temple is inside a natural cave.\t \t \t Address: Tapkeshwar Colony, Dehradun, Uttarakhand 248001"
       
    },
      {
        "name": "Robbers Cave",
        "profilePic": "assets/img/speakers/RobbersCave.jpg",
        "about": "Popular picnicking, hiking & wading spot where a river flows through a narrow, cavelike gorge. Address: Gucchupani, Malsi, Dehradun, Uttarakhand 248003"
      },
      {
        "name": "Malsi Deer Park",
        "profilePic": "assets/img/speakers/MalsiDeerPark.jpg",
        "about": "Mini zoological park with many deer & a children's area amid natural surroundings. Address: Diversion, Mussoorie Rd, Dehradun, Uttarakhand 248009"
      },
      {
        "name": "Rajaji National Park",
        "profilePic": "assets/img/speakers/RajajiNationalPark.jpg",
        "about": "Rajaji National Park is an Indian national park and tiger reserve that encompasses the Shivaliks, near the foothills of the Himalayas. The park is spread over 820 km²., and three districts of Uttarakhand: Haridwar, Dehradun and Pauri Garhwal. Address: 5/1, Ansari Road, Mohand Range, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "Dehradun Zoo",
        "profilePic": "assets/img/speakers/DehradunZoo.jpg",
        "about": "Zoo with a facilities for kids, local & international species & views of the surrounding area. Address: Mussoorie Road, Malsi, Dehradun, Uttarakhand 248009"
      },
      {
        "name": "George Everests House",
        "profilePic": "assets/img/speakers/GeorgeEverestsHouse.jpg",
        "about": "Grand mansion & laboratory of Sir George Everest, with whitewashed walls & sweeping valley views. Address: Khanij Nagar, Uttarakhand 248179"
      },
      {
        "name": "Buddha Temple",
        "profilePic": "assets/img/speakers/BuddhaTemple.jpg",
        "about": "Tibetan temple noted for its monumental, art-filled stupa & 103-ft. statue of the Buddha. Address: New Basti, Clement Town, Dehradun, Uttarakhand 248002"
      },
      {
        "name": "Santala Devi",
        "profilePic": "assets/img/speakers/SantalaDevi.jpg",
        "about": "Hilltop Hindu temple with scenic views & picnic areas, accessible by hiking trails. Address: Village Jahariwala, Uttarakhand 248190"
      },
      {
        "name": "Picnic Spot Lachhiwala",
        "profilePic": "assets/img/speakers/PicnicSpotLachhiwala.jpg",
        "about": "Picnic Spot, Lachhiwala is a popular local destination in Doiwala, in the state of Uttarakhand, India, and the nearby regions, situated on the banks of a tributary of the nearby Song river. Address: Lachhiwala Range, Uttarakhand 248008"
      },
      {
        "name": "Shikhar Fall",
        "profilePic": "assets/img/speakers/ShikharFall.jpg",
        "about": "Relaxed natural area popular for hiking, birding & picnics, with rocky pools & a waterfall. Address: Kairwaan Gaon, Dumal Gaon, Uttarakhand 248009"
      },
      {
        "name": "Mindrolling Monastery",
        "profilePic": "assets/img/speakers/MindrollingMonastery.jpg",
        "about": "Established in 1965, this large Tibetan Buddhist monastery holds ceremonies & activities. Address: 3, Buddha Temple Road, New Basti, Clement Town, Dehradun, Uttarakhand 248002"
      },
      {
        "name": "Laxman Siddh Temple",
        "profilePic": "assets/img/speakers/LaxmanSiddhTemple.jpg",
        "about": "Hindu temple in Lachhiwala Range.  Address: Lachhiwala Range, Uttarakhand 248005"
      },
      {
        "name": "Guru Ram Rai Gurudwara",
        "profilePic": "assets/img/speakers/GuruRamRaiGurudwara.jpg",
        "about": "Gurudwara in Dehradun. Address: Tilak Rd, Jhanda Bazar, Jhanda Mohalla, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "MDDA Park",
        "profilePic": "assets/img/speakers/MDDAPark.jpg",
        "about": "Park in Dehradun. Address: 16/3, Rajpur Road, IAS Officers Colony, Rajpur, Dehradun, Uttarakhand 248009"
      },
      {
        "name": "Tapovan Temple",
        "profilePic": "assets/img/speakers/TapovanTemple.jpg",
        "about": "Hindu temple in Dehradun. Address: Raipur, Dehradun, Uttarakhand 248008"
      },
      {
        "name": "Sai Darbar Temple",
        "profilePic": "assets/img/speakers/SaiDarbarTemple.jpg",
        "about": "Hindu temple in Dehradun. Address: 109, Rajpur Rd, IAS Officers Colony, Hathibarkala Salwala, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "Darbar Sahib Sri Guru Ram Rai Maharaj",
        "profilePic": "assets/img/speakers/DarbarSahibSriGuruRamRaiMaharaj.jpg",
        "about": "Religious institution in Dehradun. Address: Arhat Bazar Rd, Jhanda Mohalla, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "Fun 'N' Food Kingdom",
        "profilePic": "assets/img/speakers/FunNFoodKingdom.jpg",
        "about": "Playful theme park offering water slides & thrill rides, including roller coasters & bumper cars. Address: Village Kohlupani, Nanda Ki Chawki, Near, Prem Nagar, Dehradun, Uttarakhand 248007"
      },
      {
        "name": "Buddha Temple (Tibetian Temple) ",
        "profilePic": "assets/img/speakers/BuddhaTemple(TibetanTemple).jpg",
        "about": "Buddhist temple in Dehradun. Address: Tibetan Market, Pant Rd, Darshan Lal Chowk, Race Course, Dehra Dun, Uttarakhand 248001"
      },
      {
        "name": "Sahasradhara Ropeway",
        "profilePic": "assets/img/speakers/SahasradharaRopeway.jpg",
        "about": "Tourist attraction in Timilimansingh, Dehradun. Address: Rise Rope Laddre Pvt. Ltd, Shree Ganpati Sagar Hill, Dehradun, Uttarakhand 248002"
      },
      {
        "name": "Sakya Centre Buddhist Monastery  ",
        "profilePic": "assets/img/speakers/SakyaCentreBuddhistMonastery.jpg",
        "about": "Buddhist monastery & educational center with an elaborate painted interior & scenic grounds. Address: 187, Rajpur Rd, IAS Officers Colony, Rajpur, Dehradun, Uttarakhand 248009"
      },
      {
        "name": "Sahasradhara",
        "profilePic": "assets/img/speakers/Sahasradhara.jpg",
        "about": "Sahastradhara, meaning thousand fold spring, is one of the most popular tourist destinations located in Dehradun in Uttrakhand state of India. It lies on 30.387231 latitude and 78.131606 longitude. Address: Khiroi, Uttarakhand 246422"
      },
      {
        "name": "Chandrabani Temple",
        "profilePic": "assets/img/speakers/ChandrabaniTemple.jpg",
        "about": "Hindu temple in Dehradun. Address: Chandrabani, Dehradun, Uttarakhand 248171"
      },
      {
        "name": "Khalanga War Memorial",
        "profilePic": "assets/img/speakers/KhalangaWarMemorial.jpg",
        "about": "Historical landmark in Tibbanala Pani,Dehradun. Address: Dehradun, Tibbanala Pani, 248008"
      },
      {
        "name": "Jabarkhet Nature Reserve, Mussorie",
        "profilePic": "assets/img/speakers/JabarkhetNatureReserve.jpg",
        "about": "Private forest reserve in the mountains with wildlife viewing, hiking trails & nature views. Address: Dehradun, Uttarakhand 248122"
      },
      {
        "name": "Gandhi Park",
        "profilePic": "assets/img/speakers/GandhiPark.jpg",
        "about": "Large tree-lined green space with walking/jogging paths, historical statues & picnic areas. Address: Rajpur Rd, Ashtley Hall, Irigation Colony, Karanpur, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "FRI ( Forest Research Institute) Timber Museum",
        "profilePic": "assets/img/speakers/FRI.jpg",
        "about": "Spot for information on the timber industry, plus commercial wood products & manufacturing. Address: Brandis Rd, Forest Research Institute, Indian Military Academy, Dehradun, Uttarakhand 248003"
      },
      {
        "name": "Shree Prakasheswar Mahadev Mandir",
        "profilePic": "assets/img/speakers/ShreePrakasheswarMahadevMandir.jpg",
        "about": "Hindu temple in Khala Gaon. Address: Mussoorie Rd, Salan Gaon, Bhagwant Pur, Khala Gaon, Uttarakhand 248009"
      },
      {
        "name": "Regional Science Center Dehradun",
        "profilePic": "assets/img/speakers/RegionalScienceCenterDehradun.jpg",
        "about": "Science museum in Dehradun. Address: Vigyan Dham, Jhjara, Premnagar, Dehradun, Uttarakhand 248007"
      },
      {
        "name": "Jai Maa Daat Kali Temple",
        "profilePic": "assets/img/speakers/JaiMaaDaatKaliTemple.jpg",
        "about": "Hindu temple in Ashkrodi, Dehradun. Address: NH 72A, Ashkrodi, Uttarakhand 247662"
      },
      {
        "name": "Sai Temple",
        "profilePic": "assets/img/speakers/SaiTemple.jpg",
        "about": "Hindu temple in Dehradun. Address: 16/3, Rajpur Rd, IAS Officers Colony, Rajpur, Dehradun, Uttarakhand 248009"
      },
      {
        "name": "Subir Raha Oil Museum",
        "profilePic": "assets/img/speakers/SubirRahaOilMuseum.jpg",
        "about": "Museum dedicated to petroleum, its industrial history in India & the conservation of fossil fuels. Address: Krishna Nagar, Dehradun, Uttarakhand 248003"
      },
      {
        "name": "Shiv Mandir",
        "profilePic": "assets/img/speakers/ShivMandir.jpg",
        "about": "Hindu temple in Dehradun. Address: Rajpur Rd, Saundhon wali, Hathibarkala, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "Hi-Jinks Dehradun",
        "profilePic": "assets/img/speakers/HiJinksDehradun.jpg",
        "about": "Amusement center in Dehradun. Address: 9, Rajpur Rd, Ashtley Hall, Irigation Colony, Karanpur, Dehradun, Uttarakhand 248001"
      },
      {
        "name": "Santla Devi Temple",
        "profilePic": "assets/img/speakers/SantlaDeviTemple.jpg",
        "about": "Hindu temple in Dehradun. Address: Dehradun, Uttarakhand 248141"
      },
      {
        "name": "Sahastradhara Natural Spring",
        "profilePic": "assets/img/speakers/SahastradharaNaturalSpring.jpg",
        "about": "Nature preserve in Timilimansingh, Dehradun. Address: Sahastradhara, Timilimansingh, Dehradun, Uttarakhand 248009"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
