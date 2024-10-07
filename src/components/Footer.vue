<template>
  <footer id="footer" class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5 class="footer-title">Illia Borusov</h5>
          <p>Full Stack Developer</p>
        </div>
        <div class="col-md-4">
          <h5 class="footer-title">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="#home" class="footer-link">Home</a></li>
            <li><a href="#education" class="footer-link">Education</a></li>
            <li><a href="#projects" class="footer-link">Projects</a></li>
            <li><a href="#contacts" class="footer-link">Contacts</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 class="footer-title">Contact</h5>
          <p>Email: borisovvilyaa@gmail.com</p>
          <p>Location: Ukraine, Kharkiv</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer-section {
  background-color: #222121;
  color: #ffffff;
  padding: 40px 0;
  font-family: "Courier New", Courier, monospace;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #cccccc;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

@media (max-width: 767px) {
  .footer-section .col-md-4 {
    margin-bottom: 30px;
  }
}
</style>
