import React, {Component} from "react";
import AnaPic from "./ow-pics/Ana.png";
import AshePic from "./ow-pics/Ashe.png";
import BallPic from "./ow-pics/Ball.png";
import BapPic from "./ow-pics/Bap.png";
import BastionPic from "./ow-pics/Bastion.png";
import BrigPic from "./ow-pics/Brig.png";
import DoomPic from "./ow-pics/Doomfist.png";
import DvaPic from "./ow-pics/Dva.png";
import GenjiPic from "./ow-pics/Genji.png";
import HanzoPic from "./ow-pics/Hanzo.png";
import JunkratPic from "./ow-pics/Junkrat.png";
import LucioPic from "./ow-pics/Lucio.png";
import McCreePic from "./ow-pics/McCree.png";
import MeiPic from "./ow-pics/Mei.png";
import MercyPic from "./ow-pics/Mercy.png";
import MoiraPic from "./ow-pics/Moira.png";
import OrisaPic from "./ow-pics/Orisa.png";
import PharaPic from "./ow-pics/Phara.png";
import ReaperPic from "./ow-pics/Reaper.png";
import ReinPic from "./ow-pics/Rein.png";
import RoadPic from "./ow-pics/Roadhog.png";
import SoldierPic from "./ow-pics/Soldier.png";
import SombraPic from "./ow-pics/Sombra.png";
import SymmPic from "./ow-pics/Symm.png";
import TorbPic from "./ow-pics/Torb.png";
import TracerPic from "./ow-pics/Tracer.png";
import WidowPic from "./ow-pics/Widow.png";
import WinstonPic from "./ow-pics/Winston.png";
import ZaryaPic from "./ow-pics/Zarya.png";
import ZenPic from "./ow-pics/Zen.png";

class GameCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            alt: this.props.alt
        }
    }

    getImage() {
        switch(this.props.alt){
            case "Ana":
                return AnaPic;
            case "Ashe":
                return AshePic;
            case "Wrecking-Ball":
                return BallPic;
            case "Baptiste":
                return BapPic;
            case "Bastion":
                return BastionPic;
            case "Brigitte":
                return BrigPic;
            case "Doomfist":
                return DoomPic;
            case "Dva":
                return DvaPic;
            case "Genji":
                return GenjiPic;
            case "Hanzo":
                return HanzoPic;
            case "Junkrat":
                return JunkratPic;
            case "Lucio":
                return LucioPic;
            case "McCree":
                return McCreePic;
            case "Mei":
                return MeiPic;
            case "Mercy":
                return MercyPic;
            case "Moira":
                return MoiraPic;
            case "Orisa":
                return OrisaPic;
            case "Phara":
                return PharaPic;
            case "Reaper":
                return ReaperPic;
            case "Reinhardt":
                return ReinPic;
            case "Roadhog":
                return RoadPic;
            case "Soldier":
                return SoldierPic;
            case "Sombra":
                return SombraPic;
            case "Symmetra":
                return SymmPic;
            case "Torb":
                return TorbPic;
            case "Tracer":
                return TracerPic;
            case "Widow":
                return WidowPic;
            case "Winston":
                return WinstonPic;
            case "Zarya":
                return ZaryaPic;
            case "Zenyatta":
                return ZenPic;
            default:
                console.log("error");
        }
    }

    render(){
        return (
            <div className="col-md-4">
                <img src={this.getImage()} alt={this.props.alt}></img>
            </div>
        )
    }
}

export default GameCard;