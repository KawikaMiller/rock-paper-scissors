import React from "react";

import { Container } from "@mui/material";

import RockIcon from '../../assets/images/icon-rock.svg';
import PaperIcon from '../../assets/images/icon-paper.svg'
import ScissorsIcon from '../../assets/images/icon-scissors.svg'
import Option from "../Option";

function PlayerChoices (){

  return(
    <Container sx={{}} id='player-choices'>
      <Option name='rock' icon={RockIcon} />
      <Option name='scissors' icon={ScissorsIcon} />
      <Option name='paper' icon={PaperIcon} />
    </Container>
  )

}

export default PlayerChoices;