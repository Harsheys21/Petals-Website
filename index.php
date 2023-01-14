<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    //Create an instance; passing `true` enables exceptions
    $message_sent = false;
    $mail = new PHPMailer(true);

    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'localhost';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = false;
    $mail->SMTPAutoTLS = false;                             //Enable implicit TLS encryption
    $mail->Port       = 25;  

    if(isset($_POST['email']) && $_POST['email'] != ''){
        //Recipients
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $mail->setFrom('_mainaccount@petaldecors.com', $userName);
        $mail->addAddress('petalseventsanddecor@gmail.com', 'Usha Jha'); 
        $mail->addAddress($userEmail, $userName); 
        //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $_POST['subject'];

        $message = $_POST['message'];
        $number = $_POST['phone'];
        $body = "Feedback form: \r\n | ";
        $body .= "From: ".$userName. "\r\n | ";
        $body .= "Email: ".$userEmail. "\r\n | ";
        $body .= "Phone: ".$number. "\r\n | "."Message: ".$message. "\r\n";
        $mail->Body = $body;
        $mail->AltBody = $body;

        $mail->send();
        $message_sent = true;
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home</title>
    <link rel="stylesheet" href="./index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- bootstrap CSS only -->
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></head>
<body>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- The video -->
    <video autoplay muted loop id="myVideo">
        <source src="./2022-06-16 18-21-39_Trim.mp4" type="video/mp4">
    </video>

    <!-- Optional: some overlay text to describe the video -->
    <div class="n" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
        <nav id="scrollspyHeading1" class="navbar navbar-expand-lg" style="background-color: rgba(250, 128, 114, 0.8);">
            <div class="container-fluid">
            <a class="navbar-brand" href="./index.php"><img style="width: 15vh;" src="./photos/D44A6F97-758C-4CEC-B3C3-5AC3454703EF.PNG" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./gallery.html">Events</a></li>
                        <li><a class="dropdown-item" href="./consultation.html">Consultation</a></li>
                        <li><a class="dropdown-item" href="./planning.html">Planning</a></li>
                        <li><a class="dropdown-item" href="./referral.html">Referrals</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="./gallery.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="./apt.php">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="navbar-brand" href="./abt.html">About</a>
                </li>
                </ul>
                <a class="navbar-brand" href="https://www.instagram.com/petalseventanddecorllc/" target="_blank"><i
                    class="fa fa-instagram"></i></a>
                <a class="navbar-brand" href="https://www.facebook.com/petalseventsanddecor/" target="_blank"><i
                    class="fa fa-facebook"></i></a>
            </div>
            </div>
        </nav>
    </div>
    <!-- slideshow -->

    <section id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <!-- Carousel -->
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./photos/IMG_5572.png" class="d-block w-100" alt="...">
                            </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="./photos/pic10.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="./photos/pic8.png" class="d-block w-100" alt="...">
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div id="events" class="col-md-4">
                    <h1>We Would Love to Hear From You!</h1>
                    
                    <div class="container">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Give Us Your Feedback Today!
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container">
                                            <div class="endtoend">
                                                <div class="container">
                                                    <form action="index.php" method="POST" class="form">
                                                        <div class="form-group">
                                                            <label for="name" class="form-label">Your Name</label>
                                                            <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" tabindex="1"
                                                                required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="email" class="form-label">Your Email</label>
                                                            <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2"
                                                                required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="phone" class="form-label">Your Phone Number</label>
                                                            <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number" tabindex="2"
                                                                required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="subject" class="form-label">Subject</label>
                                                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Hello There!"
                                                                tabindex="3" required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="message" class="form-label">Message</label>
                                                            <textarea class="form-control" rows="5" cols="50" id="message" name="message"
                                                                placeholder="Enter Message..." tabindex="4"></textarea>
                                                        </div>
                                                        <button onclick="result()" type="submit" class="btn btn-primary">Save changes</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
    <!--/#home-->

    <div class="abtus">
        <div class="container">
            <h1>Our Values</h1>
            <div class="row">
                <div class="col">
                    <p>By working with us, we ensure that your event is memorable. We have teams located across Bay Area, Tri-valley, Napa, etc. In Petals, we offer end-to-end guidance and Touring of your Event Journey which converts your Dream into reality. Our slogan is Client satisfaction and our rule is Client centricity. Our flexible approach to design adjustment ensures that each design has a personalized touch. </p>
                </div>
                <div class="col">
                    <img src="./photos/IMG_7984.jpg" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="services">
        <div class="container">
            <h1>What We Offer</h1>

            <div class="row">
                <div class="col-sm">
                    <p>Complete end-to-end guidance from planning to setting up your design</p>
                </div>

                <div class="col-sm">
                    <p>Access to exclusive services such as venue selection, catering, DJ music, etc</p>
                </div>
                <div class="col-sm">
                    <p>Real time consultation ensuring that each part of the design is perfect</p>
                </div>
            </div>
        </div>
    </div>

    <!-- appointment -->
    <div class="contact">
        <div class="container text-center">
            <div class="row">
                <div class="col a">
                    <h1>Contact Information:</h1>
                    <p>Phone: <br>(408) 431 - 2560 <br> Email: <br> <a href="mailto: petalseventsanddecor@gmail.com"
                        target="_blank">petalseventsanddecor@gmail.com</a></p>
                </div>
                <div class="vr" style="padding: 0px !important;"></div>
    
                <div class="col b">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h1>Services Provided:</h1>
                            </div>
                        </div>
                        <div class="row row-cols-2 highlight">
                            <div class="col"><a class="dropdown-item" href="./gallery.html">Events</a></div>
                            <div class="col"><a class="dropdown-item" href="./consultation.html">Consultation</a></div>
                            <div class="col"><a class="dropdown-item" href="./planning.html">Planning</a></div>
                            <div class="col"><a class="dropdown-item" href="./referral.html">Referrals</a></div>
                        </div>
                        <br>
                    </div>
                </div>
    
                <div class="vr" style="padding: 0px !important;"></div>

                <div class="col align-self-top">
                        <a class="nav-link" href="./apt.php"><h1>Quote</h1></a>
                </div>
            </div>
            <a id="top" href="#scrollspyHeading1"><h1>Back To The Top</h1></a>
        </div>
    </div>
</body>

</html>