<template>
  <div class="weight">
    <div class="items">
      <div class="item active" @click="addClass">
        <div class="num">2</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">2.5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">3</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">4</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">6</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">7</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">8</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">9</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">10</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass">
        <div class="num">11</div>
        <div class="kg">кг</div>
      </div>
    </div>
    <div class="next_back">
      <img src="/images/expand.svg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addClass: function (event) {
      let elems = document.querySelectorAll(".item");
      [].forEach.call(elems, function (el) {
        el.classList.remove("active");
      });
      document.querySelectorAll(".item").forEach((el) =>
        el.addEventListener("click", function (e) {
          this.classList.add("active");
        })
      );
    },
  },
};
</script>

<style scoped>
.weight {
  display: flex;
}
.kg::before {
  /* content: "кг"; */
}
.items {
  display: flex;
  gap: 5px;
}
.item {
  background-color: #f2f2f2;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  display: none;
  line-height: 0.9;
  cursor: pointer;
  border: 2px solid #f2f2f2;
}

.item:nth-child(-n + 5) {
  display: flex;
}

.item.active {
  border: 2px solid #f2f2f2;
  background-color: #fff;
  position: relative;
}
.item.active::before {
  content: url("/images/checkbox.svg");
  position: absolute;
  left: -7px;
  top: -7px;
}

.next_back {
  background-color: #f2f2f2;
  border: 2px solid #f2f2f2;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  margin-left: 5px;
  cursor: pointer;
}
.next_back img {
  transform: rotate(90deg);
  width: 20px;
}
</style>
