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

     
        <form method="POST" action="Activity6.php" style="display:inline-block">

            From: <input class="deger" type="number" name="from_amount" placeholder="0" style="margin-left: 20px;"/>
            Currency: <select name="from_currency" class="deger">
                <option value="EUR">Euro</option>
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                
            </select></br>
            To: <input class="deger" type="number" name="to_amount" placeholder="0"style="margin-left: 38px;"/>
          
            Currency:<select name="target_currency" class="deger">
                <option value="EUR">Euro</option>
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
      
            </select></br>

            <button type="submit" class="button">Convert</button>

        </form>
        <div>

            <table table  >
                <tr>
                    <th>Currency</th>
                    <th>Symbol</th>

                </tr>
                <tr>
                    <td>Euro</td>
                    <td>EUR</td>

                </tr>
                <tr>
                    <td>US Dollar</td>
                    <td>USD</td>

                </tr>
                <tr>
                    <td>Canadian Dollar</td>
                    <td>CAD</td>

                </tr>
               
            </table>

        </div>

    </main>
</body>

</html>