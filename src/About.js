import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Bio from "./photos/about/about.webp"

const About = () => {
    return (
        <Grid
            container
            backgroundColor={'secondary.light'}
            direction="column"
            textTransform="uppercase"
        >
            <Grid container justifyContent="center" alignItems="center" marginBottom={"10vh"}> {/* Center both horizontally and vertically */}
                <Grid container sx={1} justifyContent="center">
                    <Typography variant="h6" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                        "OUR MISSION IS TO TRANSFORM EVERY OCCASION INTO AN UNFORGETTABLE EXPERIENCE BY INFUSING IT WITH A PERSONALIZED, CUSTOM TOUCH THAT BRINGS YOUR WILDEST DREAMS TO LIFE"
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-evenly" direction="row">
                <Grid 
                    container 
                    lg={6} 
                    alignItems="center"
                >
                    <Typography variant="body1" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                        TRANSFORMING MY PASSION INTO A PROFESSION, I VENTURED INTO THE WORLD OF EVENT DECOR AND PLANNING, AND THUS, PETALS WAS BORN.
                        PETALS IS YOUR ULTIMATE DESTINATION FOR ALL THINGS RELATED TO EVENT PLANNING, STYLING, DESIGN, AND DECOR. OUR EXPERTISE ENCOMPASSES A WIDE ARRAY OF OCCASIONS, FROM ENCHANTING BIRTHDAYS AND TIMELESS WEDDINGS TO SEAMLESSLY EXECUTED CORPORATE EVENTS.
                    </Typography>
                    <Typography variant="body1" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                        WHAT SETS US APART IS OUR SPECIALIZATION IN CRAFTING UNFORGETTABLE INDIAN-THEMED EVENTS, INCLUDING HALDI, MEHENDI, SHAADI, THREAD CEREMONY, AND MORE. WE'VE ESTABLISHED DEDICATED TEAMS ACROSS THE BAY AREA, TRI-VALLEY, NAPA, AND BEYOND TO ENSURE YOUR EVENT VISION IS BROUGHT TO LIFE WITH PERFECTION.
                        AT PETALS, WE'RE NOT JUST EVENT PLANNERS; WE'RE DREAM WEAVERS. OUR MISSION IS TO GUIDE YOU THROUGH EVERY STEP OF YOUR EVENT JOURNEY, TURNING YOUR DREAMS INTO BREATHTAKING REALITIES.
                    </Typography>
                    <Typography variant="body1" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                        OUR MANTRA IS SIMPLE: CLIENT SATISFACTION IS OUR TOP PRIORITY, AND WE'RE UNWAVERINGLY COMMITTED TO PUTTING OUR CLIENTS AT THE CENTER OF EVERYTHING WE DO. YOUR VISION IS OUR CANVAS, AND WE TAKE PRIDE IN OUR FLEXIBILITY, TAILORING OUR DESIGNS TO YOUR UNIQUE NEEDS, ENSURING EACH EVENT IS A ONE-OF-A-KIND MASTERPIECE.
                        WHAT TRULY SETS US APART IS OUR COMPREHENSIVE, ONE-STOP-SHOP APPROACH. 
                    </Typography>
                    <Typography variant="body1" align="center" style={{marginRight: "10vw", marginLeft: "10vw" }}>
                        UNDER OUR UMBRELLA, YOU CAN ACCESS A RANGE OF SERVICES, INCLUDING VENUE SELECTION, DELECTABLE FOOD CATERING, VIBRANT DJ MUSIC, AND MUCH MORE. WE'RE HERE TO TRANSFORM YOUR EVENT INTO AN UNFORGETTABLE EXPERIENCE.
                        CHOOSE PETALS, WHERE YOUR DREAMS MEET REALITY, AND EVERY PETAL TELLS A STORY.
                    </Typography>
                </Grid>
                <Grid 
                    container 
                    lg={6} 
                    md={12} 
                    justifyContent="center"
                    height="90vh"
                    alignItems="center"
                >
                    <img src={Bio} alt="picture" style={{borderRadius: "40%", height: "80%", maxWidth: "100%", alignContent: "center"}} loading="lazy"/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default About;
