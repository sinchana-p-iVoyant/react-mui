import React from 'react'
import { Stack, Button, IconButton } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';

const MuiButtons = () => {
  return (
    <>
      <div>MuiButtons</div>
      
      <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
          <Button variant='text' color='secondary' href="https://google.com">Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined' color='secondary'>Outlined</Button>
        </Stack>

        <Stack spacing={4} direction='row'>
          <Button variant='contained' color='primary'>Primary</Button>
          <Button variant='contained' color='secondary'>Secondary</Button>
          <Button variant='contained' color='error'>Error</Button>
          <Button variant='contained' color='warning'>Warning</Button>
          <Button variant='contained' color='info'>Info</Button>
          <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} display='block' direction='row'>
          <Button variant='contained' color='success' size='small'>Small</Button>
          <Button variant='contained' color='success' size='medium'>Medium</Button>
          <Button variant='contained' color='success' size='large'>Large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' startIcon={<ShareIcon />}>Send</Button>
          <Button variant='contained' endIcon={<ShareIcon />}>Send</Button>
          <IconButton color='success' size='small'>
            <ShareIcon/>
          </IconButton>
        </Stack>

      </Stack>

    </>
  )
}

export default MuiButtons