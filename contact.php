<?php 
$page_title = 'Contact';
include 'includes/header.php'; 

$success_message = '';
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $subject = htmlspecialchars($_POST['subject'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');
    
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $success_message = 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.';
        } else {
            $error_message = 'Veuillez entrer une adresse email valide.';
        }
    } else {
        $error_message = 'Veuillez remplir tous les champs du formulaire.';
    }
}
?>

    <section class="page-hero" style="background-image: url('attached_assets/stock_images/contact_communicatio_f4d3211b.jpg');">
        <div class="page-hero-overlay"></div>
        <div class="page-hero-content">
            <h1 class="page-title">Contact</h1>
            <p class="page-subtitle">Entrez en contact avec Axel Merryl</p>
        </div>
    </section>

    <section class="contact-section fade-in-scroll">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2 class="section-title">Restons Connectés</h2>
                    <p class="contact-intro">Que vous soyez un fan, un organisateur d'événements ou simplement curieux, n'hésitez pas à me contacter. Je suis toujours ravi d'échanger avec vous !</p>
                    
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="method-icon"><i class='bx bx-envelope'></i></div>
                            <div class="method-info">
                                <h3>Email</h3>
                                <a href="mailto:contact@axelmerryl.com">contact@axelmerryl.com</a>
                            </div>
                        </div>
                        
                        <div class="contact-method">
                            <div class="method-icon"><i class='bx bx-microphone'></i></div>
                            <div class="method-info">
                                <h3>Booking</h3>
                                <a href="mailto:booking@axelmerryl.com">booking@axelmerryl.com</a>
                            </div>
                        </div>
                        
                        <div class="contact-method">
                            <div class="method-icon"><i class='bx bx-share-alt'></i></div>
                            <div class="method-info">
                                <h3>Réseaux Sociaux</h3>
                                <p>Suivez-moi sur Instagram, YouTube et Spotify</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-social">
                        <h3>Suivez l'actualité</h3>
                        <div class="social-links">
                            <a href="#" class="social-link" aria-label="Instagram">
                                <i class='bx bxl-instagram'></i>
                            </a>
                            <a href="#" class="social-link" aria-label="YouTube">
                                <i class='bx bxl-youtube'></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Spotify">
                                <i class='bx bxl-spotify'></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Facebook">
                                <i class='bx bxl-facebook'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="contact-form-container">
                    <h2 class="section-title">Envoyez un Message</h2>
                    
                    <?php if ($success_message): ?>
                        <div class="alert alert-success"><?php echo $success_message; ?></div>
                    <?php endif; ?>
                    
                    <?php if ($error_message): ?>
                        <div class="alert alert-error"><?php echo $error_message; ?></div>
                    <?php endif; ?>

                    <form class="contact-form" method="POST" action="contact.php">
                        <div class="form-group">
                            <label for="name">Nom complet</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="subject">Sujet</label>
                            <select id="subject" name="subject" required>
                                <option value="">Sélectionnez un sujet</option>
                                <option value="booking">Booking / Réservation d'événement</option>
                                <option value="collaboration">Proposition de collaboration</option>
                                <option value="media">Demande média / Interview</option>
                                <option value="fan">Message de fan</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>

                        <button type="submit" class="submit-button">Envoyer le message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
