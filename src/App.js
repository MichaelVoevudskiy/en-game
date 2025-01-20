import './App.css';
import CardFlip from './component/CardFlip';
import React from 'react';

import { useState, useEffect } from 'react';

import Cat from './CardImg/Cat.png'
import Chicken from './CardImg/Chicken.png'
import Dog from './CardImg/Dog.png'
import Goat from './CardImg/Goat.png'
import Hamster from './CardImg/Hamster.png'
import Parrot from './CardImg/Parrot.png'
import Rooster from './CardImg/Rooster.png'
import Turkey from './CardImg/Turkey.png'

import Jellyfish from './CardImg/Jellyfish.png'
import Octopus from './CardImg/Octopus.png'
import Raccoon from './CardImg/Raccoon.png'
import Rhinoceros from './CardImg/Rhinoceros.png'
import Squirrel from './CardImg/Squirrel.png'
import Stingray from './CardImg/Stingray.png'
import Tiger from './CardImg/Tiger.png'
import Whale from './CardImg/Whale.png'



// let anim1 = [
//   { id: 0, who: Cat, status: false},
//   { id: 1, who: Chicken, status: false },
//   { id: 2, who: Dog, status: false },
//   { id: 3, who: Goat, status: false },
//   { id: 4, who: Hamster, status: false },
//   { id: 5, who: Parrot, status: false },
//   { id: 6, who: Rooster, status: false },
//   { id: 7, who: Turkey, status: false },
//   { id: 8, who: Jellyfish, status: false },
//   { id: 9, who: Octopus, status: false },
//   { id: 10, who: Raccoon, status: false },
//   { id: 11, who: Rhinoceros, status: false },
//   { id: 12, who: Squirrel, status: false },
//   { id: 13, who: Stingray, status: false },
//   { id: 14, who: Tiger, status: false },
//   { id: 15, who: Whale, status: false },
// ]


let anim1 = [
  { id: 0, who: Cat, status: false, found: false },
  { id: 1, who: Chicken, status: false, found: false  },
  { id: 2, who: Dog, status: false, found: false  },
  { id: 3, who: Goat, status: false, found: false  },
  { id: 4, who: Hamster, status: false, found: false  },
  { id: 5, who: Parrot, status: false, found: false  },
  { id: 6, who: Rooster, status: false, found: false  },
  { id: 7, who: Turkey, status: false, found: false  },
  { id: 8, who: Jellyfish, status: false, found: false  },
  { id: 9, who: Octopus, status: false, found: false  },
  { id: 10, who: Raccoon, status: false, found: false  },
  { id: 11, who: Rhinoceros, status: false, found: false  },
  { id: 12, who: Squirrel, status: false, found: false  },
  { id: 13, who: Stingray, status: false, found: false  },
  { id: 14, who: Tiger, status: false, found: false  },
  { id: 15, who: Whale, status: false, found: false  },
]




function App() {
  const [list, setList] = React.useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [Select, setSelect] = useState();
  // const [found, setFound] = useState([]);


  useEffect(() => {
    getRandomValues();
  }, []);

  function getRandomValues() {
    const randomElements = [];
    const copyArray = [...anim1];

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      randomElements.push(copyArray[randomIndex]);
      copyArray.splice(randomIndex, 1);  // Удаляем выбранный элемент
    }

    // Дублируем элементы
    const doubledArray = [...randomElements, ...randomElements];

    // Перемешиваем итоговый массив
    const shuffledArray = doubledArray.sort(() => Math.random() - 0.5);

    setList(shuffledArray);
  }


  // Функция для изменения всех status: true на status: false
  const deactivateAllAnimals = () => {

    const animals = [...list];
    const updatedAnim1 = animals.map(animal => ({
      ...animal,
      status: false
    }));

    setList(updatedAnim1);

    
  };


  const SelectedItems = (id) => {
    const animals = [...list];

    if (Select === id) {
      
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].id === id) {
          animals[i].found = true;
        }
      }
      setList(animals);

    }

    else setSelect(id);

  }



  let card = list.map((e, index) => (
    <CardFlip key={index} index={index} id={e.id} who={e.who} status={e.status} found={e.found}
      setList={setList} list={list} clickCount={clickCount} setClickCount={setClickCount}
      deactivateAllAnimals={deactivateAllAnimals} SelectedItems={SelectedItems}
      setSelect={setSelect} Select={Select} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="plate">{card}</div>
      </header>
    </div>
  );
}

export default App;