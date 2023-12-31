import css from './Details.module.css';

const DetailsCard = ({ details }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    details;

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const userScore = Math.ceil(vote_average * 10);

  let releaseYear = '';
  let genresString = '';

  if (release_date) {
    releaseYear = release_date.substring(0, 4);
  }
  if (genres) {
    genresString = genres.map(genre => genre.name).join('  ');
  }

  return (
    <div className={css.cardWraper}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          className={css.posterImage}
          alt={title}
          width="320px"
          height="480px"
        />
      </div>
      <div className={css.description}>
        <section>
          <h2>
            {title}({releaseYear})
          </h2>
          <p>User score {userScore}%</p>
        </section>
        <section>
          <h3>Overview</h3>
          <p className={css.overviewText}>{overview}</p>
        </section>
        <section>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </section>
      </div>
    </div>
  );
};
export default DetailsCard;
