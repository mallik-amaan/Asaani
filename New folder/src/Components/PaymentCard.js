import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import visacard from '../visacard1.svg';
import mastercard from '../mastercard.svg';
import paypal from '../paypal.svg';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from './chips';


export default function UserCard({cardtype, paddingtopprop, cardno}) {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
        paddingTop: paddingtopprop,
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <AspectRatio flex ratio="16/9" sx={{ minWidth: 100 }}>
          <img
            src={cardtype === 'visa' ? visacard : cardtype === 'master' ? mastercard : cardtype === 'paypal' ? paypal : 'cardtype not found'}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {cardtype === 'visa' ? '#### #### #### ####' : cardtype === 'master' ? '#### #### #### ####' : cardtype === 'paypal' ? "#### #### #### ####" : 'cardtype not found'}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Senior Journalist
          </Typography>
          {/* <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Articles
              </Typography>
              <Typography fontWeight="lg">34</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Followers
              </Typography>
              <Typography fontWeight="lg">980</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Rating
              </Typography>
              <Typography fontWeight="lg">8.9</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box> */}
        </CardContent>
        <Chip label="Set Default" variant="outlined" color="primary" size="small" onClick={()=>{
            alert('Default card set');
        }}/>
        <IconButton aria-label="delete" color='error' sx={{padding:0}}>
            <DeleteIcon />
        </IconButton>
      </Card>
    </Box>
  );
}
