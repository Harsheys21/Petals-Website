import { Grid } from "@mui/material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import IcecreamIcon from '@mui/icons-material/Icecream';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Face3Icon from '@mui/icons-material/Face3';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import VideocamIcon from '@mui/icons-material/Videocam';
import Typography from '@mui/material/Typography';
import Service_one from "./photos/servicess/service_one.webp"
import Service_two from "./photos/servicess/service_two.webp"
import Service_three from "./photos/servicess/service_three.webp"
import Service_four from "./photos/servicess/service_four.webp"


const Services = () => {
    return (  
        <Grid
            container
            alignItems="center"
            backgroundColor={'secondary.light'}
            direction="column"
            textTransform="uppercase"
            minWidth={"100%"}
        >
            <Grid container direction="column" >
                <Typography variant="h2" align="center">
                    OUR SERVICES
                </Typography>
                <Typography variant="h6" align="center">
                    WHAT WE DO
                </Typography>
            </Grid>

            <Grid container spacing={12}>
                {/* service 1 */}
                <Grid item container justifyContent="center" direction="row">
                    <Grid container direction="column" lg={6} alignItems="center" spacing={4}>
                        <Grid item>
                            <Grid item>
                                <Typography variant="subtitle1" align="center">
                                    SERVICE 01
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" align="center">
                                    Full Event Planning
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent="center">
                            <Typography variant="body1" align="center" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Our Full Event Planning service is your ticket to a seamless and unforgettable experience.
                                We understand that planning a special event can be overwhelming,
                                so we're here to take the reins and transform your vision into reality.
                                Our Full Event Planning service encompasses every aspect of event coordination,
                                leaving no stone unturned. Our team of dedicated professionals will work closely
                                with you to curate an event that reflects your style, personality, and desires.
                                From the initial concept to the final farewell,
                                we're by your side, ensuring every detail is executed flawlessly.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container lg={6} md={12} justifyContent="center">
                        <img loading="lazy" src={Service_one} alt="service_one" style={{ objectFit: 'cover', minWidth: "90%", maxHeight: "100vh", marginRight: "10vw", marginLeft: "10vw" }} />
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" direction="row">
                    <Grid container lg={6} md={12} justifyContent="center">
                        <img loading="lazy" src={Service_two} alt="service_two" style={{ objectFit: 'cover', minWidth: "90%", maxHeight: "100vh", alignContent: "center", marginRight: "10vw", marginLeft: "10vw" }} />
                    </Grid>
                    <Grid container direction="column" lg={6} alignItems="center" spacing={4}>
                        <Grid item container>
                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Venue Selection:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                We scout and recommend the perfect venue that aligns with your event's theme, size, and budget.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Event Design and Styling:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Our creative team will conceptualize and design the event, ensuring it's a reflection of your unique vision.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Vendor Coordination:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                We have an extensive network of trusted vendors, including photographers, dancers, makeup artists, and more. We'll connect you with the best in the industry to suit your preferences.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Guest Management:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                We handle invitations, RSVPs, and accommodations for your guests, ensuring a smooth experience for everyone.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Logistics and Event Day Coordination:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                On the big day, we oversee every aspect, from setup to teardown, so you can relax and enjoy your event.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* service 2 */}
                <Grid item container justifyContent="center" direction="row">
                    <Grid container direction="column" lg={6} alignItems="center" spacing={4}>
                        <Grid item>
                            <Grid item>
                                <Typography variant="subtitle1" align="center">
                                    SERVICE 02
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" align="center">
                                    Partial Planning
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent="center">
                            <Typography variant="body1" align="center" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Our Partial Planning service offers you the perfect balance of professional guidance
                                and the flexibility to be more hands-on with your event planning.
                                If you have a clear vision for your event but need expert assistance in certain areas,
                                our Partial Planning service is tailor-made for you. With our Partial Planning service,
                                you can pick and choose the aspects of your event that you'd like us to handle.
                                Whether it's finding the ideal venue, securing talented photographers, or coordinating entertainment
                                like dancers, we're here to fill in the gaps and provide valuable expertise.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container lg={6} md={12} justifyContent="center">
                        <img loading="lazy" src={Service_three} alt="service_three" style={{ objectFit: 'cover', minWidth: "90%", maxHeight: "80vh", marginRight: "10vw", marginLeft: "10vw" }} />
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" direction="row">
                    <Grid container lg={6} md={12} justifyContent="center">
                        <img loading="lazy" src={Service_four} alt="service_four" style={{ objectFit: 'cover', minWidth: "90%", maxHeight: "80vh", alignContent: "center", marginRight: "10vw", marginLeft: "10vw"}} />
                    </Grid>
                    <Grid container direction="column" lg={6} alignItems="center" spacing={4} >
                        <Grid item container >
                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                Customized Planning:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw" }}>
                                You decide which aspects of your event you'd like us to manage,
                                allowing you to maintain control over the areas you're passionate about.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                Vendor Recommendations:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                We leverage our extensive network of trusted vendors to connect you with the best professionals for your specific needs.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                Expert Guidance:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                Our experienced planners provide guidance and advice to ensure your event is executed seamlessly.
                            </Typography>

                            <Typography variant="h5" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                Timeline Assistance:
                            </Typography>
                            <Typography variant="body1" align="left" style={{ lineHeight: "40px", marginRight: "10vw", marginLeft: "10vw"  }}>
                                We assist in creating a comprehensive event timeline to keep everything on track.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* referrals */}
                <Grid item container justifyContent="center" sx={{ display: { xs: "none", sm: "none", md: "none", lg: "inline", xl: "inline" } }}>
                    <Typography variant="h5" align="center">
                        Referrals
                    </Typography>
                </Grid>
                <Grid container direction="column" sx={{ display: { xs: "none", sm: "none", md: "none", lg: "inline", xl: "inline" } }}>
                    <Grid container justifyContent="space-evenly">
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <RestaurantMenuIcon fontSize="large" />
                                <Typography variant="button">
                                    Caterers
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <IcecreamIcon fontSize="large" />
                                <Typography variant="button">
                                    Desserts
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <MusicNoteIcon fontSize="large" />
                                <Typography variant="button">
                                    DJs/Entertainment
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <Face3Icon fontSize="large" />
                                <Typography variant="button">
                                    Make-up & Hair Stylists
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-evenly">
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <CameraAltIcon fontSize="large" />
                                <Typography variant="button">
                                    Photographers
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <DirectionsCarIcon fontSize="large" />
                                <Typography variant="button">
                                    Transportation
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <EventSeatIcon fontSize="large" />
                                <Typography variant="button">
                                    Rentals
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid container direction="column" alignItems="center">
                                <VideocamIcon fontSize="large" />
                                <Typography variant="button">
                                    Videographers
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Services;