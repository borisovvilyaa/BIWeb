<template>
  <section class="education-section" id="education">
    <div class="container">
      <h2 class="section-title fw-light wow fadeInUp" data-wow-delay="0.2s">
        $Education _
      </h2>
      <div class="education-container">
        <div class="education-column wow fadeInLeft" data-wow-delay="0.4s">
          <div class="education-item">
            <h3 class="column-title fw-light">
              Higher and Secondary Education
            </h3>
            <div v-for="(item, index) in educationItems" :key="index">
              <h4 class="education-title fw-light">{{ item.degree }}</h4>
              <p class="education-institution fw-light">
                {{ item.institution }}
              </p>
              <p class="education-date fw-light">{{ item.date }}</p>
              <p class="education-gpa fw-light" v-if="item.gpa">
                GPA: {{ item.gpa }}
              </p>
              <p class="education-description fw-light">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="education-column wow fadeInRight" data-wow-delay="0.4s">
          <div class="education-item">
            <h3 class="column-title fw-light">Courses</h3>
            <div v-for="(course, index) in courseItems" :key="index">
              <h4 class="education-title fw-light">{{ course.degree }}</h4>
              <p class="education-institution fw-light">
                {{ course.institution }}
              </p>
              <p class="education-date fw-light">{{ course.date }}</p>
              <p class="education-gpa fw-light" v-if="course.gpa">
                GPA: {{ course.gpa }}
              </p>
              <p class="education-description fw-light">
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p
        class="education-note fw-light wow fadeInUp"
        data-wow-delay="0.6s"
        style="font-style: italic; font-size: 0.9em"
      >
        P.S: In all courses was tasks with coding.
        <a
          href="https://github.com/borisovvilyaa/Distributed-Lab-tasks/tree/main"
          target="_blank"
          class="wow pulse"
          data-wow-delay="0.8s"
          >Links on this tasks</a
        >
        and
        <a
          href="https://distributed.education/certification"
          target="_blank"
          class="wow pulse"
          data-wow-delay="1s"
          >links to certificates</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "EducationSection",
  data() {
    return {
      educationItems: [
        {
          degree: "Software Engineer - Bachelor",
          institution:
            "National Technical University – «Kharkiv Polytechnic Institute», Ukraine",
          date: "Sep 2021 - Jul 2025",
          description:
            "The primary emphasis is on the hardware aspect of computers, which is a crucial component alongside software programming. The curriculum covers topics such as web services, programming for both Linux and Windows gaming platforms. Additionally, it places significant importance on cultivating game development skills, which is another integral aspect of the specialization.",
          gpa: "4.2",
        },
        {
          degree: "Computer science",
          institution: "Kharkiv Lyceum 83, Ukraine",
          date: "Sep 2010 - Jun 2021",
          description:
            'Specialty "Computer technology with advanced study". In 2020 he took the 3rd place at the city Olympiad in the field of game creation.',
          gpa: "4.0 & Excellent CS certificate",
        },
      ],
      courseItems: [
        {
          degree: "Golang programming on fundamental aspects",
          institution: "Distributed Lab, Ukraine",
          date: "Apr 2023 - May 2023",
          description:
            "This course provided a comprehensive introduction to the fundamentals of the Go programming language. It covered essential topics such as program structure, variables, data types, expressions, conditionals, loops, functions, recursion, pointers, structures, methods, packages, and interfaces. Additionally, it delved into advanced concepts like parallel programming using goroutines, data stream transmission, and file I/O, offering a solid foundation for further exploration and application of Go programming principles.",
          gpa: "5.0",
        },
        {
          degree: "Cryptography and information security theory",
          institution: "Distributed Lab, Ukraine",
          date: "May 2023 - Aug 2023",
          description:
            "During cryptography course, I covered basic properties, cryptology definitions, modular arithmetic, hash functions, symmetric encryption, classical ciphers, statistical analysis, key exchange, Diffie-Hellman, RSA, digital signatures, elliptic curves, and security issues in cryptosystems.",
          gpa: "3.8",
        },
        {
          degree: "Beginner at theoretical aspects blockchain technology",
          institution: "Distributed Lab, Ukraine",
          date: "Sep 2022 - Jan 2023",
          description:
            "I learned decentralized technologies, Bitcoin as a decentralized platform, blockchain, cryptography with a focus on hash functions, Bitcoin's functioning, transaction fees, Bitcoin Script, digital wallets, key management, blockchain operations in Bitcoin, addresses, and transactions. Additionally, we discussed issuance and mining in Bitcoin, the Merkle Tree concept, key formats, elliptic cryptography, decentralized file sharing systems, participants' roles in the Bitcoin system, and the security model in decentralized accounting systems during course.",
          gpa: "3.1",
        },
        {
          degree: "Basic theory about decentralized finance",
          institution: "Distributed Lab, Ukraine",
          date: "Feb 2023 - Apr 2023",
          description:
            "The course covered stablecoins (USDT, USDC, DAI, FRAX), decentralized exchanges (Uniswap, Uniswap v2, Uniswap v3, Curve), lending protocols (AAVE and Compound), financial derivatives, GMX, Synthetix, zero-knowledge proof technology, decentralized identity (Polygon ID). In addition, we discussed liquid staking with Lido and Rocket Pool.",
          gpa: "4.0",
        },
      ],
    };
  },
  mounted() {
    new WOW().init();
  },
};
</script>

<style lang="scss" scoped>
.education-section {
  background-color: #222121;
  padding: 80px 0;
  color: #ffffff;

  .section-title {
    text-align: left;
    margin-bottom: 32px;
    font-size: 24px;
  }

  .education-container {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .education-column {
    width: 100%;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      width: 48%;
      margin-bottom: 0;
    }
  }

  .education-item {
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 8px;

    @media (min-width: 768px) {
      padding: 30px;
    }
  }

  .column-title {
    font-size: 20px;
    margin-bottom: 24px;
    color: #f0f0f0;

    @media (min-width: 768px) {
      font-size: 23px;
      margin-bottom: 34px;
    }
  }

  .education-title {
    font-size: 18px;
    margin-bottom: 10px;
    color: #f0f0f0;

    @media (min-width: 768px) {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }

  .education-institution,
  .education-description {
    font-size: 14px;
    margin-bottom: 8px;
    color: #e0e0e0;

    @media (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  .education-date,
  .education-gpa {
    font-size: 12px;
    color: #cccccc;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  .education-note {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;

    @media (min-width: 768px) {
      margin-top: 40px;
      font-size: 18px;
    }

    a {
      color: #999999;
      text-decoration: underline;
      padding: 5px 10px;
      transition: all 0.3s ease;
      margin: 0 5px;

      @media (min-width: 768px) {
        padding: 10px 20px;
        margin: 0 10px;
      }

      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
