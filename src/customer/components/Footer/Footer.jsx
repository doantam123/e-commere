import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5'
                        variant='h6'>
                        Company
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Job</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5'
                        variant='h6'>
                        About us
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Contact</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Collaborate</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Work</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Transport</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5'
                        variant='h6'>
                        Production
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Product</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Category</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Survey</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Brand</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5'
                        variant='h6'>
                        Policy
                    </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>Logo</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterBottom>VIP</Button>
                    </div>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" className='pt-6'>
                    Make by Huynh Doan Tam
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer