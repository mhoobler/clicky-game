import React, {Component} from "react";
import GameCard from "./GameCard.js";

class Board extends Component {
    state ={
        characters: [
            "Ana",
            "Ashe",
            "Wrecking-Ball",
            "Baptiste",
            "Bastion",
            "Brigitte",
            "Doomfist",
            "Dva",
            "Genji",
            "Hanzo", 
            "Junkrat",
            "Lucio", 
            "McCree",
            "Mei",   
            "Mercy",
            "Moira",
            "Orisa",
            "Phara",
            "Reaper",
            "Reinhardt",
            "Roadhog", 
            "Soldier",
            "Sombra", 
            "Symmetra",   
            "Torb",
            "Tracer",  
            "Widow",
            "Winston",    
            "Zarya",
            "Zenyatta",
        ],
        clicked: []
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    generateGameCards() {
        var arr = [];
        var randChar = []
        

        for(var i=0; randChar.length < 9; i++) {
            //used for generating unique gameCards
            var rand = this.generateNumber(randChar);
            if(rand === undefined){
                rand = this.generateNumber(randChar);
            } else {
                //tracking currently included gameCards
                console.log(i);
                randChar.push(rand);
            }
        };

        for(var r=0; r<9; r++){
            arr.push(<GameCard key={r} alt={this.state.characters[randChar[r]]} />);
        }
        return arr;
    }

    generateNumber(arr){
        var rand = Math.floor(Math.random() * 30);
        var doesExist = false;

        for(var i=0; i<arr.length; i++){
            if(rand == arr[i]){
                doesExist = true;
            }
        }

        if(!doesExist){
            // console.log(arr);
            // console.log(doesExist);
            // console.log(rand);
            return rand;
        }
    }

    handleClick(event){
        if(event.target.alt){
            //state
            var temp = this.state.clicked;
            //target attr
            var targ = event.target.alt;
            var doesExist = false;
            
            for(var i=0; i<temp.length; i++){
                if(targ == temp[i]){
                    doesExist = true;
                }
            }

            if(!doesExist){
                temp.push(targ);
                this.setState({
                    clicked: temp
                })
            }else{
                temp = []
                this.setState({
                    clicked: temp
                })
            }
        }
    }

    render() {
        return (
            <div> 
                <p>Hello</p>
                <div id="score-card">{this.state.clicked.length}</div>
                <div id="game-container" className="d-flex justify-content-center row w-80" onClick={this.handleClick}>
                {this.generateGameCards()}
                </div>
            </div>
        )
    }
}

export default Board;