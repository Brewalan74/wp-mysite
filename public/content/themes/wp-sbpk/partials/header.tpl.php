<?php
$backgroundImage = get_theme_mod('header-picture');

$style = '';
if($backgroundImage) {
    $style = 'background:' .
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),'.
        'url(' . $backgroundImage . ')' . 'center no-repeat'
    ;
}

?>
   
   <!-- Header -->
    <header id="header" class="header" style="<?= $style; ?>; background-size: cover;">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h1 class="h1-large">I love to develop websites with WordPress</h1>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </header> <!-- end of header -->
    <!-- end of header -->