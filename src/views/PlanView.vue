<!-- 專屬旅著 -->
<template>
    <div class="plan_view">
        <div class="plan_title">
            <h1>測出你的一日專屬旅著！</h1>
        </div>
        <div class="banner_main">
            <div class="bubble_wrap">
                <div class="bubble">
                    <span>沒時間規劃<br>出遊行程 ?</span>
                </div>
                <div class="bubble">
                    <span>要穿什麼<br>才好呢 ?</span>
                </div>
            </div>
            <div class="pic">
                <div class="clothes">
                    <img src="~@/assets/img/layout/plan_clothes.png" alt="">
                </div>
                <div class="boy">
                    <img src="~@/assets/img/layout/plan_boy.png" alt="">
                </div>
                <div class="map">
                    <img src="~@/assets/img/layout/plan_map.png" alt="">
                </div>
            </div>
            <div class="bubble_wrap">
                <div class="bubble">
                    <span>太多景點<br>選擇困難 ?</span>
                </div>
                <div class="bubble">
                    <span>一天幾個景點<br>才夠玩 ?</span>
                </div>
            </div>
        </div>
        <router-link to="/plan_quiz">
            <button class="btn">開始答題</button>
        </router-link>
        <div class="banner_deco">
            <div class="plan_duck">
                <img src="~@/assets/img/layout/plan_duck.png" alt="">
            </div>
            <div class="plan_grass">
                <img src="~@/assets/img/layout/plan_grass.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/assets/scss/baseAndMixin.scss";

.plan_view {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $bgColor_default;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("~@/assets/img/layout/plan_bg_sm.png");
    padding-top:96px;
    @media (min-width: $md) {
        background-image: url("~@/assets/img/layout/plan_bg_xl.png");
        padding-top:240px;
    }

    .plan_title {
        width: 300px;
        padding-bottom: $sp3;
        animation: fadeIn .8s ease-in;

        @media (min-width: $md) {
            width: 1440px;
        }

        h1 {
            @include sm_h1;

            @media (min-width: $md) {
                @include xl_h1;
            }

            text-align: center;
            -webkit-text-stroke: 5px $textColor_default;
            position: relative;
            letter-spacing: 6px !important;
            line-height: 150%;

            &::before {
                content: '測出你的一日專屬旅著！';
                position: absolute;
                top: 0;
                left: 0;
                @include sm_h1;
                -webkit-text-stroke: 0;
                color: $textColor_tint;
                letter-spacing: 6px !important;
                @media (min-width: $md) {
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    @include xl_h1;
                    white-space: nowrap;
                }
            }
        }
    }

    .banner_main {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;

        @media (min-width: $md) {
            padding-top: $sp7;
        }

        .bubble_wrap {
            .bubble {
                background-size: contain;
                background-repeat: no-repeat;
                width: 110px;
                height: 110px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                @media (min-width: $md) {
                    width: 176px;
                    height: 176px;
                }

                span {
                    @include sm_p;
                    line-height: 150%;
                    color: $textColor_white;
                    text-align: center;

                    @media (min-width: $md) {
                        @include xl_p;
                    }
                }
            }
        }

        .bubble_wrap:nth-child(1) {
            .bubble:nth-child(1) {
                position: relative;
                bottom: 16px;
                left: 16px;
                background-image: url("~@/assets/img/layout/plan_bubble1.png");
                animation: float 1s linear infinite alternate;

                @media (min-width: $md) {
                    left: 0;
                    bottom: 40px;
                }

                @media (min-width: $xl) {
                    left: 200px;
                    bottom: 40px;
                }

                span {
                    margin-right: 8px;
                }
            }

            .bubble:nth-child(2) {
                position: relative;
                top: 32px;
                right: -30px;
                z-index: 1;
                background-image: url("~@/assets/img/layout/plan_bubble3.png");
                animation: float 1s .5s linear infinite alternate;

                @media (min-width: $md) {
                    left: 50px;
                    bottom: 40px;
                }

                span {
                    margin-bottom: 25px;

                    @media (min-width: $md) {
                        margin-bottom: 36px;
                    }
                }
            }
        }

        .bubble_wrap:nth-child(3) {
            .bubble:nth-child(1) {
                position: relative;
                bottom: 12px;
                left: 0;
                background-image: url("~@/assets/img/layout/plan_bubble2.png");
                animation: float 1s .5s linear infinite alternate;

                @media (min-width: $md) {
                    bottom: 40px;
                }

                @media (min-width: $xl) {
                    bottom: 40px;
                    left: -80px;
                }

                span {
                    margin-bottom: 10px;

                    @media (min-width: $md) {
                        margin-bottom: 20px;
                    }
                }
            }

            .bubble:nth-child(2) {
                position: relative;
                top: 24px;
                left: -30px;
                background-image: url("~@/assets/img/layout/plan_bubble4.png");
                animation: float 1s linear infinite alternate;

                @media (min-width: $md) {
                    left: -60px;
                }
            }
        }

        .pic {
            @media (min-width: $md) {
                display: flex;
            }

            .clothes {
                display: none;

                @media (min-width: $xl) {
                    display: inline-block;
                    position: relative;
                    top: 140px;
                    left: 0;
                    animation: bounce .8s cubic-bezier(1, .01, .83, 1.41) 1;

                    img {
                        width: 300px;
                    }
                }
            }

            .boy {
                position: relative;
                left: 8px;
                z-index: 1;

                @media (min-width: $md) {
                    left: 4px;
                }

                img {
                    width: 163px;

                    @media (min-width: $md) {
                        width: 274px;
                    }
                }
            }

            .map {
                display: none;

                @media (min-width: $xl) {
                    display: inline-block;
                    position: relative;
                    right: 30px;
                    top: 60px;
                    animation: bounce .8s cubic-bezier(1, .01, .83, 1.41) 1;

                    img {
                        width: 283px;
                    }
                }
            }
        }
    }

    .btn {
        margin: $sp4 0 $sp10 0;

        @media (min-width: $md) {
            margin: $sp6 0 $sp15 0;
        }
    }

    .banner_deco {
        position: relative;

        .plan_duck {
            position: absolute;
            bottom: 20%;
            left: -30%;
            width: 100%;
            animation: walk 7s linear infinite, shake .5s linear infinite;

            @media (min-width: $md) {
                animation: walk 10s linear infinite, shake .5s linear infinite;
            }

            img {
                width: 20%;
                min-width: 136px;
                max-width: 275px;
            }
        }

        .plan_grass {
            width: 100%;
            position: relative;
            top: 4px;

            img {
                width: 100%;
                vertical-align: bottom;
            }
        }
    }

    @keyframes float {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(10px);
        }
    }

    @keyframes bounce {
        0% {
            transform: scale(0);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes walk {
        0% {
            left: 110%;
        }

        100% {
            left: -30%;
        }
    }

    @keyframes shake {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(-5deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
}
</style>