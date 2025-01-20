import './App.css';
import CardFlip from './component/CardFlip';
import React from 'react';

import { useState, useEffect } from 'react';

import Cat from './CardImg/Cat.png';
import Chicken from './CardImg/Chicken.png';
import Dog from './CardImg/Dog.png';
import Goat from './CardImg/Goat.png';
import Hamster from './CardImg/Hamster.png';
import Parrot from './CardImg/Parrot.png';
import Rooster from './CardImg/Rooster.png';
import Turkey from './CardImg/Turkey.png';
import Jellyfish from './CardImg/Jellyfish.png';
import Octopus from './CardImg/Octopus.png';
import Raccoon from './CardImg/Raccoon.png';
import Rhinoceros from './CardImg/Rhinoceros.png';
import Squirrel from './CardImg/Squirrel.png';
import Stingray from './CardImg/Stingray.png';
import Tiger from './CardImg/Tiger.png';
import Whale from './CardImg/Whale.png';

import sdCat from './CardSd/Cat.mp3';
import sdChicken from './CardSd/Chicken.mp3';
import sdDog from './CardSd/Dog.mp3';
import sdGoat from './CardSd/Goat.mp3';
import sdHamster from './CardSd/Hamster.mp3';
import sdParrot from './CardSd/Parrot.mp3';
import sdRooster from './CardSd/Rooster.mp3';
import sdTurkey from './CardSd/Turkey.mp3';
import sdJellyfish from './CardSd/Jellyfish.mp3';
import sdOctopus from './CardSd/Octopus.mp3';
import sdRaccoon from './CardSd/Raccoon.mp3';
import sdRhinoceros from './CardSd/Rhinoceros.mp3';
import sdSquirrel from './CardSd/Squirrel.mp3';
import sdStingray from './CardSd/Stingray.mp3';
import sdTiger from './CardSd/Tiger.mp3';
import sdWhale from './CardSd/Whale.mp3';

import sdSuccess from './CardSd/Success.wav'; // Добавляем звук для правильного ответа
// import sdFail from './CardSd/Fail.wav'; // Добавляем звук для ошибки



let anim1 = [
  { id: 0, who: Cat, status: false, found: false, sound: sdCat },
  { id: 1, who: Chicken, status: false, found: false, sound: sdChicken },
  { id: 2, who: Dog, status: false, found: false, sound: sdDog },
  { id: 3, who: Goat, status: false, found: false, sound: sdGoat },
  { id: 4, who: Hamster, status: false, found: false, sound: sdHamster },
  { id: 5, who: Parrot, status: false, found: false, sound: sdParrot },
  { id: 6, who: Rooster, status: false, found: false, sound: sdRooster },
  { id: 7, who: Turkey, status: false, found: false, sound: sdTurkey },
  { id: 8, who: Jellyfish, status: false, found: false, sound: sdJellyfish },
  { id: 9, who: Octopus, status: false, found: false, sound: sdOctopus },
  { id: 10, who: Raccoon, status: false, found: false, sound: sdRaccoon },
  { id: 11, who: Rhinoceros, status: false, found: false, sound: sdRhinoceros },
  { id: 12, who: Squirrel, status: false, found: false, sound: sdSquirrel },
  { id: 13, who: Stingray, status: false, found: false, sound: sdStingray },
  { id: 14, who: Tiger, status: false, found: false, sound: sdTiger },
  { id: 15, who: Whale, status: false, found: false, sound: sdWhale },
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

      setTimeout(() => {
        const audio = new Audio(sdSuccess);
        audio.play();
      }, 1000);

    }

    else {
      setSelect(id);


    }
  }



  let card = list.map((e, index) => (
    <CardFlip key={index} index={index} id={e.id} who={e.who} status={e.status} found={e.found} sound={e.sound}
      setList={setList} list={list} clickCount={clickCount} setClickCount={setClickCount}
      deactivateAllAnimals={deactivateAllAnimals} SelectedItems={SelectedItems}
      setSelect={setSelect} Select={Select} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className='resetgamebt' onClick={getRandomValues}> Restart</div>
        <div className="plate">{card}</div>
      </header>
    </div>
  );
}

export default App;