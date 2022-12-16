import { useState, ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { Items } from './components/Items';

import { levels, LevelsType } from './helpers/imc';
import { calculateImc } from './helpers/CalculateImc';

import { Content, Grid, GridOne, Icon, LeftSide, RightSide } from './styles';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import leftImg from './assets/leftarrow.png';

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<LevelsType | null>(null);

  function handleCalculateButton() {
    if (heightField && weightField) {
      setShowItem(calculateImc(heightField, weightField));
    } else {
      alert("Preencha todos os campos!");
    }
  }

  function handleChangeHeight(event: ChangeEvent<HTMLInputElement>) {
    setHeightField(parseFloat(event.target.value));
  }

  function handleChangeWeight(event: ChangeEvent<HTMLInputElement>) {
    setWeightField(parseFloat(event.target.value));
  }

  function handleBackButton() {
    setShowItem(null);
    setHeightField(0);
    setWeightField(0)
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Header />

        <Content>
          <LeftSide>
            <h1>Calcule o seu IMC.</h1>
            <p>
              IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>

            <input 
              type='number'
              placeholder='Digite sua altura. Ex: 1.5 (em metros)'
              value={heightField > 0 ? heightField : ''}
              onChange={handleChangeHeight}
              disabled={showItem ? true : false}
            />

            <input 
              type='number'
              placeholder='Digite seu peso. Ex: 75.5 (em quilos)'
              value={weightField > 0 ? weightField : ''}
              onChange={handleChangeWeight}
              disabled={showItem ? true : false}
            />

            <button onClick={handleCalculateButton} disabled={showItem ? true : false}>Calcular</button>
          </LeftSide>

          <RightSide>
            {!showItem ?
              <Grid>
                {levels.map(item => {
                  return (
                    <Items key={item.title} item={item} />
                  );
                })}
              </Grid>
              :
              <GridOne>
                <Icon onClick={handleBackButton}>
                  <img src={leftImg} alt='' width='25' />
                </Icon>
                <Items item={showItem} />
              </GridOne>
            }
          </RightSide>
        </Content>

        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
