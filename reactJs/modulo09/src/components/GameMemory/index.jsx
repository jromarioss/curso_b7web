import { useEffect, useState } from "react";

import { Button } from "../Button";
import { InfoItem } from "../InfoItem";
import { GridItem } from "../GriItem";

import { items } from "../../data/items";
import { formatTime } from "../../helpers/formatTime";

import ImgLogo from "../../assets/devmemory_logo.png";
import ImgIcon from "../../assets/svg/restart.svg";

import { GameMemoryContainer, Grid, GridArea, Info, InfoArea, LogoLink,  } from "./styles";

/* 
  item: o ícone da carta number
  shown: se está virado ou não boolean
  permanentShow: se acertou, exibe permanente boolean
*/

export function GameMemory() {
  const [playing, setPlaying] = useState(false); // se está jogando
  const [timeElapsed, setTimeElapsed] = useState(0); // tempo do jogo
  const [moveCount, setMoveCount] = useState(0); // total de movimento
  const [showCount, setShowCount] = useState(0); // mostrar quantos está virado
  const [gridItems, setGridItems] = useState([]); // array de grid de items

  function handleResetGame() { // função de reseta o grid
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    
    createGrid()
  }

  function handleItemClick(index) {
    // está rolando partida, o index é diferente de nulo, o showCount é menor que 2 se ja exibe 2 cartas
    if (playing && index !== null && showCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].permanentShow === false && tmpGrid[index].show === false) {
        tmpGrid[index].show = true;
        setShowCount(state => state + 1)
      }

      setGridItems(tmpGrid)
    }
  }
  
  function createGrid() { // função de cria o grid
    let tmpGrid = []; // grid temporário
    let totalOfItems = items.length ; // total de item

    for (let i = 0; i < (totalOfItems * 2); i++) { // criando o grid
      tmpGrid.push({
        item: null, show: false, permanentShow: false
      })
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < totalOfItems; j++) {
        let position = -1; // 0 já é um posição do grid

        // verificação se a posição é menor que zero, e se a posição do item é nulo
        while (position < 0 || tmpGrid[position].item !== null) {
          position = Math.floor(Math.random() * (totalOfItems * 2)); // gera a posição de número aleatórios
        }

        tmpGrid[position].item = j; // preenche a posição
      }
    }

    setGridItems(tmpGrid);
    setPlaying(true);
  }

  useEffect(() => {
    handleResetGame()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(state => {
          return state + 1
        })
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [timeElapsed, playing])

  useEffect(() => {
    if (showCount === 2) { // se tem 2 carta aberta
      let opened = gridItems.filter(item => item.show === true); // pega so a carta virada

      if (opened.length === 2) { // se tem 2 carta virada
        if (opened[0].item === opened[1].item) { // se são igual os dois nome
          let tmpGrid = [...gridItems]; // copia o grid

          for (let i in tmpGrid) {
            if (tmpGrid[i].show) {
              tmpGrid[i].permanentShow = true;
              tmpGrid[i].show = false;
            }
          }
          setGridItems(tmpGrid)
          setShowCount(0)
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems]; // copia o grid
            for (let i in tmpGrid) {
              tmpGrid[i].show = false;
            }
  
            setGridItems(tmpGrid)
            setShowCount(0)
          }, 1500);
        }
       
        setMoveCount(state => {
          return state + 1
        })
      }
    }
  }, [showCount, gridItems])

  useEffect(() => {
    const allItemShow = gridItems.every(item => item.permanentShow === true)

    if (moveCount > 0 && allItemShow) {
      setPlaying(false);
    }
  }, [moveCount, gridItems])

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

        <Button label="Reiniciar" icon={ImgIcon} onClickReset={handleResetGame} />
      </Info>

      <GridArea>
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
      </GridArea>
    </GameMemoryContainer>
  )
}