<template>
  <div>
    <div class="scene">
      <div ref="cube" class="cube">
        <img
          src="../../assets/home/horizontal/1.jpeg"
          class="cube__face cube__face--front"
          alt="front"
        />
        <img
          src="../../assets/home/horizontal/2.jpeg"
          class="cube__face cube__face--back"
          alt="back"
        />
        <img
          src="../../assets/home/horizontal/3.jpeg"
          class="cube__face cube__face--right"
          alt="right"
        />
        <img
          src="../../assets/home/horizontal/4.jpeg"
          class="cube__face cube__face--left"
          alt="left"
        />
        <img
          src="../../assets/home/horizontal/5.jpeg"
          class="cube__face cube__face--top"
          alt="top"
        />
        <img
          src="../../assets/home/horizontal/6.jpeg"
          class="cube__face cube__face--bottom"
          alt="bottom"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CubeMain",
  methods: {},
};
</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
}

.cube {
  animation: spinCube 2s infinite ease-in-out;
}

@keyframes spinCube {
  0% {
    transform: translateZ(-100px) rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: translateZ(-100px) rotateX(360deg) rotateY(360deg);
  }
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: hsla(0, 100%, 50%, 0.7);
}
.cube__face--right {
  background: hsla(60, 100%, 50%, 0.7);
}
.cube__face--back {
  background: hsla(120, 100%, 50%, 0.7);
}
.cube__face--left {
  background: hsla(180, 100%, 50%, 0.7);
}
.cube__face--top {
  background: hsla(240, 100%, 50%, 0.7);
}
.cube__face--bottom {
  background: hsla(300, 100%, 50%, 0.7);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.cube.is-backface-hidden .cube__face {
  backface-visibility: hidden;
}
</style>
