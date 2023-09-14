import { useEffect, useState } from "react";

import { Button } from "../Button";
import { InfoItem } from "../InfoItem";
import { GridItem } from "../GriItem";

import { items } from "../../data/items";
import { formatTime } from "../../helpers/formatTime";

import ImgLogo from "../../assets/devmemory_logo.png";
import ImgIcon from "../../assets/svg/restart.svg";

import { GameMemoryContainer, Grid, GridArea, Info, InfoArea, LogoLink, GameOver } from "./styles";

export const GameMemory = () => {
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [gridItems, setGridItems] = useState([]);

  const handleResetGame = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    
    handleCreateGrid();
  }

  const handleItemClick = (index) => {
    if (playing && index !== null && showCount < 2) {
      let tempGrid = [...gridItems];

      if (!tempGrid[index].permanentShown && !tempGrid[index].shown) {
        tempGrid[index].shown = true;

        setShowCount(state => state + 1);
      }

      setGridItems(tempGrid);
    }
  }

  const handleCreateGrid = () => {
    let tempGrid = [];
    let totalOfItems = items.length;

    for (let i = 0; i < (totalOfItems * 2); i++) {
      tempGrid.push({
        item: null, shown: false, permanentShown: false
      })
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < totalOfItems; j++) {
        let position = -1;

        while (position < 0 || tempGrid[position].item !== null) {
          position = Math.floor(Math.random() * (totalOfItems * 2));
        }
        
        tempGrid[position].item = j;
      }
    }

    setGridItems(tempGrid);
    setPlaying(true);
  }

  const verifyItem = () => {
    if (showCount === 2) { // se tem 2 carta aberta
      let opened = gridItems.filter(item => item.shown === true); // pega so a carta virada

      if (opened.length === 2) { // se tem 2 carta virada
        if (opened[0].item === opened[1].item) { // se são igual os dois nome
          let tempGrid = [...gridItems];

          for (let i in tempGrid) {
            if (tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItems(tempGrid)
          setShowCount(0)
        } else {
          setTimeout(() => {
            let tempGrid = [...gridItems];
            for (let i in tempGrid) {
              tempGrid[i].shown = false;
            }

            setGridItems(tempGrid)
            setShowCount(0)
          }, 1000);
        }

        setMoveCount(state => state + 1)
      }
    }
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(state => state + 1);
        verifyItem();
      }
    }, 1000);

    const allItemShow = gridItems.every(item => item.permanentShown === true);

    if (moveCount > 0 && allItemShow) {
      setPlaying(false);
      setGameOver(true);
    }

    return () => {
      clearInterval(timer)
    }
  }, [timeElapsed, playing, moveCount, gridItems])

  return (
    <GameMemoryContainer>
      <Info>
        <LogoLink>
          <img src={ImgLogo} width={200} alt="" />
        </LogoLink>
        
        <InfoArea>
          <InfoItem label="Tempo" value={formatTime(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount} />
        </InfoArea>

        {!playing ? 
          <Button label="Iniciar" onClickReset={handleCreateGrid} />
          :  
          <Button label="Reiniciar" icon={ImgIcon} onClickReset={handleResetGame} />
        }
      </Info>

      <GridArea>
        {!playing ?
          <h2>Clique para iniciar</h2>
          :
          <Grid>
            {gridItems.map((item, index) => {
              return (
                <GridItem
                  key={index}
                  item={item}
                  onItemClick={() => handleItemClick(index)}
                />
              )
            })}
          </Grid>
        }
        {gameOver && 
          <GameOver>
            <p>Game Finalizado...</p>
          </GameOver>
        }
      </GridArea>
    </GameMemoryContainer>
  )
}