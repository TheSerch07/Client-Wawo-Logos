import Header from './Header';
import CreateLogo from './CreateLogo';
import Tutorial from './Tutorial';
import TutorialTwo from './TutorialTwo';
import TutorialThree from './TutorialThree';
import Examples from './Examples';
import Obtains from './Obtains';
import CallToAction from './CallToAction';
import Footer from './Footer';

function Home() {
    return (
        <div>
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