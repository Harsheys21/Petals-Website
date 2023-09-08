import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react"; // Make sure to import React
import WeddingImage from "./photos/portfolio/wedding.webp";
import BirthdayImage from "./photos/portfolio/birthday.webp";
import SpecialImage from "./photos/portfolio/special.webp";
import CulturalImage from "./photos/portfolio/cultural.webp";

// Inline CSS styles for the grid items
const gridItemStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "50vh",
    maxWidth: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: "20px 20px",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
};

const textStyle = {
    color: "white",
    padding: "20px 20px",
    align: "left",
}

const Portfolio = () => {
    return (
        <Grid container className="portfolio-container" direction="column" backgroundColor="secondary.main" textTransform="uppercase">
            <Link style={{ textDecoration: 'none', margin: "5vh 0" }} to="/weddings" className="portfolio-link">
                <div
                    className="portfolio-item"
                    style={{
                        ...gridItemStyle,
                        backgroundImage: `url(${WeddingImage})`,
                    }}
                >
                    <Typography variant="h5" backgroundColor="rgba(0, 0, 0, 0.5)" style={textStyle}>
                        WEDDINGS
                    </Typography>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none', margin: "5vh 0" }} to="/cultural_events" className="portfolio-link">
                <div
                    className="portfolio-item"
                    style={{
                        ...gridItemStyle,
                        backgroundImage: `url(${CulturalImage})`,
                    }}
                >
                    <Typography variant="h5" backgroundColor="rgba(0, 0, 0, 0.5)" style={textStyle}>
                        Cultural Events
                    </Typography>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none', margin: "5vh 0" }} to="/birthdays" className="portfolio-link">
                <div
                    className="portfolio-item"
                    style={{
                        ...gridItemStyle,
                        backgroundImage: `url(${BirthdayImage})`,
                    }}
                >
                    <Typography variant="h5" backgroundColor="rgba(0, 0, 0, 0.5)" style={textStyle}>
                        Birthdays
                    </Typography>
                </div>
            </Link>
            <Link style={{ textDecoration: 'none', margin: "5vh 0" }} to="/special_events" className="portfolio-link">
                <div
                    className="portfolio-item"
                    style={{
                        ...gridItemStyle,
                        backgroundImage: `url(${SpecialImage})`,
                    }}
                >
                    <Typography variant="h5" backgroundColor="rgba(0, 0, 0, 0.5)" style={textStyle}>
                        Special Events
                    </Typography>
                </div>
            </Link>
        </Grid>
    );
};

export default Portfolio;

