alert("Oyuna xos geldiniz")

var start = confirm("Azerbaycanin en taninmis FrontAnd mel tanimaga hazirsanmi ? ")

var points = 0;


if (start) {

    var q1 = prompt("Goy uzu ne rengdedir ?");

    if (q1 === "Mavi" || q1 === "Goy" ||
        q1 === "mavi" || q1 === "goy") {

        points += 10;
        alert(`Tebrikler ${points} xal qazandiniz`);
        console.log(`Tebrikler birinci musahibeden kecdiniz`);

        var q2 = prompt("Serxan mel nece yasi var?");

        if (q2 == 29) {
            points += 10;
            alert(`Tebrikler Sizin umumi xalinizin cemi ${points} oldu`);
            console.log(`Tebrikler ikinci musahibeden kecdiniz`);

            var q3 = prompt("Serxan mel hansi burcdur ? )))");

            if (q3 === "Dolca" || q3 === "dolca") {
                points += 10;
                alert(`Tebrikler Sizin umumi xalinizin cemi ${points} oldu`);
                console.log(`Tebrikler ucuncu musahibeden kecdiniz`);

            } else {
                points -= 10;
                alert(`Teesufki sehf cavab verdiyiniz ucun siz 10 xal itirdiniz. Xaliniz ${points} `);
                console.log(`Teesufki sehf cavab verdiyiniz ucun siz 10 xal itirdiniz.`);
            }

        } else {
            points -= 10;
            alert(`Teesufki sehf cavab verdiyiniz ucun siz 10 xal itirdiniz. Xalinizin ${points}`);
            console.log(`Teesufki sehf cavab verdiyiniz ucun siz 10 xal itirdiniz.`);
        }

    } else {
        points = 0;
        alert(`Teessufki siz sehv cavab verdiniz.Xaliniz ${points}`);
        console.log(`Teessufki siz sehv cavab verdiniz.`);
    }


} else {
    alert("Gozumuz aydin !")
    console.log("Gozumuz aydin !");
}