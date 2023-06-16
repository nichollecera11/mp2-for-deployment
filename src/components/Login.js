import React from 'react';
import profile from './tablecomponents/imgjs/profile.jpg';
import email from './tablecomponents/imgjs/email.png';
import pass from './tablecomponents/imgjs/passwordicon.png';
import './Login.css';
import { Box, Divider, Button, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
// import React, { useState } from 'react';


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


function Login() {
    // This is for Modal 1
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // This is for Modal 2
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

//     const [errors, setErrors] = useState("");
// }

//     const validateForm = () => {
//         if (formState.formEmail && formState.formPassword) {
//             setErrors("");
//         }
//         else {
//             let errorFields = [];
//             for (const [key, value] of Object.entries(formState)) {
//                 if (!value) {
//                     errorFields.push(key)
//                 }
//             }
//             setErrors(errorFields.join(", "));
//       return false;
//     }
//   };


  return (
  <div className='main1'>
      <div className='sub-main1'>
          <div>
              <div className='imgs1'>
              <div className='container-image1'>
                  <img src={profile} alt="profile" className="profile1"/>
              </div>
              </div>
          <div>
              <h1>Login</h1>
              <div>
                  <img src={email} alt="email" className="email1"/>
                  <input type="text" placeholder="Email" className="name1"/>
              </div>
              <div className='second-input1'>
                  <img src={pass} alt="pass" className="email1"/>
                  <input type="password" placeholder="Password" className="name1"/>
                      </div>
                      {/* <div>
                          <IconButton aria-label="fingerprint" color="secondary">
                        <Fingerprint />
                        </IconButton>
                      </div> */}
                      <Box className='button2'>
                            <Button onClick={handleOpen} variant="contained" color="success" endIcon={<Fingerprint />}>Log in</Button>
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                              >
                                <Box sx={style}>
                                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                    Logging in
                                </Typography>
                                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                    Redirecting to your account...
                                </Typography>
                                      </Box>
                            </Modal>
                      </Box>
                      <Box className='link1'>
                            <Button onClick={handleOpen1} variant="contained" color="error" endIcon={<SendIcon />}>Forgot Password?</Button>
                            <Modal
                                keepMounted
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                    Forgot Password?
                                </Typography>
                                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                                    Relax and try to remember your password. 
                                </Typography>
                                </Box>
                          </Modal>
                        </Box>
            </div>
            </div>
          </div>
        </div>
      );
  }

  export default Login;

