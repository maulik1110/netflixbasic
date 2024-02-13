import React, { useEffect, useState } from "react";
import "./Home.sass";
import axios from "axios";

const api = "bfde4db3037a8f581e2636c590f4615f";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowplaying = "now_playing";
const popular = "popular";
const toprated = "top_rated";
const imgurl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [
    {
      img: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
}) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgurl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);

  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${api}`);
      setUpcomingMovies(results);
      console.log(upcomingMovies);
    };

    const fetchupnowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowplaying}?api_key=${api}`);
      setNowplayingMovies(results);
      console.log(setNowplayingMovies);
    };

    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${api}`);
      setPopularMovies(results);
      console.log(setPopularMovies);
    };

    const fetchtoprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${toprated}?api_key=${api}`);
      setTopratedMovies(results);
      console.log(setTopratedMovies);
    };

    fetchupcoming();
    fetchpopular();
    fetchtoprated();
    fetchupnowplaying();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgurl}/${popularMovies[0].poster_path}`})`
            : "none",
        }}
      >
        {popularMovies[0] && (
          <>
            <h1>{popularMovies[0].original_title}</h1>
            <p className="para">{popularMovies[0].overview}</p>
          </>
        )}
        {/* <h1>{popularMovies[0].original_title}</h1>
        <p>{popularMovies[0].overview}</p> */}
      </div>

      <Row title={"Upcoming On Netflix"} arr={upcomingMovies} />
      <Row title={"Now Playing On Netflix"} arr={nowplayingMovies} />
      <Row title={"TopRated On Netflix"} arr={topratedMovies} />
      <Row title={"Popular On Netflix"} arr={popularMovies} />
    </section>
  );
};

export default Home;
