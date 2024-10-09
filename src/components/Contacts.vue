<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <h2 class="section-title fw-light">$Contact _</h2>
      <div class="contact-container">
        <div class="contact-column">
          <div class="contact-item">
            <h3 class="contact-title fw-light">Get in Touch</h3>
            <p class="contact-description fw-light">
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind, a question about my work, or just want
              to say hello:], feel free to reach out.
            </p>
            <div class="contact-info">
              <div class="contact-info-item">
                <i class="bi bi-envelope contact-icon"></i>
                <a
                  href="mailto:borisovvilyaa@gmail.com"
                  class="contact-link fw-light"
                  >borisovvilyaa@gmail.com</a
                >
              </div>
              <div class="contact-info-item">
                <i class="bi bi-linkedin contact-icon"></i>
                <a
                  href="https://www.linkedin.com/in/illia-borusov-53a39a1ba/"
                  target="_blank"
                  class="contact-link fw-light"
                  >LinkedIn Profile</a
                >
              </div>
              <div class="contact-info-item">
                <i class="bi bi-github contact-icon"></i>
                <a
                  href="https://github.com/borisovvilyaa"
                  target="_blank"
                  class="contact-link fw-light"
                  >GitHub Profile</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style lang="scss" scoped>
.contact-section {
  background-color: #222121;
  padding: 60px 0;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  .section-title {
    text-align: left;
    margin-bottom: 24px;
    font-size: 20px;

    @media (min-width: 768px) {
      margin-bottom: 32px;
      font-size: 24px;
    }
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .contact-column {
    width: 100%;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      width: 100%;
      margin-bottom: 0;
    }
  }

  .contact-item {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 8px;

    @media (min-width: 768px) {
      margin-bottom: 50px;
      padding: 30px;
    }
  }

  .contact-title {
    font-size: 20px;
    margin-bottom: 24px;
    color: #f0f0f0;

    @media (min-width: 768px) {
      font-size: 23px;
      margin-bottom: 34px;
    }
  }

  .contact-description {
    font-size: 16px;
    margin-bottom: 16px;
    color: #e0e0e0;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .contact-info {
    margin-top: 20px;
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .contact-icon {
    font-size: 24px;
    margin-right: 15px;
    color: #f0f0f0;
  }

  .contact-link {
    color: #e0e0e0;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
