import Header from './Header';
import CreateLogo from './CreateLogo';
import Tutorial from './Tutorial';
import TutorialTwo from './TutorialTwo';
import TutorialThree from './TutorialThree';
import Examples from './Examples';
import Obtains from './Obtains';
import CallToAction from './CallToAction';
import Footer from './Footer';
import styles from "../styles/Home.module.css"

function Home() {
    return (
        <div className={styles.mainHome}>
            <Header useStyle={true}/>
            <CreateLogo />
            <Tutorial />
            <TutorialTwo />
            <TutorialThree />
            <Examples />
            <Obtains />
            <CallToAction />
            <Footer />     
        </div>
    )
}

export default Home