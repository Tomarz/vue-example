<template>
    <div>
        <article class="blog-article">
            <div class="container">
                <div class="grid">
                    <div class="blog-article__title">
                        <h1>10 Best Photo Apps For Incredible iPhone Photography (2020 Edition)</h1>
                    </div>
                </div>
                <div class="grid">
                    <div class="blog-article__main grid__col">
                        <div class="sep"></div>
                        <p>
                            How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel photos with your iPhone!
                            <br>
                            <br>
                        </p>

                        <img srcset="
                            /images/flamingo@3x.jpg 3x,
                            /images/flamingo@2x.jpg 2x"
                            src="/images/flamingo.jpg"
                            alt="img"    
                        />

                        <h2>1. Research Your Destination To Find The Best Photo Opportunities</h2>

                        <p>
                            Before your trip, I recommend researching the destination to find the most interesting photo opportunities.
                            <br>
                            <br>
                            I always research the location I'm traveling to. I do this extensively and obsessively!
                            <br>
                            <br>
                            It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures.
                            <br>
                            <br>
                            So, what kind of research can you do?
                            <br>
                            <br>
                            First, you could search for photos that other people have taken at the locations you're planning to visit.
                            <br>
                            <br>
                            Search on Instagram or Google to get an idea of the kinds of photos people take there.
                        </p>

                        <h2>2. Capture Your Journey To Tell The Complete Story Of Your Travels</h2>

                        <p>
                            Travel photography isn't just about photographing the destination.
                            <br>
                            <br>
                            For a more complete photographic story, capture your journey to and from the location you're visiting.
                            <br>
                            <br>
                            If you're traveling by plane, try to get a window seat where you have a view of the wing or propeller.
                            <br>
                            <br>
                            And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you're flying above.
                            <br>
                            <br>
                            Your journey will often involve several different types of transport. And they all offer great photo opportunities.
                            <br>
                            <br>
                            Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos.
                        </p>
                    </div>
                    <div class="blog-article__sidebar grid__col">
                        <a class="btn" @click="toggleModal"><span>Send Me The Tips</span></a>
                    </div>
                </div>
            </div>
        </article>

        <modal :show="isModal" @close="toggleModal">
            <template v-slot:header>
                <div class="steps">
                    <h5>Step <span>{{ currentStep }}</span> of 2</h5>
                    <div class="grid grid--nogap">
                        <div class="grid__col">
                            <div class="steps__step" :class="{'steps__step--active': !submitted}"></div>
                        </div>
                        <div class="grid__col">
                            <div class="steps__step" :class="{'steps__step--active': submitted}"></div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:content>
                <div class="newsletter" :class="`newsletter--step${currentStep}`">
                    <template v-if="!submitted">
                        <h2>Enter Your Email To Get <span>FREE</span><br> iPhone Photography Email Tips:</h2>
                        
                        <fieldset>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=" "
                                v-model="email"
                                :class="{'error': invalid}"
                                @keyup="clearError"
                                @keyup.enter="submit"
                            >
                            <label for="email" class="newsletter__placeholder">{{ placeholderText }}</label>
                        </fieldset>
                    </template>

                    <h2 v-else>Thanks for subscribing!</h2>
                </div>
            </template>

            <template v-slot:footer>
                <template v-if="!submitted">
                    <a class="btn" @click="submit" v-if="!loading"><span>Send Me The Tips »</span></a>
                    <a class="btn" v-else><div class="btn__loader"></div></a>
                </template>

                <a class="btn" @click="toggleModal" v-else><span>Close</span></a>
            </template>
        </modal>
    </div>
</template>

<script>
    import modal from '../modal/modal.vue'

    export default {
        name: 'blog-article',
        components: {
            modal
        },
        data () {
            return {
                isModal: false,
                loading: false,
                submitted: false,
                invalid: false,
                email: null
            }
        },
        computed: {
            currentStep () {
                return this.submitted ? 2 : 1
            },
            placeholderText () {
                return this.invalid ? 'Please enter a valid email address' : 'Please enter your email here'
            }
        },
        methods: {
            toggleModal () {
                this.isModal = !this.isModal
            },
            validateEmail (email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            clearError () {
                this.invalid = false
            },
            submit () {
                if (this.validateEmail(this.email)) {
                    this.loading = true
        
                    setTimeout(() => {
                        this.submitted = true
                        this.loading = false
                    }, 2000)
                } else {
                    this.invalid = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog-article {
        padding: 76px 0;

        &__title {
            max-width: calc(100% - 340px);
        }

        &__main {
            flex: 3;
            max-width: calc(100% - 270px);
            padding-right: 70px;
        }

        &__sidebar {
            flex: 1;
            min-height: 80vh;
            min-width: 270px;
            padding: 50px 25px;
            background: #F5F5F5;
        }
        img {
            margin: 0 0 30px 0;
        }
    }

    // MODAL
    .steps {
        text-align: center;

        &__step {
            height: 3px;
            background: #E5E5E5;
            transition: all .2s ease-in-out;
            &--active {
                background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);
            }
        }

        .grid {
            display: flex;
        }
    }
    .steps {
        text-align: center;

        &__step {
            height: 3px;
            background: #E5E5E5;
            transition: all .2s ease-in-out;
            &--active {
                background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);
            }
        }
    }

    .newsletter {
        text-align: center;
        
        fieldset {
            position: relative;
        }

        label {
            position: absolute;
            top: 0;
            left: 15px;
            font-size: 18px;
            line-height: 54px;
            font-weight: 300;
            color: #828282;
            cursor: text;
            transition: all .2s ease-in-out;
        }

        input {
            display: block;
            height: 54px;
            width: 100%;
            font-size: 18px;
            font-weight: 300;
            padding: 0 15px;
            border: 1px solid transparent;
            border-radius: 0;
            background: #FFFFFF;
            box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);
            transition: all .2s ease-in-out;
            &:not(:placeholder-shown) {
                padding-top: 16px;

                +label {
                    top: 8px;
                    font-size: 12px;
                    line-height: 14px;
                }
            }

            &.error {
                color: #E51323;
                border-color: #E51323;

                +label {
                    color: #E51323;
                }
            }
        }

        h2 {
            font-size: 23px;
            line-height: 28px;
            font-weight: 700;
            color: #464646;
            span {
                color: #007a01;
            }
        }
    }

    // MEDIA QUERIES
    @media (max-width: 575.98px) {
        .newsletter {
            &--step1 {
                h2 {
                    text-align: left;
                }
            }
            h2 {
                font-size: 20px;
                line-height: 26px;
            }
        }
    }

    @media (max-width: 767.98px) {
        .blog-article {
            padding: 25px 0;

            .grid {
                &__col:not(:last-child) {
                    margin-bottom: 33px;
                }
            }

            &__title {
                max-width: 100%;
            }

            &__main {
                max-width: 100%;
                padding-right: 0;
            }

            &__sidebar {
                min-height: 40vh;
                padding: 34px 29px;
            }

            img {
                max-width: 100vw;
                margin-left: -18px;
                margin-right: -18px;
            }
        }
    }

    @media (max-width: 991.98px) {

    }

    @media (max-width: 1199.98px) {

    }
</style>