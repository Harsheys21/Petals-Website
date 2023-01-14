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
        $body = "Contact form: \r\n | ";
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="./apt.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

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

    <div class="container">
        <div class="eventplanning">
            <h1>Contact Us</h1>
        </div>
    </div>
    <div class="container">
        <div class="consultation">
            <p style="text-align: center;">We would love to hear some feedback from you! Feel free to ask a question,
                drop a review, or just say
                hello. You can use either the form or the contact details below.</p>
        </div>
    </div>

    <div class="container">
        <div class="endtoend">
        <?php
        if($message_sent):
        ?>
            <h3 style="text-align: center;">Thanks we'll be in touch!</h3>
        <?php
        else:
        ?>
        <div class="container">
            <form action="apt.php" method="POST" class="form">
                <div class="form-group">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" tabindex="1"
                        required>
                </div>
                <br>
                <div class="form-group">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2"
                        required>
                </div>
                <br>
                <div class="form-group">
                    <label for="phone" class="form-label">Phone Number:</label>
                    <input type="text" class="form-control" id="phone" name="phone" placeholder="Phone Number" tabindex="2"
                        required>
                </div>
                <br>
                <div class="form-group">
                    <label for="subject" class="form-label">Subject:</label>
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Hello There!"
                        tabindex="3" required>
                </div>
                <br>
                <div class="form-group">
                    <label for="message" class="form-label">Message:</label>
                    <textarea class="form-control" rows="5" cols="50" id="message" name="message"
                        placeholder="Enter Message..." tabindex="4"></textarea>
                </div>
                <div>
                    <button onclick="result()" type="submit" style="background-color:white !important; margin-top: 20px !important;" class="btn">Send Message!</button>
                </div>
            </form>
        </div>
        <?php
        endif;
        ?>
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

                <div class="col align-self-top c">
                        <a class="nav-link" href="./apt.php"><h1>Quote</h1></a>
                </div>
            </div>
            <a id="top" href="#scrollspyHeading1"><h1>Back To The Top</h1></a>
        </div>
    </div>
</body>

</html>