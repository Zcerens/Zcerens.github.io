<!DOCTYPE html>
<html lang="en">



<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="page.css" >
    <title>CENG 311</title>
</head>


<body>
    <main>

     
    <?php


        $exchange_rates = array(
            'USD' => array(
                'CAD' => 1.36,
                'EUR' => 0.91,

            ),
            'EUR' => array(
                'CAD' => 1.47,
                'USD' => 1.10,

            ),
               'CAD' => array(
                'USD' => 0.74,
                'EUR' => 0.67,
            )
        );

        $from_currency = isset($_POST['from_currency']) ? $_POST['from_currency'] : '';

        $target_currency = isset($_POST['target_currency']) ? $_POST['target_currency'] : '';

  
        $from_amount = isset($_POST['from_amount']) ? $_POST['from_amount'] : '';


        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
            if (isset($exchange_rates[$from_currency]) && isset($exchange_rates[$from_currency][$target_currency])) {
           
                $exchange_rate = $exchange_rates[$from_currency][$target_currency];

      
                $to_amount = $from_amount * $exchange_rate;

                echo "<form action='' method='post'>
                        
                From: <input class='deger' type='number' name='from' value='$from_amount'style='margin-left: 20px;' />
                Currency: <select name='from_currency' >
                <option value='USD'>US Dollar</option>
                    <option value='CAD'>Canadian Dollar</option>
                    <option value='EUR'>Euro</option>
                </select></br>
            
                To: <input class='deger' type='number' name='to' value='$to_amount'style='margin-left: 38px;'>
                Currency:<select name='target_currency' >
                    <option value='USD'>US Dollar</option>
                    <option value='CAD'>Canadian Dollar</option>
                    <option value='EUR'>Euro</option>
                </select></br>
            <button  class='button' type='submit'style='margin-top: 38px;' >Convert</button>
        </form>";
            } else {
                // Hata durumunu yazdırma
                echo 'ERROR.';
            }
        }
?>

    </main>
</body>

</html>