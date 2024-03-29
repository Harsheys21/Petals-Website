import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import {TextField} from '@mui/material';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    phone: yup
        .string("Enter your phone number")
        .required("Phone Number is required"),
    message: yup
        .string("Enter your message")
        .required("Message is required"),
    subject: yup
        .string("Enter your subject")
        .required("Subject is required"),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Replace with your EmailJS service ID and template ID
                const serviceId = 'service_pi6zb4r';
                const templateId = 'template_iuy67ff';

                // Prepare the email data
                const emailData = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    subject: values.subject,
                };

                // Send the email using EmailJS
                const response = await emailjs.send(serviceId, templateId, emailData,"GeMOzFqpcmgs4Ghc6");

                if (response.status === 200) {
                    alert('Email sent successfully!');
                } else {
                    alert('Email sending failed. Please try again later.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('An error occurred while sending the email. Please try again later.');
            }
        },
    });

    return (
        <Grid
            textTransform="uppercase"
            container
            backgroundColor={'secondary.light'}
            justifyContent="center"
        >
            <Grid container justifyContent="center" alignItems="center"> {/* Center both horizontally and vertically */}
                <Grid container sx={1} justifyContent="center">
                    <Typography variant="h5" align="center" style={{ marginRight: "10vw", marginLeft: "10vw" }}>
                        LET'S START PLANNING YOUR DREAM EVENT! REACH OUT TO US THROUGH THIS FORM, AND OUR DEDICATED TEAM WILL BE THRILLED TO ASSIST YOU IN BRINGING YOUR VISION TO LIFE.
                    </Typography>
                </Grid>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
                <Grid 
                    container 
                    justifyContent="center"
                >
                    <TextField
                        fullWidth
                        margin="normal"
                        placeholder='YOUR NAME'
                        label="Name"
                        name="name"
                        type="text"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        placeholder='YOUR EMAIL'
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="phone"
                        placeholder='YOUR PHONE NUMBER'
                        name="phone"
                        label="Phone Number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="subject"
                        placeholder='HELLO THERE'
                        name="subject"
                        label="Subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.subject && Boolean(formik.errors.subject)}
                        helperText={formik.touched.subject && formik.errors.subject}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="message"
                        placeholder='ENTER MESSAGE...'
                        name="message"
                        label="Message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                    <Button sx={{marginBottom: "10vh"}} color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
};

export default Contact;