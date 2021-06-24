<template>
  <div class="wrapper">
    <h1 class="title">CIS 员工之家</h1>
    <div id="bubbles">
      <div class="bubble x1"></div>
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4"></div>
      <div class="bubble x5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="css" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
}
.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#bubbles {
  height: 100%;
}

#bubbles {
  padding: 100px 0;
}
.bubble {
  width: 60px;
  height: 60px;
  background: #ffb200;
  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  position: absolute;
}

.x1 {
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 0.2;
  -webkit-animation: moveclouds 15s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: moveclouds 15s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -o-animation: moveclouds 15s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
}

.x2 {
  left: 200px;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.5;
  -webkit-animation: moveclouds 25s linear infinite,
    sideWays 5s ease-in-out infinite alternate;
  -moz-animation: moveclouds 25s linear infinite,
    sideWays 5s ease-in-out infinite alternate;
  -o-animation: moveclouds 25s linear infinite,
    sideWays 5s ease-in-out infinite alternate;
}
.x3 {
  left: 350px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.3;
  -webkit-animation: moveclouds 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: moveclouds 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -o-animation: moveclouds 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
}
.x4 {
  left: 470px;
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.35;
  -webkit-animation: moveclouds 18s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: moveclouds 18s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -o-animation: moveclouds 18s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
}
.x5 {
  left: 150px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.3;
  -webkit-animation: moveclouds 7s linear infinite,
    sideWays 1s ease-in-out infinite alternate;
  -moz-animation: moveclouds 7s linear infinite,
    sideWays 1s ease-in-out infinite alternate;
  -o-animation: moveclouds 7s linear infinite,
    sideWays 1s ease-in-out infinite alternate;
}
@-webkit-keyframes moveclouds {
  0% {
    top: 500px;
  }
  100% {
    top: -500px;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes moveclouds {
  0% {
    top: 500px;
  }

  100% {
    top: -500px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
@-o-keyframes moveclouds {
  0% {
    top: 500px;
  }
  100% {
    top: -500px;
  }
}

@-o-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
</style>