import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function CardEL({title , slug , coverPhoto , authors}) {

  return (
    
    <Card sx={{boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px' , borderRadius:4 , minHeight:'500'}}>
        <CardHeader 
        avatar={<Avatar src={authors.avatar.url} sx={{marginLeft:2}}/>}
        title={<Typography component='p' variant='p' color='text.secondary' fontWeight={600}>
            {authors.name}
        </Typography>}
        />
        <CardMedia component='img' height='194' image={coverPhoto.url} alt={slug}/>
        <CardContent component='h3' variant='h6' color='text.primary'>{title}</CardContent>
        <Divider variant='middle' sx={{margin:'10px'}}/>
        <CardActions>
            {/* <Link to={`/blogs/${slug}`} style={{textDecoration:'none' , width:'100%'}}> */}
            <Button variant='outlined' size='small' sx={{width:'100%' , borderRadius:3}}>مطالعه مقاله</Button>
            {/* </Link> */}
        </CardActions>
    </Card>
  )
}

export default CardEL