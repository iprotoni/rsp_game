import rockImage from '../../images/rock.png';
import papperImage from '../../images/papper.png';
import scirImage from '../../images/sciss.png';


export const getStatus = (stausNum: number | undefined) => {
  switch (stausNum) {
    case 0:
      return "Win 🤑"
    
    case 1:
      return "Lose 💩"

    case 2:
      return "Draw 😐"  

    default:
      return "Waiting for a move ✌️"
  }
};


export const getChoice = (choiceNumber: number | undefined) => {
  switch (choiceNumber) {
    case 1:
      return {
        name: "Rock",
        image: rockImage 
      } 
  
    case 2:
      return {
        name: "Scissors",
        image: scirImage  
      } 

    case 3:
      return {
        name: "Paper",
        image: papperImage  
      } 
    }

};