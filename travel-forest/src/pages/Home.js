import styles from './Home.module.css';

import  { useCollection }  from '../hooks/useCollection';

//Components
import TravelList from './TravelList';

const Home = () => {
  const { documents: travels, isPending, error } = useCollection('travels');

    return (
        <div className={styles.travelAllBox}>
            {/* <h2>Travel Forest Tours</h2> */}

            <div className={styles.travelInBox}>

            {travels && <TravelList allTravels={travels}/>}
            </div>


        </div>
    )
}

export default Home
