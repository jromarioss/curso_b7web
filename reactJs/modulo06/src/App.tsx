import { useEffect, useState } from 'react';

import { items } from './data/items';

import { Container, Info, GridArea, LogoLink, InfoArea, Grid } from './styles';

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

import logoImg from './assets/devmemory.png';
import restartImg from './assets/restart.svg';
import { formatTime } from './helpers/formatTime';

export interface GridItemType {
  item: number | null;
  shown: boolean;
  permanentShown: boolean;
}

export function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);

      if (opened.length === 2) {
        

        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];

          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];

            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1500)
        }

        setMoveCount(state => state + 1);
      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    const finishedGame = gridItems.every(item => item.permanentShown === true);
    
    if (moveCount > 0 && finishedGame) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  function resetAndCreateGrid() {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < items.length; j++) {

        let position = -1;
        while (position < 0 || tmpGrid[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }

        tmpGrid[position].item = j;
      }
    }

    setGridItems(tmpGrid);
    
    setPlaying(true);
  }

  function handleItemClick(index: number) {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(state => state + 1);
      }

      setGridItems(tmpGrid);
    }
  }

  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logoImg} alt='' width='200' />
        </LogoLink>

        <InfoArea>
          <InfoItem label='Time' value={formatTime(timeElapsed)} />
          <InfoItem label='Movements' value={moveCount.toString()} />
        </InfoArea>

        <Button label='Restart' icon={restartImg} onClick={resetAndCreateGrid} />
      </Info>

      <GridArea>
        <Grid>
          {gridItems.map((item, index) => {
            return (
              <GridItem key={index} item={item} onHandleItemClick={() => handleItemClick(index)} />
            )
          })}
        </Grid>
      </GridArea>
    </Container>
  );
}
