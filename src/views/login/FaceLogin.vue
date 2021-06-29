<template>
  <div class="face-container">
    <div class="face-card">
      <div class="camera_outer">
        <video
          ref="videoCamera"
          :width="videoWidth"
          :height="videoHeight"
          autoplay
        ></video>
        <canvas
          style="display: none"
          ref="canvasCamera"
          :width="videoWidth"
          :height="videoHeight"
        ></canvas>
      </div>
    </div>
    <div class="btn-wrap">
      <el-button @click="login" v-loading.fullscreen.lock="fullscreenLoading">刷脸</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaceLogin",
  data() {
    return {
      videoWidth: 300,
      videoHeight: 300,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      fullscreenLoading: false,
    };
  },
  mounted() {
    this.getCompetence();
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence() {
      var _this = this;
      this.thisCancas = this.$refs.canvasCamera;
      this.thisContext = this.thisCancas.getContext("2d");
      this.thisVideo = this.$refs.videoCamera;
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          // 旧的浏览器可能没有srcObject
          if ("srcObject" in _this.thisVideo) {
            _this.thisVideo.srcObject = stream;
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream);
          }
          _this.thisVideo.onloadedmetadata = function(e) {
            _this.thisVideo.play();
          };
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  绘制图片（拍照功能）

    getImage() {
      var _this = this;
      // 点击，canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight
      );
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL("image/png");
      // _this.imgSrc = image;
      return image;
      // this.$emit("refreshDataList", this.imgSrc);
    },
    // base64转文件

    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(",");
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    // 关闭摄像头

    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop();
    },

    login() {
      this.fullscreenLoading = true;
      const dataUrl = this.getImage();
      const file = this.dataURLtoFile(dataUrl, 'face.png');
      const formData = new FormData();
      formData.append('faceImage', file);
      this.$http({
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        url: 'http://localhost:8080/face_login',
        data: formData
      }).then(res => {
        this.fullscreenLoading = false;
        const data = res.data;
        if ((data.status >= 200 && data.status < 300) || data.status === 304 ) {
          this.$store.commit('initUserInfo', data.data.user)
          this.$message({ type: 'success', message: "登录成功" });
          const that = this;
          setTimeout(() => {
            that.$router.replace({ path: '/index' })
          }, 1500)
        } else {
          this.$message({ type: 'warning', message: data.message })
        }
      })
    }
  },
  beforeDestroy() {
    this.stopNavigator();
    this.thisCancas = null,
    this.thisContext = null,
    this.thisVideo = null
  }
};
</script>

<style lang="css" scoped>
.face-container {
  margin: 0;
  height: 100vh;
  box-sizing: border-box;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.face-card {
  border: 2px solid #ddd;
  width: 300px;
  padding: 10px;
  border-radius: 50%;
  margin: 0 auto;
}
video,
.camera_outer {
  border-radius: 50%;
}
.btn-wrap {
  margin-top: 10px;
  text-align: center;
}
</style>