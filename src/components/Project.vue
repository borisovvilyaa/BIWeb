<template>
  <section class="projects-section" id="projects">
    <div class="container">
      <h2 class="section-title fw-light wow fadeInUp" data-wow-delay="0.2s">
        $Project's _
      </h2>
      <div class="projects-container">
        <div class="project-column wow fadeInLeft" data-wow-delay="0.4s">
          <div class="project-item">
            <h3 class="project-title fw-light">CryptoGuard</h3>
            <p class="project-description fw-light">
              "CryptoGuard" - A Python-based app designed for securing personal
              information using robust cryptographic techniques. It offers
              essential encryption and decryption tools for safeguarding crucial
              files and messages.
            </p>
            <h4 class="features-title fw-light">Key Features:</h4>
            <ul class="features-list fw-light">
              <li>
                File Encryption: Protect sensitive documents with advanced
                encryption algorithms like AES. Users can create encrypted
                containers for secure file storage and management.
              </li>
              <li>
                Message Encryption: "CryptoGuard" features a secure message
                encryption and decryption module for protecting sensitive
                communications.
              </li>
              <li>
                Password Generator: Generate strong and unique passwords
                effortlessly. Enhance online account security with complex,
                hard-to-crack passwords.
              </li>
              <li>
                Password Storage: Safely store passwords in an encrypted
                database accessible only through a master password or biometric
                authentication methods like fingerprint scanning or facial
                recognition.
              </li>
            </ul>
            <p class="project-link">
              <a
                href="https://github.com/borisovvilyaa/CryptoGuard"
                target="_blank"
                class="wow pulse"
                data-wow-delay="0.6s"
                >View on GitHub</a
              >
            </p>
          </div>
        </div>
        <div class="project-column wow fadeInRight" data-wow-delay="0.4s">
          <div class="project-item">
            <h3 class="project-title fw-light">Delta Wallet</h3>
            <p class="project-description fw-light">
              "Delta Wallet" is a cryptocurrency wallet that seamlessly combines
              the power of Vue.js for the frontend and Golang for the backend to
              offer users a secure, efficient, and user-friendly Bitcoin wallet
              experience. With a focus on transaction tracking, decoding, and
              adherence to industry standards, "Delta Wallet" redefines how
              users manage their Bitcoin assets.
            </p>
            <h4 class="features-title fw-light">Key Features:</h4>
            <ul class="features-list fw-light">
              <li>
                Transaction Tracking and Display: "Delta Wallet" empowers users
                to effortlessly keep tabs on their Bitcoin transactions. The
                intuitive interface provides a clear view of transaction
                history, ensuring users can monitor their financial activity
                with ease.
              </li>
              <li>
                Transaction Details: Delve into the specifics of your Bitcoin
                transactions with "Delta Wallet." The wallet excels at decoding
                and presenting comprehensive transaction details, including
                recipient addresses and precise transaction amounts. Gain a
                deeper understanding of your financial interactions.
              </li>
              <li>
                Address Generation and Secure Payments: Generating new Bitcoin
                addresses and securely receiving payments is a breeze with
                "Delta Wallet." The wallet's robust infrastructure guarantees
                the security of these critical functions, giving users peace of
                mind.
              </li>
              <li>
                User-Friendly Interface: Vue.js powers the frontend, delivering
                a responsive and user-friendly interface. Whether on a desktop
                or mobile device, users will appreciate the smooth and intuitive
                interactions.
              </li>
              <li>
                Efficiency with Golang: The backend of "Delta Wallet" relies on
                Golang, ensuring efficiency, robustness, and smooth wallet
                operations. Count on quick and reliable performance as you
                manage your Bitcoin assets.
              </li>
              <li>
                Blockchain Compatibility: "Delta Wallet" seamlessly interacts
                with the Bitcoin blockchain, guaranteeing the utmost security
                and reliability in all your transactions. Your Bitcoin holdings
                are in safe hands.
              </li>
            </ul>
            <p class="project-link">
              <a
                href="https://github.com/borisovvilyaa/delta-wallet"
                target="_blank"
                class="wow pulse"
                data-wow-delay="0.6s"
                >View on GitHub</a
              >
            </p>
            <p class="project-link">
              <a
                href="https://www.youtube.com/watch?v=6TRhg9BZPEs"
                target="_blank"
                class="wow pulse"
                data-wow-delay="0.8s"
                >Watch Demo on YouTube</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "ProjectsSection",
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.projects-section {
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

  .projects-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .project-column {
    width: 100%;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      width: 48%;
      margin-bottom: 0;
    }
  }

  .project-item {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 8px;

    @media (min-width: 768px) {
      margin-bottom: 50px;
      padding: 30px;
    }
  }

  .project-title {
    font-size: 20px;
    margin-bottom: 24px;
    color: #f0f0f0;

    @media (min-width: 768px) {
      font-size: 23px;
      margin-bottom: 34px;
    }
  }

  .project-description {
    font-size: 16px;
    margin-bottom: 16px;
    color: #e0e0e0;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .features-title {
    font-size: 18px;
    margin-bottom: 12px;
    color: #f0f0f0;

    @media (min-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }

  .features-list {
    padding-left: 20px;

    li {
      font-size: 14px;
      margin-bottom: 8px;
      color: #e0e0e0;

      @media (min-width: 768px) {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  .project-link {
    margin-top: 16px;
    font-size: 16px;

    @media (min-width: 768px) {
      margin-top: 20px;
      font-size: 18px;
    }

    a {
      color: #ffffff;
      padding: 8px 16px;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        padding: 10px 20px;
      }
    }
  }
}
</style>
