import { Box, Divider, Button, Typography } from '@mui/material'
import React from 'react'
import ModalForm from './ModalForm';
import { RotatingText } from 'rotating-text';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Margin } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Register() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box className='register-section'>
      <RotatingText className="rotating-text2"
        text="Register"
        stagger={0.1}
        timing={0.5}>
      </RotatingText>
      <Divider></Divider>
      

        <Box className='register-section'>
        <ModalForm className='modalForm-section'></ModalForm>
      </Box>
      <div className='register-box'>
      <Button onClick={handleOpen} variant="contained" endIcon={<SendIcon />}>Register</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            You have registered succesfully
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Redirecting to your account...
          </Typography>
        </Box>
      </Modal>
    </div>
      
    </Box>
  )
}

export default Register;