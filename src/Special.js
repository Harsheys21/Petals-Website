import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';

const importAll = (r) => {
    return r.keys().map(r);
};

const imageFiles = importAll(require.context('./photos/special_occasion/', false, /\.(png|webp|jpeg|gif)$/));

const itemData = imageFiles.map((img, index) => ({
    img: img.default,
    title: `Special Image ${index + 1}`
}));

const Special = () => {
    return (
        <Grid container backgroundColor={'secondary.light'} textTransform="uppercase" minHeight="75vh">
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>
    );
};

export default Special;
