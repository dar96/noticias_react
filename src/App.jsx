import Formulario from './components/Formulario';
import { Container, getCardHeaderUtilityClass, Grid, Typography } from '@mui/material';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  

  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          Buscador de Noticias
        </Typography>
      </header>

      <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Formulario/>
        </Grid>
        
      </Grid>

      <ListadoNoticias/>



    </Container>
  )
}

export default App
