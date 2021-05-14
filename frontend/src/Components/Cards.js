import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Order from our Prefix Menu or Try our Create Your Own Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.seededatthetable.com/wp-content/uploads/2020/05/How-to-Make-a-Slushie-UPDATE-8.jpg.webp'
              text='Explore the vast options of Flavors.'
              label='Menu'
              path='/services'
            />
            <CardItem
              src='https://sun9-64.userapi.com/s/v1/if1/V9OBGv2fNfPW6eUH1QYVwlh-iswxroShQUcgZFS2jJnKbe79uzlFaR0xdfB37BZULuZVYUl7.jpg?size=200x0&quality=96&crop=0,0,401,401&ava=1'
              text='Create Your Own Drink from all the flavor options available.'
              label='Create Your Own'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://c.wallhere.com/photos/58/91/drunk_bottles_bokeh_5_five_wino_drinking_thegoodlife-893541.jpg!d'
              text='Not in the mood for frozen drinks? Explore our fully stocked Spirits Section.'
              label='Liquor Store'
              path='/services'
            />
            <CardItem
              src='https://www.wideopeneats.com/wp-content/uploads/2017/06/Skinnygirl-Cocktails-2-1500x1127.jpg'
              text='Get recipes for your favorite cocktails.'
              label='Recipe of the Day'
              path='/products'
            />
            <CardItem
              src='https://www.moodiedavittreport.com/wp-content/uploads/2020/05/COCA-delivery-driver.png'
              text='Our Drivers make sure they do everything possibe to keep you safe during hand off.'
              label='Safety First'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
