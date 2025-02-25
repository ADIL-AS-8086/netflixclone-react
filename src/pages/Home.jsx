import React from 'react';
import Main from '../components/Main';
import Row from "../components/Row";
import requests from "../Requestes";

function Home() {
  return (
    <>
      <Main />
      <Row rowID='1' title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID='2' title='Upcoming' fetchURL={requests.requestUpcoming}/>
      <Row rowID='3' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </>
  );
}

export default Home;
