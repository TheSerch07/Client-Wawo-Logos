import Header from './Header';
import CreateLogo from './CreateLogo';
import Tutorial from './Tutorial';
import TutorialTwo from './TutorialTwo';
import TutorialThree from './TutorialThree';
import Examples from './Examples';
import Obtains from './Obtains';
import CallToAction from './CallToAction';
import Footer from './Footer';
// import { useHistory } from "react-router-dom";
function Home() {

    // console.log({"loquetrae": useHistory})
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