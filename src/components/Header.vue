<template>
  <header class="header-section" id="header">
    <div class="container">
      <nav class="navbar">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" v-model="isMenuOpen" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <div class="menu__box" :class="{ 'menu__box--open': isMenuOpen }">
            <ul>
              <li>
                <a class="menu__item" href="/#home" @click="closeMenu"
                  >$ home</a
                >
              </li>
              <li>
                <a class="menu__item" href="/#projects" @click="closeMenu"
                  >$ projects</a
                >
              </li>
              <li>
                <a class="menu__item" href="/#education" @click="closeMenu"
                  >$ education</a
                >
              </li>
              <li>
                <a class="menu__item" href="/#contact" @click="closeMenu"
                  >$ contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.header-section {
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}

#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}

#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}

.menu__btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1001;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition-duration: 0.25s;
}

.menu__btn > span::before {
  content: "";
  top: -8px;
}

.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #222121;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.25s;
  opacity: 0;
  visibility: hidden;
}

.menu__box--open {
  opacity: 1;
  visibility: visible;
}

.menu__box ul {
  text-align: center;
  li {
    list-style: none;
  }
}

.menu__item {
  display: block;
  padding: 12px 24px;
  font-weight: 200;
  color: #ffffff;
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  text-decoration: none;
  transition-duration: 0.25s;
}
</style>
