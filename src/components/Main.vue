<template>
  <!-- Main hero section -->
  <section class="hero-section" id="home">
    <!-- Container for hero content -->
    <div class="hero-content">
      <!-- Text content of the hero section -->
      <div class="hero-text text-center">
        <!-- Main title -->
        <h1 class="hero-title fw-light">Illia Borusov</h1>
        <!-- Subtitle with typewriter animation -->
        <h2 class="hero-subtitle fw-light typewriter">{{ currentText }}</h2>
        <!-- Social media links with terminal-style animation -->
        <div class="hero-social terminal-animation">
          <a
            v-for="link in socialLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "HeroSection",
  setup() {
    const currentText = ref("");
    const texts = [
      "Software",
      "Hardware",
      "Blockchain Enthusiast",
      "Crypto R&D",
    ];
    let currentIndex = 0;

    const typeText = () => {
      const text = texts[currentIndex];
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        if (charIndex < text.length) {
          currentText.value += text[charIndex];
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(eraseText, 2000);
        }
      }, 100);
    };

    const eraseText = () => {
      const erasingInterval = setInterval(() => {
        if (currentText.value.length > 0) {
          currentText.value = currentText.value.slice(0, -1);
        } else {
          clearInterval(erasingInterval);
          currentIndex = (currentIndex + 1) % texts.length;
          setTimeout(typeText, 500);
        }
      }, 50);
    };

    onMounted(() => {
      typeText();
    });

    const socialLinks = [
      { url: "https://t.me/illiaborusov", name: "Telegram" },
      { url: "https://github.com/borisovvilyaa", name: "GitHub" },
      {
        url: "https://www.linkedin.com/in/illia-borusov-53a39a1ba/",
        name: "LinkedIn",
      },
      { url: "https://www.youtube.com/@Floretona", name: "YouTube" },
      { url: "mailto:borisovvilyaa@gmail.com", name: "Email" },
    ];

    return {
      currentText,
      socialLinks,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url("@/assets/Home/bg.png") no-repeat center;
  background-size: cover;
  background-color: #222121;
  padding: 40px 20px;
  color: #ffffff;

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }

  .hero-text {
    max-width: 700px;
    margin-bottom: 40px;
    text-align: center;

    .hero-title {
      font-size: 48px;
      margin-bottom: 7px;
      color: #ffffff;
    }

    .hero-social {
      display: flex;
      gap: 10px;
      margin-top: 34px;
      justify-content: center;
    }

    .hero-subtitle {
      font-size: 24px;
      margin-bottom: 15px;
      color: #ffffff;
      min-height: 1.5em;
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      align-items: center;
    }
    .hero-title {
      font-size: 2rem;
    }
    .hero-subtitle {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 576px) {
    padding: 20px 10px;
    .hero-title {
      font-size: 1.75rem;
    }
    .hero-subtitle {
      font-size: 1rem;
    }
  }
}

// Terminal-style animation for social links
.terminal-animation {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.social-link {
  color: #ffffff;
  font-size: 16px;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #35625c;
  }
}
</style>
