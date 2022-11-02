const judul = document.getElementById("judul");
const H3 = document.querySelector("h3");
const H3Text = document.querySelector("h3#text");
const myBtn = document.getElementById("btn");
const myBtn2 = document.getElementById("btn2");
const myBtn3 = document.getElementById("btn3");
const myBtn4 = document.getElementById("btn4");
const myImg = document.querySelector("div", "img");

function change() {
  judul.innerHTML = "Muhammad Hadi Arsa";
  H3Text.innerHTML =
    "Seorang Mahasiswa ITERA dengan NIM 120140150 mengambil program studi Teknik Informatika";
}

function figure() {
  myImg.innerHTML =
    '<img src="HADI.jpg" alt="Foto Saya" title="ini saya" style="border-radius: 50%; width: 175px;">';
  var styles = `html{margin: 0;padding: 0;}
        .center{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .container{
            flex-direction: column;
            padding: 10px;
        }
        .text{
            height: 100px;
            overflow: hidden;
            text-align: center;
        }`;
  var styleSheet = document.querySelector("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

function video() {
    var styles =
    `.center{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .container{
        flex-direction: column;
        padding: 10px;
    }
    .text{
        height: 100px;
        overflow: hidden;
        text-align: center;
    }
    #ytvideo{
        display:block !important;
    }`;
    var styleSheet = document.querySelector("style");
    styleSheet.innerText = styles;
    document.head.append(styleSheet);
}

function view() {
  var styles = `html{margin: 0;padding: 0;}
        body{
            background-color: #1fbcdb;
        }
        img{
            width: 100px;
        }
        .center{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .container{
            flex-direction: column;
            padding: 10px;
        }
        .text{
            padding-top: 50px;
            height: 100px;
            overflow: hidden;
            text-align: center;
            border-radius: 50px;
        }
        .text h3{
            font-size: 2em;
            line-height: 100px;
        }
        .text h3:nth-child(1){
            animation: text-gerak 15s infinite;
        }
        @keyframes text-gerak {
            0%{
                margin-top: 0;
            }
            25%{
                margin-top: -130px;
            }
            50%{
                margin-top: -280px;
            }
            75%{
                margin-top: -130px;
            }
            100%{
                margin-top: 0;
            }
        }
        .btn{
            margin: 10px;
            padding: 16px 32px;
            background-color: white;
            color: black;
            border: 2px solid #4CAF50;
            cursor: pointer;
            transition-duration: 0.5s;
        }
        .btn:hover{
            background-color: #4CAF50;
            color: white;
        }
        input[type=text], textarea {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            resize: none;
        }
        input[type=submit]:hover {
            background-color: #45a049;
        }
        #ytvideo{
            display:block !important;
        }`;
  var styleSheet = document.querySelector("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

myBtn.addEventListener("click", change);
myBtn2.addEventListener("click", figure);
myBtn3.addEventListener("click", video);
myBtn4.addEventListener("click", view);