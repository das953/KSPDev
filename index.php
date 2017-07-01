<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>VMS</title>
    <link rel="stylesheet" href="styles/Style.css">
    <script src="scripts/jquery-3.2.1.min%20.js"></script>
    <script src="scripts/logic.js"></script>
    <script src="scripts/history.js"></script>
</head>
<body>



<div id="Header"><!--Header-->


    <div style="display: inline-flex; flex-direction: row; ">
        <div class="flex-container">
            <div class="flex-item col-first" style="margin: 0">
                <div class="PhotoLogo"></div>
            </div>
            <div class="flex-item flex-item-Text col-second">
                <div class="flex-decoration_text" style="text-align: center; font-size: 20px;padding: 8.5% 15% 0 0">
                    На основании накопленного опыта и многих пожеланий наших клиентов, был разработан программный продукт «VMS-Veneer Management System».
                    VMS содержит полный набор инструментов для производства, оптовой и розничной торговли шпоном и сопутствующими товарами.
                </div>
            </div>

            <div class="col-third" style="display: inline-flex; margin-top: 5%">
                <div class="flex-item flex-item-btn" style="margin-left: 5%">
                    <button>UA</button>
                </div>
                <div class="flex-item flex-item-btn" style="margin-left: 1%; margin-right:  3%">
                    <button>RU</button>
                </div>
            </div>



        </div>
    </div>

    <div class="flex-container" ><!--Header location(navbar)-->
        <div class="flex-navigation" style="min-width: 100%; background-color: lightgray; justify-content: center; margin-left: 0">

            <div class="flex-item ">
                <a href="#main.php" class="history" onclick="ClickNav()">Главная</a>

            </div>
            <div class="flex-item history">
                <a href="#aboutRU.php" class="history"  onclick="ClickNav()">Описание</a>

            </div>
            <div class="flex-item history">
                <a href="#equipmentUA.php" onclick="ClickNav()"  class="history">Оборудование</a>

            </div>
            <div class="flex-item history">
                <a href="#state.html" onclick="ClickNav()" class="history">Статьи</a>

            </div>
            <div class="flex-item history">
                <a href="#forum.html" onclick="ClickNav()" class="history">Форум</a>

            </div>
            <div class="flex-item history">
                <a href="#partners.html" class="history" onclick="ClickNav()">Партнеры</a>

            </div>
        </div>

    </div>

</div><!--Header end-->


<div class="flex-container flex-container_menu_content" style="min-height: 350px; display: inline-flex">
    <div class="flex-menu col-first">
        <nav class="menu">
            <ul class="RootMenu">
                <li>
                    <span>Наша команда</span>
                    <ul class="dropMenu">
                        <li>
                            <pre>   Наша команда уже около 10 лет активно работает</pre>
                            <pre>   в отрасли производства и продажи строганного шпона!</pre>
                            <pre>   На основании накопленного опыта и многих пожеланий наших клиентов,</pre>
                            <pre>   был разработан программный продукт «VMS-Veneer Management System».</pre>

                        </li>
                    </ul>
                </li>
                <li><span>Галузь роботи</span>
                    <ul class="dropMenu">
                        <li>
                            <pre>     We haven`t info for this block :\      </pre>

                        </li>
                    </ul>
                </li>
                <li><span>Наш продукт</span>
                    <ul class="dropMenu">
                        <li>
                            <pre>   Наша команда уже около 10 лет активно работает</pre>

                        </li>
                    </ul>
                </li>
                <li><span>Контакти</span>
                    <ul class="dropMenu">
                        <li>
                            <pre>     Nope, its empty       </pre>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div><!--Menu-->

    <div class="flex-content col-second">
        <div id="content" class="content flex-item">
        </div>
    </div><!--Content-->

    <div class="flex-item col-third" style="align-self: flex-end">
        <img src="resources/img/ArrowUp.png" onclick="SkrollAnchor()" class="anchorImg">
    </div>

</div>

<div class="flex-container" ><!--Footer-->
    <div class="flex-item col-first" style="margin: 0">
        <div class="PhotoLogo"></div>
    </div>
    <div class="flex-item-Text col-second" style="margin-top: 9%;text-align: center">
        <p>KSPDev</p>
    </div>
    <div class="flex-item col-third" style="margin-top: 10%"> <!--style="margin-top: 5%;margin-left: 32.2%"-->
        <a href="http://facebook.com"><img class="facebook" src="resources/img/FB.png"></a>
    </div>
</div><!--Footer end-->
</body>
</html>