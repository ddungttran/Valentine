const noBtn = document.getElementById('noBtn');
        const yesBtn = document.getElementById('yesBtn');
        const container = document.querySelector('.container');
        let noBtnClickCount = 0;

        // Function to create floating hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }

        // Function to get random position
        function getRandomPosition() {
            const viewportWidth = window.innerWidth - 100;
            const viewportHeight = window.innerHeight - 100;
            return {
                x: Math.random() * viewportWidth,
                y: Math.random() * viewportHeight
            };
        }

        // No button event
        noBtn.addEventListener('mouseover', () => {
            const pos = getRandomPosition();
            noBtn.style.position = 'absolute';
            noBtn.style.left = pos.x + 'px';
            noBtn.style.top = pos.y + 'px';
            noBtnClickCount++;
            
            // Change button text based on attempts
            const phrases = [
                "Try again",
                "Hell nah!",
                "Fuck no!",
                "Click yes bruh",
                "Nice try diddy!",
                "Stop trying!",
                "Are u restarded!",
                "LMAO",
                "Are u acoustic",
                "Click yes PLS"
            ];
            
            noBtn.textContent = phrases[noBtnClickCount % phrases.length];
        });

        // Yes button event
        yesBtn.addEventListener('click', () => {
            // Clear existing content
            container.innerHTML = `
                <h1>HEHE! I knew you'd say yes! 🎉</h1>
                <p style="font-size: 1.5rem; color: #ff4646;">Happy Valentine's Day! </p>
                <p style="font-size: 1.5rem; color: #ff4646;">I love youuuu! ❤️</p>
                `;
            
            // Create heart animation
            setInterval(createHeart, 200);
        });