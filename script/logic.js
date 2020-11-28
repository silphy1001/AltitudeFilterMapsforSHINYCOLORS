img = new Array("wp_alstroemeria_750x1334_edit.jpg", "wp_hokagoclimaxgirls_750x1334_edit.jpg", "wp_illuminationstars_750x1334_edit.jpg", "wp_lantica_750x1334_edit.jpg", "wp_noctchill_750x1334_edit.jpg", "wp_straylight_750x1334_edit.jpg");
count = -1;
function imgTimer() {
    count++;
    if (count == img.length) count = 0;
    document.unitsback.src = "img/" + img[count];
    document.getElementById("branding").style.width = document.unitsback.width + "px";
    setTimeout("imgTimer()", 1000);
}
