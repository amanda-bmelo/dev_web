$(function () {

    function recuperaDado() {
        let a = 0
        while (a < 4) { 
            a++
            let like = $(`#like${a}`).data(`like${a}`)
            let dislike = $(`#dislike${a}`).data(`dislike${a}`)

            $(`#like${a}`).text(" "+like)
            $(`#dislike${a}`).text(" "+dislike)
        }
    }

    function likeDislike(item) {
        let classes = $(`#${item}`).attr("class").split(/\s+/)
        let dado = $(`#${item}`).data(`${item}`)  
        
        if (classes.includes("far")) {
            if (item.includes("dislike")) {
                let classes2 = $(`#like${item[7]}`).attr("class").split(/\s+/)
                if (classes2.includes("fas")){
                    likeDislike(`like${item[7]}`)
                }
            }
            else {
                let classes2 = $(`#dis${item}`).attr("class").split(/\s+/)
                if (classes2.includes("fas")) { 
                    likeDislike(`dis${item}`)
                }
            }

            $(`#${item}`).removeClass("far")
            $(`#${item}`).addClass("fas")  
            $(`#${item}`).data(`${item}`, dado+1)  
        }
        else if (classes.includes("fas")) {
            $(`#${item}`).removeClass("fas")
            $(`#${item}`).addClass("far")    
            $(`#${item}`).data(`${item}`, dado-1) 
        }

        dado = $(`#${item}`).data(`${item}`)
        $(`#${item}`).text(" "+dado)
    }

    
    $(".btn-like").on("click", function() {
        let id = $(this).children()[0].id
        likeDislike(id)
    })

    recuperaDado()

 })