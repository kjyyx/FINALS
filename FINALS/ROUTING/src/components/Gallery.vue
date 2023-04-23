<template>
    <div class="Gallery">
        <h1>
            {{title}}
        </h1>
        <div class="container">
            <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Brisk's Showroom</h1>
            <hr class="mt-2 mb-5">
            <div class="row text-center text-lg-start">
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://tmp-website-assets.sys.network/uploads/articles/241/003_241_1613978303025_000.webp" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://blogger.googleusercontent.com/img/a/AVvXsEifwrJHbTHjiawokq_J7wEf3KpDMZA6Bxl882odFl8G_Jw23egjtBlQxYOLeVLHA5kG6kg2sA-uo6nHg0eag_l_dvdE5j4alqbJ1JUtaOpQkKLNwjobpi_BzCh9eJeVoKzZhYr091GkdcawDpz1hIxh6ySMEJFA5POf42Py31DTuodI62PaNIS4P0e9NQ=s961" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://i.ytimg.com/vi/16E3Dy3OzHA/maxresdefault.jpg" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://img-ik.cars.co.za/news-site-za/images/2021/11/2022-Toyota-Avanza-Indonesia-launch-2.jpg?tr=w-1200,h-800" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://images.dealer.com/autodata/us/color/2022/USD20TOC041B0/040.jpg?impolicy=resize&w=1024" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com/en/newsrelease/images/download/2022/01/p_220111_m_1356_img_06.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/cars/xpander/2022/models/nc1wxruhlvp-ge-ph-opt/primary/exterior/X3M_135_22RN_Cross.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/cars/mirage-g4/2022/primary/exterior/a13asthhlp-ge-ph-opt/P19_135_22ELL-GLS-CVT-Front-R.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/cars/xpander/2022/models/nc1wlrphlvp-ge-ph-opt/primary/exterior/U33_135_22RN_GLS-AT.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/cars/montero-sport/2023/models/kr1wgupfpl-ge-e73/primary/exterior/W85W_45_22QX-QXB-B.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/cars/l200/2023/models/kk1tjlhfpl-ge-j60/primary/exterior/X8W_45_23SU-Athlete.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/qxwtyfittgtmjdjn4vlx" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data(){
        return{
            title:'This is the Gallery Component'
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 10px;
        margin-bottom: 70px;
    }
</style>