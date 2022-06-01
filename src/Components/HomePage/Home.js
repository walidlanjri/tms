import Card from "../../cards/Card";
import SmallCard from "../../cards/SmallCard";
const Home = () => {
    return ( 
        <div className="home">
            <h2>Bienvenue Walid</h2>
                <div className="row">
                    <div className="column">
                        <Card/>
                    </div>
                    <div className="column">
                        <SmallCard/>
                        <SmallCard/>
                    </div>
                    <div className="column">
                        <Card/>
                    </div>
                    <div className="column">
                        <SmallCard/>
                        <SmallCard/>
                    </div>
                    <div className="column">
                        <SmallCard/>
                        <SmallCard/>
                    </div>
                    <div className="column">
                        <SmallCard/>
                        <SmallCard/>
                    </div>
                    
                </div>

                
                {/* <Card/> */}
        </div>
     );
}
 
export default Home;