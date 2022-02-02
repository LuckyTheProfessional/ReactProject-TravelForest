import styles from './OneTravelInfo.module.css';

const OneTravelInfo = ({travelInfo}) => {

  return (
    <>
    <div className={styles.oneTourHeader} 
    style={{background: `url(${travelInfo.image})`,
    'backgroundSize': 'cover'
    }}>

    <samp className={styles.oneTravelTitle}>
      <samp className={styles.oneTravelTitleOne}>{travelInfo.titleOne.toUpperCase()}</samp>
      <samp className={styles.oneTravelTitleTwo}>{travelInfo.titleTwo.toUpperCase()}</samp>
    </samp>

    <div className={styles.oneTourHeaderInformation}>
      <div>
        <i className="far fa-clock"></i>
        <p>{travelInfo.duration} days</p>
      </div>
      <div>
        <i className="far fa-compass"></i>
        <p>{travelInfo.location}</p>
      </div>
    </div>

    <div className={styles.oneTravelColorBox}></div>
    <div className={styles.oneTravelCutCornerBox}></div>
  </div>

  <div className={styles.oneTravelInformationsBox}>
    <section className={styles.factsAndGuides}>
      <div className={styles.facts}>
        <h4>QUICK FACTS</h4>

        <div className={styles.allTravelFacts}>
          <div className={styles.travelFact}>
            <i className="far fa-calendar-alt"></i>
            <p style={{'fontWeight': '600', 'color': '#777'}}>NEXT DATE</p>
            <p className={styles.lastInfo} style={{fontWeight: '300'}}>{travelInfo.nextDate}</p>
          </div>
          <div className={styles.travelFact}>
            <i className="fas fa-chart-line"></i>
            <p style={{'fontWeight': '600', 'color': '#777'}}>DIFFICULTY</p>
            <p className={styles.lastInfo} style={{fontWeight: '300'}}>{travelInfo.difficulty.toUpperCase()}</p>
          </div>
          <div className={styles.travelFact}>
            <i className="far fa-user"></i>
            <p style={{'fontWeight': '600', 'color': '#777'}}>PARTICIPANTS</p>
            <p className={styles.lastInfo} style={{fontWeight: '300'}}>{travelInfo.people} People</p>
          </div>
          <div className={styles.travelFact}>
            <i className="far fa-star"></i>
            <p style={{'fontWeight': '600', 'color': '#777'}}>RATING</p>
            <p className={styles.lastInfo} style={{fontWeight: '300'}}>{travelInfo.rating} / 5</p>
          </div>
        </div>
      </div>

      <div className={styles.guides}>
        <h4>YOUR TOUR GUIDES</h4>

        <div className={styles.allTravelGuides}>
          {travelInfo.guides.map((guide) => (
            <div className={styles.travelGuide} key={Math.random()}>
              <img src={guide.empPicture} alt="" />
              <p style={{'fontWeight': '600', 'color': '#777'}}>LEAD GUIDE</p>
              <p className={styles.lastInfo} style={{fontWeight: '300'}}>{guide.empName}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className={styles.oneTourAbout}>
      <h2>About { travelInfo.titleOne } { travelInfo.titleTwo }</h2>

      <p> 
        {travelInfo.about}
      </p>
    </section>

  </div>
  </>
  )
};

export default OneTravelInfo;
