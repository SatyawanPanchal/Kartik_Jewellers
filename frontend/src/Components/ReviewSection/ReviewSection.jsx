import { Box } from '@mui/system'
import React from 'react'
import ReviewSectionStyle from './ReviewSection'
import { Typography } from '@mui/material'

const ReviewSection = () => {
  return (
    <Box sx={ReviewSectionStyle.Rcontainer}>
        <Box sx={ReviewSectionStyle.Rwrapper}>
            <Typography variant='h2'>ALL the Happy Reviews</Typography>
            <Box sx={ReviewSectionStyle.RcardsContainer}>
                
            </Box>
        </Box>
    </Box>
  )
}

export default ReviewSection