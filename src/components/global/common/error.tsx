import React,{ ReactElement} from 'react'
import {
    Text,
    getTheme, FontWeights
  } from 'office-ui-fabric-react';
interface Props {
    error:any
}

function error({error}: Props): ReactElement {
    const theme = getTheme();
    return (
       <Text variant="medium" styles={{ root: { color: theme.palette.red, fontWeight: FontWeights.bold } }}>
         {error}
      </Text>
    )
}

export default error
