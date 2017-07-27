<template>
  <div class="about">
    <!-- <div class="aboutbanner"> -->
      <!-- <div class="info">
        <div class="txt">
          <h3 class="tle">名字名字</h3>
          <p><span>专业是什么</span></p>
          <p><span>这个不重要这个不</span></p>
          <p><span>这个不重要不重要</span></p>
          <p><span>这个不重要这个不重要</span></p>
        </div>
      </div> -->

    <!-- </div> -->
    <div class="basicwrap translucent6">
      <div class="basicbox">
        <p>2016本科毕业于江西新余学院，目前仍在职</p>
        <p>喜欢各种层出不穷的新技术</p>
        <p>目前主攻nodejs</p>
        <p>听说这是从小前端转向大前端的最佳路径</p>
      </div>
    </div>

    <div class="skillwrap w1280 translucent6">
      <div class="skillbox">


      </div>
      <div class="echartswrap">
        <div class="echartsbox" id="skillsecharts"></div>
      </div>
    </div>




  </div>
</template>

<script>


import echarts from 'echarts'
	export default {
		data() {
			return {
        skillsecharts:null,

			}
		},
		computed:{

    },
		methods: {


		},
		mounted() {
    this.skillsecharts = echarts.init(document.getElementById('skillsecharts'));
    this.skillsecharts.setOption({
      color: ['#0078D7'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow' ,
          color:['#fff']       // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['ps', 'vue', 'node', 'h5', 'css', 'sass',],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          // type : 'category',
          // data : ['10','20','30','40'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      series : [
        {
          name:'掌握程度',
          type:'bar',
          barWidth: '40%',
          data:[70, 85, 80, 90, 90, 75]
        },

      ],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c}'
        }
      },
      itemStyle: {
        normal: {

          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            // color: 'rgba(17, 168,171, 1)'
            color: 'rgba(0, 120, 215, 1)'
          }, {
            offset: 1,
            color: 'rgba(0, 120, 215, 0.1)'
          }]),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      }
    }

    );

		}
	}


</script>
