import React, { Component } from 'react';
import NamesList from './namesList';
import SuperHeroTable from './superHeroTable';
import IceCream from './iceCream';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Adam', 'Alex', 'Luis', 'Mitch', 'Todd'],
            heroes: [
                {id: '1', superHeroName: 'Spider-Man', primaryAbility: 'Super strength and agility', secondaryAbility: 'Spider sense'},
                {id: '2', superHeroName: 'Nightcrawler', primaryAbility: 'Teleportation', secondaryAbility: 'Super agility'},
                {id: '3', superHeroName: 'Gambit', primaryAbility: 'Kinetic energy manipulation', secondaryAbility: 'Card throwing'},
                {id: '4', superHeroName: 'Thor', primaryAbility: 'Super Strength', secondaryAbility: 'Flight'}
            ]
        };

        this.deleteHero = this.deleteHero.bind(this)

    }

    addNewFlavor(){
        this.flavors.push();
        this.setState({

        });
    }

    deleteHero(id){
         let filteredHeroes = this.state.heroes.filter(hero =>{
             if(hero.id !== id ){
                 return true;
             } else {
                 return false;
             }
        });
        this.setState({
            heroes: filteredHeroes
        })

    }

    render() {
        return (
            <div>
                <h1>Our React App Using a Component</h1>
                <NamesList names={this.state.names}/>
                <SuperHeroTable heroes={this.state.heroes} deleteHero={this.deleteHero}/>
            </div>
            
        );
    }
}

export default App;
