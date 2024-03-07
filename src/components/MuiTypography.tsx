import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <>
        <div>MuiTypography</div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>
        <Typography variant='body1'>Body 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ut, id animi ipsa veritatis magni cumque, ad, obcaecati saepe velit fugit. Et pariatur asperiores minus, dolore culpa deleniti facere. Quos?</Typography>
        <Typography variant='body2'>Body 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos voluptatibus accusamus quos eaque quibusdam, corrupti molestias enim, recusandae fuga illum eum distinctio ex voluptate hic sapiente esse nihil necessitatibus.</Typography>
    </>
    )
}

export default MuiTypography