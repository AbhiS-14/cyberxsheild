const counters = document.querySelectorAll(".counter");
let started = false;

function runCounter() {

    if (started) return;

    const stats = document.getElementById("stats");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let count = 0;

            const increment = Math.ceil(target / 100);

            function updateCounter() {

                count += increment;

                if (count < target) {

                    counter.innerText = count;
                    requestAnimationFrame(updateCounter);

                } else {

                    if (target >= 1000) {
                        counter.innerText = (target / 1000) + "K+";
                    }
                    else {
                        counter.innerText = target + "+";
                    }

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounter);
window.addEventListener("load", runCounter);