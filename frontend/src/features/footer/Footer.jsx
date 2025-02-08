import { Box, IconButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'
import { QRCodePng, appStorePng, googlePlayPng ,facebookPng,instagramPng,twitterPng,linkedinPng} from '../../assets'
import SendIcon from '@mui/icons-material/Send';
import { MotionConfig, motion } from 'framer-motion';
import { Link } from 'react-router-dom';



export const Footer = () => {

    const theme=useTheme()
    const is700=useMediaQuery(theme.breakpoints.down(700))

    const labelStyles={
        fontWeight:300,
        cursor:'pointer'
    }

  return (
    <Stack sx={{backgroundColor:theme.palette.primary.main,paddingTop:"3rem",paddingLeft:is700?"1rem":"3rem",paddingRight:is700?"1rem":"3rem",paddingBottom:"1.5rem",rowGap:"5rem",color:theme.palette.primary.light,justifyContent:"space-around"}}>

            {/* upper */}
            <Stack flexDirection={'row'} rowGap={'1rem'} justifyContent={is700?"":'space-around'} flexWrap={'wrap'}>

               

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography variant='h6'>Support</Typography>
                    <Typography sx={labelStyles}>Kallur Thrissur ,Kerala ,India</Typography>
                    <Typography sx={labelStyles}>testmail@gmail.com</Typography>
                    <Typography sx={labelStyles}>9747529344</Typography>
                </Stack>

                

               

                <Stack rowGap={'1rem'} padding={'1rem'}>
                    <Typography  variant='h6'>Follow us on</Typography>
                    
                    <Stack flexDirection={'row'} columnGap={'.5rem'}>

                        

                        <Stack justifyContent={'space-around'}>
                            <Stack>
                               
                            </Stack>
                            <Stack>
                                
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack mt={.6} flexDirection={'row'} columnGap={'2rem'}>
                        <MotionConfig whileHover={{scale:1.1}} whileTap={{scale:1}}>
                            <motion.img style={{cursor:"pointer"}} src={facebookPng} alt="Facebook" />
                            <motion.img style={{cursor:"pointer"}} src={twitterPng} alt="Twitter" />
                            <motion.img style={{cursor:"pointer"}} src={instagramPng} alt="Instagram" />
                            <motion.img style={{cursor:"pointer"}} src={linkedinPng} alt="Linkedin" />
                        </MotionConfig>
                    </Stack>
                </Stack>

            </Stack>

            {/* lower */}
            <Stack alignSelf={"center"}>
                <Typography color={'GrayText'}>&copy; Dessert Dust {new Date().getFullYear()}. All right reserved</Typography>
            </Stack>

    </Stack>
  )
}
