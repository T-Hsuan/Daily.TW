<template>
    <div class="entrance">
        <div class="logo">
            <img :src="require('@/assets/img/layout/big.svg')" alt="logo" />
        </div>
        <div class="content">
            <!-- <a href="https://tibamef2e.com/chd102/g5/Home"> -->
            <router-link to="/Home">
                <img :src="require('@/assets/img/entrance_boy.png')" alt="">
                <div class="front">
                    <p>前台</p>
                </div>
            </router-link>
            <!-- </a> -->

            <a href="https://tibamef2e.com/chd102/g5/back/">
                <img :src="require('@/assets/img/entrance_boy.png')" alt="">
                <div class="back">
                    <p>後台</p>
                </div>
            </a>
        </div>
        <div class="notice">
            <p>
                本網站為緯育 TibaMe 前端設計工程師班第
                83期學員專題成果作品，本平台僅供學習、展示之用。<br />若有抵觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。<br />若有侵權疑慮，您可以私訊<a
                    href="https://www.facebook.com/TibaMe">「緯育TibaMe」</a>，後續會由專人協助處理。
                <br />Copyright © 2023 Daily.TW
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.entrance {
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: auto;
    padding: $sp4 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: url("@/assets/img/entrance_bg.png") no-repeat center;
    overflow: hidden;

    .logo {
        margin: $sp3 $sp3;

        img {
            width: 180px;
        }
    }

    .content {
        margin: $sp4 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: $sp3;
        @media (min-width: $md) {
            gap: $sp10;
        }

        a {
            // margin: 0 $sp10;
            position: relative;

            &:hover img {
                opacity: 1;
                transform: translateY(0%);
                transition: transform .5s ease-in-out;
            }

            &:hover .front,
            &:hover .back {
                color: $textColor_white;
                scale: 1.1;
            }

            .front,
            .back {
                width: 315px;
                height: 333px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                @media (min-width: $md) {
                    width: 350px;
                    height: 370px;
                }

                p {
                    font-size: 48px;
                    color: $textColor_default;
                }
            }

            .front {
                background: url("@/assets/img/front.svg") no-repeat center;
                background-size: contain;
            }

            .back {
                background: url("@/assets/img/back.svg") no-repeat center;
                background-size: contain;
            }

            img {
                width: 130px;
                position: absolute;
                top: -50px;
                left: -50px;
                rotate: -45deg;
                opacity: 0;
                transform: translateY(50%);
            }
        }
    }

    .notice {
        width: 100%;
        margin: $sp5 auto 0;
        display: flex;
        justify-content: center;

        p {
            padding: 0 $sp3;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.2;
            letter-spacing: 0.6px;
            text-align: center;
            font-size: 14px;
            line-height: 1.5;

            a {
                color: $textColor_tint;
            }
        }
    }
}
</style>