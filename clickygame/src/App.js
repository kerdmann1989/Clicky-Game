import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import friends from "./friends.json";
import "./App.css";



  //Durstenfeld shuffle to randomize array
 
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}


class App extends Component {
  state = {
    highScore: 0,
    currentScore: 0, 
    rightWrong: "",
    clicked: [],
    friends: [
      {
        "id": 1,
        "name": "Maleficent",
        // "clicked": false,
        "image": "http://www.pinopinion.com/images/topics/t_3031_0.jpg"
      },
      {
        "id": 2,
        "name": "Evil Queen",
        // "clicked": false,
        "image": "https://cdn-images-1.medium.com/max/1200/1*6qwHYZnLhSPyjbyNJVDtvA.jpeg"
      
      },
      {
        "id": 3,
        "name": "Jafar",
        // "clicked": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbj21iyRV2zoC1d_5GDj-3yXFdmC9s4Dc33cyJH7tjCSum1c7"
      },
      {
        "id": 4,
        "name": "Hades",
        // "clicked": false,
        "image": "https://savannaclaudia.files.wordpress.com/2014/09/851822_1318181268681_full.jpg"
      
      },
      {
        "id": 5,
        "name": "Ursula",
        // "clicked": false,
        "image": "http://images4.fanpop.com/image/photos/16200000/Ursula-disney-villains-16283690-280-240.jpg"
      },
      {
        "id": 6,
        "name": "Cruella",
        // "clicked": false,
        "image": "https://vignette.wikia.nocookie.net/disney/images/f/f7/Cruella_car.jpg/revision/latest?cb=20131015001511"
     
      },
      {
        "id": 7,
        "name": "Scar",
        // "clicked": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24pwQIxr0Kd0XM_5bKe_MNQo8-q4h6E8U7C9Xz2wzjxhu2Xie"
      },
      {
        "id": 8,
        "name": "Gaston",
        // "clicked": false,
        "image": "https://i.ytimg.com/vi/CPTmJkGYTsw/maxresdefault.jpg"
    
      },
      {
        "id": 9,
        "name": "Shere Khan",
        // "clicked": false,
        "image": "https://pre00.deviantart.net/e0e0/th/pre/i/2016/160/e/c/sher_khan_by_celestetunstall-da5m4u4.png"
       
      },
      {
        "id": 10,
        "name": "Lady Tremaine",
        // "clicked": false,
        "image": "https://vignette.wikia.nocookie.net/youtubepoop/images/5/53/Cinderella-disneyscreencaps_com-8502.jpg/revision/latest?cb=20170422021358"
      },
      {
        "id": 11,
        "name": "Yzma",
        // "clicked": false,
        "image": "https://sineadflstoddartap.files.wordpress.com/2014/10/1072724_1342008952787_full.jpg"
      },
      {
        "id": 12,
        "name": "Captain Hook",
        // "clicked": false,
        "image": "https://vignette.wikia.nocookie.net/goanimate-v2/images/8/80/CaptainHookDisneyParksBlog.jpg/revision/latest?cb=20180120102735"
      }
    ]
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({rightWrong: "CORRECT"})
      this.setState({ clicked: [...this.state.clicked, id] });
      console.log("CLICKED", this.state.clicked)
      this.handleIncrement();
    } else {
      this.setState({ currentScore: 0 });
      this.setState({ clicked: [] });
      this.handleShuffle();
    };
  };

  // handleClick = event => {
  //   event.preventDefault();
  //   console.log("This is event target", event.target);
  //   this.setState({
  //     clicked: true,
  //     currentScore: this.state.currentScore + 1
  //   })
  // }


  handleShuffle = () => {
    let shuffleFriends = shuffleArray(this.state.friends);
    this.setState({ friends: shuffleFriends });
  };


  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Villains!</Title>
        <p>{this.state.rightWrong}</p>
        <p>{this.state.currentScore}</p>
        <p>{this.state.highScore}</p>
        
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            // handleIncrement={this.handleIncrement}
            // handleShuffle={this.handleShuffle}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
