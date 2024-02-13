let text = "Hello, There are many things to express but from the day i saw you in the Marco Polo bus during the evening of our 4th semester, I have been overwhelmed with feelings that I have never experienced for anyone else. Your eyes, your cuteness, your voice, your nature, and most importantly the teeth 😂 is like ... (can't find words). Literally just a glimpse of your smile is enough to make an angry person smile. I really like you Anurupa bht bht bht jada wala and Happy Propose Day 🩷.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();