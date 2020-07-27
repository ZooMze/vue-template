<template>
  <div class="app-container">
    这里是工作台界面, 所有角色都可以查看
    <el-button type="button" @click="saveImg">保存为图片</el-button>
    <el-button type="button" @click="goToPage('Form')">去一个form页面</el-button>
    <el-button type="button" @click="goToPage('FormDetail')">去一个form的详情页</el-button>
    <div class="dashboard-container" style="width: calc(100% - 60px); display: flex; justify-content: space-between">
      <!-- <div class="dashboard-text">name: {{ name }}</div>
      <div>ZooMze</div>
      <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div> -->
      <!-- <div id="myPaletteDiv" style="width: 100px; margin-right: 2px; background-color: #282c34;"></div> -->
      <!-- <div id="myDiagramDiv" style="flex-grow: 1; height: calc( 80vh - 80px ); background-color: #fff;"></div> -->
    </div>
    <div>
      I'm Parent, I have value: "{{ myData }}"
      <button @click="changeTest">Change value in parent</button>
      <son />
    </div>
    <!-- <div id="hook-arguments-example" v-demo:foo.bar.asd="message" /> -->
  </div>
</template>

<script>

// const Big = require('big.js')
// import Big from 'big.js/big.mjs' // 使用big.js解决浮点数的计算错误
import { mapGetters } from 'vuex'
import Son from './Son'
import Vue from 'vue'
// import go from 'gojs'

export default {
  name: 'Dashboard',
  directives: {
    demo: {
      bind(el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  },
  components: { Son },
  provide() {
    return {
      injectValue: _ => this.myData
    }
  },
  data() {
    return {
      message: 'hello',
      myDiagram: null,
      myData: 'test',
      ary: ['10.1', '11.2', '21.3', '10.0', '1.6', '1.1', '1.3']
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  mounted() {
    window.t = this
    // this.myData = this._provided.injectValue
  },
  // mounted() {
  //   // const x = new Big('0.3')
  //   // // const y = this.Big('123456.7e-3')
  //   // // const z = new this.Big(x)
  //   // // x.eq(y) && x.eq(z) && y.eq(z)
  //   // console.log(Number(x.times('2').add(0.1).plus('155.1156452').toPrecision(8)))
  //   // console.log(Number(x))
  //   // console.log(x.toString())
  //   const x = new Big(-8.123456789)
  //   console.log(x.e)
  //   // console.log(x.round(9).toString())
  //   var $ = go.GraphObject.make
  //   const self = this
  //   this.myDiagram = $(go.Diagram, 'myDiagramDiv', {
  //     'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
  //     // 'grid.visible': true,
  //     // 'grid.gridCellSize': new go.Size(200, 200),
  //     // initialContentAlignment: new go.Spot(0, 0),
  //     padding: new go.Margin(100, 100, 100, 100),
  //     initialAutoScale: go.Diagram.Uniform,
  //     layout: $(go.TreeLayout, { layerSpacing: 110, nodeSpacing: 100, angle: 90, alternateNodeSpacing: 100 })
  //   })

  //   const data = {
  //     'class': 'go.GraphLinksModel',
  //     'linkFromPortIdProperty': 'fromPort',
  //     'linkToPortIdProperty': 'toPort',
  //     'nodeDataArray': [
  //       { 'key': -1, 'category': 'Start', 'text': '开始' },
  //       { 'key': 1, 'color': 'red', 'text': '1办公室文秘 (朱茜茜)', 'id': '666' },
  //       { 'key': 2, 'category': 'Conditional', 'loc': '175 400', 'text': '2办公室领导审批 (赵波)' },
  //       { 'key': 3, 'text': '3总经理审批 (马斌)' },
  //       { 'key': 4, 'text': '4相关人员办理' },
  //       { 'key': 5, 'text': '5部门领导 (德吉卓嘎分管部门)' },
  //       { 'key': 6, 'color': 'green', 'text': '6部门领导 (楚光分管部门)' },
  //       { 'key': 7, 'text': '7部门和子公司领导' },
  //       { 'key': 9, 'text': '9办公室办理人' },
  //       { 'key': 10, 'text': '10资源保证部办理人' },
  //       { 'key': 11, 'text': '11人力资源部办理人' },
  //       { 'key': 12, 'text': '12战略策划部办理人' },
  //       { 'key': 13, 'text': '13信息技服务公司办理人' },
  //       { 'key': 14, 'text': '14财务金融审计部办理人' },
  //       { 'key': 15, 'text': '15党建/纪检工作部办理人' },
  //       { 'key': 16, 'text': '16信息安全公司办理人' },
  //       { 'key': 17, 'text': '17文秘合并', 'type': 'end' },
  //       { 'key': -2, 'category': 'End', 'text': '结束' }
  //     ],
  //     'linkDataArray': [
  //       { 'key': 111, 'from': -1, 'to': 1, 'active': true },
  //       { 'key': 222, 'from': 1, 'to': 2, 'active': true },
  //       { 'key': 333, 'from': 2, 'to': 1 },
  //       { 'key': 444, 'from': 2, 'to': 3 },
  //       { 'key': 555, 'from': 3, 'to': 4 },
  //       { 'key': 666, 'from': 4, 'to': 5 },
  //       { 'key': 777, 'from': 4, 'to': 6 },
  //       { 'key': 888, 'from': 4, 'to': 7 },
  //       { 'key': 999, 'from': 5, 'to': 9 },
  //       { 'key': 121, 'from': 5, 'to': 10 },
  //       { 'key': 131, 'from': 5, 'to': 11 },
  //       { 'key': 141, 'from': 5, 'to': 12 },
  //       { 'key': 151, 'from': 5, 'to': 13 },
  //       { 'key': 161, 'from': 5, 'to': 17 },
  //       { 'key': 171, 'from': 4, 'to': 14 },
  //       { 'key': 181, 'from': 4, 'to': 15 },
  //       { 'key': 191, 'from': 6, 'to': 16 },
  //       { 'key': 101, 'from': 6, 'to': 17 },
  //       { 'key': 211, 'from': 7, 'to': 9 },
  //       { 'key': 311, 'from': 7, 'to': 10 },
  //       { 'key': 411, 'from': 7, 'to': 11 },
  //       { 'key': 511, 'from': 7, 'to': 12 },
  //       { 'key': 611, 'from': 7, 'to': 13 },
  //       { 'key': 711, 'from': 7, 'to': 15 },
  //       { 'key': 811, 'from': 7, 'to': 16 },
  //       { 'key': 8111, 'from': 9, 'to': 17 },
  //       { 'key': 8112, 'from': 10, 'to': 17 },
  //       { 'key': 8113, 'from': 11, 'to': 17 },
  //       { 'key': 8114, 'from': 12, 'to': 17 },
  //       { 'key': 8115, 'from': 13, 'to': 17 },
  //       { 'key': 8116, 'from': 15, 'to': 17 },
  //       { 'key': 8117, 'from': 16, 'to': 17 },
  //       { 'key': 911, 'from': 17, 'to': -2 }
  //     ]
  //   }

  //   function textStyle() {
  //     return {
  //       font: 'bold 11pt Lato, Helvetica, Arial, sans-serif',
  //       stroke: '#333'
  //     }
  //   }

  //   // define the Node templates for regular nodes
  //   function nodeSelectionChanged(node) {
  //     if (node.isSelected) {
  //       self.$message.info('点击了了' + node.data.key)
  //     }
  //   }
  //   this.myDiagram.nodeTemplateMap.add('', // the default category
  //     $(go.Node, 'Table',
  //       {
  //         selectionChanged: nodeSelectionChanged
  //       },
  //       // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  //       $(go.Panel, 'Auto',
  //         $(go.Shape, 'Rectangle',
  //           { fill: '#fff', stroke: '#00A9C9', strokeWidth: 3.5 },
  //           new go.Binding('figure', 'figure'),
  //           new go.Binding('stroke', '', function(node) { return node.data.color ? node.data.color : 'yellow' }).ofObject()),
  //         $(go.TextBlock, textStyle(),
  //           {
  //             margin: 15,
  //             textAlign: 'center',
  //             minSize: new go.Size(80, NaN),
  //             maxSize: new go.Size(160, NaN),
  //             wrap: go.TextBlock.WrapFit,
  //             editable: false // 可编辑属性
  //           },
  //           new go.Binding('text').makeTwoWay())
  //       )
  //     )
  //   )

  //   this.myDiagram.nodeTemplateMap.add('Conditional',
  //     $(go.Node, 'Table',
  //       // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
  //       {
  //         selectionChanged: nodeSelectionChanged
  //       },
  //       $(go.Panel, 'Auto',
  //         $(go.Shape, 'Diamond',
  //           { fill: '#fff', stroke: '#00A9C9', strokeWidth: 3.5 },
  //           new go.Binding('figure', 'figure')),
  //         $(go.TextBlock, textStyle(),
  //           {
  //             margin: 10,
  //             maxSize: new go.Size(200, NaN),
  //             wrap: go.TextBlock.WrapFit,
  //             editable: false
  //           },
  //           new go.Binding('text').makeTwoWay())
  //       )
  //     )
  //   )

  //   this.myDiagram.nodeTemplateMap.add('Start',
  //     $(go.Node, 'Table',
  //       $(go.Panel, 'Spot',
  //         $(go.Shape, 'Circle',
  //           { desiredSize: new go.Size(70, 70), fill: '#fff', stroke: '#09d3ac', strokeWidth: 3.5 }),
  //         $(go.TextBlock, 'Start', textStyle(),
  //           new go.Binding('text'))
  //       )
  //     )
  //   )

  //   this.myDiagram.nodeTemplateMap.add('End',
  //     $(go.Node, 'Table',
  //       $(go.Panel, 'Spot',
  //         $(go.Shape, 'Circle',
  //           { desiredSize: new go.Size(60, 60), fill: '#fff', stroke: '#DC3C00', strokeWidth: 3.5 }),
  //         $(go.TextBlock, 'End', textStyle(),
  //           new go.Binding('text'))
  //       )
  //     )
  //   )

  //   // 重写默认的link
  //   this.myDiagram.linkTemplate = $(go.Link,
  //     {
  //       routing: go.Link.AvoidsNodes,
  //       curve: go.Link.JumpOver,
  //       corner: 20,
  //       relinkableFrom: false,
  //       relinkableTo: false,
  //       reshapable: false,
  //       resegmentable: false,
  //       zOrder: 1.5,
  //       selectionChanged(link) {
  //         if (link.isSelected) {
  //           // 拉高层级
  //           self.myDiagram.model.setDataProperty(self.myDiagram.findLinkForKey(link.data.key), 'zOrder', new Date().getTime() / 10000)
  //         } else if (!link.data.active) {
  //           // 在非active的link中将层级降为1
  //           self.myDiagram.model.setDataProperty(self.myDiagram.findLinkForKey(link.data.key), 'zOrder', 1)
  //         }
  //       },
  //       mouseEnter: function(e, link) {
  //         link.findObject('HIGHLIGHT').stroke = 'rgba(30,144,255,0.2)'
  //       },
  //       mouseLeave: function(e, link) {
  //         link.findObject('HIGHLIGHT').stroke = 'transparent'
  //       }
  //     },
  //     new go.Binding('zOrder', 'key'),
  //     $(go.Shape, // the highlight shape, normally transparent
  //       {
  //         isPanelMain: true,
  //         strokeWidth: 10,
  //         stroke: 'transparent',
  //         name: 'HIGHLIGHT'
  //       }
  //     ),
  //     $(go.Shape, // the PATH
  //       { isPanelMain: true, stroke: '#5f5f5f', strokeWidth: 2 },
  //       new go.Binding('stroke', '', function(link) { return link.data.active ? 'red' : '#5f5f5f' }).ofObject(),
  //       new go.Binding('stroke', 'isSelected', function(sel, link) { return sel ? 'dodgerblue' : link.stroke }).ofObject()
  //     ),
  //     $(go.Shape, // the arrowhead
  //       { toArrow: 'triangle', strokeWidth: 0, fill: '#5f5f5f' },
  //       new go.Binding('fill', '', function(link) { return link.data.active ? 'red' : '#5f5f5f' }).ofObject(),
  //       new go.Binding('fill', 'isSelected', function(sel, link) { return sel ? 'dodgerblue' : (link.data.active ? 'red' : link.stroke) }).ofObject(),
  //     ),
  //     $(go.Panel, 'Auto', // the link label, normally not visible
  //       {
  //         visible: false,
  //         name: 'LABEL',
  //         scale: 1.2
  //       },
  //       // new go.Binding('visible', function(link) {return link.reset == 1 ? true : false }).makeTwoWay(),
  //       $(go.Shape, 'RoundedRectangle', // the label shape
  //         { fill: '#1e90ff', strokeWidth: 8, stroke: '#1e90ff' }),
  //       $(go.TextBlock, '默认标题', // the label
  //         {
  //           textAlign: 'center',
  //           font: '10pt helvetica, arial, sans-serif',
  //           stroke: '#fff',
  //           editable: false
  //         },
  //         new go.Binding('text', function(link) { return link.title || '默认内容' }).makeTwoWay())
  //     ),
  //   )
  //   this.myDiagram.model = go.Model.fromJson(JSON.stringify(data))
  //   this.myDiagram.model.linkKeyProperty = 'key'
  //   window.d = this
  //   data.linkDataArray.forEach(item => {
  //     if (this.myDiagram.model.findLinkDataForKey(item.key).active === true) {
  //       this.myDiagram.model.setDataProperty(this.myDiagram.findLinkForKey(item.key), 'stroke', 'red')
  //       this.myDiagram.model.setDataProperty(this.myDiagram.findLinkForKey(item.key), 'zOrder', 9999)
  //     }
  //   })
  // },
  methods: {
    changeTest() {
      this.myData = 'newValue'
    },
    goToPage(name) {
      this.$router.push({ name: name })
    },
    /**
     * @description: 根据精度误差过滤 (一维数组 / 对象数组)中的近似值
     * @param {String} ary 源数据
     * @param {Number} pre 误差范围, 小于此范围的数相邻数据会被过滤
     * @param {String} type 数据类型 default一维数组 object对象数组
     * @param {Array}  keyList 比对的键名数组, 在指定type != default 后必填
     * @return: [] 处理后的数据
     */
    resetAryByPrecision(ary, pre, type = 'default', keyList) {
      const array = ['10.1', '11.2', '21.3', '10.0', '1.6', '1.1', '1.3']
      // const objectArray = [{ lan: '10.1', lat: '10.2' }, { lan: '10.3', lat: '10.6' }, { lan: '11.1', lat: '10.2' }, { lan: '13.1', lat: '13.2' }]
      // console.log(array)
      // console.log(objectArray)
      let result = []
      try {
        if (type === 'default') {
          result = array.filter((item, index, array) => {
            if (index === 0) { // 排除首位
              return true
            } else {
              return Math.abs(item - array[index - 1]) > pre
            }
          })
        } else if (!keyList && !Array.isArray(keyList)) {
          throw new Error('params \'keyList\' error!')
        }
      } catch (err) {
        console.error(err)
      }
      return result
    },
    print() {
      var svgWindow = window.open('', '_blank', 'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=1000, height=800, titlebar=no')
      if (!svgWindow) return // failure to open a new Window
      var svg = this.myDiagram.makeImage({ scale: 1.0 })
      var style = document.createElement('style')
      style.innerHTML = 'img {width: 100vw;}'
      svgWindow.document.body.appendChild(style)
      svgWindow.document.body.appendChild(svg)
      setTimeout(function() { svgWindow.print() }, 1)
    },
    saveImg() {
      // dataurl为去掉了头的base64格式编码
      function dataURLtoBlob(dataurl) {
        // 使用atob方法解码base64
        var raw = window.atob(dataurl)
        // 创建一个存储解码后数据的数组
        var uInt8Array = new Uint8Array(raw.length)
        // blob只能接收二进制编码，需要讲base64转为二进制再塞进去
        for (var i = 0; i < raw.length; ++i) {
          uInt8Array[i] = raw.charCodeAt(i)
        }
        // 这里给了一个返回值，在别的方法掉用传入base64编码就可以得到转化后的blob
        return new Blob([uInt8Array], { type: '' })
      }
      var svg = this.myDiagram.makeImage({ scale: 1.0 })
      const blob = dataURLtoBlob(svg.src.substr(svg.src.indexOf('base64') + 7))
      var a = document.createElement('a')
      a.setAttribute('href', URL.createObjectURL(blob))
      a.setAttribute('download', '流程图.png')
      a.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
