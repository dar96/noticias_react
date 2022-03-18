import { Card } from "@mui/material"
import { CardActions } from "@mui/material"
import { CardContent } from "@mui/material"
import { CardMedia } from "@mui/material"
import { Link } from "@mui/material"
import { Typography } from "@mui/material"
import { Grid } from "@mui/material"

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description,source}=noticia
    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                    component="img"
                    alt={`Imagen de la noticia ${title}`}
                    image={urlToImage}
                    height={"250"}
                    />  
                )} 
            </Card>

            <CardContent>
                <Typography
                variant="body1"
                color="error"
                >
                    {source.name}
                </Typography>

                <Typography
                variant="h5"
                component="div"
                >
                    {title}
                </Typography>

                <Typography
                variant="body2"
                >
                    {description}
                </Typography>

                <CardActions>
                   <Link 
                   href={url}
                   target="_blank"
                   variant="button"
                   width={"100%"}
                   textAlign={"center"}
                   sx={{
                       textDecoration:"none"
                   }}
                   >Leer Noticia</Link>
                </CardActions>
            </CardContent>
        </Grid>
    )
}

export default Noticia
