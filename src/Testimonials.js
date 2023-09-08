import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

const Testimonials = () => {
    return (
        <Grid
            container
            backgroundColor={'secondary.light'}
            direction="column"
            justifyContent="space-evenly"
        >
            <Grid item alignContent="stretch" height={"75vh"}>
                <Typography variant="button">
                    <iframe loading="lazy" src='https://sandbox.elfsightcdn.com/61e192c6-644e-4f06-aea6-5b9c5e0f7651' style={{ width: "100%", height: "100vh", marginTop: "50px" }} frameborder='0'></iframe>
                </Typography>
            </Grid>
            <Grid item alignContent="stretch">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405637.0400282862!2d-122.14997141283362!3d37.412544202303636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a381ba23dfb1a91%3A0xad252a71c2b43ea2!2sPetals%20Events%20%26%20Decor%20LLC!5e0!3m2!1sen!2sus!4v1687568710430!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "75vh" }}></iframe>
            </Grid>
        </Grid>
    );
}

export default Testimonials