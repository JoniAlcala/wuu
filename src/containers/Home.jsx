/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import Footer from '../components/Footer';

const Home = ({ myList, trends, originals }) => {

  return (
    <div className='App'>
      <Header />
      <Search />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='trends'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
            />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myList: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
