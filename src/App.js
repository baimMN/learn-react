/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ICE_CREAM from './assets/ice_cream.svg';
import BURGER from './assets/burger.svg';
import COOKING_CHEF from './assets/cooking_chef.svg';
import ORDER_NOW from './assets/order_now.svg';
import HoverComp from './components/hover_image';
// import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';
import './App.scss';

function Copyright() {
  return (
    // <Typography variant="body2" color="white" align="center">
    <div>
      {'Copyright © '}
      ristcake.com {' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
    // </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     padding: theme.spacing(8, 0, 6),
//     overflow: 'hidden',
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//     minHeight: '300px',
//     // top: '0px',
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   root: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: 'transparent',
//     padding: theme.spacing(6),
//   },
// }));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [];
const useProgressiveImage = src => {  
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded; 
};
export default function App() {
  // const classes = useStyles();
  // const src = useProgressiveImage('./assets/bg-header.png');
  // const [src, setSrc] = useState();
  // const imageLoader = new Image(200, 200);
  // imageLoader.src = src;
  // console.log('JALAN NIHHH');
  // imageLoader.onload = () => {
  //   console.log('LOAD IMAGE');
  //   setSrc('./assets/bg-header.png');
  // };
  // useEffect(() => {
  // }, []);
  // console.log(src,'HAHHAHAHAHAH');
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='top-header'>
        {/* <div className='font-top-header'>Rist Cake</div> */}
        <div className='font-top-header'>Your Brand</div>
      </div>
      {/* <main> */}
      <div className='canvas'></div>
      {/* Hero unit */}
      {/* <Container className='container-header'> */}
      <Grid container className='container-header' justify='center'  alignContent='flex-start'>
        <Grid item md={5} sm={12} className='font-banner'>
          {/* <div>Kue Kering dan basah home-made dengan kualitas tinggi</div> */}
          <div style={{textAlign: 'start'}}>Your content goes here Your content goes here Your content goes here</div>
        </Grid>
        {/* <Grid style={{ height: '100%' }} item></Grid> */}
        <Grid item md={4} sm={6}>
          <img className='image-content' alt='asdasdasd' src={ICE_CREAM} />
        </Grid>
        <Grid item md={3} sm={6}>
          <img className='image-content-2' alt='asdasdasd' src={BURGER} />
        </Grid>
      </Grid>
      <Grid container className='container-header' justify='center'>
        <div className='bg-tentang-kami'>.</div>
        <Grid container className='content-1 testgan' alignContent='flex-start' alignItems='flex-start'>
          <Grid item xs={1}></Grid>
          <Grid item xs={6} className='tentang-kami-container'>
            <div className='font-tentang-kami'>Tentangs Kami</div>
            <div className='content-tentang-kami'>Tentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangsKamiTentangsKamiTentangsKamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs Kami</div>
          </Grid>
          <Grid item><img className='image-cooking-chef' alt='asdasdasd' src={COOKING_CHEF} /></Grid>
        </Grid>
        <Grid item>
          {/* <img className='image-content' alt='asdasdasd' src={ICE_CREAM} /> */}
          <div className='bg-2'>.</div>
        </Grid>          
        <Grid container alignContent='center' justify='center' alignItems='center' className='container-image-gallery-text'>
          <div className='font-tentang-kami'>Koleksi Kami</div>
        </Grid>
        <Grid container alignContent='center' justify='center' alignItems='center' className='container-image-gallery'>
          {/* <Grid item xs> */}
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {[1,1,1,1,1,1,1,1,1].map((d, i) => (
              <HoverComp
                className='image-hover-config'
                title='test'
                keyImage={i}
                subtitle='hahahahha'
                imageSrc={ORDER_NOW}
              />
            ))}
          </Masonry>
          {/* </Grid> */}
        </Grid>
        <Grid container className='content-1 testgan' alignContent='flex-start' alignItems='flex-start'>
          <Grid item xs={1}></Grid>
          <Grid item><img className='image-order-now' alt='asdasdasd' src={ORDER_NOW} /></Grid>
          <Grid item xs={6} className='testgan'>
            <div className='font-tentang-kami'>Pesan Sekarassng</div>
            <div className='content-tentang-kami'>Tentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangsKamiTentangsKamiTentangsKamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs KamiTentangs Kami</div>
          </Grid>
        </Grid>
        <Grid container className='main-footer' justify='center' alignContent='flex-start' alignItems='center'>

          <Grid item xs={12}></Grid>
          {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              <a href="https://www.freepik.com/vectors/background">Background vector created by vectorpocket - www.freepik.com</a>
            </Typography> */}
          <Grid item xs={12}>&nbsp;</Grid>
          <a href="https://www.undraw.co">Image vector by - www.undraw.co</a>
          <Grid item xs={12}>&nbsp;</Grid>
          <a href="https://www.freepik.com/vectors/background">Background vector created by vectorpocket - www.freepik.com</a>
          <Grid item xs={12}>&nbsp;</Grid>
          <Copyright />
        </Grid>
      </Grid>
      {/* <div className='footer-test'>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </div> */}
      {/* </main> */}
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}

// {/* <a href="https://www.freepik.com/vectors/background">Background vector created by vectorpocket - www.freepik.com</a> */}