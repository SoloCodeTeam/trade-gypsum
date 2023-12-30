import "./style.css"
import gsap from "gsap";
export function Projects() {
    const arrowBtns = document.querySelectorAll('.arrow-btn')
    const cardBtns = document.querySelectorAll('.card')
    let currentCard = 2;
    let dir = 1;
    moveCards()

    arrowBtns.forEach((btn, i) => {
        btn.onpointerenter = (e) => gsap.to(btn, {
            ease: 'expo',
            'box-shadow': '0 3px 4px #00000050'
        })

        btn.onpointerleave = (e) => gsap.to(btn, {
            ease: 'expo',
            'box-shadow': '0 6px 8px #00000030'
        })

        btn.onclick = (e) => {
            dir = (i == 0) ? 1 : -1
            if (i == 0) {
                currentCard--
                currentCard = Math.max(0, currentCard)
            }
            else {
                currentCard++
                currentCard = Math.min(4, currentCard)
            }
            moveCards(0.75)
        }
    })

    cardBtns.forEach((btn, i) => {
        btn.onpointerenter = (e) => gsap.to(btn, {
            ease: 'power3',
            overwrite: 'auto',
            'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 6px 11px #00000030'
        })

        btn.onpointerleave = (e) => gsap.to(btn, {
            ease: 'power3',
            overwrite: 'auto',
            'box-shadow': () => (i == currentCard) ? '0 6px 11px #00000030' : '0 0px 0px #00000030'
        })

        btn.onclick = (e) => {
            dir = (i < currentCard) ? 1 : -1
            currentCard = i
            moveCards(0.75)
        }
    })

    function moveCards(dur = 0) {
        gsap.timeline({ defaults: { duration: dur, ease: 'power3', stagger: { each: -0.03 * dir } } })
            .to('.card', {
                x: -270 * currentCard,
                y: (i) => (i == currentCard) ? 0 : 15,
                height: (i) => (i == currentCard) ? 270 : 240,
                ease: 'elastic.out(0.4)'
            }, 0)
            .to('.card', {
                cursor: (i) => (i == currentCard) ? 'default' : 'pointer',
                'box-shadow': (i) => (i == currentCard) ? '0 6px 11px #00000030' : '0 0px 0px #00000030',
                border: (i) => (i == currentCard) ? '2px solid #26a' : '0px solid #fff',
                background: (i) => (i == currentCard) ? 'radial-gradient(100% 100% at top, #fff 0%, #fff 99%)' : 'radial-gradient(100% 100% at top, #fff 20%, #eee 175%)',
                ease: 'expo'
            }, 0)
            .to('.icon svg', {
                attr: {
                    stroke: (i) => (i == currentCard) ? 'transparent' : '#36a',
                    fill: (i) => (i == currentCard) ? '#36a' : 'transparent'
                }
            }, 0)
            .to('.arrow-btn-prev', {
                autoAlpha: (currentCard == 0) ? 0 : 1
            }, 0)
            .to('.arrow-btn-next', {
                autoAlpha: (currentCard == 4) ? 0 : 1
            }, 0)
            .to('.card h4', {
                y: (i) => (i == currentCard) ? 0 : 8,
                opacity: (i) => (i == currentCard) ? 1 : 0,
            }, 0)
    }
    return (
        <div class='cards-wrapper'>
            <div class='cards'>
                <button class='card card1' tabindex="-1">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200">
                            <path d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40h152c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-32c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-40H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h8v-32c0-30.9 25.1-56 56-56h152v-40h-8c-26.5 0-48-21.5-48-48V80z" />
                        </svg>
                    </div>
                    <h2>Card 1</h2>
                    <h4>Lorem</h4>
                </button>

                <button class='card card2' tabindex="-1">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200">
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L477.4 348.9c1.7-9.4 2.6-19 2.6-28.9h64c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64.3c-1.1-14.1-5-27.5-11.1-39.5.7-.6 1.4-1.2 2.1-1.9l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-.7.7-1.3 1.4-1.9 2.1-14.3-7.3-30.4-11.4-47.5-11.4H264c-8.3 0-16.3 1-24 2.8L38.8 5.1zM320 0c-53 0-96 43-96 96v3.6c0 15.7 12.7 28.4 28.4 28.4h135.2c15.7 0 28.4-12.7 28.4-28.4V96c0-53-43-96-96-96zM160.3 256H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c0 24.6 5.5 47.8 15.4 68.6-2.2 1.3-4.2 2.9-6 4.8l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l63.1-63.1a159.2 159.2 0 0 0 90.3 39.6V335.5L166.7 227.3c-3.4 9-5.6 18.7-6.4 28.7zM336 479.2c36.6-3.6 69.7-19.6 94.8-43.8L336 360.7v118.5z" />
                        </svg>
                    </div>
                    <h2>Card 2</h2>
                    <h4>Ipsum</h4>
                </button>

                <button class='card card3' tabindex="-1">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200">
                            <path d="M308.5 135.3a22 22 0 0 0 6.2-25 171 171 0 0 0-7.6-15.5l-3.1-5.4c-3-5-6.3-9.9-9.8-14.6a22 22 0 0 0-24.7-7.1L241.3 77c-10.7-8.8-23-16-36.2-20.9l-6.1-29a21.9 21.9 0 0 0-18.5-17.8c-6.6-.9-13.3-1.3-20.1-1.3h-.7c-6.8 0-13.5.4-20.1 1.2A22 22 0 0 0 121.1 27L115 56.1c-13.3 5-25.5 12.1-36.2 20.9l-28.3-9.2c-9-3-19-.5-24.7 7.1-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6a22.1 22.1 0 0 0 6.2 25l22.2 19.8a128.8 128.8 0 0 0 0 41.7l-22.2 19.8a22 22 0 0 0-6.2 25 187 187 0 0 0 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6a22 22 0 0 0 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1a21.9 21.9 0 0 0 18.5 17.8 172 172 0 0 0 40.8 0 22 22 0 0 0 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1 3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4a171 171 0 0 0 7.6-15.5c3.7-8.7.9-18.6-6.2-25l-22.2-19.8a131 131 0 0 0 0-41.8l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm392.7 324.5a22 22 0 0 0 25 6.2 171 171 0 0 0 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8a22 22 0 0 0 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2L613 391a21.9 21.9 0 0 0 17.8-18.5 172 172 0 0 0 0-40.8 22 22 0 0 0-17.8-18.5l-29.1-6.2c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6a22.1 22.1 0 0 0-25 6.2l-19.8 22.2a131 131 0 0 0-41.8 0l-19.8-22.2a22 22 0 0 0-25-6.2 187 187 0 0 0-15.6 7.6l-5.2 3a144 144 0 0 0-14.6 9.9 22 22 0 0 0-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2l-29.1 6a21.9 21.9 0 0 0-17.8 18.5 172 172 0 0 0 0 40.8 22 22 0 0 0 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7 4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1a171 171 0 0 0 15.5 7.6c8.7 3.7 18.6.9 25-6.2l19.8-22.2a131 131 0 0 0 41.8 0l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                        </svg>
                    </div>
                    <h2>Card 3</h2>
                    <h4>dolor</h4>
                </button>

                <button class='card card4' tabindex="-1">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200">
                            <path d="M176 24a24 24 0 1 0-48 0v40a64 64 0 0 0-64 64H24a24 24 0 1 0 0 48h40v56H24a24 24 0 1 0 0 48h40v56H24a24 24 0 1 0 0 48h40a64 64 0 0 0 64 64v40a24 24 0 1 0 48 0v-40h56v40a24 24 0 1 0 48 0v-40h56v40a24 24 0 1 0 48 0v-40a64 64 0 0 0 64-64h40a24 24 0 1 0 0-48h-40v-56h40a24 24 0 1 0 0-48h-40v-56h40a24 24 0 1 0 0-48h-40a64 64 0 0 0-64-64V24a24 24 0 1 0-48 0v40h-56V24a24 24 0 1 0-48 0v40h-56V24zm-16 104h192a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm192 32H160v192h192V160z" />
                        </svg>
                    </div>
                    <h2>Card 4</h2>
                    <h4>sit amet</h4>
                </button>

                <button class='card card5' tabindex="-1">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 200">
                            <path d="M418.4 157.9A80 80 0 1 0 320 77.5l-183.8 73.6a80 80 0 1 0-22.1 129.3l145.6 127.4a80 80 0 1 0 120.9-42.2l37.8-207.7zm-262.1 74.3a78.3 78.3 0 0 0 3.7-21.7L343.8 137c3.6 3.5 7.4 6.7 11.6 9.5l-37.8 207.6a77.8 77.8 0 0 0-15.8 5.5L156.3 232.2z" />
                        </svg>
                    </div>
                    <h2>Card 5</h2>
                    <h4>consectetur</h4>
                </button>

            </div>
            <button class="arrow-btn arrow-btn-prev" tabindex="0">
                <svg viewBox="0 0 256 512">
                    <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </svg>
            </button>
            <button class="arrow-btn arrow-btn-next" tabindex="0">
                <svg viewBox="0 0 256 512">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
            </button>
        </div>
    )
}