<template>
    <transition name="modal" mode="in-out">
        <div class="modal" v-if="show">
            <div class="modal__mask" @click="close"></div>
            <div class="modal__box">
                <a class="modal__close">
                    <img src="/images/close.png" alt="img" @click="close">
                </a>

                <div class="modal__header">
                    <slot name="header"></slot>
                </div>

                <div class="modal__content">
                    <slot name="content"></slot>
                </div>
                
                <div class="modal__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        methods: {
            close () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        
        &__close {
            position: absolute;
            top: 15px;
            right: 15px;
        }

        &__mask {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(38, 38, 38, 0.8);
            cursor: pointer;
        }

        &__box {
            position: relative;
            width: 570px;
            max-width: 100%;
            padding: 38px 65px;
            background: #fff;
        }

        &__header {
            margin: 0 0 22px 0;
        }

        &__footer {
            margin: 21px 0 0 0;
        }
    }

    .modal-leave-active,
    .modal-enter-active {
        transition: all .4s linear;
        .modal__mask,
        .modal__box {
            transition: all .4s cubic-bezier(0.5, 0, 0.5, 1);
        }
    }

    .modal-enter, .modal-leave-to {
        .modal__mask {
            background: transparent;
        }
        .modal__box {
            opacity: 0;
            transform: translateY(-50px)
        }
    }

    @media (max-width: 575.98px) {
        
    }

    @media (max-width: 767.98px) {
        .modal {
            &__box {
                padding: 14px 18px 24px 18px;
                margin: 0 10px;
            }
        }
    }

    @media (max-width: 991.98px) {
        
    }

    @media (max-width: 1199.98px) {

    }
</style>