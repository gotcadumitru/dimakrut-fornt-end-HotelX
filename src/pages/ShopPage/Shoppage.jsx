import React, { useState } from 'react';
import Shopitem from '../../components/shop-item/ShopitemComponent';

const Shoppage = (props)=>{
    const [shopItemsState,editShopItemsState]= useState([
        {
          id: 0,
          title: 'Number of meals per day',
          routeName: 'meals',
          items: [
            {
              id: 1,
              name: 'One MEAL',
              imageUrl:'http://www.factroom.ru/wp-content/uploads/2016/02/9-33.jpg',
              price: 10
            },
            {
              id: 2,
              name: 'Two MEALS',
              imageUrl:'https://st4.depositphotos.com/1022828/26636/i/1600/depositphotos_266368294-stock-photo-two-plates-with-the-meal.jpg',
              price: 15
            },
            {
              id: 3,
              name: 'Three MEALS',
              imageUrl:'https://photo.zephotos.com/o/dw/eda-tarelka-s-edoy-eda-v-tarelke.jpg',
              price: 20
            },
            {
              id: 9,
              name: 'UNLIMITED',
              imageUrl:'https://www.broadwaytravel.com/blog/wp-content/uploads/2019/01/Fancy-buffet-spread-filled-with-cold-and-hot-snacks-580x320.jpg',
              price: 25
            }
          ]
        },
        {
          id: 10,
          title: 'Additional accesses',
          routeName: 'accesses',
          items: [
            {
              id: 11,
              name: 'GYM',
              imageUrl:'https://vesti-k.ru/i/8c/8c94bb606d8c3ad329ae8d9c7cbd6222.jpg',
              price: 5
            },
            {
              id: 12,
              name: 'POOL',
              imageUrl:'https://images.md.prom.st/8763896_w640_h640_basein.jpg',
              price: 10,
            },
            {
              id: 13,
              name: 'ROOF',
              imageUrl:'https://www.restoclub.ru/uploads/article_thumbnail_big/6/f/4/5/6f45ebd7b245bb4c83fb3a9da2c4244f.jpg',
              price: 5,
            },
            {
              id: 14,
              name: 'CASINO',
              imageUrl:'https://ventsmagazine.com/wp-content/uploads/2020/11/Firekeepers-Casino-Hotel_54_990x660.jpg',
              price: 10,
            },
          ]
        },
        {
          id: 20,
          title: 'Excursions',
          routeName: 'excursions',
          items: [
            {
              id: 21,
              name: 'Burj Khalifa',
              imageUrl:'https://www.travelingturks.com/wp-content/uploads/burc-halife-giris-cikis-bileti.jpg',
              price: 20
            },
            {
              id: 22,
              name: 'Palm Islands',
              imageUrl:'https://mirputeshestvii.ru/upload/resize_cache/blog/d93/600_600_1/palmovye_ostrova_v_dubae.jpg',
              price: 30
            },
            {
              id: 23,
              name: 'Dubai Aquarium & Underwater Zoo',
              imageUrl:'https://skylandtourism.com/wp-content/uploads/2018/06/Aquarium-Dubai-Mall-1200x900.jpg',
              price: 40
            },
            {
              id: 9,
              name: 'Miracle Garden',
              imageUrl:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/05/24-Dubai_Miracle_Garden-e1527712670115.jpg',
              price: 40
            }

          ]
        },
      ]
    )
    let fourComp = shopItemsState.map((el)=>{
        return (

            <Shopitem key={el.id} {...el}/>
            )
    })
    return (
        <div className="Shoppage">
            {fourComp}
        </div>
    )
}
export default Shoppage;