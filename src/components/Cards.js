import React, { useState } from 'react';
import ReactStars from 'react-stars';

const Cards = () => {
  const [data] = useState([
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg",
    },
    {
      name: "Talvar",
      year: "2015",
      rating: 4.5,
      img: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/6-india-movie-poster-designs-talvar.jpg",
    },
    {
      name: "Suraj Pe Mangal Bhari",
      year: "2020",
      rating: 4.1,
      img: "https://1.bp.blogspot.com/-79vmCCwoZ_E/X4_artAUp7I/AAAAAAAAaO4/qsr-ZiGmgwcmsP72F_NAyWamwA2rsLhTwCLcBGAsYHQ/s595/Suraj-Pe-Mangal-Bhari-movie-poster-release-date.jpg",
    },
    {
      name: "Chennai Express",
      year: "2018",
      rating: 4.8,
      img: "https://bollywoodmovieposters.com/wp-content/uploads/2021/02/shahrukh-khan-film-poster-chennai-express.jpg",
    },
    {
      name: "Beauty and the Beast",
      year: "2017",
      rating: 4.3,
      img: "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg",
    },
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg",
    },
  ]);
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
    { data.map((e,i) => {
      return (
      <div key={i} className='card text-lg font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-300'>
        <img className='h-72' alt='' src={e.img}/>
        <h1>
          <span className='text-orange-500'>Name:</span> {e.name}
        </h1>
        <h1 className='flex items-center'>
          <span className='text-orange-500 mr-1'>Rating:</span>
          <ReactStars
          size={20}
          value={e.rating}
          half={true}
          edit={false}
          />
        </h1>
        <h1>
          <span className='text-orange-500'>Year:</span> {e.year}
        </h1>
      </div>
        )
    })
  }
  </div>
  )
}

export default Cards