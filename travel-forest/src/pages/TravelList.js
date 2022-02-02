import styles from './Home.module.css';
import styles2 from './TravelList.module.css';

import { Link } from 'react-router-dom'

const TravelList = ({allTravels}) => {
  
  if (allTravels.length === 0) {
    return (
      <div>No travels yet</div>
    )
  }

  
  return (
    <>
    {allTravels.map((travel) => (
      <div className={styles.oneTravel} key={travel.id}>

      <div className={styles.travelImage}>
        <img src={travel.image} alt="" />
        <div></div>
      </div>

      <div className={styles.travelTitle}>
        <samp className={styles.titleOne}>{travel.titleOne}</samp>
        <samp className={styles.titleTwo}>{travel.titleTwo}</samp>
      </div>

      <div className={styles.aboutTravel}>{travel.about.substring(150, 'length')}...</div>

      <div className={styles.locationAndPeople}>
        <div className={styles.location}>
          <i className="far fa-compass"></i>
          <div>{travel.location}</div>
        </div>

        <div className={styles.people}>
          <i className="far fa-user"></i>
          <div>{travel.people}</div>
        </div>
      </div>

      <button>
        <Link to={`travels/${travel.id}`}>
        Details
        </Link>
      </button>

    </div>
    ))}
    </>
  )
};

export default TravelList;
