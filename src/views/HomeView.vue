<!-- home的內容區塊 -->
<template>
    <div class="index">
        <main>
            <!-- 專屬旅著區塊 -->
            <section class="index_plan">
                <div class="container">
                    <h1>一日行程 + 穿搭建議<br />規劃你的說走就走 !</h1>
                    <p>
                        煩惱景點安排？煩惱衣著搭配？讓日日旅著分擔你的煩惱！<br />在這裡你能找到全台各地行程、獲得穿搭靈感，也能分享出遊穿搭、展現個人風格<br />如果想要更省時便利呢？馬上進行專屬旅著測驗，就能打造最適合你的一日旅著！
                    </p>
                    <router-link to="/plan">
                        <button class="btn">立即體驗<img src="~@/assets/img/btn_arrow.png" alt="" class="arrow_white" />
                            <img src="~@/assets/img/btn_arrow_hover.png" alt="" class="arrow_brown" />
                        </button>
                    </router-link>
                    <div class="swiper_wrap">
                        <img src="~@/assets/img/index_boy.png" alt="" class="boy" />
                        <img src="~@/assets/img/layout/plan_duck.png" alt="" class="duck" />
                        <Carousel :autoplay="3000" :wrap-around="true">
                            <Slide v-for="item in placeImg" :key="item.index">
                                <img :src=getPlaceImg(item.place_img1) alt="景點照片" class="mask_plan">
                            </Slide>
                        </Carousel>
                    </div>
                </div>
            </section>

            <!-- 行程區塊 -->
            <section class="index_trip">
                <div class="bgCurve">
                    <img src="~@/assets/img/bgCurve_A.png" alt="" />
                </div>
                <div class="title">
                    <div class="duckDeco">
                        <img src="~@/assets/img/duck_trace.png" alt="" class="trace" />
                        <img src="~@/assets/img/duck_green.png" alt="" class="duck" />
                    </div>
                    <h2>精選出遊特輯</h2>
                </div>
                <Carousel v-bind="settings2" :breakpoints="breakpoints2" class="content">
                    <Slide class="wrap" v-for="(trip, index) in tripData" :key="index">
                        <div class="head">
                            <div class="tripTitle">{{ trip.trip_name }}</div>
                            <div class="tripCover">
                                <img :src="getPlaceImg(trip.concatenated_place_img[0])" alt="景點圖片" class="mask_trip" />
                            </div>
                        </div>
                        <div class="info">
                            <div class="tripSpots">
                                <div v-for="(place, placeIndex) in trip.concatenated_place_name" :key="placeIndex" class="spot" >
                                    <img src="~@/assets/img/trip_flag_white.svg" alt="" />
                                    <h5>{{ place }}</h5>
                                </div>
                            </div>
                            <div class="deco">
                                <img src="~@/assets/img/trip_deco_footPrint.svg" alt="" />
                            </div>
                            <router-link :to="'/trip_info/' + trip.trip_id">
                                <button class="btn">
                                    馬上出發
                                    <img src="~@/assets/img/btn_arrow.png" alt="" class="arrow_white" />
                                    <img src="~@/assets/img/btn_arrow_hover.png" alt="" class="arrow_brown" />
                                </button>
                            </router-link>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </section>

            <!-- 穿搭區塊 -->
            <section class="index_oott">
                <div class="bgCurve">
                    <img src="~@/assets/img/bgCurve_B.png" alt="" />
                </div>
                <div class="title">
                    <div class="duck">
                        <div class="duckDeco">
                            <img src="~@/assets/img/duck_trace.png" alt="" class="trace" />
                            <img src="~@/assets/img/duck_yellow.png" alt="" class="duck" />
                        </div>
                    </div>
                    <h2>人氣穿搭特輯</h2>
                </div>
                <div class="content">
                    <Carousel class="wrap" v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="(oott, index) in oottData" :key="index">
                            <oottCard class="oottCard"
                                :oottCardId="oott.oott_id"
                                :oottRank="'#' + (index + 1).toString().padStart(2, '0')"
                                :oottPhoto="getOottImg(oott.oott_img)"
                                :oottCardTags="oott.concatenated_style_name"
                                :oottCardDate="oott.oott_date_new"
                                :oottAuthorPhoto="getMemImg(oott.mem_img)"
                                :oottCardAuthor="oott.mem_nickname">
                            </oottCard>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                    <router-link to="/oott">
                        <button class="btn">查看更多</button>
                    </router-link>
                </div>
            </section>

            <!-- 票券區塊 -->
            <section class="index_ticket">
                <div class="bgCurve">
                    <img src="~@/assets/img/bgCurve_A.png" alt="" />
                </div>
                <div class="title">
                    <div class="duck">
                        <div class="duckDeco">
                            <img src="~@/assets/img/duck_trace.png" alt="" class="trace" />
                            <img src="~@/assets/img/duck_blue.png" alt="" class="duck" />
                        </div>
                    </div>
                    <h2>景點票券優惠</h2>
                </div>
                <div class="content">
                    <div class="wrap">
                        <div class="ticketCards">
                            <div class="ticketCard" v-for="(ticket, index) in ticketData" :key="index">
                                <router-link :to="'/ticket/' + ticket.ticket_id" title="點擊查看票券詳情">
                                    <ticketCard 
                                    :ticketPhoto="getPlaceImg(ticket.place_img1)" 
                                    :ticketTitle="ticket.ticket_name"
                                    :ticketLocation="ticket.region" 
                                    :ticketTags="ticket.tag"
                                    :originalPrice="ticket.ticket_discount !== null ? ticket.ticket_adult : ''" 
                                    :FinalPrice="ticket.final_price"
                                    :discountTag="ticket.ticket_discount !== null ? parseFloat(ticket.ticket_discount) : ''" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <router-link to="/ticket">
                        <button class="btn">查看更多</button>
                    </router-link>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import {GET} from '@/plugin/axios';
import oottCard from "@/components/OottCard.vue";
import ticketCard from "@/components/TicketVertical.vue";
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {
    name: 'Autoplay',
    components: {
        oottCard,
        ticketCard,

        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    data() {
        return {

            placeImg: [],
            tripData: [],
            oottData: [],
            ticketData: [],


            settings2: {
                autoplay: 5000,
                wrapAround: true,
                itemsToShow: 1.4,
                snapAlign: 'center',
                },
                breakpoints2: {
                // 700px and up
                768: {
                    wrapAround: true,
                    itemsToShow: 1.6,
                    snapAlign: 'center',
                },
                // 1024 and up
                1200: {
                    wrapAround: true,
                    itemsToShow: 1.2,
                    snapAlign: 'center',
                },
            },


            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                },
                breakpoints: {
                // 700px and up
                768: {
                    itemsToShow: 2,
                    snapAlign: 'start',
                },
                // 1024 and up
                1200: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
            
        };
    },

    methods: {
        getPlaceImg(placeImg){
            return process.env.BASE_URL + 'placeImg/' + placeImg;
        },
        getOottImg(oottImg){
            return process.env.BASE_URL + 'oottImg/' + oottImg;
        },
        getMemImg(memImg){
            return process.env.BASE_URL + 'profileImg/' + memImg;
        }
    },

    mounted() {
        GET(`${this.$URL}/homeGetPlaceImg.php`)
            .then((res) => {
                this.placeImg = res;
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            }),
        GET(`${this.$URL}/homeGetTrip.php`)
            .then((res) => {
                this.tripData = res;
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            }),
        GET(`${this.$URL}/homeGetOott.php`)
            .then((res) => {
                this.oottData = res;
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            }),
        GET(`${this.$URL}/homeGetTicket.php`)
            .then((res) => {
                this.ticketData = res;
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    },
};
</script>


<style lang="scss">
@import "@/assets/scss/baseAndMixin.scss";

.index {
    // 全頁設定
    padding-top: 74px;
    background: $bgColor_default;

    @media (min-width: 768px) {
        padding-top: 200px;
    }

    .bgCurve {
        position: absolute;
        top: 0;
        width: 100%;
        height: 48px;

        @media (min-width: 768px) {
            height: 96px;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .title {
        margin: 0 auto 24px;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        animation: move_in 1s linear;


        @media (min-width: 768px) {
            margin: 0 auto 32px;
            max-width: 1200px;
            flex-direction: row;
            align-items: center;
        }

        @keyframes move_in {
            0%{
                left: -32px;
                opacity: 0;
            }
            100%{
                left: 0;
                opacity: 1;
            }
        }

        .duckDeco {
            position: relative;

            .trace {
                display: none;

                @media (min-width: 768px) {
                    display: block;
                    width: 192px;
                    position: absolute;
                    left: -160px;
                    bottom: -8px;
                }
            }

            .duck {
                width: 80px;
                animation: duck_shake 1s linear alternate infinite;

                @media (min-width: 768px) {
                    width: 120px;
                }
                @keyframes duck_shake {
                    0%{
                        rotate: -3.2deg;
                    }
                    100%{
                        rotate: 3.2deg;
                    }
                }
            }
        }
    }

    .btn {
        position: relative;

        img {
            width: 40px;

            @media (min-width: $md) {
                width: 45px;
            }
        }

        .arrow_white {
            position: absolute;
            right: 24px;

            @media (min-width: $md) {
                right: 32px;
            }
        }

        &:hover {
            .arrow_white {
                display: none;
            }
        }
    }

    // 專屬旅著區塊
    .index_plan {
        padding: 8px 32px 32px;
        background-color: $bgColor_default;
        overflow: hidden;

        @media (min-width: 768px) {
            padding: 120px 32px 184px;
        }

        .container {
            position: relative;
            margin: 0 auto;
            text-align: center;

            @media (min-width: 768px) {
                max-width: 1200px;
                text-align: left;
            }

            h1 {
                opacity: 0;
                position: relative;
                width: 70%;
                color: $default_yellow;
                line-height: 150%;
                text-align: left;
                z-index: 10;
                animation: index_h1 1.5s 0.2s 1 forwards;

                @media (min-width: 768px) {
                    line-height: 140%;
                }

                @keyframes index_h1 {
                    0% {
                        left: -$sp12;
                        opacity: 0;
                    }

                    100% {
                        left: 0;
                        opacity: 1;
                    }
                }
            }

            p {
                opacity: 0;
                position: relative;
                margin: 160px 0 32px;
                line-height: 180%;
                z-index: 10;
                animation: index_p 1.5s 0.4s 1 forwards;

                @media (min-width: $md) {
                    margin: 24px 0 48px;
                    line-height: 165%;
                    max-width: 50%;
                }

                @media (min-width: $xl) {
                    max-width: 100%;
                }

                @keyframes index_p {
                    0% {
                        left: -$sp8;
                        opacity: 0;
                    }

                    100% {
                        left: 0;
                        opacity: 1;
                    }
                }

                br {
                    display: none;

                    @media (min-width: $xl) {
                        display: inline-block;
                    }
                }
            }


            .btn {
                opacity: 0;
                animation: index_btn 1.5s 1s 1 forwards;

                @keyframes index_btn {
                    0% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 1;
                    }
                }
            }

            .swiper_wrap {
                position: absolute;
                opacity: 0;
                top: $sp10;
                right: -20%;
                z-index: 1;
                width: 320px;
                animation: index_btn 1.5s 0.8s 1 forwards;

                @media (min-width: $md) {
                    right: -12%;
                    top: -40px;
                    width: 480px;
                }

                @media (min-width: $xl) {
                    width: 640px;
                }

                @keyframes index_btn {
                    0% {
                        // left: -$sp6;
                        opacity: 0;
                    }

                    100% {
                        // left: 0;
                        opacity: 1;
                    }
                }

                .mask_plan{
                    width: 320px;
                    height: 160px;
                    -webkit-mask-image: url(@/assets/img/index_cover_mask.svg);
                    mask-image: url(@/assets/img/index_cover_mask.svg);
                    -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
                    mask-size: 320px 160px;
                    @media (min-width: $md){
                        width: 480px;
                        height: 560px;
                        mask-size: 480px 560px;
                    }
                    @media (min-width: $xl){
                        width: 720px;
                        height: 560px;
                        mask-size: 720px 560px;
                    }
                }


                .boy {
                    width: $sp11;
                    rotate: 0deg;
                    position: absolute;
                    top: -$sp10;
                    left: $sp15;
                    animation: boy_move_sm 1s 0.5s linear forwards;

                    @media (min-width: $md) {
                        rotate: -45deg;
                        width: $sp13;
                        top: $sp12;
                        left: $sp12;
                        animation: boy_move_md 2s 0.5s linear forwards;
                    }

                    @media (min-width: $xl) {
                        width: $sp15;
                        top: $sp2;
                        left: 0;
                        animation: boy_move_xl 2s 0.5s linear forwards;

                    }

                    @keyframes boy_move_sm {
                        0% {
                            top: 0;
                        }

                        100% {
                            top: -$sp10;
                        }
                    }

                    @keyframes boy_move_md {
                        0% {
                            top: $sp5;
                            left: $sp5
                        }

                        100% {
                            top: -$sp1;
                            left: -$sp1;
                        }
                    }

                    @keyframes boy_move_xl {
                        0% {
                            top: $sp7;
                            left: $sp5
                        }

                        100% {
                            top: $sp2;
                            left: 0;
                        }
                    }
                }

                .duck {
                    position: absolute;
                    width: 120px;
                    bottom: 0;
                    left: -3%;
                    z-index: 5;
                    animation: duck_move 8s 0.5s infinite linear;

                    @media (min-width: $md) {
                        width: 200px;
                        left: -$sp4;
                    }

                    @media (min-width: $xl) {
                        width: 248px;
                        left: -$sp4;
                    }

                    @keyframes duck_move {
                        0% {
                            left: -3%;
                            bottom: 0;
                            rotate: 5deg;
                        }

                        10% {
                            rotate: -5deg;
                        }

                        20% {
                            rotate: 5deg;
                        }

                        30% {
                            rotate: -5deg;
                        }

                        40% {
                            rotate: 5deg;
                        }

                        50% {
                            bottom: -1%;
                            rotate: -5deg;
                        }

                        60% {
                            rotate: 5deg;
                        }

                        70% {
                            rotate: -5deg;
                        }

                        80% {
                            rotate: 5deg;
                        }

                        90% {
                            rotate: -5deg;
                        }

                        100% {
                            bottom: 0;
                            rotate: 5deg;
                            left: -100%;
                        }
                    }
                }

                
                
            }
        }
    }

    // 行程區塊
    .index_trip {
        position: relative;
        background-color: $bgColor_tint;
        padding: $sp12 0 $sp8;

        @media (min-width: $xl) {
            padding: 160px 0 80px;
        }

        .carousel__prev, .carousel__next {
            display: none;
            @media (min-width: $xl){
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                border: 2px solid $textColor_default;
                background-color: $textColor_white;
                width: 40px;
                height: 40px;
                box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.25);
                &:hover{
                    background-color: $textColor_default;
                    .carousel__icon{
                        fill: $textColor_white;
                    }
                }
                .carousel__icon {
                    width: 40px;
                    height: auto;
                    fill: $textColor_default;
                }
            }
        }

        .carousel__prev {
            left: calc(50% - 560px);
        }

        .carousel__next {
            right: calc(50% - 560px);
        }

        .mask_trip{
            width: 80%;
            -webkit-mask-image: url(@/assets/img/mask_trip.svg);
            mask-image: url(@/assets/img/mask_trip.svg);
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            mask-size: 100%;
            @media (min-width: $xl) {
                width: 640px;
                mask-size: 640px;
            }
        }

        .content {
            margin: 0 auto;

            .wrap {
                margin: 0 auto 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @media (min-width: $xl) {
                    margin-top: 64px;
                    width: 80%;
                    flex-direction: row;
                }

                .head {
                    position: relative;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 5;

                    @media (min-width: $xl) {
                        display: block;
                        margin-right: -$sp4;
                    }

                    .tripTitle {
                        order: 1;
                        position: relative;
                        top: -24px;
                        padding: $sp2 $sp4;
                        background-color: $default_red;
                        border-radius: 80% 60% 80% 60%;
                        color: $textColor_white;
                        font-family: Shippori Mincho;
                        font-size: 20px;
                        font-weight: 800;
                        letter-spacing: 0.03em;
                        z-index: 3;

                        @media (min-width: $xl) {
                            position: absolute;
                            padding: $sp3 $sp6;
                            font-size: 32px;
                            letter-spacing: 0.06em;
                        }
                    }

                    // .tripCover {
                    //     width: 80%;

                    //     @media (min-width: $xl) {
                    //         width: 640px;
                    //     }

                    // }
                }

                .info {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0;

                    @media (min-width: $xl) {
                        background-image: url("~@/assets/img/index_trip_info_bg.svg");
                        background-size: contain;
                        background-repeat: no-repeat;
                        width: 479px;
                        height: 363px;
                        margin-left: -$sp4;
                        justify-content: center;
                    }

                    .tripSpots {
                        display: flex;
                        flex-direction: column;

                        @media (min-width: $xl) {
                            gap: $sp2;
                        }

                        .spot {
                            display: flex;

                            @media (min-width: $xl) {
                                color: $textColor_white;
                            }
                        }

                        h5 {
                            font-weight: 400;
                        }
                    }

                    .deco {
                        width: 24px;
                        margin-top: $sp2;

                        @media (min-width: $xl) {
                            width: 32px;
                        }
                    }

                    a {
                        margin-top: $sp2;

                        @media (min-width: $xl) {
                            position: absolute;
                            right: 0;
                            bottom: $sp8;
                        }
                    }
                }
            }
        }
    }

    // 穿搭區塊
    .index_oott {
        position: relative;
        background-color: $bgColor_default;
        padding: $sp12 0 $sp8;
        overflow: hidden;

        @media (min-width: 768px) {
            padding: 160px 0 80px;
        }
        
        .carousel__viewport {
            overflow: visible;
        }

        .carousel__track {
            gap: $sp4;
        }

        .carousel__slide{
            flex-shrink: 1;
        }

        .carousel__prev, .carousel__next {
            display: none;
            @media (min-width: $md){
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                border: 2px solid $textColor_default;
                background-color: $textColor_white;
                width: 40px;
                height: 40px;
                top: 640px;
                &:hover{
                    background-color: $textColor_default;
                    .carousel__icon{
                        fill: $textColor_white;
                    }
                }
                .carousel__icon {
                    width: 40px;
                    height: auto;
                    fill: $textColor_default;
                }
            }
        }

        .carousel__prev {
            left: calc(50% - 80px);
        }

        .carousel__next {
            right: calc(50% - 80px);
        }

        .content {
            padding-left: 32px;
            margin: 0 auto;
            max-width: 1200px;
            text-align: center;

            .wrap {
                margin-bottom: 16px;

                @media (min-width: $md) {
                    margin-bottom: 120px;

                }

                .oottCards {
                    display: flex;
                    gap: 32px;

                    .oottCard {
                        flex-shrink: 0;
                    }
                }
            }

            .panel {
                display: flex;
                justify-content: center;
                gap: 64px;
                margin-bottom: 32px;
            }
        }
    }

    // 票券區塊
    .index_ticket {
        position: relative;
        padding: $sp12 0 $sp8;
        background-color: $bgColor_tint;
        overflow: hidden;

        @media (min-width: 768px) {
            padding: 160px 0 80px;
        }

        .content {
            margin: 0 auto;
            max-width: 1200px;
            text-align: center;

            .wrap {
                margin-bottom: 32px;

                .ticketCards {
                    display: flex;
                    overflow-x: scroll;

                    @media (min-width: $xl) {
                        justify-content: space-between;
                        overflow: visible;
                    }

                    .ticketCard {
                        text-align: left;
                        flex-shrink: 0;
                        margin-left: 32px;

                        @media (min-width: $xl) {
                            margin-left: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
