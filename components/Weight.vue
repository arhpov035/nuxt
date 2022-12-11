<template>
  <div class="weight">
    <div class="items">
      <div class="item active" @click="addClass(0)">
        <div class="num">2</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(1)">
        <div class="num">2.5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(2)">
        <div class="num">3</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(3)">
        <div class="num">4</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(4)">
        <div class="num">5</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(5)">
        <div class="num">6</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(6)">
        <div class="num">7</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(7)">
        <div class="num">8</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(8)">
        <div class="num">9</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(9)">
        <div class="num">10</div>
        <div class="kg">кг</div>
      </div>
      <div class="item" @click="addClass(10)">
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
    addClass (i) {
      let elems = document.querySelectorAll(".weight .item");
      [].forEach.call(elems, function (el, index) {
        el.classList.remove("active");
        if  (i == index) {
          el.classList.add("active");
        }
        console.log(index)
        console.log(i)
      });

      // console.log(elems[0].textContent)

      // document.querySelectorAll(".item").forEach((el) =>
      //   el.addEventListener("click", function (e) {
      //     this.classList.add("active");
      //   })
      // );


      // document.querySelectorAll(".item").forEach((n, i, a) => {
      //   n.addEventListener("click", () =>
      //     a.forEach((m) => m.classList.toggle("active", m === n))
      //   );
      // });
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
